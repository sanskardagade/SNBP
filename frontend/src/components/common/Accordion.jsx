import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items = [], className = "" }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={`divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white ${className}`.trim()}>
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <span className="font-bold text-purplebrand">{item.question}</span>
              <ChevronDown
                className={`mt-1 shrink-0 text-gold transition ${open ? "rotate-180" : ""}`}
                size={20}
              />
            </button>
            {open ? (
              <div className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
