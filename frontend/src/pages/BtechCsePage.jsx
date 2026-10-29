import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Lightbulb,
  Network,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { asset } from "../constants/assets.js";
import { programPages } from "../content/programs.js";

const program = programPages["/school-of-technology/btech-cse"];

const exploreAreas = [
  {
    title: "Software Development",
    description:
      "Explore programming, software engineering, and the ideas behind useful digital products.",
    icon: Code2,
  },
  {
    title: "Data, Databases & Cloud",
    description:
      "Build understanding of data storage, databases, and the foundations of cloud systems.",
    icon: Database,
  },
  {
    title: "Projects & Internships",
    description:
      "Bring concepts into practice through project work and opportunities to gain experience.",
    icon: Lightbulb,
  },
];

const projectPossibilities = [
  { title: "Design a useful application", icon: Braces },
  { title: "Build a connected information system", icon: Network },
  { title: "Create a cloud-ready product", icon: Cloud },
];

const careerRoles = [
  "Software Developer",
  "Full-Stack Developer",
  "Backend Developer",
  "Frontend Developer",
  "QA Engineer",
  "Application Developer",
  "Product Engineer",
  "Technical Support Engineer",
];

function SectionMarker() {
  return (
    <span
      aria-hidden="true"
      className="block h-1 w-12 rounded-full bg-[#c9a84e]"
    />
  );
}

export default function BtechCsePage() {
  return (
    <div className="bg-[#faf8f5]">
      <section className="relative isolate overflow-hidden bg-[#382456] text-[#f3e8c8]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(212,184,90,0.22),rgba(46,26,71,0)_70%)]"
        />
        <div className="mx-auto grid min-h-[420px] max-w-[1400px] items-center gap-2 px-5 py-12 sm:px-8 md:min-h-[480px] md:grid-cols-[1fr_0.95fr] md:gap-8 md:px-12 lg:min-h-[520px] lg:px-16">
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4b85a] sm:text-sm">
              School of Technology
            </p>
            <h1 className="mt-4 max-w-[18ch] font-heading text-[2.25rem] font-bold leading-[1.13] text-[#f3e8c8] sm:text-5xl lg:text-[3.7rem]">
              B.Tech in Computer Science Engineering
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              {program.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/admissions"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#d4b85a] px-5 py-3 text-sm font-bold text-[#2e1a47] transition hover:bg-[#e6cd79]"
              >
                Enquire about admissions <ArrowRight size={17} />
              </Link>
              <a
                href="#about-programme"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore the programme <ArrowDown size={16} />
              </a>
            </div>
          </div>
          <img
            src={asset("/assets/SOT%20Hero%20Image-DzzlwgPB.png")}
            alt="Students collaborating around a laptop"
            className="mx-auto mt-5 block w-full max-w-[440px] object-contain md:mt-0 md:max-w-[560px]"
            loading="eager"
          />
        </div>
      </section>

      <section
        id="about-programme"
        className="px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16 lg:py-20"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-start gap-6 md:grid-cols-[0.9fr_1.2fr] md:gap-12 lg:gap-16">
            <div>
              <SectionMarker />
              <h2 className="mt-5 max-w-md font-heading text-3xl font-semibold uppercase leading-tight text-[#2e1a47] sm:text-4xl">
                About the programme
              </h2>
            </div>
            <div className="space-y-4 text-[15px] leading-7 text-[#45404a] sm:text-base sm:leading-8">
              <p>
                <span className="font-heading italic text-[#2e1a47]">
                  Computer science turns ideas into tools people can use.
                </span>{" "}
                This programme introduces students to the foundations of software,
                systems, and digital product development.
              </p>
              <p>
                Through programming, databases, cloud fundamentals, and practical
                project work, students can build a broad base for further study
                and a range of technology careers.
              </p>
            </div>
          </div>
          <div className="group relative mt-9 overflow-hidden rounded-2xl sm:mt-12">
            <img
              src={program.heroImage}
              alt="Students learning and collaborating"
              className="aspect-[16/7] w-full object-cover transition duration-500 group-hover:scale-[1.02] sm:aspect-[16/6]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#21143b]/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-5 right-5 font-heading text-lg font-semibold text-white sm:bottom-7 sm:left-8 sm:text-2xl">
              Learn the foundations. Put your ideas into practice.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#2e1a47] px-5 py-14 text-white sm:px-8 md:px-12 md:py-20 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
            <div className="mb-4 flex justify-center">
              <SectionMarker />
            </div>
            <h2 className="font-heading text-3xl font-semibold text-[#f3e8c8] sm:text-4xl">
              What will you explore?
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
              Develop a broad view of the tools and practices behind modern
              software.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {exploreAreas.map(({ title, description, icon: Icon }, index) => (
              <article
                key={title}
                className={`min-h-[230px] p-6 sm:p-8 ${
                  index % 2 === 0
                    ? "bg-[#f3e8c8] text-[#2e1a47]"
                    : "bg-white text-[#2e1a47]"
                }`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2e1a47] text-[#f3e8c8]">
                  <Icon size={23} strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-heading text-xl font-semibold">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#514a57]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-will-you-learn"
        className="px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16"
      >
        <div className="mx-auto grid max-w-[1400px] items-center gap-8 bg-white p-6 shadow-[0_8px_30px_rgba(46,26,71,0.06)] sm:p-9 md:grid-cols-2 md:gap-12 md:p-12">
          <div>
            <SectionMarker />
            <h2 className="mt-4 font-heading text-3xl font-semibold text-[#2e1a47] sm:text-4xl">
              How will you learn?
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-[#45404a] sm:text-base sm:leading-8">
              Build understanding step by step: start with core computing
              concepts, practise through programming, and connect your learning
              to the systems and products people use every day.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-[#45404a] sm:text-base sm:leading-8">
              Project work offers a chance to apply ideas, work through
              challenges, and develop a portfolio of practical experience.
            </p>
            <Link
              to="/admissions"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#3d2066] hover:text-[#8b6a1a]"
            >
              Talk to admissions <ArrowUpRight size={16} />
            </Link>
          </div>
          <img
            src={program.heroImage}
            alt="Students working together on a project"
            className="aspect-[4/3] w-full rounded-xl object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="px-5 pb-14 pt-2 sm:px-8 md:px-12 md:pb-20 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 text-center sm:mb-10">
            <div className="mb-4 flex justify-center">
              <SectionMarker />
            </div>
            <h2 className="font-heading text-3xl font-semibold text-[#2e1a47] sm:text-4xl">
              Project possibilities
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#5b5660] sm:text-base">
              Put your growing skills to work on practical challenges.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3">
            {projectPossibilities.map(({ title, icon: Icon }, index) => (
              <article
                key={title}
                className={`flex min-h-[210px] flex-col items-center justify-center px-7 py-9 text-center ${
                  index === 1
                    ? "bg-[#f3e8c8] text-[#2e1a47]"
                    : "bg-[#2e1a47] text-[#f3e8c8]"
                }`}
              >
                <span
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${
                    index === 1
                      ? "bg-[#2e1a47] text-[#f3e8c8]"
                      : "bg-[#f3e8c8] text-[#2e1a47]"
                  }`}
                >
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <h3 className="max-w-[16ch] font-heading text-xl leading-snug">
                  {title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
        <div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-16">
          <div>
            <SectionMarker />
            <h2 className="mt-5 font-heading text-3xl font-semibold text-[#2e1a47] sm:text-4xl">
              Where can your degree take you?
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#5b5660] sm:text-base">
              Computer science skills can open doors across software, product,
              quality, and technology support roles.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {careerRoles.map((role) => (
              <div
                key={role}
                className="flex min-h-14 items-center gap-3 border border-[#e7e1eb] bg-[#faf8f5] px-4 py-3 text-sm font-semibold text-[#382456]"
              >
                <BriefcaseBusiness
                  aria-hidden="true"
                  className="shrink-0 text-[#9b7a29]"
                  size={18}
                  strokeWidth={1.7}
                />
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#382456] px-5 py-12 text-center text-white sm:px-8 md:py-16">
        <GraduationCap
          aria-hidden="true"
          className="mx-auto text-[#d4b85a]"
          size={36}
          strokeWidth={1.5}
        />
        <h2 className="mt-4 font-heading text-2xl font-semibold text-[#f3e8c8] sm:text-3xl">
          Ready to explore computer science?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
          Connect with the admissions team to learn more about the B.Tech CSE
          programme.
        </p>
        <Link
          to="/admissions"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm bg-[#d4b85a] px-6 py-3 text-sm font-bold text-[#2e1a47] transition hover:bg-[#e6cd79]"
        >
          Enquire now <ArrowRight size={17} />
        </Link>
      </section>
    </div>
  );
}
