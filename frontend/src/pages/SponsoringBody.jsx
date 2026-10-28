import { asset, leaderBhosale, leaderVrushali } from "../constants/assets.js";
import societyEmblem from "../assets/subhadra-society-seal.png";

const sponsoringHero = asset("/assets/snbp%207-BSul3bWU.webp");

const leaders = [
  {
    name: "Dr. Vrishali Dasharath Bhosale",
    role: "President",
    bio: "Dr. Vrishali Dasharath Bhosale serves as the President of Subhadra Educational Society, providing visionary leadership focused on student well-being, academic quality, and institutional development. A distinguished medical professional and education leader, she has played a pivotal role in strengthening academic excellence while encouraging sports, performing arts, and holistic student development. Her leadership reflects a strong commitment to creating an inclusive and future-oriented educational environment.",
    image: leaderVrushali,
    theme: "cream",
  },
  {
    name: "Dr. Dasharath Kallappa Bhosale",
    role: "Chairman",
    bio: "Dr. Dasharath Kallappa Bhosale is the visionary Chairman of SNBP Group of Institutions and the guiding force behind Subhadra Educational Society. With nearly four decades of experience in education, he has been instrumental in building a progressive educational ecosystem that spans schools, higher education institutions, and professional programs. Renowned for his strategic leadership and commitment to academic excellence, he has consistently promoted innovation, institutional growth, and quality education while nurturing generations of learners.",
    image: leaderBhosale,
    imagePosition: "72% center",
    theme: "purple",
  },
  {
    name: "Ms. Devayani Dasharath Bhosale",
    role: "Trustee",
    bio: "Ms. Devayani Dasharath Bhosale is a dynamic education leader dedicated to nurturing leadership, innovation, and institutional excellence. Her collaborative leadership style empowers educators and students alike, fostering creativity, responsibility, and ethical governance. Under her guidance, the institution has introduced transformative leadership initiatives and achieved significant national recognition, reflecting her commitment to developing socially responsible future leaders.",
    image: asset("/assets/Devyani-0tDKkNLr.png"),
    theme: "cream",
  },
  {
    name: "Dr. Adv. Rutuja Dasharath Bhosale",
    role: "Director & Trustee",
    bio: "Dr. Adv. Rutuja Dasharath Bhosale is an accomplished academic leader with expertise in educational administration, curriculum innovation, and institutional planning. Combining a strong legal and academic background with a passion for quality education, she actively promotes interdisciplinary learning, faculty development, and academic excellence. She is committed to fostering an inclusive educational culture that prepares students for the evolving global landscape.",
    image: asset("/assets/Rutuja-DDH-c-SD.png"),
    theme: "purple",
  },
  {
    name: "Dr. Ashvin Bhalerao",
    role: "Trustee",
    bio: "Dr. Ashvin Bhalerao is an experienced healthcare professional and Trustee of Subhadra Educational Society. Bringing extensive expertise in medicine and hospital administration, he contributes valuable insights into institutional governance, healthcare education, and student welfare. His commitment to excellence, compassion, and professional ethics strengthens the Society's multidisciplinary approach to education.",
    image: asset("/assets/DR.%20Ashvin%20Bhalerao.jpg-BcuP-KyY.png"),
    imageFit: "contain",
    imagePosition: "center center",
    theme: "cream",
  },
  {
    name: "Dr. Prakash Dattatray Gurav",
    role: "Trustee",
    bio: "Dr. Prakash Dattatray Gurav is a distinguished surgeon, academician, and healthcare administrator with over three decades of professional experience. His expertise in medical education, research, and institutional leadership contributes significantly to the Society's vision of promoting excellence in higher education. His commitment to mentoring future professionals and advancing academic standards reinforces the Society's mission of quality education.",
    image: asset("/assets/Dr.%20Prakash-CRzr30re.png"),
    imageFit: "contain",
    imagePosition: "center center",
    theme: "purple",
  },
  {
    name: "Dr. Ranjana Prakash Gurav",
    role: "Trustee",
    bio: "Dr. Ranjana Prakash Gurav is an experienced medical professional whose dedication to community healthcare and public service complements the educational mission of Subhadra Educational Society. Her expertise in healthcare delivery, leadership, and community engagement supports the Society's commitment to nurturing socially responsible institutions that positively impact society.",
    image: asset("/assets/Dr.%20Ranjana-B1Mu-K6t.png"),
    imageFit: "contain",
    imagePosition: "center center",
    theme: "cream",
  },
];

function LeaderCard({ leader }) {
  const isPurple = leader.theme === "purple";

  return (
    <article
      className={`relative overflow-hidden rounded-[24px] p-5 md:rounded-[30px] md:p-6 lg:p-7 ${
        isPurple ? "bg-[#3b2160]" : "bg-[#f1e7d7]"
      }`}
    >
      <img
        src={societyEmblem}
        alt=""
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-0 right-0 h-[280px] w-[280px] translate-x-[38%] translate-y-[38%] object-contain blur-[3px] md:h-[360px] md:w-[360px] md:blur-0 ${
          isPurple ? "opacity-[0.18] md:opacity-[0.28]" : "opacity-[0.24] md:opacity-[0.38]"
        }`}
      />
      <div className="relative z-10 flex flex-col gap-5 md:flex-row md:gap-8">
        <div
          className={`w-full shrink-0 overflow-hidden rounded-bl-[16px] rounded-tl-[16px] rounded-tr-[16px] md:w-[350px] lg:w-[390px] ${
            leader.imageFit === "contain"
              ? isPurple
                ? "bg-white/10"
                : "bg-[#e6dcc8]"
              : ""
          }`}
        >
          <img
            src={leader.image}
            alt={leader.name}
            loading="lazy"
            decoding="async"
            className={`h-[260px] w-full md:h-[285px] lg:h-[310px] ${
              leader.imageFit === "contain" ? "object-contain" : "object-cover"
            }`}
            style={{ objectPosition: leader.imagePosition ?? "center" }}
          />
        </div>
        <div className="flex min-w-0 flex-col justify-center">
          <p
            className={`order-2 text-[13.5px] font-normal leading-[1.6] md:order-1 md:text-[14px] lg:text-[15px] ${
              isPurple ? "text-white/85" : "text-[#4a4a4a]"
            }`}
          >
            {leader.bio}
          </p>
          <div className={`order-1 mb-5 md:order-2 md:mb-0 md:mt-7`}>
            <h2
              className={`font-heading text-[1.3rem] font-medium uppercase tracking-[0.02em] md:text-[1.5rem] ${
                isPurple ? "text-[#e9dcb8]" : "text-[#6a4a94]"
              }`}
            >
              {leader.name}
            </h2>
            <div
              aria-hidden="true"
              className={`mt-2 h-px w-[240px] max-w-full md:w-[280px] ${
                isPurple ? "bg-[#e9dcb8]/60" : "bg-[#b79b62]"
              }`}
            />
            <p className={`mt-3 text-[14px] font-normal md:text-[16px] ${isPurple ? "text-white/90" : "text-[#3a3a3a]"}`}>
              {leader.role}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function SponsoringBody() {
  return (
    <div>
      <section className="relative overflow-hidden bg-white">
        <img
          src={sponsoringHero}
          alt="SNBP University campus illustration"
          loading="eager"
          decoding="async"
          className="pointer-events-none absolute right-[2%] top-1/2 hidden h-[108%] w-[58%] -translate-y-1/2 object-contain object-right brightness-[1.05] sm:block md:right-[4%] md:w-[54%] lg:right-[6%] lg:w-[50%]"
        />
        <div className="relative z-10 mx-auto flex min-h-[380px] max-w-[1500px] items-center px-4 py-14 md:min-h-[460px] md:px-6 md:py-16 lg:min-h-[520px] lg:px-10 lg:py-20">
          <div className="max-w-[520px] md:max-w-[560px] lg:max-w-[600px]">
            <h1 className="font-heading text-[2.2rem] font-normal leading-[1.15] text-[#2e1a47] md:text-[2.75rem] lg:text-[3.25rem]">
              The Visionary Foundation
              <br />
              Behind Our Legacy
            </h1>
            <p className="mt-4 text-[16px] font-normal leading-[1.65] text-[#2f2f2f] md:mt-5 md:text-[17px] md:leading-[1.7] lg:text-[18px]">
              Backed by nearly three decades of educational leadership, our sponsoring trust
              continues to build future-ready learning environments that blend innovation, values,
              and real-world impact.
            </p>
          </div>
        </div>
        <img
          src={sponsoringHero}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          className="mx-auto mt-2 block w-[92%] max-w-[520px] object-contain brightness-[1.05] sm:hidden"
        />
      </section>

      <section
        id="sponsoring-body-leaders"
        className="bg-[#faf6ef] px-4 py-10 md:px-6 md:py-14 lg:px-10"
      >
        <div className="mx-auto flex max-w-[1320px] flex-col gap-7 md:gap-8">
          {leaders.map((leader) => (
            <LeaderCard key={leader.name} leader={leader} />
          ))}
        </div>
      </section>
    </div>
  );
}
