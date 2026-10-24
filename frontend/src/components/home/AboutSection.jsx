import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading.jsx";

export default function AboutSection({ about }) {
  if (!about) return null;

  return (
    <section className="section-pad">
      <div className="container-width grid items-center gap-12 lg:grid-cols-2">
        <img
          src={about.image}
          alt="SNBP University campus"
          className="h-[420px] w-full rounded-xl object-cover shadow-soft"
          loading="lazy"
        />
        <div>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
            {about.paragraphs?.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <Link to="/about" className="btn-primary mt-8">
            Read more <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
