import { Link } from "react-router-dom";
import { siteMeta } from "../constants/siteMeta.js";
import { aiEdgeFeatures, industryFeatures, aiPrograms } from "../content/aiPrograms.js";

const programOrder = ["bba", "bca", "mca", "mba"];

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

function ProgramDetails({ program, detailed = false }) {
  return (
    <article
      id={program.slug}
      className="scroll-mt-24 rounded-2xl border border-[#2e1a47]/10 bg-white p-6 shadow-[0_12px_34px_rgba(46,26,71,0.07)] sm:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9b7a29]">{program.tagline}</p>
          <h3 className="mt-2 font-heading text-2xl font-semibold text-[#2e1a47] sm:text-3xl">
            {program.title}
          </h3>
          <p className="mt-2 font-heading font-semibold text-[#806426]">{program.headline}</p>
        </div>
        {!detailed ? (
          <Link className="btn-primary shrink-0" to={program.path}>
            Explore {program.slug.toUpperCase()}
          </Link>
        ) : null}
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
      <section className="bg-[#f5f0e8] px-5 py-16 sm:px-8 lg:px-16">
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
      <section className="px-5 py-16 sm:px-8 lg:px-16">
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
    <section className="bg-[#f5f0e8] px-5 py-16 sm:px-8 lg:px-16">
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
    <section className="bg-[#2e1a47] px-5 py-14 text-center text-[#f3e8c8] sm:px-8">
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

export default function AIProgramsLanding() {
  return (
    <div className="bg-[#faf8f5]">
      <section className="relative overflow-hidden bg-[#2e1a47] px-5 py-16 text-[#f3e8c8] sm:px-8 md:py-24 lg:px-16">
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
      <section aria-label="Program outcomes" className="px-5 py-8 sm:px-8 lg:px-16">
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
      <section className="px-5 py-12 sm:px-8 lg:px-16">
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
      <section className="bg-[#2e1a47] px-5 py-14 text-[#f3e8c8] sm:px-8 md:py-20 lg:px-16">
        <div className="mx-auto max-w-[1220px]">
          <Link to="/school-of-arts-commerce-science" className="text-sm text-[#d4b85a] hover:underline">
            School of Arts, Commerce &amp; Science
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#d4b85a]">{program.tagline}</p>
          <h1 className="mt-3 max-w-4xl font-heading text-4xl font-bold leading-tight sm:text-5xl">{program.title}</h1>
          <p className="mt-4 font-heading text-lg font-semibold text-[#d4b85a]">{program.headline}</p>
          <p className="mt-5 max-w-3xl leading-7 text-[#f3e8c8]/85">{program.description}</p>
        </div>
      </section>
      <section className="px-5 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[1220px]">
          <ProgramDetails program={program} detailed />
        </div>
      </section>
      <SharedBenefits />
      <section className="px-5 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[1220px]">
          <SectionTitle eyebrow="Explore the other programs" title="Your next step starts here" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {programOrder.filter((key) => aiPrograms[key].slug !== program.slug).map((key) => (
              <Link key={key} to={aiPrograms[key].path} className="rounded-xl border border-[#2e1a47]/10 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                <span className="font-heading text-lg font-semibold text-[#2e1a47]">{aiPrograms[key].shortTitle}</span>
                <span className="mt-2 block text-sm text-slate-600">{aiPrograms[key].headline}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </div>
  );
}
