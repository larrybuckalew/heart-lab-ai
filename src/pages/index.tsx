import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Heart Lab AI</title>
        <meta name="description" content="Advanced cardiac analysis powered by AI" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Welcome to Heart Lab AI</h1>
        <p className="text-lg mb-4">Advanced cardiac analysis and monitoring powered by artificial intelligence.</p>
      </main>
    </div>
  );
}