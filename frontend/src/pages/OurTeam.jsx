import { asset, leaderBhosale, leaderVrushali } from "../constants/assets.js";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import societyEmblem from "../assets/subhadra-society-seal.png";

const teamHero = asset("/assets/About%20Us%20Hero1-dKP-roMH.webp");
const campusSketch = asset("/assets/bg-CZ_IxR8g.png");

const leadership = [
  {
    name: "DR. D.K. BHOSALE",
    title: "PRESIDENT, SNBP UNIVERSITY",
    image: leaderBhosale,
    imageOnRight: true,
    imagePosition: "72% center",
    messageLink: { label: "Chancellor's Message", href: "/chancellor-message" },
  },
  {
    name: "DR. VRISHALI BHOSALE",
    title: "TRUSTEE, SNBP UNIVERSITY",
    image: leaderVrushali,
    imageOnRight: false,
    imagePosition: "center top",
  },
  {
    name: "DR. ASHISH PANAT",
    title: "VICE CHANCELLOR, SNBP UNIVERSITY",
    image: asset("/assets/Ashish-MDymOEVi.webp"),
    imageOnRight: true,
    imagePosition: "center 20%",
    messageLink: { label: "Vice Chancellor's Message", href: "/vice-chancellor-message" },
  },
];

const officers = [
  {
    name: "Dr. Sankalp Dandawate",
    title: "Registrar (I/C)",
    image: asset("/assets/DR%20sankalp-DZZRK1dy.jpeg"),
  },
  {
    name: "Dr. Abhay Dashrath",
    title: "Incharge Controller of Examinations",
    image: asset("/assets/Abhay%20Dashrath-DyGOF1Tk.jpg"),
    imagePosition: "center 35%",
  },
  {
    name: "Simarkaur R. Ramsinghani",
    title: "Chief Finance & Accounts Officer",
    image: asset("/assets/Simarkaur%20R.%20Ramsinghani-CGQT4gOD.jpg"),
  },
];

/*
const deans = [
  {
    name: "Dr. Abhay Dashrath",
    title: "DEAN - School of Technology",
    image: asset("/assets/Abhay%20Dashrath-DyGOF1Tk.jpg"),
    imagePosition: "center 35%",
  },
];
*/

function SectionTitle({ children }) {
  return (
    <>
      <span aria-hidden="true" className="mx-auto mb-3 block h-3 w-3 rotate-45 bg-[#c9a84c]" />
      <h2 className="font-heading text-3xl font-semibold text-[#2e1a47] md:text-4xl">{children}</h2>
    </>
  );
}

function LeadershipCard({ member }) {
  return (
    <article>
      <div className="grid w-full min-w-0 gap-3 md:grid-cols-2 md:gap-4">
        <div
          className={`order-2 flex min-h-[190px] min-w-0 items-center justify-center overflow-hidden rounded-[36px] bg-[#F2F1E0] px-6 py-10 sm:min-h-[280px] sm:py-12 md:min-h-[380px] md:rounded-[48px] md:px-12 lg:min-h-[420px] lg:px-14 ${
            member.imageOnRight ? "md:order-1" : "md:order-2"
          }`}
        >
          <div className="text-center">
            <h2 className="font-heading text-[1.6rem] font-semibold uppercase leading-tight tracking-[0.02em] text-[#2e1a47] sm:text-[1.85rem] md:text-[2.15rem] lg:text-[2.4rem]">
              {member.name}
            </h2>
            <p className="mt-3 text-[14px] font-medium uppercase tracking-[0.12em] text-[#4a4a4a] sm:text-[15px] md:mt-4 md:text-base lg:text-lg">
              {member.title}
            </p>
            {member.messageLink ? (
              <Link
                to={member.messageLink.href}
                className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-[#2e1a47] transition hover:text-[#802030] md:mt-6 md:text-[17px] lg:text-lg"
              >
                {member.messageLink.label}
                <span aria-hidden="true">→</span>
              </Link>
            ) : null}
          </div>
        </div>
        <div className={`relative order-1 h-full min-w-0 ${member.imageOnRight ? "md:order-2" : "md:order-1"}`}>
          <div className="relative aspect-[1.5/1] w-full min-w-0 overflow-hidden rounded-[36px] border-2 border-[#2e1a47] bg-[#F2F1E0] md:aspect-auto md:h-full md:min-h-[380px] md:rounded-[48px] lg:min-h-[420px]">
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: member.imagePosition }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function DirectoryCard({ member }) {
  return (
    <article className="flex items-center gap-5 md:gap-6">
      <div className="flex h-[96px] w-[96px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#2e1a47]/10 text-[#8b7aa3] md:h-[112px] md:w-[112px]">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full bg-[#f1e7d7] object-contain"
            style={{ objectPosition: member.imagePosition ?? "center top" }}
          />
        ) : null}
      </div>
      <div className="min-w-0 text-left">
        <h3 className="text-[1.2rem] font-semibold leading-snug text-[#2e1a47] md:text-[1.35rem]">
          {member.name}
        </h3>
        <p className="mt-1.5 whitespace-pre-line text-[14px] font-normal leading-snug text-[#6b5b80] md:text-base">
          {member.title}
        </p>
      </div>
    </article>
  );
}

function DirectorySection({ title, members }) {
  return (
    <section>
      <div className="text-center">
        <SectionTitle>{title}</SectionTitle>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 md:mt-10 md:gap-x-12 md:gap-y-10 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-12">
        {members.map((member) => (
          <DirectoryCard key={`${member.name}-${member.title}`} member={member} />
        ))}
      </div>
    </section>
  );
}

export default function OurTeam() {
  return (
    <div>
      <section className="ai-tadka relative overflow-hidden bg-white">
        <img
          src={teamHero}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          className="pointer-events-none absolute right-[8%] top-0 hidden h-[120%] w-[90%] -translate-y-[14%] scale-[1.22] object-contain object-right md:block md:right-[10%] md:w-[85%] md:-translate-y-[16%] md:scale-[1.26] lg:right-[12%] lg:w-[80%] lg:-translate-y-[18%] lg:scale-[1.3]"
        />
        <div className="relative z-10 mx-auto flex max-w-[1500px] items-center px-4 py-10 md:min-h-[440px] md:px-6 md:py-16 lg:min-h-[500px] lg:px-10 lg:py-20">
          <div className="max-w-[520px] md:max-w-[560px] lg:max-w-[600px]">
            <h1 className="font-heading text-[2.2rem] font-semibold leading-[1.15] text-[#2e1a47] md:text-[2.75rem] lg:text-[3.25rem]">
              Where Heritage Wisdom Meets Future-Ready Innovation.
            </h1>
            <p className="mt-4 text-[15px] font-light leading-[1.7] text-[#3a3a3a] md:mt-5 md:text-base md:leading-[1.75]">
              Founded on a commitment to holistic development, SNBP University bridges academic
              rigor with real-world impact—nurturing intellect, integrity, and lifelong purpose.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden bg-white md:hidden">
          <img
            src={campusSketch}
            alt="Sketch of SNBP University"
            loading="eager"
            decoding="async"
            className="mx-auto w-full object-contain"
          />
        </div>
      </section>

      <section id="our-team" className="ai-tadka relative overflow-hidden bg-[#faf8f5] py-14 md:py-20">
        <img
          src={societyEmblem}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 -top-28 h-[520px] w-[520px] object-contain opacity-[0.12] md:-right-48 md:-top-36 md:h-[640px] md:w-[640px]"
        />
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-6 lg:px-10">
          <div className="mb-10 text-center md:mb-14">
            <SectionTitle>Our Team</SectionTitle>
          </div>
          <div className="space-y-8 md:space-y-10">
            {leadership.map((member) => (
              <LeadershipCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="ai-tadka relative overflow-hidden bg-white py-14 md:py-20">
        <img
          src={societyEmblem}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -top-36 h-[520px] w-[520px] object-contain opacity-[0.08] md:h-[640px] md:w-[640px]"
        />
        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col gap-14 px-4 md:gap-16 md:px-6 lg:px-10">
          <DirectorySection title="Officers of the University" members={officers} />
          {/* <DirectorySection title="Our Deans" members={deans} /> */}
        </div>
      </section>

      <section className="ai-tadka bg-[#f0e8dc] px-4 py-14 md:px-6 md:py-20">
        <div className="ai-tadka mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-2xl bg-[#2e1a47] px-6 py-9 text-center text-white md:flex-row md:px-10 md:text-left">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-[#e6c96f] md:text-3xl">
              Continue your journey with SNBP
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
              Speak with our admissions team to understand the programme, curriculum and admission
              pathway.
            </p>
          </div>
          <Link to="/admissions" className="btn-primary shrink-0">
            Enquire Now <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
