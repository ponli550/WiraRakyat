"use client";

import React, { useState } from 'react';
import { Languages, ChevronDown, Check } from 'lucide-react';

const LANGUAGES = [
   { id: 'en', name: 'English', label: 'EN' },
   { id: 'ms', name: 'Bahasa Melayu', label: 'MS' },
   { id: 'kn', name: 'Kelantanese', label: 'KN' },
   { id: 'sw', name: 'Sarawakian', label: 'SW' },
];

export const DialectSelector = () => {
   const [current, setCurrent] = useState(LANGUAGES[0]);
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="relative">
         <button
            onClick={() => setIsOpen(!isOpen)}
            className="glass-panel rounded-xl px-3 py-1.5 flex items-center gap-2 hover:border-primary/50 transition-colors"
         >
            <Languages size={16} className="text-primary" />
            <span className="text-sm font-bold">{current.label}</span>
            <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
         </button>

         {isOpen && (
            <div className="absolute top-full mt-2 right-0 w-48 glass-panel rounded-xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
               <div className="p-2 flex flex-col gap-1">
                  {LANGUAGES.map((lang) => (
                     <button
                        key={lang.id}
                        onClick={() => {
                           setCurrent(lang);
                           setIsOpen(false);
                        }}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${current.id === lang.id ? 'bg-primary/20 text-primary' : 'hover:bg-white/5 text-slate-400'
                           }`}
                     >
                        <div className="flex flex-col items-start">
                           <span className="font-bold">{lang.label}</span>
                           <span className="text-[10px] opacity-60">{lang.name}</span>
                        </div>
                        {current.id === lang.id && <Check size={14} />}
                     </button>
                  ))}
               </div>
               <div className="bg-primary/10 p-2 border-t border-primary/20">
                  <p className="text-[9px] text-center text-primary font-medium italic">
                     "Dialect-First Interface"
                  </p>
               </div>
            </div>
         )}
      </div>
   );
};
