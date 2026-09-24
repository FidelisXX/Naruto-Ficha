import { SKILL_DEFINITIONS, type SkillDefinition } from "@/lib/rules";

/**
 * Extrai as perícias candidatas do campo `pericias` de um Antecedente
 * (texto livre — às vezes fixo como "Acrobacia, Atuação", às vezes com
 * cláusulas de escolha como "2 à escolha entre: Ninshou, Artes Marciais,
 * Ilusão"). O Manual Shinobi garante que todo antecedente concede
 * exatamente 2 perícias (p.22), então a UI do wizard sempre limita a
 * seleção a 2 — melhor esforço: casa os nomes de perícia mencionados no
 * texto, na ordem em que aparecem.
 */
export function extractBackgroundSkillCandidates(pericias: string): SkillDefinition[] {
  const lower = pericias.toLowerCase();
  return SKILL_DEFINITIONS.filter((skill) => lower.includes(skill.label.toLowerCase()));
}
