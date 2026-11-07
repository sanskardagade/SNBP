import {
  BadgeCheck,
  BookOpenCheck,
  ClipboardCheck,
  GraduationCap,
  MessageCircle,
  UserRoundCheck
} from "lucide-react";
import { asset } from "../constants/assets.js";

const admissionHero = asset("/assets/admission-hero-DPe1ntg_.jpeg");
const admissionChakra = asset("/assets/ADMISN%20HALF%20CHAKRA%20copy-BFgFHIyr.png");

/*
const technologyHeaders = [
  "Specialisation / Program",
  "Academic Qualification",
  "Mandatory Subjects",
  "Minimum Percentage (General)",
  "Minimum Percentage (Reserved / EWS / PwD – Maharashtra)",
  "Entrance Exam Requirement"
];

const technologyPrograms = [
  "B.Tech Computer Science Engineering",
  "B.Tech Information Technology",
  "B.Tech CSE (AI & Machine Learning)",
  "B.Tech CSE (Data Science)",
  "B.Tech CSE (Cyber Security)"
].map((program) => ({
  program,
  qualification: "Passed 10+2 / HSC Science",
  subjects: "Physics & Mathematics + Chemistry / Biology / CS / IT",
  general: "45%",
  reserved: "40%",
  entrance: "Valid score in MHT-CET / JEE Main / University Entrance"
}));
*/

const artsHeaders = [
  "Degree",
  "Program / Specialization",
  "Duration",
  "Minimum Academic Requirement",
  "Entrance / Additional Requirements",
  "Intake"
];

const artsPrograms = [
  ["BBA", "Business + AI", "3 Years (6 semesters)", "10+2, any stream; minimum percentage to be confirmed", "To be announced", "To be announced"],
  ["BCA", "Code + AI", "3 Years (6 semesters)", "10+2; Mathematics/Computer Science preferred; minimum percentage to be confirmed", "To be announced", "To be announced"],
  ["MCA", "Advanced Computing + AI", "2 Years (4 semesters)", "BCA / B.Sc. / Bachelor’s with Mathematics", "To be announced", "To be announced"],
  ["MBA", "Management + AI", "2 Years (4 semesters)", "Bachelor’s degree; CAT/MAT/CMAT requirements to be confirmed", "CAT/MAT/CMAT details to be confirmed", "To be announced"]
].map(([degree, program, duration, qualification, requirements, intake]) => ({
  degree,
  program,
  duration,
  qualification,
  general: requirements,
  reserved: intake
}));

const admissionSteps = [
  {
    title: "Enquire",
    description:
      "Connect with the admissions team to understand programs, eligibility, fees, scholarships and career pathways.",
    icon: MessageCircle
  },
  {
    title: "Counselling",
    description: "Get guidance on the right program based on your interests, aptitude and career goals.",
    icon: UserRoundCheck
  },
  {
    title: "Apply",
    description: "Submit the application form and required documents.",
    icon: ClipboardCheck
  },
  {
    title: "Verify",
    description: "Complete eligibility and document verification.",
    icon: BadgeCheck
  },
  {
    title: "Confirm Admission",
    description: "Complete fee payment as per university norms and admission formalities.",
    icon: BookOpenCheck
  },
  {
    title: "Begin the Journey",
    description: "Start with orientation, academic on boarding and student induction.",
    icon: GraduationCap
  }
];

const admissionProcessPositions = [
  { textLeft: 11, textTop: 4, iconLeft: 20.5, iconTop: 34.5 },
  { textLeft: 27, textTop: 19, iconLeft: 31.4, iconTop: 35.8 },
  { textLeft: 37.5, textTop: 34, iconLeft: 40.6, iconTop: 40.7 },
  { textLeft: 45.5, textTop: 49, iconLeft: 48.3, iconTop: 47.6 },
  { textLeft: 50, textTop: 64, iconLeft: 51.8, iconTop: 57.4 },
  { textLeft: 51.5, textTop: 79, iconLeft: 52.2, iconTop: 68.5 }
];

function EligibilityTable({ title, headers, rows, minWidth, technology = false }) {
  return (
    <section>
      <div className="mb-6 text-center md:mb-8">
        <div aria-hidden="true" className="mb-3 flex justify-center">
          <span className="h-3 w-3 rotate-45 bg-[#c9a84c]" />
        </div>
        <h2 className="placement-heading text-[1.75rem] font-semibold text-[#2e1a47] md:text-[2.15rem] lg:text-[2.35rem]">
          {title}
        </h2>
      </div>

      <div className="overflow-hidden rounded-[1.25rem] border border-[#2e1a47]/10 shadow-[0_12px_40px_rgba(46,26,71,0.08)] md:rounded-[1.5rem]">
        <div className="overflow-x-auto">
          <table className={`w-full border-collapse text-left ${minWidth}`}>
            <thead>
              <tr className="bg-[#2e1a47]">
                {headers.map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="px-4 py-4 font-heading text-[0.95rem] font-semibold leading-snug text-[#f3e8c8] md:px-5 md:py-5 md:text-[1.05rem] lg:px-6"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => {
                const cells = technology
                  ? [row.program, row.qualification, row.subjects, row.general, row.reserved, row.entrance]
                  : [row.degree, row.program, row.duration, row.qualification, row.general, row.reserved];

                return (
                  <tr
                    key={`${row.degree ?? "technology"}-${row.program}`}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#e8d9ef]/55"}
                  >
                    {cells.map((cell, cellIndex) => (
                      <td
                        key={`${row.program}-${cellIndex}`}
                        className={`px-4 py-4 leading-relaxed md:px-5 md:py-5 lg:px-6 ${
                          cellIndex === 0
                            ? "font-heading text-[0.98rem] font-semibold text-[#2e1a47] md:text-[1.05rem]"
                            : "font-sans text-[14px] font-light text-[#3a3a3a] md:text-[15px]"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
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

function AdmissionStep({ step, index }) {
  const Icon = step.icon;

  return (
    <li className="flex min-w-0 items-start gap-4 rounded-2xl border border-[#2e1a47]/10 bg-white p-5 shadow-[0_12px_35px_rgba(46,26,71,0.07)] sm:p-6">
      <span
        aria-hidden="true"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2e1a47] text-[#d4b85a] sm:h-14 sm:w-14"
      >
        <Icon size={23} />
      </span>
      <div className="min-w-0">
        <h3 className="placement-heading flex flex-wrap items-baseline gap-x-2.5 gap-y-1 text-[#2e1a47]">
          <span className="text-2xl font-semibold leading-none text-[#802030]">{index + 1}</span>
          <span className="text-xl font-semibold leading-tight sm:text-[1.35rem]">{step.title}</span>
        </h3>
        <p className="mt-2 text-[14px] font-light leading-relaxed text-[#6b6575]">{step.description}</p>
      </div>
    </li>
  );
}

function AdmissionProcessStep({ step, index }) {
  const { textLeft, textTop } = admissionProcessPositions[index];

  return (
    <li
      className="absolute z-30 pr-4"
      style={{ left: `${textLeft}%`, top: `${textTop}%`, right: "2%" }}
    >
      <h3 className="placement-heading flex flex-nowrap items-baseline gap-3 whitespace-nowrap text-[#2e1a47]">
        <span className="text-[2.55rem] font-semibold leading-none text-[#802030] lg:text-[2.9rem]">
          {index + 1}
        </span>
        <span className="text-[1.3rem] font-semibold leading-none lg:text-[1.5rem]">{step.title}</span>
      </h3>
      <p className="mt-2 text-[13px] font-light leading-[1.55] text-[#6b6575] lg:text-[15px]">
        {step.description}
      </p>
    </li>
  );
}

function AdmissionProcess() {
  return (
    <section id="admission-process" className="ai-tadka bg-white px-4 py-14 md:px-6 md:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-8 text-center md:mb-10">
          <p className="eyebrow !text-[#802030]">Your next steps</p>
          <h2 className="placement-heading mt-3 text-3xl font-semibold text-[#2e1a47] sm:text-4xl">
            Admission Process
          </h2>
        </div>
        <ol className="mx-auto max-w-[420px] space-y-7 md:hidden">
          {admissionSteps.map((step, index) => (
            <AdmissionStep key={step.title} step={step} index={index} />
          ))}
        </ol>
        <div className="relative mx-auto hidden h-[780px] w-full max-w-[1280px] md:block lg:h-[840px]">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[-13%] z-0 translate-y-[20%]"
            style={{ width: "1392px", height: "1392px" }}
          >
            <img
              alt=""
              className="pointer-events-none absolute inset-0 h-full w-full select-none object-contain object-left"
              src={admissionChakra}
              style={{ mixBlendMode: "screen" }}
            />
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20">
            {admissionSteps.map((step, index) => {
              const { iconLeft, iconTop } = admissionProcessPositions[index];
              const Icon = step.icon;

              return (
                <span
                  key={step.title}
                  className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:h-12 lg:w-12"
                  style={{ left: `${iconLeft}%`, top: `${iconTop}%` }}
                >
                  <Icon size={22} className="text-[#d4b85a]" />
                </span>
              );
            })}
          </div>
          <ol className="absolute inset-0">
            {admissionSteps.map((step, index) => (
              <AdmissionProcessStep key={step.title} step={step} index={index} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default function Admissions() {
  return (
    <>
      <section
        className="admissions-hero bg-[#2e1a47]"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(46, 26, 71, 0.9), rgba(46, 26, 71, 0.65) 55%, rgba(46, 26, 71, 0.3)), url("${admissionHero}")`
        }}
      >
        <div className="container-width py-12 md:py-16">
          <h1 className="placement-heading max-w-4xl text-[2.35rem] font-medium leading-[1.15] sm:text-5xl lg:text-[3.75rem]">
            Admission Process and Eligibility Criteria
          </h1>
        </div>
      </section>

      <div
        id="eligibility-criteria"
        className="ai-tadka relative overflow-hidden bg-[#faf8f5] px-4 py-12 md:px-6 md:py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1400px] space-y-14 md:space-y-16 lg:space-y-20">
          {/*
          <EligibilityTable
            title="Eligibility Criteria — School of Technology"
            headers={technologyHeaders}
            rows={technologyPrograms}
            minWidth="min-w-[980px]"
            technology
          />
          */}
          <EligibilityTable
            title="Eligibility Criteria — School of Business Management"
            headers={artsHeaders}
            rows={artsPrograms}
            minWidth="min-w-[920px]"
          />
        </div>
      </div>

      <AdmissionProcess />
    </>
  );
}
