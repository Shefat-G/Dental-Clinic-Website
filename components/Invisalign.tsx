'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
export default function Invisalign(){
  const ref=useRef<HTMLDivElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:['start end','end start']});
  const r=useTransform(scrollYProgress,[0,1],[ -8,8]);
  const y=useTransform(scrollYProgress,[0,1],[60,-60]);
  return <section id="invisalign" ref={ref} className="bg-lav text-ink py-24 md:py-32 px-5 md:px-10 overflow-hidden relative">
    <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-[12px] tracking-[0.25em] font-semibold">INVISALIGN® — CLEAR ALIGNERS</p>
        <h2 className="font-display font-bold text-[12vw] md:text-[5vw] leading-[0.9] tracking-tightest mt-4">Straight teeth.<br/><span className="italic font-light">Without making</span><br/>it obvious.</h2>
        <ul className="mt-8 space-y-3">{['Digital smile scan','Personalized treatment plan','Clear aligners','Progress check-ins'].map((t,i)=>(<motion.li key={t} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} transition={{delay:i*0.08}} className="flex items-center gap-3 bg-cream/70 rounded-full px-5 py-3 font-semibold w-fit"> <span className="w-7 h-7 rounded-full bg-ink text-lime grid place-items-center text-[13px] font-bold">{i+1}</span>{t}</motion.li>))}</ul>
        <a href="#book" className="mt-8 inline-flex items-center gap-2 bg-ink text-cream rounded-full px-8 py-4 font-semibold">Explore Invisalign <ArrowUpRight size={18}/></a>
      </div>
      <motion.div style={{rotate:r,y}} className="relative mx-auto w-full max-w-[480px] aspect-square">
        <div className="absolute inset-0 bg-cream rounded-[3rem] rotate-3 shadow-2xl" />
        <motion.svg viewBox="0 0 400 260" className="absolute inset-0 m-auto w-[86%]" animate={{y:[0,-10,0]}} transition={{duration:4,repeat:Infinity}}>
          <path d="M40 160 Q200 20 360 160 L330 190 Q200 80 70 190 Z" fill="rgba(255,255,255,0.65)" stroke="#16150F" strokeWidth="5"/>
          <path d="M70 165 Q200 55 330 165" fill="none" stroke="#16150F" strokeWidth="2" strokeDasharray="6 8" opacity="0.5"/>
        </motion.svg>
        <span className="absolute top-8 -left-2 bg-lime rounded-full px-4 py-2 text-[13px] font-bold rotate-[-8deg] shadow">discreet ✦</span>
        <span className="absolute bottom-10 -right-2 bg-ink text-cream rounded-full px-4 py-2 text-[13px] font-bold rotate-[6deg] shadow">removable ✦</span>
        <span className="absolute bottom-24 left-6 bg-cream border border-ink/15 rounded-full px-4 py-2 text-[13px] font-bold -rotate-3 shadow">no braces drama</span>
      </motion.div>
    </div>
  </section>;
}
