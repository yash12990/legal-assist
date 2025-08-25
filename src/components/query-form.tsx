import { useState } from "react";
import { useDashboard } from "@/context/dashboardContext";

const QueryForm = () => {
  const [query, setQuery] = useState("");
  const { addQuery } = useDashboard();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    addQuery(trimmed);
    setQuery("");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border">
      <h2 className="text-xl font-semibold mb-4">New Legal Query</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your legal query..."
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
        >
          Add Query
        </button>
      </form>
    </div>
  );
};

export default QueryForm;
