import Header from '../components/Header'
import Footer from '../components/Footer'
import TermsOfService from '../components/TermsOfService'

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <TermsOfService />
      </main>
      <Footer />
    </div>
  )
}

