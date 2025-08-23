import { Button } from "@/components/ui/button";
import Logo from "./logo";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow bg-white/[0.5] backdrop-blur-xl sticky top-0 z-50">
      <Link to={"/"} className="flex items-center gap-2 cursor-pointer">
        <Logo />

        <h1 className="text-blue-700 text-xl font-semibold">Legal Assist</h1>
      </Link>

      <nav className="hidden md:flex gap-6 text-gray-700">
        <a href="#services" className="hover:text-blue-600">
          Services
        </a>
        <a href="#about" className="hover:text-blue-600">
          About
        </a>
        <a href="#testimonials" className="hover:text-blue-600">
          Testimonials
        </a>
        <a href="#contact" className="hover:text-blue-600">
          Contact
        </a>
      </nav>

      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 py-2">
        Get Started
      </Button>
    </header>
  );
}
