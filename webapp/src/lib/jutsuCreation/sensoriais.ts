/**
 * Palavras-chave sensoriais do Genjutsu (Passo 2, p.134) — definem por qual
 * sentido a ilusão engana o alvo. Vários efeitos de Genjutsu exigem uma
 * destas (ex: Cega exige Visual, Dano exige Tátil). Distinta da tabela de
 * pré-requisitos genérica porque "Inconsciente" custa 1 slot de efeito.
 */
export interface SensoryKeyword {
  key: string;
  nome: string;
  descricao: string;
  requisito?: string;
  /** "Inconsciente" é a única que consome 1 slot de efeito ao ser escolhida. */
  custoSlots: 0 | 1;
}

export const GENJUTSU_SENSORY_KEYWORDS: SensoryKeyword[] = [
  {
    key: "visual",
    nome: "Visual",
    descricao:
      "Engana a percepção visual do alvo. Criaturas com visão verdadeira ou cegueira são imunes a jutsu com esta palavra-chave. Visão do chakra dá vantagem contra jutsu apenas com esta palavra-chave.",
    custoSlots: 0,
  },
  {
    key: "tatil",
    nome: "Tátil",
    descricao:
      "Engana a percepção de toque do alvo (prazer e dor). Obrigatória para que um Genjutsu cause dano.",
    requisito: "Obrigatório se o jutsu tiver o efeito Dano.",
    custoSlots: 0,
  },
  {
    key: "auditivo",
    nome: "Auditivo",
    descricao: "Engana a percepção sonora do alvo. Surdez dá imunidade a jutsu apenas com esta palavra-chave.",
    custoSlots: 0,
  },
  {
    key: "inalado",
    nome: "Inalado",
    descricao: "Alcance maior que 1,5 metro, percorrendo distância pelo ar para interagir com o alvo.",
    requisito: "Exige o componente Ferramenta Ninja (FN).",
    custoSlots: 0,
  },
  {
    key: "inconsciente",
    nome: "Inconsciente",
    descricao:
      "Afeta completamente a capacidade do alvo de discernir o real do falso. Sutil o suficiente para não ser notado — exige um teste de Sabedoria (Ilusões) contra a CD do Genjutsu para perceber o efeito.",
    custoSlots: 1,
  },
];
