import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Heart Lab AI</h3>
            <p className="text-gray-400">
              Advanced voice technology and automation solutions for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/solutions" className="block text-gray-400 hover:text-white">Solutions</Link>
              <Link href="/services" className="block text-gray-400 hover:text-white">Services</Link>
              <Link href="/case-studies" className="block text-gray-400 hover:text-white">Case Studies</Link>
              <Link href="/blog" className="block text-gray-400 hover:text-white">Blog</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>3031 Mokjave Oak Dr</p>
              <p>Valrico, FL 33594</p>
              <p>Phone: (813) 863-6917</p>
              <p>Email: contact@heartlabai.com</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Github className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Mail className="w-6 h-6" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Heart Lab AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}