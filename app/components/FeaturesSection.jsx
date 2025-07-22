'use client';

import { useState, useEffect } from 'react';

const features = [
  {
    title: "Real-Time Video Analytics",
    description: "Detect and analyze activity from surveillance cameras, drones, or industrial setups.",
  },
  {
    title: "Predictive Intelligence",
    description: "Forecast traffic flow, spot crowd surges, or detect safety hazards before they escalate.",
  },
  {
    title: "Edge & Cloud Vision",
    description: "Run AI at the camera level (edge) or on powerful cloud infrastructure — fast, flexible, and secure.",
  },
  {
    title: "Privacy-First Design",
    description: "GDPR-compliant anonymization, face-blur features, and encrypted data processing.",
  },
];

export default function FeaturesSection() {
  const fullText = "Powerful Features for a Smarter Future";
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = isDeleting ? 30 : 80;
    const pauseAtEnd = 1000; // Pause before deleting

    let timeout = setTimeout(() => {
      if (!isDeleting && index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayedText(fullText.slice(0, index - 1));
        setIndex(index - 1);
      } else {
        // At the end or start, toggle delete/type after pause
        setTimeout(() => setIsDeleting(!isDeleting), pauseAtEnd);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <section className="py-20 bg-gray-50 dark:bg-neutral-900 text-center px-6">
      <h2
        className="text-3xl md:text-4xl mb-12 text-gray-800 dark:text-white"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {displayedText}
        <span className="animate-pulse text-blue-600">|</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border dark:bg-neutral-800 p-6 rounded-xl shadow-md w-72 text-left transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border hover:border-blue-500" style={{ fontFamily: 'var(--font-body)' }}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-blue-500 mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
          </div>

        ))}
      </div>
    </section>
  );
}
