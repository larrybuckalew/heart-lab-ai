import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Contact Heart Lab AI
          </h1>
          <p className="text-gray-600 mb-8">
            Have questions about our AI-powered cardiac solutions? Reach out to our team.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Contact Information
          </h2>

          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="mr-4 text-blue-600" size={32} />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">contact@heartlabai.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <Phone className="mr-4 text-blue-600" size={32} />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center">
              <MapPin className="mr-4 text-blue-600" size={32} />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">123 AI Innovation Drive, Tech City, CA 90210</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}