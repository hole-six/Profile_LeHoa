import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroOverlay from './components/IntroOverlay/IntroOverlay';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills';
import Services from './components/Services/Services';
import Engineering from './components/Engineering/Engineering';
import Projects from './components/Projects/Projects';
import GallerySection from './components/GallerySection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="App bg-white dark:bg-dark-950 min-h-screen text-dark-900 dark:text-white overflow-x-hidden">
      <AnimatePresence>
        {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Header />
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Services />
            <Engineering />
            <Projects />
            <GallerySection />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
