export default function BlogPage() {
  const blogPosts = [
    {
      title: 'AI Transformation for Small Businesses',
      excerpt: 'Discover how AI can revolutionize your business operations and drive growth.',
      date: 'January 2025'
    },
    {
      title: 'Voice AI: The Future of Customer Communication',
      excerpt: 'Explore how intelligent voice technologies are changing customer interactions.',
      date: 'December 2024'
    },
    {
      title: 'Process Automation Strategies',
      excerpt: 'Learn key strategies to streamline your business workflows with AI.',
      date: 'November 2024'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Heart Lab AI Blog</h1>
        
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all"
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">{post.title}</h2>
              <p className="text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button className="text-blue-500 hover:underline">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}