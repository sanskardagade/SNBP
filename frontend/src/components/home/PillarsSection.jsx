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
    <section className="section-pad bg-mist">
      <div className="container-width">
        <SectionHeading
          eyebrow="Pillars of Excellence"
          title="We don't just educate. We empower."
          center
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = icons[index % icons.length] || Lightbulb;

            return (
              <article
                key={pillar.title}
                className="group rounded-2xl border border-[#e7e1d4] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft sm:p-7"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#f5f0e5] text-purplebrand transition group-hover:bg-purplebrand group-hover:text-gold">
                  <Icon size={23} strokeWidth={1.8} />
                </span>
                <h3 className="heading-serif mt-5 text-lg font-bold text-purplebrand">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
