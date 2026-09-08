import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Approach from "@/components/Approach";
import Benefits from "@/components/Benefits";
import Faq from "@/components/Faq";
import LatestPosts from "@/components/LatestPosts";
import MapSection from "@/components/MapSection";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

// Revalida a home periodicamente para que novos textos publicados no
// /admin apareçam na seção de blog sem precisar de um novo deploy.
export const revalidate = 60;

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
        <LatestPosts />
        <MapSection />
        <ContactBar />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
