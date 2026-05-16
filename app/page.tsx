import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Features from "@/components/Features";
import CampusLife from "@/components/CampusLife";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Programs />
      <Features />
      <CampusLife />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
