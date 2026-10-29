import { useEffect, useState } from "react";
import { asset } from "../constants/assets.js";

const aboutHero = asset("/assets/About%20Us%20Hero1-dKP-roMH.webp");
const mobileCampusSketch = asset("/assets/bg-CZ_IxR8g.png");
const sectionMark = asset("/assets/Layer%205-clean-CYIX52QV.png");
const sectionPattern = asset("/assets/Layer%204-clean-BIEAtz-e.webp");
const societyImage = asset("/assets/S.E%20logo-CfYNF0s4.webp");
const chakraImage = asset("/assets/10%20Chakra@3x%20(1)-BfL1HEV4.webp");
const leadershipBackground = asset("/assets/BG%20(1)-DZLuMJ1s.png");
const missionBackground = asset("/assets/Group%2014@3x-B8cYZJs1.png");

const gallery = [
  { src: asset("/assets/1-CdIfhr6N.webp"), alt: "Students learning at an SNBP campus", label: "Learning in action" },
  { src: asset("/assets/2-Boj9UAeS.webp"), alt: "Students collaborating at SNBP University", label: "Spaces to collaborate" },
  { src: asset("/assets/3-CxkWFAp0.webp"), alt: "SNBP University campus facilities", label: "A university for tomorrow" },
  { src: asset("/assets/4-B_-dCUGs.webp"), alt: "Campus life at SNBP University", label: "A vibrant campus" },
  { src: asset("/assets/5-DpfWQPt6.webp"), alt: "Learning spaces at SNBP University", label: "Designed for learning" },
  { src: asset("/assets/6-Bm93t2za.webp"), alt: "Collaborative learning and meeting space at SNBP University", label: "Collaborative learning" },
];

const leadershipDirections = [
  {
    title: "Creativity & Discipline",
    description: "to turn ambitious visions into reality",
    image: asset("/assets/thinking_2092016-Dj32MzSf.png"),
    chakraMarkerPosition: ["50%", "7.3%"],
    desktopCardPosition: ["50%", "10.8%"],
  },
  {
    title: "Character & Integrity",
    description: "to do what is right, even when no one is watching",
    image: asset("/assets/love_14092605-CpB3Z1ej.png"),
    chakraMarkerPosition: ["21.9%", "23.9%"],
    desktopCardPosition: ["22.8%", "25%"],
  },
  {
    title: "Intellect & Innovation",
    description: "to solve the world's most complex challenges",
    image: asset("/assets/artificial-intelligence_1766665-CZbKnk-t.png"),
    chakraMarkerPosition: ["5%", "65.6%"],
    desktopCardPosition: ["11.1%", "53.2%"],
  },
  {
    title: "Empathy & Leadership",
    description: "to serve communities with heart and wisdom",
    image: asset("/assets/leadership_18224975-DS44XhaH.png"),
    chakraMarkerPosition: ["78.1%", "23.9%"],
    desktopCardPosition: ["77.8%", "26.5%"],
  },
  {
    title: "Global Awareness & Lifelong Curiosity",
    description: "to remain relevant in a rapidly evolving world.",
    image: asset("/assets/geography_11555530-BJbK1VHY.png"),
    chakraMarkerPosition: ["95%", "65.6%"],
    desktopCardPosition: ["89.5%", "53.2%"],
  },
];

const outcomes = [
  {
    title: "Practical Skills",
    description: "The ability to build a meaningful and successful career in a rapidly evolving global market.",
    image: asset("/assets/thinking_2092016-Dj32MzSf.png"),
  },
  {
    title: "Leadership",
    description: "The unwavering confidence to lead with integrity and stay true to their values.",
    image: asset("/assets/leadership_18224975-DS44XhaH.png"),
  },
  {
    title: "Lasting Impact",
    description: "The capacity to create a positive difference in the world around them.",
    image: asset("/assets/consistency_18663011-BRUsth-q.png"),
  },
];

function AboutSectionMark() {
  return (
    <span className="mb-3 flex justify-center">
      <img src={sectionMark} alt="" aria-hidden="true" className="h-5 w-5 object-contain md:h-6 md:w-6" />
    </span>
  );
}

export default function AboutUniversity() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % gallery.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <img
          src={aboutHero}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[8%] top-0 hidden h-[120%] w-[90%] -translate-y-[14%] scale-[1.22] object-contain object-right md:right-[10%] md:block md:w-[85%] md:-translate-y-[16%] md:scale-[1.26] lg:right-[12%] lg:w-[80%] lg:-translate-y-[18%] lg:scale-[1.3]"
        />
        <div className="relative z-10 mx-auto flex max-w-[1500px] items-center px-4 py-10 md:min-h-[440px] md:px-6 md:py-16 lg:min-h-[500px] lg:px-10">
          <div className="max-w-[520px] md:max-w-[560px] lg:max-w-[600px]">
            <h1 className="font-heading text-[2.2rem] font-semibold leading-[1.15] text-[#2e1a47] md:text-[2.75rem] lg:text-[3.25rem]">
              Building on a Legacy of Educational Excellence
            </h1>
            <p className="mt-4 max-w-[600px] text-[15px] font-light leading-[1.7] text-[#3a3a3a] md:mt-5 md:text-base md:leading-[1.75]">
              Established under the visionary leadership of the Subhadra Educational Society, SNBP University is a multidisciplinary institution committed to academic excellence, innovation, research, and holistic development.
            </p>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white md:hidden">
        <img
          src={mobileCampusSketch}
          alt="Illustration of the SNBP University campus"
          className="mx-auto w-full object-contain"
        />
      </section>

      <section className="relative overflow-hidden bg-[#faf8f5] py-14 md:py-20">
        <img
          src={sectionPattern}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute -right-36 -top-28 h-[520px] w-[520px] object-contain opacity-[0.18] brightness-[1.35] contrast-[0.85] saturate-[0.45] md:-right-64 md:-top-44 md:h-[700px] md:w-[700px]"
        />
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-6 lg:px-10">
          <div className="mb-12 text-center md:mb-16">
            <AboutSectionMark />
            <h2 className="font-heading text-3xl font-semibold text-[#2e1a47] md:text-4xl">
              About Subhadra Educational Society
            </h2>
            <p className="mt-2 text-base text-[#2e1a47]/70 md:text-lg">
              A Legacy of Excellence, A Vision for Tomorrow
            </p>
          </div>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="space-y-6 font-sans text-[15px] font-normal leading-[1.7] text-[#3a3a3a] md:text-base md:leading-[1.75]">
              <p>
                Established in 1996, Subhadra Educational Society has spent nearly three decades
                building a strong educational ecosystem. Today, it includes 13 schools, 4 junior
                colleges, and 4 higher education institutes, nurturing learners from foundational
                education through university-level study at SNBP University.
              </p>
              <p>
                Guided by Dr. D. K. Bhosale (Founder &amp; President) and Dr. Vrishali Bhosale (Vice
                President), the Society is known for its learner-first approach, academic
                excellence, modern infrastructure, and holistic development. Its commitment to
                educational impact has earned recognitions including the Excellence in Education
                Award 2022, the Lifetime Achievement Award 2023, and features in the Guinness World
                Records and the London Book of World Records 2023.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl bg-white py-4 shadow-lg">
              <img
                src={societyImage}
                alt="Subhadra Educational Society emblem"
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] h-full min-h-[280px] w-full object-contain md:min-h-[360px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#faf8f5] py-14 md:py-20">
        <img
          src={sectionPattern}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute -left-36 -top-28 h-[520px] w-[520px] object-contain opacity-[0.18] brightness-[1.35] contrast-[0.85] saturate-[0.45] md:-left-64 md:-top-44 md:h-[700px] md:w-[700px]"
        />
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-6 lg:px-10">
          <div className="mb-12 text-center md:mb-16">
            <AboutSectionMark />
            <h2 className="font-heading text-3xl font-semibold text-[#2e1a47] md:text-4xl">
              About SNBP University
            </h2>
            <p className="mt-2 text-base text-[#2e1a47]/70 md:text-lg">
              A Multidisciplinary Hub for Learning &amp; Innovation
            </p>
          </div>
          <div className="grid min-w-0 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="relative aspect-[16/10] min-w-0 overflow-hidden rounded-2xl bg-[#2e1a47] shadow-lg">
              {gallery.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={activeImage === index ? image.alt : ""}
                  aria-hidden={activeImage !== index}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className={`absolute inset-0 h-full w-full object-contain object-center transition-opacity duration-700 ${
                    activeImage === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 bg-gradient-to-t from-black/50 to-transparent px-4 pb-4 pt-10">
                {gallery.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    aria-label={`Show image ${index + 1}`}
                    aria-pressed={activeImage === index}
                    onClick={() => setActiveImage(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeImage === index ? "w-6 bg-[#c9a84c]" : "w-2 bg-white/70 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="min-w-0">
              <div className="space-y-6 font-sans text-[15px] font-normal leading-[1.7] text-[#3a3a3a] md:text-base md:leading-[1.75]">
                <p>
                  Established under the visionary leadership of the Subhadra Educational Society,
                  SNBP University is a multidisciplinary institution committed to academic
                  excellence, innovation, research, and holistic development. The university brings
                  together schools across technology, arts, commerce, and science to prepare
                  students for a rapidly evolving world.
                </p>
                <p>
                  With a learner-first philosophy, modern infrastructure, and a focus on
                  industry-aligned programs, SNBP University nurtures curious minds and future-ready
                  professionals. Its ecosystem emphasizes experiential learning, research culture,
                  and values that shape responsible leaders for tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 overflow-hidden bg-white pb-20 pt-12 md:pb-0 md:pt-16 lg:pt-20">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[140px] md:h-[180px] lg:h-[220px]">
          <img src={leadershipBackground} alt="" aria-hidden="true" className="h-full w-full object-cover object-bottom" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-6 lg:max-w-[1280px] lg:px-8">
          <div className="mx-auto mb-10 max-w-[720px] text-center md:mb-14">
            <AboutSectionMark />
            <h2 className="font-heading text-[1.85rem] font-semibold leading-snug text-[#2e1a47] md:text-[2.25rem] lg:text-[2.5rem]">
              The Ten Directions of Leadership
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[16px] font-light leading-[1.7] text-[#5a5a5a] md:mt-5 md:text-[17px]">
              We envision a future where our students lead with a holistic edge. Our commitment is
              to develop the ten dimensions of the human spirit that define a true leader:
            </p>
          </div>

          <div className="mx-auto mb-8 grid max-w-[480px] gap-3 md:hidden">
            {leadershipDirections.map((direction) => (
              <article
                key={direction.title}
                className="flex min-h-[88px] items-center gap-4 rounded-xl bg-[#2e1a47] px-4 py-3 shadow-[0_8px_20px_rgba(46,26,71,0.16)] sm:min-h-[96px] sm:px-5"
              >
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d1ad42] bg-[#2e1a47] shadow-[inset_0_0_0_3px_#51346a] sm:h-14 sm:w-14"
                >
                  <img
                    src={direction.image}
                    alt=""
                    className="h-[58%] w-[58%] object-contain"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(68%) sepia(78%) saturate(500%) hue-rotate(5deg) contrast(92%)",
                    }}
                  />
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading text-base font-semibold leading-tight text-[#d4b85a] sm:text-lg">
                    {direction.title}
                  </h3>
                  <p className="mt-1 text-[13px] font-light leading-snug text-white/90 sm:text-sm">
                    {direction.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="relative mx-auto -mx-4 hidden aspect-[1.75/1] w-[calc(100%+2rem)] md:-mx-6 md:block md:w-[calc(100%+3rem)] lg:-mx-8 lg:w-[calc(100%+4rem)]">
            <div className="absolute left-1/2 top-[27%] w-[61%] -translate-x-1/2">
              <img src={chakraImage} alt="" aria-hidden="true" className="block h-auto w-full select-none" />
              {leadershipDirections.map((direction) => (
                <span
                  key={direction.title}
                  aria-hidden="true"
                  className="absolute flex aspect-square w-[8.1%] -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                  style={{
                    left: direction.chakraMarkerPosition[0],
                    top: direction.chakraMarkerPosition[1],
                  }}
                >
                  <img
                    src={direction.image}
                    alt=""
                    className="h-[56%] w-[56%] object-contain"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(68%) sepia(78%) saturate(500%) hue-rotate(5deg) contrast(92%)",
                    }}
                  />
                </span>
              ))}
            </div>
            {leadershipDirections.map((direction) => (
              <div key={direction.title}>
                <article
                  className="absolute z-10 flex h-[13.2%] w-[17%] -translate-x-1/2 flex-col items-center justify-center rounded-lg bg-[#2e1a47] px-[1.2%] text-center shadow-[0_10px_24px_rgba(46,26,71,0.2)]"
                  style={{
                    left: direction.desktopCardPosition[0],
                    top: direction.desktopCardPosition[1],
                  }}
                >
                  <h3 className="font-heading text-[clamp(0.68rem,1.38vw,1rem)] font-semibold leading-[1.1] text-[#d4b85a]">
                    {direction.title}
                  </h3>
                  <p className="mt-[0.4em] text-[clamp(0.5rem,1.02vw,0.75rem)] font-light leading-[1.2] text-white/90">
                    {direction.description}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#2e1a47]">
        <img
          src={missionBackground}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[72%_center] md:object-[75%_center] lg:object-right"
        />
        <div className="relative z-10 mx-auto flex min-h-[280px] max-w-[1400px] items-center px-4 py-14 md:min-h-[340px] md:px-6 md:py-16 lg:min-h-[380px] lg:px-10 lg:py-[4.5rem]">
          <div className="max-w-[520px] md:max-w-[560px] lg:max-w-[600px]">
            <h2 className="font-heading text-3xl font-semibold leading-[1.05] text-white sm:text-4xl md:text-[2.75rem]">
              <span>Our Mission:</span>
              <span className="block text-[#e2c76f]">Empowering The Journey</span>
            </h2>
            <p className="mt-5 max-w-[480px] text-[14px] font-light leading-[1.75] text-white/90 md:mt-6 md:text-[15px] md:leading-[1.8] lg:text-base">
              Our mission is to provide a holistic and future-ready education that transcends the
              traditional classroom. We are dedicated to bridging academic theory and real-world
              impact through academic excellence, industry collaboration, global exposure, and
              entrepreneurial learning.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#faf8f5] py-14 md:py-16 lg:py-20">
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-6 lg:px-10">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-[2.2fr_repeat(3,minmax(0,1fr))] lg:gap-4">
            <article className="relative overflow-hidden rounded-2xl bg-[#e4dde8] px-5 py-5 md:col-span-2 md:px-6 md:py-5 lg:col-span-1">
              <h2 className="text-[1.2rem] font-bold leading-snug text-[#2e1a47] md:text-[1.35rem]">
                A Daily Compass for Excellence
              </h2>
              <p className="mt-3 text-[13px] font-normal leading-[1.55] text-[#2e1a47]/90 md:text-[14px] md:leading-[1.6]">
                Guided by our &apos;North Star&apos; vision, our daily mission is to act as a
                compass for our students, directing them toward their highest potential. Like the
                chariot of King Dasharatha, we encourage learning that grows in every direction:
                intellectual, social, and global.
              </p>
              <p className="mt-2.5 text-[13px] font-normal leading-[1.55] text-[#2e1a47]/90 md:text-[14px] md:leading-[1.6]">
                We don&apos;t just prepare you for the future; we give you the tools to shape it.
                Your future is not waiting. Lead the journey with us.
              </p>
            </article>
            {outcomes.map((outcome) => (
              <article
                key={outcome.title}
                className="flex flex-col items-center rounded-2xl bg-[#2e1a47] px-5 py-7 text-center md:py-8"
              >
                <img
                  src={outcome.image}
                  alt=""
                  aria-hidden="true"
                  className="mb-4 h-14 w-14 object-contain brightness-0 invert md:h-16 md:w-16"
                />
                <h3 className="text-lg font-bold text-white md:text-xl">{outcome.title}</h3>
                <p className="mt-4 text-[14px] font-light leading-[1.65] text-white/90 md:text-[15px]">
                  {outcome.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
