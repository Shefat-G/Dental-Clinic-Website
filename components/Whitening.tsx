'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
export default function Whitening(){
  const ref=useRef<HTMLDivElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:['start end','end start']});
  const rot=useTransform(scrollYProgress,[0,1],[0,180]);
  const sc=useTransform(scrollYProgress,[0,1],[0.8,1.15]);
  return <section ref={ref} className="bg-butter text-ink py-24 md:py-32 px-5 overflow-hidden relative">
    <div className="max-w-[1200px] mx-auto text-center relative">
      <motion.div style={{rotate:rot,scale:sc}} className="mx-auto w-[220px] h-[220px] md:w-[300px] md:h-[300px] relative">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow"><circle cx="100" cy="100" r="86" fill="none" stroke="#16150F" strokeWidth="4" strokeDasharray="10 10"/><circle cx="100" cy="100" r="62" fill="#16150F"/><path d="M62 105 Q100 135 138 105 Q100 118 62 105" fill="#FFFDF7"/></svg>
        <span className="absolute inset-0 grid place-items-center font-display font-bold text-cream text-xl">smile<br/>lab</span>
      </motion.div>
      <h2 className="font-display font-bold text-[13vw] md:text-[6vw] leading-[0.9] tracking-tightest mt-8">Brighten<br/>things up.</h2>
      <p className="max-w-[52ch] mx-auto mt-6 text-lg">Professional whitening designed to brighten your smile safely and efficiently during a single studio visit.</p>
      <a href="#book" className="mt-8 inline-flex items-center gap-2 bg-ink text-cream rounded-full px-8 py-4 font-semibold">Learn About Whitening <ArrowUpRight size={18}/></a>
    </div>
  </section>;
}
