import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import { MessageCircle } from "lucide-react";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import LoadingExperience from "./components/common/LoadingExperience.jsx";
import { programPages, schoolPages } from "./content/programs.js";
import { staticPages } from "./content/staticPages.js";
import { homeDefaults } from "./content/homeDefaults.js";
const UniversityAssistant = lazy(() => import("./components/assistant/UniversityAssistant.jsx"));
const Admissions = lazy(() => import("./pages/Admissions.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const StaticPage = lazy(() => import("./pages/StaticPage.jsx"));
const Placements = lazy(() => import("./pages/Placements.jsx"));
const AboutUniversity = lazy(() => import("./pages/AboutUniversity.jsx"));
const MandatoryDisclosure = lazy(() => import("./pages/MandatoryDisclosure.jsx"));
const ProgramPage = lazy(() => import("./pages/ProgramPage.jsx"));
const SchoolPage = lazy(() =>
  import("./pages/ProgramPage.jsx").then((module) => ({ default: module.SchoolPage }))
);
const Scholarships = lazy(() => import("./pages/Scholarships.jsx"));
const OurJourney = lazy(() => import("./pages/OurJourney.jsx"));
const SponsoringBody = lazy(() => import("./pages/SponsoringBody.jsx"));
const OurTeam = lazy(() => import("./pages/OurTeam.jsx"));
const ChancellorMessage = lazy(() => import("./pages/ChancellorMessage.jsx"));
const ViceChancellorMessage = lazy(() => import("./pages/ViceChancellorMessage.jsx"));
const AcademicAdvisoryBoard = lazy(() => import("./pages/AcademicAdvisoryBoard.jsx"));

const routeTitles = {
  "/": "SNBP University",
  "/our-journey": "Our Journey",
  "/sponsoring-body": "Sponsoring Body",
  "/our-team": "Our Team",
  "/chancellor-message": "Chancellor’s Message",
  "/vice-chancellor-message": "Vice Chancellor’s Message",
  "/academic-advisory-board": "Academic Advisory Board",
  "/placements": "Placements",
  "/scholarships": "Scholarships",
  "/admissions": "Admissions",
  "/contact-us": "Contact Us",
};

const defaultMetaDescription =
  "SNBP University — admissions, schools, campus life, and enquiries. Pune, Maharashtra.";

function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = programPages[pathname] || schoolPages[pathname] || staticPages[pathname];
    const title = page?.title || routeTitles[pathname] || document.querySelector("[data-page-content] h1")?.textContent?.trim();
    if (!title) return;

    document.title = pathname === "/" ? title : `${title} | SNBP University`;
    const heading = document.querySelector("[data-page-content] h1");
    const description = pathname === "/"
      ? `${homeDefaults.hero.title} ${homeDefaults.hero.subtitle}`
      : page?.summary ||
        page?.lead ||
        heading?.parentElement?.querySelector("p")?.textContent?.trim() ||
        defaultMetaDescription;
    const descriptionTag = document.querySelector('meta[name="description"]');
    const socialTitle = document.querySelector('meta[property="og:title"]');
    const socialDescription = document.querySelector('meta[property="og:description"]');

    if (descriptionTag) descriptionTag.setAttribute("content", description);
    if (socialTitle) socialTitle.setAttribute("content", document.title);
    if (socialDescription) socialDescription.setAttribute("content", description);
  }, [pathname]);

  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function OpeningExperience({ stage, onAdvance }) {
  const [videoError, setVideoError] = useState(false);
  const invitationAlt =
    "A New Beginning — Pooja Ceremony, SNBP Wakad Campus, Sunday 8 November at 12:30 PM";

  return (
    <section
      className={`opening-experience opening-experience-${stage}`}
      role="dialog"
      aria-modal="true"
      aria-label={
        stage === "curtain"
          ? "Open the pooja ceremony invitation"
          : stage === "video"
            ? "Pooja ceremony video"
            : "Pooja ceremony invitation"
      }
    >
      {stage === "curtain" ? (
        <button type="button" className="opening-curtain-trigger" onClick={onAdvance} autoFocus>
          <div className="opening-curtain-scene" aria-hidden="true">
            <span className="opening-curtain-panel opening-curtain-panel-left" />
            <span className="opening-curtain-panel opening-curtain-panel-right" />
          </div>
          <span className="opening-curtain-hint">Click to open</span>
        </button>
      ) : stage === "opening" ? (
        <div className="opening-curtain-reveal" aria-hidden="true">
          <img src="/assets/pooja-ceremony-invitation.png" alt={invitationAlt} />
          <div className="opening-curtain-scene">
            <span className="opening-curtain-panel opening-curtain-panel-left" />
            <span className="opening-curtain-panel opening-curtain-panel-right" />
          </div>
        </div>
      ) : stage === "invitation" ? (
        <button
          type="button"
          className="opening-invitation-button"
          onClick={onAdvance}
          aria-label="Watch the pooja ceremony video"
          autoFocus
        >
          <img src="/assets/pooja-ceremony-invitation.png" alt={invitationAlt} />
          <span className="opening-invitation-hint">
            Your video is next — click to open it now
          </span>
        </button>
      ) : stage === "video" ? (
        <div className="opening-video-panel">
          <video
            className="opening-video"
            controls
            autoPlay
            playsInline
            onEnded={onAdvance}
            onError={() => setVideoError(true)}
            aria-label="Pooja ceremony video"
          >
            <source src="/assets/WhatsApp-Video-2026-11-07.mp4" type="video/mp4" />
            Your browser does not support MP4 video playback.
          </video>
          {videoError ? (
            <div className="opening-video-error" role="alert">
              <p>The ceremony video could not be played.</p>
              <button type="button" onClick={onAdvance}>
                Continue to the website
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

function PageMotion() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    if (!("IntersectionObserver" in window)) return undefined;

    const sections = document.querySelectorAll("[data-page-content] section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    sections.forEach((section) => {
      section.classList.add("reveal-on-scroll");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <section className="container-width py-24 text-center">
      <div className="text-sm font-extrabold uppercase tracking-widest text-gold">404 · Page not found</div>
      <h1 className="font-heading mt-4 text-4xl font-bold text-purplebrand">This page isn&apos;t here.</h1>
      <Link to="/" className="btn-primary mt-7">
        Back to home
      </Link>
    </section>
  );
}

export default function App() {
  const { pathname } = useLocation();
  const [openingStage, setOpeningStage] = useState("curtain");
  const [assistantMounted, setAssistantMounted] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const assistantLauncherRef = useRef(null);
  const showOpeningExperience = pathname === "/" && openingStage !== "entered";

  useEffect(() => {
    if (openingStage !== "opening" && openingStage !== "invitation") return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nextStage = openingStage === "opening" ? "invitation" : "video";
    const delay = openingStage === "opening" ? (reducedMotion ? 50 : 3050) : 1500;
    const timeoutId = window.setTimeout(
      () => setOpeningStage(nextStage),
      delay
    );

    return () => window.clearTimeout(timeoutId);
  }, [openingStage]);

  useEffect(() => {
    if (!showOpeningExperience) return undefined;

    const previousOverflow = document.body.style.overflow;
    const rootElement = document.getElementById("root");
    const previousInert = rootElement?.inert ?? false;
    document.body.style.overflow = "hidden";
    if (rootElement) rootElement.inert = true;

    return () => {
      document.body.style.overflow = previousOverflow;
      if (rootElement) rootElement.inert = previousInert;
    };
  }, [showOpeningExperience]);

  return (
    <>
      <PageMetadata />
      <ScrollToTop />
      <PageMotion />
      <Navbar />
      <main key={pathname} className="page-enter" data-page-content>
        <Suspense fallback={<LoadingExperience />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUniversity />} />
            <Route path="/our-journey" element={<OurJourney />} />
            <Route path="/sponsoring-body" element={<SponsoringBody />} />
            <Route path="/snbp-leadership" element={<StaticPage pageKey="/snbp-leadership" />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/chancellor-message" element={<ChancellorMessage />} />
            <Route path="/vice-chancellor-message" element={<ViceChancellorMessage />} />
            <Route path="/academic-advisory-board" element={<AcademicAdvisoryBoard />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/life-at-snbp" element={<StaticPage pageKey="/life-at-snbp" />} />
            <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
            <Route path="/scholarships" element={<Scholarships />} />
            {Object.keys(schoolPages).map((key) => (
              <Route key={key} path={key} element={<SchoolPage pageKey={key} />} />
            ))}
            {Object.keys(programPages).map((key) => (
              <Route key={key} path={key} element={<ProgramPage pageKey={key} />} />
            ))}
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
            <Route path="/academics" element={<Navigate to="/placements" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <div className="assistant-widget">
        {assistantMounted ? (
          <Suspense fallback={null}>
            <UniversityAssistant
              open={assistantOpen}
              onClose={() => {
                setAssistantOpen(false);
                assistantLauncherRef.current?.focus();
              }}
            />
          </Suspense>
        ) : null}
        <button
          ref={assistantLauncherRef}
          type="button"
          className="assistant-launcher"
          onClick={() => {
            setAssistantMounted(true);
            setAssistantOpen((value) => !value);
          }}
          aria-expanded={assistantOpen}
          aria-controls={assistantMounted ? "snbp-assistant-panel" : undefined}
          aria-label={assistantOpen ? "Close SNBP AI Assistant" : "Open SNBP AI Assistant"}
        >
          <MessageCircle size={22} aria-hidden="true" />
          <span className="assistant-launcher-label">Ask SNBP</span>
        </button>
      </div>
      {showOpeningExperience ? (
        createPortal(
          <OpeningExperience
            stage={openingStage}
            onAdvance={() =>
              setOpeningStage((currentStage) => {
                if (currentStage === "curtain") return "opening";
                if (currentStage === "invitation") return "video";
                return "entered";
              })
            }
          />,
          document.body
        )
      ) : null}
    </>
  );
}
