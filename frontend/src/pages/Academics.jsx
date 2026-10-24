import { useEffect, useState } from "react";
import SectionHeading from "../components/common/SectionHeading.jsx";
import ProgramCard from "../components/ProgramCard.jsx";
import { getPrograms } from "../services/api.js";

const sample = [
  {category:"Technology",title:"Engineering & Technology",description:"Build practical skills and explore technologies shaping tomorrow.",image:"https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80"},
  {category:"Business",title:"Management & Commerce",description:"Develop strategic thinking, communication and leadership skills.",image:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"},
  {category:"Science",title:"Science & Innovation",description:"Investigate ideas through scientific thinking and experimentation.",image:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80"}
];

export default function Academics() {
  const [programs,setPrograms] = useState(sample);
  useEffect(()=>{getPrograms().then(({data})=>{if(data?.length)setPrograms(data)}).catch(()=>{});},[]);
  return <><section className="bg-navy py-20 text-white"><div className="container-width"><div className="eyebrow !text-gold">Academics</div><h1 className="mt-4 max-w-3xl text-4xl font-black sm:text-6xl">Find your curiosity. Build your future.</h1><p className="mt-5 max-w-2xl leading-8 text-white/70">Explore areas of study and begin building a foundation for the work you want to do.</p></div></section><section className="section-pad"><div className="container-width"><SectionHeading eyebrow="Study areas" title="Explore our academic pathways" description="Sample program categories are shown below. Replace them with the university's verified program list."/><div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{programs.map((p,i)=><ProgramCard key={p.title || i} program={p}/>)}</div></div></section></>;
}
