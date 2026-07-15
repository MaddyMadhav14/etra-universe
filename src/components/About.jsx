import { FiArrowUpRight } from "react-icons/fi";
import "../styles/about.css";

const stats = [
  {
    value: "02",
    label: "Creative Divisions",
  },
  {
    value: "06+",
    label: "Core Capabilities",
  },
  {
    value: "01",
    label: "Shared Vision",
  },
];

export default function About() {
  return (
    <section className="about-section section" id="about">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-visual-bg" aria-hidden="true" />

          <div className="about-visual-content">
            <span className="about-visual-label">ETRA Universe</span>

            <h3>
              Built by artists.
              <span>Powered by technology.</span>
            </h3>
          </div>

          <div className="about-orbit about-orbit-one" aria-hidden="true" />
          <div className="about-orbit about-orbit-two" aria-hidden="true" />
        </div>

        <div className="about-content">
          <p className="section-label">About ETRA Universe</p>

          <h2 className="about-title">
            One Team.
            <span>Infinite Possibilities.</span>
          </h2>

          <div className="about-copy">
            <p>
              ETRA Universe brings together artists, designers, developers and
              technologists to create powerful visual experiences across film,
              gaming, animation and interactive media.
            </p>

            <p>
              Through ETRA Dreams and ETRA Gaming, we combine cinematic
              storytelling with technology-driven creativity to build
              experiences that connect, engage and inspire.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="about-link">
            Start a Conversation
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}