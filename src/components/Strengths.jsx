import {
  FiFilm,
  FiLayers,
  FiBox,
  FiCpu,
  FiMonitor,
  FiZap,
} from "react-icons/fi";
import "../styles/strengths.css";

const strengths = [
  {
    icon: FiFilm,
    title: "Visual Effects",
    description:
      "Cinematic visual effects crafted for film, television and digital content.",
  },
  {
    icon: FiLayers,
    title: "Roto & Paint",
    description:
      "Precision rotoscopy, clean-up, paint and production-ready finishing.",
  },
  {
    icon: FiBox,
    title: "3D Animation",
    description:
      "High-quality 3D animation, motion and visual storytelling.",
  },
  {
    icon: FiCpu,
    title: "Game Development",
    description:
      "Interactive gameplay experiences built through art and technology.",
  },
  {
    icon: FiMonitor,
    title: "CGI & VFX",
    description:
      "Photoreal CGI and visual solutions for entertainment and brands.",
  },
  {
    icon: FiZap,
    title: "VR & Interactive",
    description:
      "Immersive AR, VR and interactive experiences beyond traditional screens.",
  },
];

export default function Strengths() {
  return (
    <section className="strengths-section section" id="strengths">
      <div className="container">
        <div className="strengths-heading">
          <p className="section-label">What We Create</p>

          <h2 className="section-title">
            Our Creative
            <span> Strengths</span>
          </h2>
        </div>

        <div className="strengths-grid">
          {strengths.map((item, index) => {
            const Icon = item.icon;

            return (
              <article className="strength-card" key={item.title}>
                <div className="strength-card-top">
                  <span className="strength-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="strength-icon" aria-hidden="true">
                    <Icon />
                  </div>
                </div>

                <div className="strength-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}