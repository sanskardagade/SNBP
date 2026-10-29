import AdmissionEnquiryForm from "../forms/AdmissionEnquiryForm.jsx";
import SectionHeading from "../common/SectionHeading.jsx";

export default function AdmissionsTeaser({ admissions }) {
  return (
    <section
      id="admissions"
      className="relative isolate overflow-hidden"
    >
      {/* Background Campus Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://snbpuniversity.com/assets/SNBP%20Hero%20Image%20Mobile%202%20copy%202.jpg-DuRFS0g_.jpeg")',
        }}
      />

      {/* Darken the photo so the copy remains readable. */}
      <div className="absolute inset-0 -z-10 hidden bg-[#21143b]/60 md:block" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#21143b]/80 via-[#21143b]/55 to-[#21143b]/20 md:hidden"
      />

      {/* Mobile hero copy sits over the open sky in the campus image. */}
      <div className="flex min-h-[280px] w-full items-center justify-center px-5 py-8 text-center sm:min-h-[350px] md:hidden">
        <div className="max-w-[340px] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.55)]">
          <h1 className="heading-serif text-[1.45rem] font-bold leading-[1.3] sm:text-[1.7rem]">
            Degree Is The Beginning, Character Is The Destination.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/95 sm:text-base">
            At SNBP University, education transcends classrooms. It shapes character and creates
            leaders.
          </p>
        </div>
      </div>

      {/* Desktop and Tablet: Show Heading and Form */}
      <div className="container-width hidden items-start gap-10 py-28 md:grid md:grid-cols-2 lg:py-32">
        {/* Left Side: Heading and Description */}
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

        {/* Right Side: Admission Registration Form */}
        <div className="w-full rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
          <AdmissionEnquiryForm compact />
        </div>
      </div>
    </section>
  );
}