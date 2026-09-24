import type { JutsuComponente, JutsuDefinition, JutsuNatureza, JutsuRank, JutsuTipo } from "@/lib/jutsu/types";
import { JUTSU_NATUREZA_LABELS } from "@/lib/jutsu/types";
import {
  CREATION_COST_TABLE,
  EFFECT_CATEGORIA_LABELS,
  RANK_EFFECT_SLOTS,
  familyOfTipo,
  type ComponentRule,
  type EffectCategoria,
  type JutsuEffectDefinition,
  type SelectedEffect,
} from "@/lib/jutsuCreation/types";
import { EFFECTS_BY_FAMILY, FAMILY_BASE_CONDICIONAIS } from "@/lib/jutsuCreation/efeitos";
import { PREREQUISITES_BY_FAMILY } from "@/lib/jutsuCreation/prerequisitos";
import { getComponentRules } from "@/lib/jutsuCreation/componentes";
import { getRangeOptions } from "@/lib/jutsuCreation/alcance";
import { GENJUTSU_SENSORY_KEYWORDS } from "@/lib/jutsuCreation/sensoriais";

export interface JutsuCreationDraft {
  tipo: JutsuTipo | null;
  rank: JutsuRank | null;
  nome: string;
  prerequisitos: string[];
  naturezas: JutsuNatureza[];
  /** Palavras-chave sensoriais escolhidas (só relevante para Genjutsu — ver sensoriais.ts). */
  sensoriais: string[];
  componentesExtras: JutsuComponente[];
  alcanceKey: string | null;
  categorias: EffectCategoria[];
  efeitos: SelectedEffect[];
}

export function blankDraft(): JutsuCreationDraft {
  return {
    tipo: null,
    rank: null,
    nome: "",
    prerequisitos: [],
    naturezas: [],
    sensoriais: [],
    componentesExtras: [],
    alcanceKey: null,
    categorias: [],
    efeitos: [],
  };
}

/** Efeitos disponíveis: genéricos + os das categorias escolhidas (até 2). */
export function getAvailableEffects(tipo: JutsuTipo, categorias: EffectCategoria[]): JutsuEffectDefinition[] {
  const family = familyOfTipo(tipo);
  const all = EFFECTS_BY_FAMILY[family];
  return all.filter((e) => e.categoria === "generico" || categorias.includes(e.categoria));
}

export function findEffect(tipo: JutsuTipo, key: string): JutsuEffectDefinition | undefined {
  const family = familyOfTipo(tipo);
  return EFFECTS_BY_FAMILY[family].find((e) => e.key === key);
}

/** Slots totais disponíveis: base do rank + bônus dos pré-requisitos escolhidos. */
export function maxSlots(tipo: JutsuTipo, rank: JutsuRank, prerequisitos: string[]): number {
  const family = familyOfTipo(tipo);
  const prereqDefs = PREREQUISITES_BY_FAMILY[family];
  const bonus = prerequisitos.reduce((sum, key) => {
    const p = prereqDefs.find((pr) => pr.key === key);
    return sum + (p?.slotBonus ?? 0);
  }, 0);
  return RANK_EFFECT_SLOTS[rank] + bonus;
}

/**
 * Slots gastos pelos efeitos selecionados. Simplificação deliberada: cada
 * ocorrência custa o `custoSlots` impresso no catálogo (0 para os poucos
 * efeitos "Especial: não custa slot"), sem tentar descontar automaticamente
 * o Efeito Condicional extra que Efeito Secundário/Terciário desbloqueiam
 * "de graça" (Manual Shinobi p.131/139) — ver `maxCondicionaisAllowed`, que
 * controla quantos Condicionais cabem, não o custo em slots. Preferimos
 * cobrar o slot normalmente a arriscar uma ficha subprecificada.
 */
export function usedSlots(tipo: JutsuTipo, efeitos: SelectedEffect[], sensoriais: string[] = []): number {
  const effectSlots = efeitos.reduce((sum, sel) => {
    const def = findEffect(tipo, sel.effectKey);
    return sum + (def?.custoSlots ?? 0);
  }, 0);
  const sensorySlots = sensoriais.reduce((sum, key) => {
    const def = GENJUTSU_SENSORY_KEYWORDS.find((s) => s.key === key);
    return sum + (def?.custoSlots ?? 0);
  }, 0);
  return effectSlots + sensorySlots;
}

export function condicionaisCount(tipo: JutsuTipo, efeitos: SelectedEffect[]): number {
  return efeitos.filter((sel) => findEffect(tipo, sel.effectKey)?.efeitoCondicional).length;
}

const UNLOCK_KEYS = new Set(["efeito-secundario", "efeito-terciario"]);

export function maxCondicionaisAllowed(tipo: JutsuTipo, efeitos: SelectedEffect[]): number {
  const family = familyOfTipo(tipo);
  const unlocks = efeitos.filter((sel) => UNLOCK_KEYS.has(sel.effectKey)).length;
  return FAMILY_BASE_CONDICIONAIS[family] + unlocks;
}

export function repeticoesDe(efeitos: SelectedEffect[], effectKey: string): number {
  return efeitos.filter((sel) => sel.effectKey === effectKey).length;
}

export function creationCost(rank: JutsuRank) {
  return CREATION_COST_TABLE[rank];
}

/**
 * Se um componente marcado como "condicional" (ex: Moldagem de Chakra) está
 * de fato ativo no rascunho atual — automaticamente, a partir dos
 * pré-requisitos escolhidos (`dependsOnPrereq`), sem exigir um clique
 * manual do jogador (que não faria sentido para uma regra automática).
 */
export function isComponentActive(rule: ComponentRule, draft: Pick<JutsuCreationDraft, "prerequisitos" | "componentesExtras">): boolean {
  if (rule.requisito === "sempre") return true;
  if (rule.requisito === "condicional") {
    return (rule.dependsOnPrereq ?? []).some((p) => draft.prerequisitos.includes(p));
  }
  if (rule.requisito === "opcional") {
    return draft.componentesExtras.includes(rule.componente);
  }
  return false;
}

export interface DraftValidation {
  errors: string[];
  warnings: string[];
}

export function validateDraft(draft: JutsuCreationDraft): DraftValidation {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!draft.tipo) errors.push("Escolha o tipo de jutsu.");
  if (!draft.rank) errors.push("Escolha o rank do jutsu.");
  if (!draft.alcanceKey) errors.push("Escolha o alcance do jutsu.");
  if (draft.categorias.length === 0) errors.push("Escolha ao menos 1 categoria de efeito (Ofensivo/Defensivo/Ao Controle/Suporte).");
  if (draft.categorias.length > 2) errors.push("Escolha no máximo 2 categorias de efeito.");
  if (!draft.nome.trim()) errors.push("Dê um nome ao jutsu.");

  if (draft.tipo && draft.rank) {
    if (draft.rank === "E") {
      const hasRecurso = draft.prerequisitos.some((p) => p.startsWith("recurso-necessario"));
      if (hasRecurso) errors.push("Recurso Necessário não pode ser escolhido no Rank E.");
    }

    const max = maxSlots(draft.tipo, draft.rank, draft.prerequisitos);
    const used = usedSlots(draft.tipo, draft.efeitos, draft.sensoriais);
    if (used > max) {
      errors.push(`Slots de efeito excedidos: ${used}/${max}.`);
    } else if (used < max) {
      warnings.push(`Ainda restam ${max - used} slot(s) de efeito não usados (${used}/${max}).`);
    }

    const condicionais = condicionaisCount(draft.tipo, draft.efeitos);
    const condicionaisMax = maxCondicionaisAllowed(draft.tipo, draft.efeitos);
    if (condicionais > condicionaisMax) {
      errors.push(
        `Efeitos Condicionais demais: ${condicionais}/${condicionaisMax} (adicione Efeito Secundário${
          familyOfTipo(draft.tipo) === "genjutsu" ? " ou Efeito Terciário" : ""
        } para liberar mais).`
      );
    }

    const family = familyOfTipo(draft.tipo);
    const effects = EFFECTS_BY_FAMILY[family];
    for (const def of effects) {
      const reps = repeticoesDe(draft.efeitos, def.key);
      const cap = def.maxRepeticoes ?? 1;
      if (reps > cap) {
        errors.push(`"${def.nome}" foi escolhido ${reps}x, mas o máximo é ${cap}x.`);
      }
    }

    if (family === "genjutsu") {
      const hasDano = draft.efeitos.some((e) => e.effectKey === "dano");
      if (hasDano && !draft.sensoriais.includes("tatil")) {
        errors.push("O efeito Dano exige a palavra-chave sensorial Tátil.");
      }
    }
  }

  return { errors, warnings };
}

/**
 * Monta o texto de descrição final concatenando o texto de cada efeito
 * escolhido (agrupados por categoria), no mesmo espírito narrativo/textual
 * do catálogo de jutsus prontos (Fase 4) — a ficha guarda a regra em texto
 * para o jogador aplicar à mesa, sem simular mecânica.
 */
export function assembleDescricao(draft: JutsuCreationDraft): string {
  if (!draft.tipo) return "";
  const parts: string[] = [];
  const byCategoria = new Map<EffectCategoria | "generico", SelectedEffect[]>();
  for (const sel of draft.efeitos) {
    const def = findEffect(draft.tipo, sel.effectKey);
    if (!def) continue;
    const list = byCategoria.get(def.categoria) ?? [];
    list.push(sel);
    byCategoria.set(def.categoria, list);
  }

  const order: (EffectCategoria | "generico")[] = ["generico", "ofensivo", "defensivo", "controle", "suporte"];
  for (const cat of order) {
    const sels = byCategoria.get(cat);
    if (!sels || sels.length === 0) continue;
    if (cat !== "generico") parts.push(`[${EFFECT_CATEGORIA_LABELS[cat]}]`);
    for (const sel of sels) {
      const def = findEffect(draft.tipo, sel.effectKey);
      if (!def) continue;
      const dado = sel.dadoEscolhido ? ` (${sel.dadoEscolhido})` : "";
      parts.push(`${def.nome}${dado}: ${def.descricao}`);
    }
  }
  return parts.join("\n\n");
}

/** Monta o JutsuDefinition final a partir do rascunho, pronto para salvar. */
export function assembleJutsu(draft: JutsuCreationDraft, key: string): JutsuDefinition | null {
  if (!draft.tipo || !draft.rank || !draft.alcanceKey) return null;
  const range = getRangeOptions(draft.tipo).find((r) => r.key === draft.alcanceKey);
  const componentRules = getComponentRules(draft.tipo);
  const componentes = componentRules.filter((r) => isComponentActive(r, draft)).map((r) => r.componente);

  const palavrasChave: string[] = [
    draft.tipo === "bukijutsu" ? "Bukijutsu" : draft.tipo === "taijutsu" ? "Taijutsu" : draft.tipo === "genjutsu" ? "Genjutsu" : "Ninjutsu",
    ...draft.prerequisitos
      .filter((p) => p !== "natureza-de-chakra")
      .map((p) => {
        const family = familyOfTipo(draft.tipo!);
        return PREREQUISITES_BY_FAMILY[family].find((pr) => pr.key === p)?.nome ?? p;
      }),
    ...draft.naturezas.map((n) => JUTSU_NATUREZA_LABELS[n]),
    ...draft.sensoriais.map((s) => GENJUTSU_SENSORY_KEYWORDS.find((k) => k.key === s)?.nome ?? s),
  ];

  const cost = creationCost(draft.rank);
  const veloz = draft.efeitos.filter((e) => e.effectKey === "veloz").length;
  const tempoConjuracao = veloz >= 2 ? "1 Reação" : veloz === 1 ? "1 Ação Bônus" : "1 Ação";

  return {
    key,
    nome: draft.nome.trim() || "Jutsu sem nome",
    tipo: draft.tipo,
    rank: draft.rank,
    natureza: draft.naturezas[0],
    tempoConjuracao,
    alcance: range?.nome ?? "Próprio",
    duracao: draft.efeitos.some((e) => e.effectKey === "duradouro") ? "Concentração, até 1 minuto" : "Instantâneo",
    componentes,
    custoChakra: cost.custoChakra,
    palavrasChave,
    descricao: assembleDescricao(draft),
  };
}
