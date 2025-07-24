"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TechnologyPage() {
  const [darkMode, setDarkMode] = useState(false);

  const technologies = [
    {
      title: "Edge Computing",
      description: "Low-latency AI models running on local devices for instant insights.",
      icon: "🧠",
    },
    {
      title: "Vision AI Models",
      description: "Detect behavior, anomalies, and movement using computer vision.",
      icon: "🔍",
    },
    {
      title: "IoT Connectivity",
      description: "Integrating AI with IoT devices for real-time sensing and decisions.",
      icon: "📡",
    },
    {
      title: "Data Security",
      description: "Built-in encryption and secure data handling for every transaction.",
      icon: "🔐",
    },
    {
      title: "Model Optimization",
      description: "Running AI on edge with quantization and pruning for faster inference.",
      icon: "⚙️",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900 py-20 px-4 min-h-screen transition-colors">
        <section className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12" style={{ fontFamily: "var(--font-heading)" }}>
            Cutting-Edge <span className="text-[#0047FF]">Technology Stack</span>
          </h2>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-blue-50 dark:bg-gray-800 dark:border-gray-700 border border-blue-200 rounded-2xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:bg-blue-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out transform hover:ring-2 hover:ring-[#0047FF]"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3
                  className="text-xl font-semibold text-gray-800 dark:text-white mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {tech.title}
                </h3>
                <p
                  className="text-gray-700 dark:text-gray-300"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
