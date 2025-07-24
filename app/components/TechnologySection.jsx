'use client';
import { motion } from 'framer-motion';

const techFeatures = [
  {
    title: "Edge Computing",
    description: "Low-latency AI models running on local devices for instant insights.",
    icon: "🧠",
  },
  {
    title: "Cloud Integration",
    description: "Seamless data sync across devices using scalable cloud storage.",
    icon: "☁️",
  },
  {
    title: "Vision AI Models",
    description: "Advanced models trained to detect behavior, anomalies, and movement.",
    icon: "🔍",
  },
];

export default function TechnologySection() {
  return (
    <section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {techFeatures.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-xl shadow hover:shadow-xl transition hover:scale-105"
          >
            <div className="text-4xl mb-4">{tech.icon}</div>
            <h3
              className="text-xl font-semibold text-gray-800 dark:text-white"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {tech.title}
            </h3>
            <p
              className="text-sm text-gray-600 dark:text-gray-300 mb-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {tech.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
