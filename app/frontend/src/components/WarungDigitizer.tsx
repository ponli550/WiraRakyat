"use client";

import React, { useState, useRef } from 'react';
import { Camera, RefreshCw, Save, Image as ImageIcon, History, Zap } from 'lucide-react';
import { useGemini } from '@/hooks/useGemini';
import { useWiraStore } from '@/store/useWiraStore';

interface Item {
   name: string;
   price: string;
}

export const WarungDigitizer = () => {
   const { processImage, loading, error } = useGemini();
   const [scannedItems, setScannedItems] = useState<Item[]>([]);
   const [progress, setProgress] = useState(0);
   const { addWarung, setSelectedItem } = useWiraStore();
   const fileInputRef = useRef<HTMLInputElement>(null);

   const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setProgress(10);
      const mockPrompt = "Analyze this menu image. Extract items and prices as a JSON array of objects with 'name' and 'price' fields. Also generate a short marketing copy in Manglish.";

      // Simulate progress
      const interval = setInterval(() => {
         setProgress((prev: number) => (prev < 90 ? prev + 5 : prev));
      }, 500);

      const result = await processImage(file, mockPrompt);
      clearInterval(interval);
      setProgress(100);

      if (result) {
         try {
            // Very simplified JSON extraction logic
            const jsonMatch = result.match(/\[.*\]/s);
            if (jsonMatch) {
               const items = JSON.parse(jsonMatch[0]);
               setScannedItems(items);

               // Wire to global store
               const newWarung = {
                  id: `warung-${Math.random().toString(36).substr(2, 9)}`,
                  name: "New AI-Digitized Warung",
                  items,
                  description: "Digitized via Wira AI Lens",
                  position: [Math.random() * 4 - 2, 0.5, Math.random() * 4 - 2] as [number, number, number],
                  type: 'WARUNG' as const
               };
               addWarung(newWarung);
               setSelectedItem(newWarung);
            }
         } catch (e) {
            console.error("Failed to parse Gemini result", e);
         }
      }
   };

   return (
      <div className="relative flex flex-col items-center justify-center h-full w-full bg-background-dark overflow-hidden rounded-2xl border border-primary/20 glass-panel">
         {/* Viewfinder area */}
         <div className="absolute inset-0 z-0 bg-slate-900/50 flex items-center justify-center">
            {!loading && scannedItems.length === 0 && (
               <div className="text-slate-500 flex flex-col items-center gap-4">
                  <Camera size={64} className="opacity-20" />
                  <p className="text-xs font-bold uppercase tracking-widest">Awaiting Capture</p>
               </div>
            )}

            {loading && (
               <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
                  <div className="w-64 h-80 border-2 border-primary/50 rounded-xl relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 shadow-[0_0_15px_#06f9f9] animate-scan" />
                  </div>
                  <div className="mt-8 text-center">
                     <p className="text-primary text-sm font-bold animate-pulse">Scanning... {progress}%</p>
                     <p className="text-slate-400 text-[10px] mt-1">Analyzing menu structure & pricing</p>
                  </div>
               </div>
            )}
         </div>

         {/* Scanned Results Overlay */}
         {scannedItems.length > 0 && !loading && (
            <div className="absolute top-4 left-4 right-4 z-20 space-y-3">
               {scannedItems.map((item, i) => (
                  <div key={i} className="glass-panel p-3 rounded-lg border-primary/30 flex justify-between items-center animate-in fade-in slide-in-from-left-4">
                     <div>
                        <p className="text-xs font-bold text-white">{item.name}</p>
                        <p className="text-[10px] text-primary">RM {item.price}</p>
                     </div>
                     <Zap size={14} className="text-primary" />
                  </div>
               ))}
            </div>
         )}

         {/* Controls */}
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-8">
            <button className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
               <ImageIcon size={24} className="text-white" />
               <span className="text-[10px] text-white font-bold uppercase">Gallery</span>
            </button>

            <input
               type="file"
               ref={fileInputRef}
               onChange={handleUpload}
               className="hidden"
               accept="image/*"
            />

            <button
               onClick={() => fileInputRef.current?.click()}
               className="relative size-16 rounded-full border-4 border-white/30 p-1 flex items-center justify-center group active:scale-95 transition-transform"
            >
               <div className="size-full rounded-full bg-white" />
               <div className="absolute -top-2 -right-2 bg-primary text-background text-[8px] font-bold px-1.5 py-0.5 rounded-full">AI</div>
            </button>

            <button className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
               <History size={24} className="text-white" />
               <span className="text-[10px] text-white font-bold uppercase">Recent</span>
            </button>
         </div>

         {error && (
            <div className="absolute top-4 bg-hazard-red/80 text-white px-4 py-2 rounded-lg text-xs font-bold">
               {error}
            </div>
         )}

         <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(320px); }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
      </div>
   );
};
