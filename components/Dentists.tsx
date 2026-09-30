'use client';
import { motion } from 'framer-motion';
import { doctors } from '../content/data';
export default function Dentists(){
  return <section id="dentists" className="bg-paper py-24 md:py-32 px-5 md:px-10">
    <div className="max-w-[1350px] mx-auto">
      <p className="text-[12px] tracking-[0.25em] font-semibold opacity-60">MEET YOUR DENTISTS</p>
      <h2 className="font-display font-bold text-[11vw] md:text-[5vw] leading-[0.9] tracking-tightest mt-4">People who happen<br/>to be <span className="italic font-light">dentists.</span></h2>
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {doctors.map((d,i)=>(
          <motion.article key={d.name} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7,delay:i*0.1}} className="group relative rounded-[2rem] overflow-hidden bg-ink text-cream min-h-[560px] flex flex-col justify-end">
            <img src={d.img} alt={d.name+' portrait'} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" loading="lazy"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <span className="absolute top-5 left-5 rounded-full px-4 py-2 text-[13px] font-bold" style={{background:d.accent,color:'#16150F'}}>{d.role}</span>
            <span className="absolute top-5 right-5 font-hand text-[22px] rotate-[-6deg] bg-cream text-ink px-4 py-1 rounded-xl">“{d.note}”</span>
            <div className="relative p-7 md:p-9">
              <h3 className="font-display font-bold text-[8vw] md:text-[2.8vw] leading-none group-hover:translate-x-2 transition-transform">{d.name}</h3>
              <p className="mt-3 max-w-[40ch] opacity-90">{d.bio}</p>
              <p className="mt-3 text-[13px] tracking-widest opacity-70">COSMETIC • MODERN • FRIENDLY</p>
            </div>
          </motion.article>))}
      </div>
    </div>
  </section>;
}
