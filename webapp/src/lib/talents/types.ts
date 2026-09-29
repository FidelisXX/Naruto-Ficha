export type TalentCategory =
  | "geral"
  | "habilidade"
  | "chakra"
  | "ninjutsu"
  | "taijutsu"
  | "genjutsu"
  | "critico"
  | "classe";

export interface TalentDefinition {
  key: string;
  nome: string;
  categoria: TalentCategory;
  preRequisito?: string;
  descricao: string;
  /** Só para categoria "classe" (Observações do Orochimaru, p.342-357): a classe que concede este talento. */
  classeKey?: string;
  /** Só para categoria "classe": quando o talento é exclusivo de uma subclasse/arquétipo específico. */
  arquetipoKey?: string;
}
