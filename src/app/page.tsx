// src/app/page.tsx
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import Problem from '@/components/sections/Problem';
import Process from '@/components/sections/Process';
import Industries from '@/components/sections/Industries';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Services />
      <Projects />
      <Process />
      <Industries />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
