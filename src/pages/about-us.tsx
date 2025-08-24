import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import { ShieldCheck, Users, Lightbulb } from "lucide-react";

export default function AboutUs() {
  return (
    <>
      <main className="bg-gray-50 min-h-screen py-12 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              About <span className="text-blue-600">Legal Assist</span>
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              At Legal Assist, we aim to make **legal guidance simple,
              accessible, and affordable** for everyone. Our AI-powered
              solutions help you understand your rights, draft documents, and
              connect with legal experts.
            </p>
          </div>

          {/* Mission - Vision - Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="shadow-md border-none hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex flex-col items-center text-center p-6">
                <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Our Mission
                </h3>
                <p className="text-gray-600 mt-2">
                  To empower individuals and businesses with **reliable legal
                  assistance** through technology, making law more accessible to
                  everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md border-none hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex flex-col items-center text-center p-6">
                <Lightbulb className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Our Vision
                </h3>
                <p className="text-gray-600 mt-2">
                  A world where **legal help is just a click away**, empowering
                  people to make informed decisions and safeguard their rights.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md border-none hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex flex-col items-center text-center p-6">
                <Users className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Our Values
                </h3>
                <p className="text-gray-600 mt-2">
                  **Transparency, reliability, and innovation** drive us to
                  deliver high-quality legal solutions for every user.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Story Section */}
          <div className="bg-white shadow-lg rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Founded in 2025, **Legal Assist** was created with a simple goal:
              to make legal services **affordable and accessible** for everyone.
              Whether you need to draft an agreement, file a complaint, or
              understand your legal rights, our platform provides **AI-powered
              solutions** and connects you with expert lawyers in seconds.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
