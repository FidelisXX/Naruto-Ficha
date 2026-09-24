import { nanoid } from "nanoid";
import type { Character } from "@/lib/character/schema";
import { createBlankCharacter } from "@/lib/character/factory";
import { ATTRIBUTE_KEYS, abilityModifier, type AttributeKey } from "@/lib/rules";
import { CLAN_CATALOG } from "@/lib/catalog/clans";
import { CLASS_CATALOG, suggestedMaxFromDie } from "@/lib/catalog/classes";
import { BACKGROUND_CATALOG } from "@/lib/catalog/backgrounds";
import { ARMOR_CATALOG, WEAPON_CATALOG } from "@/lib/catalog/equipment";
import { JUTSU_CATALOG } from "@/lib/catalog/jutsu";
import { parseAttributeChoice } from "@/lib/characterCreation/clanBonusParsing";
import { pointBuyCost, POINT_BUY_BUDGET } from "@/lib/characterCreation/attributeGeneration";
import type { CreationDraft } from "@/lib/characterCreation/types";

export function getClan(draft: CreationDraft) {
  return CLAN_CATALOG.find((c) => c.key === draft.clanKey) ?? null;
}

export function getClass(draft: CreationDraft) {
  return CLASS_CATALOG.find((c) => c.key === draft.classKey) ?? null;
}

export function getBackground(draft: CreationDraft) {
  return BACKGROUND_CATALOG.find((b) => b.key === draft.backgroundKey) ?? null;
}

/** Bônus de atributo total do clã (fixo + escolhas já feitas para as cláusulas "à escolha"). */
export function clanAttributeBonus(draft: CreationDraft): Partial<Record<AttributeKey, number>> {
  const clan = getClan(draft);
  if (!clan) return {};
  const bonus: Partial<Record<AttributeKey, number>> = { ...clan.atributos };
  const clauses = parseAttributeChoice(clan.atributoEscolha);
  clauses.forEach((clause, index) => {
    const chosen = draft.clanChoiceSelections[index];
    if (chosen) bonus[chosen] = (bonus[chosen] ?? 0) + clause.bonus;
  });
  return bonus;
}

/** Pontuação final de um atributo = valor bruto atribuído + bônus de clã. */
export function finalAttributeScore(draft: CreationDraft, key: AttributeKey): number {
  const raw = draft.rawScores[key] ?? 10;
  const bonus = clanAttributeBonus(draft)[key] ?? 0;
  return raw + bonus;
}

export function pointBuyRemaining(draft: CreationDraft): number {
  const spent = ATTRIBUTE_KEYS.reduce((sum, key) => sum + pointBuyCost(draft.rawScores[key] ?? 8), 0);
  return POINT_BUY_BUDGET - spent;
}

/** Quantos dos valores disponíveis (Matriz Padrão / Rolagem) já foram usados, e quais sobram. */
export function remainingAvailableScores(draft: CreationDraft): number[] {
  const used = [...ATTRIBUTE_KEYS.map((key) => draft.rawScores[key]).filter((v): v is number => v !== null)];
  const pool = [...draft.availableScores];
  for (const value of used) {
    const idx = pool.indexOf(value);
    if (idx !== -1) pool.splice(idx, 1);
  }
  return pool;
}

export interface DraftValidation {
  errors: string[];
}

export function validateStep(draft: CreationDraft, step: number): DraftValidation {
  const errors: string[] = [];
  if (step === 0 && !draft.clanKey) errors.push("Escolha um clã.");
  if (step === 1 && !draft.classKey) errors.push("Escolha uma classe.");
  if (step === 2) {
    if (!draft.attributeMethod) errors.push("Escolha um método de geração de atributos.");
    const missing = ATTRIBUTE_KEYS.filter((key) => draft.rawScores[key] === null);
    if (missing.length > 0) errors.push("Atribua um valor para todos os 6 atributos.");
    if (draft.attributeMethod === "compra-de-pontos" && pointBuyRemaining(draft) < 0) {
      errors.push("Você gastou mais pontos do que o orçamento de 30.");
    }
    const clan = getClan(draft);
    const clauses = parseAttributeChoice(clan?.atributoEscolha);
    const unresolved = clauses.some((_, index) => !draft.clanChoiceSelections[index]);
    if (unresolved) errors.push("Escolha o atributo para o bônus opcional do clã.");
  }
  if (step === 3) {
    if (!draft.nome.trim()) errors.push("Dê um nome ao personagem.");
    if (!draft.backgroundKey) errors.push("Escolha um antecedente.");
    if (draft.selectedSkillKeys.length !== 2) errors.push("Escolha exatamente 2 perícias do antecedente.");
  }
  return { errors };
}

/** Monta o Character final a partir de todas as escolhas do wizard. */
export function assembleCharacter(draft: CreationDraft): Character {
  const blank = createBlankCharacter(draft.nome.trim() || "Novo Personagem");
  const clan = getClan(draft);
  const classe = getClass(draft);
  const background = getBackground(draft);
  const armadura = ARMOR_CATALOG.find((a) => a.key === draft.armaduraKey);
  const armaPrincipal = WEAPON_CATALOG.find((w) => w.key === draft.armaPrincipalKey);

  const attributes = Object.fromEntries(
    ATTRIBUTE_KEYS.map((key) => [key, finalAttributeScore(draft, key)])
  ) as Character["attributes"];

  const conMod = abilityModifier(attributes.con);
  const pvMax = classe ? suggestedMaxFromDie(classe.hitDie, 1, conMod) : blank.vitals.pvMax;
  const pcMax = classe ? suggestedMaxFromDie(classe.chakraDie, 1, conMod) : blank.vitals.pcMax;

  const skills = { ...blank.skills };
  for (const skillKey of draft.selectedSkillKeys) {
    if (skills[skillKey]) skills[skillKey] = { ...skills[skillKey], proficiency: "proficient" };
  }

  const inventory: Character["inventory"] = [];
  if (armadura) {
    inventory.push({
      id: nanoid(),
      nome: armadura.nome,
      volume: armadura.volume,
      quantidade: 1,
      categoria: "Armadura",
      catalogRef: armadura.key,
      equipado: true,
    });
  }
  if (armaPrincipal) {
    inventory.push({
      id: nanoid(),
      nome: armaPrincipal.nome,
      volume: armaPrincipal.volume,
      quantidade: 1,
      categoria: "Arma",
      catalogRef: armaPrincipal.key,
      equipado: true,
    });
  }

  return {
    ...blank,
    identity: {
      ...blank.identity,
      nome: draft.nome.trim() || "Novo Personagem",
      cla: clan?.nome ?? "",
      classe: classe?.nome ?? "",
      vila: draft.vila.trim(),
      equipe: draft.equipe.trim(),
      antecedente: background?.nome ?? "",
      ambicao: draft.ambicao.trim(),
    },
    attributes,
    skills,
    vitals: { ...blank.vitals, pvMax, pvAtual: pvMax, pcMax, pcAtual: pcMax },
    combat: { ...blank.combat, armorBonus: armadura?.bonusArmadura ?? 0 },
    equipment: {
      armaduraKey: armadura?.key,
      armaPrincipalKey: armaPrincipal?.key,
    },
    inventory,
    knownJutsu: [...draft.jutsuKeys],
  };
}

/** Jutsu de Rank E disponíveis para escolher como iniciais (Rank D exige nível 4 — Manual Shinobi). */
export function starterJutsuOptions() {
  return JUTSU_CATALOG.filter((j) => j.rank === "E");
}
