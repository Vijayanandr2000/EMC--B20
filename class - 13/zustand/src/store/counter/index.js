import { create } from "zustand";

export const useCounter = create((set) => ({
  value: 0,

  increment: () => set((state) => ({ value: state.value + 1 })),
  decrement: () => set((state) => ({ value: state.value - 1 })),
  reset: () => set(() => ({ value: 0 })),
}));
