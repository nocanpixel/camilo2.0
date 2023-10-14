import {create} from "zustand";

interface AppState {
  data: any | null;
  fetchData: () => Promise<void>;
}

export const useStore = create<AppState>((set) => ({
  data: null,
  fetchData: async () => {
    try {
      const response = await fetch("https://darwin-wombat-btmd.2.us-1.fl0.io/api/");
      const data = await response.json();
      set({ data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
