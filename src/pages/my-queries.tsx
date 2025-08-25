import Sidebar from "@/components/sidebar";
import QueryForm from "@/components/query-form";
import QueryList from "@/components/query-list";
import { PlusCircle, ListTodo } from "lucide-react";
import { useState } from "react";

const MyQueries = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        } p-6 sm:p-8`}
      >
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Queries</h1>
          <p className="text-gray-600 mt-1">
            Manage your legal queries, create new ones, and track their status.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Add New Query Card */}
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <PlusCircle size={22} className="text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-800">
                Add a New Query
              </h2>
            </div>
            <QueryForm />
          </div>

          {/* Your Queries List Card */}
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <ListTodo size={22} className="text-green-600" />
              <h2 className="text-xl font-semibold text-gray-800">
                Your Queries
              </h2>
            </div>
            <QueryList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyQueries;
