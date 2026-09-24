/**
 * Tipos do fluxo de Personalização de Jutsu — Manual Shinobi, "Personalizando
 * um Jutsu" (p.152-155). Diferente do Assistente de Criação (que monta um
 * jutsu do zero por slots), aqui cada modificação tem um custo de chakra e
 * um tempo de inatividade (TdI) fixos, acumulados ao longo dos 4 passos, e o
 * rank final é recalculado no Passo 5 por uma fórmula própria (dano médio ou
 * custo de chakra acumulado → rank).
 */

/** Uma modificação com custo assimétrico: adicionar X, remover Y (chakra), mesmo TdI para ambos. */
export interface CustomizationCostRule {
  key: string;
  nome: string;
  /** Custo de chakra ao REMOVER esta palavra-chave/componente (`null` = não pode ser removido). */
  custoRemover: number | null;
  /** Custo de chakra ao ADICIONAR esta palavra-chave/componente (`null` = não pode ser adicionado / já obrigatório). */
  custoAdicionar: number | null;
  tdiSemanas: number;
  nota?: string;
}

/** Uma modificação de efeito (Passo 4) — custo fixo de chakra + TdI, pode ter custo assimétrico dano/cura. */
export interface EffectCustomizationRule {
  key: string;
  nome: string;
  efeitoCondicional?: boolean;
  /** Custo de chakra ao adicionar (positivo) — ou string "+2/-1" quando o livro lista ajuste em ambas direções. */
  custoChakraAdicionar: number;
  /** Custo de chakra ao remover/reduzir, quando o livro lista essa direção (ex: Dano/Cura, Ataques Múltiplos). */
  custoChakraRemover?: number;
  tdiSemanas: number;
  descricao: string;
}

export const RANK_DANO_TABLE: { danoMin: number; danoMax: number | null; custoMin: number; custoMax: number | null; rank: "D" | "C" | "B" | "A" | "S" }[] = [
  { danoMin: 1, danoMax: 20, custoMin: 1, custoMax: 9, rank: "D" },
  { danoMin: 21, danoMax: 34, custoMin: 10, custoMax: 15, rank: "C" },
  { danoMin: 35, danoMax: 49, custoMin: 15, custoMax: 20, rank: "B" },
  { danoMin: 50, danoMax: 69, custoMin: 21, custoMax: 28, rank: "A" },
  { danoMin: 70, danoMax: null, custoMin: 29, custoMax: null, rank: "S" },
];

/** Média de dano por tipo de dado — Manual Shinobi p.155 (D4=3, D6=4, D8=5, D10=6, D12=7). */
export const DIE_AVERAGE: Record<"d4" | "d6" | "d8" | "d10" | "d12", number> = {
  d4: 3,
  d6: 4,
  d8: 5,
  d10: 6,
  d12: 7,
};
