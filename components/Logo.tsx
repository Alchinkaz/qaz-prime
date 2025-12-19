import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="w-10 h-10 md:w-12 md:h-12 text-red-600 shrink-0">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Shield Outline */}
            <path 
                d="M50 96C50 96 88 80 88 40V12L50 3L12 12V40C12 80 50 96 50 96Z" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            
            {/* Ionic Column - Moved UP by 6 units to center vertically */}
            {/* Base */}
            <path d="M38 74H62" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            <path d="M41 70H59" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            
            {/* Shaft with Flutes */}
            <path d="M44 32V70" stroke="currentColor" strokeWidth="2.5"/>
            <path d="M50 32V70" stroke="currentColor" strokeWidth="2.5"/>
            <path d="M56 32V70" stroke="currentColor" strokeWidth="2.5"/>
            
            {/* Capital (Ionic Swirls) */}
            <path d="M35 26C35 26 34 30 38 30H62C66 30 65 26 65 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M37 26C37 23 39 22 41 22" stroke="currentColor" strokeWidth="2"/>
            <path d="M63 26C63 23 61 22 59 22" stroke="currentColor" strokeWidth="2"/>
            <path d="M41 22H59" stroke="currentColor" strokeWidth="2.5"/>

            {/* Scales - Moved UP by 6 units */}
            {/* Beam */}
            <path d="M25 29H75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            
            {/* Left Pan */}
            <path d="M25 29L20 44" stroke="currentColor" strokeWidth="1"/>
            <path d="M25 29L30 44" stroke="currentColor" strokeWidth="1"/>
            <path d="M18 44C18 44 25 50 32 44H18Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>

            {/* Right Pan */}
            <path d="M75 29L70 44" stroke="currentColor" strokeWidth="1"/>
            <path d="M75 29L80 44" stroke="currentColor" strokeWidth="1"/>
            <path d="M68 44C68 44 75 50 82 44H68Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className="text-2xl md:text-3xl font-serif text-white tracking-wide uppercase">
        QazPrime
      </span>
    </div>
  );
};