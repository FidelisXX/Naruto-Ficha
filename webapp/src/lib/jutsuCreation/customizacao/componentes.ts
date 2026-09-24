import type { CustomizationCostRule } from "@/lib/jutsuCreation/customizacao/types";

/** Passo 1 — Modificando componentes (Manual Shinobi p.152). */
export const COMPONENT_CUSTOMIZATION_RULES: CustomizationCostRule[] = [
  { key: "SM", nome: "Selos de Mão", custoRemover: 1, custoAdicionar: -1, tdiSemanas: 1 },
  { key: "SC", nome: "Selos de Chakra", custoRemover: 1, custoAdicionar: -1, tdiSemanas: 2 },
  { key: "A", nome: "Armas", custoRemover: 1, custoAdicionar: -1, tdiSemanas: 1 },
  { key: "FN", nome: "Ferramentas Ninja", custoRemover: 1, custoAdicionar: -1, tdiSemanas: 1 },
];
