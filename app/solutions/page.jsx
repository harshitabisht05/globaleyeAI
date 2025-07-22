// app/solutions/page.jsx

import SolutionSection from "@/components/SolutionSection";

export default function SolutionsPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h1
          className="text-4xl md:text-5xl font-heading mb-10 text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Smarter AI-Powered Solutions
        </h1>
        <p
          className="text-lg md:text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Explore our suite of scalable, intelligent surveillance tools designed to empower industries through predictive video analytics and real-time insights.
        </p>

        <SolutionSection />
      </section>
    </main>
  );
}
