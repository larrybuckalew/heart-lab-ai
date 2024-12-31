'use client';

import { Sparkles, Bot, Network, MessageCircle, ChartBar, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Sparkles,
    title: 'Voice AI Technology',
    description: 'Advanced voice processing powered by cutting-edge AI'
  },
  {
    icon: Bot,
    title: 'Automation',
    description: 'Smart automation solutions for your business workflow'
  },
  {
    icon: Network,
    title: 'Integration',
    description: 'Seamless integration with your existing systems'
  },
  {
    icon: MessageCircle,
    title: 'Natural Language',
    description: 'Human-like interactions with advanced NLP'
  },
  {
    icon: ChartBar,
    title: 'Analytics',
    description: 'Real-time insights and performance metrics'
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Enterprise-grade security and compliance'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions powered by cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 bg-opacity-50 rounded-xl p-6 hover:bg-opacity-70 transition-all transform hover:scale-105"
            >
              <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}