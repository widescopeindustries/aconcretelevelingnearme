import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';

export const metadata = {
  title: 'Concrete Leveling Near Me | Free Quote in 60 Seconds',
  description: 'Get your sunken concrete fixed fast. Professional concrete leveling services near you. Free quote in 60 seconds. Licensed & insured contractors.',
  keywords: 'concrete leveling, mudjacking, polyurethane foam injection, slab jacking, concrete repair',
  openGraph: {
    title: 'Concrete Leveling Near Me | Free Quote in 60 Seconds',
    description: 'Get your sunken concrete fixed fast. Professional concrete leveling services near you.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Benefits />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
