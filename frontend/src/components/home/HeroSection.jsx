import { Link } from "react-router-dom";
import { heroIntroGif, heroIntroVideo } from "../../constants/assets.js";

export default function HeroSection({ hero }) {
  if (!hero) return null;

  return (
    <section className="relative isolate min-h-[540px] overflow-hidden bg-purpledark sm:min-h-[620px]">
      <div className="absolute inset-0" aria-hidden>
        <video
          className="hidden h-full w-full object-cover object-[center_32%] md:block"
          autoPlay
          muted
          loop
          playsInline
          poster={heroIntroGif}
        >
          <source src={heroIntroVideo} type="video/mp4" />
        </video>
        <img
          src={hero.poster || heroIntroGif}
          alt=""
          className="h-full w-full object-cover md:hidden"
        />
      </div>
      <div className="hero-overlay absolute inset-0" aria-hidden />

      <div className="container-width relative z-10 flex flex-col items-center px-4 pb-8 pt-10 text-center sm:pt-12 md:pb-10 md:pt-14 lg:pt-16">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold/95">SNBP University · Pune</p>
        <h1 className="heading-serif mx-auto mt-5 max-w-4xl text-balance text-[1.65rem] font-bold leading-tight text-white sm:text-4xl lg:text-[2.85rem] lg:leading-[1.15]">
          {hero.title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg sm:leading-8">
          {hero.subtitle}
        </p>
        {hero.societyLabel ? (
          <p className="heading-serif mt-6 text-sm font-bold tracking-wide text-gold sm:text-base">
            {hero.societyLabel}
          </p>
        ) : null}

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link to="/admissions" className="btn-primary min-w-[160px]">
            Enquire Now
          </Link>
          <Link to="/about" className="btn-outline min-w-[160px] border-white/40">
            About SNBP
          </Link>
        </div>
      </div>

    </section>
  );
}
