'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';
export function SmileDivider({flip=false}:{flip?:boolean}){
  const ref=useRef<HTMLDivElement>(null);
  return <div ref={ref} className="bg-cream py-6 overflow-hidden"><svg viewBox="0 0 1200 120" className="w-full h-[70px]"><path d="M50 30 Q600 140 1150 30" fill="none" stroke="#16150F" strokeWidth="10" strokeLinecap="round" style={{transform:flip?'scaleY(-1)':undefined,transformOrigin:'center'}}/></svg></div>;
}
export function FloatingCta(){
  return (<>
    <motion.a href="#book" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:2}} whileHover={{scale:1.06}} className="hidden md:flex fixed bottom-6 right-6 z-50 bg-ink text-cream rounded-full pl-6 pr-2 py-2 items-center gap-3 shadow-2xl"><span className="font-bold text-[14px] tracking-wide">Book Appointment</span><span className="w-10 h-10 rounded-full bg-lime text-ink grid place-items-center font-bold">↗</span></motion.a>
    <a href="#book" className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-ink text-cream text-center py-4 font-bold tracking-wide">Book Appointment — Pearl NYC ↗</a>
  </>);
}
export function Cursor(){
  const ref=useRef<HTMLDivElement>(null);
  return <div id="pearl-cursor" ref={ref} aria-hidden><div className="w-5 h-5 -ml-2.5 -mt-2.5 rounded-full bg-ink/80 mix-blend-difference" /></div>;
}
