export default function MissionSection() {
  return (
    <section className="py-16 px-6 text-center bg-[#F0F4FF] dark:bg-[#0d1117]">
      <h2
        className="text-4xl font-semibold mb-6"
        style={{ fontFamily: 'var(--font-heading)', color: '#0047FF' }}
      >
        Our Mission
      </h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300" style={{ fontFamily: 'var(--font-body)'}}>
        At <span className="font-semibold">GlobalEye AI</span>, our mission is to empower industries with advanced drone technology
        and AI-powered insights. We strive to provide real-time solutions for defense,
        agriculture, logistics, and beyond—enhancing decision-making through innovation.
      </p>
    </section>
  );
}
