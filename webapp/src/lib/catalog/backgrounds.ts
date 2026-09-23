/**
 * Os 10 Antecedentes do Manual Shinobi V3.1 (Cap. 3, p. 22-27).
 * Cada um também dá "+1 em atributo(s) OU um Talento" — essa escolha não é
 * aplicada automaticamente (depende do catálogo de Talentos, ainda não
 * construído), então fica como lembrete de texto.
 */
export interface BackgroundDefinition {
  key: string;
  nome: string;
  pericias: string;
  kit: string;
  recurso?: string;
}

export const BACKGROUND_CATALOG: BackgroundDefinition[] = [
  { key: "artista", nome: "Artista", pericias: "Acrobacia, Atuação", kit: "Kit de Disfarce" },
  {
    key: "genio",
    nome: "Gênio",
    pericias: "2 à escolha entre: Ninshou, Artes Marciais, Ilusão",
    kit: "—",
    recurso: "Atendendo as Expectativas",
  },
  { key: "esforcado", nome: "Esforçado", pericias: "Acrobacia, Atletismo", kit: "Kit de Armamento" },
  {
    key: "eremita",
    nome: "Eremita",
    pericias: "Adestrar Animais, História",
    kit: "—",
    recurso: "Descoberta",
  },
  {
    key: "lider",
    nome: "Líder",
    pericias: "História, Enganação ou Persuasão",
    kit: "Kit de Falsificação",
  },
  {
    key: "nobre",
    nome: "Nobre",
    pericias: "Persuasão, Intuição",
    kit: "Kit de Segurança",
    recurso: "Posição de Privilégio",
  },
  {
    key: "estudante",
    nome: "Estudante",
    pericias: "Acrobacia + 1 à escolha entre: Ninshou, Artes Marciais, Ilusão",
    kit: "—",
    recurso: "O Nome do Mestre",
  },
  {
    key: "viajante",
    nome: "Viajante",
    pericias: "Intuição, Percepção",
    kit: "Kit Venenoso",
    recurso: "O Indivíduo Exótico",
  },
  {
    key: "encrenqueiro",
    nome: "Encrenqueiro",
    pericias: "Enganação, Prestidigitação",
    kit: "Kit de Falsificação",
    recurso: "Vila de Segredos",
  },
  {
    key: "orfao",
    nome: "Órfão",
    pericias: "Prestidigitação, Furtividade",
    kit: "Kit de Disfarce",
    recurso: "Característica: Lastimável",
  },
];
