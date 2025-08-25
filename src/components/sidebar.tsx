import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { LogOut, LayoutDashboard, FileText, User } from "lucide-react";

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const linkClasses =
    "flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors duration-200";

  return (
    <aside className="bg-white shadow-md h-screen w-64 flex flex-col fixed left-0 top-0 p-4 border-r">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">
        LegAssist
      </h2>

      <nav className="flex-1 space-y-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? "bg-indigo-200 text-indigo-800" : ""}`
          }
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/queries"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? "bg-indigo-200 text-indigo-800" : ""}`
          }
        >
          <FileText size={20} />
          My Queries
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? "bg-indigo-200 text-indigo-800" : ""}`
          }
        >
          <User size={20} />
          Profile
        </NavLink>
      </nav>

      <button
        onClick={handleLogout}
        className="mt-6 flex items-center gap-3 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors duration-200"
      >
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
