import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading.jsx";

export default function RecognitionSection({ recognitions = [] }) {
  const [index, setIndex] = useState(0);
  const item = recognitions[index] || recognitions[0];
  if (!item) return null;

  return (
    <section className="section-pad bg-mist">
      <div className="container-width">
        <SectionHeading
          eyebrow="SNBP Group of Institutions"
          title="Recognition & Milestones"
          center
        />

        <div className="mx-auto mt-10 max-w-4xl text-center">
          <div className="flex flex-wrap justify-center gap-2">
            {recognitions.map((r, i) => (
              <button
                key={r.title}
                type="button"
                onClick={() => setIndex(i)}
                aria-pressed={i === index}
                className={`rounded-full border px-4 py-2 text-xs font-bold transition ${
                  i === index
                    ? "border-purplebrand bg-purplebrand text-white"
                    : "border-purplebrand/15 bg-white text-purplebrand hover:border-gold"
                }`}
              >
                {r.title}
              </button>
            ))}
          </div>

          <div className="mt-8 grid items-center gap-8 rounded-2xl border border-[#eee8da] bg-white p-6 text-left shadow-soft sm:grid-cols-[minmax(160px,0.65fr)_1.35fr] sm:p-10">
            <div className="grid min-h-36 place-items-center rounded-xl bg-[#f7f4ed] p-5">
              {item.image ? (
                <img
                  src={item.image}
                  alt=""
                  className="max-h-36 w-full object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="heading-serif text-5xl font-bold text-gold">SNBP</span>
              )}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#92751e]">
                Recognition &amp; milestones
              </p>
              <h3 className="heading-serif mt-3 text-2xl font-bold text-purplebrand">{item.title}</h3>
              {item.description ? (
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">{item.description}</p>
              ) : null}
            </div>
          </div>

          <div className="mt-5 flex justify-center gap-3">
            <button
              type="button"
              aria-label="Previous recognition"
              onClick={() => setIndex((i) => (i === 0 ? recognitions.length - 1 : i - 1))}
              className="grid h-10 w-10 place-items-center rounded-full border border-purplebrand/20"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              aria-label="Next recognition"
              onClick={() => setIndex((i) => (i === recognitions.length - 1 ? 0 : i + 1))}
              className="grid h-10 w-10 place-items-center rounded-full border border-purplebrand/20 text-purplebrand transition hover:border-gold hover:bg-white"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
