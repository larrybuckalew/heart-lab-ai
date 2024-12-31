import React from 'react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Advancing Cardiac Care with AI',
      excerpt: 'How machine learning is transforming heart disease diagnosis and treatment.',
      date: '2024-12-31',
      author: 'Dr. Sarah Chen'
    },
    {
      id: 2,
      title: 'Early Detection Through Deep Learning',
      excerpt: 'New research shows promising results in early cardiac event prediction.',
      date: '2024-12-28',
      author: 'Dr. Michael Brown'
    },
    {
      id: 3,
      title: 'The Future of Cardiology',
      excerpt: 'Exploring upcoming trends in AI-assisted cardiac care.',
      date: '2024-12-25',
      author: 'Dr. Emily Taylor'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Latest Research & Insights</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
            <button className="mt-4 text-blue-600 hover:underline">Read More →</button>
          </article>
        ))}
      </div>
    </div>
  );
}