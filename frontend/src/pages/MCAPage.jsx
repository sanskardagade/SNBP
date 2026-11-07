import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  Boxes,
  BriefcaseBusiness,
  Braces,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  FileCode2,
  GraduationCap,
  Layers3,
  Network,
  Presentation,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { asset } from "../constants/assets.js";

const brochureUrl = asset(
  "/assets/school-of-management-SNBP-University-BqD54UwP.pdf"
);
const heroImage = asset("/assets/SOA%20pgms-HLybrV_l.png");

const curriculum = [
  {
    title: "Advanced Programming",
    description:
      "Strengthen programming skills and use structured approaches to develop solutions for complex requirements.",
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Analyse efficiency and select suitable approaches for complex problems.",
  },
  {
    title: "Database Technologies",
    description:
      "Explore database design, information management and the technologies that support modern applications.",
  },
  {
    title: "Software Engineering",
    description:
      "Apply engineering principles to requirements, architecture, development, testing and software maintenance.",
  },
  {
    title: "Web & Application Development",
    description:
      "Design and develop interactive web and software applications that connect interfaces, services and data.",
  },
  {
    title: "Networks & Cloud Concepts",
    description:
      "Understand connected systems, network services and the concepts behind cloud-based computing.",
  },
  {
    title: "Emerging Technologies",
    description:
      "Build awareness of evolving technologies and consider their practical use in software and digital systems.",
  },
  {
    title: "Project Development",
    description:
      "Bring technical knowledge together to plan, develop, test and present a substantial software project.",
  },
];

const learningMethods = [
  {
    title: "Advanced laboratory work",
    description:
      "Apply advanced computing concepts through practical, supervised laboratory exercises.",
    icon: Server,
  },
  {
    title: "Programming and architecture exercises",
    description:
      "Practise designing software structures and implementing solutions to technical problems.",
    icon: Code2,
  },
  {
    title: "Application-development assignments",
    description:
      "Build application features that bring together interfaces, data and software components.",
    icon: Braces,
  },
  {
    title: "Collaborative technology activities",
    description:
      "Work with others to analyse technical requirements and develop software solutions.",
    icon: Workflow,
  },
  {
    title: "Technical presentations and reviews",
    description:
      "Explain design decisions and project outcomes through clear technical communication.",
    icon: Presentation,
  },
  {
    title: "Major project development",
    description:
      "Plan and deliver a substantial project, from initial requirements through testing and demonstration.",
    icon: Layers3,
  },
];

const learningCycle = [
  { title: "Understand", detail: "Build advanced understanding of computing concepts and software systems." },
  { title: "Practice", detail: "Strengthen technical ability through laboratory work and focused exercises." },
  { title: "Apply", detail: "Apply concepts to design and develop solutions for complex problems." },
  { title: "Review", detail: "Evaluate architecture, test results and the quality of implemented solutions." },
  { title: "Improve", detail: "Refine software using feedback, debugging and iterative development." },
  { title: "Present", detail: "Demonstrate projects and communicate technical decisions with confidence." },
];

const projects = [
  { title: "Full-Stack Application", icon: Braces },
  { title: "Enterprise Management System", icon: Boxes },
  { title: "Cloud-Based Application", icon: Cloud },
  { title: "Data-Driven Web Platform", icon: Database },
  { title: "Workflow Automation System", icon: Workflow },
  { title: "Digital Service Application", icon: Network },
  { title: "Final-Year Software Project", icon: FileCode2 },
];

const portfolioItems = [
  {
    title: "Advanced applications and repositories",
    description:
      "Application work and source repositories that demonstrate technical implementation.",
    icon: Code2,
  },
  {
    title: "Architecture and database documentation",
    description:
      "System designs, architecture notes and database documentation supporting project work.",
    icon: Database,
  },
  {
    title: "Testing and deployment evidence",
    description:
      "Evidence of software testing, debugging and deployment activities.",
    icon: ShieldCheck,
  },
  {
    title: "Technical presentations",
    description:
      "Presentations explaining project requirements, implementation and outcomes.",
    icon: Presentation,
  },
  {
    title: "Major project report",
    description:
      "A clear record of the project problem, design, development approach and results.",
    icon: FileCode2,
  },
  {
    title: "Internship and certification evidence",
    description:
      "Additional evidence of applied experience and continuing technical development.",
    icon: GraduationCap,
  },
];

const careerDirections = [
  "Software Developer",
  "Application Developer",
  "Full-Stack Developer",
  "Backend Developer",
  "Systems Associate",
  "Application Support Engineer",
  "Software Testing Professional",
  "Technology Consultant",
];

function SectionMarker() {
  return <span aria-hidden="true" className="block h-1 w-12 rounded-full bg-[#c9a84c]" />;
}

export default function MCAPage() {
  const [activeTopic, setActiveTopic] = useState(0);
  const [activeLearning, setActiveLearning] = useState(0);
  const [activeCycle, setActiveCycle] = useState(0);
  const [activePortfolio, setActivePortfolio] = useState(0);
  const topic = curriculum[activeTopic];
  const learning = learningMethods[activeLearning];
  const portfolio = portfolioItems[activePortfolio];
  const PortfolioIcon = portfolio.icon;

  const changeLearning = (direction) => {
    setActiveLearning((index) => (index + direction + learningMethods.length) % learningMethods.length);
  };

  return (
    <div className="bg-[#faf8f5] pb-10 md:pb-0">
      <section className="relative overflow-hidden bg-[#2e1a47]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_68%_45%,rgba(201,168,76,0.2),transparent_44%)]"
        />
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-10 hidden h-full w-auto max-w-[52%] object-contain object-bottom object-right md:block md:right-14 lg:right-20 lg:max-w-[48%]"
          loading="eager"
        />
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5.5rem)] max-w-[1400px] flex-col justify-center px-5 py-10 md:min-h-[530px] md:px-8 md:py-16 lg:px-10">
          <div className="w-full max-w-[660px] md:max-w-[48%]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4b85a] md:text-sm">
              School of Arts, Commerce &amp; Science
            </p>
            <h1 className="mt-4 font-heading text-[2.4rem] font-bold leading-[1.12] text-[#f3e8c8] sm:text-5xl lg:text-[3.7rem]">
              Master of Computer Applications (MCA)
            </h1>
            <p className="mt-4 max-w-[34ch] font-heading text-base font-semibold leading-relaxed text-[#d4b85a] sm:text-lg">
              Advance Your Computing Skills. Build Professional Technology Capability.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#about-programme"
                className="inline-flex min-h-11 items-center rounded-full bg-[#f3e8c8] px-6 py-2.5 font-heading text-sm font-semibold text-[#2e1a47] transition hover:bg-white"
              >
                Explore Programme
              </a>
              <Link
                to="/admissions"
                className="inline-flex min-h-11 items-center rounded-full border border-[#f3e8c8]/70 px-6 py-2.5 font-heading text-sm font-semibold text-[#f3e8c8] transition hover:bg-[#f3e8c8]/10"
              >
                Enquire Now
              </Link>
            </div>
          </div>
          <img
            src={heroImage}
            alt="School of Arts, Commerce and Science"
            className="mx-auto mt-8 block w-full max-w-[380px] object-contain md:hidden"
            loading="eager"
          />
        </div>
      </section>

      <section
        aria-label="Programme facts"
        className="bg-[#faf8f5] px-4 pb-2 pt-6 md:px-6 md:pt-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 overflow-hidden rounded-t-[1.25rem] bg-[#2e1a47] text-center text-[#f3e8c8] shadow-[0_12px_35px_rgba(46,26,71,0.12)] md:grid-cols-4 md:rounded-t-[1.5rem]">
          {[
            ["2 YEARS", "Duration"],
            ["₹1,20,000", "Annual Tuition Fee"],
            ["₹2,40,000", "Total Tuition Fee"],
            ["60", "Student Intake"],
          ].map(([value, label], index) => (
            <div
              key={label}
              className={`relative px-3 py-5 sm:px-5 sm:py-7 ${
                index % 2 === 1 ? "bg-[#382456]" : ""
              } ${index > 1 ? "border-t border-white/10 md:border-t-0" : ""} ${
                index === 1 || index === 3 ? "md:border-l md:border-white/10" : ""
              }`}
            >
              <p className="font-heading text-xl font-semibold text-[#d4b85a] sm:text-2xl">{value}</p>
              <p className="mt-1 text-xs text-white/80 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about-programme"
        className="bg-[#faf8f5] px-5 pb-12 pt-8 sm:px-8 md:px-12 md:pb-16 md:pt-10 lg:px-16 lg:pb-20 lg:pt-12"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-start gap-6 md:grid-cols-[0.85fr_1.15fr] md:gap-10 lg:gap-16">
            <div>
              <SectionMarker />
              <h2 className="mt-4 font-heading text-3xl font-semibold uppercase leading-tight text-[#2e1a47] sm:text-4xl">
                Why this
                <br className="hidden sm:block" /> programme
              </h2>
            </div>
            <div className="space-y-4 text-[15px] leading-7 text-[#45404a] sm:text-base sm:leading-8">
              <p>
                Modern software systems require developers who can reason through complexity,
                connect multiple technologies and build dependable applications.
              </p>
              <p>
                The <strong>MCA programme</strong> strengthens technical knowledge, problem-solving
                ability and software-development capability. Students deepen their understanding
                of applications, databases, software systems and emerging technologies while
                applying knowledge to increasingly complex problems.
              </p>
            </div>
          </div>
          <a
            href={brochureUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#802030] px-5 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_8px_24px_rgba(0,0,0,0.16)] transition hover:bg-[#6b1a28]"
          >
            Download Brochure <ArrowDown size={16} />
          </a>
        </div>
      </section>

      <section
        id="curriculum"
        className="relative overflow-hidden bg-[#2e1a47] px-5 py-14 text-white sm:px-8 md:px-12 md:py-20 lg:px-10 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full border border-[#c9a84c]/10"
        />
        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div className="mb-9 text-center md:mb-12">
            <SectionMarker />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#d4b85a]">
              Curriculum Focus
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">
              What Will You Explore?
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
            <div className="grid content-start gap-x-5 sm:grid-cols-2 md:grid-cols-1">
              {curriculum.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  aria-pressed={activeTopic === index}
                  onClick={() => setActiveTopic(index)}
                  className={`group flex w-full items-baseline gap-3 border-b border-white/10 py-3 text-left transition md:gap-4 md:py-3.5 ${
                    activeTopic === index ? "text-[#f3e8c8]" : "text-white/65 hover:text-white"
                  }`}
                >
                  <span className="font-heading text-xs text-[#d4b85a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold leading-5 sm:text-base">{item.title}</span>
                </button>
              ))}
            </div>
            <div className="flex min-h-[260px] flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.05] p-6 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d4b85a]">
                Topic {activeTopic + 1} of {curriculum.length}
              </p>
              <h3 className="mt-4 font-heading text-2xl font-semibold text-[#f3e8c8] sm:text-3xl">
                {topic.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                {topic.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-2" aria-label="Select curriculum topic">
                {curriculum.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    aria-label={`Show topic ${index + 1}: ${item.title}`}
                    aria-pressed={activeTopic === index}
                    onClick={() => setActiveTopic(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      activeTopic === index
                        ? "w-8 bg-[#c9a84c]"
                        : "w-1.5 bg-white/40 hover:bg-[#c9a84c]/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="learning-methods"
        className="relative overflow-hidden bg-[#faf8f5] px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-10"
      >
        <div className="mx-auto mb-8 max-w-[1200px] text-center sm:mb-10">
          <SectionMarker />
          <h2 className="mt-4 font-heading text-3xl font-semibold text-[#2e1a47] sm:text-4xl">
            How Will You Learn?
          </h2>
        </div>
        <div className="mx-auto grid max-w-[1200px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learningMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <button
                key={method.title}
                type="button"
                aria-pressed={activeLearning === index}
                onClick={() => setActiveLearning(index)}
                className={`group min-h-52 rounded-2xl border p-6 text-left transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(46,26,71,0.12)] ${
                  activeLearning === index
                    ? "border-[#c9a84c] bg-[#2e1a47] text-white"
                    : "border-[#e7e1eb] bg-white text-[#2e1a47]"
                }`}
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-xl ${
                    activeLearning === index
                      ? "bg-[#d4b85a] text-[#2e1a47]"
                      : "bg-[#f3e8c8] text-[#2e1a47]"
                  }`}
                >
                  <Icon size={22} strokeWidth={1.7} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold leading-snug">{method.title}</h3>
                {activeLearning === index ? (
                  <p className="mt-3 text-sm leading-6 text-white/75">{method.description}</p>
                ) : null}
              </button>
            );
          })}
        </div>
        <div className="mx-auto mt-6 flex items-center justify-between gap-4 rounded-xl bg-[#2e1a47] px-4 py-4 text-white sm:hidden">
          <button
            type="button"
            onClick={() => changeLearning(-1)}
            aria-label="Previous learning method"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#d4b85a] text-[#2e1a47]"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="text-center">
            <p className="font-semibold">{learning.title}</p>
            <p className="mt-1 text-xs leading-5 text-white/70">{learning.description}</p>
          </div>
          <button
            type="button"
            onClick={() => changeLearning(1)}
            aria-label="Next learning method"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#d4b85a] text-[#2e1a47]"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      <section className="bg-[#faf8f5] px-5 py-12 sm:px-8 md:px-6 md:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center">
            <SectionMarker />
            <h2 className="mt-4 font-heading text-3xl font-semibold text-[#2e1a47] sm:text-4xl">
              Learning Cycle
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {learningCycle.map((step, index) => (
              <button
                key={step.title}
                type="button"
                aria-pressed={activeCycle === index}
                onClick={() => setActiveCycle(index)}
                className={`rounded-xl border px-3 py-4 text-center font-heading text-base transition sm:text-lg ${
                  activeCycle === index
                    ? "border-[#2e1a47] bg-[#2e1a47] font-semibold text-[#f3e8c8] shadow-md"
                    : "border-[#e7e1eb] bg-white text-[#2e1a47]/70 hover:border-[#c9a84c]"
                }`}
              >
                {step.title}
              </button>
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-600">
            {learningCycle[activeCycle].detail}
          </p>
        </div>
      </section>

      <section
        id="project-possibilities"
        className="bg-[#faf8f5] px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16 lg:py-20"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 text-center sm:mb-10">
            <SectionMarker />
            <h2 className="mt-4 font-heading text-3xl font-semibold text-[#2e1a47] sm:text-4xl">
              Project Possibilities
            </h2>
          </div>
          <div className="grid grid-cols-1 overflow-hidden sm:grid-cols-2 md:grid-cols-3">
            {projects.map(({ title, icon: Icon }, index) => (
              <article
                key={title}
                className={`flex min-h-[180px] flex-col items-center justify-center px-6 py-7 text-center sm:min-h-[205px] ${
                  index % 2 === 0
                    ? "bg-[#2e1a47] text-[#f3e8c8]"
                    : "bg-[#f3e8c8] text-[#2e1a47]"
                }`}
              >
                <span
                  className={`mb-4 grid h-12 w-12 place-items-center rounded-full ${
                    index % 2 === 0
                      ? "bg-[#f3e8c8] text-[#2e1a47]"
                      : "bg-[#2e1a47] text-[#f3e8c8]"
                  }`}
                >
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <h3 className="max-w-[18ch] font-heading text-lg font-medium leading-snug sm:text-xl">
                  {title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#faf8f5] px-5 pb-16 pt-12 sm:px-8 md:px-12 md:pb-20 md:pt-20 lg:px-16">
        <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
          <div>
            <SectionMarker />
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#92751e]">
              Evidence of learning
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-[#2e1a47] sm:text-4xl">
              Building Your Portfolio
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#5b5660] sm:text-base">
              Students may progressively build evidence of their capabilities through:
            </p>
          </div>
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {portfolioItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.title}
                    type="button"
                    aria-pressed={activePortfolio === index}
                    onClick={() => setActivePortfolio(index)}
                    className={`flex min-h-[76px] items-center gap-3 rounded-xl border p-4 text-left text-sm font-semibold leading-5 transition ${
                      activePortfolio === index
                        ? "border-[#2e1a47] bg-[#2e1a47] text-white"
                        : "border-[#e7e1eb] bg-white text-[#382456] hover:border-[#c9a84c]"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={`shrink-0 ${
                        activePortfolio === index ? "text-[#d4b85a]" : "text-[#9b7a29]"
                      }`}
                    />
                    {item.title}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 flex items-start gap-4 rounded-xl bg-[#f3e8c8] p-5 text-[#2e1a47]">
              <PortfolioIcon size={23} className="mt-0.5 shrink-0 text-[#92751e]" />
              <div>
                <h3 className="font-heading font-semibold">{portfolio.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#51465b]">{portfolio.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 text-center md:mb-14">
            <SectionMarker />
            <h2 className="mt-4 font-heading text-3xl font-semibold text-[#2e1a47] sm:text-4xl">
              Career Directions
            </h2>
          </div>
          <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1fr)_minmax(210px,260px)_minmax(0,1fr)] md:gap-x-10 lg:gap-x-16">
            <div className="grid gap-3">
              {careerDirections.slice(0, 4).map((role) => (
                <div
                  key={role}
                  className="flex min-h-14 items-center gap-3 border border-[#e7e1eb] bg-[#faf8f5] px-4 py-3 text-sm font-semibold text-[#382456]"
                >
                  <BriefcaseBusiness size={18} className="shrink-0 text-[#9b7a29]" />
                  {role}
                </div>
              ))}
            </div>
            <div className="mx-auto grid aspect-square w-full max-w-[220px] place-items-center rounded-full border border-[#d8c98f] bg-[#f7f2e3] p-5 text-center md:max-w-[250px]">
              <div className="grid h-full w-full place-items-center rounded-full border border-dashed border-[#c9a84c]">
                <div>
                  <GraduationCap className="mx-auto text-[#92751e]" size={38} />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#92751e]">
                    After graduating from
                  </p>
                  <p className="mt-2 font-heading text-xl font-bold text-[#2e1a47]">
                    SNBP University
                  </p>
                  <p className="mt-1 text-sm text-[#5b5660]">
                    Master of Computer Applications (MCA)
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-3">
              {careerDirections.slice(4).map((role) => (
                <div
                  key={role}
                  className="flex min-h-14 items-center gap-3 border border-[#e7e1eb] bg-[#faf8f5] px-4 py-3 text-sm font-semibold text-[#382456]"
                >
                  <BriefcaseBusiness size={18} className="shrink-0 text-[#9b7a29]" />
                  {role}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 rounded-2xl bg-[#2e1a47] p-6 text-center text-[#f3e8c8] sm:p-9 md:mt-16 md:p-12">
            <Network className="mx-auto text-[#d4b85a]" size={40} strokeWidth={1.5} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#d4b85a] sm:text-sm">
              Begin your journey
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold sm:text-3xl">
              Build advanced skills for a future in technology
            </h2>
            <Link
              to="/admissions"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#d4b85a] px-6 py-3 text-sm font-bold text-[#2e1a47] transition hover:bg-[#e6cd79]"
            >
              Enquire about admissions <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <Link
        to="/admissions"
        className="fixed inset-x-0 bottom-0 z-40 flex h-10 items-center justify-center bg-[#d4b85a] text-xs font-bold uppercase tracking-[0.12em] text-[#2e1a47] shadow-[0_-4px_15px_rgba(46,26,71,0.12)] md:hidden"
      >
        Enquire Now
      </Link>
    </div>
  );
}
