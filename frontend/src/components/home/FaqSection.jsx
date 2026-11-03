import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading.jsx";
import Accordion from "../common/Accordion.jsx";

export default function FaqSection({ faqs = [] }) {
  return (
    <section className="home-faq section-pad bg-mist">
      <div className="container-width">
        <div className="home-faq-layout">
          <div className="home-faq-intro">
            <SectionHeading
              eyebrow="Before you take the next step"
              title="Good questions deserve clear answers."
              description="Start with the details students and families ask us about most."
            />
            <Link className="home-text-link" to="/admissions">Explore admissions <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="home-faq-accordion">
            <Accordion items={faqs} className="home-faq-list" />
          </div>
        </div>
      </div>
    </section>
  );
}
