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
  userId: string;
};

export type DashboardContextType = {
  queries: Query[];
  addQuery: (text: string) => void;
  editQuery: (id: string, newText: string) => void;
  deleteQuery: (id: string) => void;
  updateStatus: (id: string, status: QueryStatus) => void;
  clearAll: () => void;
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

function readAllQueriesFromStorage(): Query[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: Query[] = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser") || "null"
  );

  const [queries, setQueries] = useState<Query[]>(() => {
    if (loggedInUser?.email) {
      return readAllQueriesFromStorage().filter(
        (q) => q.userId === loggedInUser.email
      );
    }
    return [];
  });

  // ✅ Whenever queries change, update localStorage safely
  useEffect(() => {
    const allQueries = readAllQueriesFromStorage();
    const otherUsersQueries = allQueries.filter(
      (q) => q.userId !== loggedInUser?.email
    );
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...queries, ...otherUsersQueries])
    );
  }, [queries]);

  const addQuery = (text: string) => {
    if (!loggedInUser?.email) return;

    const newQuery: Query = {
      id: Date.now().toString(),
      date: new Date().toLocaleString(),
      status: "Pending",
      text,
      userId: loggedInUser.email,
    };
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
