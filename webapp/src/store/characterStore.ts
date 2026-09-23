import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Character } from "@/lib/character/schema";
import { createBlankCharacter, duplicateCharacter, normalizeCharacter } from "@/lib/character/factory";

interface CharacterStoreState {
  characters: Record<string, Character>;
  hasHydrated: boolean;
  createCharacter: (nome?: string) => Character;
  duplicateCharacter: (id: string) => Character | undefined;
  removeCharacter: (id: string) => void;
  updateCharacter: (id: string, updater: (character: Character) => Character) => void;
  setHasHydrated: (value: boolean) => void;
}

/**
 * Storage "seguro" para SSR: no servidor, localStorage não existe, então
 * as operações viram no-op. A rehidratação real acontece no cliente via
 * `useCharacterStore.persist.rehydrate()`, disparada pelo StoreHydration.
 */
const safeLocalStorage = {
  getItem: (name: string) => {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem(name);
  },
  setItem: (name: string, value: string) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(name, value);
  },
  removeItem: (name: string) => {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(name);
  },
};

export const useCharacterStore = create<CharacterStoreState>()(
  persist(
    (set, get) => ({
      characters: {},
      hasHydrated: false,
      createCharacter: (nome) => {
        const character = createBlankCharacter(nome);
        set((state) => ({
          characters: { ...state.characters, [character.id]: character },
        }));
        return character;
      },
      duplicateCharacter: (id) => {
        const original = get().characters[id];
        if (!original) return undefined;
        const copy = duplicateCharacter(original);
        set((state) => ({
          characters: { ...state.characters, [copy.id]: copy },
        }));
        return copy;
      },
      removeCharacter: (id) => {
        set((state) => {
          const next = { ...state.characters };
          delete next[id];
          return { characters: next };
        });
      },
      updateCharacter: (id, updater) => {
        set((state) => {
          const current = state.characters[id];
          if (!current) return state;
          const updated = { ...updater(current), updatedAt: new Date().toISOString() };
          return { characters: { ...state.characters, [id]: updated } };
        });
      },
      setHasHydrated: (value) => set({ hasHydrated: value }),
    }),
    {
      name: "naruto5e-characters",
      storage: createJSONStorage(() => safeLocalStorage),
      skipHydration: true,
      partialize: (state) => ({ characters: state.characters }),
      // Roda em toda rehidratação: preenche campos que faltem em fichas
      // salvas antes de uma mudança de schema (ver normalizeCharacter).
      merge: (persistedState, currentState) => {
        const persisted = (persistedState as Partial<CharacterStoreState> | undefined)?.characters ?? {};
        const normalized = Object.fromEntries(
          Object.entries(persisted).map(([id, character]) => [id, normalizeCharacter(character)])
        );
        return { ...currentState, characters: normalized };
      },
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
