import Logo from "./logo";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow bg-white backdrop-blur-xl sticky top-0 z-50">
      <Link to={"/"} className="flex items-center gap-2 cursor-pointer">
        <Logo />

        <h1 className="text-blue-700 text-xl font-semibold">Legal Assist</h1>
      </Link>

      <nav className="hidden md:flex gap-6 text-gray-700">
        <Link to="" className="hover:text-blue-600">
          Services
        </Link>

        <Link to="/about" target="_blank" className="hover:text-blue-600">
          About
        </Link>

        <Link to="#testimonials" className="hover:text-blue-600">
          Testimonials
        </Link>

        <Link to="#contact" className="hover:text-blue-600">
          Contact
        </Link>
      </nav>

      <Link
        to={"/signup"}
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl px-5 py-2"
      >
        Get Started
      </Link>
    </header>
  );
}
