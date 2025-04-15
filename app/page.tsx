import Header from './components/Header'
import Hero from './components/Hero'
import Story from './components/Story'
import Services from './components/Services'
import News from './components/News'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Guitars from './components/Guitars'
import BackToTop from './components/BackToTop'

export default function Home() {
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
          <Guitars id="guitars" />
        </section>
        <section className="snap-scroll-section">
          <Services id="services" />
        </section>
        <section className="snap-scroll-section">
          <News id="news" />
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

