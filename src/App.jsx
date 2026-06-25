import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ThemeToggle from './components/ThemeToggle';
import CustomCursor from './components/CustomCursor';
import BackgroundFX from './components/BackgroundFX';
import CommandPalette from './components/CommandPalette';
import TerminalEasterEgg from './components/TerminalEasterEgg';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('eman-theme') || 'dark');

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light');
    localStorage.setItem('eman-theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <ScrollProgress />
      <CustomCursor />
      <BackgroundFX />
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <CommandPalette />
      <TerminalEasterEgg />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
