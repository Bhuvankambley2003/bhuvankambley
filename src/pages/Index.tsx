import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
    
    // Show/hide scroll to top button based on scroll position
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative">
        <Header />
        <Resume />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-10 text-center text-foreground/70 backdrop-blur-sm border-t border-foreground/5">
            <a 
              href="https://github.com/Bhuvankambley2003" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-accent transition-colors"
            >
              <div className="max-w-5xl mx-auto px-6">
                <p className="text-sm">
                  © {new Date().getFullYear()} Bhuvan Kambley. All rights reserved.{' '}
                  
                    
                  
                </p>
                <p className="text-xs mt-2 text-foreground/50">Crafted with Passion</p>
              </div>
        </a>
      </footer>
      
      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 size-12 rounded-full shadow-lg bg-accent hover:bg-accent/90 text-white p-0 z-50 transition-all duration-300 ${
          showScrollButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </Button>
    </div>
  );
};

export default Index;
