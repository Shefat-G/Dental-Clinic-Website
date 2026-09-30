'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { bookingServices } from '../content/data';
import { site } from '../content/site';
export default function Booking(){
  const [form,setForm]=useState({first:'',last:'',email:'',phone:'',service:'New Patient Exam',day:'Weekday',message:''});
  const submit=(e:React.FormEvent)=>{
    e.preventDefault();
    const subject=encodeURIComponent('Appointment Enquiry — Pearl Dental Studio');
    const body=encodeURIComponent(`Hi Pearl!\n\nName: ${form.first} ${form.last}\nEmail: ${form.email}\nPhone: ${form.phone}\nPreferred service: ${form.service}\nPreferred day: ${form.day}\nMessage: ${form.message}\n\n— Sent from pearldentalnyc.com enquiry form`);
    window.location.href=`mailto:${site.email}?subject=${subject}&body=${body}`;
  };
  const inp='w-full bg-transparent border-b-2 border-cream/25 focus:border-lime outline-none py-3 placeholder:text-cream/40 text-cream';
  return <section id="book" className="relative bg-ink text-cream py-24 md:py-32 px-5 md:px-10 overflow-hidden">
    <div className="max-w-[1300px] mx-auto relative z-10">
      <motion.h2 initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="font-display font-bold leading-[0.9] tracking-tightest text-[11vw] md:text-[5.5vw]">Your next favorite<br/>dentist is <span className="text-lime italic font-light">accepting</span><br/>new patients.</motion.h2>
      <div className="grid md:grid-cols-2 gap-10 mt-12">
        <div>
          <a href="#book-form" className="inline-flex items-center gap-3 bg-lime text-ink rounded-full px-9 py-5 font-bold text-lg hover:scale-[1.03] transition-transform">Book an Appointment <ArrowUpRight/></a>
          <a href={site.phoneHref} className="ml-3 inline-flex items-center gap-2 rounded-full px-7 py-5 border border-cream/25 font-semibold">Call {site.phoneShort}</a>
          <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
            <div className="bg-cream/10 rounded-2xl p-5"><p className="font-bold text-lime">No judgment</p><p className="opacity-80 mt-1">Move forward, not lectures.</p></div>
            <div className="bg-cream/10 rounded-2xl p-5"><p className="font-bold text-lime">Transparent</p><p className="opacity-80 mt-1">Clear options before treatment.</p></div>
          </div>
          <div className="mt-8 bg-mint text-ink rounded-3xl p-7"><h3 className="font-display font-bold text-2xl">Let&apos;s talk about the boring stuff.</h3><p className="mt-2 text-[15px]">We work with many PPO dental insurance plans and can help you understand your benefits before treatment.</p><p className="mt-2 text-[15px] font-semibold">No insurance? No problem. Ask us about self-pay options and flexible payment plans.</p><a className="mt-4 inline-block underline font-semibold" href={`mailto:${site.email}?subject=${encodeURIComponent('Insurance question')}`}>Ask About Insurance ↗</a></div>
        </div>
        <form id="book-form" onSubmit={submit} className="bg-white/[0.06] backdrop-blur rounded-[2rem] p-7 md:p-9 border border-cream/15">
          <h3 className="font-display font-bold text-2xl">Appointment enquiry</h3>
          <p className="text-[13px] opacity-70 mt-1">Enquiry only — we will follow up to confirm availability. No account, no spam.</p>
          <div className="grid grid-cols-2 gap-5 mt-6">
            <label className="text-[12px] tracking-widest font-semibold">FIRST NAME<input required value={form.first} onChange={e=>setForm({...form,first:e.target.value})} placeholder="Ava" className={inp}/></label>
            <label className="text-[12px] tracking-widest font-semibold">LAST NAME<input required value={form.last} onChange={e=>setForm({...form,last:e.target.value})} placeholder="Stone" className={inp}/></label>
            <label className="text-[12px] tracking-widest font-semibold">EMAIL<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@email.com" className={inp}/></label>
            <label className="text-[12px] tracking-widest font-semibold">PHONE<input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="(212) 555-0000" className={inp}/></label>
            <label className="text-[12px] tracking-widest font-semibold">SERVICE<select value={form.service} onChange={e=>setForm({...form,service:e.target.value})} className={inp+' bg-ink'}>{bookingServices.map(s=>(<option key={s}>{s}</option>))}</select></label>
            <label className="text-[12px] tracking-widest font-semibold">PREFERRED DAY<select value={form.day} onChange={e=>setForm({...form,day:e.target.value})} className={inp+' bg-ink'}>{['Weekday','Saturday','Morning','Evening'].map(s=>(<option key={s}>{s}</option>))}</select></label>
          </div>
          <label className="block mt-5 text-[12px] tracking-widest font-semibold">MESSAGE<textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={3} placeholder="Tell us about your smile goals..." className={inp}/></label>
          <button className="mt-7 w-full bg-lime text-ink rounded-full py-4 font-bold text-[16px] hover:bg-cream transition-colors">Send enquiry via email →</button>
          <p className="text-[12px] opacity-60 mt-3 text-center">Opens your email app addressed to {site.email} with your details pre-filled.</p>
        </form>
      </div>
    </div>
    <div aria-hidden className="absolute -top-20 -left-20 w-[420px] h-[420px] bg-lime/20 blur-[120px] rounded-full" />
    <div aria-hidden className="absolute bottom-0 right-0 w-[520px] h-[420px] bg-lav/30 blur-[130px] rounded-full" />
  </section>;
}
