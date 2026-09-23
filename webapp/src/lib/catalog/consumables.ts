/**
 * Catálogo de Consumíveis — Manual Shinobi, Cap. 5: Equipamento de Aventura,
 * p.53-58 (pílulas, kits de primeiros socorros, venenos, pergaminhos).
 */

export type PillCategory = "racao" | "chakra" | "sangue" | "genjutsu";

export const PILL_CATEGORY_LABELS: Record<PillCategory, string> = {
  racao: "Ração Militar",
  chakra: "Chakra",
  sangue: "Sangue",
  genjutsu: "Genjutsu",
};

export interface PillDefinition {
  key: string;
  nome: string;
  efeitoDado: string;
  quantidade: number;
  custo: string;
  categoria: PillCategory;
  descricao: string;
}

export const PILL_CATALOG: PillDefinition[] = [
  { key: "pilula-de-racao-militar", nome: "Pílula de Ração Militar", efeitoDado: "2d10+5", quantidade: 1, custo: "150 Ryo", categoria: "racao", descricao: "Consumida como ação bônus, concede PV e chakra temporários iguais à rolagem por 1 hora; não acumula com doses anteriores, utilizável no máx. 2x por 24h." },
  { key: "pilula-de-racao-militar-maior", nome: "Pílula de Ração Militar Maior", efeitoDado: "4d10+5", quantidade: 1, custo: "450 Ryo", categoria: "racao", descricao: "Versão aprimorada da Pílula de Ração Militar; mesmo efeito e limites, dado maior." },
  { key: "pilula-de-racao-militar-superior", nome: "Pílula de Ração Militar Superior", efeitoDado: "6d10+5", quantidade: 1, custo: "850 Ryo", categoria: "racao", descricao: "Versão superior da Pílula de Ração Militar; mesmo efeito e limites, dado maior." },
  { key: "pilula-de-racao-militar-suprema", nome: "Pílula de Ração Militar Suprema", efeitoDado: "8d10+5", quantidade: 1, custo: "1200 Ryo", categoria: "racao", descricao: "Versão suprema da Pílula de Ração Militar; mesmo efeito e limites, dado maior." },

  { key: "pilula-de-sangue", nome: "Pílula de Sangue", efeitoDado: "2d6+5", quantidade: 1, custo: "50 Ryo", categoria: "sangue", descricao: "Consumida como ação bônus, cura PV iguais à rolagem." },
  { key: "pilula-de-sangue-maior", nome: "Pílula de Sangue Maior", efeitoDado: "3d6+10", quantidade: 1, custo: "150 Ryo", categoria: "sangue", descricao: "Versão aprimorada da Pílula de Sangue; cura PV iguais à rolagem." },
  { key: "pilula-de-sangue-superior", nome: "Pílula de Sangue Superior", efeitoDado: "5d6+15", quantidade: 1, custo: "500 Ryo", categoria: "sangue", descricao: "Versão superior da Pílula de Sangue; cura PV iguais à rolagem." },
  { key: "pilula-de-sangue-suprema", nome: "Pílula de Sangue Suprema", efeitoDado: "7d6+20", quantidade: 1, custo: "1000 Ryo", categoria: "sangue", descricao: "Versão suprema da Pílula de Sangue; cura PV iguais à rolagem." },

  { key: "pilula-de-chakra", nome: "Pílula de Chakra", efeitoDado: "2d6+2", quantidade: 1, custo: "50 Ryo", categoria: "chakra", descricao: "Consumida como ação bônus, restaura chakra igual à rolagem; utilizável até 5x por descanso longo." },
  { key: "pilula-de-chakra-maior", nome: "Pílula de Chakra Maior", efeitoDado: "3d6+5", quantidade: 1, custo: "200 Ryo", categoria: "chakra", descricao: "Versão aprimorada da Pílula de Chakra; mesmo efeito e limite (5x/descanso longo)." },
  { key: "pilula-de-chakra-superior", nome: "Pílula de Chakra Superior", efeitoDado: "5d6+10", quantidade: 1, custo: "500 Ryo", categoria: "chakra", descricao: "Versão superior da Pílula de Chakra; mesmo efeito e limite (5x/descanso longo)." },
  { key: "pilula-de-chakra-suprema", nome: "Pílula de Chakra Suprema", efeitoDado: "7d6+15", quantidade: 1, custo: "1000 Ryo", categoria: "chakra", descricao: "Versão suprema da Pílula de Chakra; mesmo efeito e limite (5x/descanso longo)." },

  { key: "pilula-genjutsu", nome: "Pílula de Genjutsu", efeitoDado: "CD 15 (Sabedoria)", quantidade: 2, custo: "100 Ryo", categoria: "genjutsu", descricao: "Ao ser ingerida, força teste de resistência de Sabedoria CD 15; falha deixa a criatura paralisada em estado hipnótico por até 1 hora (desperta com dano ou se for sacudida)." },
];

export interface FirstAidKitTierDefinition {
  key: string;
  nome: string;
  tier: number;
  curaFerido: string;
  curaCritica: string;
  custo: string;
}

/** curaFerido = uso em descanso curto; curaCritica = uso em descanso longo (1 utilização por criatura). */
export const FIRST_AID_KIT_CATALOG: FirstAidKitTierDefinition[] = [
  { key: "kit-primeiros-socorros-1", nome: "Kit de Primeiros Socorros", tier: 1, curaFerido: "2d4", curaCritica: "3d6", custo: "100 Ryo" },
  { key: "kit-primeiros-socorros-2", nome: "Kit de Primeiros Socorros Maior", tier: 2, curaFerido: "4d4", curaCritica: "5d6", custo: "250 Ryo" },
  { key: "kit-primeiros-socorros-3", nome: "Kit de Primeiros Socorros Superior", tier: 3, curaFerido: "6d4", curaCritica: "7d6", custo: "750 Ryo" },
  { key: "kit-primeiros-socorros-4", nome: "Kit de Primeiros Socorros Suprema", tier: 4, curaFerido: "8d4", curaCritica: "9d6", custo: "1500 Ryo" },
];

export interface PoisonDefinition {
  key: string;
  nome: string;
  rank: string;
  cdCriar: number;
  uso: number;
  quantidade: number;
  custo: string;
  efeito: string;
}

export const POISON_CATALOG: PoisonDefinition[] = [
  { key: "sangue-de-assassinos", nome: "Sangue de Assassinos", rank: "Rank-D", cdCriar: 20, uso: 2, quantidade: 2, custo: "250 Ryo", efeito: "Resistência de Constituição CD 12; falha causa 2d6 de dano de veneno e Envenenado por 24h; sucesso, metade do dano." },
  { key: "veneno-de-serpente", nome: "Veneno de Serpente", rank: "Rank-D", cdCriar: 22, uso: 2, quantidade: 2, custo: "275 Ryo", efeito: "Extraído de cobra venenosa. Resistência de Constituição CD 13; falha causa 4d6 de dano de veneno e Envenenado por 24h." },
  { key: "lagrimas-da-meia-noite", nome: "Lágrimas da Meia-Noite", rank: "Rank-C", cdCriar: 23, uso: 2, quantidade: 2, custo: "350 Ryo", efeito: "Só faz efeito à meia-noite se não neutralizado antes: Constituição CD 15, 6d6 de dano de veneno em falha (metade em sucesso)." },
  { key: "eter", nome: "Éter", rank: "Rank-C", cdCriar: 24, uso: 2, quantidade: 2, custo: "375 Ryo", efeito: "Mais usado em espionagem/manipulação. Constituição CD 16; falha encanta a criatura pela primeira que vir, obedecendo um comando por 24h." },
  { key: "maldicao-do-lobo", nome: "Maldição do Lobo", rank: "Rank-C", cdCriar: 25, uso: 2, quantidade: 2, custo: "400 Ryo", efeito: "Efeito mecânico não localizado no texto-fonte lido até agora — possível divergência de nome com 'Acônito' (descrito em prosa, sem linha correspondente nesta tabela)." },
  { key: "beijo-do-diabo", nome: "Beijo do Diabo", rank: "Rank-B", cdCriar: 26, uso: 2, quantidade: 2, custo: "750 Ryo", efeito: "Melhor ingerido. Constituição CD 20; falha causa 8d8 de dano de fogo (ignora resistência, metade em sucesso); depois, a cada rodada até passar em CD 18, +3d8 de fogo em falha." },
  { key: "veneno-kamizuru", nome: "Veneno Kamizuru", rank: "Rank-B", cdCriar: 28, uso: 2, quantidade: 2, custo: "950 Ryo", efeito: "Extraído da Floresta de Abelhas de Kamizu. Constituição CD 19; falha causa 6d8 de dano de veneno e Envenenado por 1h; sucesso, metade do dano." },
  { key: "cogumelo-moldando", nome: "Cogumelo Moldando", rank: "Rank-B", cdCriar: 29, uso: 2, quantidade: 2, custo: "1250 Ryo", efeito: "Só faz efeito se ingerido. Constituição CD 19; falha deixa a criatura Paralisada por 1h." },
  { key: "respiracao-de-anjo", nome: "Respiração de Anjo (Sopro de Anjo)", rank: "Rank-A", cdCriar: 30, uso: 2, quantidade: 2, custo: "2100 Ryo", efeito: "Mistura de Beijo do Diabo, Cogumelo Moldante e Sangue de Assassinos. Constituição CD 20; falha deixa Inconsciente por 96h (4 dias)." },
  { key: "petalas-de-zetsubo", nome: "Pétalas de Zetsubo", rank: "Rank-A", cdCriar: 32, uso: 2, quantidade: 2, custo: "3500 Ryo", efeito: "Extraído de flor rara da Terra do Ferro. Constituição CD 21; falha impõe 5 graduações de Envenenado + Berserk por 1h; sucesso, só Envenenado por 1h." },
  { key: "torpor", nome: "Torpor", rank: "Rank-S", cdCriar: 34, uso: 2, quantidade: 2, custo: "5000 Ryo", efeito: "Uma das 3 principais misturas venenosas do mundo shinobi. Constituição CD 22; falha deixa Envenenado por 1 semana, cura recebida reduzida a 1/4 e 10d8 de dano de veneno a cada 24h; só neutralizável por efeito Rank A+." },
  { key: "lilly-negra", nome: "Lilly Negra", rank: "Rank-S", cdCriar: 36, uso: 2, quantidade: 2, custo: "5000 Ryo", efeito: "Extraído do Lótus Negro Lilly (letal à fauna num raio de 1,6km). Constituição CD 23; falha causa 15d8 de dano de veneno por hora durante 5h + Envenenado; quem respirar o ar a até 1,5m testa CD 18 para os mesmos efeitos; só neutralizável por Rank S+." },
  { key: "malicia", nome: "Malícia", rank: "Rank-S", cdCriar: 41, uso: 2, quantidade: 2, custo: "10000 Ryo", efeito: "Veneno lendário criado por Sasori, banido em todas as aldeias. Constituição CD 25 (ignora resistência/imunidade); falha deixa Inconsciente por 72h e mata ao fim da duração; só neutralizável por Rank S+." },
];

export interface ScrollTypeDefinition {
  key: string;
  nome: string;
  volume: number;
  custo: string;
  descricao: string;
}

export const SCROLL_TYPE_CATALOG: ScrollTypeDefinition[] = [
  { key: "pergaminho-de-arma", nome: "Pergaminho de Arma", volume: 1, custo: "50 Ryo", descricao: "Sela e armazena uma arma de até 5 volumes (1h de preparo); invocação como ação bônus, destruindo o pergaminho." },
  { key: "pergaminho-de-item", nome: "Pergaminho de Item (Selamento)", volume: 1, custo: "50 Ryo", descricao: "Sela até 5 volumes de itens/ferramentas, à taxa de 1 volume por 10 minutos de preparo." },
  { key: "pergaminho-de-jutsu-em-branco", nome: "Pergaminho de Jutsu em Branco", volume: 1, custo: "50 Ryo", descricao: "Nele um Ninjutsu ou Genjutsu conhecido pode ser selado (teste de Ninshou/Ilusões + tempo de inatividade); destruído após o uso." },
  { key: "pergaminho-de-jutsu-rank-e", nome: "Pergaminho de Jutsu (Rank-E)", volume: 1, custo: "25 Ryo", descricao: "Pré-selado com um Ninjutsu/Genjutsu Rank E; quem não conhece o jutsu precisa de teste de perícia (CD 15 + rank) para identificá-lo e usá-lo; destruído após o uso." },
  { key: "pergaminho-de-jutsu-rank-d", nome: "Pergaminho de Jutsu (Rank-D)", volume: 1, custo: "100 Ryo", descricao: "Pré-selado com um jutsu Rank D (CD e bônus de ataque predefinidos pelo rank); destruído após o uso." },
  { key: "pergaminho-de-jutsu-rank-c", nome: "Pergaminho de Jutsu (Rank-C)", volume: 1, custo: "250 Ryo", descricao: "Pré-selado com um jutsu Rank C (CD e bônus de ataque predefinidos pelo rank); destruído após o uso." },
  { key: "pergaminho-de-jutsu-rank-b", nome: "Pergaminho de Jutsu (Rank-B)", volume: 1, custo: "1000 Ryo", descricao: "Pré-selado com um jutsu Rank B (CD e bônus de ataque predefinidos pelo rank); destruído após o uso." },
  { key: "pergaminho-de-jutsu-rank-a", nome: "Pergaminho de Jutsu (Rank-A)", volume: 1, custo: "2500 Ryo", descricao: "Pré-selado com um jutsu Rank A (CD e bônus de ataque predefinidos pelo rank); destruído após o uso." },
  { key: "pergaminho-de-jutsu-rank-s", nome: "Pergaminho de Jutsu (Rank-S)", volume: 1, custo: "5000 Ryo", descricao: "Pré-selado com um jutsu Rank S (CD e bônus de ataque predefinidos pelo rank); destruído após o uso." },
];
