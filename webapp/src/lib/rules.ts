/**
 * Constantes de regras do sistema Naruto 5e (Manual Shinobi V3.1).
 * Fonte: relatórios de leitura do Manual Shinobi e da Ficha 3.1.
 */

export const ATTRIBUTE_KEYS = ["for", "des", "con", "int", "sab", "car"] as const;
export type AttributeKey = (typeof ATTRIBUTE_KEYS)[number];

export const ATTRIBUTE_LABELS: Record<AttributeKey, string> = {
  for: "Força",
  des: "Destreza",
  con: "Constituição",
  int: "Inteligência",
  sab: "Sabedoria",
  car: "Carisma",
};

/** Modificador de atributo = floor((score - 10) / 2). */
export function abilityModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

/**
 * Bônus de proficiência por nível de personagem.
 * Diferente do D&D 5e padrão: começa em +3 (não +2).
 * Fonte: Manual Shinobi, Tabela de Avanço de Personagem (p. 14).
 */
export function proficiencyBonusForLevel(level: number): number {
  if (level >= 19) return 9;
  if (level >= 16) return 8;
  if (level >= 13) return 7;
  if (level >= 10) return 6;
  if (level >= 7) return 5;
  if (level >= 4) return 4;
  return 3;
}

/**
 * Teto máximo de nível de Maestria por nível de personagem.
 * Fonte: Manual Shinobi, Cap. 6 (p. 70).
 */
export function maxMasteryTierForLevel(level: number): 0 | 1 | 2 | 3 {
  if (level >= 12) return 3;
  if (level >= 7) return 2;
  return 1;
}

export type SkillProficiencyLevel =
  | "none"
  | "proficient"
  | "mastery1"
  | "mastery2"
  | "mastery3";

export const SKILL_PROFICIENCY_LABELS: Record<SkillProficiencyLevel, string> = {
  none: "Nenhuma",
  proficient: "Proficiente (Genin)",
  mastery1: "Maestria 1 (Chunin)",
  mastery2: "Maestria 2 (Jonin)",
  mastery3: "Maestria 3 (Sanin/Kage)",
};

/**
 * Bônus fixo somado ao modificador de atributo para cada nível de proficiência/maestria.
 * A maestria soma um bônus fixo adicional (não dobra o bônus de proficiência).
 */
export function skillProficiencyBonus(
  level: SkillProficiencyLevel,
  proficiencyBonus: number
): number {
  switch (level) {
    case "none":
      return 0;
    case "proficient":
      return proficiencyBonus;
    case "mastery1":
      return proficiencyBonus + 2;
    case "mastery2":
      return proficiencyBonus + 4;
    case "mastery3":
      return proficiencyBonus + 6;
  }
}

export interface SkillDefinition {
  key: string;
  label: string;
  attribute: AttributeKey;
}

/** As 21 perícias listadas na Ficha 3.1 Naruto 5e. */
export const SKILL_DEFINITIONS: SkillDefinition[] = [
  { key: "acrobacia", label: "Acrobacia", attribute: "des" },
  { key: "adestrarAnimais", label: "Adestrar Animais", attribute: "sab" },
  { key: "artesMarciais", label: "Artes Marciais", attribute: "for" },
  { key: "atletismo", label: "Atletismo", attribute: "for" },
  { key: "construir", label: "Construir", attribute: "int" },
  { key: "controleDeChakra", label: "Controle de Chakra", attribute: "con" },
  { key: "enganacao", label: "Enganação", attribute: "car" },
  { key: "furtividade", label: "Furtividade", attribute: "des" },
  { key: "historia", label: "História", attribute: "int" },
  { key: "ilusao", label: "Ilusão", attribute: "sab" },
  { key: "intimidacao", label: "Intimidação", attribute: "car" },
  { key: "intuicao", label: "Intuição", attribute: "sab" },
  { key: "investigacao", label: "Investigação", attribute: "int" },
  { key: "medicina", label: "Medicina", attribute: "sab" },
  { key: "natureza", label: "Natureza", attribute: "int" },
  { key: "ninshou", label: "Ninshou", attribute: "int" },
  { key: "percepcao", label: "Percepção", attribute: "sab" },
  { key: "performance", label: "Atuação", attribute: "car" },
  { key: "persuasao", label: "Persuasão", attribute: "car" },
  { key: "prestidigitacao", label: "Prestidigitação", attribute: "des" },
  { key: "sobrevivencia", label: "Sobrevivência", attribute: "sab" },
];

export function formatModifier(value: number): string {
  return value >= 0 ? `+${value}` : `${value}`;
}

/**
 * Iniciativa = teste de Destreza + metade do bônus de proficiência (arredondado
 * para baixo). Fonte: Manual Shinobi, Cap. 8 (estrutura de turno).
 */
export function initiativeModifier(
  desModifier: number,
  proficiencyBonus: number,
  extraBonus = 0
): number {
  return desModifier + Math.floor(proficiencyBonus / 2) + extraBonus;
}

/**
 * CA = 10 + Bônus de Armadura + mod. Destreza + metade do bônus de proficiência
 * (arredondado para baixo). Fonte: Manual Shinobi, Cap. 5 (p. 34).
 * O limite de DES por tipo de armadura fica para a Fase 3 (catálogo de armaduras).
 */
export function armorClass(armorBonus: number, desModifier: number, proficiencyBonus: number): number {
  return 10 + armorBonus + desModifier + Math.floor(proficiencyBonus / 2);
}

/** Bônus de Ataque de Jutsu (ou de arma/punho) = mod. de habilidade + bônus de proficiência. */
export function attackBonus(abilityMod: number, proficiencyBonus: number): number {
  return abilityMod + proficiencyBonus;
}

/** CD de Resistência de Jutsu = 8 + mod. de habilidade + bônus de proficiência. */
export function jutsuSaveDC(abilityMod: number, proficiencyBonus: number): number {
  return 8 + abilityMod + proficiencyBonus;
}

/**
 * XP mínimo para cada nível (índice 0 = nível 1).
 * Fonte: Manual Shinobi, Tabela de Avanço de Personagem (p. 14).
 */
export const XP_THRESHOLDS: number[] = [
  0, 50, 75, 100, 150, 200, 350, 475, 600, 725, 850, 1000, 1200, 1400, 1600, 1800, 2100, 2400,
  2700, 3000,
];

export function xpThresholdForLevel(level: number): number {
  const index = Math.min(Math.max(level, 1), 20) - 1;
  return XP_THRESHOLDS[index];
}

/** Progresso (0–1) da XP atual dentro da faixa do nível atual até o próximo. */
export function xpProgressForLevel(level: number, xp: number) {
  const current = xpThresholdForLevel(level);
  if (level >= 20) return { current, next: current, progress: 1 };
  const next = xpThresholdForLevel(level + 1);
  const span = Math.max(next - current, 1);
  const progress = Math.min(Math.max((xp - current) / span, 0), 1);
  return { current, next, progress };
}

/**
 * Volume (capacidade de carga) base = 10 + 2 por cada +1 no mod. de Força.
 * Fonte: Manual Shinobi, Cap. 5 — "Seu Inventário" (p. 33). Itens de
 * armazenamento (mochilas, bolsas) somam bônus adicionais por cima deste
 * valor base — aplicados manualmente, como os demais bônus de catálogo.
 */
export function baseInventoryVolume(forModifier: number): number {
  return 10 + Math.max(forModifier, 0) * 2;
}

/**
 * Uma criatura fica Sobrecarregada se o volume total carregado exceder sua
 * capacidade de Volume (base + bônus de itens de armazenamento). Enquanto
 * sobrecarregada: velocidade reduzida pela metade, desvantagem em testes,
 * jogadas de ataque e testes de resistência de Força/Destreza/Constituição.
 */
export function isOverloaded(totalVolume: number, volumeCapacity: number): boolean {
  return totalVolume > volumeCapacity;
}

/**
 * Regras de Concentração — Manual Shinobi, Cap. 9 (p. 192).
 * Até 2 jutsus de concentração simultâneos. Manter um jutsu custa metade
 * (arredondado para baixo) do custo de chakra de lançá-lo, pago no início
 * de cada turno. Um 3º jutsu de concentração encerra automaticamente um
 * dos anteriores.
 */
export function concentrationUpkeepCost(chakraCost: number): number {
  return Math.floor(chakraCost / 2);
}

export const JUTSU_RANK_CONCENTRATION_VALUE: Record<"D" | "C" | "B" | "A" | "S", number> = {
  D: 1,
  C: 2,
  B: 3,
  A: 4,
  S: 5,
};

/**
 * CD do teste de Constituição (Controle de Chakra) para manter a
 * concentração ao sofrer dano = maior entre (12 + valor do rank do jutsu
 * concentrado) e (metade do dano sofrido, arredondado para baixo).
 */
export function concentrationCheckDC(
  jutsuRank: keyof typeof JUTSU_RANK_CONCENTRATION_VALUE,
  damageTaken: number
): number {
  return Math.max(12 + JUTSU_RANK_CONCENTRATION_VALUE[jutsuRank], Math.floor(damageTaken / 2));
}
