'use client';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
export default function Hero(){
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0); const my = useMotionValue(0);
  const sx = useSpring(mx,{stiffness:60,damping:18});
  const sy = useSpring(my,{stiffness:60,damping:18});
  const { scrollYProgress } = useScroll({ target: ref, offset:['start start','end start'] });
  const toothY = useTransform(scrollYProgress,[0,1],[0,280]);
  const toothR = useTransform(scrollYProgress,[0,1],[0,28]);
  const toothS = useTransform(scrollYProgress,[0,1],[1,0.72]);
  const bg = useTransform(scrollYProgress,[0,1],['#FAF6EF','#D9D2FF']);
  return (
    <motion.section ref={ref} style={{backgroundColor:bg}} className="relative min-h-[108vh] overflow-hidden pt-28 pb-10 rounded-b-[2.5rem]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="flex items-center gap-3 text-[12px] tracking-[0.22em] font-medium">
          <span className="w-2 h-2 rounded-full bg-ink animate-pulse" /> MANHATTAN • CHELSEA • ACCEPTING NEW PATIENTS
        </motion.div>
        <h1 className="font-display font-bold leading-[0.86] tracking-tightest mt-6 text-[17vw] md:text-[11vw]">
          <span className="block overflow-hidden"><motion.span className="block" initial={{y:'110%'}} animate={{y:'0%'}} transition={{duration:0.9,delay:0.25}}>Dentistry</motion.span></span>
          <span className="block overflow-hidden"><motion.span className="block" initial={{y:'110%'}} animate={{y:'0%'}} transition={{duration:0.9,delay:0.45}}>worth smiling</motion.span></span>
          <span className="block overflow-hidden"><motion.span className="block" initial={{y:'110%'}} animate={{y:'0%'}} transition={{duration:0.9,delay:0.65}}>about.</motion.span></span>
        </h1>
        <motion.p initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:1.1}} className="mt-8 max-w-[380px] text-[17px] leading-snug">Modern dentistry in the heart of Manhattan. Thoughtful care, beautiful results, and appointments that don&apos;t feel like a trip to the dentist.</motion.p>
        <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:1.25}} className="mt-6 flex flex-wrap gap-4">
          <a href="#book" className="group bg-ink text-cream rounded-full px-8 py-4 font-semibold flex items-center gap-3">Book an Appointment <span className="w-8 h-8 rounded-full bg-lime text-ink grid place-items-center group-hover:rotate-45 transition-transform"><ArrowUpRight size={18}/></span></a>
          <a href="#intro" className="rounded-full px-8 py-4 border border-ink/20 font-semibold flex items-center gap-2">Explore Pearl <ArrowDown size={18}/></a>
        </motion.div>
      </div>
      <motion.div style={{y:toothY,rotate:toothR,scale:toothS}} className="pointer-events-none absolute right-[-10vw] md:right-[2vw] top-[16vh] md:top-[8vh] w-[66vw] md:w-[34vw] aspect-square z-0">
        <motion.div initial={{scale:0.6,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:1.2,delay:0.4}} className="relative w-full h-full">
          <motion.div animate={{y:[-8,10,-8]}} transition={{duration:6,repeat:Infinity}} className="absolute inset-0">
            <svg viewBox="0 0 400 420" className="w-full h-full drop-shadow-2xl">
              <defs><linearGradient id="t" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff"/><stop offset="0.55" stopColor="#FFF6D6"/><stop offset="1" stopColor="#FFD9C2"/></linearGradient></defs>
              <path d="M200 30 C120 30 60 85 62 165 C64 225 95 250 110 300 C122 340 150 410 175 380 C190 360 185 310 200 310 C215 310 210 360 225 380 C250 410 278 340 290 300 C305 250 336 225 338 165 C340 85 280 30 200 30 Z" fill="url(#t)" stroke="#16150F" strokeWidth="7"/>
              <ellipse cx="155" cy="150" rx="18" ry="26" fill="#16150F"/><ellipse cx="245" cy="150" rx="18" ry="26" fill="#16150F"/>
              <path d="M140 215 Q200 265 260 215 Q200 235 140 215" fill="#16150F"/>
            </svg>
          </motion.div>
          <div className="absolute left-0 top-10 bg-lime rounded-full px-5 py-2 font-bold rotate-[-8deg] shadow-lg">4.9 loved</div>
          <div className="absolute right-6 bottom-8 bg-ink text-cream rounded-2xl px-5 py-3 rotate-[6deg] text-sm">painless, promise</div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
