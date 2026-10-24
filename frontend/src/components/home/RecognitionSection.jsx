import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading.jsx";

export default function RecognitionSection({ recognitions = [] }) {
  const [index, setIndex] = useState(2);
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

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <div className="flex flex-wrap justify-center gap-2">
            {recognitions.map((r, i) => (
              <button
                key={r.title}
                type="button"
                onClick={() => setIndex(i)}
                className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                  i === index ? "bg-purplebrand text-white" : "bg-white text-purplebrand"
                }`}
              >
                {r.title.length > 28 ? `${r.title.slice(0, 26)}…` : r.title}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-white p-8 shadow-soft">
            <h3 className="heading-serif text-xl font-bold text-purplebrand">{item.title}</h3>
            {item.description ? (
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            ) : null}
          </div>

          <div className="mt-6 flex justify-center gap-3">
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
              className="grid h-10 w-10 place-items-center rounded-full border border-purplebrand/20"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
