import SectionHeading from "../common/SectionHeading.jsx";
import {
  BookOpenCheck,
  Globe2,
  Handshake,
  Lightbulb,
  MapPin,
  Users,
} from "lucide-react";

const icons = [Users, BookOpenCheck, Handshake, Globe2, Lightbulb, MapPin];

export default function PillarsSection({ pillars = [] }) {
  return (
    <section className="home-pillars section-pad bg-mist">
      <div className="container-width">
        <div className="home-pillars-intro">
          <SectionHeading
            eyebrow="More than what fits on a syllabus"
            title="What you learn matters. How you grow matters too."
            description="Different ways to learn, question, make and work with others—inside and beyond your programme."
          />
          <p className="home-pillars-aside">An education is not one thing. It is the ideas you follow, the people you meet and the work you learn to do.</p>
        </div>
        <div className="home-pillars-list">
          {pillars.map((pillar, index) => {
            const Icon = icons[index % icons.length] || Lightbulb;

            return (
              <article
                key={pillar.title}
                className="home-pillar group"
              >
                <span className="home-pillar-number">0{index + 1}</span>
                <span className="home-pillar-icon">
                  <Icon size={23} strokeWidth={1.8} />
                </span>
                <div className="home-pillar-copy">
                  <h3 className="heading-serif">{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
                <span className="home-pillar-arrow" aria-hidden="true">↗</span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
