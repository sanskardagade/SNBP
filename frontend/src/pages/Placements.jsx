import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  Brain,
  ChartNoAxesColumnIncreasing,
  FileText,
  FolderKanban,
  Handshake,
  LaptopMinimal,
  Linkedin,
  Lightbulb,
  MessagesSquare,
  MicVocal,
  Presentation,
  Search,
  Sparkles,
  Target,
  UsersRound,
  Wrench,
} from "lucide-react";
import placementInterview from "../assets/placement-interview.png";

const careerSupport = [
  { label: "Resume Building", icon: FileText },
  { label: "Portfolio Development", icon: FolderKanban },
  { label: "Skill-building workshops", icon: Wrench },
  { label: "Interview Preparation", icon: MessagesSquare },
  { label: "Group Discussion Practice", icon: UsersRound },
  { label: "Aptitude & Reasoning Basics", icon: Brain },
  { label: "Presentation Skills", icon: Presentation },
  { label: "Writing & Documentation skills", icon: FileText },
  { label: "Internship Readiness", icon: BriefcaseBusiness },
  { label: "Professional Etiquette", icon: Handshake },
  { label: "Personality Development", icon: Sparkles },
  { label: "LinkedIn Profile Guidance", icon: Linkedin },
  { label: "Public Speaking", icon: MicVocal },
  { label: "Career Counselling", icon: Target },
];

const industryPrograms = [
  {
    title: "Boardroom With Builders",
    body: "Students interact with developers, CTOs, product managers, HR leaders, founders, data scientists, cloud architects and cyber security professionals.",
    icon: UsersRound,
  },
  {
    title: "Hiring Manager Clinics",
    body: "Students learn how resumes are shortlisted, how interviews are conducted, how HR rounds work, how to explain projects and how to prepare for company-specific hiring processes.",
    icon: Search,
  },
  {
    title: "Corporate Sprint Challenges",
    body: "Focused challenges in coding, AI, data, cyber security, cloud deployment and app prototyping help students improve speed, problem-solving, collaboration and practical execution.",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    title: "Tech Founder Fridays",
    body: "Founder-led sessions help students understand startups, digital products, freelancing, SaaS ideas and entrepreneurship.",
    icon: Lightbulb,
  },
];

const communicationSkills = [
  { label: "Classroom Participation", icon: Presentation },
  { label: "Presentations", icon: ChartNoAxesColumnIncreasing },
  { label: "Group Discussions", icon: UsersRound },
  { label: "Events", icon: Sparkles },
  { label: "Writing Tasks", icon: FileText },
  { label: "Club Activities", icon: Handshake },
];

const digitalSkills = [
  { label: "MS Office / Google Workspace", icon: LaptopMinimal },
  { label: "Presentation tools", icon: Presentation },
  { label: "AI tools for learning & productivity", icon: Brain },
  { label: "Basic data analysis", icon: ChartNoAxesColumnIncreasing },
  { label: "Online Research Skills", icon: Search },
  { label: "Digital communication", icon: MessagesSquare },
  { label: "LinkedIn profile building", icon: Linkedin },
  { label: "Resume writing tools", icon: FileText },
  { label: "Content & documentation tools", icon: FolderKanban },
  { label: "Portfolio creation", icon: BriefcaseBusiness },
];

function SectionMark() {
  return <span aria-hidden="true" className="mb-3 block h-1 w-12 rounded-full bg-[#c9a84c]" />;
}

function SkillGrid({ items }) {
  return (
    <div className="mt-6 grid w-full max-w-[1080px] grid-cols-1 gap-3 sm:grid-cols-2 md:mt-8 md:gap-4">
      {items.map(({ label, icon: Icon }) => (
        <div
          key={label}
          className="relative flex min-h-[70px] items-center gap-3 rounded-xl bg-[#faf8f5] px-4 py-4 text-left shadow-[0_8px_22px_rgba(46,26,71,0.1)] md:min-h-[86px] md:gap-3.5 md:rounded-2xl md:px-5 md:py-5"
        >
          <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center text-[#2e1a47] md:h-9 md:w-9">
            <Icon size={25} strokeWidth={1.7} />
          </span>
          <span className="text-[13px] font-medium leading-snug text-[#3a3a3a] md:text-sm">{label}</span>
          <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 rounded-br-xl border-b-2 border-r-2 border-[#c9a84c]" />
        </div>
      ))}
    </div>
  );
}

function SkillsSection({ eyebrow, title, description, items }) {
  return (
    <section className="bg-[#faf8f5] px-4 py-8 md:px-6 md:py-10 lg:px-10">
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center rounded-[1.25rem] bg-[#d4d1d6] px-5 py-9 text-center shadow-[0_24px_55px_rgba(46,26,71,0.22)] sm:px-8 md:rounded-[1.5rem] md:px-10 md:py-10">
        <SectionMark />
        <p className="text-[11px] font-medium text-[#5a5a5a] md:text-xs">{eyebrow}</p>
        <h2 className="placement-heading mt-1 max-w-[700px] text-[1.3rem] font-semibold leading-tight text-[#2e1a47] sm:text-2xl md:text-[1.7rem]">
          {title}
        </h2>
        <p className="mt-3 max-w-[640px] text-[11px] leading-[1.65] text-[#4a4a4a] md:text-xs">{description}</p>
        <SkillGrid items={items} />
      </div>
    </section>
  );
}

function CareerJourney() {
  const positions = [
    { x: 13, y: 10 },
    { x: 35, y: 10 },
    { x: 57, y: 10 },
    { x: 29, y: 37, tone: "cream" },
    { x: 47, y: 37, tone: "cream" },
    { x: 65, y: 37, tone: "cream" },
    { x: 29, y: 64 },
    { x: 47, y: 64 },
    { x: 65, y: 64 },
    { x: 42, y: 91, tone: "cream" },
    { x: 65, y: 91, tone: "cream" },
    { x: 84, y: 22 },
    { x: 12, y: 50, tone: "cream" },
    { x: 84, y: 77 },
  ];

  return (
    <section className="bg-[#faf8f5] px-4 pb-14 pt-2 md:px-6 md:pb-20 lg:px-10">
      <div className="mx-auto max-w-[1080px]">
        <div className="relative hidden aspect-[1.42/1] md:block">
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1000 760"
            preserveAspectRatio="none"
          >
            <path
              d="M130 76 H570 C710 76 775 92 820 130 C860 165 860 205 820 240 C780 275 720 280 650 280 H290 C205 280 145 315 120 380 C100 445 165 490 290 490 H650 C730 490 790 515 820 555 C850 595 820 630 780 655 C735 690 695 690 650 690 H420"
              fill="none"
              stroke="#38244e"
              strokeWidth="4"
              strokeDasharray="10 10"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          {careerSupport.map(({ label, icon: Icon }, index) => {
            const position = positions[index];
            const cream = position.tone === "cream";
            const sideLabel = index === 11 || index === 12 || index === 13;

            return (
              <div
                key={label}
                className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                style={{ left: `${position.x}%`, top: `${position.y}%` }}
              >
                <span className={`flex h-11 w-11 items-center justify-center rounded-full shadow-[0_5px_13px_rgba(56,36,78,0.22)] ${cream ? "bg-[#f4eac8] text-[#38244e]" : "bg-[#38244e] text-[#f4eac8]"}`}>
                  <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
                </span>
                <span
                  className={`${sideLabel ? "absolute top-1/2 w-[112px] -translate-y-1/2" : "mt-2 max-w-[130px]"} rounded-xl px-3 py-2 text-center text-[11px] font-semibold leading-tight ${
                    cream ? "bg-[#f4eac8] text-[#38244e]" : "bg-[#38244e] text-[#f4eac8]"
                  } ${
                    index === 11 || index === 13 ? "left-[calc(100%+8px)]" : ""
                  } ${index === 12 ? "right-[calc(100%+8px)]" : ""}`}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        <ol className="mx-auto max-w-[520px] md:hidden">
          {careerSupport.map(({ label, icon: Icon }, index) => (
            <li key={label} className="relative flex gap-4 pb-5 last:pb-0">
              {index < careerSupport.length - 1 && (
                <span aria-hidden="true" className="absolute bottom-0 left-5 top-10 border-l-2 border-dashed border-[#38244e]/40" />
              )}
              <span className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${index % 3 === 0 ? "bg-[#f4eac8] text-[#38244e]" : "bg-[#38244e] text-[#f4eac8]"}`}>
                <Icon aria-hidden="true" size={20} />
              </span>
              <span className={`mt-1 flex-1 rounded-xl px-4 py-3 text-sm font-semibold ${index % 3 === 0 ? "bg-[#f4eac8] text-[#38244e]" : "bg-[#38244e] text-[#f4eac8]"}`}>
                {label}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function Placements() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="relative mx-auto flex min-h-[480px] max-w-[1600px] flex-col items-center px-4 py-10 md:min-h-[560px] md:flex-row md:px-6 md:py-14 lg:px-10">
          <div className="relative z-10 w-full md:max-w-[48%] lg:max-w-[560px]">
            <h1 className="placement-heading text-[clamp(1.9rem,6.5vw,3.4rem)] font-semibold leading-[1.12] text-[#38244e]">
              Placement &amp; Career Readiness
            </h1>
            <p className="mt-4 max-w-[440px] text-[15px] font-light leading-[1.75] text-[#3a3a3a] md:mt-5 md:text-base">
              A degree shows what you studied. Your communication, portfolio and confidence show what you are ready to become.
            </p>
          </div>
          <img
            src={placementInterview}
            alt="Students in a placement interview panel"
            className="mt-8 w-full max-w-[600px] object-contain md:absolute md:right-[2%] md:top-1/2 md:mt-0 md:h-[128%] md:max-w-none md:w-[72%] md:-translate-y-1/2 md:object-right lg:right-[3%] lg:w-[76%]"
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#faf8f5] px-4 py-14 md:px-6 md:py-20 lg:px-10 lg:py-24">
        <div className="relative z-10 mx-auto max-w-[1100px]">
          <div className="mb-10 text-center md:mb-14">
            <div className="flex justify-center"><SectionMark /></div>
            <h2 className="placement-heading text-[1.75rem] font-semibold text-[#38244e] sm:text-3xl md:text-4xl">
              Career Build Support Includes
            </h2>
          </div>
        </div>
      </section>

      <CareerJourney />

      <section className="bg-[#faf8f5] px-4 py-14 md:px-6 md:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1000px] text-center">
          <h2 className="placement-heading text-[1.45rem] font-semibold uppercase leading-[1.3] tracking-[0.02em] text-[#2e1a47] sm:text-2xl md:text-[2rem]">
            Your First Interview Is
            <span className="block">Prepared For Long</span>
            <span className="block">Before It Happens</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[760px] text-[15px] leading-[1.8] text-[#3a3a3a] md:text-base">
            <strong className="font-heading text-base font-semibold italic text-[#2e1a47] md:text-[17px]">At SNBP University</strong>
            , placement preparation is not treated as a final-year activity. Students are guided from the early semesters through coding practice, project work, aptitude preparation, communication development, resume building, LinkedIn profile improvement, internships, mock interviews and technical interview training.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#faf8f5] px-4 py-14 md:px-6 md:py-20 lg:px-10 lg:py-24">
        <div className="relative z-10 mx-auto max-w-[1100px]">
          <div className="mb-10 text-center md:mb-14">
            <div className="flex justify-center"><SectionMark /></div>
            <h2 className="placement-heading text-[1.75rem] font-semibold text-[#2e1a47] sm:text-3xl md:text-4xl">
              Industry Interface That Matters
            </h2>
            <p className="mx-auto mt-3 max-w-[640px] text-[15px] leading-[1.7] text-[#3a3a3a] md:text-base">
              SNBP brings students closer to workplace expectations through practical industry engagement.
            </p>
          </div>
          <div className="grid overflow-hidden rounded-2xl md:grid-cols-2 md:rounded-[1.5rem]">
            {industryPrograms.map(({ title, body, icon: Icon }, index) => {
              const creamTile = index === 0 || index === 3;
              return (
              <article
                key={title}
                className={`flex flex-col items-center px-5 py-9 text-center sm:px-7 sm:py-12 md:px-12 md:py-14 ${
                  creamTile ? "bg-[#f0e6d4] text-[#2e1a47]" : "bg-[#2e1a47] text-[#f5f0e8]"
                }`}
              >
                <span className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full sm:h-16 sm:w-16 ${creamTile ? "bg-[#2e1a47] text-[#f4eac8]" : "bg-[#f0e6d4] text-[#2e1a47]"}`}>
                  <Icon aria-hidden="true" size={30} strokeWidth={1.7} />
                </span>
                <h3 className="placement-heading text-[1.45rem] font-semibold leading-tight sm:text-[1.85rem] md:text-[2.15rem]">
                  {title}
                </h3>
                <p className={`mt-3 max-w-[340px] text-sm leading-[1.7] md:text-[15px] ${creamTile ? "text-[#3a3a3a]" : "text-white/85"}`}>
                  {body}
                </p>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <SkillsSection
        eyebrow="Students Are Guided To Improve"
        title="Their Communication, Confidence & Personality"
        description="At SNBP University, students build clarity, presence and professional personality through structured practice across academic and campus life — preparing them to speak, lead and collaborate with confidence."
        items={communicationSkills}
      />

      <SkillsSection
        eyebrow="Students Are Guided To"
        title="Develop and Hone Their Digital Skills"
        description="Whether in technology, management, design, media or science, digital readiness is essential in today's workplace. Students develop practical digital skills that strengthen academic performance and career preparation."
        items={digitalSkills}
      />

      <section className="bg-[#faf8f5] px-4 pb-10 pt-2 md:px-6 md:pb-14 lg:px-10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-5 rounded-xl bg-[#2e1a47] px-6 py-6 text-[#f5f0e8] sm:flex-row sm:items-center sm:px-8 md:rounded-2xl md:px-10">
          <p className="placement-heading max-w-[760px] text-sm font-semibold uppercase leading-relaxed tracking-wide sm:text-base">
            Speak with our admissions team to understand the programme, curriculum and admission pathway
          </p>
          <Link
            to="/admissions"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#f4eac8] px-7 py-3 text-xs font-semibold text-[#38244e] transition hover:bg-white"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </>
  );
}
