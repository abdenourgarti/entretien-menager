import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section2 from "@/components/WhyChooseUs";
import Section3 from "@/components/ServicesSection";
import Section5 from "@/components/AvisSection";
import Section4 from "@/components/HowItWorks";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}
