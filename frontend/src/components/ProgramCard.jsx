import { ArrowUpRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProgramCard({ program }) {
  return <article className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
    <div className="relative h-48 overflow-hidden bg-slate-200">
      <img src={program.image} alt={program.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy"/>
      <div className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-lg bg-gold text-navy"><BookOpen size={22}/></div>
    </div>
    <div className="p-6"><div className="text-xs font-extrabold uppercase tracking-[.12em] text-bluebrand">{program.category}</div><h3 className="mt-3 text-xl font-extrabold text-navy">{program.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{program.description}</p><Link to="/academics" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-bluebrand">Explore program <ArrowUpRight size={16}/></Link></div>
  </article>;
}
