import MissionSection from '../components/MissionSection';
import TeamSection from '../components/TeamSection';

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white">
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl font-semibold tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
          About <span className="text-[#0047FF]">GlobalEye AI</span>
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          Revolutionizing industries with aerial intelligence & AI-powered precision.
        </p>
      </section>
      <MissionSection />
      <TeamSection />
    </div>
  );
}
