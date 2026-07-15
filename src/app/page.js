import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UniverseCards from "@/components/UniverseCards";
import Strengths from "@/components/Strengths";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Reveal>
          <UniverseCards />
        </Reveal>

        <Reveal delay={0.05}>
          <Strengths />
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