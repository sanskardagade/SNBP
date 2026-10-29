import { useHomeContent } from "../hooks/useHomeContent.js";
import { homeDefaults } from "../content/homeDefaults.js";
import HeroSection from "../components/home/HeroSection.jsx";
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

export default function Home() {
  const { content, loading } = useHomeContent();

  if (loading && !content) {
    return (
      <div className="container-width py-32 text-center text-sm font-semibold text-purplebrand">
        Loading SNBP University…
      </div>
    );
  }

  const data = {
    ...homeDefaults,
    ...content,
    hero: content?.hero,
    stats: content?.stats?.length ? content.stats : homeDefaults.stats,
    about: content?.about || homeDefaults.about,
    schools: content?.schools?.length ? content.schools : homeDefaults.schools,
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
    campusGalleries: content?.campusGalleries?.length
      ? content.campusGalleries
      : homeDefaults.campusGalleries,
    faqs: content?.faqs?.length ? content.faqs : homeDefaults.faqs,
  };

  return (
    <>
      <HeroSection hero={data.hero} />
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
    </>
  );
}
