'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faqs } from '../content/data';
export default function Faq(){
  const [open,setOpen]=useState<number|null>(0);
  return <section id="faq" className="bg-cream py-24 md:py-32 px-5 md:px-10">
    <div className="max-w-[1100px] mx-auto">
      <p className="text-[12px] tracking-[0.25em] font-semibold opacity-60">GOOD QUESTIONS</p>
      <h2 className="font-display font-bold text-[12vw] md:text-[5vw] leading-none tracking-tightest mt-4">Everything else<br/>you are wondering.</h2>
      <div className="mt-10 divide-y-2 divide-ink/10 border-y-2 border-ink/10">
        {faqs.map((f,i)=>(
          <div key={i}>
            <button onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i} className="w-full flex items-center gap-5 py-6 text-left group">
              <span className="font-display font-bold text-[14px] opacity-50 w-10">0{i+1}</span>
              <span className="font-display font-bold text-[5.5vw] md:text-[2vw] leading-none flex-1 group-hover:translate-x-1 transition-transform">{f.q}</span>
              <span className={`w-11 h-11 shrink-0 grid place-items-center rounded-full border transition-all ${open===i?'bg-ink text-lime rotate-45':'border-ink/20'}`}><Plus/></span>
            </button>
            <AnimatePresence>{open===i&&(<motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:0.45}} className="overflow-hidden"><p className="pb-7 pl-[60px] pr-4 max-w-[70ch] text-[16px] leading-relaxed opacity-90">{f.a}</p></motion.div>)}</AnimatePresence>
          </div>))}
      </div>
    </div>
  </section>;
}
