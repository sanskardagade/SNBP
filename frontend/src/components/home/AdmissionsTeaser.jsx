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

      {/* Dark Purple Overlay - Desktop Only */}
      <div className="absolute inset-0 -z-10 hidden bg-[#21143b]/60 md:block" />

      {/* Mobile: Show Only the Background Image */}
      <div className="h-[280px] w-full sm:h-[350px] md:hidden" />

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