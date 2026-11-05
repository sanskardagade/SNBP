import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Download, GraduationCap, Search, X } from "lucide-react";
import SectionHeading from "../common/SectionHeading.jsx";

export default function SchoolsSection({ schools = [] }) {
  const [query, setQuery] = useState("");
  const [activeSchool, setActiveSchool] = useState("all");
  const visibleSchools = useMemo(() => {
    const search = query.trim().toLocaleLowerCase();
    return schools
      .filter((school) => activeSchool === "all" || school.id === activeSchool)
      .map((school) => {
        const programs = (school.programs || []).filter((program) => {
          const name = typeof program === "string" ? program : program.name;
          return !search || school.name.toLocaleLowerCase().includes(search) || name.toLocaleLowerCase().includes(search);
        });
        return { ...school, programs };
      })
      .filter((school) => school.programs.length > 0);
  }, [activeSchool, query, schools]);

  return (
    <section className="home-schools section-pad bg-purplebrand text-white" id="schools">
      <div className="container-width">
        <SectionHeading
          eyebrow="Start with what interests you"
          title="Find the discipline that moves your ambition forward."
          description="From technology to arts, commerce and science, explore the programmes and follow the questions that hold your attention."
          light
          center
        />

        <div className="academic-explorer" aria-label="Academic programme explorer">
          <div className="academic-explorer-tools">
            <label className="academic-search">
              <Search size={18} aria-hidden="true" />
              <span className="sr-only">Search programmes</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Find a programme"
              />
              {query ? (
                <button type="button" onClick={() => setQuery("")} aria-label="Clear programme search">
                  <X size={17} />
                </button>
              ) : null}
            </label>
            <div className="academic-filters" aria-label="Filter by school">
              {[
                { id: "all", label: "All schools" },
                ...schools.map((school) => ({ id: school.id, label: school.name })),
              ].map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={activeSchool === filter.id}
                  onClick={() => setActiveSchool(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {visibleSchools.length ? (
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {visibleSchools.map((school) => (
            <article
              key={school.id || school.name}
              className="home-school-card overflow-hidden bg-white text-slate-800"
            >
              <div className="home-school-image relative h-52 overflow-hidden sm:h-64">
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
              <div className="home-school-content p-5 sm:p-7">
              <div className="home-school-subhead flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-purplebrand">
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
                    to={school.to || "/school-of-arts-commerce-science"}
                    className="inline-flex items-center gap-2 text-sm font-bold text-purplebrand transition hover:text-bluebrand"
                  >
                    Explore more <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
            </div>
          ) : (
            <p className="academic-empty" role="status">No programmes match that search. Try another name or school.</p>
          )}
        </div>
      </div>
    </section>
  );
}
