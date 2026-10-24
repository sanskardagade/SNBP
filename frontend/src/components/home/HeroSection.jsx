import { heroIntroGif, heroIntroVideo } from "../../constants/assets.js";

export default function HeroSection({ hero, stats }) {
  if (!hero) return null;

  return (
    <section className="relative overflow-hidden bg-[#f7f4fb]">
      <div className="absolute inset-0">
        <video
          className="hidden h-full w-full object-cover md:block"
          autoPlay
          muted
          loop
          playsInline
          poster={heroIntroGif}
        >
          <source src={heroIntroVideo} type="video/mp4" />
        </video>
        <img src={hero.poster || heroIntroGif} alt="" className="h-full w-full object-cover md:hidden" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-white/78 to-white/95" />

      <div className="container-width relative pb-16 pt-12 text-center sm:pt-16">
        <h1 className="font-heading mx-auto max-w-4xl text-3xl font-semibold leading-snug text-purpledark sm:text-4xl lg:text-[2.75rem]">
          {hero.title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">{hero.subtitle}</p>
        {hero.societyLabel ? (
          <p className="mt-6 text-sm font-semibold text-purplebrand/90">{hero.societyLabel}</p>
        ) : null}

        {stats?.length ? (
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-xl bg-white/90 px-4 py-6 shadow-soft backdrop-blur-sm">
                <div className="font-heading text-3xl font-semibold text-gold sm:text-4xl">{item.value}</div>
                <div className="mt-2 text-xs font-bold uppercase tracking-wide text-purplebrand">{item.label}</div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
