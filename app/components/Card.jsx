// components/Card.jsx
"use client";

export default function Card({ icon, title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg p-6 transition duration-300 border dark:border-gray-700">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 font-body">
        {description}
      </p>
    </div>
  );
}
