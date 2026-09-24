import { z } from "zod";
import { ATTRIBUTE_KEYS, SKILL_DEFINITIONS } from "@/lib/rules";

/**
 * Jutsu customizado salvo pelo jogador (Fase 5 — Assistente de Criação de
 * Jutsu). Mesmo formato de `JutsuDefinition` (lib/jutsu/types.ts), mas
 * validado via Zod por fazer parte do estado persistido do personagem —
 * diferente dos catálogos prontos (Fase 4), que são dados estáticos do app.
 */
export const customJutsuSchema = z.object({
  key: z.string(),
  nome: z.string(),
  tipo: z.enum(["ninjutsu", "genjutsu", "taijutsu", "bukijutsu"]),
  rank: z.enum(["E", "D", "C", "B", "A", "S"]),
  natureza: z.enum(["nao-elemental", "medico", "terra", "vento", "fogo", "agua", "relampago"]).optional(),
  tempoConjuracao: z.string(),
  alcance: z.string(),
  duracao: z.string(),
  componentes: z.array(z.string()),
  custoChakra: z.number().int().min(0),
  palavrasChave: z.array(z.string()),
  descricao: z.string(),
  emNiveisSuperiores: z.string().optional(),
});

export const attributeScoresSchema = z.object(
  Object.fromEntries(ATTRIBUTE_KEYS.map((key) => [key, z.number().int().min(1).max(30)])) as Record<
    (typeof ATTRIBUTE_KEYS)[number],
    z.ZodNumber
  >
);

export const skillProficiencyLevelSchema = z.enum([
  "none",
  "proficient",
  "mastery1",
  "mastery2",
  "mastery3",
]);

export const skillStateSchema = z.object({
  proficiency: skillProficiencyLevelSchema,
  attributeOverride: z.enum(ATTRIBUTE_KEYS).optional(),
});

export const skillsSchema = z.object(
  Object.fromEntries(SKILL_DEFINITIONS.map((skill) => [skill.key, skillStateSchema])) as Record<
    string,
    typeof skillStateSchema
  >
);

export const characterIdentitySchema = z.object({
  nome: z.string(),
  cla: z.string(),
  classe: z.string(),
  subClasse: z.string(),
  vila: z.string(),
  equipe: z.string(),
  antecedente: z.string(),
  ambicao: z.string(),
});

export const characterProgressionSchema = z.object({
  nivel: z.number().int().min(1).max(20),
  xp: z.number().int().min(0),
  ryo: z.number().int().min(0),
  tdi: z.number().int().min(0),
  vontadeDoFogo: z.number().int().min(0).max(3),
});

export const characterVitalsSchema = z.object({
  pvMax: z.number().int().min(0),
  pvAtual: z.number().int(),
  pvTemp: z.number().int().min(0),
  pcMax: z.number().int().min(0),
  pcAtual: z.number().int(),
  pcTemp: z.number().int().min(0),
});

/**
 * Entradas manuais que alimentam as fórmulas de combate (CA, Iniciativa).
 * Correspondem às notas [9] e [10] da Ficha 3.1 ("insira quaisquer bônus de
 * Iniciativa/Classe de Armadura"), até existir um catálogo de armaduras (Fase 3).
 */
export const characterCombatSchema = z.object({
  armorBonus: z.number().int().min(0),
  initiativeBonus: z.number().int(),
});

export const deathSavesSchema = z.object({
  successes: z.number().int().min(0).max(3),
  failures: z.number().int().min(0).max(3),
});

/** Uma condição ativa aplicada ao personagem (ver catalog/conditions.ts). */
export const activeConditionSchema = z.object({
  key: z.string(),
  graduacao: z.number().int().min(1).default(1),
});

/**
 * Item de inventário. `catalogRef` é opcional — aponta para uma entrada de
 * um dos catálogos de equipamento (arma/armadura/kit/consumível) quando o
 * item foi adicionado a partir de lá; itens totalmente livres (sem
 * catálogo) também são suportados, só preenchendo nome/volume/quantidade.
 */
export const inventoryItemSchema = z.object({
  id: z.string(),
  nome: z.string(),
  volume: z.number().min(0),
  quantidade: z.number().int().min(1),
  categoria: z.string().optional(),
  catalogRef: z.string().optional(),
  equipado: z.boolean().optional(),
  notas: z.string().optional(),
});

/**
 * Bônus de capacidade de Volume vindo de itens de armazenamento (mochila,
 * bolsas — ver catalog/tools.ts STORAGE_ITEM_CATALOG). Preenchido
 * manualmente pelo jogador, como os demais bônus de catálogo do app.
 */
export const inventoryCapacitySchema = z.object({
  bonusArmazenamento: z.number().int().min(0),
});

/** Slots de concentração (até 2 jutsus simultâneos, ver rules.ts). */
export const concentrationSlotSchema = z.object({
  jutsuNome: z.string(),
  custoManutencao: z.number().int().min(0),
});

export const concentrationSchema = z.object({
  slot1: concentrationSlotSchema,
  slot2: concentrationSlotSchema,
});

/**
 * Referências de equipamento equipado, usadas apenas para exibir o card de
 * referência (bônus de armadura, dano de arma) — não substituem os campos
 * manuais de `combat` (armorBonus etc.), que continuam sendo a fonte da
 * verdade dos cálculos, aplicados via botão "usar", como no resto do app.
 */
export const equipmentRefsSchema = z.object({
  armaduraKey: z.string().optional(),
  armaPrincipalKey: z.string().optional(),
});

export const characterSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  identity: characterIdentitySchema,
  progression: characterProgressionSchema,
  attributes: attributeScoresSchema,
  skills: skillsSchema,
  vitals: characterVitalsSchema,
  combat: characterCombatSchema,
  deathSaves: deathSavesSchema,
  conditions: z.array(activeConditionSchema),
  inventory: z.array(inventoryItemSchema),
  inventoryCapacity: inventoryCapacitySchema,
  concentration: concentrationSchema,
  equipment: equipmentRefsSchema,
  /** Chaves de JutsuDefinition (catalog/jutsu) que o personagem conhece. */
  knownJutsu: z.array(z.string()),
  /** Jutsus criados/personalizados pelo jogador (Fase 5), sempre "conhecidos". */
  customJutsu: z.array(customJutsuSchema),
  notes: z.string(),
});

export type Character = z.infer<typeof characterSchema>;
export type CustomJutsu = z.infer<typeof customJutsuSchema>;
export type CharacterIdentity = z.infer<typeof characterIdentitySchema>;
export type CharacterProgression = z.infer<typeof characterProgressionSchema>;
export type CharacterVitals = z.infer<typeof characterVitalsSchema>;
export type CharacterCombat = z.infer<typeof characterCombatSchema>;
export type CharacterSkills = z.infer<typeof skillsSchema>;
export type SkillState = z.infer<typeof skillStateSchema>;
export type SkillProficiencyLevel = z.infer<typeof skillProficiencyLevelSchema>;
export type AttributeScores = z.infer<typeof attributeScoresSchema>;
export type ActiveCondition = z.infer<typeof activeConditionSchema>;
export type InventoryItem = z.infer<typeof inventoryItemSchema>;
export type InventoryCapacity = z.infer<typeof inventoryCapacitySchema>;
export type ConcentrationSlot = z.infer<typeof concentrationSlotSchema>;
export type CharacterConcentration = z.infer<typeof concentrationSchema>;
export type CharacterEquipmentRefs = z.infer<typeof equipmentRefsSchema>;
