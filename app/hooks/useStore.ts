import {create} from "zustand";

interface AppState {
  data: any | null;
  fetchData: () => Promise<void>;
}

export const useStore = create<AppState>((set) => ({
  data: null,
  fetchData: async () => {
    try {
      const response = await fetch("https://kempsey-tasmanian-devil-kbpk.2.ie-1.fl0.io/api/like");
      const data = await response.json();
      set({ data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
