import { useState } from "react";
import { ArrowRight, Award, ChevronLeft, ChevronRight, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import { asset, aboutCampusImage } from "../constants/assets.js";

const journeyHero = asset("/assets/About%20Us%20Hero1-dKP-roMH.webp");
const campusSketch = asset("/assets/bg-CZ_IxR8g.png");
const groupCampusImage = asset("/assets/section%202-C7nsmysE.jpeg");
const groupLogoStrip = asset("/assets/Logo%20Strip-BkS5v6YR.png");

const milestones = [
  {
    year: "1996",
    text: "The Subhadra Educational Society was founded, laying the groundwork for the SNBP Group.",
    image: campusSketch,
    imageAlt: "Architectural sketch of the SNBP campus",
  },
  {
    year: "1997",
    text: "The very first SNBP School was started in Yerwada.",
    image: asset("/assets/snbp-building.jpg-D9NPPDym.jpeg"),
    imageAlt: "SNBP School and Junior College campus building",
  },
  {
    year: "2008–2009",
    text: "The society expanded into higher education, establishing SNBP colleges for arts, commerce, science, management, and law affiliated with Savitribai Phule Pune University.",
    image: asset("/assets/branch_morwadi.jpg-rAnTrM_C.jpeg"),
    imageAlt: "S.N.B.P. International School Morwadi campus",
  },
  {
    year: "2026",
    text: "SNBP University was officially established as a UGC-approved State Private University located in Wakad, Pune.",
    image: aboutCampusImage,
    imageAlt: "SNBP University campus building",
  },
];

const recognitions = [
  {
    title: "London Book Of Records 2025",
  },
  {
    title: "School Chain Of The Years 2023",
  },
  {
    title: "Excellence In Education Award",
    description: "Honoured for academic innovation and student success.",
  },
  {
    title: "Guinness World Record",
  },
  {
    title: "London Book of World Records 2025",
  },
];

function SectionTitle({ children }) {
  return (
    <>
      <span aria-hidden="true" className="mx-auto mb-3 block h-3 w-3 rotate-45 bg-[#c9a84c]" />
      <h2 className="font-heading text-3xl font-semibold text-[#2e1a47] md:text-4xl">
        {children}
      </h2>
    </>
  );
}

function JourneyTimeline() {
  return (
    <section
      id="journey-milestones"
      className="ai-tadka relative overflow-hidden bg-[#faf8f5] py-14 md:py-20"
    >
      <img
        src={campusSketch}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.12] md:h-[700px] md:w-[700px]"
      />
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-6 lg:px-10">
        <div className="mb-12 text-center md:mb-16">
          <SectionTitle>Our Journey &amp; Milestones</SectionTitle>
          <p className="mx-auto mt-4 max-w-[640px] font-heading text-base italic leading-relaxed text-[#2e1a47]/90 md:text-lg">
            “Our timeline of transformation: Charting nearly three decades of academic innovation,
            holistic growth, and community impact.”
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-4 top-0 border-l-2 border-dotted border-[#2e1a47]/35 md:left-1/2 md:-translate-x-1/2"
          />
          <div className="relative space-y-10 pt-6 md:space-y-20 md:pt-8">
            {milestones.map((milestone, index) => {
              const image = (
                <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#f5f0e8] shadow-lg md:max-w-[400px] lg:max-w-[420px]">
                  <img
                    src={milestone.image}
                    alt={milestone.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full scale-110 object-cover object-center"
                  />
                </div>
              );
              const detail = (
                <article className="w-full rounded-2xl bg-[#f0e8dc] px-5 py-5 shadow-[0_8px_20px_rgba(46,26,71,0.06)] sm:px-6 sm:py-6 md:max-w-[400px] md:px-7 md:py-7 lg:max-w-[420px]">
                  <div className="flex items-center gap-3">
                    <Landmark
                      aria-hidden="true"
                      className="h-8 w-8 shrink-0 text-[#9b7a3a] md:h-10 md:w-10"
                    />
                    <h3 className="font-heading text-[1.85rem] font-semibold leading-none text-[#2e1a47] md:text-[2.1rem]">
                      {milestone.year}
                    </h3>
                  </div>
                  <p className="mt-3 text-[14px] font-normal leading-[1.65] text-[#2e1a47]/85 sm:text-[15px] md:mt-4 md:text-base md:leading-[1.7]">
                    {milestone.text}
                  </p>
                </article>
              );

              return (
                <div key={milestone.year} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute left-4 top-4 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[3px] border-[#faf8f5] bg-[#2e1a47] md:left-1/2 md:top-1/2 md:h-4 md:w-4"
                  />
                  <div className="flex flex-col gap-4 pl-10 md:hidden">
                    {image}
                    {detail}
                  </div>
                  <div className="relative hidden items-center gap-6 md:grid md:grid-cols-2 md:gap-16 lg:gap-24">
                    <div className="flex justify-end pr-6 lg:pr-10">
                      {index % 2 === 0 ? image : detail}
                    </div>
                    <div className="flex justify-start pl-6 lg:pl-10">
                      {index % 2 === 0 ? detail : image}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function RecognitionSection() {
  const [index, setIndex] = useState(2);
  const recognition = recognitions[index];
  const previous = () => setIndex((current) => (current === 0 ? recognitions.length - 1 : current - 1));
  const next = () => setIndex((current) => (current + 1) % recognitions.length);

  return (
    <section className="ai-tadka bg-[#faf8f5] py-14 md:py-20">
      <div className="mx-auto max-w-[1180px] px-4 md:px-6">
        <div className="text-center">
          <SectionTitle>SNBP Group of Institutions</SectionTitle>
          <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-[#7b6642]">
            Recognition &amp; Milestones
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="flex flex-wrap justify-center gap-2">
            {recognitions.map((item, itemIndex) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setIndex(itemIndex)}
                aria-pressed={itemIndex === index}
                className={`rounded-full px-3 py-2 text-xs font-bold transition md:text-sm ${
                  itemIndex === index
                    ? "bg-[#3b245b] text-white"
                    : "bg-white text-[#3b245b] hover:bg-[#f0e8dc]"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
          <article className="mt-7 rounded-2xl bg-white p-7 text-center shadow-[0_12px_36px_rgba(46,26,71,0.09)] md:p-10">
            <Award aria-hidden="true" className="mx-auto h-10 w-10 text-[#c9a84c]" />
            <h3 className="mt-4 font-heading text-xl font-semibold text-[#2e1a47] md:text-2xl">
              {recognition.title}
            </h3>
            {recognition.description ? (
              <p className="mt-3 text-sm leading-7 text-slate-600">{recognition.description}</p>
            ) : null}
          </article>
          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              aria-label="Previous recognition"
              onClick={previous}
              className="grid h-10 w-10 place-items-center rounded-full border border-[#3b245b]/20 text-[#3b245b] transition hover:bg-[#3b245b] hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next recognition"
              onClick={next}
              className="grid h-10 w-10 place-items-center rounded-full border border-[#3b245b]/20 text-[#3b245b] transition hover:bg-[#3b245b] hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function OurJourney() {
  return (
    <div>
      <section className="ai-tadka relative overflow-hidden bg-white">
        <img
          src={journeyHero}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          className="pointer-events-none absolute right-[8%] top-0 hidden h-[120%] w-[90%] -translate-y-[14%] scale-[1.22] object-contain object-right md:block md:right-[10%] md:w-[85%] md:-translate-y-[16%] md:scale-[1.26] lg:right-[12%] lg:w-[80%] lg:-translate-y-[18%] lg:scale-[1.3]"
        />
        <div className="relative z-10 mx-auto flex max-w-[1500px] items-center px-4 py-10 md:min-h-[440px] md:px-6 md:py-16 lg:min-h-[500px] lg:px-10 lg:py-20">
          <div className="max-w-[520px] md:max-w-[560px] lg:max-w-[600px]">
            <h1 className="font-heading text-[2.2rem] font-semibold leading-[1.15] text-[#2e1a47] md:text-[2.75rem] lg:text-[3.25rem]">
              Beyond Degrees: Shaping Leaders for Every Direction.
            </h1>
            <p className="mt-4 text-[15px] font-light leading-[1.7] text-[#3a3a3a] md:mt-5 md:text-base md:leading-[1.75]">
              Anchored by nearly three decades of educational legacy, SNBP University empowers
              students with world-class academics, industry innovation, and the character to lead in
              a changing world.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white md:hidden">
        <img
          src={campusSketch}
          alt="Sketch of SNBP University"
          loading="eager"
          decoding="async"
          className="mx-auto w-full object-contain"
        />
      </section>

      <section id="about-snbp-group" className="relative overflow-hidden bg-[#faf8f5] py-14 md:py-20">
        <img
          src={campusSketch}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute -right-36 -top-28 h-[520px] w-[520px] object-contain opacity-[0.12] md:-right-64 md:-top-44 md:h-[700px] md:w-[700px]"
        />
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-6 lg:px-10">
          <div className="mb-12 text-center md:mb-16">
            <SectionTitle>About SNBP Group</SectionTitle>
          </div>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div>
              <p className="text-[15px] leading-[1.7] text-[#3a3a3a] md:text-base md:leading-[1.75]">
                The SES’s SNBP Group is one of Pune&apos;s leading education groups, dedicated to
                providing quality education from preschool to higher education. Established in 1997
                under the aegis of the Subhadra Education Society, the group was founded by Dr. D.K.
                Bhosale and Dr. Vrishali Bhosale with the vision of creating an education ecosystem
                that nurtures academic excellence, innovation, values, and holistic development.
              </p>
              <p className="mt-6 text-[15px] leading-[1.7] text-[#3a3a3a] md:text-base md:leading-[1.75]">
                SNBP group follows a student-centric approach that combines academic rigor with
                experiential learning, industry collaboration, research, entrepreneurship, sports,
                performing arts, and community engagement. Through modern infrastructure,
                experienced faculty, innovation-driven pedagogy, and a strong focus on future-ready
                skills, SNBP prepares learners to thrive in an evolving global landscape.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
              <img
                src={groupCampusImage}
                alt="SNBP Group of Institutes campuses across Pune City"
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] min-h-[280px] w-full object-cover object-center md:min-h-[360px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="SNBP Group at a glance" className="ai-tadka bg-[#2e1a47] py-10 text-white md:py-12">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 divide-y divide-white/20 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-6">
          {[
            ["29", "Years Of Educational Excellence"],
            ["20+", "Institutes"],
            ["30000+", "Students Across Campuses"],
          ].map(([value, label]) => (
            <div key={label} className="px-4 py-5 text-center sm:px-6 md:py-3">
              <p className="font-heading text-4xl font-semibold text-[#e6c96f] md:text-5xl">
                {value}
              </p>
              <p className="mt-2 text-sm text-white/85 md:text-base">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <JourneyTimeline />

      <section
        aria-label="SNBP motto"
        className="relative w-full overflow-hidden bg-[#2e1a47]"
      >
        <img
          src={groupLogoStrip}
          alt=""
          aria-hidden="true"
          className="block h-auto w-full object-cover object-right opacity-45"
        />
        <div className="absolute inset-0 z-10 flex items-center px-5 py-6 md:px-8 md:py-8 lg:px-12">
          <p className="max-w-[48rem] font-heading text-[1.05rem] leading-[1.65] text-[#f4eac8] md:text-[1.2rem] md:leading-[1.7]">
            Guided by its motto, “Kindle the Light of Knowledge and Love,” SNBP Group continues to
            empower students with the knowledge, character, and confidence needed to become
            responsible professionals, leaders, and lifelong learners.
          </p>
        </div>
      </section>

      <RecognitionSection />

      <section className="bg-[#f0e8dc] px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-2xl bg-[#2e1a47] px-6 py-9 text-center text-white md:flex-row md:px-10 md:text-left">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-[#e6c96f] md:text-3xl">
              Continue your journey with SNBP
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
              Speak with our admissions team to understand the programme, curriculum and admission
              pathway.
            </p>
          </div>
          <Link
            to="/admissions"
            className="btn-primary shrink-0"
          >
            Enquire Now <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
