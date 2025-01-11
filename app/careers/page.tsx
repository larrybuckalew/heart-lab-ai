import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Careers at Heart Lab AI - Join Our Mission',
  description: 'Join Heart Lab AI and help transform industries through innovative AI technologies. We\'re hiring talented professionals passionate about making a difference.',
  keywords: 'AI jobs, technology careers, machine learning engineer, frontend developer, tech innovation',
};

// Job Listing Interface
interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  description: string;
  requirements: string[];
  benefits: string[];
}

// Sample Job Listings
const jobListings: JobListing[] = [
  {
    id: 'ml-engineer',
    title: 'Machine Learning Engineer',
    department: 'AI Research',
    location: 'Remote',
    type: 'Full-time',
    description: 'Develop cutting-edge AI algorithms and predictive solutions.',
    requirements: [
      'PhD or Master\'s in Computer Science, Machine Learning, or related field',
      '3+ years of AI research',
      'Expertise in Python, TensorFlow, and PyTorch',
      'Strong background in deep learning and neural networks'
    ],
    benefits: [
      'Competitive salary',
      'Comprehensive health insurance',
      'Equity options',
      'Professional development budget',
      'Flexible work hours'
    ]
  },
  {
    id: 'frontend-dev',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Hybrid',
    type: 'Full-time',
    description: 'Build intuitive and responsive user interfaces for our AI platform.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '5+ years of React and Next.js development',
      'Experience with TypeScript and modern web technologies',
      'Strong understanding of UI/UX principles'
    ],
    benefits: [
      'Competitive compensation',
      'Health and dental insurance',
      'Remote work options',
      'Continuous learning opportunities',
      'Cutting-edge technology stack'
    ]
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Careers at Heart Lab AI
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Join our mission to revolutionize industries through cutting-edge AI technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Job Listings */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Open Positions</h2>
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="bg-white shadow-md rounded-lg p-6 mb-4"
              >
                <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                <div className="mt-2 flex justify-between text-gray-600">
                  <span>{job.department}</span>
                  <span>{job.location}</span>
                </div>
                <p className="mt-4 text-gray-600">{job.description}</p>
                
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="mb-1">{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="mb-1">{benefit}</li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/careers/${job.id}`}
                  className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>

          {/* Company Culture Section */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Join Us?</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation First</h3>
                <p className="text-gray-600">Work on cutting-edge AI technology that makes a real impact across industries.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth & Learning</h3>
                <p className="text-gray-600">Continuous learning opportunities and career development support.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Work-Life Balance</h3>
                <p className="text-gray-600">Flexible work arrangements and competitive time-off policies.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Inclusive Culture</h3>
                <p className="text-gray-600">A diverse and inclusive environment where every voice matters.</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
