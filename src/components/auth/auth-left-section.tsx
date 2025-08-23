// import { Gavel } from "lucide-react";
import { Gavel } from "lucide-react";
// import Logo from "../logo";

export default function AuthLeftSection() {
  return (
    <div className="hidden md:flex flex-col items-center justify-center bg-blue-600 text-white p-10 relative">
      <Gavel size={70} className="mb-6 drop-shadow-lg" />
      <h1 className="text-3xl font-bold mb-4">
        Create Your Legal Assist Account
      </h1>
      <p className="text-lg text-blue-100 text-center">
        Join thousands of users simplifying their legal journey with our
        AI-powered platform.
      </p>
      <div className="absolute bottom-6 text-xs text-blue-200">
        © 2025 Legal Assist. All Rights Reserved.
      </div>
    </div>
    // <div className="hidden md:flex flex-col items-center justify-center bg-blue-600 text-white p-10 relative">
    //   {/* <Gavel size={70} className="mb-6 drop-shadow-lg" /> */}
    //   <Logo className="text-blue-700 bg-white text-6xl p-4 mb-12" />

    //   <h1 className="text-3xl font-bold mb-4">AI-Powered Legal Assistance</h1>

    //   <p className="text-lg text-blue-100 text-center">
    //     Get instant legal solutions, expert guidance, and document assistance —
    //     all in one place.
    //   </p>

    //   <div className="absolute bottom-6 text-xs text-blue-200">
    //     © 2025 LegalEase. All Rights Reserved.
    //   </div>
    // </div>
  );
}
