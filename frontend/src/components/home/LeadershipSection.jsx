import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading.jsx";

export default function LeadershipSection({ leadership = [] }) {
  const [index, setIndex] = useState(0);
  const leader = leadership[index];
  if (!leader) return null;

  const prev = () => setIndex((i) => (i === 0 ? leadership.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === leadership.length - 1 ? 0 : i + 1));

  return (
    <section className="section-pad">
      <div className="container-width">
        <SectionHeading
          eyebrow="Our Leadership"
          title="Guiding SNBP University with decades of educational excellence"
          center
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid items-center gap-8 rounded-2xl bg-white p-6 shadow-soft sm:grid-cols-[220px_1fr] sm:p-10">
            <img
              src={leader.image}
              alt={leader.name}
              className="mx-auto h-52 w-52 rounded-full object-cover ring-4 ring-gold/40"
              loading="lazy"
            />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gold">{leader.role}</p>
              <h3 className="heading-serif mt-2 text-2xl font-bold text-purplebrand">{leader.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{leader.bio}</p>
              <p className="mt-4 text-xs text-slate-500">
                Currently showing {leader.name}, {leader.role}
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <button type="button" onClick={prev} className="grid h-10 w-10 place-items-center rounded-full border border-purplebrand/20 text-purplebrand" aria-label="Previous leader">
              <ChevronLeft size={20} />
            </button>
            <button type="button" onClick={next} className="grid h-10 w-10 place-items-center rounded-full border border-purplebrand/20 text-purplebrand" aria-label="Next leader">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
