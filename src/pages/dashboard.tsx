import QueryForm from "@/components/query-form";
import QueryList from "@/components/query-list";
import Sidebar from "@/components/sidebar";
import StatsCard from "@/components/stats-card";
import { DashboardProvider, useDashboard } from "@/context/dashboardContext";
import ProfileSection from "@/components/profile-section";
import { useAuth } from "@/context/AuthContext";

const DashboardContent = () => {
  const { queries } = useDashboard();
  const { user } = useAuth();

  // Filter queries for this user
  const userQueries = queries.filter((q) => q.userId === user?.email);

  const total = userQueries.length;
  const pending = userQueries.filter((q) => q.status === "Pending").length;
  const resolved = userQueries.filter((q) => q.status === "Resolved").length;

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome, {user?.firstName || "User"} 👋
      </h1>
      <p className="text-gray-600 mb-6">
        Manage your legal queries and explore resources.
      </p>

      <ProfileSection />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatsCard title="Total Queries" value={total} />
        <StatsCard title="Pending Queries" value={pending} />
        <StatsCard title="Resolved Queries" value={resolved} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QueryForm />
        <QueryList />
      </div>
    </>
  );
};

const Dashboard = () => {
  return (
    <div className="flex">
      <DashboardProvider>
        <Sidebar />
        <main className="flex-1 ml-64 p-6 bg-gray-50 min-h-screen">
          <DashboardContent />
        </main>
      </DashboardProvider>
    </div>
  );
};

export default Dashboard;
