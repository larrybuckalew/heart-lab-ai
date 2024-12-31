export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Voice AI Technology Trends 2024',
      excerpt: 'Exploring the latest advancements in voice technology and AI integration.',
      author: 'Sarah Chen',
      date: 'Dec 31, 2024',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The Future of Business Automation',
      excerpt: 'How AI is transforming workflow automation and business efficiency.',
      author: 'Michael Brown',
      date: 'Dec 28, 2024',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Voice AI in Customer Service',
      excerpt: 'Revolutionizing customer experience with advanced voice technology.',
      author: 'Emily Taylor',
      date: 'Dec 25, 2024',
      readTime: '6 min read'
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Latest Insights
        </h1>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-gray-800 bg-opacity-50 rounded-xl p-6 hover:bg-opacity-70 transition-all">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              
              <div className="flex items-center text-sm text-gray-400">
                <span>{post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>

              <button className="mt-4 text-blue-400 hover:text-blue-300 transition-colors">
                Read More →
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}