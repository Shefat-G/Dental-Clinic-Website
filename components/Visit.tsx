'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { steps } from '../content/data';
export default function Visit(){
  const ref=useRef<HTMLDivElement>(null);
  const {scrollYProgress}=useScroll({target:ref});
  const x=useTransform(scrollYProgress,[0,1],['5%','-72%']);
  return <section ref={ref} className="relative bg-ink text-cream" style={{height:'380vh'}}>
    <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
      <div className="px-5 md:px-10 max-w-[1350px] mx-auto w-full"><p className="tracking-[0.25em] text-[12px] text-lime">PATIENT EXPERIENCE</p><h2 className="font-display font-bold text-[11vw] md:text-[4.5vw] leading-none tracking-tightest">What your visit<br/>looks like</h2></div>
      <motion.div style={{x}} className="flex gap-5 mt-10 pl-5 md:pl-10 w-max">
        {steps.map(s=>(
          <div key={s.n} className="w-[82vw] md:w-[34vw] shrink-0 rounded-[2rem] p-8 min-h-[380px] flex flex-col justify-between text-ink" style={{background:s.color}}>
            <div className="font-display font-bold text-[22vw] md:text-[7vw] leading-none opacity-90">{s.n}</div>
            <div><h3 className="font-display font-bold text-3xl md:text-4xl">{s.title}</h3><p className="mt-2 text-[16px]">{s.desc}</p></div>
          </div>))}
        <div className="w-[82vw] md:w-[30vw] shrink-0 rounded-[2rem] bg-cream text-ink p-8 grid place-items-center text-center"><div><p className="font-display font-bold text-4xl">Leave smiling.</p><a href="#book" className="mt-4 inline-block bg-ink text-cream rounded-full px-7 py-3 font-semibold">Book now</a></div></div>
      </motion.div>
      <p className="text-center mt-6 text-[12px] tracking-[0.3em] opacity-60">SCROLL — WE MOVE SIDEWAYS ↓</p>
    </div>
  </section>;
}
