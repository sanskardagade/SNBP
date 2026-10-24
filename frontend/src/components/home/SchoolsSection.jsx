import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Download } from "lucide-react";
import SectionHeading from "../common/SectionHeading.jsx";

export default function SchoolsSection({ schools = [] }) {
  const [active, setActive] = useState(schools[0]?.id || "");

  return (
    <section className="section-pad bg-purplebrand text-white">
      <div className="container-width">
        <SectionHeading
          eyebrow="Explore Our Schools"
          title="Where academic rigour meets real-world application"
          light
          center
        />

        <div className="mt-12 space-y-4">
          {schools.map((school) => {
            const open = active === school.id;
            return (
              <div key={school.id} className="overflow-hidden rounded-xl border border-white/15 bg-white/5">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  onClick={() => setActive(open ? "" : school.id)}
                  aria-expanded={open}
                >
                  <span className="heading-serif text-lg font-bold">{school.name}</span>
                  <ChevronDown className={`shrink-0 transition ${open ? "rotate-180" : ""}`} />
                </button>
                {open ? (
                  <div className="grid gap-6 border-t border-white/10 px-5 pb-6 pt-4 sm:grid-cols-[1fr_280px] sm:px-6">
                    <ul className="space-y-2 text-sm text-white/85">
                      {school.programs.map((program) => (
                        <li key={program} className="flex gap-2">
                          <span className="text-gold">•</span>
                          {program}
                        </li>
                      ))}
                    </ul>
                    <div>
                      <img
                        src={school.image}
                        alt=""
                        className="h-40 w-full rounded-lg object-cover"
                        loading="lazy"
                      />
                      <div className="mt-4 flex flex-wrap gap-3">
                        <a href="#brochure" className="inline-flex items-center gap-2 text-xs font-bold uppercase text-gold">
                          <Download size={14} /> Download Brochure
                        </a>
                        <Link to="/academics" className="text-xs font-bold uppercase text-white/90 hover:text-gold">
                          Explore more
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
