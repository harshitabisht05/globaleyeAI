'use client';

export default function UseCaseCard() {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
        Explore Our Case Studies
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-6" style={{ fontFamily: 'var(--font-body)'}}>
        Learn how our solutions made impact across different industries and real-world scenarios.
      </p>
      <a href="/solutions">
      <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" style={{ fontFamily: 'var(--font-heading)'}}>
        View Our Solutions
      </button>
      </a>
    </div>
  );
}
