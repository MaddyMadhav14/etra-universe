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
            <p className="section-label">Let s Connect</p>

            <h2 className="contact-title">
              Let&apos;s Build
              <span>Something Extraordinary.</span>
            </h2>

            <p className="contact-description">
             Whether you-re looking for visual effects, gaming, animation or creative digital experiences, our team is ready to bring your ideas to life.
            </p>

            <div className="contact-actions">
              <a
                href="mailto:contact@etrauniverse.com"
                className="btn btn-primary"
              >
               Let s Connect
                <FiArrowUpRight aria-hidden="true" />
              </a>

              <a
                href="mailto:contact@etrauniverse.com"
                className="contact-email"
              >
                <FiMail aria-hidden="true" />
                hello@etradreams.com
              </a>
            </div>
          </div>

          <div className="contact-side" aria-hidden="true">
           <span>ETRA VFX</span>
            <span>ETRA GAMING & ANIMATIONS</span>
          </div>
        </div>
      </div>
    </section>
  );
}