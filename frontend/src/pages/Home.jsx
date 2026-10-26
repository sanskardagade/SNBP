import { useHomeContent } from "../hooks/useHomeContent.js";
import HeroSection from "../components/home/HeroSection.jsx";
import AdmissionsTeaser from "../components/home/AdmissionsTeaser.jsx";
import StatsSection from "../components/home/StatsSection.jsx";
import AboutSection from "../components/home/AboutSection.jsx";
import SchoolsSection from "../components/home/SchoolsSection.jsx";
import PillarsSection from "../components/home/PillarsSection.jsx";
import LeadershipSection from "../components/home/LeadershipSection.jsx";
import PartnershipSection from "../components/home/PartnershipSection.jsx";
import RecognitionSection from "../components/home/RecognitionSection.jsx";
import CampusLifeSection from "../components/home/CampusLifeSection.jsx";
import FaqSection from "../components/home/FaqSection.jsx";
import NewsletterSection from "../components/home/NewsletterSection.jsx";

export default function Home() {
  const { content, loading } = useHomeContent();

  if (loading && !content) {
    return (
      <div className="container-width py-32 text-center text-sm font-semibold text-purplebrand">
        Loading SNBP University…
      </div>
    );
  }

  const data = content || {};

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
        centreOfExcellence={data.centreOfExcellence}
      />
      <RecognitionSection recognitions={data.recognitions} />
      <CampusLifeSection campusGalleries={data.campusGalleries} />
      <FaqSection faqs={data.faqs} />
      <NewsletterSection />
    </>
  );
}
