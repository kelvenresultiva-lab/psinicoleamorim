import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Approach from "@/components/Approach";
import Benefits from "@/components/Benefits";
import Faq from "@/components/Faq";
import MapSection from "@/components/MapSection";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Intro />
        <About />
        <Gallery />
        <Testimonials />
        <Approach />
        <Benefits />
        <Faq />
        <MapSection />
        <ContactBar />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
