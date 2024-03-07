import { type StateCreator, create } from "zustand";
import { StateStorage, createJSONStorage, devtools, persist } from "zustand/middleware";
import { customSessionStorage } from "../storages/session.storage";
import { firebaseStorage } from "../storages/firebase.storage";

interface PersonState{
  firstname: string;
  lastname: string;
}

interface Actions {
  setFirstname: (value: string) => void; 
  setLastname: (value: string) => void;
}

const storeAPI: StateCreator<PersonState & Actions, [["zustand/devtools", never]]> = (set) => ({
  firstname: '',
  lastname: '',
  setFirstname: (value: string) => set(state => ({ firstname: value }), false, 'setFirstName'),
  setLastname: (value: string) => set(state => ({ lastname: value }), false, 'setLastname')
  });



export const usePersonStore = create<PersonState & Actions>()(
  devtools(
    persist(storeAPI, {
      name: "person-storage",
      // storage: customSessionStorage,
      storage: firebaseStorage,
    })
  )
);