
import React from 'react';
import { cn } from '@/lib/utils';

const AnimatedBackground: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("fixed inset-0 -z-10 overflow-hidden", className)}>
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-blue-50/60 via-blue-50/30 to-transparent dark:from-gray-900/60 dark:via-gray-900/30" />
      
      {/* Code pattern */}
      <div className="absolute inset-0 opacity-[0.07] dark:opacity-[0.15]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 40 L40 20 L60 40 L40 60 Z' fill='none' stroke='%23333' stroke-width='1'/%3E%3Cpath d='M40 20 L80 20 L80 60 L40 60 Z' fill='none' stroke='%23333' stroke-width='1'/%3E%3Cpath d='M0 80 L20 60 L60 60 L40 80 Z' fill='none' stroke='%23333' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute top-[15%] left-[10%] w-40 h-40 rounded-full bg-blue-200/30 dark:bg-blue-500/10 animate-float opacity-70" />
      <div className="absolute top-[30%] right-[15%] w-64 h-64 rounded-full bg-indigo-200/30 dark:bg-indigo-500/10 animate-float animation-delay-200 opacity-60" />
      <div className="absolute bottom-[20%] left-[20%] w-52 h-52 rounded-full bg-purple-200/30 dark:bg-purple-500/10 animate-float animation-delay-400 opacity-55" />
      <div className="absolute bottom-[25%] right-[25%] w-36 h-36 rounded-full bg-cyan-200/30 dark:bg-cyan-500/10 animate-float animation-delay-600 opacity-60" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmMGYwZjAiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNTkuNSA1OS41VjBtMCA1OS41SDBtNTkuNSAwTDAgMG01OS41IDBMMCAzMG0zMCAyOS41TC0uNSAwbTYwIDBMMzAgNTkuNU0wIDMwaDYwIiBzdHJva2Utb3BhY2l0eT0iLjAyIiBzdHJva2U9IiMwMDAiLz48L2c+PC9zdmc+')] opacity-40 dark:opacity-20" />
      
      {/* Digital stream effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-40">
        <div className="absolute top-0 left-[10%] h-full w-px bg-gradient-to-b from-transparent via-accent/70 to-transparent animate-pulse-soft" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-0 left-[20%] h-full w-px bg-gradient-to-b from-transparent via-accent/70 to-transparent animate-pulse-soft" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-0 left-[30%] h-full w-px bg-gradient-to-b from-transparent via-accent/70 to-transparent animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-[40%] h-full w-px bg-gradient-to-b from-transparent via-accent/70 to-transparent animate-pulse-soft" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-0 left-[50%] h-full w-px bg-gradient-to-b from-transparent via-accent/70 to-transparent animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 left-[60%] h-full w-px bg-gradient-to-b from-transparent via-accent/70 to-transparent animate-pulse-soft" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-0 left-[70%] h-full w-px bg-gradient-to-b from-transparent via-accent/70 to-transparent animate-pulse-soft" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-0 left-[80%] h-full w-px bg-gradient-to-b from-transparent via-accent/70 to-transparent animate-pulse-soft" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute top-0 left-[90%] h-full w-px bg-gradient-to-b from-transparent via-accent/70 to-transparent animate-pulse-soft" style={{ animationDelay: '4s' }}></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
