import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Hanami — Estudos da Tsunade, cap. Hanami ("Jutsu
 * Do Clã Hanami"). Mistura Ninjutsu Médico com Taijutsu ("Estilo Hanami"),
 * incluindo a técnica de última instância do Clã Haruno citada no próprio
 * texto de "Reprise das Flores Caindo". O livro não traz um Hijutsu de
 * Rank S para este clã.
 */
export const jutsuHanami: JutsuDefinition[] = [
  // Rank D
  {
    key: "hanami-estilo-hanami-cura-duradoura",
    nome: "Estilo Hanami: Cura Duradoura",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "medico",
    tempoConjuracao: "1 Ação",
    alcance: "1,5 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Ninjutsu", "Médico", "Hijutsu"],
    cla: "hanami",
    descricao:
      "Você cobre suas mãos com chakra, que brilha em um tom rosa claro. Uma criatura que você toca imediatamente recupera 2d6 pontos de vida. Além disso, no início de cada um dos turnos das criaturas afetadas, elas recuperam 1d4 pontos de vida.",
    emNiveisSuperiores:
      "Para cada classificação acima de Rank D que você lançar este jutsu, aumente o custo do jutsu em 3 e aumente a cura por turno em 1d4.",
  },
  {
    key: "hanami-estilo-hanami-ataque-drenante",
    nome: "Estilo Hanami: Ataque Drenante",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "medico",
    tempoConjuracao: "1 Ação",
    alcance: "1,5 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Ninjutsu", "Médico", "Hijutsu"],
    cla: "hanami",
    descricao:
      "Suas mãos brilham com um tom rosado enquanto você se prepara para atacar seu alvo. Escolha uma criatura dentro do alcance e faça um ataque de ninjutsu corpo a corpo. Se acertar, você causa 3d8 de dano Necrótico e recupera pontos de vida iguais à metade do dano causado.",
    emNiveisSuperiores:
      "Para cada classificação acima de Rank D que você lançar este jutsu, aumente o custo do jutsu em 3 e aumente o dano em 1d8. Se você lançar este jutsu em Rank A ou superior, você recupera pontos de vida iguais ao dano total causado.",
  },
  {
    key: "hanami-estilo-hanami-flor-de-cerejeira-em-florescencia",
    nome: "Estilo Hanami: Flor de Cerejeira em Florescência",
    tipo: "taijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "1,5 metros",
    duracao: "Instantâneo",
    componentes: ["M"],
    custoChakra: 5,
    palavrasChave: ["Taijutsu", "Hijutsu", "Combo"],
    cla: "hanami",
    descricao:
      "Você corre em direção a um alvo antes de liberar uma sequência de ataques. Faça dois ataques de taijutsu contra uma criatura dentro do alcance. Ao acertar, você causa seu Dano Desarmado + 1d6. Se você acertar com dois ou mais desses ataques, o alvo é derrubado.\n\nAté o final do seu turno, você pode mirar em uma criatura afetada com um Finalizador de Taijutsu, independentemente da distância, uma vez por turno, usando uma Ação ou Ação Bônus, ignorando o tempo de conjuração listado.",
    emNiveisSuperiores:
      "Para cada classificação acima de Rank D que você lançar este jutsu, aumente o custo do jutsu em 3 e aumente o dano em 1d6. Se este jutsu for lançado em Rank B ou superior, aumente o número de ataques em +1.",
  },
  {
    key: "hanami-estilo-hanami-punho-medico",
    nome: "Estilo Hanami: Punho Médico",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "medico",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Pessoal",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Ninjutsu", "Médico", "Hijutsu"],
    cla: "hanami",
    descricao:
      "Você cobre suas mãos com chakra médico projetado para sugar a força vital de qualquer um que você tocar. Seu Dano Desarmado se torna 1d8 e causa dano Necrótico; quando você atingir alguém com um ataque de taijutsu desarmado ou corpo a corpo, você ganha pontos de vida temporários iguais ao dano de Dano Desarmado causado.",
    emNiveisSuperiores:
      "Para cada nível que você conjura este jutsu acima do Rank D, aumente o custo do jutsu em 3 e aumente o dado de dano em 1d8 até um máximo de 3d8. Se este jutsu for conjurado como um Rank B, você aumenta o Dano Desarmado concedido por este jutsu para d10s. Se conjurado como um Rank S, você ganha o dobro de pontos de vida temporários quando ganha pontos de vida temporários desta forma.",
  },
  // Rank C
  {
    key: "hanami-estilo-hanami-manto-defensivo",
    nome: "Estilo Hanami: Manto Defensivo",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "medico",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Ninjutsu", "Médico", "Hijutsu"],
    cla: "hanami",
    descricao:
      "Você cobre todo o seu corpo com um manto vil de chakra médico, que prejudica qualquer um que o toque. Você não paga custos de concentração para manter este jutsu. Quando uma criatura o atinge com um ataque corpo a corpo, ela sofre 2d6 de dano necrótico e você ganha pontos de vida temporários iguais à metade do dano necrótico causado.",
    emNiveisSuperiores:
      "Para cada classificação acima de Rank C que você lançar este jutsu, aumente o custo do jutsu em 3 e aumente o dado de dano em 1 dado (d6 > d8 > d10 > d12). Se você lançar este jutsu em Rank A ou superior, você ganha pontos de vida temporários iguais ao dano total causado.",
  },
  {
    key: "hanami-estilo-hanami-impacto-colossal",
    nome: "Estilo Hanami: Impacto Colossal",
    tipo: "taijutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "1,5 metros (raio de 9 metros)",
    duracao: "Instantâneo",
    componentes: ["M"],
    custoChakra: 8,
    palavrasChave: ["Taijutsu", "Hijutsu"],
    cla: "hanami",
    descricao:
      "Você golpeia o estômago de uma criatura com força suficiente para levantá-la do chão, e então a arremessa ao solo com uma quantidade massiva de força. Faça um ataque de taijutsu corpo a corpo; ao acertar, você causa seu Dano Desarmado + 3d8, e cada criatura (excluindo você) dentro de 9 metros deve fazer um teste de resistência de Destreza ao você arremessar a criatura ao chão, sofrendo 3d6 de dano contundente em uma falha ou metade disso em um sucesso. A criatura que você atacou inicialmente tem desvantagem nesse teste de resistência e é derrubada em caso de falha.",
    emNiveisSuperiores:
      "Para cada classificação acima de Rank C que você lançar este jutsu, aumente o custo do jutsu em 3 e aumente o dano em 1d8 e 1d6.",
  },
  {
    key: "hanami-estilo-hanami-manto-de-cura",
    nome: "Estilo Hanami: Manto de Cura",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "medico",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Ninjutsu", "Médico", "Hijutsu"],
    cla: "hanami",
    descricao:
      "Seu corpo inteiro é coberto por um chakra médico calmante enquanto você começa a brilhar em um rosa suave. Quando você conjura este jutsu, você recupera 2d8 pontos de vida. Além disso, durante o combate, enquanto você tiver pelo menos 1 ponto de vida, no início de cada um dos seus turnos pela duração, você recupera 1d8 pontos de vida. Você pode, como reação, curar 3d8 pontos de vida — quando faz isso, este jutsu termina imediatamente.",
  },
  // Rank B
  {
    key: "hanami-estilo-hanami-flor-de-cerejeira-finalizadora",
    nome: "Estilo Hanami: Flor de Cerejeira Finalizadora",
    tipo: "taijutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal (raio de 18 metros)",
    duracao: "Instantâneo",
    componentes: ["M"],
    custoChakra: 14,
    palavrasChave: ["Taijutsu", "Hijutsu", "Finalizador"],
    cla: "hanami",
    descricao:
      "Este jutsu só pode ser lançado como um Finalizador. Você golpeia o chão com o punho, criando uma onda de choque gigante. Cada criatura na área deve fazer um teste de resistência de Destreza, sofrendo seu Dano Desarmado + 8d8 em caso de falha, ou metade disso em caso de sucesso. Se uma criatura estiver derrubada, ela tem desvantagem no teste de resistência. Após a conclusão deste jutsu, a área é considerada terreno difícil.",
    emNiveisSuperiores:
      "Para cada classificação acima de Rank B que você lançar este jutsu, aumente o custo do jutsu em 3 e aumente o dano em 2d8.",
  },
  {
    key: "hanami-estilo-hanami-manto-ofensivo",
    nome: "Estilo Hanami: Manto Ofensivo",
    tipo: "ninjutsu",
    rank: "B",
    natureza: "medico",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 12,
    custoChakraTexto: "Especial (12 Chakra)",
    palavrasChave: ["Ninjutsu", "Médico", "Hijutsu"],
    cla: "hanami",
    descricao:
      "Você cobre todo o seu corpo com um manto reforçador de chakra médico. Quando você faz um ataque desarmado, você causa 2d8 de dano Necrótico adicional, até três vezes por turno. Além disso, uma vez por turno, uma criatura afetada deve ser bem-sucedida em um teste de resistência de Constituição ou não poderá regenerar pontos de vida até o final do próximo turno.",
  },
  // Rank A
  {
    key: "hanami-estilo-hanami-reprise-das-flores-caindo",
    nome: "Estilo Hanami: Reprise das Flores Caindo",
    tipo: "ninjutsu",
    rank: "A",
    natureza: "medico",
    tempoConjuracao: "1 Ação Completa",
    alcance: "Pessoal",
    duracao: "1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 20,
    palavrasChave: ["Ninjutsu", "Médico", "Hijutsu"],
    cla: "hanami",
    descricao:
      "Você deve estar sob os efeitos de 'Estilo Hanami: Manto Defensivo' e 'Estilo Hanami: Manto Ofensivo' para lançar este jutsu.\n\nUma técnica de última instância do Clã Haruno, você usa seu controle finito do chakra médico, espalhando-o por todo o seu corpo. Suas veias começam a brilhar em um tom magenta escuro enquanto o chakra se espalha por sua rede de chakra. Você perde os efeitos do Manto Defensivo e Ofensivo, com este jutsu ocupando seu lugar. Você não pode se concentrar em outro jutsu enquanto este jutsu estiver ativo.\n\nEnquanto sob os efeitos deste jutsu, você ganha os seguintes benefícios:\n- Quando uma criatura o atinge com um ataque corpo a corpo, ela sofre 3d12 de dano necrótico e você recupera uma quantidade igual de pontos de vida.\n- Seu Dano Desarmado se torna 4d8 e causa dano necrótico; além disso, quando você causa dano a uma criatura com um ataque corpo a corpo, ela não pode recuperar pontos de vida até o final do seu próximo turno.\n- Quando você acerta um golpe crítico com um jutsu Médico ou Taijutsu, você triplica os dados de dano.\n\nNo final deste jutsu, você não pode mais moldar chakra até completar um descanso longo, pois sua rede de chakra é restringida pelo seu uso excessivo.",
  },
];
