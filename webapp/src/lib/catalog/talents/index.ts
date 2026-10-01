import type { TalentDefinition } from "@/lib/talents/types";
import { talentosGeral } from "@/lib/catalog/talents/geral";
import { talentosHabilidade1 } from "@/lib/catalog/talents/habilidade1";
import { talentosHabilidade2 } from "@/lib/catalog/talents/habilidade2";
import { talentosChakra } from "@/lib/catalog/talents/chakra";
import { talentosNinjutsu } from "@/lib/catalog/talents/ninjutsu";
import { talentosTaijutsu1 } from "@/lib/catalog/talents/taijutsu1";
import { talentosTaijutsu2 } from "@/lib/catalog/talents/taijutsu2";
import { talentosGenjutsu } from "@/lib/catalog/talents/genjutsu";
import { talentosCritico } from "@/lib/catalog/talents/critico";
import { talentosClasse } from "@/lib/catalog/talents/classe";

/**
 * Catálogo de Talentos (feats) — Manual Shinobi, Cap. 13, p.208-246, mais
 * a categoria Classe de "Observações do Orochimaru", p.342-357.
 * Cobre as 7 categorias gerais do Manual Shinobi (Geral, Habilidade,
 * Chakra, Ninjutsu, Taijutsu — incl. subcategoria Bukijutsu e 8-Portões
 * Internos —, Genjutsu e Crítico) e a categoria Classe (talentos de
 * Arquétipo e de Classe por extenso). A categoria Clã mencionada na
 * introdução do Manual Shinobi fica fora de escopo — depende de outro
 * compêndio não disponível neste projeto (ver ROADMAP.md).
 */
export const TALENT_CATALOG: TalentDefinition[] = [
  ...talentosGeral,
  ...talentosHabilidade1,
  ...talentosHabilidade2,
  ...talentosChakra,
  ...talentosNinjutsu,
  ...talentosTaijutsu1,
  ...talentosTaijutsu2,
  ...talentosGenjutsu,
  ...talentosCritico,
  ...talentosClasse,
];
