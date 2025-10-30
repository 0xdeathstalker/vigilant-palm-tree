import { create } from "zustand";
import type { MenuItem } from "@/lib/data";

type DrawerState = {
  isOpen: boolean;
  activeMenu: MenuItem[];
  history: MenuItem[][];

  openDrawer: () => void;
  closeDrawer: () => void;
  goToMenu: (subMenu: MenuItem[]) => void;
  goBack: () => void;
};

const useDrawerStore = create<DrawerState>()((set) => ({
  isOpen: false,
  activeMenu: [],
  history: [],

  openDrawer: () => set({ isOpen: true }),
  closeDrawer: () => set({ isOpen: false }),

  goToMenu: (subMenu) =>
    set((state) => ({
      history: [...state.history, state.activeMenu],
      activeMenu: subMenu,
    })),
  goBack: () =>
    set((state) => {
      const newHistory = [...state.history];
      const previousMenu = newHistory.pop() ?? [];
      return { activeMenu: previousMenu, history: newHistory };
    }),
}));

export { useDrawerStore };
