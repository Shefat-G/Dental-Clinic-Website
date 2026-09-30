'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../content/data';
export default function Reviews(){
  const [i,setI]=useState(0);
  useEffect(()=>{const t=setInterval(()=>setI(v=>(v+1)%testimonials.length),4200);return()=>clearInterval(t)},[]);
  return <section className="bg-peach py-24 md:py-32 px-5 text-center overflow-hidden">
    <p className="text-[12px] tracking-[0.25em] font-semibold opacity-60">REVIEWS — REAL VIBES</p>
    <div className="min-h-[220px] md:min-h-[240px] grid place-items-center max-w-[1100px] mx-auto mt-6">
      <AnimatePresence mode="wait"><motion.blockquote key={i} initial={{y:60,opacity:0,rotate:-1}} animate={{y:0,opacity:1,rotate:0}} exit={{y:-60,opacity:0}} transition={{duration:0.6}} className="font-display font-bold text-[8vw] md:text-[3.6vw] leading-[1.02] tracking-tight">“{testimonials[i].quote}”<footer className="mt-4 text-[15px] font-body font-medium tracking-[0.18em]">— {testimonials[i].name}</footer></motion.blockquote></AnimatePresence>
    </div>
    <div className="flex justify-center gap-2 mt-6">{testimonials.map((_,k)=>(<button key={k} aria-label={'Show review '+(k+1)} onClick={()=>setI(k)} className={`h-2.5 rounded-full transition-all ${k===i?'w-10 bg-ink':'w-2.5 bg-ink/25'}`} />))}</div>
    <div className="mt-14"><div className="font-display font-bold text-[28vw] md:text-[13vw] leading-none tracking-tightest">4.9</div><div className="text-3xl tracking-widest">★★★★★</div><p className="mt-4 text-lg max-w-[48ch] mx-auto font-medium">Loved by New Yorkers who used to hate going to the dentist.</p></div>
  </section>;
}
