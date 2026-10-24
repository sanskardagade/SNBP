import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading.jsx";
import { sendAdmissionEnquiry } from "../services/api.js";

export default function Admissions() {
  const [form,setForm] = useState({name:"",email:"",phone:"",program:"",message:""});
  const [status,setStatus] = useState({loading:false,error:"",success:""});
  const update = e => setForm({...form,[e.target.name]:e.target.value});
  async function submit(e) {
    e.preventDefault(); setStatus({loading:true,error:"",success:""});
    try { const {data} = await sendAdmissionEnquiry(form); setStatus({loading:false,error:"",success:data.message || "Thank you. Your enquiry has been received."}); setForm({name:"",email:"",phone:"",program:"",message:""}); }
    catch (err) { setStatus({loading:false,error:err.response?.data?.message || "Could not send the enquiry. Please make sure the backend is running.",success:""}); }
  }
  return <><section className="bg-navy py-20 text-white"><div className="container-width"><div className="eyebrow !text-gold">Admissions</div><h1 className="mt-4 max-w-3xl text-4xl font-black sm:text-6xl">Your next chapter starts here.</h1><p className="mt-5 max-w-2xl leading-8 text-white/70">Tell us a little about yourself and the program you're interested in. Our demo form sends your enquiry to the Express API.</p></div></section>
    <section className="section-pad bg-mist"><div className="container-width grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><SectionHeading eyebrow="Take the first step" title="Let's help you find your way" description="Share your details and areas of interest. For production, replace this demo form with the university's approved admissions workflow."/><div className="mt-8 space-y-4">{["Explore programs that fit your goals","Ask questions about the application process","Get guidance on your next steps"].map(t=><div key={t} className="flex gap-3 text-sm font-semibold text-slate-700"><CheckCircle2 size={19} className="shrink-0 text-bluebrand"/>{t}</div>)}</div></div>
      <form onSubmit={submit} className="rounded-2xl bg-white p-6 shadow-soft sm:p-9"><h2 className="text-2xl font-black text-navy">Admission enquiry</h2><p className="mt-2 text-sm text-slate-500">Fields marked * are required.</p>
        {status.success && <div role="status" className="mt-5 rounded-lg bg-green-50 p-3 text-sm text-green-800">{status.success}</div>}{status.error && <div role="alert" className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-700">{status.error}</div>}
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-bold text-slate-700">Full name *<input required name="name" value={form.name} onChange={update} className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-bluebrand" placeholder="Your full name"/></label>
          <label className="text-sm font-bold text-slate-700">Email address *<input required type="email" name="email" value={form.email} onChange={update} className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-bluebrand" placeholder="you@example.com"/></label>
          <label className="text-sm font-bold text-slate-700">Phone number<input name="phone" value={form.phone} onChange={update} className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-bluebrand" placeholder="Phone number"/></label>
          <label className="text-sm font-bold text-slate-700">Interested program<select name="program" value={form.program} onChange={update} className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-normal outline-none focus:border-bluebrand"><option value="">Select a program</option><option>B.Tech Computer Science Engineering</option><option>B.Tech CSE AI & ML</option><option>BCA</option><option>B.Com</option><option>MCA</option><option>Other / Not sure yet</option></select></label>
          <label className="text-sm font-bold text-slate-700 sm:col-span-2">Message<textarea name="message" value={form.message} onChange={update} rows="4" className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-bluebrand" placeholder="What would you like to know?"/></label>
        </div><button disabled={status.loading} className="btn-primary mt-6 disabled:cursor-wait disabled:opacity-60">{status.loading ? "Sending..." : "Send enquiry"} <Send size={16}/></button>
      </form>
    </div></section></>;
}
