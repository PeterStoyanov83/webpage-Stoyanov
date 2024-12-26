import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 Stoyanov Guitars. All rights reserved.</p>
        <div className="mt-4">
          <Link href="/privacy-policy" className="text-gray-400 hover:text-white mx-2">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-gray-400 hover:text-white mx-2">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

