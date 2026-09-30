'use client';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { site } from '../content/site';
export default function Location(){
  return <section className="bg-mint py-24 md:py-28 px-5 md:px-10">
    <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="text-[12px] tracking-[0.25em] font-semibold opacity-60">FIND US — CHELSEA</p>
        <h2 className="font-display font-bold text-[12vw] md:text-[4.5vw] leading-[0.9] tracking-tightest mt-4">PEARL<br/>DENTAL<br/>STUDIO</h2>
        <p className="mt-6 font-semibold text-lg">{site.address.line1}<br/>{site.address.city}<br/><span className="opacity-70">{site.address.note}</span></p>
        <div className="mt-4 space-y-1 text-[15px] font-medium"><p>Mon–Fri — 8 AM–7 PM</p><p>Saturday — 9 AM–3 PM</p><p>Sunday — Closed</p></div>
        <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 bg-ink text-cream rounded-full px-7 py-3.5 font-semibold">Get Directions <ArrowUpRight size={18}/></a>
      </div>
      <motion.a href={site.mapsUrl} target="_blank" rel="noreferrer" whileHover={{scale:0.99}} className="relative bg-cream rounded-[2.5rem] p-6 min-h-[480px] overflow-hidden block border-2 border-ink/10">
        <svg viewBox="0 0 500 420" className="absolute inset-0 w-full h-full">
          <rect width="500" height="420" fill="#FFFDF7"/>
          <g stroke="#16150F" strokeOpacity="0.12" strokeWidth="10"><line x1="0" y1="140" x2="500" y2="140"/><line x1="0" y1="260" x2="500" y2="260"/><line x1="140" y1="0" x2="140" y2="420"/><line x1="320" y1="0" x2="320" y2="420"/></g>
          <line x1="0" y1="200" x2="500" y2="200" stroke="#D8FF3E" strokeWidth="18"/>
          <text x="20" y="192" fontSize="13" fontWeight="700">W 21ST ST</text>
          <text x="330" y="130" fontSize="12" transform="rotate(90 330 130)">6TH AVE</text>
        </svg>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <motion.div animate={{y:[0,-10,0]}} transition={{duration:2.2,repeat:Infinity}} className="w-16 h-16 mx-auto bg-ink text-lime rounded-full grid place-items-center shadow-2xl"><MapPin/></motion.div>
          <div className="mt-3 bg-ink text-cream rounded-2xl px-5 py-3 font-bold text-sm shadow-xl">PEARL — 142 W 21st</div>
        </div>
        <span className="absolute bottom-5 left-5 bg-lime rounded-full px-4 py-2 text-[12px] font-bold">CHELSEA ✦ NYC</span>
      </motion.a>
    </div>
  </section>;
}
