import { createPortal } from "react-dom";
import { useHomeContent } from "../hooks/useHomeContent.js";
import { homeDefaults } from "../content/homeDefaults.js";
import AdmissionsTeaser from "../components/home/AdmissionsTeaser.jsx";
import StatsSection from "../components/home/StatsSection.jsx";
import AboutSection from "../components/home/AboutSection.jsx";
import SchoolsSection from "../components/home/SchoolsSection.jsx";
import PillarsSection from "../components/home/PillarsSection.jsx";
import LeadershipSection from "../components/home/LeadershipSection.jsx";
import PartnershipSection from "../components/home/PartnershipSection.jsx";
import CentreOfExcellenceSection from "../components/home/CentreOfExcellenceSection.jsx";
import RecognitionSection from "../components/home/RecognitionSection.jsx";
import CampusLifeSection from "../components/home/CampusLifeSection.jsx";
import FaqSection from "../components/home/FaqSection.jsx";
import NewsletterSection from "../components/home/NewsletterSection.jsx";
import LoadingExperience from "../components/common/LoadingExperience.jsx";
import { programPages } from "../content/programs.js";

const diwaliConfetti = Array.from({ length: 28 }, (_, index) => ({
  x: `${(index * 37) % 100}%`,
  drift: `${(index % 2 === 0 ? 1 : -1) * (30 + (index * 7) % 70)}px`,
  delay: `${(index % 8) * 0.09}s`,
  duration: `${2.5 + (index % 5) * 0.24}s`,
}));

const diwaliFireworks = [
  { x: "88%", rise: "-210px", delay: "0.15s" },
  { x: "92%", rise: "-290px", delay: "0.65s" },
  { x: "96%", rise: "-235px", delay: "0.35s" },
  { x: "90%", rise: "-320px", delay: "0.85s" },
];
const fireworkSparks = [
  ["0px", "-48px"],
  ["34px", "-34px"],
  ["48px", "0px"],
  ["34px", "34px"],
  ["0px", "48px"],
  ["-34px", "34px"],
  ["-48px", "0px"],
  ["-34px", "-34px"],
];

function DiwaliCelebration() {
  return createPortal(
    <div className="diwali-celebration" aria-hidden="true">
      {diwaliConfetti.map((piece, index) => (
        <span
          className="diwali-confetti-piece"
          key={index}
          style={{
            "--confetti-x": piece.x,
            "--confetti-drift": piece.drift,
            "--confetti-delay": piece.delay,
            "--confetti-duration": piece.duration,
          }}
        />
      ))}
      {diwaliFireworks.map((firework, index) => (
        <div
          className="diwali-firework"
          key={`firework-${index}`}
          style={{
            "--firework-x": firework.x,
            "--firework-rise": firework.rise,
            "--firework-delay": firework.delay,
          }}
        >
          <span className="diwali-firework-rocket" />
          {fireworkSparks.map(([x, y], sparkIndex) => (
            <span
              className="diwali-firework-spark"
              key={sparkIndex}
              style={{ "--spark-x": x, "--spark-y": y }}
            />
          ))}
        </div>
      ))}
    </div>,
    document.body
  );
}

function normalizeProgramName(name) {
  return String(name).toLocaleLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function enrichSchool(school) {
  const defaults = homeDefaults.schools.find((item) => item.id === school.id);
  const defaultPrograms = new Map(
    (defaults?.programs || []).map((program) => [normalizeProgramName(program.name), program])
  );
  const programs = school.programs?.length ? school.programs : defaults?.programs || [];

  return {
    ...defaults,
    ...school,
    to: school.to || defaults?.to,
    brochure: school.brochure || defaults?.brochure,
    image: school.image || defaults?.image,
    programs: programs.flatMap((program) => {
      const item = typeof program === "string" ? { name: program } : program;
      if (item.to || !item.name) return [item];

      if (school.id === "arts-commerce-science" && item.name.includes("/")) {
        const artPrograms = Object.entries(programPages)
          .filter(([, detail]) => detail.school === school.name && detail.title.startsWith("BA "))
          .map(([to, detail]) => ({ name: detail.title, to }));
        if (artPrograms.length) return artPrograms;
      }

      const route = defaultPrograms.get(normalizeProgramName(item.name));
      return route ? [{ ...item, to: route.to }] : [item];
    }),
  };
}

export default function Home() {
  const { content, loading } = useHomeContent();

  if (loading && !content) {
    return (
      <>
        <DiwaliCelebration />
        <LoadingExperience />
      </>
    );
  }

  const data = {
    ...homeDefaults,
    ...content,
    stats: content?.stats?.length ? content.stats : homeDefaults.stats,
    about: content?.about || homeDefaults.about,
    schools: content?.schools?.length
      ? content.schools.map(enrichSchool)
      : homeDefaults.schools,
    pillars: content?.pillars?.length ? content.pillars : homeDefaults.pillars,
    leadership: content?.leadership?.length ? content.leadership : homeDefaults.leadership,
    partnershipTabs: content?.partnershipTabs?.length
      ? content.partnershipTabs
      : homeDefaults.partnershipTabs,
    centreOfExcellence: content?.centreOfExcellence?.length
      ? content.centreOfExcellence
      : homeDefaults.centreOfExcellence,
    recognitions: content?.recognitions?.length
      ? content.recognitions
      : homeDefaults.recognitions,
    campusGalleries: content?.campusGalleries?.some((gallery) => gallery.image)
      ? content.campusGalleries.filter((gallery) => gallery.image)
      : homeDefaults.campusGalleries,
    faqs: content?.faqs?.length ? content.faqs : homeDefaults.faqs,
  };

  return (
    <>
      <DiwaliCelebration />
      <div className="home-page ai-tadka">
        <AdmissionsTeaser admissions={data.admissions} />
        <StatsSection stats={data.stats} />
        <AboutSection about={data.about} />
        <SchoolsSection schools={data.schools} />
        <PillarsSection pillars={data.pillars} />
        <LeadershipSection leadership={data.leadership} />
        <PartnershipSection
          partnershipTabs={data.partnershipTabs}
        />
        <CentreOfExcellenceSection items={data.centreOfExcellence} />
        <RecognitionSection recognitions={data.recognitions} />
        <CampusLifeSection campusGalleries={data.campusGalleries} />
        <FaqSection faqs={data.faqs} />
        <NewsletterSection />
      </div>
    </>
  );
}
