import React from 'react';

const BlogPage = () => {
  const posts = [
    {
      title: 'Advances in Cardiac AI Analysis',
      date: '2024-01-15',
      excerpt: 'Recent developments in AI-powered cardiac analysis and their impact on patient care.',
      slug: 'advances-cardiac-ai-analysis'
    },
    {
      title: 'Understanding Heart Health Metrics',
      date: '2024-01-10',
      excerpt: 'A comprehensive guide to interpreting heart health measurements and indicators.',
      slug: 'understanding-heart-health-metrics'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Heart Lab AI Blog</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <time className="text-sm text-gray-500">{post.date}</time>
              <h2 className="text-xl font-semibold mt-2 mb-3">
                <a href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                  {post.title}
                </a>
              </h2>
              <p className="text-gray-600">{post.excerpt}</p>
              <a
                href={`/blog/${post.slug}`}
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;