'use client';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Harshita',
    role: 'Frontend Developer Intern',
  },
  {
    name: 'Paridhi',
    role: 'Frontend Developer Intern',
  },
  {
    name: 'Ojaswee',
    role: 'Frontend Developer Intern',
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white dark:bg-black text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-white" style={{ fontFamily: 'var(--font-heading)' }}>
        Meet Our Frontend Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-xl shadow hover:shadow-lg transition hover:scale-105"
          >
            {member.image && (
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
            )}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{member.name}</h3>
            <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">{member.role}</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{member.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
