import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TrustStrip from './components/TrustStrip.jsx';
import Services from './components/Services.jsx';
import WhyUs from './components/WhyUs.jsx';
import Portfolio from './components/Portfolio.jsx';
import Pricing from './components/Pricing.jsx';
import Process from './components/Process.jsx';
import FAQ from './components/FAQ.jsx';
import ContactForm from './components/ContactForm.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0A0A0A]">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WhyUs />
        <Portfolio />
        <Pricing />
        <Process />
        <FAQ />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
