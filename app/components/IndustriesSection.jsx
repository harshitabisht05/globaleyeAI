'use client';

import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const industries = [
  {
    name: "Defense & Security",
    icon: "🛡️",
    description: "Enhancing surveillance and threat detection using aerial systems.",
  },
  {
    name: "Agriculture",
    icon: "🌾",
    description: "Boosting crop yields with precision farming insights.",
  },
  {
    name: "Logistics",
    icon: "🚚",
    description: "Improving supply chains with real-time aerial tracking.",
  },
  {
    name: "Urban Planning",
    icon: "🏙️",
    description: "Supporting smart cities through traffic and infrastructure mapping.",
  },
  {
    name: "Energy & Utilities",
    icon: "⚡",
    description: "Inspecting power lines and turbines with AI-powered drones.",
  },
  {
    name: "Environmental Monitoring",
    icon: "🌍",
    description: "Tracking deforestation, pollution, and climate impacts from above.",
  },
];

export default function IndustriesSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-20 bg-blue-500/10 dark:bg-black text-center px-4">
      <h2
        className="text-3xl md:text-4xl  mb-12 text-gray-800 dark:text-white"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Industries We Serve
      </h2>

      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-4"
            >
              <div className="bg-gray-50 border dark:bg-neutral-800 p-6 rounded-xl shadow hover:shadow-lg transition hover:scale-105 cursor-default text-left h-full">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2" style={{ fontFamily: 'var(--font-body)' }}>{industry.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm" style={{ fontFamily: 'var(--font-body)' }}>{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
