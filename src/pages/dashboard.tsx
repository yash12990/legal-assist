import QueryForm from "@/components/query-form";
import QueryList from "@/components/query-list";
import Sidebar from "@/components/sidebar";
import StatsCard from "@/components/stats-card";
import { useAuth } from "@/context/AuthContext";
import { DashboardProvider } from "@/context/dashboardContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="flex">
      <DashboardProvider>
        <Sidebar />

        <main className="flex-1 ml-64 p-6 bg-gray-50 min-h-screen">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome, {user?.firstName || "User"} 👋
          </h1>
          <p className="text-gray-600 mb-6">
            Manage your legal queries and explore resources.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <StatsCard title="Total Queries" value="5" />
            <StatsCard title="Pending Queries" value="2" />
            <StatsCard title="Resolved Queries" value="3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <QueryForm />
            <QueryList />
          </div>
        </main>
      </DashboardProvider>
    </div>
  );
};

export default Dashboard;
