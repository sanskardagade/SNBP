import { useState } from "react";
import SectionHeading from "../common/SectionHeading.jsx";

export default function CampusLifeSection({ campusGalleries = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = campusGalleries[activeIndex] || campusGalleries[0];
  if (!active) return null;

  return (
    <section className="section-pad" id="campus-life">
      <div className="container-width">
        <SectionHeading
          eyebrow="Life At SNBP"
          title="A community full of possibility"
          description="Discover the campus spaces and student experiences that make life at SNBP memorable."
          center
        />

        <div className="mt-10 overflow-hidden rounded-2xl bg-purpledark shadow-soft">
          <img
            src={active.image}
            alt={`${active.title} ${active.count}`}
            className="h-[260px] w-full object-cover sm:h-[420px] lg:h-[520px]"
            loading="lazy"
          />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {campusGalleries.map((gallery, index) => (
            <button
              key={`${gallery.title}-${gallery.count}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={index === activeIndex}
              className={`group overflow-hidden rounded-xl border text-left transition ${
                index === activeIndex
                  ? "border-gold bg-white shadow-sm"
                  : "border-transparent bg-white hover:border-purplebrand/20"
              }`}
            >
              <img
                src={gallery.image}
                alt=""
                className="h-24 w-full object-cover transition duration-300 group-hover:scale-[1.03] sm:h-32"
                loading="lazy"
              />
              <span className="block p-3">
                <span className="block text-sm font-bold text-purplebrand">{gallery.title}</span>
                <span className="mt-1 block text-xs text-slate-500">{gallery.count} photos</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
