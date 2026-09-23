/**
 * Tipos compartilhados do catálogo de Jutsu — Manual Shinobi Cap. 9
 * ("Combinação de Jutsu", p.190-192) para os campos/regras gerais, e
 * Anotações do Jiraya (compêndio de jutsus prontos) para os dados de cada
 * entrada do catálogo.
 */

export type JutsuTipo = "ninjutsu" | "genjutsu" | "taijutsu" | "bukijutsu";

export const JUTSU_TIPO_LABELS: Record<JutsuTipo, string> = {
  ninjutsu: "Ninjutsu",
  genjutsu: "Genjutsu",
  taijutsu: "Taijutsu",
  bukijutsu: "Bukijutsu",
};

export type JutsuRank = "E" | "D" | "C" | "B" | "A" | "S";

export const JUTSU_RANK_ORDER: JutsuRank[] = ["E", "D", "C", "B", "A", "S"];

/** Nível mínimo de personagem sugerido por rank (Manual Shinobi). */
export const JUTSU_RANK_MIN_LEVEL: Record<JutsuRank, number> = {
  E: 1,
  D: 4,
  C: 8,
  B: 12,
  A: 16,
  S: 20,
};

/**
 * Natureza/categoria dentro de Ninjutsu (os outros 3 tipos não têm
 * natureza elemental — usam "outro" ou ficam sem este campo).
 */
export type JutsuNatureza =
  | "nao-elemental"
  | "medico"
  | "terra"
  | "vento"
  | "fogo"
  | "agua"
  | "relampago";

export const JUTSU_NATUREZA_LABELS: Record<JutsuNatureza, string> = {
  "nao-elemental": "Não Elemental",
  medico: "Ninjutsu Médico",
  terra: "Estilo Terra",
  vento: "Estilo Vento",
  fogo: "Estilo Fogo",
  agua: "Estilo Água",
  relampago: "Estilo Relâmpago",
};

/** Componentes de jutsu — Manual Shinobi p.190-191. */
export type JutsuComponente = "SM" | "MC" | "SC" | "M" | "A" | "FN";

export const JUTSU_COMPONENTE_LABELS: Record<JutsuComponente, string> = {
  SM: "Selos Manuais",
  MC: "Moldagem de Chakra",
  SC: "Selos de Chakra",
  M: "Mobilidade",
  A: "Arma",
  FN: "Ferramenta Ninja",
};

export interface JutsuDefinition {
  key: string;
  nome: string;
  tipo: JutsuTipo;
  rank: JutsuRank;
  natureza?: JutsuNatureza;
  tempoConjuracao: string;
  alcance: string;
  duracao: string;
  componentes: string[];
  custoChakra: number;
  palavrasChave: string[];
  descricao: string;
  emNiveisSuperiores?: string;
}
