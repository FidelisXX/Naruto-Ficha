/**
 * Catálogo de Kits/Ferramentas, Itens de Armazenamento e Armadilhas —
 * Manual Shinobi, Cap. 5: Equipamento de Aventura, p.43-67.
 */

export interface StorageItemDefinition {
  key: string;
  nome: string;
  custo: string;
  bonusInventario: string;
  volume: number;
}

/**
 * Os 4 itens "Shinobi" de armazenamento (Mochila/Bolsa de Cintura/Bolsa de
 * Cinto/Bolsa de Pernas) têm bônus não-cumulativo entre cópias do mesmo
 * tipo (só o melhor de cada tipo conta). Volume 0: o texto-fonte não indica
 * que esses contêineres ocupem seu próprio slot de inventário.
 */
export const STORAGE_ITEM_CATALOG: StorageItemDefinition[] = [
  { key: "mochila-shinobi", nome: "Mochila Shinobi", custo: "250 Ryo", bonusInventario: "+10 de capacidade de Volume (não cumulativo com outra Mochila Shinobi)", volume: 0 },
  { key: "bolsa-de-cintura-shinobi", nome: "Bolsa de Cintura Shinobi", custo: "75 Ryo", bonusInventario: "+5 de capacidade de Volume (não cumulativo com outra do mesmo tipo)", volume: 0 },
  { key: "bolsa-para-cinto-shinobi", nome: "Bolsa para Cinto Shinobi", custo: "50 Ryo", bonusInventario: "+3 de capacidade de Volume (não cumulativo com outra do mesmo tipo)", volume: 0 },
  { key: "bolsa-para-pernas-shinobi", nome: "Bolsa para Pernas Shinobi", custo: "25 Ryo", bonusInventario: "+2 de capacidade de Volume (não cumulativo com outra do mesmo tipo)", volume: 0 },
  { key: "garrafa-termica", nome: "Garrafa Térmica", custo: "5 Ryo", bonusInventario: "Sem bônus de Volume — recipiente comum para líquidos", volume: 0 },
  { key: "carteira", nome: "Carteira", custo: "5 Ryo", bonusInventario: "Sem bônus de Volume — recipiente comum para dinheiro/documentos (até 10.000 Ryo)", volume: 0 },
  { key: "estojo-de-racao", nome: "Estojo de Ração", custo: "5 Ryo", bonusInventario: "Sem bônus de Volume — recipiente comum para rações de campo (até 1 semana)", volume: 0 },
];

export interface ToolKitDefinition {
  key: string;
  nome: string;
  custo: string;
  volume: number;
  descricao: string;
}

export const TOOL_KIT_CATALOG: ToolKitDefinition[] = [
  { key: "kit-alquimista", nome: "Kit Alquimista", custo: "200 Ryo (Maior: 500, Superior: 750, Supremo: 1200 Ryo)", volume: 2, descricao: "Testa propriedades químicas de substâncias, mistura compostos estáveis (como Pílulas de Chakra) e fabrica bombas químicas (fumaça, gelo, pimenta) gastando cargas ao longo de um descanso curto." },
  { key: "kit-armeiro", nome: "Kit Armeiro", custo: "200 Ryo (Maior: 450, Superior: 750, Supremo: 1000 Ryo)", volume: 2, descricao: "Implementos para fabricar armaduras e selos de armadura, com acesso a selos de Rank C (kits de qualidade superior liberam ranks mais altos e reduzem custo/tempo). Gasta 1 carga por tentativa de fabricação." },
  { key: "kit-de-cozinha", nome: "Kit de Cozinha (Culinária)", custo: "200 Ryo (Maior: 500, Superior: 750, Supremo: 1200 Ryo)", volume: 2, descricao: "Prepara refeições para até 6 pessoas, concedendo PV temporários, e produz Rações de Comida Cozida e Pílulas de Ração Militar a partir das cargas do kit." },
  { key: "kit-de-demolicoes", nome: "Kit de Demolições", custo: "200 Ryo (Maior: 450, Superior: 750, Supremo: 1000 Ryo)", volume: 2, descricao: "Arma e desarma explosivos; permite fabricar etiquetas de violação, papéis-bomba, bolas de papel explosivas e bombas de fogo a partir das cargas do kit." },
  { key: "kit-de-disfarce", nome: "Kit de Disfarce", custo: "200 Ryo (Maior: 450, Superior: 750, Supremo: 1000 Ryo)", volume: 2, descricao: "Cria disfarces físicos (simples/elaborado/requintado) que alteram a aparência sem depender do Jutsu de Transformação; de 10 minutos a 8 horas de preparo conforme a complexidade." },
  { key: "kit-de-amostra", nome: "Kit de Amostra", custo: "200 Ryo (Maior: 450, Superior: 750, Supremo: 1000 Ryo)", volume: 2, descricao: "Coleta DNA, impressões digitais e evidências em uma cena, e analisa drogas/químicos/venenos/doenças, permitindo vincular uma evidência a um suspeito." },
  { key: "kit-de-falsificacao", nome: "Kit de Falsificação", custo: "200 Ryo (Maior: 450, Superior: 750, Supremo: 1000 Ryo)", volume: 2, descricao: "Falsifica documentos, crachás, identidades e assinaturas — de simples (10 min) a requintadas (8h+)." },
  { key: "kit-de-hackers", nome: "Kit de Hackers", custo: "200 Ryo (Maior: 450, Superior: 750, Supremo: 1000 Ryo)", volume: 2, descricao: "Invade sistemas da Ninja-Net, desativa redes/computadores remotamente, localiza segurança adicional e monta ou anula armadilhas cibernéticas." },
  { key: "kit-de-medicamentos", nome: "Kit de Medicamentos (Remédios)", custo: "200 Ryo (Maior: 575, Superior: 850, Supremo: 1250 Ryo)", volume: 2, descricao: "Avalia o estado de até 6 criaturas, trata condições (10 min-1h), estabiliza uma criatura a 0 PV e fabrica Pílulas de Sangue." },
  { key: "kit-de-seguranca", nome: "Kit de Segurança", custo: "200 Ryo (Maior: 450, Superior: 750, Supremo: 1000 Ryo)", volume: 2, descricao: "Arromba fechaduras mecânicas/eletrônicas (5 verificações contra a CD de Arrombamento) e desarma armadilhas ativas." },
  { key: "kit-de-veneno", nome: "Kit de Veneno (Venenoso)", custo: "100 Ryo (única variante encontrada no texto-fonte)", volume: 2, descricao: "Fabrica venenos (5 cargas), incluindo receitas restritas de mercado negro (Sangue de Assassino, Beijo do Diabo, Torpor, Malícia), cada um com seu CD de Ofício e efeito." },
  { key: "kit-de-armadilhas", nome: "Kit de Armadilhas (Kit de Caçadores)", custo: "200 Ryo (Maior: 450, Superior: 750, Supremo: 1000 Ryo)", volume: 2, descricao: "Monta armadilhas de captura (1 carga/tentativa) e desarma armadilhas alheias (2 cargas). Necessário junto com proficiência em Construção para criar qualquer armadilha da tabela." },
  { key: "kit-de-armas", nome: "Kit de Armas", custo: "Custo não especificado na seção de equipamento", volume: 2, descricao: "Fabrica armas mundanas com acesso a calor/resfriamento extremos; proficiência necessária para criar armas aprimoradas de chakra." },
  { key: "kit-de-primeiros-socorros", nome: "Kit de Primeiros Socorros", custo: "100 Ryo (Maior: 250, Superior: 750, Suprema: 1500 Ryo)", volume: 2, descricao: "Gastando 2 usos como ação, estabiliza uma criatura a 0 PV sem teste de Medicina; em descanso curto/longo, cura PV adicionais por criatura (ver catalog/consumables.ts para os dados de cura por tier)." },
  { key: "kit-antidoto", nome: "Kit Antídoto", custo: "100 Ryo (Rank-C: 250, Rank-B: 500, Rank-A: 750, Rank-S: 1000 Ryo)", volume: 1, descricao: "Como ação, cura um alvo de veneno de Rank-D ou inferior, ou concede vantagem em testes de resistência contra veneno/condição de envenenamento até 1 graduação acima, por 1 hora." },
];

/**
 * As colunas de CD da tabela de Armadilhas (p.47) são, da esquerda para a
 * direita: CD para Construir, CD de Desarmar/Evitar (também usada como CD
 * de resistência) e CD para Perceber a armadilha — não "percepção,
 * desarmar, ativação" como se poderia supor à primeira vista.
 */
export interface TrapDefinition {
  key: string;
  nome: string;
  cdConstruir: number;
  cdDesarmarEvitar: number;
  cdPerceber: number;
  atributo: string;
  tempoConstrucao: string;
  kitNecessario: string;
}

export const TRAP_CATALOG: TrapDefinition[] = [
  { key: "armadilha-alarmante", nome: "Armadilha Alarmante", cdConstruir: 15, cdDesarmarEvitar: 12, cdPerceber: 14, atributo: "Destreza", tempoConstrucao: "10 min", kitNecessario: "Kit de Armadilha" },
  { key: "armadilha-mortal", nome: "Armadilha Mortal", cdConstruir: 15, cdDesarmarEvitar: 14, cdPerceber: 16, atributo: "Destreza", tempoConstrucao: "10 min", kitNecessario: "Kit de Armadilha" },
  { key: "armadilha-de-afogamento", nome: "Armadilha de Afogamento", cdConstruir: 15, cdDesarmarEvitar: 15, cdPerceber: 17, atributo: "Destreza", tempoConstrucao: "10 horas", kitNecessario: "Kit de Armadilha" },
  { key: "armadilha-explosiva", nome: "Armadilha Explosiva", cdConstruir: 15, cdDesarmarEvitar: 12, cdPerceber: 14, atributo: "Destreza", tempoConstrucao: "10 min", kitNecessario: "Kit Demolições + 2 Bombas de Papel" },
  { key: "armadilha-piscante", nome: "Armadilha Piscante", cdConstruir: 15, cdDesarmarEvitar: 13, cdPerceber: 15, atributo: "Constituição", tempoConstrucao: "1 min", kitNecessario: "Kit Demolições + 2 Bomba de Luz" },
  { key: "armadilha-escondida", nome: "Armadilha Escondida", cdConstruir: 15, cdDesarmarEvitar: 15, cdPerceber: 17, atributo: "Destreza", tempoConstrucao: "1 hora", kitNecessario: "Kit de Armadilha" },
  { key: "fechadura-venenosa", nome: "Fechadura Venenosa", cdConstruir: 15, cdDesarmarEvitar: 13, cdPerceber: 15, atributo: "Constituição", tempoConstrucao: "1 hora", kitNecessario: "Kit Veneno" },
  { key: "armadilha-venenosa", nome: "Armadilha Venenosa", cdConstruir: 15, cdDesarmarEvitar: 12, cdPerceber: 14, atributo: "Destreza", tempoConstrucao: "10 min", kitNecessario: "Kit venenoso + Bomba de gás venenoso" },
  { key: "armadilha-de-restricao", nome: "Armadilha de Restrição", cdConstruir: 15, cdDesarmarEvitar: 14, cdPerceber: 16, atributo: "Força", tempoConstrucao: "10 min", kitNecessario: "Kit de caçadores + fio de batalha" },
  { key: "armadilha-chocante", nome: "Armadilha Chocante", cdConstruir: 15, cdDesarmarEvitar: 14, cdPerceber: 16, atributo: "Constituição", tempoConstrucao: "10 min", kitNecessario: "Kit Hackers + 2 Bombas de choque" },
  { key: "armadilha-de-arma", nome: "Armadilha de Arma", cdConstruir: 15, cdDesarmarEvitar: 14, cdPerceber: 16, atributo: "Destreza", tempoConstrucao: "1 min", kitNecessario: "Kit de Armadilha + 1 Pergaminho de Arma" },
  { key: "molde-amarelo", nome: "Molde Amarelo", cdConstruir: 15, cdDesarmarEvitar: 18, cdPerceber: 20, atributo: "Constituição", tempoConstrucao: "10 horas", kitNecessario: "Kit de culinária" },
];
