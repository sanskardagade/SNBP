import { ArrowRight, Compass, HeartHandshake, Lightbulb, Target } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/common/SectionHeading.jsx";

export default function About() {
  return <>
    <section className="bg-navy py-20 text-white sm:py-28"><div className="container-width"><div className="eyebrow !text-gold">About the university</div><h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">A place to discover who you can become.</h1><p className="mt-6 max-w-2xl leading-8 text-white/70">We believe education should expand perspectives, build confidence and equip learners to make a meaningful contribution.</p></div></section>
    <section className="section-pad"><div className="container-width grid items-center gap-12 lg:grid-cols-2"><img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85" alt="University building" className="h-[420px] w-full rounded-xl object-cover"/><div><SectionHeading eyebrow="Our approach" title="Learning that connects knowledge to possibility" description="Our university experience is designed to help students connect academic foundations with practical thinking, teamwork and lifelong curiosity."/><div className="mt-8 grid gap-5 sm:grid-cols-2">{[[Target,"Purpose-led learning"],[Compass,"Explore new directions"],[Lightbulb,"Curiosity and innovation"],[HeartHandshake,"Community and belonging"]].map(([Icon,t])=><div key={t} className="rounded-lg border border-slate-100 p-5"><Icon className="text-bluebrand" size={25}/><h3 className="mt-3 font-extrabold text-navy">{t}</h3></div>)}</div></div></div></section>
    <section className="bg-mist py-16"><div className="container-width flex flex-col items-start justify-between gap-5 md:flex-row md:items-center"><div><h2 className="text-3xl font-black text-navy">Ready to begin your journey?</h2><p className="mt-2 text-slate-600">Explore programs and find the next step that feels right for you.</p></div><Link to="/admissions" className="btn-primary">Explore admissions <ArrowRight size={17}/></Link></div></section>
  </>;
}
