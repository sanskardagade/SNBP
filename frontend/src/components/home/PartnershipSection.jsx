import { useState } from "react";
import SectionHeading from "../common/SectionHeading.jsx";

export default function PartnershipSection({ partnershipTabs = [] }) {
  const [tabId, setTabId] = useState(partnershipTabs[0]?.id || "");
  const active = partnershipTabs.find((t) => t.id === tabId) || partnershipTabs[0];

  return (
    <section className="home-partnerships section-pad bg-purpledark text-white" id="partnerships">
      <div className="container-width">
        <SectionHeading
          eyebrow="Learning, with the wider world in view"
          title="Bring what you learn into the room where it’s used."
          description="Explore how projects, professional learning and industry perspectives can connect study with the world beyond campus."
          light
        />

        <div className="home-partnership-tabs mt-10 flex flex-wrap gap-2 border-b border-white/15" role="tablist" aria-label="Partnership topics">
          {partnershipTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              onClick={() => setTabId(tab.id)}
              aria-pressed={tabId === tab.id}
              aria-selected={tabId === tab.id}
              className={`border-b-2 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide transition sm:text-sm ${
                tabId === tab.id
                  ? "border-gold text-gold"
                  : "border-transparent text-white/70 hover:text-white"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {active ? (
          <div className="home-partnership-panel mt-8 grid gap-8 border border-white/10 bg-white/[0.04] p-6 sm:grid-cols-[0.8fr_1.2fr] sm:p-9" role="tabpanel">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">A closer look</p>
              <h3 className="heading-serif mt-3 text-2xl font-bold text-white">{active.title}</h3>
            </div>
            <ul className="grid gap-x-8 gap-y-4 text-sm leading-6 text-white/85 sm:grid-cols-2">
              {active.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
