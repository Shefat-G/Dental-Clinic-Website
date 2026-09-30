import type { Metadata } from 'next';
import './globals.css';
import { Space_Grotesk, Caveat } from 'next/font/google';

const display = Space_Grotesk({ subsets:['latin'], variable:'--font-display', weight:['400','500','600','700'] });
const body = Space_Grotesk({ subsets:['latin'], variable:'--font-body', weight:['400','500'] });
const hand = Caveat({ subsets:['latin'], variable:'--font-hand', weight:['600'] });

export const metadata: Metadata = {
  title: 'Pearl Dental Studio | Dentist in Manhattan, NYC',
  description: 'Modern dentistry in Manhattan. Pearl Dental Studio offers preventive, cosmetic, restorative, Invisalign, whitening, and implant dentistry in New York City.',
  openGraph: { title:'Pearl Dental Studio | Dentist in Manhattan, NYC', description:'Modern dentistry in Manhattan. Thoughtful care, beautiful results.', type:'website', locale:'en_US' },
};

export default function RootLayout({ children }:{children:React.ReactNode}){
  const jsonLd = {
    '@context':'https://schema.org',
    '@type':'Dentist',
    name:'Pearl Dental Studio',
    address:{ '@type':'PostalAddress', streetAddress:'142 West 21st Street', addressLocality:'New York', addressRegion:'NY', postalCode:'10011' },
    telephone:'+1 (212) 555-0184',
    email:'hello@pearldentalnyc.com',
    openingHours:['Mo-Fr 08:00-19:00','Sa 09:00-15:00'],
    priceRange:'$$',
  };
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${hand.variable}`}>
      <body className="font-body bg-cream text-ink">
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}} />
        {children}
      </body>
    </html>
  );
}
