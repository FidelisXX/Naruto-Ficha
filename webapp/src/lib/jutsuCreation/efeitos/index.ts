import type { JutsuCreationFamily, JutsuEffectDefinition } from "@/lib/jutsuCreation/types";
import { NINJUTSU_EFFECTS } from "@/lib/jutsuCreation/efeitos/ninjutsu";
import { GENJUTSU_EFFECTS } from "@/lib/jutsuCreation/efeitos/genjutsu";
import { TAIJUTSU_BUKIJUTSU_EFFECTS } from "@/lib/jutsuCreation/efeitos/taijutsuBukijutsu";

export const EFFECTS_BY_FAMILY: Record<JutsuCreationFamily, JutsuEffectDefinition[]> = {
  ninjutsu: NINJUTSU_EFFECTS,
  genjutsu: GENJUTSU_EFFECTS,
  taijutsuBukijutsu: TAIJUTSU_BUKIJUTSU_EFFECTS,
};

/**
 * Número de Efeitos Condicionais permitidos por padrão, antes de precisar de
 * Efeito Secundário/Terciário. Genjutsu já começa com 2 (Manual Shinobi
 * p.137); Ninjutsu e Taijutsu/Bukijutsu começam com 1 (p.131, p.148).
 */
export const FAMILY_BASE_CONDICIONAIS: Record<JutsuCreationFamily, number> = {
  ninjutsu: 1,
  genjutsu: 2,
  taijutsuBukijutsu: 1,
};

export { NINJUTSU_EFFECTS, GENJUTSU_EFFECTS, TAIJUTSU_BUKIJUTSU_EFFECTS };
