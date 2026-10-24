import AdmissionEnquiryForm from "../forms/AdmissionEnquiryForm.jsx";
import SectionHeading from "../common/SectionHeading.jsx";

export default function AdmissionsTeaser({ admissions }) {
  return (
    <section className="section-pad bg-mist !pt-28 md:!pt-32" id="admissions">
      <div className="container-width grid items-start gap-10 lg:grid-cols-2">
        <SectionHeading
          eyebrow={admissions?.eyebrow || "Admissions Open 2026"}
          title={admissions?.title || "Start your SNBP University journey"}
          description={
            admissions?.description ||
            "Complete the registration form — our admissions team will connect with you about programmes, eligibility, and next steps."
          }
        />
        <AdmissionEnquiryForm compact />
      </div>
    </section>
  );
}
