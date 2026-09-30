'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
export default function Marquee(){
  const ref=useRef<HTMLDivElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:['start end','end start']});
  const x=useTransform(scrollYProgress,[0,1],['2%','-22%']);
  const items='COSMETIC DENTISTRY ✦ INVISALIGN ✦ WHITENING ✦ VENEERS ✦ IMPLANTS ✦ CLEANINGS ✦ ';
  return <div ref={ref} className="bg-ink text-cream py-5 md:py-7 overflow-hidden -rotate-[1.2deg] scale-[1.02] border-y-4 border-lime">
    <motion.div style={{x}} className="whitespace-nowrap font-display font-bold text-[8vw] md:text-[3.6vw] leading-none flex w-max">
      <span className="pr-4">{items.repeat(3)}</span><span className="pr-4 text-lime">{items.repeat(3)}</span>
    </motion.div>
  </div>;
}
