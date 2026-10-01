import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Shakuton — Estudos da Tsunade, cap. Shakuton
 * ("Jutsu Do Clã Shakuton"). "Estilo Calor" (Liberação de Escaldante,
 * híbrido de Vento e Fogo) — quase todas as entradas causam dano de Fogo
 * fixo, então `natureza` é "fogo" em todas, exceto "Revitalização
 * Assassina" (cura pura, sem dano). Vários Hijutsu consomem "motes"/
 * "esferas" criados por Estilo Calor: Assassinato Escaldante (Rank D) para
 * efeitos extras. O livro não traz um Hijutsu de Rank S para este clã.
 *
 * Nota: o texto de escala de nível de "Estilo Calor: Assassinato em
 * Chamas" (base Rank C) refere "acima do Rank D" — preservado como está
 * na fonte, mesmo tipo de inconsistência já vista em outros clãs.
 */
export const jutsuShakuton: JutsuDefinition[] = [
  // Rank D
  {
    key: "shakuton-estilo-calor-assassinato-escaldante",
    nome: "Estilo Calor: Assassinato Escaldante",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "fogo",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Estilo Fogo"],
    cla: "shakuton",
    descricao:
      "Você cria 4 motes de chama superaquecida que orbitam ao seu redor como mini satélites. Como uma ação bônus em cada um dos seus turnos, você pode gastar um mote, permitindo que você faça um ataque de ninjutsu à distância, arremessando-o contra uma criatura que você pode ver dentro de 9 metros. Ao acertar, a criatura alvo sofre 3d8+3 de dano de Fogo e deve fazer um teste de resistência de Constituição, ficando Queimada em caso de falha.\n\nUma vez que todos os motes tenham sido gastos, este jutsu termina imediatamente. Você pode, alternativamente, gastar os motes criados por este jutsu para alimentar outros jutsu de Estilo Calor que você lançar, melhorando seus efeitos.",
    emNiveisSuperiores:
      "Para cada nível que você lançar este jutsu acima do Rank D, aumente o custo deste jutsu em 3, o número de motes que você cria em 3 e o dano deste jutsu em 1d8+1.",
  },
  {
    key: "shakuton-estilo-calor-chama-assassina",
    nome: "Estilo Calor: Chama Assassina",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "fogo",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (linha de 9 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Estilo Fogo", "Choque"],
    cla: "shakuton",
    descricao:
      "Você conjura múltiplas esferas de chama superaquecida, combinando-as em uma única esfera que então dispara como um feixe de chama branca em uma linha de 9 metros de comprimento e 1,5 metro de largura. Todas as criaturas em seu caminho devem fazer um teste de resistência de Destreza, sofrendo 3d8+3 de dano de Fogo e ficando Queimadas em caso de falha, ou sofrendo metade do dano em um sucesso.\n\nVocê pode gastar 2 motes criados pelo jutsu Estilo Calor: Assassinato Escaldante, aumentando o dado de dano deste jutsu para 1d10 — criaturas que falharem no teste ganham 2 graus de Queimado, e as que forem bem-sucedidas ganham 1 grau de Queimado.",
    emNiveisSuperiores:
      "Para cada nível que você lançar este jutsu acima do Rank D, aumente o custo deste jutsu em 3 e o dano em 2d8+2.",
  },
  {
    key: "shakuton-estilo-calor-revitalizacao-assassina",
    nome: "Estilo Calor: Revitalização Assassina",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Estilo Fogo", "Médico"],
    cla: "shakuton",
    descricao:
      "Você conjura vários globos de chamas superaquecidas, revitalizando uma criatura que você tocar. Ela recupera 3d6 pontos de vida.\n\nSe você gastar 3 motes criados pelo Estilo Calor: Assassinato Escaldante, eles também reduzem a Exaustão da criatura em 1 grau. Uma criatura que morreu em decorrência de 6 ou mais graus de Exaustão não pode ter sua Exaustão reduzida por esse jutsu.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e os pontos de vida recuperados em 2d6.",
  },
  {
    key: "shakuton-estilo-calor-chama-massacrante",
    nome: "Estilo Calor: Chama Massacrante",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "fogo",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros (esfera de 6 metros de raio)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Estilo Fogo"],
    cla: "shakuton",
    descricao:
      "Você conjura globos de chama superaquecida, comprimindo-os em uma pequena esfera e lançando-a em direção a um espaço que você pode ver dentro do alcance. A esfera explode ao atingir seu destino. Todas as criaturas na área de efeito devem fazer um teste de resistência de Destreza, sofrendo 2d8+2 de dano de Fogo e ganhando a condição Queimado em caso de falha, ou apenas metade do dano em um sucesso.\n\nVocê pode gastar motes criados pelo jutsu Estilo Calor: Assassinato Escaldante. Para cada mote gasto, aumente o dano deste jutsu em 1d8+1. Você pode gastar até 3 motes desta forma.",
    emNiveisSuperiores:
      "Para cada nível que você lançar este jutsu acima do Rank D, aumente o custo deste jutsu em 3, e os graus de Queimado recebidos em +1.",
  },
  // Rank C
  {
    key: "shakuton-estilo-calor-assassinato-em-chamas",
    nome: "Estilo Calor: Assassinato em Chamas",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "fogo",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros (cubo de 4,5 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Estilo Fogo"],
    cla: "shakuton",
    descricao:
      "Você conjura globos de chama superaquecida que comprime em uma esfera do tamanho de uma bola de basquete. Em seguida, lança essa esfera no ar antes de bater as mãos para se concentrar, liberando as chamas superaquecidas no ar como chuva, preenchendo um cubo de 4,5 metros que você pode ver.\n\nTodas as criaturas dentro do alcance devem fazer um teste de resistência de Constituição. Em caso de falha, sofrem 4d4+4 de dano de Fogo e ganham 2 graus da condição Queimado. Em um sucesso, sofrem metade do dano e ganham 1 grau da condição Queimado até o final de seu próximo turno.",
    emNiveisSuperiores:
      "Para cada nível que você lançar este jutsu acima do Rank D, aumente o custo deste jutsu em 3, o dano em 2d4 e o tamanho do cubo em 1,5 metro.",
  },
  {
    key: "shakuton-estilo-calor-massacre-violento-das-chamas",
    nome: "Estilo Calor: Massacre Violento das Chamas",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "fogo",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal (cone de 9 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Estilo Fogo"],
    cla: "shakuton",
    descricao:
      "Você conjura globos de chamas superaquecidas e cria um fluxo de chamas superaquecidas, queimando tudo em seu caminho. Você dispara um cone de chamas de 9 metros, destruindo tudo em seu caminho. Criaturas dentro do alcance devem fazer um teste de resistência de Destreza, sofrendo 5d8+5 de dano de Fogo e ficando Queimadas em uma falha, ou metade disso em um sucesso.\n\nCriaturas que falharem neste teste por 5 ou mais também derrubam quaisquer itens de metal que estejam segurando; se as pegarem antes do final do próximo turno, sofrem 1d8 de dano de Fogo. Criaturas que falharem neste teste por 10 ou mais têm dificuldade para respirar, pois todo o ar evapora de seus pulmões, e ficam Atordoadas até o final do próximo turno.\n\nVocê pode gastar motes criados por Estilo Calor: Assassinato Escaldante — para cada 2 motes gastos, todas as criaturas dentro do alcance sofrem uma penalidade de -1 em seu teste de resistência. Você pode gastar até 6 motes dessa forma.",
    emNiveisSuperiores:
      "Para cada nível que você conjurar este jutsu acima do Rank C, aumente o custo deste jutsu em 3 e o dano em 2d8+2.",
  },
  {
    key: "shakuton-estilo-calor-violencia-dolorosa",
    nome: "Estilo Calor: Violência Dolorosa",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "fogo",
    tempoConjuracao: "1 Ação",
    alcance: "1,5 metro",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Estilo Fogo"],
    cla: "shakuton",
    descricao:
      "Você não pode perder a concentração neste jutsu como resultado de dano. Você conjura múltiplos globos de chama superaquecida e reveste seus punhos e pés com eles durante a duração.\n\nQuando você lançar este jutsu pela primeira vez, e como uma ação em cada turno subsequente durante a duração, você pode fazer um único ataque de ninjutsu corpo a corpo. Em um acerto, você causa 4d6+4 de dano de Fogo e a criatura alvo ganha a condição Queimado.\n\nQuando você realiza o ataque concedido por este jutsu, pode gastar esferas criadas pelo Estilo Calor: Assassinato Escaldante. Para cada três esferas gastas, você pode fazer um ataque adicional. Você pode gastar até 6 esferas dessa maneira.",
  },
  // Rank B
  {
    key: "shakuton-estilo-calor-assassinato-do-fogo-do-inferno",
    nome: "Estilo Calor: Assassinato do Fogo do Inferno",
    tipo: "ninjutsu",
    rank: "B",
    natureza: "fogo",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal (esfera de raio de 9 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 12,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Estilo Fogo"],
    cla: "shakuton",
    descricao:
      "Você conjura globos de chamas superaquecidas que usa para manifestar uma bola enorme de chamas superaquecidas de cerca de 2,4 metros de diâmetro. Você então bate essa bola no chão diretamente abaixo de você, tentando incinerar tudo perto de você.\n\nTodas as criaturas, exceto você, dentro do raio devem fazer um teste de resistência de Constituição. Em uma falha, sofrem 6d8+6 de dano de Fogo e ganham 2 graus de Queimado, ou metade do dano em um sucesso. Você pode gastar motes criados por Estilo Calor: Assassinato Escaldante para aprimorar este jutsu — para cada dois motes gastos dessa forma, você seleciona uma criatura para não ser afetada por esse jutsu e aumenta o dano dele em 2d8. Você pode gastar até 4 motes dessa forma.",
    emNiveisSuperiores:
      "Para cada rank que você conjurar esse jutsu acima do Rank B, aumente o custo desse jutsu em 3 e o raio em 4,5 metros.",
  },
  {
    key: "shakuton-estilo-calor-miragem-vingativa",
    nome: "Estilo Calor: Miragem Vingativa",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 11,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Estilo Fogo"],
    cla: "shakuton",
    descricao:
      "Você conjura globos de chamas superaquecidas e aprimora o corpo de uma criatura que você toca, aumentando significativamente sua velocidade de reação. Durante o período, você não precisa gastar Chakra para manter esse jutsu.\n\nOs ataques desarmados da criatura afetada agora são aprimorados por Chakra e passam a causar dano de Fogo em vez do tipo que causavam anteriormente.\n\nAs criaturas que fariam um ataque corpo a corpo contra a criatura afetada devem fazer um teste de resistência de Sabedoria ao verem uma miragem feita de calor extremo. Em uma falha, rolam 1d8 adicional e reduzem sua rolagem de ataque pelo resultado.",
  },
  // Rank A
  {
    key: "shakuton-estilo-calor-majestoso-violento-destruidor-de-fogo-infernal-assassino",
    nome: "Estilo Calor: Majestoso Violento Destruidor de Fogo Infernal Assassino",
    tipo: "ninjutsu",
    rank: "A",
    natureza: "fogo",
    tempoConjuracao: "1 Ação",
    alcance: "36 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 25,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Estilo Fogo", "Choque"],
    cla: "shakuton",
    descricao:
      "Você conjura um número incontável de globos de chama superaquecida, fundindo-os para criar uma única esfera massiva de fogo superaquecido. Faça um ataque de ninjutsu à distância contra um alvo que você pode ver dentro do alcance, causando 8d12+8 de dano de Fogo em um acerto.\n\nIndependentemente de você acertar ou errar, todas as outras criaturas dentro de 18 metros do alvo original devem fazer um teste de resistência de Constituição, sofrendo 3d12+3 de dano de Fogo e ganhando a condição Queimado em uma falha.\n\nCriaturas cujos pontos de vida são reduzidos a 0 como resultado deste jutsu são transformadas em poeira, deixando apenas uma sombra de sua forma manchada de cinzas no chão ou na parede.\n\nVocê pode gastar esferas criadas pelo Estilo Calor: Assassinato Escaldante para melhorar este jutsu. Para cada esfera gasta, aumente ambas as instâncias de dano em 1d12+1. Você pode gastar até 6 esferas desta maneira.",
  },
];
