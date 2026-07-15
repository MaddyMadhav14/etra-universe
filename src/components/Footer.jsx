import { FiArrowUpRight } from "react-icons/fi";
import "../styles/footer.css";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <a href="#home" className="footer-brand" aria-label="ETRA Universe home">
            <span className="footer-brand-main">ETRA</span>
            <span className="footer-brand-sub">UNIVERSE</span>
          </a>

          <p className="footer-intro">
            One creative universe connecting cinematic visual effects,
            animation, gaming and interactive experiences.
          </p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-column">
            <p className="footer-column-title">Explore</p>

            <a href="#home">Home</a>
            <a href="#universe">Our Universe</a>
            <a href="#strengths">Our Strengths</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <p className="footer-column-title">Our Worlds</p>

            <a
              href="https://www.etradreams.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ETRA Dreams
              <FiArrowUpRight aria-hidden="true" />
            </a>

            <a
              href="https://etra-gaming.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ETRA Gaming
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="footer-column">
            <p className="footer-column-title">Connect</p>

            <a href="mailto:contact@etrauniverse.com">
              contact@etrauniverse.com
            </a>

            <a href="#" aria-label="ETRA Universe LinkedIn">
              LinkedIn
              <FiArrowUpRight aria-hidden="true" />
            </a>

            <a href="#" aria-label="ETRA Universe Instagram">
              Instagram
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} ETRA Universe. All Rights Reserved.</p>

          <a href="#home" className="footer-back-top">
            Back to Top
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}