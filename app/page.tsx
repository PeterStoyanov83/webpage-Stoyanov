import Header from './components/Header'
import Hero from './components/Hero'
import Story from './components/Story'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Guitars from './components/Guitars'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Story id="story" />
        <Guitars id="guitars" />
        <Services id="services" />
        <ContactForm id="contact" />
      </main>
      <Footer />
    </div>
  )
}

