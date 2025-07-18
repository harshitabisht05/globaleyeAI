'use client';

export default function UseCaseCard() {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
        Explore Our Case Studies
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-6">
        Learn how our solutions made impact across different industries and real-world scenarios.
      </p>
      <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition">
        View Case Studies
      </button>
    </div>
  );
}
