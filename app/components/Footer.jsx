// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white text-black dark:bg-black dark:text-white py-4 text-center transition-colors duration-300" style={{ fontFamily: 'var(--font-body)' }}>
      <p className="mb-2" >
        This project is an internship project from <span className="font-semibold">Sentienta Quality AI</span><br />
        by Interns <span className="font-semibold">Harshita</span>, <span className="font-semibold">Paridhi</span> and <span className="font-semibold">Ojaswee</span>.
      </p>
      <p className="mt-4 text-xs text-gray-500">© 2025 GlobalEye AI. All rights reserved.</p>
    </footer>
  );
}
