import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-12 text-center">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-blue-400" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:contact@heartlabai.com" className="text-gray-300 hover:text-white">
                      contact@heartlabai.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-blue-400" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+1234567890" className="text-gray-300 hover:text-white">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-blue-400" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-300">Birmingham, AL</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}