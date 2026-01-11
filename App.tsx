import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Amenities from './components/Amenities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GeminiChat from './components/GeminiChat';

function App() {
  // Smooth scroll behavior for anchor links is handled by CSS in index.html
  // But we can add an intersection observer here if we wanted to highlight nav items, etc.

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Amenities />
        <Contact />
      </main>
      <Footer />
      <GeminiChat />
    </div>
  );
}

export default App;