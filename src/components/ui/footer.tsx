import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Legal Assist. All Rights Reserved.
        </p>

        {/* Right - Links */}
        <div className="flex gap-6 text-sm">
          <Link
            to="/about"
            target="_blank"
            className="hover:text-white transition-colors duration-200"
          >
            About
          </Link>

          <Link
            to="/privacy"
            className="hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </Link>

          <Link
            to="/terms"
            className="hover:text-white transition-colors duration-200"
          >
            Terms of Service
          </Link>

          <Link
            to="/contact"
            className="hover:text-white transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
