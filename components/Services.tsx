'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../content/data';
export default function Services(){
  const [active,setActive]=useState(0);
  const [bg,setBg]=useState('#FAF6EF');
  return <section id="services" className="relative py-24 md:py-32 transition-colors duration-700" style={{background:bg}}>
    <div className="max-w-[1350px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10">
      <div className="md:col-span-5">
        <div className="md:sticky md:top-28">
          <p className="text-[12px] tracking-[0.25em] font-semibold opacity-60">02 — SERVICES</p>
          <h2 className="font-display font-bold text-[11vw] md:text-[4.2vw] leading-[0.9] tracking-tightest mt-4">What can we do for your smile?</h2>
          <div className="mt-8 relative aspect-[4/5] rounded-[2rem] overflow-hidden hidden md:block bg-ink">
            <AnimatePresence mode="wait">{<motion.img key={active} src={services[active].img} alt={services[active].name} initial={{scale:1.15,opacity:0}} animate={{scale:1,opacity:1}} exit={{opacity:0}} transition={{duration:0.5}} className="absolute inset-0 w-full h-full object-cover" />}</AnimatePresence>
            <div className="absolute bottom-4 left-4 right-4 bg-cream/90 backdrop-blur rounded-2xl p-5"><p className="font-bold">{services[active].name}</p><p className="text-sm opacity-80">{services[active].desc}</p></div>
          </div>
          <a href="#book" className="mt-6 inline-flex items-center gap-2 bg-ink text-cream rounded-full px-7 py-3.5 font-semibold">Book this care <ArrowUpRight size={18}/></a>
        </div>
      </div>
      <div className="md:col-span-7">
        <ul className="divide-y-2 divide-ink/10 border-y-2 border-ink/10">
          {services.map((s,i)=>(
            <li key={s.id} onMouseEnter={()=>{setActive(i);setBg(s.color)}} onClick={()=>{setActive(i);setBg(s.color)}} className="group cursor-pointer py-5 md:py-7 relative">
              <div className="flex items-baseline gap-4">
                <span className="text-[13px] font-bold opacity-50">{s.tag}</span>
                <h3 className={`font-display font-bold tracking-tight leading-none transition-all duration-300 ${active===i?'text-[8.5vw] md:text-[3.4vw] translate-x-2':'text-[7vw] md:text-[2.6vw]'}`}>{s.name}</h3>
                <span className={`ml-auto w-11 h-11 shrink-0 grid place-items-center rounded-full border border-ink/20 transition-all ${active===i?'bg-ink text-lime rotate-45 scale-110':'group-hover:bg-ink group-hover:text-cream'}`}><ArrowUpRight/></span>
              </div>
              <AnimatePresence>{active===i&&(<motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden"><p className="pt-3 max-w-[52ch] text-[15px] md:text-[17px]">{s.desc}</p><img src={s.img} alt={s.name} className="md:hidden mt-4 rounded-2xl w-full aspect-[16/10] object-cover" loading="lazy"/></motion.div>)}</AnimatePresence>
            </li>))}
        </ul>
      </div>
    </div>
  </section>;
}
