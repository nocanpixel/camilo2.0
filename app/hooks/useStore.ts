import {create} from "zustand";

interface AppState {
  data: any | null;
  fetchData: () => Promise<void>;
}

export const useStore = create<AppState>((set) => ({
  data: null,
  fetchData: async () => {
    try {
      const response = await fetch("http://localhost:3001/api/");
      const data = await response.json();
      set({ data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
