export default function BlogPage() {
  const blogPosts = [
    {
      title: 'AI Transformation for Small Businesses',
      date: 'January 2025',
      excerpt: 'Discover how AI can revolutionize your business operations and drive growth.'
    },
    {
      title: 'Voice AI: The Future of Customer Communication',
      date: 'December 2024',
      excerpt: 'Explore how intelligent voice technologies are changing customer interactions.'
    },
    {
      title: 'Process Automation Strategies',
      date: 'November 2024',
      excerpt: 'Learn key strategies to streamline your business workflows with AI.'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Heart Lab AI Blog</h1>
      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-500 mb-2">{post.date}</p>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <button className="text-blue-500 hover:underline">Read More</button>
          </div>
        ))}
      </div>
    </div>
  )
}