import { useState } from "react";
import Sidebar from "@/components/sidebar";
import StatsCard from "@/components/stats-card";
import { DashboardProvider, useDashboard } from "@/context/dashboardContext";
import { useAuth } from "@/context/AuthContext";
import { FileText, Clock, CheckCircle, Menu } from "lucide-react";

const DashboardContent = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const { queries } = useDashboard();
  const { user } = useAuth();

  const userQueries = queries.filter((q) => q.userId === user?.email);

  const total = userQueries.length;
  const pending = userQueries.filter((q) => q.status === "Pending").length;
  const resolved = userQueries.filter((q) => q.status === "Resolved").length;

  return (
    <>
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Welcome, {user?.firstName || "User"} 👋
        </h1>
        {/* Hamburger Menu (Only for Mobile) */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg bg-indigo-100 hover:bg-indigo-200 transition"
        >
          <Menu size={24} className="text-indigo-600" />
        </button>
      </div>

      <p className="text-gray-600 mb-6 text-sm sm:text-base">
        Here’s an overview of your activity and progress.
      </p>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
        <StatsCard
          title="Total Queries"
          value={total}
          icon={<FileText size={22} />}
        />
        <StatsCard
          title="Pending Queries"
          value={pending}
          icon={<Clock size={22} />}
        />
        <StatsCard
          title="Resolved Queries"
          value={resolved}
          icon={<CheckCircle size={22} />}
        />
      </div>

      {/* User Info + Queries */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md border border-indigo-100 flex-1 h-[240px]">
          {user ? (
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full text-lg font-bold shadow-inner">
                  {user.firstName?.charAt(0).toUpperCase() || "U"}
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-500 tracking-wide">
                    Full Name
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    {user.firstName} {user.lastName}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase text-gray-500 tracking-wide">
                  Email
                </p>
                <p className="text-base font-medium text-gray-800">
                  {user.email}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase text-gray-500 tracking-wide">
                  Last Login
                </p>
                <p className="text-base font-medium text-gray-800">
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-sm italic">
              No user data available
            </p>
          )}
        </div>

        {/* Queries Card */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-indigo-100 flex-1 flex flex-col  h-[240px]">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Your Queries
          </h2>
          {userQueries.length > 0 ? (
            <div className="flex-1 overflow-y-auto pr-2 max-h-[170px]">
              <div className="space-y-4">
                {userQueries.map((query) => (
                  <div
                    key={query.id}
                    className="p-4 border rounded-xl shadow-sm hover:shadow-md transition bg-gray-50"
                  >
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {query.text}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          query.status === "Resolved"
                            ? "bg-green-100 text-green-700"
                            : query.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {query.status}
                      </span>
                      <span className="text-xs text-gray-500">
                        {query.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-sm italic">
              You haven’t added any queries yet.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex relative">
      <DashboardProvider>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 lg:ml-64 p-4 sm:p-6 bg-gray-50 min-h-screen">
          <DashboardContent onMenuClick={() => setSidebarOpen(true)} />
        </main>
      </DashboardProvider>
    </div>
  );
};

export default Dashboard;
