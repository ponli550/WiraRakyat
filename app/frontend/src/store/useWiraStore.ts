import { create } from 'zustand';

export interface MenuItem {
   name: string;
   price: string;
}

export interface Warung {
   id: string;
   name: string;
   items: MenuItem[];
   description: string;
   position: [number, number, number];
   type: 'WARUNG';
}

export interface Alert {
   id: string;
   severity: 'LOW' | 'MEDIUM' | 'HIGH';
   message: string;
   position: [number, number, number];
   timestamp: string;
   type: 'ALERT';
}

interface WiraState {
   currentDialect: string;
   alerts: Alert[];
   warungs: Warung[];
   selectedItem: Warung | Alert | null;
   setDialect: (dialect: string) => void;
   addAlert: (alert: Alert) => void;
   addWarung: (warung: Warung) => void;
   setWarungs: (warungs: Warung[]) => void;
   setAlerts: (alerts: Alert[]) => void;
   setSelectedItem: (item: Warung | Alert | null) => void;
}

const initialWarungs: Warung[] = [
   {
      id: 'w1',
      name: "Warung Kak Nah",
      items: [{ name: "Nasi Kerabu", price: "RM 7.00" }, { name: "Ayam Percik", price: "RM 5.00" }],
      description: "Authentic Kelantanese delights in the heart of KL.",
      position: [1.2, 0.5, -0.8],
      type: 'WARUNG'
   },
   {
      id: 'w2',
      name: "Uncle Wong's Kopi",
      items: [{ name: "Kopi O", price: "RM 2.50" }, { name: "Roti Bakar", price: "RM 3.00" }],
      description: "Classic Hainanese breakfast spot since 1985.",
      position: [-1.5, 0.5, 1.2],
      type: 'WARUNG'
   }
];

const initialAlerts: Alert[] = [
   {
      id: 'a1',
      severity: 'HIGH',
      message: "Rising water levels detected in Hulu Langat.",
      position: [0.5, 0.2, 0.5],
      timestamp: new Date().toISOString(),
      type: 'ALERT'
   }
];

export const useWiraStore = create<WiraState>((set) => ({
   currentDialect: 'en',
   alerts: initialAlerts,
   warungs: initialWarungs,
   selectedItem: null,
   setDialect: (dialect) => set({ currentDialect: dialect }),
   addAlert: (alert) => set((state) => ({ alerts: [alert, ...state.alerts] })),
   addWarung: (warung) => set((state) => ({ warungs: [warung, ...state.warungs] })),
   setWarungs: (warungs) => set({ warungs }),
   setAlerts: (alerts) => set({ alerts }),
   setSelectedItem: (item) => set({ selectedItem: item }),
}));
