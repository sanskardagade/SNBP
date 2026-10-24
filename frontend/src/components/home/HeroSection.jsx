import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection({ hero, stats }) {
  if (!hero) return null;

  return (
    <section className="relative overflow-hidden bg-slate-100">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${hero.image}")` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/90" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full border-[12px] border-gold/25 bg-gold/10 sm:top-32 sm:h-80 sm:w-80" />

      <div className="container-width relative pb-16 pt-10 text-center sm:pt-16">
        <h1 className="heading-serif mx-auto max-w-4xl text-3xl font-bold leading-snug text-purplebrand sm:text-4xl lg:text-5xl">
          {hero.title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
          {hero.subtitle}
        </p>
        {hero.societyLabel ? (
          <p className="mt-6 text-sm font-semibold text-purplebrand/80">{hero.societyLabel}</p>
        ) : null}

        {stats?.length ? (
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-xl bg-white/90 px-4 py-6 shadow-soft backdrop-blur-sm">
                <div className="heading-serif text-3xl font-bold text-gold sm:text-4xl">{item.value}</div>
                <div className="mt-2 text-xs font-bold uppercase tracking-wide text-purplebrand">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-10 hidden flex-wrap justify-center gap-3 sm:flex">
          <Link to="/admissions" className="btn-primary">
            Admissions Open 2026 <ArrowUpRight size={16} />
          </Link>
          <Link to="/about" className="btn-primary !bg-purplebrand !text-white hover:!bg-purpledark">
            About SNBP
          </Link>
        </div>
      </div>
    </section>
  );
}
