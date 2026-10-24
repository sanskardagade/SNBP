import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading.jsx";

export default function AdmissionsTeaser({ admissions }) {
  return (
    <section className="section-pad bg-mist" id="admissions">
      <div className="container-width grid items-center gap-10 lg:grid-cols-2">
        <SectionHeading
          eyebrow={admissions?.eyebrow || "Admissions Open 2026"}
          title={admissions?.title || "Start your SNBP University journey"}
          description={
            admissions?.description ||
            "Share your details and our admissions team will connect with you."
          }
        />
        <div className="rounded-2xl border border-purplebrand/10 bg-white p-8 shadow-soft">
          <p className="text-sm text-slate-600">
            Complete the full admission enquiry on our Admissions page. This clone stores submissions
            via the Express API for demo purposes.
          </p>
          <Link to="/admissions" className="btn-primary mt-6">
            Go to application form
          </Link>
        </div>
      </div>
    </section>
  );
}
