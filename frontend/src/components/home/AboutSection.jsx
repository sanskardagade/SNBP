import aboutCampusImage from "../../assets/about-campus.png";

const defaultAbout = {
  eyebrow: "About SNBP University",
  title: "A Legacy of Excellence, A Vision for Tomorrow",
  paragraphs: [
    "SNBP University is more than an institute. It is a movement rooted in the wisdom of ancient Indian philosophy and powered by modern, world-class education. Founded on the vision of Shri Dasharath K. Bhosale, we nurture leaders who combine knowledge with character.",
    "For nearly three decades, we have been shaping brilliant minds across Arts, Commerce, and Science. Our 29-year track record speaks not only through numbers, but also through the careers built, innovations created, and communities strengthened by our graduates.",
  ],
  image: aboutCampusImage,
};

export default function AboutSection({ about }) {
  const content = about || defaultAbout;

  return (
    <section className="relative isolate overflow-hidden bg-[#faf9f6] py-12 sm:py-14 lg:py-18">
      <img
        src={content.image || aboutCampusImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-8 -z-10 hidden h-[460px] w-[600px] object-cover opacity-[0.09] grayscale [mask-image:linear-gradient(to_right,black,transparent)] lg:block"
        loading="lazy"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 -z-10 hidden h-[330px] w-[330px] rounded-full bg-[repeating-conic-gradient(from_0deg,#c9a22712_0deg,#c9a22712_8deg,transparent_9deg,transparent_22deg)] opacity-80 before:absolute before:inset-12 before:rounded-full before:border-[18px] before:border-[#c9a2270d] after:absolute after:inset-24 after:rounded-full after:border-[18px] after:border-[#c9a2270a] lg:block"
      />
      <div className="container-width">
        <div className="mx-auto max-w-3xl text-center">
          <span aria-hidden="true" className="mx-auto block h-3 w-3 rotate-45 bg-gold" />
          <h2 className="heading-serif mt-5 text-3xl font-normal leading-tight text-purplebrand sm:text-4xl lg:text-[2.75rem]">
            {content.eyebrow || defaultAbout.eyebrow}
          </h2>
          <p className="mt-3 text-base text-bluebrand sm:text-lg">
            {content.title || defaultAbout.title}
          </p>
        </div>

        <div className="mx-auto mt-9 grid max-w-[1000px] items-center gap-9 md:mt-12 md:grid-cols-2 md:gap-12">
          <div className="space-y-5 text-base leading-7 text-slate-600 sm:text-[1.05rem] sm:leading-8">
            {(content.paragraphs?.length ? content.paragraphs : defaultAbout.paragraphs).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <img
            src={content.image || aboutCampusImage}
            alt="SNBP University campus"
            className="h-[300px] w-full rounded-xl object-cover shadow-soft sm:h-[360px] lg:h-[390px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
