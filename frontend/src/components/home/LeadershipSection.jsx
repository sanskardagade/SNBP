import SectionHeading from "../common/SectionHeading.jsx";

export default function LeadershipSection({ leadership = [] }) {
  if (!leadership.length) return null;

  return (
    <section className="home-leadership section-pad">
      <div className="container-width">
        <div className="home-leadership-header">
          <SectionHeading
            eyebrow="The people behind the purpose"
            title="Meet the people helping shape the SNBP story."
          />
          <p>Leadership begins with a point of view—and the responsibility to help a learning community grow.</p>
        </div>

        <div className="home-leadership-grid">
          {leadership.map((leader, index) => (
            <article
              key={leader.name}
              className="home-leader"
            >
              <div className="home-leader-photo relative flex min-h-56 items-end justify-center overflow-hidden bg-[#f3efe6] sm:min-h-[300px]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full max-h-[420px] w-full object-cover object-top"
                    loading="lazy"
                  />
                  <span className="home-leader-index">0{index + 1}</span>
              </div>
              <div className="home-leader-copy">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#92751e]">
                    {leader.role}
                  </p>
                  <h3 className="heading-serif mt-2 text-xl font-bold text-purplebrand">
                    {leader.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{leader.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
