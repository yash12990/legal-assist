import {
  createContext,
  useState,
  useEffect,
  type ReactNode,
  useContext,
} from "react";

export type QueryStatus = "Pending" | "In Review" | "Resolved";

export type Query = {
  date: string;
  id: string;
  status: QueryStatus;
  text: string;
};

export type DashboardContextType = {
  queries: Query[];
  addQuery: (text: string) => void;
  editQuery: (id: string, newText: string) => void;
  deleteQuery: (id: string) => void;
  updateStatus: (id: string, status: QueryStatus) => void;
  clearAll: () => void; // handy for testing/reset
};

const STORAGE_KEY = "queries";

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

export const useDashboard = () => {
  const ctx = useContext(DashboardContext);
  if (!ctx)
    throw new Error("useDashboard must be used within DashboardProvider");
  return ctx;
};

// Safely parse JSON + migrate any legacy formats
function readQueriesFromStorage(): Query[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) return [];

    // If previous implementation stored plain strings, migrate them
    if (parsed.length > 0 && typeof parsed[0] === "string") {
      const now = Date.now();
      return (parsed as string[]).map((text, i) => ({
        id: `${now}-${i}`,
        text,
        status: "Pending" as const,
        date: new Date().toLocaleString(),
      }));
    }

    // Assume it's already the correct shape
    return parsed as Query[];
  } catch {
    return [];
  }
}

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  // ✅ Initialize from localStorage BEFORE first render (prevents wipe)
  const [queries, setQueries] = useState<Query[]>(() =>
    readQueriesFromStorage()
  );

  // ✅ Persist any updates
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(queries));
  }, [queries]);

  const addQuery = (text: string) => {
    const newQuery: Query = {
      id: Date.now().toString(),
      date: new Date().toLocaleString(),
      status: "Pending",
      text,
    };
    // Prepend so newest shows first (feel free to change order)
    setQueries((prev) => [newQuery, ...prev]);
  };

  const editQuery = (id: string, newText: string) => {
    setQueries((prev) =>
      prev.map((q) => (q.id === id ? { ...q, text: newText } : q))
    );
  };

  const deleteQuery = (id: string) => {
    setQueries((prev) => prev.filter((q) => q.id !== id));
  };

  const updateStatus = (id: string, status: QueryStatus) => {
    setQueries((prev) => prev.map((q) => (q.id === id ? { ...q, status } : q)));
  };

  const clearAll = () => setQueries([]);

  return (
    <DashboardContext.Provider
      value={{
        queries,
        addQuery,
        editQuery,
        deleteQuery,
        updateStatus,
        clearAll,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
