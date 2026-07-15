
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">Welcome to ETRA World</p>

          <h1 className="hero-title">
            One World.
            <span>Infinite Creativity.</span>
          </h1>

          <p className="hero-description">
            From cinematic visual effects to immersive gaming experiences, we
            create, innovate and inspire across powerful creative worlds.
          </p>
        </div>

        <div className="hero-meta">
          <span>ETRA Dreams</span>
          <span>ETRA Gaming</span>
        </div>
      </div>
    </section>
  );
}