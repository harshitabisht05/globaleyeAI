
const solutions = [
  {
    title: "Real-Time Monitoring",
    description: "AI-powered live surveillance with instant alerts and intelligent tagging.",
    icon: "📹",
  },
  {
    title: "Predictive Analytics",
    description: "Forecast incidents before they occur using trained AI vision models.",
    icon: "📊",
  },
  {
    title: "Smart Access Control",
    description: "Automated, contactless entry management through face recognition.",
    icon: "🔐",
  },
];

export default function SolutionSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {solutions.map((solution, index) => (
        <div
          key={index}
          className="bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
        >
          <div className="text-4xl mb-4">{solution.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
          <p className="text-gray-600">{solution.description}</p>
        </div>
      ))}
    </div>
  );
}
