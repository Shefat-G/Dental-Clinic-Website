'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
export default function Intro(){
  const ref=useRef<HTMLDivElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:['start end','end start']});
  const y1=useTransform(scrollYProgress,[0,1],[60,-60]);
  const y2=useTransform(scrollYProgress,[0,1],[120,-80]);
  const words='We made going to the dentist feel a little less like going to the dentist.'.split(' ');
  return <section id="intro" ref={ref} className="relative bg-cream px-5 md:px-10 py-24 md:py-36 overflow-hidden">
    <div className="max-w-[1300px] mx-auto">
      <p className="text-[12px] tracking-[0.25em] font-semibold opacity-60">HELLO, WE ARE PEARL ✦ CHELSEA, NYC</p>
      <h2 className="font-display font-bold tracking-tightest leading-[0.95] text-[10vw] md:text-[5.2vw] mt-6 max-w-[18ch]">{words.map((w,i)=>{
        const hl = w.includes('less')||w.includes('dentist.');
        return <motion.span key={i} className={`inline-block mr-[0.24em] ${hl?'bg-lime px-3 rounded-full rotate-[-1deg]':''}`} style={{y:i%2?y1:y2}}>{w}</motion.span>
      })}</h2>
      <div className="grid md:grid-cols-3 gap-8 mt-12 items-start">
        <p className="text-lg leading-snug max-w-[42ch]">Pearl combines modern dental technology, thoughtful care, and a more relaxed studio experience in the middle of Manhattan.</p>
        <div className="bg-ink text-cream rounded-3xl p-7 rotate-[-1deg]"><div className="font-display font-bold text-6xl">4.9<span className="text-lime text-3xl"> /5</span></div><p className="mt-2 text-sm opacity-80">Average patient rating — fictional placeholder stats</p></div>
        <div className="bg-lav rounded-3xl p-7 rotate-[1.2deg]"><div className="font-display font-bold text-6xl">2,500+</div><p className="mt-2 text-sm opacity-80">smiles cared for — fictional placeholder stats</p></div>
      </div>
    </div>
  </section>;
}
