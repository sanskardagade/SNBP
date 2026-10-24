export default function PageHero({ eyebrow, title, lead }) {
  return (
    <section className="bg-purpledark py-16 text-white sm:py-24">
      <div className="container-width">
        {eyebrow ? <div className="eyebrow !text-gold">{eyebrow}</div> : null}
        <h1 className="font-heading mt-4 max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">{title}</h1>
        {lead ? <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">{lead}</p> : null}
      </div>
    </section>
  );
}
