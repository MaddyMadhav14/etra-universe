import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UniverseCards from "@/components/UniverseCards";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header />

      <main>
        <Hero />

        <Reveal>
          <UniverseCards />
        </Reveal>

        <Reveal delay={0.05}>
          <About />
        </Reveal>

        <Reveal delay={0.05}>
          <ContactCTA />
        </Reveal>
      </main>

      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}