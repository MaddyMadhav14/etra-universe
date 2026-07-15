import { FiArrowUpRight, FiMail } from "react-icons/fi";
import "../styles/contact.css";

export default function ContactCTA() {
  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-glow contact-glow-one" aria-hidden="true" />
          <div className="contact-glow contact-glow-two" aria-hidden="true" />

          <div className="contact-content">
            <p className="section-label">Start a Project</p>

            <h2 className="contact-title">
              Let&apos;s Create
              <span>What&apos;s Next.</span>
            </h2>

            <p className="contact-description">
              Have a film, game, animation or interactive project in mind?
              Let&apos;s combine creativity and technology to build something
              unforgettable.
            </p>

            <div className="contact-actions">
              <a
                href="mailto:contact@etrauniverse.com"
                className="btn btn-primary"
              >
                Start a Project
                <FiArrowUpRight aria-hidden="true" />
              </a>

              <a
                href="mailto:contact@etrauniverse.com"
                className="contact-email"
              >
                <FiMail aria-hidden="true" />
                contact@etrauniverse.com
              </a>
            </div>
          </div>

          <div className="contact-side" aria-hidden="true">
            <span>ETRA DREAMS</span>
            <span>ETRA GAMING</span>
          </div>
        </div>
      </div>
    </section>
  );
}