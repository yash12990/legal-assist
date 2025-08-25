import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Adjust path if needed
import Logo from "./logo";

export default function Header() {
  const { user, logout } = useAuth();
  // const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    // navigate("/login");
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-200">
      <Link to="/" className="flex items-center gap-2 cursor-pointer">
        <Logo />
        <h1 className="text-blue-700 text-xl font-bold tracking-tight">
          Legal Assist
        </h1>
      </Link>

      <div className="flex items-center gap-8">
        <nav className="hidden md:flex gap-8 text-gray-700 text-sm font-medium">
          <a href="#services" className="hover:text-blue-600 transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-blue-600 transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl px-5 py-2 transition-all shadow-md"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-semibold rounded-xl px-5 py-2 transition-all shadow"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl px-5 py-2 transition-all shadow-md"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
