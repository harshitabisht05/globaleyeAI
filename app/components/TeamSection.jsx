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
      <h2
        className="text-4xl font-semibold mb-12"
        style={{ fontFamily: 'var(--font-heading)', color: '#0047FF' }}
      >
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
            className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-xl shadow hover:shadow-xl transition hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {member.name}
            </h3>
            <p className="text-sm text-[#0047FF] mb-2">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
