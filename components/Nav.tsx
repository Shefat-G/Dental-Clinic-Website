'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
export default function Nav(){
  const [scrolled,setScrolled]=useState(false);
  const [open,setOpen]=useState(false);
  useEffect(()=>{const f=()=>setScrolled(window.scrollY>60);window.addEventListener('scroll',f);return()=>window.removeEventListener('scroll',f)},[]);
  return (<>
    <motion.header initial={{y:-80,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:1.4,duration:0.7}} className="fixed top-4 left-0 right-0 z-50 px-4">
      <nav aria-label="Main" className={`max-w-[1300px] mx-auto flex items-center justify-between px-5 md:px-7 py-3 rounded-full transition-all duration-500 ${scrolled?'bg-ink text-cream shadow-2xl py-2.5':'bg-cream/70 backdrop-blur-xl border border-ink/10'}`}>
        <a href="#top" className="font-display font-bold text-[22px] tracking-tight">PEARL<sup className="text-[10px] ml-1">®</sup></a>
        <div className="hidden md:flex items-center gap-7 text-[14px] font-medium">
          <a className="u-link" href="#services">Services</a><a className="u-link" href="#about">About</a><a className="u-link" href="#dentists">Dentists</a><a className="u-link" href="#faq">FAQ</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="#book" className={`rounded-full px-6 py-2.5 font-semibold text-[14px] flex items-center gap-2 ${scrolled?'bg-lime text-ink':'bg-ink text-cream'}`}>Book <ArrowUpRight size={16}/></a>
          <button aria-label="Open menu" onClick={()=>setOpen(true)} className="md:hidden w-10 h-10 grid place-items-center rounded-full border border-current"><Menu size={18}/></button>
        </div>
      </nav>
    </motion.header>
    <AnimatePresence>{open&&(
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[60] bg-ink text-cream p-6 flex flex-col">
        <div className="flex justify-between items-center"><span className="font-bold text-2xl">PEARL®</span><button aria-label="Close menu" onClick={()=>setOpen(false)} className="w-11 h-11 grid place-items-center rounded-full bg-cream text-ink"><X/></button></div>
        <div className="flex-1 grid place-items-center"><div className="space-y-2 text-center">
          {['Services','About','Dentists','FAQ','Book'].map((l,i)=>(<motion.a key={l} initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.1+i*0.07}} onClick={()=>setOpen(false)} href={l==='Book'?'#book':'#'+l.toLowerCase()} className="block font-display font-bold text-[13vw] leading-none hover:text-lime">{l}</motion.a>))}
        </div></div>
        <p className="text-center text-sm opacity-70">142 West 21st Street • NYC • +1 (212) 555-0184</p>
      </motion.div>)}
    </AnimatePresence>
  </>);
}
