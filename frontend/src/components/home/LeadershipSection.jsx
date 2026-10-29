import SectionHeading from "../common/SectionHeading.jsx";

export default function LeadershipSection({ leadership = [] }) {
  if (!leadership.length) return null;

  return (
    <section className="section-pad">
      <div className="container-width">
        <SectionHeading
          eyebrow="Our Leadership"
          title="Guiding SNBP University with decades of educational excellence"
          center
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {leadership.map((leader) => (
            <article
              key={leader.name}
              className="overflow-hidden rounded-2xl border border-[#eee8da] bg-white shadow-sm"
            >
              <div className="grid min-h-full sm:grid-cols-[minmax(150px,0.8fr)_1.2fr]">
                <div className="relative flex min-h-56 items-end justify-center overflow-hidden bg-[#f3efe6] sm:min-h-[300px]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full max-h-[330px] w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-center p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#92751e]">
                    {leader.role}
                  </p>
                  <h3 className="heading-serif mt-2 text-xl font-bold text-purplebrand">
                    {leader.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{leader.bio}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
