import { site } from '../content/site';
export default function Footer(){
  return <footer className="bg-ink text-cream pt-20 pb-28 md:pb-10 px-5 md:px-10 rounded-t-[2.5rem] relative overflow-hidden">
    <div className="max-w-[1350px] mx-auto">
      <h2 className="font-display font-bold leading-[0.85] tracking-tightest text-[22vw] md:text-[13vw]">KEEP<br/><span className="text-lime">SMILING.</span></h2>
      <div className="grid md:grid-cols-4 gap-10 mt-12 text-[15px]">
        <div><p className="font-bold text-lg">PEARL Dental Studio</p><p className="opacity-70 mt-2">142 West 21st Street<br/>New York, NY 10011<br/>+1 (212) 555-0184<br/>hello@pearldentalnyc.com</p></div>
        <nav aria-label="Footer"><p className="tracking-[0.2em] text-[12px] opacity-60 font-bold">VISIT</p><ul className="mt-3 space-y-2 font-semibold"><li><a className="u-link" href="#services">Services</a></li><li><a className="u-link" href="#dentists">Dentists</a></li><li><a className="u-link" href="#invisalign">Invisalign</a></li><li><a className="u-link" href="#about">About</a></li><li><a className="u-link" href="#faq">FAQ</a></li><li><a className="u-link" href="#book">Contact</a></li></ul></nav>
        <div><p className="tracking-[0.2em] text-[12px] opacity-60 font-bold">HOURS</p><p className="mt-3 opacity-80">Mon–Fri 8 AM–7 PM<br/>Sat 9 AM–3 PM<br/>Sun Closed</p><a href={site.mapsUrl} target="_blank" rel="noreferrer" className="underline mt-2 inline-block">Get Directions ↗</a></div>
        <div><p className="tracking-[0.2em] text-[12px] opacity-60 font-bold">SOCIAL</p><p className="mt-3 space-x-4 font-semibold"><a className="u-link" href="https://instagram.com/">Instagram</a><a className="u-link" href="https://tiktok.com/">TikTok</a></p><p className="mt-6 opacity-60 text-[13px]">© Pearl Dental Studio<br/>Demo site — fictional stats & placeholder imagery.</p></div>
      </div>
    </div>
  </footer>;
}
