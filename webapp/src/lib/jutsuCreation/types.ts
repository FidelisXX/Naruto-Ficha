import type { JutsuComponente, JutsuRank, JutsuTipo } from "@/lib/jutsu/types";

/**
 * Tipos do Assistente de Criação de Jutsu — Manual Shinobi, "Criando um
 * Jutsu" (p.124-151) e "Personalizando um Jutsu" (p.152-155).
 *
 * Taijutsu e Bukijutsu compartilham a mesma seção de regras no livro
 * ("Regras de Criação Taijutsu/Bukijutsu"), então usamos uma "família" para
 * agrupar as tabelas/efeitos compartilhados, enquanto o `tipo` final salvo
 * no jutsu continua distinguindo os dois (igual ao catálogo da Fase 4).
 */
export type JutsuCreationFamily = "ninjutsu" | "genjutsu" | "taijutsuBukijutsu";

export function familyOfTipo(tipo: JutsuTipo): JutsuCreationFamily {
  if (tipo === "ninjutsu") return "ninjutsu";
  if (tipo === "genjutsu") return "genjutsu";
  return "taijutsuBukijutsu";
}

/** Slots de efeito disponíveis por rank — igual para os 3 tipos (p.125). */
export const RANK_EFFECT_SLOTS: Record<JutsuRank, number> = {
  E: 1,
  D: 4,
  C: 5,
  B: 6,
  A: 7,
  S: 8,
};

/**
 * Custo final de chakra e tempo de inatividade (TdI) para criar o jutsu, por
 * rank — mesma tabela nas 3 seções do livro (p.132, p.141, p.150). Distinta
 * da tabela de "aprender um jutsu existente" (p.124).
 */
export interface JutsuCreationCost {
  custoChakra: number;
  tdiAutodidata: number;
  /** `null` no Rank E — o livro não permite treinar Rank E com um sensei. */
  tdiComSensei: number | null;
}

export const CREATION_COST_TABLE: Record<JutsuRank, JutsuCreationCost> = {
  E: { custoChakra: 2, tdiAutodidata: 1, tdiComSensei: null },
  D: { custoChakra: 4, tdiAutodidata: 3, tdiComSensei: 2 },
  C: { custoChakra: 7, tdiAutodidata: 5, tdiComSensei: 4 },
  B: { custoChakra: 12, tdiAutodidata: 10, tdiComSensei: 8 },
  A: { custoChakra: 17, tdiAutodidata: 15, tdiComSensei: 12 },
  S: { custoChakra: 25, tdiAutodidata: 25, tdiComSensei: 20 },
};

/** Palavra-chave de pré-requisito (Passo 2) — concede bônus de slots. */
export interface PrerequisiteKeyword {
  key: string;
  nome: string;
  /** Slots de efeito bônus concedidos ao escolher esta palavra-chave. */
  slotBonus: number;
  descricao: string;
  /** Se true, não pode ser escolhida no Rank E (ex: Recurso Necessário). */
  indisponivelRankE?: boolean;
}

/** Uma opção de Natureza de Chakra, com sua mecânica especial (só Ninjutsu). */
export interface NaturezaMecanica {
  key: string;
  nome: string;
  descricao: string;
}

/** Regra de obrigatoriedade de um componente, por família de jutsu. */
export type ComponentRequirement = "sempre" | "condicional" | "opcional" | "indisponivel";

export interface ComponentRule {
  componente: JutsuComponente;
  requisito: ComponentRequirement;
  /** Texto explicando a condição (quando `requisito === "condicional"`) ou a regra geral. */
  nota: string;
  /**
   * Quando `requisito === "condicional"`: chaves de pré-requisito (Passo 2)
   * que, se qualquer uma estiver escolhida, tornam este componente
   * obrigatório automaticamente (ex: Moldagem de Chakra vira obrigatória se
   * o jogador escolher Natureza de Chakra ou Médico).
   */
  dependsOnPrereq?: string[];
}

/** Opção de alcance disponível na criação de jutsu (Passo 2). */
export interface RangeOption {
  key: string;
  nome: string;
  descricao: string;
}

export type EffectCategoria = "ofensivo" | "defensivo" | "controle" | "suporte";

export const EFFECT_CATEGORIA_LABELS: Record<EffectCategoria, string> = {
  ofensivo: "Ofensivo",
  defensivo: "Defensivo",
  controle: "Ao Controle",
  suporte: "Suporte",
};

/**
 * Uma opção de dado de dano/cura/blindagem por rank — cada linha da tabela
 * do livro (ex: "RANK-D: 5d4, 4d6, 3d8, 2d10") vira um array de strings; o
 * jogador escolhe uma delas ao adicionar o efeito.
 */
export type DiceOptionsByRank = Partial<Record<JutsuRank, string[]>>;

export interface JutsuEffectDefinition {
  key: string;
  nome: string;
  /**
   * Categoria(s) em que este efeito aparece. Efeitos "genéricos" (Área,
   * Choque, Duradouro, Veloz, Aumento, Crítico em alguns tipos) não exigem
   * que o jogador tenha escolhido aquela categoria — ficam fora das 4.
   */
  categoria: EffectCategoria | "generico";
  /** Quantos slots de efeito este efeito consome ao ser escolhido (0 = "Especial: não custa slot"). */
  custoSlots: 0 | 1;
  /** Se true, conta para o limite de "1 Efeito Condicional" (Passo "Ao Controle"). */
  efeitoCondicional?: boolean;
  /** Palavras-chave/efeitos que precisam já estar presentes no jutsu para habilitar este. */
  requisitos?: string[];
  descricao: string;
  /** Quantas vezes este efeito pode ser adicionado (padrão 1). */
  maxRepeticoes?: number;
  /** Tabela de dados por rank, quando o efeito envolve rolar dano/cura/blindagem. */
  dadosPorRank?: DiceOptionsByRank;
}

/** Um efeito escolhido pelo jogador durante a criação, com sua repetição/escolha de dado. */
export interface SelectedEffect {
  effectKey: string;
  /** Índice de repetição (0-based) quando `maxRepeticoes > 1`. */
  repeticao: number;
  /** Dado escolhido da tabela `dadosPorRank`, se aplicável. */
  dadoEscolhido?: string;
}
