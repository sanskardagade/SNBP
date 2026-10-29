import {
  Building2,
  ChevronLeft,
  ChevronRight,
  Code2,
  GraduationCap,
  Globe2,
  Handshake,
  ShieldCheck,
} from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { asset } from "../constants/assets.js";
import { programPages } from "../content/programs.js";

const programs = Object.entries(programPages).filter(([, program]) =>
  program.school.includes("Technology")
);

const programDisplayTitles = {
  "/school-of-technology/btech-cse-aiml":
    "B.Tech CSE – Artificial Intelligence & Machine Learning",
};

const brochureUrl = asset(
  "/assets/SNBP%20UNIVERSITY%20BROCHURE%20B.TECH%20(2)-DNIxMGRG.pdf"
);

const programImages = [
  "/assets/Untitled%20design-CYPUEzTN.webp",
  "/assets/4-CH_C3dzv.webp",
  "/assets/DSC03873%20(1)-OH1umETK.webp",
  "/assets/7-DOeRUJB-.webp",
  "/assets/8-DHScZ76F.webp",
];

const labFeatures = [
  {
    title: "Interactive smart boards and digital displays",
    image: "/assets/smart%20class%20(1)-6nbGPuqP.webp",
  },
  {
    title: "AI-enabled teaching and assessment tools",
    image: "/assets/2-VeoQMymg.webp",
  },
  {
    title: "Hybrid and blended learning-enabled classrooms",
    image: "/assets/3-BE6YjGsP.webp",
  },
  {
    title: "High-speed internet with cloud-based learning platforms",
    image: "/assets/5-CNJDXXHY.webp",
  },
  {
    title: "Virtual labs and simulation-based learning environments",
    image: "/assets/6-CpnUa6L_.webp",
  },
  {
    title: "Dedicated Accelerator Program & Startup Studio",
    image: "/assets/7-DOeRUJB-.webp",
  },
  {
    title: "Innovation labs and prototyping facilities",
    image: "/assets/8-DHScZ76F.webp",
  },
];

const faculty = [
  {
    name: "Dr. Jayashree Chavan",
    title: "Assistant Professor",
    image: "/assets/image%20(1)-3wADFTz4.png",
  },
  {
    name: "Prof. Pooja Bhavar",
    title: "Assistant Professor",
    image: "/assets/image%20(2)-BM1L9HJc.png",
  },
  {
    name: "Dr. Vidhya Ganeshrao Bhandwalkar",
    title: "Assistant Professor",
    image: "/assets/image%20(3)-WETXlTxG.png",
  },
  {
    name: "Prof. Priti Bodkhe",
    title: "Assistant Professor",
    image: "/assets/image%20(4)-BFw2onjI.png",
  },
];

function SectionMarker() {
  return (
    <span
      aria-hidden="true"
      className="block h-1 w-12 rounded-full bg-[#c9a84c]"
    />
  );
}

export default function SchoolTechnologyPage() {
  const labCarouselRef = useRef(null);

  function scrollLabs(direction) {
    const carousel = labCarouselRef.current;
    if (carousel) {
      carousel.scrollLeft += direction * carousel.clientWidth * 0.8;
    }
  }

  return (
    <div className="bg-[#faf8f5]">
      <section className="relative min-h-[340px] overflow-hidden bg-[#382456] text-[#f3e8c8] md:min-h-[400px] lg:min-h-[440px]">
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
        <div className="relative z-10 mx-auto flex min-h-[340px] max-w-[1400px] flex-col items-center px-4 py-12 md:min-h-[400px] md:flex-row md:px-6 md:py-16 lg:min-h-[440px] lg:px-10 lg:py-16">
          <div className="relative z-10 w-full max-w-[640px] md:max-w-[40%] lg:max-w-[38%]">
            <h1 className="relative z-10 font-heading text-[2.3rem] font-bold leading-[1.12] text-[#f3e8c8] sm:text-[2.8rem] md:text-[3.3rem] lg:text-[3.7rem]">
              School of Technology
            </h1>
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
        id="about-school-of-technology"
        className="relative overflow-hidden px-5 py-10 sm:px-8 md:px-12 md:py-14 lg:px-16 lg:py-16"
      >
        <img
          src={asset("/assets/Layer%204-clean-BIEAtz-e.webp")}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-[280px] w-auto -translate-y-1/2 translate-x-1/2 opacity-30 md:h-[380px] lg:h-[460px]"
          loading="lazy"
        />
        <div className="relative z-10 mx-auto grid max-w-[1400px] items-start gap-6 md:grid-cols-[0.9fr_1.35fr] md:gap-12 lg:gap-16">
          <h2 className="font-heading text-left text-[1.65rem] font-semibold uppercase leading-[1.2] tracking-[0.02em] text-[#2e1a47] md:text-[1.9rem] lg:text-[2.15rem]">
            About the School
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            of Technology
          </h2>
          <p className="text-[15px] leading-7 text-[#45404a] sm:text-base sm:leading-8">
            <span className="font-heading italic text-[#2e1a47]">
              At SNBP University&apos;s School of Technology,
            </span>{" "}
            engineering education is designed to prepare students for the
            rapidly evolving world of technology. The School combines strong
            academic foundations with hands-on learning, enabling students to
            build practical solutions, develop industry-relevant skills, and
            graduate with the confidence to solve real-world challenges.
            Students begin working on projects from the very first semester,
            gaining experience in application development, AI tools, cloud
            technologies, cybersecurity simulations, and data-driven
            problem-solving.
          </p>
        </div>
      </section>

      <section
        aria-label="School statistics"
        className="px-5 pb-5 sm:px-8 md:px-12 lg:px-16"
      >
        <div className="mx-auto max-w-[1120px] overflow-hidden rounded-t-[28px] shadow-[0_12px_34px_rgba(46,26,71,0.12)]">
          <div className="grid grid-cols-2">
            {[
              { value: "3", label: "Programs", className: "bg-[#f5f0e8]" },
              {
                value: "3",
                label: "Specializations in CSE",
                className: "bg-[#ddd0e8]",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`px-4 py-6 text-center text-[#2e1a47] sm:py-8 ${stat.className}`}
              >
                <p className="font-heading text-3xl font-semibold sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-[#2e1a47] px-5 py-2 text-center font-heading text-[0.65rem] tracking-[0.18em] text-[#d4b85a] sm:text-xs">
            SCHOOL OF TECHNOLOGY
          </div>
        </div>
      </section>

      <section
        id="school-programs"
        className="px-5 py-10 sm:px-8 md:px-12 md:py-14 lg:px-16"
      >
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-7 max-w-xl sm:mb-10">
            <SectionMarker />
            <h2 className="mt-1.5 font-heading text-[2.15rem] font-semibold leading-[1.15] text-[#2e1a47] md:text-[2.6rem] lg:text-[2.95rem]">
              Programs offered
            </h2>
          </div>
          <div className="grid min-w-0 items-stretch gap-4 md:grid-cols-[0.88fr_1.12fr]">
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl bg-[#f2ead3] px-6 py-7 shadow-[0_8px_24px_rgba(46,26,71,0.06)] sm:px-7 sm:py-8">
                <div className="mb-4 flex gap-2 text-[#977526]">
                  <Code2 size={19} />
                  <ShieldCheck size={19} />
                </div>
                <p className="text-[15px] leading-7 text-[#45404a] sm:text-base sm:leading-8">
                  The School offers future-focused B.Tech programs with a
                  build-first learning approach that encourages innovation,
                  critical thinking, and continuous practical exposure through
                  industry interaction and project-based learning.
                </p>
              </div>
              <div className="flex flex-1 flex-col justify-between gap-6 rounded-2xl bg-[#2e1a47] px-6 py-7 text-white shadow-[0_12px_28px_rgba(46,26,71,0.18)] sm:px-7 sm:py-8">
                <div className="flex items-start gap-4">
                  <GraduationCap
                    aria-hidden="true"
                    className="shrink-0 text-[#d4b85a]"
                    size={42}
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-[#f3e8c8]">
                      Build skills for what&apos;s next
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/75">
                      Find a programme that matches your interests and start
                      planning your next step.
                    </p>
                  </div>
                </div>
                <Link
                  to="/admissions"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#c9a84c] px-6 py-3.5 text-sm font-semibold text-[#2e1a47] transition hover:bg-[#d4b85a] md:w-fit"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            <div className="grid min-w-0 gap-4 sm:grid-cols-2">
              {programs.map(([href, program], index) => (
                <article
                  key={href}
                  className={`group relative min-h-[190px] overflow-hidden rounded-2xl bg-[#382456] shadow-[0_10px_28px_rgba(46,26,71,0.12)] ${
                    index === programs.length - 1
                      ? "sm:col-span-2 sm:min-h-[220px]"
                      : ""
                  }`}
                >
                  <Link
                    to={href}
                    aria-label={programDisplayTitles[href] || program.title}
                    className="absolute inset-0 z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a84c]"
                  >
                    <span className="sr-only">
                      {programDisplayTitles[href] || program.title}
                    </span>
                  </Link>
                  <img
                    src={asset(programImages[index % programImages.length])}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f2e]/90 via-[#2e1a47]/35 to-transparent transition group-hover:from-[#1a0f2e]/95" />
                  <a
                    href={brochureUrl}
                    download
                    aria-label={`Download brochure for ${programDisplayTitles[href] || program.title}`}
                    className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-[#1a0f2e]/50 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"
                  >
                    <span className="rounded-full bg-[#802030] px-5 py-2.5 text-[13px] font-semibold tracking-wide text-white shadow-lg transition hover:bg-[#6b1a28]">
                      Download Brochure
                    </span>
                  </a>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 p-5 sm:p-6">
                    <h3 className="font-sans text-base font-bold leading-snug text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] sm:text-lg lg:text-xl">
                      {programDisplayTitles[href] || program.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 text-center sm:mb-10">
            <SectionMarker />
            <h2 className="mt-4 font-heading text-3xl font-semibold text-[#2e1a47] sm:text-4xl">
              Specialized Labs &amp; Infrastructure
            </h2>
          </div>
          <div className="relative">
            <button
              type="button"
              aria-label="Show previous facilities"
              onClick={() => scrollLabs(-1)}
              className="absolute -left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#c9a84c] text-[#2e1a47] shadow-md transition hover:bg-[#d4b85a] sm:-left-5"
            >
              <ChevronLeft size={22} />
            </button>
            <div
              ref={labCarouselRef}
              className="grid auto-cols-[minmax(75%,1fr)] grid-flow-col gap-4 overflow-x-auto overscroll-x-contain pb-3 snap-x snap-mandatory sm:auto-cols-[minmax(45%,1fr)] lg:auto-cols-[minmax(31%,1fr)]"
            >
              {labFeatures.map(({ title, image }) => (
                <article
                  key={title}
                  className="group relative flex min-h-[190px] snap-start items-end overflow-hidden rounded-xl bg-[#382456] shadow-[0_8px_24px_rgba(46,26,71,0.12)] sm:min-h-[220px]"
                >
                  <img
                    src={asset(image)}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f2e]/90 via-[#2e1a47]/25 to-transparent" />
                  <h3 className="relative z-10 p-5 font-heading text-base font-semibold leading-snug text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] sm:p-6 sm:text-lg">
                    {title}
                  </h3>
                </article>
              ))}
            </div>
            <button
              type="button"
              aria-label="Show more facilities"
              onClick={() => scrollLabs(1)}
              className="absolute -right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#c9a84c] text-[#2e1a47] shadow-md transition hover:bg-[#d4b85a] sm:-right-5"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16">
        <div className="mx-auto grid max-w-[1400px] items-center gap-8 rounded-2xl bg-[#2e1a47] p-6 text-white sm:p-9 md:grid-cols-[1fr_auto] md:p-12">
          <div>
            <div className="mb-4 flex items-center gap-3 text-[#d4b85a]">
              <Globe2 aria-hidden="true" size={23} />
              <Handshake aria-hidden="true" size={23} />
            </div>
            <h2 className="font-heading text-2xl font-semibold text-[#f3e8c8] sm:text-3xl">
              Industry and International Collaborations
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
              Building global pathways through partnerships, exchange
              programmes, and industry-led learning experiences that prepare
              students for a connected world.
            </p>
          </div>
          <div className="flex min-h-[112px] items-center gap-4 rounded-xl border border-white/15 bg-white/5 px-5 py-4">
            <Building2
              aria-hidden="true"
              className="shrink-0 text-[#d4b85a]"
              size={38}
              strokeWidth={1.5}
            />
            <p className="max-w-[14ch] font-heading text-lg font-semibold text-[#f3e8c8]">
              Happy Science University
            </p>
          </div>
        </div>
      </section>

      <section
        id="team-directory"
        className="px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <SectionMarker />
            <h2 className="mt-4 font-heading text-3xl font-semibold text-[#2e1a47] sm:text-4xl">
              Our Faculty
            </h2>
          </div>
          <article className="mt-8 grid gap-6 rounded-2xl bg-[#f2ead3] p-6 sm:p-8 md:grid-cols-[auto_1fr] md:items-center md:gap-9">
            <img
              src={asset("/assets/Abhay%20Dashrath-DyGOF1Tk.jpg")}
              alt="Dr. Abhay Dasharath"
              className="h-28 w-28 rounded-full object-cover object-[center_35%] sm:h-32 sm:w-32"
              loading="lazy"
            />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8b6a1a]">
                Dean - School of Technology
              </p>
              <h3 className="mt-2 font-heading text-2xl font-semibold text-[#2e1a47]">
                Dr. Abhay Dasharath
              </h3>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-[#45404a] sm:text-base">
                Dr. Abhay Dasharath leads the School of Technology with a focus
                on build-first learning, industry-aligned curriculum, and
                student career readiness across engineering and emerging
                technology programmes.
              </p>
            </div>
          </article>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {faculty.map((member) => (
              <article
                key={member.name}
                className="flex items-center gap-4 border border-[#e7e1eb] bg-white p-4 shadow-[0_6px_20px_rgba(46,26,71,0.06)] sm:flex-col sm:items-start sm:p-5"
              >
                <img
                  src={asset(member.image)}
                  alt={member.name}
                  className="h-16 w-16 shrink-0 rounded-full object-cover sm:h-20 sm:w-20"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-[#2e1a47] sm:text-base">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#6b5b80]">{member.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="career-development"
        className="px-5 pb-10 sm:px-8 md:px-12 md:pb-14 lg:px-16 lg:pb-16"
      >
        <div className="mx-auto grid max-w-[1400px] items-start gap-6 md:grid-cols-[0.9fr_1.35fr] md:gap-12 lg:gap-16">
          <div>
            <SectionMarker />
            <h2 className="mt-5 font-heading text-[1.7rem] font-semibold uppercase leading-tight tracking-wide text-[#2e1a47] sm:text-3xl">
              Career Development Initiatives at School of Technology
            </h2>
          </div>
          <p className="text-[15px] leading-7 text-[#45404a] sm:text-base sm:leading-8">
            Beyond classroom learning, the School emphasizes holistic career
            development through coding practice, technical workshops,
            hackathons, communication training, internship guidance, resume
            building, LinkedIn profile development, mock interviews, and
            placement preparation that begins in the early semesters rather
            than the final year. Regular interactions with technology leaders,
            founders, product managers, cloud architects, cybersecurity
            experts, and hiring professionals help students understand industry
            expectations while building a strong professional portfolio.
          </p>
        </div>
      </section>

      <section
        id="learning-philosophy"
        className="px-5 py-10 sm:px-8 md:px-12 md:py-14 lg:px-16 lg:py-16"
      >
        <div className="mx-auto max-w-[1400px] bg-white px-6 py-8 shadow-[0_8px_30px_rgba(46,26,71,0.06)] sm:px-9 sm:py-10 md:px-12 md:py-12">
          <SectionMarker />
          <h2 className="mt-4 font-heading text-3xl font-semibold text-[#2e1a47] sm:text-4xl">
            From learning to professional readiness
          </h2>
          <p className="mt-5 max-w-[72ch] text-[15px] leading-7 text-[#45404a] sm:text-base sm:leading-8">
            <span className="font-heading italic text-[#2e1a47]">
              At SNBP University - School of Technology,
            </span>{" "}
            learning goes beyond explanation. Students develop strong academic
            foundations, practise with guidance, apply their knowledge to
            relevant challenges and communicate their learning with
            confidence.
          </p>
          <p className="mt-4 max-w-[72ch] text-[15px] leading-7 text-[#45404a] sm:text-base sm:leading-8">
            This approach helps transform academic knowledge into practical
            capability and professional readiness.
          </p>
          <p className="mt-6 font-heading text-lg font-semibold italic text-[#2e1a47] sm:text-xl">
            Learn with Purpose. Apply with Confidence. Progress with Impact.
          </p>
        </div>
      </section>

      <section
        id="events"
        className="px-5 pb-14 sm:px-8 md:px-12 md:pb-20 lg:px-16"
      >
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <SectionMarker />
            <h2 className="mt-4 font-heading text-3xl font-semibold text-[#2e1a47] sm:text-4xl">
              Events
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#5b5660] sm:text-base">
              A multi-frame look at moments that shape campus life at the School
              of Technology.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Workshops",
                description:
                  "Hands-on sessions with mentors, tools, and real project builds.",
                image: "/assets/DSC03873%20(1)-OH1umETK.webp",
              },
              {
                title: "Tech Fest",
                description:
                  "Talks, demos, and campus energy - innovation on full display.",
                image: "/assets/2-VeoQMymg.webp",
              },
            ].map((event) => (
              <article
                key={event.title}
                className="group relative min-h-[250px] overflow-hidden rounded-2xl bg-[#382456] sm:min-h-[300px]"
              >
                <img
                  src={asset(event.image)}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f2e]/90 via-[#2e1a47]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d4b85a]">
                    School of Technology
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-semibold text-white sm:text-3xl">
                    {event.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/85 sm:text-base">
                    {event.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
