import type { AttributeKey } from "@/lib/rules";

/**
 * As 11 classes do Manual Shinobi V3.1 (Cap. 4, p. 28-30).
 * Ninjutsu sempre usa Inteligência, Taijutsu sempre Força e Genjutsu sempre
 * Sabedoria como atributo-base de ataque/CD da classe (algumas classes têm
 * regras próprias que trocam isso, ex. "Sutileza" trocando For por Des —
 * não modelado ainda, ver notas da Fase 2 no roadmap).
 */
export interface ClassDefinition {
  key: string;
  nome: string;
  /** Maior valor do Dado de Vida (d6 -> 6, d8 -> 8, etc). */
  hitDie: number;
  /** Maior valor do Dado de Chakra. */
  chakraDie: number;
  salvaguardas: [AttributeKey, AttributeKey];
  nivelDeJutsu: "Alto" | "Médio" | "Baixo";
}

export const CLASS_CATALOG: ClassDefinition[] = [
  { key: "especialista-ninjutsu", nome: "Especialista em Ninjutsu", hitDie: 6, chakraDie: 12, salvaguardas: ["sab", "int"], nivelDeJutsu: "Alto" },
  { key: "ninja-medico", nome: "Ninja Médico", hitDie: 8, chakraDie: 10, salvaguardas: ["sab", "car"], nivelDeJutsu: "Alto" },
  { key: "ninja-batedor", nome: "Ninja Batedor", hitDie: 8, chakraDie: 10, salvaguardas: ["for", "con"], nivelDeJutsu: "Médio" },
  { key: "agente-inteligencia", nome: "Agente de Inteligência", hitDie: 6, chakraDie: 10, salvaguardas: ["des", "int"], nivelDeJutsu: "Médio" },
  { key: "especialista-taijutsu", nome: "Especialista em Taijutsu", hitDie: 12, chakraDie: 6, salvaguardas: ["for", "des"], nivelDeJutsu: "Baixo" },
  { key: "especialista-armas", nome: "Especialista em Armas", hitDie: 10, chakraDie: 8, salvaguardas: ["for", "con"], nivelDeJutsu: "Baixo" },
  { key: "especialista-genjutsu", nome: "Especialista em Genjutsu", hitDie: 6, chakraDie: 12, salvaguardas: ["con", "car"], nivelDeJutsu: "Baixo" },
  { key: "ninja-cacador", nome: "Ninja Caçador", hitDie: 10, chakraDie: 8, salvaguardas: ["des", "int"], nivelDeJutsu: "Baixo" },
  { key: "mestre-marionetes", nome: "Mestre das Marionetes", hitDie: 8, chakraDie: 10, salvaguardas: ["con", "int"], nivelDeJutsu: "Médio" },
  { key: "ninja-cozinheiro", nome: "Ninja Cozinheiro", hitDie: 10, chakraDie: 8, salvaguardas: ["con", "car"], nivelDeJutsu: "Médio" },
  { key: "ninja-cientista", nome: "Ninja Cientista", hitDie: 8, chakraDie: 10, salvaguardas: ["con", "int"], nivelDeJutsu: "Médio" },
];

/**
 * PV/PC máximos sugeridos: 10 + maior valor do dado + mod. Constituição no
 * nível 1, depois + (média do dado arredondada + mod. CON) por nível
 * adicional. Fonte: Manual Shinobi, Cap. 1 (p. 13-14) e Cap. 5 (p. 76).
 */
export function suggestedMaxFromDie(die: number, level: number, conModifier: number): number {
  const first = 10 + die + conModifier;
  const perLevelAverage = Math.floor(die / 2) + 1 + conModifier;
  return first + perLevelAverage * Math.max(level - 1, 0);
}
