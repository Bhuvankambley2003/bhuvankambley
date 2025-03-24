import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { ArrowUpRight, Github, Globe, Code, ExternalLink, X, Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

// Project type definition
type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string; // Make image optional
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Your projects array - easily add or remove projects by modifying this array
  const projects: Project[] = [
    {
      id: 1,
      title: "Leveraging Pytorch to predict Blood Group Using fingerprint",
      description: "Developed a deep learning model using CNN in PyTorch to predict blood groups from fingerprint images with high accuracy. Designed and deployed a RESTful API backend for model inference and a Streamlit-based frontend for user interaction. Implemented Docker containerization for seamless deployment and scalability.",
      tags: ["Pytorch", "Streamlit", "FastAPI", "Docker"],
      image: "/blood.png",
      githubUrl: "https://github.com/Bhuvankambley2003/Leveraging-PyTorch-CNN-for-Blood-Group-Prediction-using-Fingerprint-Images",
      
    },
    {
      id: 2,
      title: "StockForge",
      description: "A professional-grade inventory management system for manufacturing enterprises. StockForge provides real-time control over multi-component production workflows, from raw material procurement to finished goods deployment. Features include automated stock reconciliation, BOM management, and enterprise-grade reporting.",
      tags: ["Django", "PostgreSQL", "HTML", "CSS", "Docker"],
      image: "/dashboard.png",
      githubUrl: "https://github.com/Bhuvankambley2003/StockForge",
      featured: true
    },
    {
      id: 3,
      title: "Sahaya",
      description: "Solution for Google GDSC 2024 addressing UN sustainable goals with features for education, poverty, and hunger, received positive feedback from over 20 people and Google. Implemented features to support sustainable cities, no poverty, quality education, and zero hunger. Integrated cloud services and authentication to enhance app capabilities.",
      tags: ["Flutter", "Firebase", "OpenAI API"],
      image: "/sahaya.png",
      githubUrl: "https://github.com/Bhuvankambley2003/sahaya/tree/master",
      featured: false
    },
    // {
    //   id: 4,
    //   title: "RAGSummarizer",
    //   description: "A Python project built to summarize webpages from specified URLs using the LangChain framework and the DeepSeek-r1 7b model. This tool leverages advanced language models to generate detailed summaries, with added features like translation and YouTube video summarization, making it highly valuable for quickly understanding online content.",
    //   tags: ["Langchain", "BeautifulSoup", "Ollama", "Docker"],
    //   image: "src/components/screenshots/dashboard.png",
    //   githubUrl: "https://github.com/Bhuvankambley2003/web-summarizer-using-langchain"
    // },
    {
      id: 5,
      title: "Invoice Management System",
      description: "Developed a full stack web application using Django and MySQL to handle CRUD operations efficiently. Implemented CRUD operations to streamline invoice processing and database management. Built a responsive front-end with HTML and CSS, ensuring an intuitive user experience.",
      tags: ["Django", "MySQL", "HTML", "CSS", "Docker"],
      image: "/invoice.png",
      githubUrl: "https://github.com/Bhuvankambley2003/invoice_management_system/tree/master"
    },
    {
      id: 6,
      title: "Event Management Application",
      description: "Developed a full stack web application using Django and SQLite to manage events and registrations. Implemented CRUD operations to streamline event, attendee, and task management. Built RESTful API endpoints for integration and a responsive frontend, ensuring an intuitive user experience.",
      tags: ["Django", "SQLite", "RestAPI", "Postman","Docker"],
      image:"/event.png",
      githubUrl: "https://github.com/Bhuvankambley2003/event_management_application"
    }
  ];

  // Handle ESC key to close project modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedProject]);
  
  // Color mapping for tags
  const getTagColor = (tag: string) => {
    const tagColorMap: Record<string, string> = {
      // Frameworks & Libraries
      "React": "bg-blue-500/10 text-accent",
      "Vue": "bg-blue-500/10 text-accent",
      "Angular": "bg-blue-500/10 text-accent",
      "Django": "bg-blue-500/10 text-accent",
      "Flutter": "bg-blue-500/10 text-accent",
      "Langchain": "bg-blue-500/10 text-accent",

      // Languages
      "TypeScript": "bg-blue-500/10 text-accent",
      "JavaScript": "bg-blue-500/10 text-accent",
      "Python": "bg-blue-500/10 text-accent",
      "HTML": "bg-blue-500/10 text-accent",
      "CSS": "bg-blue-500/10 text-accent",

      // AI & ML
      "Pytorch": "bg-blue-500/10 text-accent",
      "OpenAI API": "bg-blue-500/10 text-accent",
      "Ollama": "bg-blue-500/10 text-accent",

      // Databases
      "PostgreSQL": "bg-blue-500/10 text-accent",
      "MySQL": "bg-blue-500/10 text-accent",
      "SQLite": "bg-blue-500/10 text-accent",
      "Firebase": "bg-blue-500/10 text-accent",

      // Tools & Infrastructure
      "Docker": "bg-blue-500/10 text-accent",
      "RestAPI": "bg-blue-500/10 text-accent",
      "Postman": "bg-blue-500/10 text-accent",
      "FastAPI": "bg-blue-500/10 text-accent",
      "Streamlit": "bg-blue-500/10 text-accent",
      "BeautifulSoup": "bg-blue-500/10 text-accent",
    };
    
    return tagColorMap[tag] || "bg-foreground/10 text-foreground/70";
  };

  // Function to get project accent color based on first tag
  const getProjectAccentColor = (project: Project) => {
    if (project.tags.length > 0) {
      const firstTag = project.tags[0];
      const colorClass = getTagColor(firstTag);
      // Extract the color from the class (e.g., "bg-blue-500/10" -> "blue-500")
      const match = colorClass.match(/bg-([a-z]+-[0-9]+)/);
      if (match && match[1]) {
        return match[1];
      }
    }
    return "blue-500"; // Default accent color
  };

  return (
    <AnimatedSection id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider bg-blue-500/10 text-accent uppercase rounded-full bg-accent/10 mb-4">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
            My Recent Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto rounded-full mb-6"></div>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Here are some projects I've worked on recently.
          </p>
        </div>
        
        {/* Featured Projects (if any) */}
        {projects.some(p => p.featured) && (
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 border-b border-foreground/10 pb-2">
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).map((project) => (
                <div 
                  key={project.id}
                  className="rounded-xl overflow-hidden border border-foreground/10 bg-foreground/[0.02] hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  {/* Project Image - Only render if image URL is provided */}
                  {project.image ? (
                    <div className="h-56 overflow-hidden relative">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-accent text-white text-xs px-2 py-1 rounded-md">
                          Featured
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className={`h-56 overflow-hidden relative bg-gradient-to-r from-${getProjectAccentColor(project)}/5 to-${getProjectAccentColor(project)}/10 flex items-center justify-center`}>
                      <ImageIcon className={`text-${getProjectAccentColor(project)}/20 w-16 h-16`} />
                      <div className="absolute top-3 left-3">
                        <span className="bg-accent text-white text-xs px-2 py-1 rounded-md">
                          Featured
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-foreground/70 text-sm mb-4 flex-grow">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6 text-center justify-center">
                      {project.tags.map(tag => (
                        <span 
                          key={tag}
                          className={cn(
                            "inline-block px-3 py-1 text-xs font-medium rounded-full",
                            getTagColor(tag)
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="bg-blue-500/10 text-accent hover:bg-blue-500/10 text-accent/80 font-medium text-sm flex items-center  px-1 py-1 rounded-full"
                      >
                        {/* View details */}
                        {/* <ArrowUpRight size={16} /> */}
                      </button>
                      
                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors flex items-center justify-center"
                            title="GitHub Repository"
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
                            title="Live Demo"
                          >
                            <Globe size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* All Projects */}
        <div>
          <h3 className="text-xl font-semibold mb-6 border-b border-foreground/10 pb-2">
            All Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => !p.featured).map((project) => (
              <div 
                key={project.id}
                className="rounded-xl overflow-hidden border border-foreground/10 bg-foreground/[0.02] hover:shadow-lg transition-all duration-300 h-[580px] flex flex-col"
              >
                {/* Project Image - Only render if image URL is provided */}
                {project.image ? (
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                ) : (
                  <div className={`h-48 overflow-hidden relative bg-gradient-to-r from-${getProjectAccentColor(project)}/5 to-${getProjectAccentColor(project)}/10 flex items-center justify-center`}>
                    <ImageIcon className={`text-${getProjectAccentColor(project)}/20 w-12 h-12`} />
                  </div>
                )}
                
                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-2 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6 text-center justify-center">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className={cn(
                          "inline-block px-3 py-1 text-xs font-medium rounded-full",
                          getTagColor(tag)
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex justify-between items">
                    <button
                      onClick={() => setSelectedProject(project)}
                      // place it below for details bg-blue-500/10 text-accent hover:bg-blue-500/10 text-accent/80 font-medium text-sm flex items-center  px-1 py-1 rounded-full
                      className=""
                    >
                      {/* View Details */}
                      {/* <ArrowUpRight size={16} /> */}
                    </button>
                    
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors flex items-center justify-center"
                          title="GitHub Repository"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors flex items-center justify-center"
                          title="Live Demo"
                        >
                          <Globe size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-background rounded-xl max-w-3xl w-full max-h-[85vh] overflow-hidden border border-foreground/10">
              {/* Header Image - Only render if image URL is provided */}
              {selectedProject.image ? (
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>
                </div>
              ) : (
                <div className={`relative h-60 overflow-hidden bg-gradient-to-r from-${getProjectAccentColor(selectedProject)}/5 to-${getProjectAccentColor(selectedProject)}/10 flex items-center justify-center`}>
                  <ImageIcon className={`text-${getProjectAccentColor(selectedProject)}/20 w-24 h-24`} />
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>
                </div>
              )}
              
              {/* Project Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(85vh-15rem)]">
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6 text-center justify-center">
                  {selectedProject.tags.map(tag => (
                    <span 
                      key={tag}
                      className={cn(
                        "inline-block px-3 py-1 text-xs font-medium rounded-full",
                        getTagColor(tag)
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                <div className="border-t border-foreground/10 pt-4 mt-4">
                  <h4 className="text-lg font-medium mb-2 flex items-center gap-2 text-left">
                    <Code size={18} className="bg-blue-500/10 text-accent" />
                    Technical Details
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-foreground/70 pl-2 text-left">
                    <li>Built with {selectedProject.tags.join(', ')}</li>
                    <li>Responsive design for all device sizes</li>
                    <li>Clean, maintainable code architecture</li>
                  </ul>
                </div>
              </div>
              
              {/* Footer Actions - Only show buttons if URLs are provided */}
              <div className="p-4 border-t border-foreground/10 flex justify-end gap-4">
                {selectedProject.githubUrl && (
                  <a 
                    href={selectedProject.githubUrl} 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>View Repository</span>
                  </a>
                )}
                {selectedProject.demoUrl && (
                  <a 
                    href={selectedProject.demoUrl} 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span>View Live</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Animation styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </AnimatedSection>
  );
};

export default Projects;