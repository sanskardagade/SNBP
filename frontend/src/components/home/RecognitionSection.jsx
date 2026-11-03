import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading.jsx";

export default function RecognitionSection({ recognitions = [] }) {
  const [index, setIndex] = useState(0);
  const item = recognitions[index] || recognitions[0];
  if (!item) return null;

  return (
    <section className="home-recognition section-pad bg-mist">
      <div className="container-width">
        <div className="home-recognition-heading">
          <SectionHeading
            eyebrow="A wider story, told in milestones"
            title="A record worth seeing up close."
          />
          <div className="home-recognition-controls" aria-label="Select recognition">
            {recognitions.map((r, i) => (
              <button
                key={r.title}
                type="button"
                onClick={() => setIndex(i)}
                aria-pressed={i === index}
                className={i === index ? "is-active" : ""}
              >
                {r.title}
              </button>
            ))}
          </div>
        </div>

        <div className="home-recognition-feature">
            <div className="home-recognition-art">
              {item.image ? (
                <img
                  src={item.image}
                  alt=""
                  className="max-h-56 w-full object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="heading-serif">SNBP</span>
              )}
            </div>
            <div className="home-recognition-copy">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#92751e]">
                Recognition &amp; milestones
              </p>
              <h3 className="heading-serif mt-3 text-2xl font-bold text-purplebrand">{item.title}</h3>
              {item.description ? (
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">{item.description}</p>
              ) : null}
            </div>
        </div>

          <div className="home-recognition-arrows">
            <button
              type="button"
              aria-label="Previous recognition"
              onClick={() => setIndex((i) => (i === 0 ? recognitions.length - 1 : i - 1))}
              className="grid h-10 w-10 place-items-center"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              aria-label="Next recognition"
              onClick={() => setIndex((i) => (i === recognitions.length - 1 ? 0 : i + 1))}
              className="grid h-10 w-10 place-items-center"
            >
              <ChevronRight />
            </button>
        </div>
      </div>
    </section>
  );
}
