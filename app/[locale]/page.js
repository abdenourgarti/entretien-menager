import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section2 from "@/components/WhyChooseUs";
import Section3 from "@/components/ServicesSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}
