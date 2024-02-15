import { create } from 'zustand'


interface BearState {
    blackBears: number,
    polarBears: number,
    pandaBears: number,

    // bears

    increaseBlackBears: (by: number) => void;
    increasePolarBears: (by: number) => void;
    increasePandaBears: (by: number) => void;
}

export const useBearStore = create<BearState>()((set) => ({
  blackBears: 5,
  polarBears: 10,
  pandaBears: 8,
  increaseBlackBears: (by: number) => set((state) => ({ blackBears: state.blackBears + by})),
  increasePolarBears: (by: number) => set((state) => ({ polarBears: state.polarBears + by})),
  increasePandaBears: (by: number) => set((state) => ({ pandaBears: state.pandaBears + by})),
}))