// app/technology/page.jsx
"use client";

import Card from "@/components/Card";
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
      title: "Cloud Integration",
      description: "Seamless data sync across devices using scalable cloud storage.",
      icon: "☁️",
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
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mb-6 px-4 py-2 rounded bg-gray-800 text-white dark:bg-white dark:text-gray-900"
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
            Cutting-Edge Technology Stack
          </h2>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {technologies.map((tech, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="transition transform hover:scale-105 hover:shadow-lg duration-300"
              >
                <Card
                  icon={tech.icon}
                  title={tech.title}
                  description={tech.description}
                />
              </div>
            ))}
          </div>
        </section>

        
      </main>
    </div>
  );
}
