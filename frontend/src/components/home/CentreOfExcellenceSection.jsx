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
    <section className="section-pad bg-[#faf8f3]" id="centre-of-excellence">
      <div className="container-width">
        <SectionHeading
          eyebrow="Learn by doing"
          title="Centre of Excellence"
          description="Industry-led learning and hands-on practice help students build skills for the careers ahead."
          center
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((entry, index) => {
            const title = typeof entry === "string" ? entry : entry.title;
            const Icon = icons[index % icons.length];

            return (
              <article
                key={title}
                className="flex min-h-40 flex-col justify-between rounded-xl border border-[#e9e2d4] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#f4efe4] text-purplebrand">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 text-sm font-bold leading-6 text-purplebrand">{title}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
