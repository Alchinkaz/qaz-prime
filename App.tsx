import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Steps } from './components/Steps';
import { Services } from './components/Services';
import { Reviews } from './components/Reviews';
import { Founder } from './components/Founder';
import { ContactForm } from './components/ContactForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWA } from './components/FloatingWA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Steps />
      <Reviews />
      <Founder />
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingWA />
    </div>
  );
}

export default App;