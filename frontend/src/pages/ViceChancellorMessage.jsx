import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { asset } from "../constants/assets.js";

const viceChancellorBanner = asset("/assets/VC%20banner%20copy%20-Db30UpPn.webp");
const viceChancellorPortrait = asset("/assets/Ashish-MDymOEVi.webp");

export default function ViceChancellorMessage() {
  return (
    <div className="overflow-hidden bg-[#faf8f5]">
      <section className="relative overflow-hidden bg-[#f2f1e0]">
        <img
          src={viceChancellorBanner}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover object-[center_right] md:block"
          fetchPriority="high"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-[#f2f1e0] via-[#f2f1e0]/90 to-[#f2f1e0]/10 md:block" />
        <div className="relative z-10 mx-auto max-w-[1500px] md:flex md:min-h-[500px] md:items-center lg:min-h-[560px]">
          <div className="w-full md:hidden">
            <img
              src={viceChancellorBanner}
              alt="Dr. Ashish Ramchandra Panat, Vice Chancellor, SNBP University"
              className="aspect-[4/5] w-full object-cover object-[72%_12%]"
              fetchPriority="high"
            />
          </div>
          <div className="max-w-[680px] px-5 py-10 sm:px-8 md:px-10 md:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#92752e]">
              Vice Chancellor&apos;s Message
            </p>
            <h1 className="mt-3 font-heading text-[2.25rem] font-semibold leading-[1.1] text-[#2e1a47] sm:text-5xl lg:text-[3.25rem]">
              Dr. Ashish Ramchandra Panat
            </h1>
            <p className="mt-4 max-w-md text-sm font-medium uppercase leading-7 tracking-[0.12em] text-[#4a4a4a] sm:text-base">
              Vice Chancellor, SNBP University
            </p>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-14 md:py-20">
        <img
          src={asset("/assets/Layer%204-clean-BIEAtz-e.webp")}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute -left-48 top-0 -z-10 h-[520px] w-[520px] object-contain opacity-[0.08] md:h-[680px] md:w-[680px]"
        />
        <div className="mx-auto grid max-w-[1250px] items-start gap-10 px-5 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12 lg:px-10">
          <div>
            <h2 className="font-heading text-3xl font-semibold leading-tight text-[#2e1a47] sm:text-4xl">
              Message From
              <br />
              The Vice Chancellor
            </h2>
            <div className="mt-8 aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#2e1a47] md:mt-10">
              <img
                src={viceChancellorPortrait}
                alt="Dr. Ashish Ramchandra Panat"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-[center_20%]"
              />
            </div>
          </div>

          <div className="space-y-5 text-[15px] leading-8 text-[#4a4a4a] md:pt-[120px] md:text-base">
            <p>
              Welcome to SNBP University, where education is a journey of discovery, innovation,
              and positive change. We are committed to helping every learner develop the skills and
              perspective to shape a changing world.
            </p>
            <p>
              Inspired by the National Education Policy 2020, our academic approach connects
              multidisciplinary study with practical outcomes. We aim to nurture professional
              knowledge alongside ethical values, leadership, and the habit of lifelong learning.
            </p>
            <p>
              Students bring different strengths and ambitions. Through academic guidance and
              individual support, we work to understand each learner&apos;s needs and help them
              explore pathways in careers, higher education, research, and entrepreneurship.
            </p>
            <p>
              Technology-enabled teaching, projects, industry exposure, and mentoring make learning
              active and relevant. We also encourage research and innovation that can address real
              challenges and turn promising ideas into meaningful solutions.
            </p>
            <p>
              As India looks ahead to Viksit Bharat 2047, SNBP University will continue preparing
              globally aware professionals and compassionate, responsible leaders. I invite you to
              join our community and make the most of your academic journey.
            </p>

            <div className="border-l-2 border-[#c9a84c] pl-5 pt-2">
              <p className="font-heading text-2xl font-semibold text-[#2e1a47]">
                Dr. Ashish Ramchandra Panat
              </p>
              <p className="mt-1 text-sm font-medium text-[#6b5b80]">
                Vice Chancellor, SNBP University
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f0e8dc] px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-2xl bg-[#2e1a47] px-6 py-8 text-center text-white md:flex-row md:px-10 md:text-left">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-[#e6c96f] md:text-3xl">
              Your journey starts here
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
              Explore the programmes and opportunities waiting for you at SNBP University.
            </p>
          </div>
          <Link to="/admissions" className="btn-primary shrink-0">
            Explore Admissions <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
