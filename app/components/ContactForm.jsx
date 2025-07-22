'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        placeholder="Your Name"
        className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0047FF] dark:bg-gray-800 dark:text-white"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
        placeholder="Your Email"
        className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0047FF] dark:bg-gray-800 dark:text-white"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        required
        placeholder="Your Message"
        className="w-full p-4 border border-gray-300 rounded-md h-32 resize-none focus:ring-2 focus:ring-[#0047FF] dark:bg-gray-800 dark:text-white"
      />
      <button
        type="submit"
        className="bg-[#0047FF] hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition"
      >
        Send Message
      </button>
    </form>
  );
}
