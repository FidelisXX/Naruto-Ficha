import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Nara — Estudos da Tsunade, cap. Nara ("Jutsu Do
 * Clã Nara"). Toda a família de manipulação de sombras, com vários Hijutsu
 * exigindo já conhecer "Possessão das Sombras" como pré-requisito. O texto-
 * fonte deste clã mistura ortografia de português europeu ("tens de",
 * "bónus", "utilizador") com brasileiro no mesmo capítulo — normalizado
 * para o padrão brasileiro usado no resto do catálogo. O livro não traz um
 * Hijutsu de Rank S para este clã.
 *
 * Nota: o texto de escala de nível de "Lírio-Aranha Negra" (base Rank B)
 * refere "acima do Rank C" em vez de "Rank B" — preservado como está na
 * fonte, mesma inconsistência já vista em outros clãs (ver vesper.ts).
 */
export const jutsuNara: JutsuDefinition[] = [
  // Rank D
  {
    key: "nara-imitacao-de-sombra",
    nome: "Imitação de Sombra",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Reação, para um aliado sendo alvo de um ataque que você pode ver",
    alcance: "15 metros",
    duracao: "1 Rodada",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "nara",
    descricao:
      "Como parte dos requisitos deste jutsu, você precisa conhecer o Jutsu de Possessão das Sombras. Você manipula sua sombra e a estica para fora, tentando fundi-la com uma criatura disposta.\n\nComo reação, concede à criatura alvo à qual sua sombra está ligada um +2 na CA e vantagem em testes de resistência de Destreza até o final do turno atual.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar este jutsu acima do Rank D, aumente o custo deste jutsu em 3 e o bônus de CA em +1.",
  },
  {
    key: "nara-amarracao-de-pescoco-de-sombra",
    nome: "Amarração de Pescoço de Sombra",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "15 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "nara",
    descricao:
      "Como parte do requisito de ativação deste jutsu, você precisa ter uma criatura já restringida por Possessão das Sombras, Campo de Imitação de Sombras, Agulha de Costura das Sombras ou Lírio-Aranha Negra. Como uma ação bônus, as criaturas restringidas por qualquer um dos jutsu acima mencionados recebem 4d6 de dano Necrótico.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar este jutsu acima do Rank D, aumente o custo deste jutsu em 3 e o dano em 2d6.",
  },
  {
    key: "nara-distracao-da-silhueta-de-sombra",
    nome: "Distração da Silhueta de Sombra",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Ação",
    alcance: "15 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 3,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "nara",
    descricao:
      "Como parte dos requisitos deste jutsu, você precisa conhecer o Jutsu de Possessão das Sombras. Ao moldar Chakra em sua sombra, você é capaz de dar-lhe uma forma enquanto ela se levanta do chão, mantendo-se extremamente fina. Sua sombra fica tão alta quanto você e segue todos os seus caprichos. Ela não pode agarrar ou transportar nada, nem tocar ou interagir com algo. Este jutsu é extremamente útil para distrações e desvios, podendo ser usado de forma furtiva sem revelar sua localização, inclusive junto de um lançamento furtivo.",
  },
  {
    key: "nara-possessao-das-sombras",
    nome: "Possessão das Sombras",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "nara",
    descricao:
      "A famosa Possessão das Sombras do Clã Nara permite que o usuário molde Chakra em sua sombra, controlando-a. Selecione uma criatura que você possa ver dentro do alcance.\n\nA criatura alvo deve fazer um teste de resistência de Destreza. Em uma falha, ela fica Restringida pela duração do jutsu e não pode realizar ações; ela faz exatamente os mesmos movimentos físicos que você faz. Você não pode fazê-la atacar a si mesma, nem fazê-la conjurar jutsu de qualquer tipo — ela espelha seus movimentos e gestos e nada mais. No final do turno de uma criatura afetada, ela pode fazer um teste de resistência de Força para encerrar o efeito deste jutsu sobre ela.\n\nO Jutsu de Possessão das Sombras é único, pois é afetado pela hora do dia e pela quantidade de luz disponível onde o usuário está. Em Luz Fraca, o alcance deste jutsu é reduzido pela metade; em escuridão total, este jutsu não pode ser usado.",
    emNiveisSuperiores:
      "Para cada rank que você conjurar este jutsu acima do Rank D, aumente o custo deste jutsu em 3 e o alcance em 4,5 metros; além disso, as criaturas deixam de fazer exatamente os mesmos movimentos físicos que você faz, a menos que você queira.",
  },
  // Rank C
  {
    key: "nara-coleta-de-sombras",
    nome: "Coleta de Sombras",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Ação",
    alcance: "15 metros",
    duracao: "Concentração",
    componentes: ["MC"],
    custoChakra: 6,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "nara",
    descricao:
      "Como parte dos requisitos deste jutsu, você precisa conhecer o Jutsu de Possessão das Sombras. Você materializa finas gavinhas de sombra que pode controlar para interagir com objetos. Este jutsu pode ser usado para deslizar por baixo de portas, através de pequenos buracos e outras entradas que de outra forma seriam impossíveis de passar.\n\nFaça um teste de Ninshou (CD 15) para manipular objetos complicados, como teclados, maçanetas ou fechaduras. Este jutsu também pode ser usado para recuperar objetos e puxá-los de volta para você, desde que não pesem mais de 25 libras.",
  },
  {
    key: "nara-campo-de-imitacao-de-sombras",
    nome: "Campo de Imitação de Sombras",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Ação",
    alcance: "Raio de 6 metros no chão",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 6,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "nara",
    descricao:
      "Como parte dos requisitos deste jutsu, você precisa ter o Jutsu de Possessão das Sombras. Você expande sua sombra em um círculo de 6 metros de raio centrado em você, capturando todas as criaturas dentro dele que estejam na mesma superfície que você. Todas as criaturas no raio, após a ativação, devem fazer um teste de resistência; se falharem, ficam Restringidas e incapazes de realizar ações durante o período. No seu turno, uma criatura afetada pode fazer um teste de resistência para se libertar deste jutsu, terminando seu efeito sobre ela.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar este jutsu acima do Rank C, aumente o custo deste jutsu em 3, o raio em 1,5 metro, e a CD de resistência inicial em +1.",
  },
  {
    key: "nara-agulha-de-costura-das-sombras",
    nome: "Agulha de Costura das Sombras",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "nara",
    descricao:
      "Como parte dos requisitos deste jutsu, você precisa conhecer o Jutsu de Possessão das Sombras. Você materializa sua sombra, mas a estilhaça e afia em espinhos semelhantes a agulhas. Crie 5 fios de sombra em forma de agulha. Faça um único ataque de ninjutsu à distância contra até 5 criaturas alvo dentro do alcance, uma vez cada.\n\nSe acertar, causa 2d6 de dano Perfurante. Você pode escolher enviar mais de uma gavinha para uma única criatura; se o fizer, aumente o dano do ataque em 1d6 por cada gavinha adicional atingindo a mesma criatura. Independentemente do número de gavinhas atingindo uma única criatura, você só pode fazer um único ataque de ninjutsu contra cada criatura visada.\n\nSe o ataque for bem-sucedido, as criaturas afetadas devem fazer um teste de resistência de Força — a cada duas gavinhas que tiverem como alvo a mesma criatura, aumente a CD de resistência inicial em +1. Se falharem, ficam sob o efeito do Jutsu de Possessão das Sombras do Clã Nara.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar este jutsu acima do Rank C, aumente o custo deste jutsu em 3 e o número de gavinhas em 1.",
  },
  // Rank B
  {
    key: "nara-lirio-aranha-negra",
    nome: "Lírio-Aranha Negra",
    tipo: "ninjutsu",
    rank: "B",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Ação",
    alcance: "27 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "nara",
    descricao:
      "Como parte dos requisitos deste jutsu, você precisa conhecer o Jutsu de Possessão das Sombras. Esta é uma versão avançada do jutsu Possessão das Sombras. Selecione até 8 criaturas dentro do alcance; cada uma deve fazer um teste de resistência de Destreza. Se falhar, o alvo fica Restringido e passa a contar como estando sob o efeito do Hijutsu de Possessão das Sombras do Clã Nara, com valor igual ao rank em que este jutsu foi lançado.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar este jutsu acima do Rank C, aumente o custo deste jutsu em 3 e selecione 1 criatura alvo adicional dentro do alcance.",
  },
  {
    key: "nara-tecnica-de-transporte-de-sombras",
    nome: "Técnica de Transporte de Sombras",
    tipo: "ninjutsu",
    rank: "B",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "Instantâneo",
    componentes: ["MC"],
    custoChakra: 12,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "nara",
    descricao:
      "Como parte dos requisitos deste jutsu, você precisa ter o Jutsu de Possessão das Sombras. Você pode selecionar uma criatura atualmente restringida por Possessão das Sombras, Campo de Imitação de Sombras, Agulha de Costura das Sombras ou Lírio-Aranha Negra. Você então cai em sua própria sombra, movendo-se através dela e saindo a 1,5 metro de um alvo restringido. Você ainda precisa estar ao alcance das outras criaturas que tiver restringido; caso contrário, o jutsu termina imediatamente sobre essas criaturas.",
  },
  // Rank A
  {
    key: "nara-execucao-da-teia-de-sombras",
    nome: "Execução da Teia de Sombras",
    tipo: "ninjutsu",
    rank: "A",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "27 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 18,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "nara",
    descricao:
      "Como parte dos requisitos deste jutsu, é necessário conhecer o Jutsu Lírio-Aranha Negra ativo e ter pelo menos 1 criatura restringida por um Hijutsu do Clã Nara. Como uma ação bônus, todas as criaturas atualmente capturadas devem ser bem-sucedidas em um teste de resistência de Constituição. Se falharem, as criaturas afetadas recebem 12d8 de dano Necrótico e sofrem 1 ponto de Exaustão; em caso de sucesso, recebem metade do dano e não sofrem nenhum efeito adicional.",
  },
];
