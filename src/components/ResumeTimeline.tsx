import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
  credlyLink?: string; // Add this prop to support Credly badges
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  period,
  description,
  icon,
  isLast = false,
  credlyLink
}) => {
  return (
    <div className={cn(
      "relative pl-10 pb-10",
      !isLast && "timeline-item"
    )}>
      <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent z-10">
        {icon}
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
        <h4 className="text-lg font-bold">{title}</h4>
        <div className="flex items-center gap-1.5 text-sm font-medium px-2.5 py-1 rounded-md bg-accent/5 text-accent/90 border border-accent/10">
          <Calendar size={14} />
          <span>{period}</span>
        </div>
      </div>
      
      <p className="text-accent/90 font-medium mb-2 text-left">{subtitle}</p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-foreground/70 text-left">{description}</p>
        
        {credlyLink && (
          <Button 
            variant="outline" 
            size="sm" 
            className="shrink-0 flex items-center gap-1.5 text-xs font-medium rounded-full h-8 border-accent/20 hover:border-accent/50 hover:bg-accent/5"
            onClick={() => window.open(credlyLink, '_blank')}
          >
            <ExternalLink size={14} />
            View Badge
          </Button>
        )}
      </div>
    </div>
  );
};

interface ResumeSectionProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ children, title, subtitle }) => {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-foreground/70 mb-6">{subtitle}</p>
      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
};

interface ResumeTimelineProps {
  section?: 'experience' | 'education' | 'certifications';
}

const ResumeTimeline: React.FC<ResumeTimelineProps> = ({ section = 'experience' }) => {
  // Choose title based on section
  const getTitle = () => {
    switch(section) {
      case 'experience': return 'Experience';
      case 'education': return 'Education';
      case 'certifications': return 'Certifications';
      default: return 'Timeline';
    }
  };

  return (
    <div className="animate-fade-in">
      <h3 className="text-2xl font-display font-bold mb-6 text-gradient-soft">{getTitle()}</h3>
      
      {/* Render only the relevant content based on section */}
      {section === 'experience' && (
        <div className="space-y-8">
          <ResumeSection 
            title="" 
            subtitle="My professional journey as a software developer"
          >
            <TimelineItem
              title="SDE Intern"
              subtitle="Vegam Solutions Delaware"
              period="2025 - Present"
              description="Led the end-to-end development of StockForge, an advanced cloud-based full-stack solution for inventory management, utilizing Django, AWS, and PostgreSQL. Achieved annual time savings of ≈250 man-hours."
              icon={<Briefcase size={14} />}
            />
            
            <TimelineItem
              title="Machine Learning Intern"
              subtitle="Dotch Endeavours pvt ltd"
              period="Oct - Nov 2023"
                description="Spearheaded the development of a Parkinson's disease prediction algorithm, leveraging neural networks and the ease of TensorFlow, achieving 92% accuracy. Supported departmental needs while gaining foundational knowledge in the Scikit-learn framework for machine learning. Utilized version control (Git) for code management and collaborated effectively using GitHub"
              icon={<Briefcase size={14} />}
            />
            
            {/* <TimelineItem
              title="Junior Web Developer"
              subtitle="Digital Agency Co."
              period="2016 - 2018"
              description="Built and maintained websites for various clients using HTML, CSS, and JavaScript. Assisted senior developers with larger projects and contributed to the agency's internal tools."
              icon={<Briefcase size={14} />}
              isLast={true}
            /> */}
          </ResumeSection>
        </div>
      )}
      
      {section === 'education' && (
        <div className="space-y-8">
          <ResumeSection 
            title="Education" 
            subtitle="Academic background and formal training"
          >
            <TimelineItem
              title="BE in Computer Science"
              subtitle="The National Institute of Engineering Mysuru"
              period="2021 - 2025"
              description="Specialized in Cloud Technologies, Machine Learning, and Full Stack Development beyond academic coursework."
              icon={<GraduationCap size={14} />}
            />
            
            <TimelineItem
              title="Class 5 - Class 12"
              subtitle="Sri Vidya Kendra"
              period="2014 - 2021"
              description="Studied CBSE board with a focus on Mathematics, Science and Computer Science." 
              icon={<GraduationCap size={14} />}
              isLast={true}
            />
          </ResumeSection>
        </div>
      )}
      
      {section === 'certifications' && (
        <div className="space-y-1">
          <ResumeSection 
            title="Certifications" 
            subtitle="Professional certifications and specialized training"
          >
            <TimelineItem
              title="AWS Knowledge:Architecting"
              subtitle="Amazon Web Services"
              period="2025"
              description="Cloud architecture fundamentals and best practices on AWS platform."
              icon={<Award size={14} />}
              // credlyLink="https://www.credly.com/users/yourprofile" // Replace with your actual Credly link
            />
            
            <TimelineItem
              title="IBM Data Analysis"
              subtitle="IBM"
              period="2024"
              description="Professional data analysis techniques and tools certified by IBM."
              icon={<Award size={14} />}
              // credlyLink="https://www.credly.com/users/yourprofile" // Replace with your actual Credly link
            />
            
            <TimelineItem
              title="Google Data Data Everywhere"
              subtitle="Google"
              period="2023"
              description="Data analytics fundamentals and practices by Google."
              icon={<Award size={14} />}
              isLast={true}
              // credlyLink="https://www.credly.com/users/yourprofile" // Replace with your actual Credly link
            />
            
            {/* Add this View Credly Profile button */}
            <div className="mt-10 flex justify-center">
              <Button
                variant="outline"
                className="rounded-full gap-2 font-medium hover:bg-accent/10 hover:text-accent border-accent/20 transition-colors"
                onClick={() => window.open("https://www.credly.com/users/bhuvan-kambley", "_blank")}
              >
                <Award size={18} />
                View All Badges on Credly
              </Button>
            </div>
          </ResumeSection>
        </div>
      )}
    </div>
  );
};

export default ResumeTimeline;