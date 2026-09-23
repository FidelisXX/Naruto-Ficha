import { nanoid } from "nanoid";
import { SKILL_DEFINITIONS } from "@/lib/rules";
import type { Character, CharacterSkills } from "@/lib/character/schema";

function blankSkills(): CharacterSkills {
  return Object.fromEntries(
    SKILL_DEFINITIONS.map((skill) => [skill.key, { proficiency: "none" as const }])
  );
}

export function createBlankCharacter(nome = "Novo Personagem"): Character {
  const now = new Date().toISOString();
  return {
    id: nanoid(),
    createdAt: now,
    updatedAt: now,
    identity: {
      nome,
      cla: "",
      classe: "",
      subClasse: "",
      vila: "",
      equipe: "",
      antecedente: "",
      ambicao: "",
    },
    progression: {
      nivel: 1,
      xp: 0,
      ryo: 0,
      tdi: 0,
      vontadeDoFogo: 0,
    },
    attributes: {
      for: 10,
      des: 10,
      con: 10,
      int: 10,
      sab: 10,
      car: 10,
    },
    skills: blankSkills(),
    vitals: {
      pvMax: 10,
      pvAtual: 10,
      pvTemp: 0,
      pcMax: 10,
      pcAtual: 10,
      pcTemp: 0,
    },
    combat: {
      armorBonus: 0,
      initiativeBonus: 0,
    },
    deathSaves: {
      successes: 0,
      failures: 0,
    },
    conditions: [],
    inventory: [],
    inventoryCapacity: { bonusArmazenamento: 0 },
    concentration: {
      slot1: { jutsuNome: "", custoManutencao: 0 },
      slot2: { jutsuNome: "", custoManutencao: 0 },
    },
    equipment: {},
    knownJutsu: [],
    notes: "",
  };
}

/**
 * Preenche campos que possam faltar em uma ficha salva antes de uma mudança
 * de schema (ex: PJs criados numa versão anterior do app, sem o campo
 * `vitals.ca`). Evita que o app quebre lendo dados antigos do localStorage.
 */
export function normalizeCharacter(raw: Character): Character {
  const blank = createBlankCharacter();
  return {
    ...blank,
    ...raw,
    identity: { ...blank.identity, ...raw.identity },
    progression: { ...blank.progression, ...raw.progression },
    attributes: { ...blank.attributes, ...raw.attributes },
    skills: { ...blank.skills, ...raw.skills },
    vitals: { ...blank.vitals, ...raw.vitals },
    combat: { ...blank.combat, ...raw.combat },
    deathSaves: { ...blank.deathSaves, ...raw.deathSaves },
    conditions: raw.conditions ?? blank.conditions,
    inventory: raw.inventory ?? blank.inventory,
    inventoryCapacity: { ...blank.inventoryCapacity, ...raw.inventoryCapacity },
    concentration: {
      slot1: { ...blank.concentration.slot1, ...raw.concentration?.slot1 },
      slot2: { ...blank.concentration.slot2, ...raw.concentration?.slot2 },
    },
    equipment: { ...blank.equipment, ...raw.equipment },
    knownJutsu: raw.knownJutsu ?? blank.knownJutsu,
  };
}

export function duplicateCharacter(character: Character): Character {
  const now = new Date().toISOString();
  return {
    ...character,
    id: nanoid(),
    createdAt: now,
    updatedAt: now,
    identity: {
      ...character.identity,
      nome: `${character.identity.nome} (cópia)`,
    },
  };
}
