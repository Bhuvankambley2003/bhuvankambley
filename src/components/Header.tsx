
import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter, FileText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-16 code-effect"
    >
      <div className="max-w-5xl w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20">
        {/* Profile Photo Container */}
        <div className="flex-shrink-0 relative">
          <div className="w-64 h-80 md:w-80 md:h-96 relative z-10 overflow-hidden rounded-md shadow-xl bg-gradient-to-br from-accent/5 to-accent/30 p-1 transition-all duration-300 hover:shadow-accent/20 hover:shadow-2xl">
            <div className="w-full h-full overflow-hidden rounded-md">
              {/* Replace the placeholder URL with your actual image */}
              <img 
                src="/bhuvan.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Animated dots */}
            <div className="absolute -bottom-2 -right-2 flex gap-1">
              <div className="h-3 w-3 rounded-full bg-accent animate-pulse-soft"></div>
              <div className="h-3 w-3 rounded-full bg-accent/80 animate-pulse-soft" style={{ animationDelay: '0.3s' }}></div>
              <div className="h-3 w-3 rounded-full bg-accent/60 animate-pulse-soft" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-5 -left-5 w-full h-full rounded-md border-2 border-dashed border-accent/20 z-0" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-md z-0 animate-pulse-soft" />
        </div>
        
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase rounded-full bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/10 text-accent animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span>Software Engineer</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight animate-fade-in animation-delay-200">
            <span className="block">Hello, I'm</span>
            <span className="block mt-2 text-gradient">Bhuvan Kambley</span>
          </h1>
          
          <p className="mt-6 text-lg leading-relaxed text-foreground/80 text-balance animate-fade-in animation-delay-400">
          Actively seeking full-time Full Stack/ Software Developer opportunities starting March 2025, with a passion for Full Stack Development, Machine Learning and Cloud Technologies.          </p>
          
          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in animation-delay-600">
            <Button 
              className="rounded-full gap-2 font-medium" 
              size="lg"
              onClick={() => window.open('https://drive.google.com/file/d/1ECDq5qDRqDN_U5NJ1LqLBiMEblQma3NF/view', '_blank')}
            >
              <FileText size={18} />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full gap-2 font-medium" 
              size="lg"
              onClick={() => {
                const email = 'pbhuvankambley2003@gmail.com';
                const subject = 'Contact from Portfolio Website';
                const body = 'Hello Bhuvan,\n\nI visited your portfolio and would like to connect.';
                
                window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              }}
            >
              <Mail size={18} />
              Contact Me
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4 mt-8 animate-fade-in animation-delay-600">
            <a 
              href="https://github.com/Bhuvankambley2003" 
              className="p-2.5 rounded-full bg-foreground/5 hover:bg-accent/10 hover:text-accent transition-colors border border-foreground/10 hover:border-accent/30 hover:scale-110 transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={20} className="text-foreground/80" />
            </a>
            <a 
              href="https://www.linkedin.com/in/bhuvankambley/" 
              className="p-2.5 rounded-full bg-foreground/5 hover:bg-accent/10 hover:text-accent transition-colors border border-foreground/10 hover:border-accent/30 hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} className="text-foreground/80" />
            </a>
            <a 
              href="https://x.com/BKambley" 
              className="p-2.5 rounded-full bg-foreground/5 hover:bg-accent/10 hover:text-accent transition-colors border border-foreground/10 hover:border-accent/30 hover:scale-110 transition-all duration-200"
              aria-label="Twitter Profile"
            >
              <Twitter size={20} className="text-foreground/80" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-foreground/60 mb-2">Scroll Down</span>
        <ArrowDown size={20} className="text-foreground/60" />
      </div>
    </section>
  );
};

export default Header;
