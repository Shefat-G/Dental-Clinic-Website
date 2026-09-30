import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Intro from '../components/Intro';
import Services from '../components/Services';
import BeforeAfter from '../components/BeforeAfter';
import Experience from '../components/Experience';
import Invisalign from '../components/Invisalign';
import Whitening from '../components/Whitening';
import Dentists from '../components/Dentists';
import Visit from '../components/Visit';
import Reviews from '../components/Reviews';
import Faq from '../components/Faq';
import Booking from '../components/Booking';
import Location from '../components/Location';
import Footer from '../components/Footer';
import { FloatingCta } from '../components/Chrome';
export default function Page(){
  return <main id="top" className="min-h-screen">
    <a href="#book" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-ink focus:text-cream focus:px-4 focus:py-2">Skip to booking</a>
    <Nav />
    <Hero />
    <Marquee />
    <Intro />
    <Services />
    <BeforeAfter />
    <Experience />
    <Invisalign />
    <Whitening />
    <Dentists />
    <Visit />
    <Reviews />
    <Location />
    <Faq />
    <Booking />
    <Footer />
    <FloatingCta />
  </main>;
}
