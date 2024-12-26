import Header from '../components/Header'
import Footer from '../components/Footer'
import PrivacyPolicy from '../components/PrivacyPolicy'

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  )
}

