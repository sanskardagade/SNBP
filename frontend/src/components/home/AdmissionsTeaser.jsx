import AdmissionEnquiryForm from "../forms/AdmissionEnquiryForm.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import { asset } from "../../constants/assets.js";

const campusImage =
  'url("https://snbpuniversity.com/assets/SNBP%20Hero%20Image%20Mobile%202%20copy%202.jpg-DuRFS0g_.jpeg")';
const mobileHeroImage = asset(
  "/assets/SNBP%20Hero%20Image%20Mobile%202%20copy%203.jpg-DBF_EOot.jpeg"
);

export default function AdmissionsTeaser({ admissions }) {
  return (
    <section id="admissions" className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-20 hidden bg-cover bg-center md:block"
        style={{ backgroundImage: campusImage }}
      />

      <div className="absolute inset-0 -z-10 hidden bg-[#21143b]/60 md:block" />

      <img
        src={mobileHeroImage}
        alt="SNBP University campus"
        className="block h-[calc(100svh-6.5rem)] min-h-[480px] w-full object-cover object-[50%_55%] md:hidden"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex h-[calc(100svh-6.5rem)] min-h-[480px] flex-col items-center px-7 pt-[9vh] text-center text-[#34264a] md:hidden">
        <h1 className="heading-serif max-w-[18ch] text-[1.55rem] font-normal leading-[1.3] sm:text-[1.8rem]">
          Degree Is The Beginning, Character Is The Destination.
        </h1>
        <p className="mt-5 max-w-[38ch] text-xs leading-relaxed text-[#473b52] sm:text-sm">
          At SNBP University, education transcends classrooms; it shapes character and creates
          leaders.
        </p>
      </div>

      <div className="bg-[#f4f1f7] px-4 py-6 md:hidden">
        <div className="mx-auto max-w-[520px]">
          <AdmissionEnquiryForm compact />
        </div>
      </div>

      <div className="container-width hidden items-start gap-10 py-28 md:grid md:grid-cols-2 lg:py-32">
        <div className="pt-4 lg:pt-8">
          <SectionHeading
            eyebrow={admissions?.eyebrow || "Admissions Open 2026"}
            title={
              admissions?.title ||
              "Start your SNBP University journey"
            }
            description={
              admissions?.description ||
              "Complete the registration form — our admissions team will connect with you about programmes, eligibility, and next steps."
            }
            light
          />
        </div>

        <div className="w-full rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
          <AdmissionEnquiryForm compact />
        </div>
      </div>
    </section>
  );
}