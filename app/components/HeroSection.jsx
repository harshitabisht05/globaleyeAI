'use client';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const words = ['Imagination', 'Boundaries', 'Reality', 'Horizons', 'Perception'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white dark:bg-black text-center px-4 pt-32 pb-20">
      <h1
        className="font-heading text-5xl md:text-6xl leading-tight mb-2 text-gray-800 dark:text-white"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Vision Beyond
        <br />
        <span className="text-blue-600 transition duration-700 ease-in-out">
          {words[currentWordIndex]}
        </span>
      </h1>

      <p
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        Empowering industries with cutting-edge drone and AI technology.
      </p>

      <div className="space-x-4 mt-8">
        <a href="/solutions" className="text-blue-600 hover:underline">
          <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          View Our Solutions
        </button>
        </a>
        <a href="/about" className="text-blue-600 hover:underline">
        <button
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          About Us
        </button>
        </a>
      </div>
    </section>
  );
}
