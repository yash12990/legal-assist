import Header from "@/components/header";
import HeroSection from "@/components/hero";
import Footer from "@/components/ui/footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <HeroSection />

      <div className="h-screen bg-white"></div>
      <div className="h-screen bg-black"></div>
      <div className="h-screen bg-red-500"></div>

      <Footer />
    </>
  );
}
