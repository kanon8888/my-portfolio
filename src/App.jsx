import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
