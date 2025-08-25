import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";

export type QueryStatus = "Pending" | "In Review" | "Resolved";

export interface Query {
  id: string;
  userId: string;
  text: string;
  status: QueryStatus;
  date: string;
}

interface DashboardContextType {
  queries: Query[];
  addQuery: (text: string) => void;
  editQuery: (id: string, newText: string) => void;
  deleteQuery: (id: string) => void;
  updateQueryStatus: (id: string, status: QueryStatus) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

const readAllQueriesFromStorage = (): Query[] => {
  return JSON.parse(localStorage.getItem("queries") || "[]");
};

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [queries, setQueries] = useState<Query[]>([]);

  // Load queries when user changes
  useEffect(() => {
    if (!user?.email) {
      setQueries([]);
      return;
    }

    const allQueries = readAllQueriesFromStorage();
    const userQueries = allQueries.filter((q) => q.userId === user.email);
    setQueries(userQueries);
  }, [user?.email]);

  // Save new query
  const addQuery = (text: string) => {
    if (!user?.email) {
      toast.error("Please log in first!");
      return;
    }

    const newQuery: Query = {
      id: Date.now().toString(),
      userId: user.email,
      text,
      status: "Pending",
      date: new Date().toISOString(),
    };

    const allQueries = readAllQueriesFromStorage();
    allQueries.push(newQuery);
    localStorage.setItem("queries", JSON.stringify(allQueries));

    setQueries((prev) => [...prev, newQuery]);
  };

  // Edit existing query
  const editQuery = (id: string, newText: string) => {
    const allQueries = readAllQueriesFromStorage();
    const updatedQueries = allQueries.map((q) =>
      q.id === id ? { ...q, text: newText } : q
    );
    localStorage.setItem("queries", JSON.stringify(updatedQueries));

    const userQueries = updatedQueries.filter((q) => q.userId === user?.email);
    setQueries(userQueries);
    toast.success("Query updated!");
  };

  // Delete query
  const deleteQuery = (id: string) => {
    const allQueries = readAllQueriesFromStorage();
    const updatedQueries = allQueries.filter((q) => q.id !== id);
    localStorage.setItem("queries", JSON.stringify(updatedQueries));

    const userQueries = updatedQueries.filter((q) => q.userId === user?.email);
    setQueries(userQueries);
    toast.success("Query deleted!");
  };

  // Update query status
  const updateQueryStatus = (id: string, status: QueryStatus) => {
    const allQueries = readAllQueriesFromStorage();
    const updatedQueries = allQueries.map((q) =>
      q.id === id ? { ...q, status } : q
    );
    localStorage.setItem("queries", JSON.stringify(updatedQueries));

    const userQueries = updatedQueries.filter((q) => q.userId === user?.email);
    setQueries(userQueries);
  };

  return (
    <DashboardContext.Provider
      value={{ queries, addQuery, editQuery, deleteQuery, updateQueryStatus }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within DashboardProvider");
  }
  return context;
};
