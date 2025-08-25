import { Brain, Scale, Shield, Users } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function HeroSection() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <section className="h-[calc(100vh-68px)] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Your Personal AI-Powered Legal Assistant
        </h1>

        <p className="mt-4 text-lg text-blue-100 max-w-lg">
          Get instant, accurate, and affordable legal guidance powered by
          advanced AI technology. Our platform connects you with top lawyers and
          provides intelligent solutions to all your legal challenges.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          {isAuthenticated ? (
            // ✅ If logged in → Go to Dashboard button
            <Button
              onClick={() => navigate("/dashboard")}
              className="bg-white text-blue-700 hover:bg-blue-100 rounded-xl px-6 py-3 font-semibold shadow-md transition duration-300"
            >
              Go to Dashboard
            </Button>
          ) : (
            // ✅ If NOT logged in → Show Get Started (Login/Signup)
            <Button
              onClick={() => navigate("/login")}
              className="bg-white text-blue-700 hover:bg-blue-100 rounded-xl px-6 py-3 font-semibold shadow-md transition duration-300"
            >
              Get Started
            </Button>
          )}

          {/* Explore Services button - always visible */}
          <Button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-white text-white hover:bg-blue-600 rounded-xl px-6 py-3 font-semibold shadow-md transition duration-300"
          >
            Explore Services
          </Button>
        </div>

        {/* Features */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-blue-100">
          <div className="flex flex-col items-center sm:items-start gap-2 hover:scale-105 transition">
            <Brain size={32} className="text-white" />
            <p className="text-sm">AI-Powered Insights</p>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-2 hover:scale-105 transition">
            <Shield size={32} className="text-white" />
            <p className="text-sm">Secure & Confidential</p>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-2 hover:scale-105 transition">
            <Users size={32} className="text-white" />
            <p className="text-sm">Expert Lawyer Network</p>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-2 hover:scale-105 transition">
            <Scale size={32} className="text-white" />
            <p className="text-sm">Fair & Transparent Pricing</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="AI Legal Assistance"
          className="rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg hover:scale-105 transition duration-300"
        />
      </div>
    </section>
  );
}
