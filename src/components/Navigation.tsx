
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Check if page is scrolled for applying background to nav
      if (scrollPosition > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine active section
      const sectionElements = sections.map(section => {
        const element = document.getElementById(section.id);
        if (!element) return null;
        
        const rect = element.getBoundingClientRect();
        return {
          id: section.id,
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        };
      }).filter(Boolean);
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (!section) continue;
        
        if (scrollPosition >= section.top - 300) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      setMenuOpen(false);
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10",
        scrolled ? "py-3 glass" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="font-display text-xl font-semibold text-primary hover:opacity-80 transition-opacity"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          Bhuvan Kambley
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all relative",
                activeSection === section.id 
                  ? "text-accent" 
                  : "text-foreground/80 hover:text-foreground"
              )}
            >
              {section.label}
              {activeSection === section.id && (
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
              )}
            </button>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button 
            className="p-2 rounded-md text-foreground focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass px-6 py-4 flex flex-col space-y-2 animate-fade-in-up">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "px-4 py-3 rounded-md text-left text-sm font-medium transition-all",
                activeSection === section.id 
                  ? "text-accent bg-accent/5" 
                  : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
              )}
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
