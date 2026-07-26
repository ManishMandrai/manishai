import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <HowItWorks />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
