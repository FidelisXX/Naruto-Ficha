import type { AttributeKey } from "@/lib/rules";

/**
 * Os 3 métodos de geração de atributo — Manual Shinobi, Cap. 1 "Personagem
 * Passo a Passo", Passo 3 (p.10-11).
 */
export type AttributeMethod = "matriz-padrao" | "rolagem" | "compra-de-pontos";

export const ATTRIBUTE_METHOD_LABELS: Record<AttributeMethod, string> = {
  "matriz-padrao": "Matriz Padrão",
  rolagem: "Rolagem (4d6, descarta o menor)",
  "compra-de-pontos": "Compra de Pontos",
};

export const ATTRIBUTE_METHOD_DESCRIPTIONS: Record<AttributeMethod, string> = {
  "matriz-padrao":
    "Use o conjunto fixo de pontuações 15, 14, 13, 12, 11, 10 — distribua cada valor entre os 6 atributos como preferir.",
  rolagem:
    "Role 4d6 e some os 3 maiores resultados, seis vezes — um valor por atributo. Representa um personagem mais imprevisível, com picos e vales.",
  "compra-de-pontos":
    "Você tem 30 pontos para gastar. Cada pontuação de 8 a 15 tem um custo (ver tabela). Não é possível ultrapassar 15 nem ficar abaixo de 8 antes dos bônus de clã/antecedente.",
};

/** Matriz Padrão — Manual Shinobi p.10. */
export const STANDARD_ARRAY: number[] = [15, 14, 13, 12, 11, 10];

/** Tabela de Custo de Pontos de Pontuação de Habilidade — Manual Shinobi p.11. */
export const POINT_BUY_COST: Record<number, number> = {
  8: 0,
  9: 1,
  10: 2,
  11: 3,
  12: 4,
  13: 5,
  14: 7,
  15: 9,
};

export const POINT_BUY_BUDGET = 30;
export const POINT_BUY_MIN = 8;
export const POINT_BUY_MAX = 15;

export function pointBuyCost(score: number): number {
  return POINT_BUY_COST[score] ?? 0;
}

export function totalPointBuySpent(scores: Record<AttributeKey, number>): number {
  return Object.values(scores).reduce((sum, score) => sum + pointBuyCost(score), 0);
}

/** Rola 4d6, descarta o menor resultado, soma os outros 3. */
function roll4d6DropLowest(): number {
  const rolls = Array.from({ length: 4 }, () => 1 + Math.floor(Math.random() * 6));
  rolls.sort((a, b) => a - b);
  return rolls[1] + rolls[2] + rolls[3];
}

/** Gera os 6 valores da Rolagem (4d6, descarta o menor), um por atributo, na ordem sorteada. */
export function rollAttributeSet(): number[] {
  return Array.from({ length: 6 }, () => roll4d6DropLowest());
}
