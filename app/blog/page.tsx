import React from 'react';

const BlogPage = () => {
  const categories = ['AI Implementation', 'Voice Technology', 'Business Automation', 'ROI & Metrics'];
  
  const posts = [
    {
      title: 'Complete Guide to AI Voice Automation',
      slug: 'ai-voice-automation-guide',
      date: 'January 15, 2024',
      category: 'AI Implementation',
      excerpt: 'Learn how to implement AI voice automation in your business.',
      readTime: '8 min read'
    },
    {
      title: 'Calculate ROI for Voice AI Implementation',
      slug: 'voice-ai-roi-calculator',
      date: 'January 10, 2024',
      category: 'ROI & Metrics',
      excerpt: 'Understand the financial impact and calculate potential ROI.',
      readTime: '6 min read'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Blog</h1>
        <div className="relative">
          <select className="appearance-none bg-white border rounded-lg px-4 py-2 pr-8">
            <option>All Categories</option>
            {categories.map(cat => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                {post.category}
              </span>
              <h2 className="text-xl font-semibold mb-3">
                <a href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                  {post.title}
                </a>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;