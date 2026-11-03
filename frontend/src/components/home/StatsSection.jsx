import { useEffect, useRef, useState } from "react";

const defaultStats = [
  { value: "29", label: "Years Of Educational Excellence" },
  { value: "20+", label: "Institutes" },
  { value: "30000+", label: "Students Across Campuses" },
];

function CountUpValue({ value, active }) {
  const match = String(value).match(/^([^\d]*)([\d,]+)(.*)$/);
  const [current, setCurrent] = useState(match ? 0 : value);

  useEffect(() => {
    if (!active || !match) return undefined;

    const target = Number(match[2].replace(/,/g, ""));
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1100;
    let frame;
    let start;

    function tick(timestamp) {
      if (start === undefined) start = timestamp;
      const progress = duration === 0 ? 1 : Math.min((timestamp - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const number = Math.round(target * eased);
      const formatted = match[2].includes(",") ? number.toLocaleString("en-IN") : String(number);
      setCurrent(`${match[1]}${formatted}${match[3]}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, match?.[0]]);

  return <>{current}</>;
}

export default function StatsSection({ stats }) {
  const visibleStats = stats?.length ? stats : defaultStats;
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) {
      setActive(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setActive(true);
        observer.disconnect();
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="home-stats relative z-10">
      <div className="home-stats-inner">
        <div className="home-stats-grid">
          {visibleStats.map((item, index) => (
            <div
              key={item.label}
              className="home-stat"
            >
              <p className="home-stat-value heading-serif" aria-label={`${item.value} ${item.label}`}>
                <CountUpValue value={item.value} active={active} />
              </p>
              <p className="home-stat-label">
                {item.label}
              </p>
              <span className="home-stat-index">0{index + 1}</span>
            </div>
          ))}
        </div>
        <p className="home-stats-signature">Subhadra Educational Society</p>
      </div>
    </section>
  );
}
