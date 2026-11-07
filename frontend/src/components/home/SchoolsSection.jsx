import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { ArrowUpRight, Download, GraduationCap, Search, X } from "lucide-react";
import SectionHeading from "../common/SectionHeading.jsx";

export default function SchoolsSection({ schools = [] }) {
  const [query, setQuery] = useState("");
  const [activeSchool, setActiveSchool] = useState("all");
  const [selectedBrochure, setSelectedBrochure] = useState(null);
  const [brochureForm, setBrochureForm] = useState({ name: "", email: "", phone: "" });
  const [brochureError, setBrochureError] = useState("");
  const brochureNameRef = useRef(null);
  const brochureTriggerRef = useRef(null);

  useEffect(() => {
    if (!selectedBrochure) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    brochureNameRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") closeBrochureDialog();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      brochureTriggerRef.current?.focus();
    };
  }, [selectedBrochure]);

  function openBrochureDialog(school, trigger) {
    brochureTriggerRef.current = trigger;
    setBrochureForm({ name: "", email: "", phone: "" });
    setBrochureError("");
    setSelectedBrochure({ url: school.brochure, name: school.name });
  }

  function closeBrochureDialog() {
    setSelectedBrochure(null);
  }

  function submitBrochureRequest(event) {
    event.preventDefault();
    if (!selectedBrochure) return;

    const details = {
      name: brochureForm.name.trim(),
      email: brochureForm.email.trim(),
      phone: brochureForm.phone.trim()
    };
    if (!details.name || !details.email || !details.phone) {
      setBrochureError("Please fill in your name, email, and mobile number.");
      return;
    }

    const brochureWindow = window.open(selectedBrochure.url, "_blank");
    if (!brochureWindow) {
      setBrochureError("Please allow pop-ups to open your brochure in a new tab.");
      return;
    }

    brochureWindow.opener = null;
    closeBrochureDialog();
  }

  function trapBrochureDialogTab(event) {
    if (event.key !== "Tab") return;

    const focusableElements = event.currentTarget.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement?.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement?.focus();
    }
  }

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
                    <button
                      type="button"
                      onClick={(event) => openBrochureDialog(school, event.currentTarget)}
                      className="inline-flex items-center gap-2 text-sm font-bold text-purplebrand transition hover:text-bluebrand"
                    >
                      <Download size={16} /> Download brochure
                    </button>
                  ) : null}
                  <Link
                    to={school.to || "/school-of-management"}
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
      {selectedBrochure
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#160f20]/75 p-3 backdrop-blur-sm sm:p-6"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) closeBrochureDialog();
              }}
            >
              <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="brochure-dialog-title"
                className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-3xl flex-col overflow-hidden rounded-lg bg-white shadow-2xl sm:max-h-[calc(100dvh-3rem)]"
                onKeyDown={trapBrochureDialogTab}
              >
                <header className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-7">
                  <div>
                    <h2 id="brochure-dialog-title" className="text-xl font-bold text-purplebrand">
                      Get the brochure
                    </h2>
                    <p className="mt-1 text-sm text-slate-600">
                      Enter your details to open the {selectedBrochure.name} brochure in a new tab.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={closeBrochureDialog}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-purplebrand"
                    aria-label="Close brochure dialog"
                  >
                    <X size={20} aria-hidden="true" />
                  </button>
                </header>

                <form onSubmit={submitBrochureRequest} className="grid gap-4 p-5 sm:grid-cols-2 sm:p-7">
                    <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
                      Full name
                      <input
                        ref={brochureNameRef}
                        required
                        maxLength={120}
                        autoComplete="name"
                        value={brochureForm.name}
                        onChange={(event) =>
                          setBrochureForm((form) => ({ ...form, name: event.target.value }))
                        }
                        className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal outline-none focus:border-purplebrand"
                      />
                    </label>
                    <label className="text-sm font-semibold text-slate-700">
                      Email
                      <input
                        required
                        type="email"
                        maxLength={254}
                        autoComplete="email"
                        value={brochureForm.email}
                        onChange={(event) =>
                          setBrochureForm((form) => ({ ...form, email: event.target.value }))
                        }
                        className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal outline-none focus:border-purplebrand"
                      />
                    </label>
                    <label className="text-sm font-semibold text-slate-700">
                      Mobile number
                      <input
                        required
                        type="tel"
                        maxLength={40}
                        autoComplete="tel"
                        value={brochureForm.phone}
                        onChange={(event) =>
                          setBrochureForm((form) => ({ ...form, phone: event.target.value }))
                        }
                        className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal outline-none focus:border-purplebrand"
                      />
                    </label>
                    {brochureError ? (
                      <p role="alert" className="text-sm text-red-700 sm:col-span-2">
                        {brochureError}
                      </p>
                    ) : null}
                    <button
                      type="submit"
                      className="rounded-lg bg-[#c9a326] px-5 py-3 text-sm font-bold uppercase tracking-wide text-[#2e1a47] transition hover:bg-[#dfbd45] sm:col-span-2"
                    >
                      Submit and view brochure
                    </button>
                </form>
              </section>
            </div>,
            document.body
          )
        : null}
    </section>
  );
}
