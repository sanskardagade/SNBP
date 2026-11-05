import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDownToLine, ArrowRight, BriefcaseBusiness, ChevronLeft, ChevronRight } from "lucide-react";
import { siteMeta } from "../constants/siteMeta.js";
import { aiEdgeFeatures, industryFeatures, aiPrograms } from "../content/aiPrograms.js";
import { asset } from "../constants/assets.js";

const programOrder = ["bba", "bca", "mca", "mba"];
const programmeHero = asset("/assets/SOA%20pgms-HLybrV_l.png");
const campusImage = asset("/assets/Untitled%20design-CYPUEzTN.webp");

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9b7a29]">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-[#2e1a47] md:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}

function ProgramFacts({ program }) {
  return (
    <dl className="grid gap-3 border-y border-[#2e1a47]/10 py-4 text-sm sm:grid-cols-3">
      {[
        ["Duration", program.duration],
        ["Eligibility", program.eligibility],
        ["Intake", program.intake],
      ].map(([label, value]) => (
        <div key={label}>
          <dt className="font-semibold text-[#2e1a47]">{label}</dt>
          <dd className="mt-1 leading-6 text-slate-600">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ProgramDetails({ program }) {
  return (
    <article
      id={program.slug}
      className="ai-tadka scroll-mt-24 rounded-2xl border border-[#2e1a47]/10 bg-white p-6 shadow-[0_12px_34px_rgba(46,26,71,0.07)] sm:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9b7a29]">{program.tagline}</p>
          <h3 className="mt-2 font-heading text-2xl font-semibold text-[#2e1a47] sm:text-3xl">
            {program.title}
          </h3>
          <p className="mt-2 font-heading font-semibold text-[#806426]">{program.headline}</p>
        </div>
        <Link className="btn-primary shrink-0" to={program.path}>
          Explore {program.slug.toUpperCase()}
        </Link>
      </div>
      <p className="mt-5 max-w-4xl leading-7 text-slate-600">{program.description}</p>
      <div className="mt-6">
        <ProgramFacts program={program} />
      </div>
      <div className="mt-7 grid gap-7 md:grid-cols-2">
        <div>
          <h4 className="font-heading text-lg font-semibold text-[#2e1a47]">What makes it different</h4>
          <ul className="mt-3 space-y-2.5 text-sm leading-6 text-slate-600">
            {program.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span aria-hidden="true" className="text-[#b08d35]">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-5">
          <div>
            <h4 className="font-heading text-lg font-semibold text-[#2e1a47]">Specialisations</h4>
            <p className="mt-2 text-sm leading-6 text-slate-600">{program.specialisations.join(" | ")}</p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold text-[#2e1a47]">Case study</h4>
            <p className="mt-2 text-sm leading-6 text-slate-600">{program.caseStudy}</p>
          </div>
        </div>
      </div>
      <div className="mt-7 grid gap-5 border-t border-[#2e1a47]/10 pt-6 sm:grid-cols-2">
        <p className="text-sm leading-6 text-slate-600">
          <strong className="text-[#2e1a47]">Taught by: </strong>{program.taughtBy}
        </p>
        <p className="text-sm leading-6 text-slate-600">
          <strong className="text-[#2e1a47]">Careers: </strong>{program.careers.join(", ")}.
        </p>
      </div>
    </article>
  );
}

function SharedBenefits() {
  return (
    <>
      <section className="ai-tadka bg-[#f5f0e8] px-5 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[1220px]">
          <SectionTitle
            eyebrow="The AI edge"
            title="Included in every program"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiEdgeFeatures.map((feature) => (
              <article key={feature.title} className="rounded-xl bg-white p-6">
                <h3 className="font-heading text-lg font-semibold text-[#2e1a47]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="ai-tadka px-5 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[1220px]">
          <SectionTitle
            eyebrow="Learn from people who work in the industry"
            title="Real experience in every subject"
            description="Every subject in BBA, BCA, MCA and MBA is taught and supported by highly experienced professionals from renowned industries. They bring current tools, real client problems and honest career advice into the classroom, so what you study today is what companies use tomorrow."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industryFeatures.map((feature) => (
              <article key={feature.title} className="rounded-xl border border-[#2e1a47]/10 bg-white p-6">
                <h3 className="font-heading text-lg font-semibold text-[#2e1a47]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProgramsTable() {
  return (
    <section className="ai-tadka bg-[#f5f0e8] px-5 py-16 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-[1220px]">
        <SectionTitle eyebrow="Find your fit" title="Compare the programs" />
        <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
          <table className="w-full min-w-[740px] border-collapse text-left text-sm">
            <thead className="bg-[#2e1a47] text-white">
              <tr>
                {["Program", "Duration", "Focus", "Best for", "Signature project"].map((heading) => (
                  <th key={heading} className="px-5 py-4 font-semibold">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {programOrder.map((key) => {
                const program = aiPrograms[key];
                return (
                  <tr key={key} className="border-b border-slate-100 last:border-0">
                    <th scope="row" className="px-5 py-4 font-semibold text-[#2e1a47]">
                      <Link className="hover:underline" to={program.path}>{program.shortTitle}</Link>
                    </th>
                    <td className="px-5 py-4 text-slate-600">{program.duration}</td>
                    <td className="px-5 py-4 text-slate-600">{program.focus}</td>
                    <td className="px-5 py-4 text-slate-600">{program.bestFor}</td>
                    <td className="px-5 py-4 text-slate-600">{program.signatureProject}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="ai-tadka bg-[#2e1a47] px-5 py-14 text-center text-[#f3e8c8] sm:px-8">
      <h2 className="font-heading text-3xl font-semibold md:text-4xl">Ready to build your AI-powered career?</h2>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link to="/admissions" className="inline-flex min-h-11 items-center rounded-full bg-[#f3e8c8] px-6 py-2.5 text-sm font-semibold text-[#2e1a47] transition hover:bg-white">
          Apply Now
        </Link>
        <Link to="/contact-us" className="inline-flex min-h-11 items-center rounded-full border border-[#f3e8c8]/60 px-6 py-2.5 text-sm font-semibold transition hover:bg-white/10">
          Talk to a Counsellor
        </Link>
      </div>
      <p className="mt-5 text-sm text-[#f3e8c8]/75">
        <span className="inline-flex flex-wrap justify-center gap-x-3 gap-y-1">
          <a className="underline underline-offset-4" href="https://snbpuniversity.com">Website</a>
          <span aria-hidden="true">|</span>
          <a className="underline underline-offset-4" href={`tel:${siteMeta.phones[0].replace(/[^\d+]/g, "")}`}>
            {siteMeta.phones[0]}
          </a>
          <span aria-hidden="true">|</span>
          <a className="underline underline-offset-4" href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
        </span>
      </p>
    </section>
  );
}

function ProgramHero({ program }) {
  const facts = [
    ["Duration", program.duration],
    ["Level", program.level],
    ["Focus", program.focus],
    ["Intake", program.intake],
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#2e1a47] text-[#f3e8c8]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(201,162,39,0.2),transparent_38%),linear-gradient(110deg,#2e1a47_0%,#382354_60%,#241438_100%)]"
        />
        <img
          src={programmeHero}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[58%] object-contain object-right md:block lg:w-[56%]"
        />
        <div className="relative mx-auto flex min-h-[430px] max-w-[1500px] items-center px-5 py-12 sm:px-8 md:min-h-[550px] md:px-10 md:py-16">
          <div className="relative z-10 max-w-[650px] md:w-[52%]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e6c96f]">
              School of Arts, Commerce &amp; Science
            </p>
            <h1 className="mt-5 font-heading text-[2.4rem] font-semibold leading-[1.08] sm:text-5xl lg:text-[3.7rem]">
              {program.degreeTitle}
            </h1>
            <p className="mt-4 font-heading text-lg font-semibold text-[#e6c96f] sm:text-xl">
              {program.headline}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#about-programme"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#e6c96f] px-5 py-2.5 text-sm font-bold text-[#2e1a47] transition hover:bg-[#f3e8c8]"
              >
                Explore Programme <ArrowRight size={17} />
              </a>
              <Link
                to="/admissions"
                className="inline-flex min-h-11 items-center rounded-full border border-[#f3e8c8]/65 px-5 py-2.5 text-sm font-semibold text-[#f3e8c8] transition hover:bg-white/10"
              >
                Enquire Now
              </Link>
            </div>
          </div>
          <img
            src={programmeHero}
            alt=""
            aria-hidden="true"
            className="pointer-events-none mx-auto mt-8 block max-h-[320px] w-full object-contain object-bottom md:hidden"
          />
        </div>
      </section>

      <section aria-label={`${program.shortTitle} programme facts`} className="bg-[#faf8f5] px-4 py-5 sm:px-8 md:py-7">
        <div className="mx-auto grid max-w-[1220px] grid-cols-2 overflow-hidden rounded-2xl shadow-[0_14px_38px_rgba(46,26,71,0.12)] md:grid-cols-4">
          {facts.map(([label, value], index) => (
            <article
              key={label}
              className={`flex min-h-[112px] flex-col justify-center px-4 py-5 text-center sm:px-6 ${
                index === 1
                  ? "bg-[#c9a84c] text-[#2e1a47]"
                  : index === 3
                    ? "bg-[#2e1a47] text-[#f3e8c8]"
                    : "bg-[#f3e8c8] text-[#2e1a47]"
              }`}
            >
              <p className="font-heading text-lg font-semibold leading-snug sm:text-xl">{value}</p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] opacity-75 sm:text-xs">
                {label}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ProgramOverview({ program }) {
  return (
    <section id="about-programme" className="ai-tadka bg-[#faf8f5] px-5 py-14 sm:px-8 md:py-20 lg:px-10">
      <div className="mx-auto grid max-w-[1320px] items-center gap-8 md:gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b7a29]">
            Why this programme
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-[#2e1a47] sm:text-4xl">
            {program.title}
          </h2>
          <p className="mt-5 leading-7 text-[#514a58]">{program.description}</p>
          <p className="mt-4 text-sm leading-7 text-[#514a58]">
            <strong className="text-[#2e1a47]">Eligibility: </strong>
            {program.eligibility}
          </p>
          <p className="mt-4 text-sm leading-7 text-[#514a58]">
            <strong className="text-[#2e1a47]">Learning with industry: </strong>
            {program.taughtBy}
          </p>
          <a
            href={program.brochureUrl}
            download
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#2e1a47] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4a3068]"
          >
            <ArrowDownToLine size={17} />
            Download Brochure
          </a>
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-[#2e1a47] shadow-[0_18px_48px_rgba(46,26,71,0.18)]">
          <img
            src={campusImage}
            alt="SNBP University campus"
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover"
          />
          <div className="bg-[#2e1a47] px-6 py-5 text-[#f3e8c8] sm:px-8 sm:py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e6c96f]">
              Applied learning
            </p>
            <p className="mt-2 font-heading text-lg font-semibold">{program.caseStudy}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function getFeatureDetails(feature) {
  const separator = feature.indexOf(":");
  return separator === -1
    ? { title: feature, description: feature }
    : {
        title: feature.slice(0, separator).trim(),
        description: feature.slice(separator + 1).trim(),
      };
}

function CurriculumFocus({ program }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = getFeatureDetails(program.features[activeIndex]);

  function moveFeature(direction) {
    setActiveIndex((index) => (index + direction + program.features.length) % program.features.length);
  }

  return (
    <section className="ai-tadka bg-[#f3efe8] px-5 py-14 sm:px-8 md:py-20 lg:px-10">
      <div className="mx-auto max-w-[1220px]">
        <div className="mb-9 text-center md:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b7a29]">
            Curriculum focus
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-[#2e1a47] sm:text-4xl">
            What Will You Explore?
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:gap-8">
          <ol className="grid gap-2 sm:grid-cols-2 md:grid-cols-1">
            {program.features.map((feature, index) => {
              const details = getFeatureDetails(feature);
              const selected = index === activeIndex;
              return (
                <li key={feature}>
                  <button
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActiveIndex(index)}
                    className={`flex min-h-14 w-full items-center gap-4 rounded-xl border px-4 py-3 text-left transition ${
                      selected
                        ? "border-[#2e1a47] bg-[#2e1a47] text-white shadow-md"
                        : "border-[#2e1a47]/10 bg-white text-[#2e1a47] hover:border-[#c9a84c]"
                    }`}
                  >
                    <span className={`font-heading text-sm font-semibold ${selected ? "text-[#e6c96f]" : "text-[#9b7a29]"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold leading-snug">{details.title}</span>
                  </button>
                </li>
              );
            })}
          </ol>
          <div
            aria-live="polite"
            className="flex min-h-[250px] flex-col justify-center rounded-2xl bg-[#2e1a47] p-6 text-[#f3e8c8] shadow-[0_16px_40px_rgba(46,26,71,0.15)] sm:p-9"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e6c96f]">
              Focus {String(activeIndex + 1).padStart(2, "0")} of {String(program.features.length).padStart(2, "0")}
            </p>
            <h3 className="mt-4 font-heading text-2xl font-semibold sm:text-3xl">{activeFeature.title}</h3>
            <p className="mt-4 max-w-xl leading-7 text-white/80">{activeFeature.description}</p>
            <div className="mt-7 flex gap-2">
              <button
                type="button"
                aria-label="Previous curriculum focus"
                onClick={() => moveFeature(-1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition hover:bg-white/10"
              >
                <ChevronLeft size={19} />
              </button>
              <button
                type="button"
                aria-label="Next curriculum focus"
                onClick={() => moveFeature(1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition hover:bg-white/10"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgrammePathways({ program }) {
  return (
    <section className="ai-tadka bg-[#faf8f5] px-5 py-14 sm:px-8 md:py-20 lg:px-10">
      <div className="mx-auto max-w-[1220px]">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b7a29]">
            Areas to explore
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-[#2e1a47] sm:text-4xl">
            Build Your Expertise
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {program.specialisations.map((specialisation, index) => (
            <article
              key={specialisation}
              className={`flex min-h-36 flex-col justify-between rounded-2xl p-5 sm:p-6 ${
                index % 2 === 0 ? "bg-[#f3e8c8] text-[#2e1a47]" : "bg-[#2e1a47] text-white"
              }`}
            >
              <span className={`font-heading text-sm font-semibold ${index % 2 === 0 ? "text-[#9b7a29]" : "text-[#e6c96f]"}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold leading-snug">{specialisation}</h3>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-slate-600">
          <strong className="text-[#2e1a47]">Case study: </strong>
          {program.caseStudy}
        </p>
      </div>
    </section>
  );
}

function CareerDirections({ program }) {
  return (
    <section className="ai-tadka bg-[#f3efe8] px-5 py-14 sm:px-8 md:py-20 lg:px-10">
      <div className="mx-auto max-w-[1220px]">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b7a29]">
            After graduation
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-[#2e1a47] sm:text-4xl">
            Career Directions
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {program.careers.map((career) => (
            <article
              key={career}
              className="flex min-h-32 items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_10px_28px_rgba(46,26,71,0.07)] sm:p-6"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#2e1a47] text-[#e6c96f]">
                <BriefcaseBusiness size={20} aria-hidden="true" />
              </span>
              <h3 className="font-heading text-base font-semibold leading-snug text-[#2e1a47]">
                {career}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OtherProgrammes({ currentProgram }) {
  return (
    <section className="ai-tadka bg-[#faf8f5] px-5 py-12 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-[1220px]">
        <SectionTitle eyebrow="Explore the other programs" title="Your next step starts here" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {programOrder
            .filter((key) => aiPrograms[key].slug !== currentProgram.slug)
            .map((key) => (
              <Link
                key={key}
                to={aiPrograms[key].path}
                className="group rounded-xl border border-[#2e1a47]/10 bg-white p-5 transition hover:-translate-y-1 hover:border-[#c9a84c] hover:shadow-md"
              >
                <span className="font-heading text-lg font-semibold text-[#2e1a47]">
                  {aiPrograms[key].shortTitle}
                </span>
                <span className="mt-2 block text-sm text-slate-600">{aiPrograms[key].headline}</span>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}

export default function AIProgramsLanding() {
  return (
    <div className="bg-[#faf8f5]">
      <section className="ai-tadka relative overflow-hidden bg-[#2e1a47] px-5 py-16 text-[#f3e8c8] sm:px-8 md:py-24 lg:px-16">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#c9a84c]/20 blur-3xl" />
        <div className="relative mx-auto max-w-[1220px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4b85a]">AI-FIRST PROGRAMS</p>
          <h1 className="mt-5 max-w-3xl font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Don’t just study the future.<br />Build it with AI.
          </h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {programOrder.map((key) => (
              <Link key={key} to={aiPrograms[key].path} className="rounded-full border border-[#f3e8c8]/30 px-4 py-2 text-sm font-semibold transition hover:bg-white/10">
                {aiPrograms[key].shortTitle}
              </Link>
            ))}
          </div>
          <p className="mt-6 max-w-3xl leading-7 text-[#f3e8c8]/85">
            Four programs, one AI-powered learning ecosystem. Whether you want to lead a business, write code or engineer intelligent systems, you graduate AI-fluent, project-proven and industry-ready. Every subject is taught and mentored by highly experienced professionals from renowned industries, so you learn what the workplace actually demands.
          </p>
        </div>
      </section>
      <section aria-label="Program outcomes" className="ai-tadka px-5 py-8 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-[1220px] grid-cols-2 overflow-hidden rounded-xl shadow-sm md:grid-cols-4">
          {[
            ["500+", "AI projects built"],
            ["50+", "Industry experts teaching"],
            ["100+", "Hiring partners"],
            ["100%", "Students trained in AI tools"],
          ].map(([value, label]) => (
            <div key={label} className="bg-white px-4 py-6 text-center even:bg-[#f5f0e8]">
              <p className="font-heading text-3xl font-semibold text-[#2e1a47]">{value}</p>
              <p className="mt-1 text-xs text-slate-600 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="ai-tadka px-5 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[1220px]">
          <SectionTitle eyebrow="Choose your program" title="Four ways to build with AI" />
          <div className="space-y-6">
            {programOrder.map((key) => <ProgramDetails key={key} program={aiPrograms[key]} />)}
          </div>
        </div>
      </section>
      <SharedBenefits />
      <ProgramsTable />
      <CallToAction />
    </div>
  );
}

export function AIProgramPage({ pageKey }) {
  const program = Object.values(aiPrograms).find((item) => item.path === pageKey);
  if (!program) return null;

  return (
    <div className="bg-[#faf8f5]">
      <ProgramHero program={program} />
      <ProgramOverview program={program} />
      <CurriculumFocus program={program} />
      <ProgrammePathways program={program} />
      <CareerDirections program={program} />
      <OtherProgrammes currentProgram={program} />
      <SharedBenefits />
      <CallToAction />
    </div>
  );
}
