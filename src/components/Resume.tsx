import React, { useState, useEffect, useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import { Briefcase, GraduationCap, Book, Award, Star, Trophy, User, ChevronDown, MousePointer } from 'lucide-react';
import { cn } from '@/lib/utils';
import ResumeTimeline from './ResumeTimeline';
import SkillsGrid from './SkillsGrid';

type Tab = 'about' | 'experience' | 'skills' | 'certifications' | 'education' | 'achievements';

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('about');
  const resumeContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<Tab, React.RefObject<HTMLDivElement>>>({
    about: React.createRef(),
    experience: React.createRef(),
    skills: React.createRef(),
    certifications: React.createRef(),
    education: React.createRef(),
    achievements: React.createRef(),
  });
  
  const tabs = [
    { id: 'about', label: 'About Me', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Star },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
  ] as const;

  // Handles the card stack navigation
  const handleCardScroll = (event: WheelEvent) => {
    // Only prevent default if we're actively scrolling the cards
    if (!resumeContainerRef.current) return;
    
    // Check if the event target is within the card container
    const container = resumeContainerRef.current;
    const target = event.target as Node;
    
    if (container.contains(target)) {
      // We're scrolling over the cards area
      event.preventDefault();
      
      const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
      
      // Determine scroll direction
      if (event.deltaY > 0) {
        // Scrolling down - move to next section
        const nextIndex = Math.min(currentIndex + 1, tabs.length - 1);
        const nextTab = tabs[nextIndex].id;
        if (nextTab !== activeTab) {
          setActiveTab(nextTab);
        } else if (nextIndex === tabs.length - 1) {
          // At the last card, allow scrolling down the page
          window.scrollBy({ top: 100, behavior: 'smooth' });
        }
      } else if (event.deltaY < 0) {
        // Scrolling up - move to previous section
        const prevIndex = Math.max(currentIndex - 1, 0);
        const prevTab = tabs[prevIndex].id;
        if (prevTab !== activeTab) {
          setActiveTab(prevTab);
        } else if (prevIndex === 0) {
          // At the first card, allow scrolling up the page
          window.scrollBy({ top: -100, behavior: 'smooth' });
        }
      }
    }
    // If not over cards area, let default scroll behavior happen
  };

  // Setup wheel event listener for card stack navigation
  useEffect(() => {
    // Using document level wheel event with a check for target
    document.addEventListener('wheel', handleCardScroll, { passive: false });
    
    return () => {
      document.removeEventListener('wheel', handleCardScroll);
    };
  }, [activeTab]);

  // Track scroll position in document for sidebar highlighting
  useEffect(() => {
    const handleDocumentScroll = () => {
      if (resumeContainerRef.current) {
        const containerRect = resumeContainerRef.current.getBoundingClientRect();
        // Only update active tab based on scroll when container is visible
        if (containerRect.top <= window.innerHeight && containerRect.bottom >= 0) {
          // Update sidebar highlight based on card visibility
          const visibleRatio = Math.min(
            Math.max(0, (window.innerHeight - containerRect.top) / window.innerHeight),
            1
          );
          
          // If cards are mostly visible, keep the active tab as is
          if (visibleRatio > 0.5) {
            // No need to change activeTab since it's already set by card navigation
          }
        }
      }
    };

    window.addEventListener('scroll', handleDocumentScroll);
    // Initial check
    handleDocumentScroll();
    
    return () => window.removeEventListener('scroll', handleDocumentScroll);
  }, []);

  const scrollToSection = (tabId: Tab) => {
    setActiveTab(tabId);
    
    // Ensure the cards container is in view
    if (resumeContainerRef.current) {
      const containerRect = resumeContainerRef.current.getBoundingClientRect();
      if (containerRect.top < 0 || containerRect.bottom > window.innerHeight) {
        resumeContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <AnimatedSection id="resume" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-accent uppercase rounded-full bg-accent/10 mb-4">
            Resume
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto rounded-full mb-6"></div>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            I am a software engineer driven by curiosity, innovation, and the pursuit of excellence
          </p>
        </div>
        
        {/* Navigation instruction - moved here */}
        <div className="text-center mb-10 animate-pulse">
          <div className="flex flex-col items-center justify-center text-foreground/60">
            <MousePointer size={20} className="rotate-90 mb-2" />
            <p className="text-sm font-medium">Scroll over cards to navigate through sections</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mt-6">
          {/* Visual timeline navigation */}
          <div className="md:w-1/5 lg:w-1/6">
            <div className="sticky top-24 mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-accent/20"></div>
                
                {tabs.map((tab, index) => (
                  <div 
                    key={tab.id} 
                    className="relative mb-6 last:mb-0 pl-12 cursor-pointer group"
                    onClick={() => scrollToSection(tab.id)}
                  >
                    <div 
                      className={cn(
                        "absolute left-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                        activeTab === tab.id 
                          ? "bg-accent text-white scale-110" 
                          : "bg-foreground/5 text-foreground/70 group-hover:bg-foreground/10"
                      )}
                    >
                      <tab.icon size={16} />
                    </div>
                    <div 
                      className={cn(
                        "font-medium transition-all duration-300",
                        activeTab === tab.id 
                          ? "text-accent scale-105 translate-x-1" 
                          : "text-foreground/70 group-hover:text-foreground/90"
                      )}
                    >
                      {tab.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Card-stack content area */}
          <div 
            ref={resumeContainerRef}
            className="md:w-4/5 lg:w-5/6 relative h-[800px]"
          >
            {/* Stacked Cards */}
            {tabs.map((tab, index) => {
              const isActive = tab.id === activeTab;
              const tabIndex = tabs.findIndex(t => t.id === activeTab);
              const cardIndex = tabs.findIndex(t => t.id === tab.id);
              const offset = cardIndex - tabIndex;
              
              return (
                <div
                  key={tab.id}
                  ref={sectionRefs.current[tab.id]}
                  className={cn(
                    "absolute w-full top-0 rounded-2xl transition-all duration-500 ease-in-out shadow-xl border",
                    isActive
                      ? "z-40 opacity-100 translate-y-0 scale-100 bg-background border-foreground/10"
                      : offset > 0
                      ? `z-${30 - offset * 10} opacity-${Math.max(80 - offset * 20, 0)} translate-y-${offset * 5} scale-${Math.max(95 - offset * 5, 70)} bg-foreground/5 border-foreground/10`
                      : "z-0 opacity-0 -translate-y-8 scale-95 pointer-events-none bg-foreground/10 border-foreground/20"
                  )}
                  style={{
                    transform: isActive 
                      ? 'translateY(0) scale(1)' 
                      : offset > 0
                        ? `translateY(${offset * 20}px) scale(${Math.max(1 - offset * 0.05, 0.8)})` 
                        : 'translateY(-32px) scale(0.95)',
                    opacity: isActive 
                      ? 1 
                      : offset > 0 
                        ? Math.max(0.8 - offset * 0.2, 0) 
                        : 0,
                    zIndex: isActive ? 40 : offset > 0 ? 30 - offset * 10 : 0,
                  }}
                >
                  {/* Content based on tab type */}
                  <div className="glass-card rounded-2xl p-8 h-full overflow-y-auto max-h-[800px]">
                    {tab.id === 'about' && (
                      <div className="animate-fade-in space-y-6">
                        <h3 className="text-2xl font-display font-bold mb-6 text-gradient-soft">About Me</h3>
                        <div className="space-y-4 text-foreground/80">
                          <div className="flex flex-col lg:flex-row gap-8">
                            <div className="lg:w-3/5 space-y-6">
                              <p className="leading-relaxed text-left">
                                I'm a <span className="font-semibold text-foreground">passionate software developer</span> With a strong foundation in machine learning, cloud technologies & software development, I specialize in building intelligent systems that help solve business problems.
                              </p>
                              <p className="leading-relaxed text-left">
                                I love <span className="font-semibold text-foreground">solving business problems</span>, with my creative and simulative mind. I believe in putting myself in the end user's position before proposing a solution.
                              </p>
                              <p className="leading-relaxed text-left">
                                I thrive on <span className="font-semibold text-foreground">continuous learning and adaptability</span>, exploring new tools to stay ahead in the evolving IT landscape. Whether developing software, optimizing systems, or automating processes, I'm driven to build impactful solutions. Now seeking a full-time role to contribute, grow, and make a difference.
                              </p>
                            </div>
                            <div className="lg:w-2/5 glass-dark rounded-xl p-6">
                              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-left">
                                <User size={18} className="text-accent" />
                                Professional Details
                              </h4>
                              <div className="space-y-4">
                                <div className="grid grid-cols-3 gap-1 py-3 border-b border-foreground/5">
                                  <div className="text-foreground/70 text-left">Name:</div>
                                  <div className="col-span-2 font-medium text-left">P Bhuvan Kambley</div>
                                </div>
                                <div className="grid grid-cols-3 gap-1 py-3 border-b border-foreground/5">
                                  <div className="text-foreground/70 text-left">Location:</div>
                                  <div className="col-span-2 font-medium text-left">Bengaluru, India</div>
                                </div>
                                <div className="grid grid-cols-3 gap-1 py-3 border-b border-foreground/5">
                                  <div className="text-foreground/70 text-left">Experience:</div>
                                  <div className="col-span-2 font-medium text-left">Intern</div>
                                </div>
                                <div className="grid grid-cols-3 gap-1 py-3 border-b border-foreground/5">
                                  <div className="text-foreground/70 text-left">Availability:</div>
                                  <div className="col-span-2 font-medium text-left">Full-time</div>
                                </div>
                                <div className="grid grid-cols-3 gap-1 py-3">
                                  <div className="text-foreground/70 text-left">Languages:</div>
                                  <div className="col-span-2 font-medium text-left">English, Hindi, Marathi, Kannada, Tamil</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {tab.id === 'experience' && <ResumeTimeline section="experience" />}
                    
                    {tab.id === 'skills' && <SkillsGrid />}
                    
                    {tab.id === 'certifications' && <ResumeTimeline section="certifications" />}
                    
                    {tab.id === 'education' && <ResumeTimeline section="education" />}
                    
                    {tab.id === 'achievements' && (
                      <div className="animate-fade-in">
                        <h3 className="text-2xl font-display font-bold mb-6 text-gradient-soft">Achievements </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                          {/* Achievement Item */}
                          <div className="glass-dark rounded-xl p-6 card-hover">
                            <div className="flex gap-4">
                              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items justify-center text-accent">
                                <Trophy size={24} />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold">Runner-up in National Level Hackathon 2024</h4>
                                <p className="text-sm text-accent mb-1">PES Mandya</p>
                                <p className="text-foreground/70">
                                  Competing among 70 teams, we designed the Groupie app, which featured real-time chat for doubt solving, file sharing, and a scheduling calendar.
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          {/* <div className="glass-dark rounded-xl p-6 card-hover">
                            <div className="flex gap-4">
                              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                                <Trophy size={24} />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold">Open Source Contributor Award</h4>
                                <p className="text-sm text-accent mb-1">GitHub Stars 2021</p>
                                <p className="text-foreground/70">
                                  Recognized for significant contributions to React ecosystem projects.
                                </p>
                              </div>
                            </div>
                          </div> */}
                          
                          {/* <div className="glass-dark rounded-xl p-6 card-hover">
                            <div className="flex gap-4">
                              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                                <Trophy size={24} />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold">Best Technical Blog Series</h4>
                                <p className="text-sm text-accent mb-1">DEV Community Awards 2020</p>
                                <p className="text-foreground/70">
                                  Awarded for an in-depth tutorial series on advanced React patterns.
                                </p>
                              </div>
                            </div>
                          </div> */}
                          
                          {/* <div className="glass-dark rounded-xl p-6 card-hover">
                            <div className="flex gap-4">
                              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                                <Trophy size={24} />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold">Performance Optimization Award</h4>
                                <p className="text-sm text-accent mb-1">Web Performance Summit 2019</p>
                                <p className="text-foreground/70">
                                  Recognized for achieving 98% Lighthouse performance score on complex web application.
                                </p>
                              </div>
                            </div>
                          </div> */}





                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Resume;