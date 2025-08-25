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

function readAllQueriesFromStorage(): Query[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: Query[] = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function readQueriesForUser(userId: string): Query[] {
  return readAllQueriesFromStorage().filter((q) => q.userId === userId);
}

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser") || "null"
  );
  const [queries, setQueries] = useState<Query[]>(
    readQueriesForUser(loggedInUser.email)
  );

  useEffect(() => {
    const allQueries = readAllQueriesFromStorage();

    const otherUsersQueries = allQueries.filter(
      (q) => q.userId !== loggedInUser.email
    );

    const updated = [...queries, ...otherUsersQueries];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }, [queries, loggedInUser.email]);

  const addQuery = (text: string) => {
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
