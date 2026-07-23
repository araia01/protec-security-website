import Navbar from '@/components/site/navbar';
import Hero from '@/components/site/hero';
import About from '@/components/site/about';
import Services from '@/components/site/services';
import WhyChooseUs from '@/components/site/why-choose-us';
import Industries from '@/components/site/industries';
import ProNews from '@/components/site/pro-news';
import Careers from '@/components/site/careers';
import CtaBanner from '@/components/site/cta-banner';
import Contact from '@/components/site/contact';
import Footer from '@/components/site/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Industries />
      <ProNews />
      <Careers />
      <CtaBanner />
      <Contact />
      <Footer />
    </main>
  );
}
