import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { LogOut, LayoutDashboard, FileText, User, X } from "lucide-react";
import Logo from "./logo";

const Sidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const linkClasses =
    "flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors duration-200";

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/[0.4] bg-opacity-40 z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      <aside
        className={`bg-white shadow-md h-screen w-64 flex flex-col fixed left-0 top-0 p-4 border-r z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col gap-y-2">
            <Logo className="w-fit" />
            <h2 className="text-2xl font-bold text-blue-700">LegAssist</h2>
          </div>

          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkClasses} ${
                isActive ? "bg-indigo-200 text-indigo-800" : ""
              }`
            }
          >
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>

          <NavLink
            to="/queries"
            className={({ isActive }) =>
              `${linkClasses} ${
                isActive ? "bg-indigo-200 text-indigo-800" : ""
              }`
            }
          >
            <FileText size={20} />
            My Queries
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `${linkClasses} ${
                isActive ? "bg-indigo-200 text-indigo-800" : ""
              }`
            }
          >
            <User size={20} />
            Profile
          </NavLink>
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-6 flex items-center gap-3 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors duration-200"
        >
          <LogOut size={20} />
          Logout
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
