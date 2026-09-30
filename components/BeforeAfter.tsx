'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
export default function BeforeAfter(){
  const ref=useRef<HTMLDivElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:['start end','end start']});
  const w=useTransform(scrollYProgress,[0.1,0.55],['32vw','96vw']);
  const r=useTransform(scrollYProgress,[0.1,0.55],[180,24]);
  const [pos,setPos]=useState(50);
  const [tab,setTab]=useState(0);
  const cases=[
    {t:'Cosmetic Bonding',d:'4 teeth · 1 appointment',before:'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop',after:'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop'},
    {t:'Professional Whitening',d:'Single visit',before:'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1200&auto=format&fit=crop',after:'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop'},
  ];
  return <section ref={ref} className="bg-char text-cream py-24 md:py-32 overflow-hidden">
    <div className="text-center px-5"><p className="tracking-[0.25em] text-[12px] text-lime font-semibold">SMILE TRANSFORMATION</p>
    <h2 className="font-display font-bold text-[10vw] md:text-[5vw] leading-[0.9] tracking-tightest mt-4">A little change<br/>can make a <span className="italic font-light text-lime">big difference.</span></h2></div>
    <div className="flex justify-center mt-10"><motion.div style={{width:w,borderRadius:r}} className="relative overflow-hidden aspect-[16/10] max-w-[1300px] mx-4 select-none">
      <img src={cases[tab].after} alt="After smile placeholder" className="absolute inset-0 w-full h-full object-cover" draggable={false}/>
      <div className="absolute inset-0 overflow-hidden" style={{width:pos+'%'}}><img src={cases[tab].before} alt="Before smile placeholder" className="absolute inset-0 h-full object-cover max-w-none" style={{width:'100vw'}} draggable={false}/><span className="absolute top-4 left-4 bg-ink/80 px-4 py-1.5 rounded-full text-[12px] font-bold tracking-widest">BEFORE</span></div>
      <span className="absolute top-4 right-4 bg-lime text-ink px-4 py-1.5 rounded-full text-[12px] font-bold tracking-widest">AFTER</span>
      <input aria-label="Before after slider" type="range" min={0} max={100} value={pos} onChange={e=>setPos(Number(e.target.value))} className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"/>
      <div className="absolute top-0 bottom-0 pointer-events-none" style={{left:pos+'%'}}><div className="w-[3px] h-full bg-white -translate-x-1/2"/><div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-cream text-ink rounded-full grid place-items-center font-bold shadow-xl">↔</div></div>
    </motion.div></div>
    <div className="flex flex-wrap justify-center gap-3 mt-8 px-5">
      {cases.map((c,i)=>(<button key={i} onClick={()=>setTab(i)} className={`rounded-full px-6 py-3 font-semibold border ${tab===i?'bg-lime text-ink border-lime':'border-cream/30'}`}>{c.t} — {c.d}</button>))}
    </div>
    <p className="text-center text-[12px] opacity-60 mt-6 px-5">Individual results vary. Images are representative placeholders for the demo site.</p>
  </section>;
}
