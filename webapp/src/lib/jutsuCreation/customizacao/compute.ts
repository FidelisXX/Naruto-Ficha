import type { JutsuDefinition } from "@/lib/jutsu/types";
import { COMPONENT_CUSTOMIZATION_RULES } from "@/lib/jutsuCreation/customizacao/componentes";
import { KEYWORD_CUSTOMIZATION_RULES } from "@/lib/jutsuCreation/customizacao/palavrasChave";
import { EFFECT_CUSTOMIZATION_RULES } from "@/lib/jutsuCreation/customizacao/efeitos";
import { RANGE_INCREMENT_COST } from "@/lib/jutsuCreation/customizacao/alcance";
import { DIE_AVERAGE, RANK_DANO_TABLE } from "@/lib/jutsuCreation/customizacao/types";

export type ChangeAction = "add" | "remove";

export interface CustomizationChange {
  key: string;
  action: ChangeAction;
}

export interface EffectCustomizationChange extends CustomizationChange {
  /** Quantas vezes esta modificação foi aplicada (algumas são repetíveis, ex: Blindagem). */
  count: number;
}

export interface CustomizationDraft {
  baseJutsuKey: string | null;
  componentChanges: CustomizationChange[];
  keywordChanges: CustomizationChange[];
  rangeIncrementos: number;
  areaIncrementos: number;
  effectChanges: EffectCustomizationChange[];
  temDano: boolean;
  danoDado: keyof typeof DIE_AVERAGE | "";
  danoNumDados: number;
  novoNome: string;
}

export function blankCustomizationDraft(): CustomizationDraft {
  return {
    baseJutsuKey: null,
    componentChanges: [],
    keywordChanges: [],
    rangeIncrementos: 0,
    areaIncrementos: 0,
    effectChanges: [],
    temDano: false,
    danoDado: "",
    danoNumDados: 1,
    novoNome: "",
  };
}

export function componentDelta(draft: CustomizationDraft): { chakra: number; semanas: number } {
  return draft.componentChanges.reduce(
    (acc, change) => {
      const rule = COMPONENT_CUSTOMIZATION_RULES.find((r) => r.key === change.key);
      if (!rule) return acc;
      const chakra = change.action === "add" ? rule.custoAdicionar : rule.custoRemover;
      return { chakra: acc.chakra + (chakra ?? 0), semanas: acc.semanas + rule.tdiSemanas };
    },
    { chakra: 0, semanas: 0 }
  );
}

export function keywordDelta(draft: CustomizationDraft): { chakra: number; semanas: number } {
  return draft.keywordChanges.reduce(
    (acc, change) => {
      const rule = KEYWORD_CUSTOMIZATION_RULES.find((r) => r.key === change.key);
      if (!rule) return acc;
      const chakra = change.action === "add" ? rule.custoAdicionar : rule.custoRemover;
      return { chakra: acc.chakra + (chakra ?? 0), semanas: acc.semanas + rule.tdiSemanas };
    },
    { chakra: 0, semanas: 0 }
  );
}

export function rangeDelta(draft: CustomizationDraft): { chakra: number; semanas: number } {
  const totalIncrementos = Math.abs(draft.rangeIncrementos) + Math.abs(draft.areaIncrementos);
  const chakraPorIncremento = RANGE_INCREMENT_COST.custoChakraPorIncremento;
  const chakra = draft.rangeIncrementos * chakraPorIncremento + draft.areaIncrementos * chakraPorIncremento;
  return { chakra, semanas: totalIncrementos * RANGE_INCREMENT_COST.tdiSemanasPorIncremento };
}

export function effectDelta(draft: CustomizationDraft): { chakra: number; semanas: number } {
  return draft.effectChanges.reduce(
    (acc, change) => {
      const rule = EFFECT_CUSTOMIZATION_RULES.find((r) => r.key === change.key);
      if (!rule) return acc;
      const perUnit =
        change.action === "add" ? rule.custoChakraAdicionar : (rule.custoChakraRemover ?? -rule.custoChakraAdicionar);
      return {
        chakra: acc.chakra + perUnit * change.count,
        semanas: acc.semanas + rule.tdiSemanas * change.count,
      };
    },
    { chakra: 0, semanas: 0 }
  );
}

export function totalDelta(draft: CustomizationDraft): { chakra: number; semanas: number } {
  const parts = [componentDelta(draft), keywordDelta(draft), rangeDelta(draft), effectDelta(draft)];
  return parts.reduce((acc, p) => ({ chakra: acc.chakra + p.chakra, semanas: acc.semanas + p.semanas }), {
    chakra: 0,
    semanas: 0,
  });
}

export interface FinalRankResult {
  rank: "D" | "C" | "B" | "A" | "S" | null;
  finalCustoChakra: number;
  totalSemanas: number;
  metodo: "dano" | "custo";
}

/**
 * Passo 5 — recalcula o rank final. Se o jutsu tiver dano, usa a média do
 * dado × número de dados (coluna "Dano" da tabela); senão, usa o custo de
 * chakra final acumulado (coluna "Custo"). Manual Shinobi p.155.
 */
export function computeFinalRank(baseJutsu: JutsuDefinition | null, draft: CustomizationDraft): FinalRankResult {
  const delta = totalDelta(draft);
  const finalCustoChakra = (baseJutsu?.custoChakra ?? 0) + delta.chakra;

  if (draft.temDano && draft.danoDado && draft.danoNumDados > 0) {
    const media = DIE_AVERAGE[draft.danoDado] * draft.danoNumDados;
    const linha = RANK_DANO_TABLE.find((l) => media >= l.danoMin && (l.danoMax === null || media <= l.danoMax));
    return { rank: linha?.rank ?? "S", finalCustoChakra, totalSemanas: delta.semanas, metodo: "dano" };
  }

  const linha = RANK_DANO_TABLE.find(
    (l) => finalCustoChakra >= l.custoMin && (l.custoMax === null || finalCustoChakra <= l.custoMax)
  );
  return { rank: linha?.rank ?? "S", finalCustoChakra, totalSemanas: delta.semanas, metodo: "custo" };
}

export function toggleChange(list: CustomizationChange[], key: string, action: ChangeAction): CustomizationChange[] {
  const exists = list.find((c) => c.key === key);
  if (exists) {
    if (exists.action === action) return list.filter((c) => c.key !== key);
    return list.map((c) => (c.key === key ? { ...c, action } : c));
  }
  return [...list, { key, action }];
}

export function assembleChangeLog(draft: CustomizationDraft): string {
  const lines: string[] = [];
  for (const change of draft.componentChanges) {
    const rule = COMPONENT_CUSTOMIZATION_RULES.find((r) => r.key === change.key);
    if (rule) lines.push(`${change.action === "add" ? "+ " : "− "}Componente ${rule.nome}`);
  }
  for (const change of draft.keywordChanges) {
    const rule = KEYWORD_CUSTOMIZATION_RULES.find((r) => r.key === change.key);
    if (rule) lines.push(`${change.action === "add" ? "+ " : "− "}Palavra-chave ${rule.nome}`);
  }
  if (draft.rangeIncrementos !== 0) {
    lines.push(`Alcance ${draft.rangeIncrementos > 0 ? "aumentado" : "reduzido"} em ${Math.abs(draft.rangeIncrementos)} incremento(s).`);
  }
  if (draft.areaIncrementos !== 0) {
    lines.push(`Área ${draft.areaIncrementos > 0 ? "aumentada" : "reduzida"} em ${Math.abs(draft.areaIncrementos) * 3}m.`);
  }
  for (const change of draft.effectChanges) {
    const rule = EFFECT_CUSTOMIZATION_RULES.find((r) => r.key === change.key);
    if (rule) {
      lines.push(
        `${change.action === "add" ? "+ " : "− "}${rule.nome}${change.count > 1 ? ` (x${change.count})` : ""}: ${rule.descricao}`
      );
    }
  }
  return lines.join("\n");
}
