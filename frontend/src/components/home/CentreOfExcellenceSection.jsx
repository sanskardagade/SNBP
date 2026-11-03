import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  ClipboardCheck,
  Code2,
  Lightbulb,
  Presentation,
  Users,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading.jsx";

const icons = [
  Presentation,
  Code2,
  BriefcaseBusiness,
  Lightbulb,
  Users,
  ClipboardCheck,
  BookOpen,
  Award,
];

export default function CentreOfExcellenceSection({ items = [] }) {
  if (!items.length) return null;

  return (
    <section className="home-practice section-pad bg-[#faf8f3]" id="centre-of-excellence">
      <div className="container-width">
        <div className="home-practice-heading">
          <SectionHeading
            eyebrow="Try it. Test it. Learn from it."
            title="Practice is where ideas get interesting."
            description="From masterclasses and bootcamps to project mentoring, explore hands-on learning opportunities featured at SNBP."
          />
          <span className="home-practice-mark" aria-hidden="true">Make<br />learn<br />repeat.</span>
        </div>

        <div className="home-practice-list">
          {items.map((entry, index) => {
            const title = typeof entry === "string" ? entry : entry.title;
            const Icon = icons[index % icons.length];

            return (
              <article
                key={title}
                className="home-practice-item"
              >
                <span className="home-practice-icon">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <span className="home-practice-index">0{index + 1}</span>
                <h3>{title}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
