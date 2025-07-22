import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-black min-h-screen py-20 px-4 text-gray-900 dark:text-white">
      <h1
        className="text-5xl font-semibold text-center"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Get In <span className="text-[#0047FF]">Touch</span>
      </h1>
      <p className="text-center mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        We’d love to hear from you. Whether you have a question or just want to say hi —
        drop us a message and we’ll get back to you!
      </p>
      <div className="mt-12 max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </div>
  );
}
