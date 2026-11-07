import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { asset } from "../constants/assets.js";

const campusIllustration = asset("/assets/About%20Us%20Hero1-dKP-roMH.webp");
const societyEmblem = asset("/assets/S.E%20logo-CfYNF0s4.webp");

const spaces = [
  {
    src: asset("/assets/1-CdIfhr6N.webp"),
    alt: "An interior gathering space at SNBP",
    label: "Spaces to gather",
  },
  {
    src: asset("/assets/2-Boj9UAeS.webp"),
    alt: "A classroom at SNBP",
    label: "Rooms for learning",
  },
  {
    src: asset("/assets/3-CxkWFAp0.webp"),
    alt: "A meeting space at SNBP",
    label: "Ideas in conversation",
  },
  {
    src: asset("/assets/4-B_-dCUGs.webp"),
    alt: "A lecture room at SNBP",
    label: "Learning in practice",
  },
  {
    src: asset("/assets/5-DpfWQPt6.webp"),
    alt: "A learning space at SNBP",
    label: "Spaces to focus",
  },
  {
    src: asset("/assets/6-Bm93t2za.webp"),
    alt: "A collaborative learning space at SNBP",
    label: "Room to work together",
  },
];

const milestones = [
  {
    year: "1996",
    title: "A society takes shape",
    description: "Subhadra Educational Society is founded, beginning a continuing commitment to education.",
  },
  {
    year: "1997",
    title: "The first SNBP school",
    description: "The first SNBP school opens in Yerwada, Pune.",
  },
  {
    year: "2008–09",
    title: "Learning widens its reach",
    description: "The Society expands into higher education, including colleges in arts, commerce, science, management and law.",
  },
  {
    year: "2026",
    title: "A university joins the story",
    description: "SNBP University is established in Chikhali, Pune.",
  },
];

const principles = [
  {
    pair: "Creativity + discipline",
    detail: "Make room for original thinking, then give good ideas the care and practice they need.",
  },
  {
    pair: "Character + integrity",
    detail: "Treat learning as a responsibility—to your work, your choices and the people around you.",
  },
  {
    pair: "Intellect + innovation",
    detail: "Ask better questions, build a strong foundation and stay open to new ways of seeing a problem.",
  },
  {
    pair: "Empathy + leadership",
    detail: "Lead with attention to others, and put knowledge to thoughtful use in the wider community.",
  },
  {
    pair: "Global awareness + lifelong curiosity",
    detail: "Keep learning beyond a course of study, with a perspective that reaches beyond the familiar.",
  },
];

function SectionLabel({ children, light = false }) {
  return <p className={`about-label${light ? " is-light" : ""}`}>{children}</p>;
}

export default function AboutUniversity() {
  const [activeSpace, setActiveSpace] = useState(0);
  const currentSpace = spaces[activeSpace];

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches) return undefined;

    const timer = window.setInterval(() => {
      setActiveSpace((current) => (current + 1) % spaces.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  function showPreviousSpace() {
    setActiveSpace((current) => (current - 1 + spaces.length) % spaces.length);
  }

  function showNextSpace() {
    setActiveSpace((current) => (current + 1) % spaces.length);
  }

  return (
    <div className="about-page">
      <section className="about-opening" aria-labelledby="about-title">
        <div className="about-opening-copy">
          <SectionLabel>About SNBP University</SectionLabel>
          <h1 id="about-title">
            Learning should leave room for <em>every kind of becoming.</em>
          </h1>
          <p>
            A university is more than a place to study. It is where questions gather,
            perspectives widen and people begin to imagine what they can contribute.
          </p>
          <div className="about-opening-actions">
            <Link to="/our-journey" className="about-primary-link">
              Follow our story <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <a href="#about-story" className="about-scroll-link">
              Scroll to explore <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="about-opening-footnote">
            <span>Rooted in Pune</span>
            <span aria-hidden="true" />
            <span>Part of Subhadra Educational Society</span>
          </div>
        </div>
        <figure className="about-opening-visual">
          <img
            src={campusIllustration}
            alt="Architectural illustration of SNBP University"
            fetchPriority="high"
            decoding="async"
          />
          <figcaption>
            <span>SNBP University</span>
            <span>Chikhali · Pune</span>
          </figcaption>
          <span className="about-opening-number" aria-hidden="true">01</span>
        </figure>
        <div className="about-opening-edge" aria-hidden="true">A university in the making</div>
      </section>

      <section className="about-story" id="about-story" aria-labelledby="about-story-title">
        <div className="about-story-aside">
          <SectionLabel>Where the story begins</SectionLabel>
          <p className="about-aside-quote">
            Education is not a single destination. It is a path that keeps opening.
          </p>
          <img src={societyEmblem} alt="Subhadra Educational Society emblem" loading="lazy" />
        </div>
        <div className="about-story-copy">
          <h2 id="about-story-title">From a shared belief to a wider learning community.</h2>
          <p>
            SNBP University is part of the educational journey built by Subhadra Educational
            Society. That journey began with a school in Pune and grew to include schools,
            junior colleges and higher education. The university carries that experience
            forward into a multidisciplinary setting.
          </p>
          <p>
            Today, students can explore technology, arts, commerce and science. The subjects
            differ; the invitation is the same: build understanding, stay curious and find
            meaningful ways to use what you learn.
          </p>
          <Link to="/sponsoring-body" className="about-inline-link">
            Meet the Society behind SNBP <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="about-timeline" aria-labelledby="about-timeline-title">
        <div className="about-section-heading">
          <div>
            <SectionLabel>A journey, still unfolding</SectionLabel>
            <h2 id="about-timeline-title">One beginning. More ways to learn.</h2>
          </div>
          <p>
            Each chapter widened the circle of learners and brought the next kind of
            education within reach.
          </p>
        </div>
        <ol className="about-milestones">
          {milestones.map((milestone, index) => (
            <li key={milestone.year} className="about-milestone">
              <span className="about-milestone-index">0{index + 1}</span>
              <p className="about-milestone-year">{milestone.year}</p>
              <h3>{milestone.title}</h3>
              <p className="about-milestone-copy">{milestone.description}</p>
            </li>
          ))}
        </ol>
        <Link to="/our-journey" className="about-inline-link about-timeline-link">
          Explore the full journey <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </section>

      <section className="about-purpose" aria-labelledby="about-purpose-title">
        <div className="about-purpose-intro">
          <SectionLabel light>The direction we choose</SectionLabel>
          <h2 id="about-purpose-title">A north star for learning. A purpose beyond it.</h2>
          <p>
            At SNBP, education is about growing in knowledge and in the ways we show up
            for one another.
          </p>
        </div>
        <div className="about-purpose-statements">
          <article className="about-purpose-statement">
            <span className="about-purpose-kicker">Our vision</span>
            <h3>Many paths. A fuller sense of possibility.</h3>
            <p>
              Help learners grow in knowledge, confidence, character and care for the
              world around them—so they can choose their direction with purpose.
            </p>
          </article>
          <article className="about-purpose-statement">
            <span className="about-purpose-kicker">Our mission</span>
            <h3>Connect what is learned with what can be done.</h3>
            <p>
              Bring strong academic foundations together with practical experience,
              research, innovation and engagement with industry and community.
            </p>
          </article>
        </div>
        <span className="about-purpose-seal" aria-hidden="true">SNBP</span>
      </section>

      <section className="about-values" aria-labelledby="about-values-title">
        <div className="about-values-intro">
          <SectionLabel>Principles in practice</SectionLabel>
          <h2 id="about-values-title">The qualities we want learning to leave behind.</h2>
          <p>
            Five pairings describe the kind of growth SNBP values: ambitious, thoughtful
            and grounded in how we treat other people.
          </p>
        </div>
        <ol className="about-values-list">
          {principles.map((principle, index) => (
            <li key={principle.pair}>
              <span className="about-value-index">0{index + 1}</span>
              <h3>{principle.pair}</h3>
              <p>{principle.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-education" aria-labelledby="about-education-title">
        <div className="about-education-copy">
          <SectionLabel>How we think about education</SectionLabel>
          <h2 id="about-education-title">Learn deeply. Look outward. Keep asking.</h2>
          <p>
            A degree can mark a milestone; learning continues beyond it. We bring
            academic foundations into conversation with practice, and make space for
            curiosity, reflection and responsible leadership.
          </p>
          <ul className="about-study-threads">
            <li><span>01</span><p><strong>Build the foundation</strong> — develop knowledge across your chosen field.</p></li>
            <li><span>02</span><p><strong>Connect ideas to practice</strong> — consider how learning meets real questions and contexts.</p></li>
            <li><span>03</span><p><strong>Grow with others</strong> — bring empathy, integrity and curiosity to the work ahead.</p></li>
          </ul>
          <Link to="/school-of-management" className="about-inline-link">
            Explore academic programmes <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="about-spaces">
          <figure className="about-space-image">
            {spaces.map((space, index) => (
              <img
                key={space.src}
                src={space.src}
                alt={activeSpace === index ? space.alt : ""}
                aria-hidden={activeSpace !== index}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className={activeSpace === index ? "is-active" : ""}
              />
            ))}
            <figcaption>
              <span>{currentSpace.label}</span>
              <span>{String(activeSpace + 1).padStart(2, "0")} / {String(spaces.length).padStart(2, "0")}</span>
            </figcaption>
          </figure>
          <div className="about-space-controls" aria-label="Campus spaces">
            <div className="about-space-dots">
              {spaces.map((space, index) => (
                <button
                  key={space.src}
                  type="button"
                  aria-label={`Show ${space.label.toLowerCase()}`}
                  aria-pressed={activeSpace === index}
                  onClick={() => setActiveSpace(index)}
                  className={activeSpace === index ? "is-active" : ""}
                />
              ))}
            </div>
            <div className="about-space-arrows">
              <button type="button" aria-label="Previous campus image" onClick={showPreviousSpace}>←</button>
              <button type="button" aria-label="Next campus image" onClick={showNextSpace}>→</button>
            </div>
          </div>
        </div>
      </section>

      <section className="about-closing">
        <div>
          <SectionLabel light>Keep the story moving</SectionLabel>
          <h2>Your next question has a place here.</h2>
          <p>
            Explore what you could study, learn more about SNBP’s journey or speak with
            the admissions team about your next step.
          </p>
        </div>
        <div className="about-closing-actions">
          <Link to="/admissions">Explore admissions <ArrowUpRight size={17} aria-hidden="true" /></Link>
          <Link to="/contact-us">Talk with SNBP <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>
    </div>
  );
}
