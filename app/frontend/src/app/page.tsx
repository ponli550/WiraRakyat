import { ThreeMap } from "@/components/ThreeMap";
import { WarungDigitizer } from "@/components/WarungDigitizer";
import { BanjirAlertLens } from "@/components/BanjirAlertLens";
import { DialectSelector } from "@/components/DialectSelector";
import { useWiraStore } from "@/store/useWiraStore";
import { Search as SearchIcon, LayoutGrid as DashboardIcon, Bell, Settings as SettingsIcon, ShieldAlert, TrendingUp as TrendingIcon, Navigation, Plus, Minus } from "lucide-react";

export default function Home() {
  const { selectedItem, setSelectedItem } = useWiraStore();
  return (
    <div className="relative h-screen w-full flex flex-col overflow-hidden bg-background text-foreground font-display">
      {/* 3D Map Background */}
      <div className="absolute inset-0 z-0">
        <ThreeMap />
      </div>

      {/* Top Navigation */}
      <header className="relative z-20 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary rounded-lg text-background">
            <DashboardIcon size={24} strokeWidth={3} />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Warung Wira</h1>
            <p className="text-primary text-[10px] font-bold tracking-widest uppercase">Future SME Hub</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <DialectSelector />
          <button className="glass-panel p-2.5 rounded-xl hover:text-primary transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-hazard-red rounded-full border-2 border-background"></span>
          </button>
        </div>
      </header>

      {/* Main UI Overlay */}
      <main className="relative z-10 flex-1 flex flex-col justify-between p-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 h-full">
          {/* Sidebar Navigation */}
          <nav className="glass-panel rounded-2xl p-3 flex flex-col gap-2 w-full lg:w-64">
            <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary border border-primary/20" href="#">
              <DashboardIcon size={18} />
              <span className="font-medium text-sm">Dashboard</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/5 transition-all" href="#">
              <SearchIcon size={18} />
              <span className="font-medium text-sm">SME Network</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/5 transition-all relative" href="#">
              <Bell size={18} className="text-hazard-red" />
              <span className="font-medium text-sm">Alerts</span>
              <span className="absolute top-3 right-4 w-2 h-2 bg-hazard-red rounded-full"></span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/5 transition-all" href="#">
              <SettingsIcon size={18} />
              <span className="font-medium text-sm">Settings</span>
            </a>
          </nav>

          {/* Center Column: Search & Feature Lenses */}
          <div className="flex-1 w-full max-w-4xl flex flex-col gap-6 h-full overflow-hidden">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <SearchIcon size={18} className="text-slate-400 group-focus-within:text-primary transition-colors" />
              </div>
              <input
                className="w-full glass-panel border-none rounded-2xl py-4 pl-12 pr-4 text-sm placeholder:text-slate-500 focus:ring-2 focus:ring-primary/50"
                placeholder="Search SME markers or regions..."
                type="text"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 min-h-0 overflow-hidden">
              <div className="h-full min-h-[400px]">
                <WarungDigitizer />
              </div>
              <div className="h-full min-h-[400px]">
                <BanjirAlertLens />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Controls */}
        <div className="flex justify-between items-end mt-4">
          <div className="glass-panel p-4 rounded-2xl flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                <Plus size={20} />
              </button>
              <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                <Minus size={20} />
              </button>
            </div>
            <button className="p-2 bg-primary text-background rounded-lg neon-glow">
              <Navigation size={20} />
            </button>
          </div>

          <div className="max-w-md w-full glass-panel p-6 rounded-2xl hidden lg:block border-t-2 border-primary/30">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-hazard-red/20 text-hazard-red rounded-xl">
                <ShieldAlert size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Emergency: Flood Alert</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Rhythmic red ripples detected in Terengganu district. 14 SMEs advised to activate contingency protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Selection Detail Overlay */}
      {selectedItem && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-8 bg-background/60 backdrop-blur-md animate-in fade-in zoom-in duration-300">
          <div className="relative w-full max-w-2xl glass-panel p-10 rounded-3xl border-t-2 border-primary/50 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -mr-32 -mt-32"></div>

            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <Plus size={24} className="rotate-45" />
            </button>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-2xl ${selectedItem.type === 'ALERT' ? 'bg-hazard-red/20 text-hazard-red' : 'bg-primary/20 text-primary'}`}>
                  {selectedItem.type === 'ALERT' ? <ShieldAlert size={40} /> : <DashboardIcon size={40} />}
                </div>
                <div>
                  <h2 className="text-4xl font-black tracking-tighter uppercase">
                    {selectedItem.type === 'WARUNG' ? selectedItem.name : 'Emergency Alert'}
                  </h2>
                  <p className="text-slate-400 font-bold tracking-widest text-xs uppercase">
                    {selectedItem.type === 'WARUNG' ? 'Active SME Entity' : 'Critical Hazard Data'}
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-3">Context & Intelligence</h3>
                  <p className="text-xl text-slate-100 font-medium leading-relaxed">
                    {selectedItem.type === 'WARUNG' ? selectedItem.description : selectedItem.message}
                  </p>
                </div>

                {selectedItem.type === 'WARUNG' && selectedItem.items.length > 0 && (
                  <div>
                    <h3 className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4">Digitized Menu Assets</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedItem.items.map((item: any, i: number) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                          <span className="font-bold">{item.name}</span>
                          <span className="text-primary font-black uppercase">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedItem.type === 'ALERT' && (
                  <div className="flex items-center gap-6 p-6 bg-hazard-red/10 rounded-3xl border border-hazard-red/20">
                    <TrendingIcon size={32} className="text-hazard-red" />
                    <div>
                      <p className="font-bold text-lg">Resilience Protocol Activated</p>
                      <p className="text-slate-400 text-sm italic">"Jaga diri, jaga komuniti." — Wira AI</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-12 flex gap-4">
                <button className="flex-1 bg-primary text-background h-14 rounded-2xl font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_0_20px_rgba(6,249,249,0.3)]">
                  Contact Hub
                </button>
                <button className="flex-1 bg-white/5 hover:bg-white/10 h-14 rounded-2xl font-black uppercase tracking-widest transition-all">
                  Export SDK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full -ml-48 -mb-48 pointer-events-none"></div>
    </div>
  );
}


