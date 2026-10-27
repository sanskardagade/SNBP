import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Compass,
  Globe2,
  Heart,
  Lightbulb,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import buildingSketch from "../assets/about-building-sketch.png";
import campusRoom from "../assets/about-campus-room.png";
import societySeal from "../assets/subhadra-society-seal.png";

const gallery = [
  { src: campusRoom, alt: "Collaborative learning and meeting space at SNBP University", label: "Spaces to collaborate" },
  { src: buildingSketch, alt: "Architectural illustration of the SNBP University building", label: "A university for tomorrow" },
  { src: societySeal, alt: "Subhadra Educational Society emblem", label: "A legacy of education" },
];

const leadershipDirections = [
  {
    title: "Creativity & Discipline",
    description: "to turn ambitious visions into reality",
    icon: Sparkles,
  },
  {
    title: "Character & Integrity",
    description: "to do what is right, even when no one is watching",
    icon: Heart,
  },
  {
    title: "Intellect & Innovation",
    description: "to solve the world's most complex challenges",
    icon: Lightbulb,
  },
  {
    title: "Empathy & Leadership",
    description: "to serve communities with heart and wisdom",
    icon: Target,
  },
  {
    title: "Global Awareness & Lifelong Curiosity",
    description: "to remain relevant in a rapidly evolving world.",
    icon: Globe2,
  },
];

const outcomes = [
  {
    title: "Practical Skills",
    description: "The ability to build a meaningful and successful career in a rapidly evolving global market.",
    icon: Lightbulb,
  },
  {
    title: "Leadership",
    description: "The unwavering confidence to lead with integrity and stay true to their values.",
    icon: Compass,
  },
  {
    title: "Lasting Impact",
    description: "The capacity to create a positive difference in the world around them.",
    icon: Heart,
  },
];

function AboutSectionMark() {
  return <span aria-hidden="true" className="mb-4 block h-1 w-12 rounded-full bg-[#c9a84c]" />;
}

export default function AboutUniversity() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="container-width relative flex min-h-[500px] flex-col justify-center py-12 md:min-h-[560px] md:py-16">
          <div className="relative z-10 max-w-[620px]">
            <AboutSectionMark />
            <h1 className="placement-heading text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1.05] text-[#2e1a47]">
              Building on a Legacy of Educational Excellence
            </h1>
            <p className="mt-5 max-w-[560px] text-sm leading-7 text-[#4a4650] sm:text-base sm:leading-8">
              Established under the visionary leadership of the Subhadra Educational Society, SNBP University is a multidisciplinary institution committed to academic excellence, innovation, research, and holistic development.
            </p>
          </div>
          <img
            src={buildingSketch}
            alt=""
            aria-hidden="true"
            className="pointer-events-none mt-6 w-full object-contain object-right md:absolute md:-right-8 md:bottom-0 md:mt-0 md:h-full md:w-[67%]"
          />
        </div>
      </section>

      <section className="bg-[#faf8f5] px-4 py-14 md:px-6 md:py-20 lg:px-10">
        <div className="mx-auto grid max-w-[1160px] items-center gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <div>
            <AboutSectionMark />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#806b3c]">Our sponsoring body</p>
            <h2 className="placement-heading mt-2 text-3xl font-semibold leading-tight text-[#2e1a47] sm:text-4xl md:text-[2.8rem]">
              About Subhadra Educational Society
            </h2>
            <h3 className="placement-heading mt-3 text-xl font-semibold text-[#57436c] sm:text-2xl">
              A Legacy of Excellence, A Vision for Tomorrow
            </h3>
            <div className="mt-5 space-y-4 text-sm leading-7 text-[#4a4650] sm:text-[15px]">
              <p>
                Established in 1996, Subhadra Educational Society has built a strong educational ecosystem comprising 13 schools, 4 junior colleges, and 4 higher education institutes, nurturing learners from foundational education to university-level programs, including SNBP University.
              </p>
              <p>
                Guided by the visionary leadership of Dr. D. K. Bhosale (Founder &amp; President) and Dr. Vrishali Bhosale (Vice President), the Society is recognized for its learner-first approach, academic excellence, modern infrastructure, and holistic development. Its commitment to innovation and educational impact has earned prestigious recognitions, including the Excellence in Education Award 2022, the Lifetime Achievement Award 2023, and features in the Guinness World Records and the London Book of World Records 2023.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-[#38244e]/15 pt-5">
              {[
                ["1996", "Established"],
                ["13", "Schools"],
                ["4 + 4", "Colleges & institutes"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="placement-heading text-2xl font-bold text-[#38244e] sm:text-3xl">{value}</p>
                  <p className="mt-1 text-[11px] leading-snug text-[#625b68] sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto w-full max-w-[360px] rounded-3xl bg-white p-6 shadow-[0_20px_55px_rgba(46,26,71,0.12)] sm:p-9">
            <img src={societySeal} alt="Subhadra Educational Society emblem" className="mx-auto aspect-square w-full object-contain" />
            <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.15em] text-[#514364]">
              Kindling the light of knowledge and love
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5] px-4 pb-16 md:px-6 md:pb-20 lg:px-10">
        <div className="mx-auto grid max-w-[1160px] items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_rgba(46,26,71,0.16)]">
            <img
              src={gallery[activeImage].src}
              alt={gallery[activeImage].alt}
              className="aspect-[1.35/1] w-full object-cover"
            />
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <p className="text-sm font-semibold text-[#38244e]">{gallery[activeImage].label}</p>
              <div className="flex gap-2" aria-label="About gallery">
                {gallery.map((image, index) => (
                  <button
                    key={image.label}
                    type="button"
                    aria-label={`Show image ${index + 1}: ${image.label}`}
                    aria-pressed={activeImage === index}
                    onClick={() => setActiveImage(index)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      activeImage === index ? "bg-[#38244e]" : "bg-[#38244e]/25 hover:bg-[#38244e]/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <AboutSectionMark />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#806b3c]">A multidisciplinary university</p>
            <h2 className="placement-heading mt-2 text-3xl font-semibold leading-tight text-[#2e1a47] sm:text-4xl md:text-[2.8rem]">
              About SNBP University
            </h2>
            <h3 className="placement-heading mt-3 text-xl font-semibold text-[#57436c] sm:text-2xl">
              A Multidisciplinary Hub for Learning &amp; Innovation
            </h3>
            <div className="mt-5 space-y-4 text-sm leading-7 text-[#4a4650] sm:text-[15px]">
              <p>
                Established under the visionary leadership of the Subhadra Educational Society, SNBP University is a multidisciplinary institution committed to academic excellence, innovation, research, and holistic development. The university brings together schools across technology, arts, commerce, and science to prepare students for a rapidly evolving world.
              </p>
              <p>
                With a learner-first philosophy, modern infrastructure, and a focus on industry-aligned programs, SNBP University nurtures curious minds and future-ready professionals. Its ecosystem emphasizes experiential learning, research culture, and values that shape responsible leaders for tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-4 py-16 md:px-6 md:py-24 lg:px-10">
        <div className="pointer-events-none absolute -right-36 -top-20 h-[480px] w-[480px] rounded-full border border-[#38244e]/10 md:h-[640px] md:w-[640px]" />
        <div className="relative mx-auto max-w-[1160px]">
          <div className="mx-auto max-w-[760px] text-center">
            <AboutSectionMark />
            <h2 className="placement-heading text-3xl font-semibold text-[#2e1a47] sm:text-4xl md:text-5xl">
              The Ten Directions of Leadership
            </h2>
            <p className="mx-auto mt-4 max-w-[690px] text-sm leading-7 text-[#514b57] sm:text-base">
              We envision a future where our students lead with a holistic edge. Our commitment is to develop the ten dimensions of the human spirit that define a true leader:
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {leadershipDirections.map(({ title, description, icon: Icon }, index) => (
              <article
                key={title}
                className={`rounded-2xl border border-[#38244e]/10 p-6 sm:p-7 ${
                  index === 4 ? "bg-[#38244e] text-white sm:col-span-2 lg:col-span-1" : "bg-[#faf8f5] text-[#38244e]"
                }`}
              >
                <span className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full ${
                  index === 4 ? "bg-white/10 text-[#e2c76f]" : "bg-[#38244e]/[0.07] text-[#806b3c]"
                }`}>
                  <Icon aria-hidden="true" size={24} strokeWidth={1.7} />
                </span>
                <h3 className="placement-heading text-xl font-semibold leading-snug sm:text-2xl">{title}</h3>
                <p className={`mt-2 text-sm leading-6 ${index === 4 ? "text-white/75" : "text-[#625b68]"}`}>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#2e1a47] px-4 py-16 text-white md:px-6 md:py-20 lg:px-10">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-1/2 hidden -translate-y-1/2 opacity-[0.12] md:block">
          <Compass size={440} strokeWidth={0.7} />
        </div>
        <div className="relative mx-auto grid max-w-[1160px] items-center gap-10 md:grid-cols-[1fr_0.75fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e2c76f]">Our purpose</p>
            <h2 className="placement-heading mt-3 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Our Mission:
              <span className="block text-[#e2c76f]">Empowering The Journey</span>
            </h2>
            <p className="mt-5 max-w-[690px] text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Our mission is to provide a holistic and future-ready education that transcends the traditional classroom. We are dedicated to bridging the gap between academic theory and real-world impact through a relentless focus on academic excellence, industry collaboration, global exposure, and entrepreneurial learning.
            </p>
          </div>
          <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full border border-[#e2c76f]/45 bg-white/[0.04] text-[#e2c76f] md:h-64 md:w-64">
            <Compass aria-hidden="true" className="h-28 w-28 md:h-40 md:w-40" strokeWidth={0.8} />
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5] px-4 py-16 md:px-6 md:py-20 lg:px-10">
        <div className="mx-auto max-w-[1160px]">
          <div className="mx-auto max-w-[760px] text-center">
            <AboutSectionMark />
            <h2 className="placement-heading text-3xl font-semibold text-[#2e1a47] sm:text-4xl md:text-5xl">
              A Daily Compass for Excellence
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#514b57] sm:text-base">
              Guided by our &apos;North Star&apos; vision, our daily mission is to act as a compass for our students, directing them toward their highest potential. Like the chariot of King Dasharatha, we ensure that your learning journey moves in every direction, intellectual, social, and global, fostering a passion for growth that remains with you for life.
            </p>
            <p className="mt-3 text-sm font-medium leading-7 text-[#38244e] sm:text-base">
              We don&apos;t just prepare you for the future; we give you the tools to shape it. Your future is not waiting. Lead the journey with us.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {outcomes.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-2xl bg-white p-6 shadow-[0_12px_35px_rgba(46,26,71,0.09)] sm:p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f4eac8] text-[#38244e]">
                  <Icon aria-hidden="true" size={23} strokeWidth={1.7} />
                </span>
                <h3 className="placement-heading mt-4 text-2xl font-semibold text-[#2e1a47]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#625b68]">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-xl bg-[#2e1a47] px-6 py-6 text-white sm:flex-row sm:items-center sm:px-8 md:px-10">
            <p className="placement-heading max-w-[760px] text-sm font-semibold uppercase leading-relaxed tracking-wide sm:text-base">
              Speak with our admissions team to understand the programme, curriculum and admission pathway
            </p>
            <Link
              to="/admissions"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#f4eac8] px-7 py-3 text-xs font-semibold text-[#38244e] transition hover:bg-white"
            >
              Enquire Now <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
