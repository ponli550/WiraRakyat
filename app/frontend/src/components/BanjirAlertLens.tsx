"use client";

import React, { useState, useRef } from 'react';
import { Waves, AlertTriangle, Map, Settings, Home, Radio, Thermometer, Droplets } from 'lucide-react';
import { useGemini } from '@/hooks/useGemini';
import { useWiraStore } from '@/store/useWiraStore';

interface ReportData {
   severity: 'LOW' | 'MEDIUM' | 'HIGH';
   message: string;
   waterLevel: string;
   rise: string;
}

export const BanjirAlertLens = () => {
   const { processImage, loading, error } = useGemini();
   const [reportData, setReportData] = useState<ReportData | null>(null);
   const { addAlert, setSelectedItem } = useWiraStore();
   const fileInputRef = useRef<HTMLInputElement>(null);

   const handleReport = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const prompt = "Analyze this image for flood or hazard severity in a Malaysian context. Determine if it is Low, Medium, or High risk. Provide a short localized warning message.";
      const result = await processImage(file, prompt);

      if (result) {
         const severityText = result.toUpperCase();
         const severity: 'LOW' | 'MEDIUM' | 'HIGH' =
            severityText.includes('HIGH') ? 'HIGH' :
               severityText.includes('MEDIUM') ? 'MEDIUM' : 'LOW';

         const newAlert: any = {
            id: `alert-${Math.random().toString(36).substr(2, 9)}`,
            severity,
            message: result,
            position: [Math.random() * 4 - 2, 0.2, Math.random() * 4 - 2] as [number, number, number],
            timestamp: new Date().toISOString(),
            type: 'ALERT' as const
         };

         setReportData({
            severity,
            message: result,
            waterLevel: severity === 'HIGH' ? '1.2m' : '0.3m',
            rise: severity === 'HIGH' ? '+0.4m rise' : '+0.1m'
         });

         addAlert(newAlert);
         setSelectedItem(newAlert); // Bidirectional focus
      }
   };

   return (
      <div className="flex flex-col h-full w-full bg-background-dark text-slate-100 font-display overflow-hidden rounded-2xl border border-white/10 glass-panel">
         <header className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-background-dark/80 backdrop-blur-md z-10">
            <div className="flex items-center gap-3">
               <div className="flex items-center justify-center size-10 rounded-lg bg-primary/20">
                  <AlertTriangle size={24} className="text-primary neon-glow" />
               </div>
               <h2 className="text-xl font-bold tracking-tight">Risk Reporting</h2>
            </div>
         </header>

         <main className="flex-1 overflow-y-auto p-4 space-y-6">
            <section className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 min-h-[200px] flex items-center justify-center">
               {loading ? (
                  <div className="flex flex-col items-center gap-4">
                     <div className="size-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                     <p className="text-xs font-bold text-primary animate-pulse uppercase font-mono">Analyzing...</p>
                  </div>
               ) : reportData ? (
                  <div className="w-full">
                     <div className="relative h-48 bg-slate-800 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1547683905-f686c993aae5?q=80&w=1000&auto=format&fit=crop")' }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent" />
                        <div className="absolute bottom-4 left-6 flex items-end justify-between right-6">
                           <div>
                              <span className="text-primary text-[10px] font-bold uppercase tracking-widest font-mono">Status Check</span>
                              <h1 className="text-2xl font-bold">{reportData.severity} RISK</h1>
                           </div>
                           <div className={`${reportData.severity === 'HIGH' ? 'bg-hazard-red' : 'bg-hazard-orange'} text-white px-3 py-1 rounded font-black text-sm`}>
                              {reportData.severity}
                           </div>
                        </div>
                     </div>
                  </div>
               ) : (
                  <div className="flex flex-col items-center gap-4 opacity-30">
                     <Waves size={64} />
                     <p className="text-xs font-bold uppercase">No Active Report</p>
                  </div>
               )}
            </section>

            <div className="grid grid-cols-2 gap-4">
               <div className={`p-4 rounded-xl bg-slate-800/40 border border-white/5 flex flex-col gap-2 ${reportData ? 'animate-in zoom-in' : 'opacity-50'}`}>
                  <Droplets size={20} className="text-primary" />
                  <p className="text-slate-500 text-[10px] font-bold uppercase">Water Level</p>
                  <p className="text-2xl font-bold">{reportData?.waterLevel || '--'}</p>
                  <p className="text-hazard-orange text-[10px] font-medium">{reportData?.rise || ''}</p>
               </div>
               <div className={`p-4 rounded-xl bg-slate-800/40 border border-white/5 flex flex-col gap-2 ${reportData ? 'animate-in zoom-in' : 'opacity-50'}`}>
                  <Thermometer size={20} className="text-primary" />
                  <p className="text-slate-500 text-[10px] font-bold uppercase">Condition</p>
                  <p className="text-2xl font-bold">{reportData ? 'Heavy Rain' : '--'}</p>
                  <p className="text-slate-500 text-[10px]">Precipitation: 45mm</p>
               </div>
            </div>

            <nav className="grid grid-cols-4 gap-2">
               {[Home, AlertTriangle, Map, Settings].map((Icon, i) => (
                  <button key={i} className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-800/60 hover:bg-slate-700 transition-colors">
                     <Icon size={20} />
                  </button>
               ))}
            </nav>

            <div className="pt-4 pb-8">
               <input type="file" ref={fileInputRef} onChange={handleReport} className="hidden" accept="image/*" />
               <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full flex items-center justify-center gap-4 bg-primary text-background h-16 rounded-full neon-glow hover:brightness-110 active:scale-95 transition-all"
               >
                  <Radio size={28} />
                  <span className="text-lg font-black uppercase tracking-tighter">Report Risk</span>
               </button>
               <p className="text-center text-slate-500 text-[8px] font-bold uppercase mt-4 tracking-widest font-mono">Secure localized reporting via Wira</p>
            </div>
         </main>
      </div>
   );
};


