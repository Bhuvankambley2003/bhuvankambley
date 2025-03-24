import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, ArrowRight, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Contact: React.FC = () => {
  return (
    <AnimatedSection id="contact" className="py-20 px-6 relative code-effect">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-accent uppercase rounded-full bg-accent/10 mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Say Hello👋</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto rounded-full mb-6"></div>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            I'm currently available for full-time positions. If you have a project that needs coding or a team that needs a developer, feel free to reach out.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-8 shadow-lg overflow-hidden relative">
              <div className="absolute inset-0 overflow-hidden z-[-1]">
                <div className="absolute inset-0 bg-gradient-radial from-accent/5 to-transparent opacity-60"></div>
              </div>
              
              <h3 className="text-xl font-display font-bold mb-6">Send Me a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="Subject"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  className="w-full py-6 flex items-center justify-center gap-2 text-white dark:text-black font-medium rounded-lg group"
                >
                  <span>Send Message</span>
                  <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <div className="glass-card rounded-2xl p-8 flex-1 shadow-lg">
              <h3 className="text-lg md:text-xl font-display font-bold mb-5">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <Mail size={18} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-xs md:text-sm text-foreground/60 mb-1">Email</p>
                    <a 
                      href="mailto:pbhuvankambley2003@gmail.com" 
                      className="text-sm md:text-lg text-foreground font-medium hover:text-accent transition-colors break-words"
                    >
                      pbhuvankambley2003@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <Phone size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs md:text-sm text-foreground/60 mb-1">Phone</p>
                    <a 
                      href="tel:+919110260591" 
                      className="text-sm md:text-lg text-foreground font-medium hover:text-accent transition-colors"
                    >
                      +91 9110260591
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <MapPin size={18} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-xs md:text-sm text-foreground/60 mb-1">Location</p>
                    <p className="text-sm md:text-lg text-foreground font-medium">Bengaluru, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-foreground/5 display-flex">
                <p className="text-xs md:text-sm text-foreground/60 mb-4">Find me on social media</p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full invisible"
                    aria-hidden="true"
                  ></a>
                  <a
                    href="#"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full invisible"
                    aria-hidden="true"
                  ></a>
                  

                  <a 
                    href="https://github.com/Bhuvankambley2003" 
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-foreground/5 hover:bg-accent/10 hover:text-accent flex items-center  justify-center transition-colors border border-foreground/10"
                    aria-label="GitHub Profile"
                  >
                    <Github size={16} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/bhuvankambley/" 
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-foreground/5 hover:bg-accent/10 hover:text-accent flex items-center justify-center transition-colors border border-foreground/10"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a 
                    href="https://x.com/BKambley" 
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-foreground/5 hover:bg-accent/10 hover:text-accent flex items-center justify-center transition-colors border border-foreground/10"
                    aria-label="Twitter Profile"
                  >
                    <Twitter size={16} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-accent to-blue-600 text-white shadow-lg overflow-hidden relative">
              <div className="absolute top-0 right-0 opacity-10">
                <svg width="140" height="140" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#fff" d="M0 97.6L60 0h80v140H0z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-display font-bold mb-3">Available for Opportunities</h3>
              <p className="text-white/90 mb-6 max-w-sm">
                I'm currently available for freelance projects and full-time positions. Let's build something amazing together.
              </p>
              <a 
                href="mailto:hello@example.com" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-accent font-medium rounded-lg hover:bg-white/90 transition-colors group"
              >
                <span>Let's Talk</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
