/*
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Cloud,
  Database,
  GitBranch,
  GraduationCap,
  Headset,
  Network,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { asset } from "../constants/assets.js";
const brochureUrl = asset(
  "/assets/SNBP%20UNIVERSITY%20BROCHURE%20B.TECH%20(2)-DNIxMGRG.pdf"
);

const exploreAreas = [
  {
    title: "IT Infrastructure",
    description:
      "Understand the hardware, platforms, and services that keep organisational technology running.",
    image: "/assets/6-CpnUa6L_.webp",
    icon: Server,
  },
  {
    title: "System Administration Concepts",
    description:
      "Explore how systems are configured, maintained, monitored, and supported.",
    image: "/assets/4-CH_C3dzv.webp",
    icon: Building2,
  },
  {
    title: "Databases and Software Tools",
    description:
      "Work with databases and tools that help teams manage information and solve practical problems.",
    image: "/assets/smart%20class%20(1)-6nbGPuqP.webp",
    icon: Database,
  },
  {
    title: "Computer Networking",
    description:
      "Learn how connected systems communicate and share resources across networks.",
    image: "/assets/3-BE6YjGsP.webp",
    icon: Network,
  },
  {
    title: "Cloud Computing Fundamentals",
    description:
      "Discover the cloud platforms and services used to deliver modern technology.",
    image: "/assets/freepik_edit%20(58)-DjxVjbAg.webp",
    icon: Cloud,
  },
  {
    title: "Enterprise Systems",
    description:
      "See how integrated systems support the day-to-day operations of organisations.",
    image: "/assets/Untitled%20design-CYPUEzTN.webp",
    icon: Workflow,
  },
  {
    title: "Business Technology",
    description:
      "Connect technology choices to business needs, processes, and digital services.",
    image: "/assets/2-VeoQMymg.webp",
    icon: Building2,
  },
  {
    title: "Cyber Security Fundamentals",
    description:
      "Build awareness of the practices that help protect systems, networks, and information.",
    image: "/assets/5-CNJDXXHY.webp",
    icon: ShieldCheck,
  },
  {
    title: "Digital Transformation",
    description:
      "Explore how organisations use technology to improve services and adapt to change.",
    image: "/assets/7-DOeRUJB-.webp",
    icon: GitBranch,
  },
  {
    title: "Workflow Improvement",
    description:
      "Identify opportunities to simplify processes with thoughtful technology solutions.",
    image: "/assets/8-DHScZ76F.webp",
    icon: Workflow,
  },
];

const projectIcons = [Headset, Cloud, Network, Workflow, GitBranch, Database];

const projectPossibilities = [
  "IT Helpdesk Management System",
  "Cloud-Based File-Sharing Solution",
  "Network Monitoring Dashboard",
  "Digital Workflow Automation",
  "Business Process Management System",
  "Enterprise Data Management Project",
];

const careerDirections = [
  "IT Analyst",
  "Systems Engineer",
  "Cloud Support Engineer",
  "Application Support Engineer",
  "Enterprise Technology Associate",
  "IT Consultant",
  "Technology Operations Executive",
];

function SectionMarker() {
  return (
    <span
      aria-hidden="true"
      className="block h-1 w-12 rounded-full bg-[#c9a84c]"
    />
  );
}
*/

export default function BtechItPage() {
  return (
    <div className="bg-[#faf8f5]">
      <section className="relative min-h-[340px] overflow-hidden bg-[#382456] md:min-h-[400px] lg:min-h-[440px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[38%] top-0 h-[min(320px,65vw)] w-[min(400px,82vw)] -translate-x-1/2 -translate-y-1/3 rounded-full blur-3xl md:left-[40%] md:h-[380px] md:w-[480px] lg:h-[420px] lg:w-[540px]"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 184, 90, 0.22) 0%, rgba(180, 145, 75, 0.12) 42%, rgba(46, 26, 71, 0) 72%)",
          }}
        />
        <img
          src={asset("/assets/SOT%20Hero%20Image-DzzlwgPB.png")}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-8 hidden h-[96%] max-h-[96%] w-auto object-contain object-bottom object-right md:block md:right-12 lg:right-14 lg:h-full lg:max-h-full"
          loading="eager"
        />
        <div className="relative z-10 mx-auto flex min-h-[340px] max-w-[1400px] flex-col items-center px-4 py-10 md:min-h-[400px] md:flex-row md:items-center md:px-6 md:py-16 lg:min-h-[440px] lg:px-10">
          <div className="relative z-10 w-full max-w-[640px] md:max-w-[40%] lg:max-w-[38%]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4b85a] md:text-sm">
              School of Technology
            </p>
            <h1 className="mt-4 max-w-[18ch] font-heading text-[2.3rem] font-bold leading-[1.12] text-[#f3e8c8] sm:text-[2.8rem] md:text-[3.3rem] lg:text-[3.7rem]">
              B.Tech Information Technology (IT)
            </h1>
            <p className="mt-4 font-heading text-sm font-semibold uppercase leading-relaxed tracking-wide text-[#d4b85a] sm:text-base">
              Power the technology backbone of modern organisations
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              For students who aspire to manage, support and improve technology
              systems that drive modern organisations.
            </p>
          </div>
          <img
            src={asset("/assets/SOT%20Hero%20Image-DzzlwgPB.png")}
            alt="Students collaborating around a laptop"
            className="relative z-10 -mb-10 mt-6 block w-full max-w-[460px] object-contain object-bottom sm:max-w-[500px] md:hidden"
            loading="eager"
          />
        </div>
      </section>

      <section
        id="about-programme"
        className="bg-[#faf8f5] px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16 lg:py-20"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-start gap-6 md:grid-cols-[0.95fr_1.25fr] md:gap-10 lg:gap-16">
            <h2 className="text-left font-heading text-[1.75rem] font-semibold uppercase leading-[1.15] tracking-[0.02em] text-[#2e1a47] md:text-[2.05rem] lg:text-[2.35rem]">
              Power the Technology
              <br />
              Backbone of Modern
              <br />
              Organisations
            </h2>
            <div className="space-y-4 text-[15px] leading-7 text-[#45404a] sm:text-base sm:leading-8">
              <p>
                <span className="font-heading italic text-[#2e1a47]">
                  Modern organisations depend on interconnected technology
                  systems that bring together people, processes, data and
                  digital services.
                </span>{" "}
                The B.Tech Information Technology programme at SNBP University
                prepares students to understand, manage and improve these
                systems. The programme combines technical fundamentals with an
                understanding of how technology supports business operations,
                enterprise systems and digital transformation.
              </p>
            </div>
          </div>
          <a
            href={brochureUrl}
            download
            className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#802030] px-5 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition hover:bg-[#6b1a28]"
          >
            Download Brochure <ArrowDown size={16} />
          </a>
          <div className="group relative mt-9 overflow-hidden rounded-[1.25rem] md:mt-12 md:rounded-[1.5rem]">
            <img
              src={asset("/assets/Untitled%20design-CYPUEzTN.webp")}
              alt="Students collaborating outdoors on campus"
              className="aspect-[16/7] w-full object-cover object-center transition duration-500 group-hover:scale-[1.02] sm:aspect-[16/6]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#21143b]/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#faf8f5] px-5 pb-12 pt-4 sm:px-8 md:px-12 md:pb-16 md:pt-6 lg:px-16">
        <div className="relative z-10 mx-auto mb-8 max-w-[1200px] text-center sm:mb-10">
          <div className="mb-4 flex justify-center">
            <SectionMarker />
          </div>
          <h2 className="font-heading text-3xl font-semibold text-[#2e1a47] sm:text-4xl">
            What Will You Explore?
          </h2>
        </div>
        <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {exploreAreas.map(({ title, image, icon: Icon }, index) => (
            <article
              key={title}
              className={`group relative flex min-h-[190px] snap-start flex-col justify-end overflow-hidden p-5 sm:min-h-[210px] sm:p-6 ${
                index % 2 === 0 ? "bg-[#2e1a47]" : "bg-[#f3e8c8]"
              }`}
            >
              <img
                src={asset(image)}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f2e]/90 via-[#2e1a47]/40 to-[#2e1a47]/10" />
              <span className="relative z-10 mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#f3e8c8] text-[#2e1a47]">
                <Icon size={20} strokeWidth={1.6} />
              </span>
              <h3 className="relative z-10 font-heading text-base font-semibold leading-snug text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] sm:text-lg">
                {title}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section
        id="how-will-you-learn"
        className="relative overflow-hidden bg-[#faf8f5] px-5 py-10 sm:px-8 md:px-12 md:py-14 lg:px-16 lg:py-16"
      >
        <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-8 bg-white p-6 shadow-[0_8px_30px_rgba(46,26,71,0.06)] sm:p-9 md:grid-cols-2 md:gap-12 md:p-12">
          <div>
            <SectionMarker />
            <h2 className="mt-4 font-heading text-3xl font-semibold text-[#2e1a47] sm:text-4xl">
              How Will You Learn?
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-[#45404a] sm:text-base sm:leading-8">
              Students engage with practical technology tasks through
              system-focused exercises, database activities, networking
              concepts, cloud fundamentals and workflow-oriented projects.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-[#45404a] sm:text-base sm:leading-8">
              The learning approach helps students understand technology as an
              integrated ecosystem that needs to be reliable, secure, scalable
              and useful.
            </p>
          </div>
          <img
            src={asset("/assets/Untitled%20design-CYPUEzTN.webp")}
            alt="Students collaborating on campus"
            className="aspect-[16/11] h-full min-h-[240px] w-full rounded-[1.25rem] object-cover object-center md:min-h-[320px] md:rounded-[1.5rem]"
            loading="lazy"
          />
        </div>
      </section>

      <section
        id="project-possibilities"
        className="relative overflow-hidden bg-[#faf8f5] px-5 pb-14 pt-4 sm:px-8 md:px-12 md:pb-16 md:pt-6 lg:px-16"
      >
        <div className="relative z-10 mx-auto mb-8 max-w-[1200px] text-center sm:mb-10">
          <div className="mb-4 flex justify-center">
            <SectionMarker />
          </div>
          <h2 className="font-heading text-3xl font-semibold text-[#2e1a47] sm:text-4xl">
            Project Possibilities
          </h2>
        </div>
        <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {projectPossibilities.map((title, index) => {
            const Icon = projectIcons[index];
            return (
              <article
                key={title}
                className={`flex min-h-[190px] flex-col items-center justify-center px-6 py-8 text-center sm:min-h-[220px] sm:px-8 ${
                  index % 2 === 0
                    ? "bg-[#2e1a47] text-[#f3e8c8]"
                    : "bg-[#f3e8c8] text-[#2e1a47]"
                }`}
              >
                <span
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${
                    index % 2 === 0
                      ? "bg-[#f3e8c8] text-[#2e1a47]"
                      : "bg-[#2e1a47] text-[#f3e8c8]"
                  }`}
                >
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <h3 className="max-w-[16ch] font-heading text-lg font-medium leading-snug sm:text-xl">
                  {title}
                </h3>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-16">
            <div>
              <SectionMarker />
              <h2 className="mt-5 font-heading text-3xl font-semibold text-[#2e1a47] sm:text-4xl">
                Career Directions
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5b5660] sm:text-base">
                Graduates may explore roles such as:
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {careerDirections.map((role) => (
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
          <div className="mt-10 overflow-hidden rounded-2xl bg-[#2e1a47] p-6 text-center text-[#f3e8c8] sm:p-9 md:mt-14 md:p-12">
            <GraduationCap
              aria-hidden="true"
              className="mx-auto text-[#d4b85a]"
              size={42}
              strokeWidth={1.5}
            />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#d4b85a] sm:text-sm">
              After graduating from SNBP University
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold sm:text-3xl">
              Become a B.Tech Information Technology Engineer
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

      
    </div>
  );
}
