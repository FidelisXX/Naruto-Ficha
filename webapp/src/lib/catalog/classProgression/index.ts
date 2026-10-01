import type { ClassProgressionDefinition } from "@/lib/classProgression/types";
import { progressaoNinjaMedico } from "@/lib/catalog/classProgression/ninjaMedico";
import { progressaoEspecialistaNinjutsu } from "@/lib/catalog/classProgression/especialistaNinjutsu";
import { progressaoEspecialistaArmas } from "@/lib/catalog/classProgression/especialistaArmas";
import { progressaoEspecialistaGenjutsu } from "@/lib/catalog/classProgression/especialistaGenjutsu";
import { progressaoEspecialistaTaijutsu } from "@/lib/catalog/classProgression/especialistaTaijutsu";
import { progressaoNinjaCacador } from "@/lib/catalog/classProgression/ninjaCacador";
import { progressaoAgenteInteligencia } from "@/lib/catalog/classProgression/agenteInteligencia";
import { progressaoNinjaCozinheiro } from "@/lib/catalog/classProgression/ninjaCozinheiro";
import { progressaoNinjaCientista } from "@/lib/catalog/classProgression/ninjaCientista";
import { progressaoNinjaBatedor } from "@/lib/catalog/classProgression/ninjaBatedor";
import { progressaoMestreMarionetes } from "@/lib/catalog/classProgression/mestreMarionetes";

/**
 * Catálogo de Progressão de Classe — "Observações do Orochimaru"
 * (compêndio de Classes). Reúne a tabela nível-a-nível (1-20), as
 * características por extenso e as subclasses das 11 classes do Manual
 * Shinobi (ver catalog/classes.ts para o resumo de cada uma).
 */
export const CLASS_PROGRESSION_CATALOG: ClassProgressionDefinition[] = [
  progressaoNinjaMedico,
  progressaoEspecialistaNinjutsu,
  progressaoEspecialistaArmas,
  progressaoEspecialistaGenjutsu,
  progressaoEspecialistaTaijutsu,
  progressaoNinjaCacador,
  progressaoAgenteInteligencia,
  progressaoNinjaCozinheiro,
  progressaoNinjaCientista,
  progressaoNinjaBatedor,
  progressaoMestreMarionetes,
];

/** Busca a progressão completa de uma classe pelo classeKey (ver catalog/classes.ts). */
export function getClassProgression(classeKey: string): ClassProgressionDefinition | undefined {
  return CLASS_PROGRESSION_CATALOG.find((progressao) => progressao.classeKey === classeKey);
}
