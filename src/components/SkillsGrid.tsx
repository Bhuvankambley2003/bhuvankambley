import React from 'react';
import { Code } from 'lucide-react';

interface SkillItemProps {
  name: string;
}

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillItem: React.FC<SkillItemProps> = ({ name }) => {
  return (
    <div className="py-3 px-4 bg-foreground/5 rounded-lg transition-all hover:bg-accent/10 hover:text-accent hover:-translate-y-0.5 hover:border-accent/20 border border-transparent">
      <span className="font-medium">{name}</span>
    </div>
  );
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="mb-8 last:mb-0">
      <h4 className="text-lg font-semibold mb-4 text-gradient-soft">{title}</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {skills.map((skill, index) => (
          <SkillItem key={index} name={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillsGrid: React.FC = () => {
  // Skills organized by category
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "C", "Java", ]
    },
    {
      title: "Backend & Databases",
      skills: ["MySQL", "Firebase", "MongoDB", "PostgreSQL", "SQL", "Django", "RESTful APIs"]
    },
    
    {
      title: "Tools & Cloud",
      skills: ["VS Code", "SnowFlake", "Youtrack", "Postman", "Git/GitHub", "Docker", "AWS"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["Machine Learning", "PyTorch", "TensorFlow", "Data Analysis"]
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-accent to-accent/50 text-white">
          <Code size={22} />
        </div>
        <h3 className="text-2xl font-display font-bold text-gradient-soft">Technical Skills</h3>
      </div>
      
      <div className="glass-card rounded-xl p-6 bg-background/80 backdrop-blur-sm border border-foreground/10 shadow-lg">
        {skillCategories.map((category, index) => (
          <SkillCategory 
            key={index} 
            title={category.title} 
            skills={category.skills} 
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;