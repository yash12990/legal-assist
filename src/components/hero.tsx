// import { Shield, FileText, Users, Phone } from "lucide-react";
import { Brain, Scale, Shield, Users } from "lucide-react";
import { Button } from "./ui/button";
// import { Card, CardContent } from "./ui/card";

export default function HeroSection() {
  return (
    <div className="h-[calc(100svh-68px)] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          AI-Powered Legal Assistance for Everyone
        </h1>
        <p className="mt-4 text-lg text-blue-100 max-w-lg">
          Get instant, accurate, and affordable legal guidance powered by
          advanced AI technology. Our platform connects you with top lawyers and
          provides intelligent solutions to all your legal challenges.
        </p>
        <div className="mt-6 flex gap-4">
          <Button className="bg-white text-blue-700 hover:bg-blue-100 rounded-xl px-5 py-3">
            Get Free Consultation
          </Button>
          <Button className="border border-white text-white hover:bg-blue-600 rounded-xl px-5 py-3">
            Explore Services
          </Button>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 text-blue-100">
          <div className="flex items-center gap-3">
            <Brain size={30} className="text-white" />
            <p className="text-sm">AI-Powered Insights</p>
          </div>
          <div className="flex items-center gap-3">
            <Shield size={30} className="text-white" />
            <p className="text-sm">Secure & Confidential</p>
          </div>
          <div className="flex items-center gap-3">
            <Users size={30} className="text-white" />
            <p className="text-sm">Expert Lawyer Network</p>
          </div>
          <div className="flex items-center gap-3">
            <Scale size={30} className="text-white" />
            <p className="text-sm">Fair & Transparent Pricing</p>
          </div>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        alt="AI Legal Assistance"
        className="md:w-1/2 rounded-2xl shadow-lg mt-10 md:mt-0"
      />
    </div>
  );
}
{
  /* Services Section */
}
{
  /* <section id="services" className="px-6 md:px-20 py-16 text-center">
        <h3 className="text-3xl font-bold mb-10 text-gray-800">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="rounded-2xl shadow hover:shadow-lg transition">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Shield size={40} className="text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Legal Protection</h4>
              <p className="text-gray-600">
                Comprehensive legal support for individuals and businesses.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow hover:shadow-lg transition">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <FileText size={40} className="text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Documentation</h4>
              <p className="text-gray-600">
                Quick drafting and verification of legal documents and
                contracts.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow hover:shadow-lg transition">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Users size={40} className="text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Expert Lawyers</h4>
              <p className="text-gray-600">
                Connect with top legal professionals for specialized advice.
              </p>
            </CardContent>
          </Card>
        </div>
      </section> */
}

{
  /* Why Choose Us */
}
{
  /* <section
        id="about"
        className="bg-gray-100 px-6 md:px-20 py-16 text-center"
      >
        <h3 className="text-3xl font-bold mb-10 text-gray-800">
          Why Choose LegalEase?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl shadow bg-white hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Trusted Advisors</h4>
            <p className="text-gray-600">
              We ensure complete transparency and legal accuracy in all
              consultations.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-white hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">24/7 Support</h4>
            <p className="text-gray-600">
              Round-the-clock assistance whenever you need legal help.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-white hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Affordable Pricing</h4>
            <p className="text-gray-600">
              Get top-notch legal services without breaking your budget.
            </p>
          </div>
        </div>
      </section> */
}

{
  /* Testimonials */
}
{
  /* <section id="testimonials" className="px-6 md:px-20 py-16 text-center">
        <h3 className="text-3xl font-bold mb-10 text-gray-800">
          What Our Clients Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6">
              <p className="italic text-gray-600">
                "LegalEase made my business registration seamless and
                stress-free!"
              </p>
              <h4 className="mt-4 font-semibold">— Riya Sharma</h4>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6">
              <p className="italic text-gray-600">
                "Their lawyers handled my property dispute with utmost
                professionalism."
              </p>
              <h4 className="mt-4 font-semibold">— Aarav Mehta</h4>
            </CardContent>
          </Card>
        </div>
      </section> */
}

{
  /* Call to Action */
}
{
  /* <section
        id="contact"
        className="bg-blue-700 text-white px-6 md:px-20 py-16 text-center"
      >
        <h3 className="text-3xl font-bold mb-4">Need Legal Help?</h3>
        <p className="text-blue-100 mb-6">
          Our experts are ready to guide you. Get your free consultation today.
        </p>
        <Button className="bg-white text-blue-700 hover:bg-blue-100 px-6 py-3 rounded-xl text-lg flex items-center gap-2 mx-auto">
          <Phone size={20} /> Contact Us
        </Button>
      </section> */
}
