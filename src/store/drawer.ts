import type { MenuItem } from "@/lib/data";
import { create } from "zustand";

type DrawerState = {
  isOpen: boolean;
  activeMenu: MenuItem[];
  history: MenuItem[][];

  openDrawer: (initialMenu: MenuItem[]) => void;
  closeDrawer: () => void;
  goToMenu: (subMenu: MenuItem[]) => void;
  goBack: () => void;
};

const useDrawerStore = create<DrawerState>()((set) => ({
  isOpen: false,
  activeMenu: [],
  history: [],

  openDrawer: (initialMenu) =>
    set({
      isOpen: true,
      activeMenu: initialMenu,
      history: [],
    }),

  closeDrawer: () =>
    set({
      isOpen: false,
      activeMenu: [],
      history: [],
    }),

  goToMenu: (subMenu) =>
    set((state) => ({
      history: [...state.history, state.activeMenu],
      activeMenu: subMenu,
    })),

  goBack: () =>
    set((state) => {
      const newHistory = [...state.history];
      const previousMenu = newHistory.pop();

      if (!previousMenu) return state;

      return { activeMenu: previousMenu, history: newHistory };
    }),
}));

export { useDrawerStore };
