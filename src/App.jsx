import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

// Main App Component
const App = () => {
    const [theme, setTheme] = useState('light');

    // Effect to set the theme on initial load and when it changes
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
        setTheme(initialTheme);
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
      <>
        {/* Styles for smooth scrolling and the scroll-down animation */}
        <style>{`
          html {
            scroll-behavior: smooth;
          }
          @keyframes scroll-down {
            0% {
              opacity: 0;
              transform: translateY(0);
            }
            30% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: translateY(20px);
            }
          }
          .animate-scroll {
            animation: scroll-down 1.5s ease-out infinite;
          }
        `}</style>
        
        <div className="antialiased bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors duration-300">
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                <HeroSection />
            </main>
        </div>
      </>
    );
};

export default App;