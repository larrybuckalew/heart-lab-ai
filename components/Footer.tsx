import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Services</h3>
          <ul>
            <li><Link href="/services">AI Solutions</Link></li>
            <li><Link href="/dashboard">Analytics</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul>
            <li><Link href="/legal/privacy">Privacy Policy</Link></li>
            <li><Link href="/legal/terms">Terms of Service</Link></li>
            <li><Link href="/legal/accessibility">Accessibility</Link></li>
            <li><Link href="/legal/cookie-policy">Cookie Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Connect</h3>
          <ul>
            <li>© {new Date().getFullYear()} Heart Lab AI</li>
            <li>All Rights Reserved</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}