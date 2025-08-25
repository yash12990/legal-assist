import { useEffect, useState } from "react";

export type Queries = {
  date: string;
  id: number;
  status: string;
  text: string;
};

const QueryList = () => {
  const [queries, setQueries] = useState<Queries[]>([]);
  console.log("🚀 ~ QueryList ~ queries:", queries);

  // Fetch queries from localStorage whenever they change
  const fetchQueries = () => {
    const storedQueries = JSON.parse(localStorage.getItem("queries") || "[]");
    setQueries(storedQueries);
  };

  useEffect(() => {
    fetchQueries();

    // Listen for localStorage changes (useful if query added from another tab/component)
    const handleStorageChange = () => fetchQueries();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border">
      <h2 className="text-xl font-semibold mb-4">Saved Legal Queries</h2>

      {queries.length === 0 ? (
        <p className="text-gray-500">No queries added yet.</p>
      ) : (
        <ul className="space-y-2">
          {queries.map((query, idx) => (
            <li
              key={query.id}
              className="p-3 bg-indigo-50 rounded-lg border border-indigo-100"
            >
              {idx}. {query.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QueryList;
