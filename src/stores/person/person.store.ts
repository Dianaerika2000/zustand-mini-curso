import { type StateCreator, create } from "zustand";
import { StateStorage, createJSONStorage, persist } from "zustand/middleware";
import { customSessionStorage } from "../storages/session-storage.storage";

interface PersonState{
  firstname: string;
  lastname: string;
}

interface Actions {
  setFirstname: (value: string) => void; 
  setLastname: (value: string) => void;
}

const storeAPI: StateCreator<PersonState & Actions> = (set) => ({
  firstname: '',
  lastname: '',
  setFirstname: (value: string) => set(state => ({ firstname: value })),
  setLastname: (value: string) => set(state => ({ lastname: value }))
  });



export const usePersonStore = create<PersonState & Actions>()(
  persist(
    storeAPI
  , { 
    name: 'person-storage',
    storage: customSessionStorage,
  })
);