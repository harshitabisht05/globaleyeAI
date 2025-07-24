"use client";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Smart City Monitoring",
      description: "AI cameras detect anomalies in traffic, crowd movement, and city infrastructure.",
      icon: "🌆",
    },
    {
      title: "Retail Analytics",
      description: "Analyze customer behavior and heatmaps in real-time for better layout decisions.",
      icon: "🏦",
    },
    {
      title: "Industrial Safety",
      description: "Detect equipment anomalies, worker safety compliance, and predictive maintenance.",
      icon: "🏬",
    },
    {
      title: "Remote Surveillance",
      description: "Live monitoring and smart alerts for warehouses, banks, and remote sites.",
      icon: "📍",
    },
    {
      title: "Smart Campus",
      description: "Automated access control, student tracking, and incident response.",
      icon: "🏫",
    },
    {
      title: "Healthcare Intelligence",
      description: "Monitor patient rooms, detect falls, and ensure compliance in hospitals.",
      icon: "🏥",
    },
  ];

  return (
    <main className="bg-white dark:bg-gray-900 py-20 px-4 min-h-screen transition-colors">
      <section className="max-w-7xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Smart <span className="text-[#0047FF]">AI-Powered</span> Solutions
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {solutions.map((sol, index) => (
            <div
              key={index}
              className="bg-blue-50 dark:bg-gray-800 dark:border-gray-700 border border-blue-200 rounded-2xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:bg-blue-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out transform hover:ring-2 hover:ring-[#0047FF]"
            >
              <div className="text-4xl mb-4">{sol.icon}</div>
              <h3
                className="text-xl font-semibold text-gray-800 dark:text-white mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {sol.title}
              </h3>
              <p
                className="text-gray-700 dark:text-gray-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {sol.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
