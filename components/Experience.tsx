'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
const data=[
  {big:'COMFORT',title:'No judgment',desc:'We are here to help you move forward, not lecture you about the past.',bg:'#16150F',fg:'#FAF6EF',acc:'#D8FF3E'},
  {big:'CLARITY',title:'Transparent care',desc:'We explain options clearly before treatment begins.',bg:'#D9D2FF',fg:'#16150F',acc:'#16150F'},
  {big:'TECH',title:'Modern technology',desc:'Digital scanning, imaging and treatment planning make visits easier.',bg:'#FFD9C2',fg:'#16150F',acc:'#16150F'},
  {big:'CARE',title:'Designed for humans',desc:'Comfortable spaces, friendly people, appointments around real schedules.',bg:'#D6F3E3',fg:'#16150F',acc:'#16150F'},
];
export default function Experience(){
  const ref=useRef<HTMLDivElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:['start start','end end']});
  return <section id="about" ref={ref} className="relative" style={{height:'420vh'}}>
    <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
      {data.map((d,i)=>{
        const start=i/data.length; const end=(i+1)/data.length;
        return <Panel key={i} d={d} progress={scrollYProgress} start={start} end={end} index={i}/>;
      })}
      <div className="absolute top-6 left-0 right-0 text-center z-20"><p className="text-[12px] tracking-[0.3em] font-semibold opacity-70">THE DENTIST, REDESIGNED</p></div>
    </div>
  </section>;
}
function Panel({d,progress,start,end,index}:{d:any;progress:any;start:number;end:number;index:number}){
  const o=useTransform(progress,(v: number)=>{if(v<start||v>=end) return 0; const p=(v-start)/(end-start); return p<0.15?p/0.15:p>0.85?(1-p)/0.15:1;});
  const y=useTransform(progress,(v: number)=>{if(v<start||v>=end) return 80; const p=(v-start)/(end-start); return (p-0.5)*120;});
  const s=useTransform(progress,(v: number)=>{if(v<start) return 0.9; if(v>=end) return 1.05; return 1;});
  return <motion.div style={{opacity:o,backgroundColor:d.bg,color:d.fg,pointerEvents:'none'}} className="absolute inset-0 grid place-items-center px-5">
    <motion.div style={{y,scale:s}} className="text-center max-w-[1200px]">
      <div className="font-display font-bold leading-none tracking-tightest text-[18vw] md:text-[13vw]">{d.big}</div>
      <div className="mt-4 inline-block rounded-full px-6 py-2 font-bold" style={{background:d.acc,color:d.bg==='#16150F'?'#16150F':'#16150F'}}>{'0'+(index+1)+' — '+d.title}</div>
      <p className="mt-4 text-lg md:text-2xl max-w-[46ch] mx-auto opacity-90">{d.desc}</p>
    </motion.div>
  </motion.div>;
}
