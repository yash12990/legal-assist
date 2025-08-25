import Sidebar from "@/components/sidebar";
import QueryForm from "@/components/query-form";
import QueryList from "@/components/query-list";
import { PlusCircle } from "lucide-react";

const MyQueries = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold text-gray-800">My Queries</h1>

        <p className="text-gray-600 mb-8">
          Manage your legal queries, create new ones, and track their status.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-6 border hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-2 mb-4">
              <PlusCircle size={22} className="text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-800">
                Add a New Query
              </h2>
            </div>
            <QueryForm />
          </div>

          <div className="bg-white rounded-2xl shadow p-6 border hover:shadow-md transition-shadow duration-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Your Queries
            </h2>
            <QueryList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyQueries;
