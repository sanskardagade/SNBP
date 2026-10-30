import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero.jsx";
import { programPages, schoolPages } from "../content/programs.js";
import BtechCsePage from "./BtechCsePage.jsx";
import BtechCseAimlPage from "./BtechCseAimlPage.jsx";
import BtechCseDataSciencePage from "./BtechCseDataSciencePage.jsx";
import BtechCseCyberSecurityPage from "./BtechCseCyberSecurityPage.jsx";
import SchoolTechnologyPage from "./SchoolTechnologyPage.jsx";
import BtechItPage from "./BtechItPage.jsx";
import BscComputerSciencePage from "./BscComputerSciencePage.jsx";

const BAPsychologyPage = lazy(() => import("./BAPsychologyPage.jsx"));
const BAEnglishPage = lazy(() => import("./BAEnglishPage.jsx"));
const BAEconomicsPage = lazy(() => import("./BAEconomicsPage.jsx"));
const BCAPage = lazy(() => import("./BCAPage.jsx"));
const BComPage = lazy(() => import("./BComPage.jsx"));
const MCAPage = lazy(() => import("./MCAPage.jsx"));

export function SchoolPage({ pageKey }) {
  const school = schoolPages[pageKey];
  if (!school) return null;
  if (pageKey === "/school-of-technology") {
    return <SchoolTechnologyPage />;
  }

  return (
    <>
      <PageHero eyebrow={school.eyebrow} title={school.title} lead={school.lead} />
      <section className="section-pad bg-mist">
        <div className="container-width max-w-3xl">
          <h2 className="font-heading text-xl font-semibold text-purplebrand">Programmes</h2>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            {school.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-gold">•</span>
                {b}
              </li>
            ))}
          </ul>
          <Link to="/admissions" className="btn-primary mt-8">
            Enquire Now
          </Link>
        </div>
      </section>
    </>
  );
}

export default function ProgramPage({ pageKey }) {
  const program = programPages[pageKey];
  if (!program) return null;
  if (pageKey === "/school-of-arts-commerce-science/bsc-computer-science") {
    return <BscComputerSciencePage />;
  }
  if (pageKey === "/school-of-arts-commerce-science/ba-psychology") {
    return (
      <Suspense
        fallback={
          <div className="min-h-[60vh] bg-[#faf8f5]" role="status">
            Loading programme…
          </div>
        }
      >
        <BAPsychologyPage />
      </Suspense>
    );
  }
  if (pageKey === "/school-of-arts-commerce-science/ba-english") {
    return (
      <Suspense
        fallback={
          <div className="min-h-[60vh] bg-[#faf8f5]" role="status">
            Loading programme…
          </div>
        }
      >
        <BAEnglishPage />
      </Suspense>
    );
  }
  if (pageKey === "/school-of-arts-commerce-science/ba-economics") {
    return (
      <Suspense
        fallback={
          <div className="min-h-[60vh] bg-[#faf8f5]" role="status">
            Loading programme…
          </div>
        }
      >
        <BAEconomicsPage />
      </Suspense>
    );
  }
  if (pageKey === "/school-of-arts-commerce-science/bca") {
    return (
      <Suspense
        fallback={
          <div className="min-h-[60vh] bg-[#faf8f5]" role="status">
            Loading programme…
          </div>
        }
      >
        <BCAPage />
      </Suspense>
    );
  }
  if (pageKey === "/school-of-arts-commerce-science/bcom") {
    return (
      <Suspense
        fallback={
          <div className="min-h-[60vh] bg-[#faf8f5]" role="status">
            Loading programme…
          </div>
        }
      >
        <BComPage />
      </Suspense>
    );
  }
  if (pageKey === "/school-of-arts-commerce-science/mca") {
    return (
      <Suspense
        fallback={
          <div className="min-h-[60vh] bg-[#faf8f5]" role="status">
            Loading programme…
          </div>
        }
      >
        <MCAPage />
      </Suspense>
    );
  }
  if (pageKey === "/school-of-technology/btech-cse") {
    return <BtechCsePage />;
  }
  if (pageKey === "/school-of-technology/btech-cse-aiml") {
    return <BtechCseAimlPage />;
  }
  if (pageKey === "/school-of-technology/btech-cse-data-science") {
    return <BtechCseDataSciencePage />;
  }
  if (pageKey === "/school-of-technology/btech-cse-cyber-security") {
    return <BtechCseCyberSecurityPage />;
  }
  if (pageKey === "/school-of-technology/btech-it") {
    return <BtechItPage />;
  }

  return (
    <>
      <PageHero eyebrow={program.school} title={program.title} lead={program.summary} />
      <section className="section-pad">
        <div className="container-width grid gap-10 lg:grid-cols-2">
          <img
            src={program.heroImage}
            alt=""
            className="h-[360px] w-full rounded-xl object-cover shadow-soft"
            loading="lazy"
          />
          <div>
            <h2 className="font-heading text-2xl font-semibold text-purplebrand">Programme highlights</h2>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {program.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-gold">•</span>
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/admissions" className="btn-primary">
                Register for 2026
              </Link>
              <a href="#brochure" className="btn-primary !bg-white !text-purplebrand ring-1 ring-purplebrand/20">
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
