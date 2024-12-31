import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      role: "CTO, Enterprise Solutions",
      content: "Heart Lab AI's voice technology transformed our customer service. Response times improved by 60% and customer satisfaction increased dramatically.",
      rating: 5,
      image: "/testimonials/john.jpg"
    },
    {
      name: "Sarah Chen",
      role: "Operations Director, TechCorp",
      content: "The automation capabilities have revolutionized our workflow. Tasks that took hours now happen in minutes.",
      rating: 5,
      image: "/testimonials/sarah.jpg"
    },
    {
      name: "Michael Brown",
      role: "CEO, Innovation Labs",
      content: "Exceptional AI solutions that delivered real business value. The team's expertise and support were outstanding.",
      rating: 5,
      image: "/testimonials/michael.jpg"
    }
  ];

  const RatingStars = ({ rating }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12 text-center">Client Success Stories</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-400 opacity-50" />
              
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <RatingStars rating={testimonial.rating} />
              
              <p className="mt-4 text-gray-300">{testimonial.content}</p>
            </div>
          ))}
        </div>

        {/* Submit Testimonial Form */}
        <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Share Your Experience</h2>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 p-3 rounded-lg"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block mb-2">Company</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 p-3 rounded-lg"
                  placeholder="Your company"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">Your Testimonial</label>
              <textarea
                className="w-full bg-gray-700 p-3 rounded-lg"
                rows="4"
                placeholder="Share your experience with Heart Lab AI"
              />
            </div>

            <div>
              <label className="block mb-2">Rating</label>
              <RatingStars rating={5} />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition-colors"
            >
              Submit Testimonial
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}