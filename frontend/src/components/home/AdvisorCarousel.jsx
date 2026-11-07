import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { academicAdvisors } from "../../content/academicAdvisors.js";

const featuredAdvisors = academicAdvisors.filter((advisor) => advisor.photo);

export default function AdvisorCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || featuredAdvisors.length < 2) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const intervalId = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setActiveIndex((index) => (index + 1) % featuredAdvisors.length);
      }
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [paused]);

  const advisor = featuredAdvisors[activeIndex];
  const move = (direction) => {
    setActiveIndex(
      (index) => (index + direction + featuredAdvisors.length) % featuredAdvisors.length
    );
  };

  if (!advisor) return null;

  return (
    <section
      className="advisor-carousel"
      aria-label="Mentors and advisors"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <article
        key={advisor.name}
        className="advisor-carousel-slide"
        role="group"
        aria-roledescription="slide"
        aria-label={`${activeIndex + 1} of ${featuredAdvisors.length}`}
      >
        <img src={advisor.photo} alt={advisor.name} className="advisor-carousel-image" />
        <div className="advisor-carousel-shade" />
        <div className="advisor-carousel-copy">
          <p className="advisor-carousel-eyebrow">
            {advisor.category} mentor · {advisor.programs.join(" · ")}
          </p>
          <h2>{advisor.name}</h2>
          <p className="advisor-carousel-role">{advisor.role}</p>
          <p className="advisor-carousel-organization">{advisor.organization}</p>
        </div>
      </article>

      <div className="advisor-carousel-controls">
        <div className="advisor-carousel-dots" aria-label="Choose an advisor">
          {featuredAdvisors.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={`advisor-carousel-dot${index === activeIndex ? " is-active" : ""}`}
              aria-label={`Show ${item.name}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <div className="advisor-carousel-arrows">
          <button type="button" aria-label="Previous advisor" onClick={() => move(-1)}>
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button type="button" aria-label="Next advisor" onClick={() => move(1)}>
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
      <Link to="/academic-advisory-board" className="advisor-carousel-link">
        Show more <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </section>
  );
}
