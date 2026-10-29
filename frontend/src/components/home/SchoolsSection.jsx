import { Link } from "react-router-dom";
import { ArrowUpRight, Download, GraduationCap } from "lucide-react";
import SectionHeading from "../common/SectionHeading.jsx";

export default function SchoolsSection({ schools = [] }) {
  return (
    <section className="section-pad bg-purplebrand text-white" id="schools">
      <div className="container-width">
        <SectionHeading
          eyebrow="Explore Our Schools"
          title="Where academic rigour meets real-world application"
          light
          center
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {schools.map((school) => (
            <article
              key={school.id || school.name}
              className="overflow-hidden rounded-2xl bg-white text-slate-800 shadow-xl"
            >
              <div className="relative h-52 overflow-hidden sm:h-64">
                <img
                  src={school.image}
                  alt={school.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#21143b]/85 via-[#21143b]/10 to-transparent" />
                <h3 className="heading-serif absolute bottom-5 left-5 right-5 text-2xl font-bold text-white sm:left-7 sm:text-3xl">
                  {school.name}
                </h3>
              </div>
              <div className="p-5 sm:p-7">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-purplebrand">
                  <GraduationCap size={18} className="text-gold" />
                  <span>Explore programmes</span>
                </div>
                <ul className="mt-4 divide-y divide-slate-100">
                  {(school.programs || []).map((program) => {
                    const name = typeof program === "string" ? program : program.name;
                    const to = typeof program === "string" ? undefined : program.to;

                    return (
                      <li key={name} className="py-2.5 text-sm leading-6">
                        {to ? (
                          <Link
                            to={to}
                            className="group flex items-center justify-between gap-3 text-slate-700 transition hover:text-purplebrand"
                          >
                            <span>{name}</span>
                            <ArrowUpRight
                              size={16}
                              className="shrink-0 text-gold opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                            />
                          </Link>
                        ) : (
                          <span className="text-slate-700">{name}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                  {school.brochure ? (
                    <a
                      href={school.brochure}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-purplebrand transition hover:text-bluebrand"
                    >
                      <Download size={16} /> Download brochure
                    </a>
                  ) : null}
                  <Link
                    to={school.to || (school.id === "technology"
                      ? "/school-of-technology"
                      : "/school-of-arts-commerce-science")}
                    className="inline-flex items-center gap-2 text-sm font-bold text-purplebrand transition hover:text-bluebrand"
                  >
                    Explore more <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
