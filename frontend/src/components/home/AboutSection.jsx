import { aboutCampusImage } from "../../constants/assets.js";
import { Link } from "react-router-dom";

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
    <section className="home-about section-pad">
      <div className="container-width">
        <div className="home-about-layout">
          <div className="home-about-visual">
            <img
              src={content.image || aboutCampusImage}
              alt="SNBP University campus"
              loading="lazy"
              onError={(event) => {
                if (event.currentTarget.src === aboutCampusImage) {
                  event.currentTarget.hidden = true;
                  return;
                }
                event.currentTarget.src = aboutCampusImage;
              }}
            />
            <span className="home-about-image-note">The SNBP story</span>
            <span className="home-about-image-index" aria-hidden="true">01 / 04</span>
          </div>
          <div className="home-about-copy">
            <p className="eyebrow">{content.eyebrow || defaultAbout.eyebrow}</p>
            <h2 className="heading-serif">
              {content.title || defaultAbout.title}
            </h2>
            <div className="home-about-prose">
            {(content.paragraphs?.length ? content.paragraphs : defaultAbout.paragraphs).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            </div>
            <Link className="home-text-link" to="/about">Get to know SNBP <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
