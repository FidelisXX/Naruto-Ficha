export type TalentCategory =
  | "geral"
  | "habilidade"
  | "chakra"
  | "ninjutsu"
  | "taijutsu"
  | "genjutsu"
  | "critico";

export interface TalentDefinition {
  key: string;
  nome: string;
  categoria: TalentCategory;
  preRequisito?: string;
  descricao: string;
}
