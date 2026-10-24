export default function SectionHeading({ eyebrow, title, description, light = false, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <div className={`eyebrow ${light ? "!text-gold" : ""}`}>{eyebrow}</div>
      ) : null}
      <h2
        className={`heading-serif mt-4 text-3xl font-bold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-purplebrand"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-7 ${
            light ? "text-white/75" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
