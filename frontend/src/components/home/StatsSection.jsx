const panelStyles = [
  "bg-[#f4f0e8] text-[#2d1b4d]",
  "bg-[#dfd2e8] text-[#2d1b4d]",
  "bg-[#b99738] text-[#2d1b4d]",
];

const defaultStats = [
  { value: "29", label: "Years Of Educational Excellence" },
  { value: "20+", label: "Institutes" },
  { value: "30000+", label: "Students Across Campuses" },
];

export default function StatsSection({ stats }) {
  const visibleStats = stats?.length ? stats : defaultStats;

  return (
    <section className="relative z-10 -mt-12 px-4 pb-10 sm:-mt-20 sm:px-6 sm:pb-14">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 top-12 bg-[#faf9f6] sm:top-20"
      />
      <div className="relative mx-auto max-w-[1120px] overflow-hidden rounded-t-[32px] shadow-soft">
        <div className="grid sm:grid-cols-3">
          {visibleStats.map((item, index) => (
            <div
              key={item.label}
              className={`relative flex min-h-[210px] flex-col items-center overflow-hidden px-5 pt-9 text-center sm:min-h-[274px] sm:pt-11 ${panelStyles[index % panelStyles.length]}`}
            >
              <p className="heading-serif relative z-10 text-4xl sm:text-[2.75rem]">
                {item.value}
              </p>
              <p className="relative z-10 mt-3 max-w-[220px] text-base leading-snug sm:text-lg">
                {item.label}
              </p>
              <div
                aria-hidden="true"
                className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full border border-[#e4c979]/70 bg-[repeating-conic-gradient(from_0deg,transparent_0deg,transparent_12deg,#e4c97933_13deg,#e4c97933_14deg)] opacity-80 before:absolute before:inset-3 before:rounded-full before:border before:border-[#e4c979]/60 after:absolute after:inset-7 after:rounded-full after:border after:border-[#e4c979]/50"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 bg-[#2d1b4d] px-5 py-2 text-center">
          <span aria-hidden="true" className="h-px w-10 bg-gold/70 sm:w-16" />
          <p className="heading-serif text-[0.65rem] tracking-[0.18em] text-gold sm:text-xs sm:tracking-[0.2em]">
            SUBHADRA EDUCATIONAL SOCIETY.
          </p>
          <span aria-hidden="true" className="h-px w-10 bg-gold/70 sm:w-16" />
        </div>
      </div>
    </section>
  );
}
