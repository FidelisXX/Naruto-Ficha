/**
 * Progressão de classe — Observações do Orochimaru (compêndio de Classes),
 * o livro que preenche a lacuna sinalizada no ROADMAP Fase 2 item 6: o
 * Manual Shinobi (livro básico) só dá o resumo de cada classe (Dado de
 * Vida/Chakra, salvaguardas, nível de jutsu — ver catalog/classes.ts); este
 * livro traz a tabela nível-a-nível completa (1-20), as características de
 * cada nível por extenso, as subclasses ("Juramentos"/Arquétipos, escolhidos
 * no 2º ou 3º nível conforme a classe) e os Talentos de Classe exclusivos.
 */

export interface ClassFeature {
  nivel: number;
  nome: string;
  descricao: string;
}

/** Uma linha da tabela de progressão nível-a-nível impressa no livro. */
export interface ClassLevelRow {
  nivel: number;
  bonusProficiencia: number;
  /** Nomes das características ganhas neste nível, como aparecem na tabela (pode incluir "(2)" etc. para melhorias repetidas). */
  caracteristicas: string;
  /** Colunas extras específicas da classe (ex: "Miragens Maleáveis", "Jutsu Conhecidos"), como aparecem no cabeçalho da tabela. */
  colunasExtras: Record<string, string>;
}

export interface SubclassFeature {
  nivel: number;
  nome: string;
  descricao: string;
}

/** Uma subclasse/arquétipo ("Juramento de Genjutsu", "Estilo de Caça" etc. — o nome genérico varia por classe). */
export interface SubclassDefinition {
  key: string;
  nome: string;
  classeKey: string;
  descricaoIntro: string;
  features: SubclassFeature[];
}

export interface ClassProgressionDefinition {
  classeKey: string;
  /** Nome do grupo de subclasses como o livro chama (ex: "Juramento de Genjutsu", "Estilo de Caça"). */
  nomeGrupoSubclasse: string;
  /** Nível em que a subclasse é escolhida. */
  nivelEscolhaSubclasse: number;
  levels: ClassLevelRow[];
  features: ClassFeature[];
  subclasses: SubclassDefinition[];
}
