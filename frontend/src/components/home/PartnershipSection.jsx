import { useState } from "react";
import SectionHeading from "../common/SectionHeading.jsx";

export default function PartnershipSection({ partnershipTabs = [], centreOfExcellence = [] }) {
  const [tabId, setTabId] = useState(partnershipTabs[0]?.id || "");
  const active = partnershipTabs.find((t) => t.id === tabId) || partnershipTabs[0];

  return (
    <section className="section-pad bg-purpledark text-white">
      <div className="container-width">
        <SectionHeading
          eyebrow="Our Partnership Ecosystem"
          title="Build a Strong Professional Profile from Day One"
          description="Students develop industry-ready portfolios through resume building, LinkedIn optimization, project showcases, and career branding — alongside corporate, certification, internship, and research partners."
          light
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {partnershipTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setTabId(tab.id)}
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition ${
                tabId === tab.id ? "bg-gold text-purpledark" : "bg-white/10 text-white/85 hover:bg-white/15"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {active ? (
          <div className="mt-8 rounded-xl border border-white/15 bg-white/5 p-6 sm:p-8">
            <h3 className="heading-serif text-xl font-bold text-gold">{active.title}</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/85">
              {active.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-gold">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {centreOfExcellence?.length ? (
          <div className="mt-12">
            <h3 className="heading-serif text-xl font-bold text-gold">Centre of Excellence</h3>
            <p className="mt-2 max-w-2xl text-sm text-white/75">
              Industry-led learning, practical exposure and career-focused skill development built into the journey.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {centreOfExcellence.map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
