
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
    <section className="bg-white py-20 px-6 max-w-7xl mx-auto">
      <h2
        className="text-4xl md:text-5xl font-heading mb-10 text-center"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Cutting-Edge Technology Stack
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {techFeatures.map((tech, index) => (
          <div
            key={index}
            className="bg-blue-100 rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{tech.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
            <p className="text-gray-700">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
