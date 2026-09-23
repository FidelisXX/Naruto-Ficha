"use client";

import { useEffect } from "react";
import { useCharacterStore } from "@/store/characterStore";

/**
 * Dispara a rehidratação do zustand-persist a partir do localStorage assim
 * que o app monta no cliente. `skipHydration: true` no store evita que o
 * zustand tente ler localStorage durante a renderização no servidor (onde
 * ele não existe), o que causaria um mismatch de hidratação do React.
 */
export function StoreHydration() {
  useEffect(() => {
    void useCharacterStore.persist.rehydrate();
  }, []);

  return null;
}
