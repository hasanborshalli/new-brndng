import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Partners } from './components/Partners';
import { Trainings } from './components/Trainings';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return <div className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <AboutUs />
      <Services />
      <Partners />
      <Trainings />
      <Contact />
      <Footer />
    </div>;
}