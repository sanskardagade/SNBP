import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import AdmissionEnquiryForm from "../forms/AdmissionEnquiryForm.jsx";
import { asset } from "../../constants/assets.js";
import AdvisorCarousel from "./AdvisorCarousel.jsx";

const campusImage =
  'url("https://snbpuniversity.com/assets/SNBP%20Hero%20Image%20Mobile%202%20copy%202.jpg-DuRFS0g_.jpeg")';
const mobileHeroImage = asset(
  "/assets/SNBP%20Hero%20Image%20Mobile%202%20copy%203.jpg-DBF_EOot.jpeg"
);

export default function AdmissionsTeaser({ admissions }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const enquiryButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isFormOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") setIsFormOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      enquiryButtonRef.current?.focus();
    };
  }, [isFormOpen]);

  function trapDialogTab(event) {
    if (event.key !== "Tab") return;

    const focusableElements = event.currentTarget.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement?.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement?.focus();
    }
  }

  return (
    <section id="admissions" className="home-admissions relative isolate overflow-hidden">
      <div
        className="home-admissions-image absolute inset-0 -z-20 hidden bg-cover bg-center md:block"
        style={{ backgroundImage: campusImage }}
      />

      <div className="home-admissions-shade absolute inset-0 -z-10 hidden md:block" />

      <img
        src={mobileHeroImage}
        alt="SNBP University campus"
        className="home-admissions-mobile-image block h-[calc(100svh-6.5rem)] min-h-[480px] w-full object-cover object-[50%_55%] md:hidden"
      />
      <div className="home-admissions-mobile-copy pointer-events-none absolute inset-x-0 top-0 z-10 flex h-[calc(100svh-6.5rem)] min-h-[480px] flex-col items-center px-7 pt-[9vh] text-center md:hidden">
        <p className="home-admissions-kicker">SNBP University · Admissions</p>
        <h1 className="home-admissions-title heading-serif max-w-[17ch]">
          <span>A future takes</span>
          <span>shape one</span>
          <span>choice at a time.</span>
        </h1>
        <p className="home-admissions-description mt-5 max-w-[38ch]">
          Start by exploring what you want to learn. We can help with the next step.
        </p>
      </div>

      <div className="home-admissions-desktop container-width hidden items-center gap-12 py-28 md:grid lg:py-32">
        <div className="home-admissions-copy">
          <p className="home-admissions-kicker">{admissions?.eyebrow || "Admissions Open 2026"}</p>
          <h1 className="home-admissions-title heading-serif">
            You bring the question. <em>We’ll help with the next step.</em>
          </h1>
          <p className="home-admissions-description">
            Tell us what you want to study. Our admissions team can help you explore programmes, eligibility and the application process.
          </p>
          <a className="home-admissions-explore" href="#schools">
            Explore programmes <span aria-hidden="true">↓</span>
          </a>
        </div>
        <AdvisorCarousel />
      </div>

      <button
        ref={enquiryButtonRef}
        type="button"
        className="home-admissions-trigger absolute right-0 top-14 z-20 rounded-l-md bg-[#c9a326] px-4 py-4 font-semibold uppercase tracking-[.12em] text-[#2e1a47] shadow-lg transition hover:bg-[#dfbd45] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        onClick={() => setIsFormOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isFormOpen}
      >
        Enquire Now
      </button>

      {isFormOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#160f20]/75 p-3 backdrop-blur-sm sm:p-6"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) setIsFormOpen(false);
              }}
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-label="Admissions Open 2026"
                className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-[560px] overflow-y-auto rounded-lg bg-white shadow-2xl sm:max-h-[calc(100dvh-3rem)]"
                onKeyDown={trapDialogTab}
              >
                <button
                  ref={closeButtonRef}
                  type="button"
                  className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-2xl leading-none text-[#2e1a47] shadow transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2e1a47]"
                  onClick={() => setIsFormOpen(false)}
                  aria-label="Close admissions form"
                >
                  &times;
                </button>
                <AdmissionEnquiryForm compact />
              </div>
            </div>,
            document.body
          )
        : null}
    </section>
  );
}