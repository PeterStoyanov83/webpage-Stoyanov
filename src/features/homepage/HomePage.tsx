'use client';

import Header from '../ui/Header';
import Hero from '../ui/Hero';
import Story from '../ui/Story';
import ServicesList from '../services/components/ServicesList';
import ContactForm from '../ui/ContactForm';
import Footer from '../ui/Footer';
import GuitarsList from '../guitars/components/GuitarsList';
import BackToTop from '../ui/BackToTop';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow snap-scroll-container">
        <section className="snap-scroll-section">
          <Hero />
        </section>
        <section className="snap-scroll-section">
          <Story id="story" />
        </section>
        <section className="snap-scroll-section">
          <GuitarsList id="guitars" />
        </section>
        <section className="snap-scroll-section">
          <ServicesList id="services" />
        </section>
        <section className="snap-scroll-section">
          <ContactForm id="contact" />
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}