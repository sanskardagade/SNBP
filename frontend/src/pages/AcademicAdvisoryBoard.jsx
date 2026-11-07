import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { academicAdvisors } from "../content/academicAdvisors.js";

const categories = ["All", "Industry", "Academic"];

function initials(name) {
  return name
    .replace(/^(Mr|Mrs|Ms|Dr|Prof|Adv)\.?\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function AdvisorCard({ advisor }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#2e1a47]/10 bg-white shadow-[0_12px_36px_rgba(46,26,71,.06)]">
      <div className="flex items-center gap-4 border-b border-[#2e1a47]/10 p-5 sm:p-6">
        <div className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-full bg-[#f2eee5] font-heading text-xl font-semibold text-[#2e1a47]">
          {advisor.photo ? (
            <img
              src={advisor.photo}
              alt={`${advisor.name}, profile`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <span aria-hidden="true">{initials(advisor.name)}</span>
          )}
        </div>
        <div className="min-w-0">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#92752e]">
            {advisor.category} {advisor.relationship}
          </p>
          <h2 className="mt-1 font-heading text-lg font-semibold leading-snug text-[#2e1a47] sm:text-xl">
            {advisor.name}
          </h2>
          <p className="mt-1 text-sm leading-5 text-[#6b5b80]">{advisor.role}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-semibold leading-6 text-[#3d3444]">{advisor.organization}</p>
        <p className="mt-3 flex-1 text-sm leading-6 text-[#6b6470]">{advisor.highlight}</p>
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Programmes">
          {advisor.programs.map((program) => (
            <span
              key={program}
              className="rounded-full bg-[#f4f0e7] px-3 py-1 text-xs font-semibold text-[#4c3a5c]"
            >
              {program}
            </span>
          ))}
        </div>
        <div className="mt-5 border-t border-[#2e1a47]/10 pt-4">
          {advisor.linkedin ? (
            <a
              href={advisor.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#4a3265] underline decoration-[#c9a84c] underline-offset-4 hover:text-[#802030]"
            >
              LinkedIn profile <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : (
            <p className="text-sm text-[#766d7b]">LinkedIn profile available on request</p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function AcademicAdvisoryBoard() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredAdvisors = useMemo(() => {
    const searchTerm = query.trim().toLocaleLowerCase();
    return academicAdvisors.filter((advisor) => {
      const matchesCategory = category === "All" || advisor.category === category;
      const searchableText = [
        advisor.name,
        advisor.role,
        advisor.organization,
        advisor.highlight,
        advisor.programs.join(" "),
      ]
        .join(" ")
        .toLocaleLowerCase();
      return matchesCategory && (!searchTerm || searchableText.includes(searchTerm));
    });
  }, [category, query]);

  const industryCount = academicAdvisors.filter((advisor) => advisor.category === "Industry").length;
  const academicCount = academicAdvisors.length - industryCount;

  return (
    <div className="bg-[#faf8f5]">
      <section className="relative overflow-hidden bg-[#2e1a47] px-5 py-16 text-white sm:px-8 sm:py-20">
        <div
          className="pointer-events-none absolute -right-32 -top-44 h-[460px] w-[460px] rounded-full border border-white/10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-16 -top-28 h-[330px] w-[330px] rounded-full border border-[#c9a84c]/30"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1250px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e6c96f]">
            SNBP School of Business Management
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Academic Advisory Board
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Meet the industry leaders, academicians and entrepreneurs who share their experience
            with our students through mentoring, expert talks, live projects and academic guidance.
          </p>
          <div className="mt-9 flex flex-wrap gap-x-10 gap-y-4">
            <p>
              <span className="block font-heading text-3xl font-semibold text-[#e6c96f]">
                {academicAdvisors.length}
              </span>
              <span className="mt-1 block text-sm text-white/75">Mentors &amp; advisors</span>
            </p>
            <p>
              <span className="block font-heading text-3xl font-semibold text-[#e6c96f]">
                {industryCount}
              </span>
              <span className="mt-1 block text-sm text-white/75">Industry experts</span>
            </p>
            <p>
              <span className="block font-heading text-3xl font-semibold text-[#e6c96f]">
                {academicCount}
              </span>
              <span className="mt-1 block text-sm text-white/75">Academic experts</span>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1250px] px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm text-[#716879]">
              Showing <strong className="text-[#2e1a47]">{filteredAdvisors.length}</strong> of{" "}
              <strong className="text-[#2e1a47]">{academicAdvisors.length}</strong> profiles
            </p>
            <div className="mt-4 flex flex-wrap gap-2" aria-label="Filter advisors by category">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    category === item
                      ? "border-[#2e1a47] bg-[#2e1a47] text-white"
                      : "border-[#2e1a47]/20 bg-white text-[#4a3b54] hover:border-[#2e1a47]"
                  }`}
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                >
                  {item === "All" ? `All (${academicAdvisors.length})` : item}
                </button>
              ))}
            </div>
          </div>
          <label className="flex min-h-12 w-full items-center gap-3 rounded-lg border border-[#2e1a47]/15 bg-white px-4 text-[#6b5b80] shadow-sm lg:max-w-[390px]">
            <Search size={18} aria-hidden="true" />
            <span className="sr-only">Search advisors</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search name, expertise or programme"
              className="min-w-0 flex-1 bg-transparent text-sm text-[#2e1a47] outline-none placeholder:text-[#8c8390]"
            />
          </label>
        </div>

        {filteredAdvisors.length ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredAdvisors.map((advisor) => (
              <AdvisorCard key={`${advisor.category}-${advisor.name}`} advisor={advisor} />
            ))}
          </div>
        ) : (
          <p className="mt-8 rounded-xl border border-dashed border-[#2e1a47]/25 bg-white px-6 py-12 text-center text-[#6b6470]">
            No advisors match that search. Try another name, expertise or programme.
          </p>
        )}
      </section>
    </div>
  );
}
