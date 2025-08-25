import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { useDashboard } from "@/context/dashboardContext";

const QueryList = () => {
  const { queries, editQuery, deleteQuery, updateQueryStatus } = useDashboard();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedText, setEditedText] = useState("");

  const startEdit = (id: string, text: string) => {
    setEditingId(id);
    setEditedText(text);
  };

  const saveEdit = (id: string) => {
    const trimmed = editedText.trim();
    if (trimmed) editQuery(id, trimmed);
    setEditingId(null);
    setEditedText("");
  };

  return (
    <div className="bg-white sm:p-6 p-0 rounded-2xl shadow-sm border">
      {/* <h2 className="text-xl font-semibold mb-4">Saved Legal Queries</h2> */}

      {queries.length === 0 ? (
        <p className="text-gray-500">No queries added yet.</p>
      ) : (
        <ul className="space-y-3">
          {queries.map((q) => (
            <li
              key={q.id}
              className="flex items-center justify-between sm:p-4 p-3 bg-indigo-50 rounded-lg border border-indigo-100"
            >
              <div className="flex flex-col">
                {editingId === q.id ? (
                  <input
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className="border rounded-md px-2 py-1 text-sm"
                  />
                ) : (
                  <span className="text-gray-700 font-medium">{q.text}</span>
                )}

                <div className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                  <span>{new Date(q.date).toDateString()}</span>
                  <span>•</span>
                  <select
                    value={q.status}
                    onChange={(e) =>
                      updateQueryStatus(q.id, e.target.value as any)
                    }
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                      q.status === "Resolved"
                        ? "bg-green-100 text-green-700"
                        : q.status === "In Review"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Review">In Review</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {editingId === q.id ? (
                  <button
                    onClick={() => saveEdit(q.id)}
                    className="px-3 py-1 text-xs rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => startEdit(q.id, q.text)}
                    className="p-2 text-indigo-600 hover:bg-indigo-100 rounded-full transition"
                    aria-label="Edit"
                  >
                    <Pencil size={16} />
                  </button>
                )}

                <button
                  onClick={() => deleteQuery(q.id)}
                  className="p-2 text-red-500 hover:bg-red-100 rounded-full transition"
                  aria-label="Delete"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QueryList;
