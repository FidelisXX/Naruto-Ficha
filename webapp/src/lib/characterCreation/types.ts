import type { AttributeKey } from "@/lib/rules";
import type { AttributeMethod } from "@/lib/characterCreation/attributeGeneration";

export interface CreationDraft {
  // Passo 1 — Clã
  clanKey: string | null;
  /** Escolhas feitas para cada cláusula "+N à escolha entre..." do bônus de atributo do clã (índice → atributo). */
  clanChoiceSelections: Record<number, AttributeKey | null>;

  // Passo 2 — Classe
  classKey: string | null;

  // Passo 3 — Atributos
  attributeMethod: AttributeMethod | null;
  /** Valores disponíveis para atribuir (Matriz Padrão fixa, ou resultado da rolagem — cacheado para não rolar de novo a cada render). */
  availableScores: number[];
  /** Pontuação bruta (pré-bônus) atribuída a cada atributo; null = ainda não atribuído. */
  rawScores: Record<AttributeKey, number | null>;

  // Passo 4 — Identidade & Antecedente
  nome: string;
  vila: string;
  equipe: string;
  ambicao: string;
  backgroundKey: string | null;
  selectedSkillKeys: string[];
  /** Antecedente concede +1 em um atributo OU um Talento, à escolha do jogador (Manual Shinobi p.8-14). */
  backgroundBonusChoice: "atributo" | "talento" | null;
  backgroundBonusAttribute: AttributeKey | null;
  backgroundTalentKey: string | null;

  // Passo 5 — Equipamento
  armaduraKey: string | null;
  armaPrincipalKey: string | null;

  // Passo 6 — Jutsu inicial
  jutsuKeys: string[];
}

export function blankCreationDraft(): CreationDraft {
  return {
    clanKey: null,
    clanChoiceSelections: {},
    classKey: null,
    attributeMethod: null,
    availableScores: [],
    rawScores: { for: null, des: null, con: null, int: null, sab: null, car: null },
    nome: "",
    vila: "",
    equipe: "",
    ambicao: "",
    backgroundKey: null,
    selectedSkillKeys: [],
    backgroundBonusChoice: null,
    backgroundBonusAttribute: null,
    backgroundTalentKey: null,
    armaduraKey: null,
    armaPrincipalKey: null,
    jutsuKeys: [],
  };
}
