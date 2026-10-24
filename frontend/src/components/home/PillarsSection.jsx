import SectionHeading from "../common/SectionHeading.jsx";

export default function PillarsSection({ pillars = [] }) {
  return (
    <section className="section-pad bg-mist">
      <div className="container-width">
        <SectionHeading
          eyebrow="Pillars of Excellence"
          title="We don't just educate. We empower."
          center
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-xl border border-purplebrand/10 bg-white p-6 shadow-sm transition hover:shadow-soft"
            >
              <h3 className="heading-serif text-lg font-bold text-purplebrand">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
