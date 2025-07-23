"use client";

export default function TechnologyPage() {
  const technologies = [
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

  return (
    <main className="bg-gray-100 py-20 px-4 min-h-screen">
      <section className="max-w-7xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Cutting-Edge Technology Stack
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3 transition-transform duration-300 hover:scale-110">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{tech.title}</h3>
              <p className="text-gray-700 leading-relaxed">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
