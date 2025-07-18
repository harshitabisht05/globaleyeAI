// app/page.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Features from "./components/FeaturesSection";
import Industries from "./components/IndustriesSection";
import Footer from "./components/Footer";
// import UseCase from "./components/UseCaseCard";
// import Mission from "./components/MissionSection";

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex items-center justify-center bg-white dark:bg-black transition-colors duration-300">
        <Hero />
      </section>

      {/* Features Section */}
      <section className="py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <Features />
        </div>
      </section>

      {/* Mission Section */}
      {/* <section className="py-16 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <Mission />
        </div>
      </section> */}

      {/* Industries Section */}
      <section className="py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <Industries />
        </div>
      </section>

      {/* UseCase Preview Section */}
      {/* <section className="py-16 bg-white dark:bg-black transition-colors duration-300">
        <div className="container mx-auto px-4">
          <UseCase />
        </div>
      </section> */}

      {/* Footer Section */}
      <section>
        <div>
          <Footer />
        </div>
      </section>
    </main>
  );
}
