import AdmissionEnquiryForm from "../forms/AdmissionEnquiryForm.jsx";
import { asset } from "../../constants/assets.js";

const campusImage =
  'url("https://snbpuniversity.com/assets/SNBP%20Hero%20Image%20Mobile%202%20copy%202.jpg-DuRFS0g_.jpeg")';
const mobileHeroImage = asset(
  "/assets/SNBP%20Hero%20Image%20Mobile%202%20copy%203.jpg-DBF_EOot.jpeg"
);

export default function AdmissionsTeaser({ admissions }) {
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

      <div className="home-admissions-mobile-form bg-[#f4f1f7] px-4 py-6 md:hidden">
        <div className="mx-auto max-w-[520px]">
          <AdmissionEnquiryForm compact />
        </div>
      </div>

      <div className="home-admissions-desktop container-width hidden items-center gap-12 py-28 md:grid md:grid-cols-[1.1fr_.9fr] lg:py-32">
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

        <div className="home-admissions-form w-full">
          <AdmissionEnquiryForm compact />
        </div>
      </div>
    </section>
  );
}