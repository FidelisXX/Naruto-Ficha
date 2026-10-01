import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Konjiki — Estudos da Tsunade, cap. Konjiki
 * ("Estilo Aço"). Dano marcado como "[X]" no texto-fonte é variável,
 * escolhido via o recurso de clã "Formação de Armas" (Contundente,
 * Perfurante ou Cortante) — preservado como placeholder, igual a outros
 * campos entre colchetes já usados em classes/talentos consolidados
 * anteriormente. `natureza` fica como "terra" (Estilo Terra). O livro não
 * traz um Hijutsu de Rank S para este clã.
 *
 * Nota: o texto de escala de nível de "Traje de Aço" (Rank B) refere
 * "acima do Rank C" em vez de "Rank B" — preservado como está na fonte,
 * mesmo tipo de inconsistência já vista em outros clãs (ver vesper.ts).
 */
export const jutsuKonjiki: JutsuDefinition[] = [
  // Rank D
  {
    key: "konjiki-estilo-aco-armadura-impermeavel",
    nome: "Estilo Aço: Armadura Impermeável",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "terra",
    tempoConjuracao:
      "1 Reação, quando você é alvo de um ataque, sofreria dano, ou faz um teste de resistência de Força ou Constituição",
    alcance: "Pessoal",
    duracao: "1 rodada",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra"],
    cla: "konjiki",
    descricao:
      "Você rapidamente transforma sua pele em um material semelhante ao aço antes de sofrer um efeito hostil. Durante a duração, você ganha resistência ao dano que desencadeou este jutsu e ganha 1d6 + seu modificador de Habilidade de Ninjutsu em pontos de vida temporários (esses pontos de vida temporários não protegem contra dano de Raio). Você também ganha vantagem em testes de resistência de Força e Constituição durante a duração.",
    emNiveisSuperiores:
      "Para cada nível que você lançar este jutsu acima do Rank D, aumente o custo deste jutsu em 3 e os pontos de vida temporários ganhos em 2d6.",
  },
  {
    key: "konjiki-estilo-aco-projetil-de-aco",
    nome: "Estilo Aço: Projétil de Aço",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "terra",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra"],
    cla: "konjiki",
    descricao:
      "Você cria um objeto feito de aço e o lança em alta velocidade em direção a um alvo dentro do alcance, fazendo um ataque de ninjutsu à distância, causando 3d10 + seu modificador de Habilidade de Ninjutsu de dano [X] ao acertar e reduzindo o resultado do próximo teste de resistência do alvo em 1d4.",
    emNiveisSuperiores:
      "Para cada nível que você lançar este jutsu acima do Rank D, aumente o custo deste jutsu em 3. Se lançado no Rank B ou superior, aumente o número de ataques realizados em +1. Se lançado no Rank S, aumente o número de ataques realizados em mais +1. A redução do teste de resistência não se acumula.",
  },
  {
    key: "konjiki-estilo-aco-telecinesia-de-aco",
    nome: "Estilo Aço: Telecinesia de Aço",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "terra",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra"],
    cla: "konjiki",
    descricao:
      "Você é capaz de comandar o aço à distância. Você pode levantar objetos feitos de ou conectados ao aço de tamanho Médio ou menor, podendo até usar isso para levantar e mover criaturas vestindo armaduras. Escolha 1 criatura alvo dentro do alcance que esteja vestindo armadura feita de metal, forçando-a a fazer um teste de resistência de Força.\n\nSe falhar, ela fica Restrita e é movida até 9 metros em qualquer direção de sua escolha. Em turnos futuros, se ainda estiver Restrita, você pode usar sua ação bônus para movê-la até 9 metros em qualquer direção de sua escolha. Uma criatura pode tentar refazer o teste de resistência de Força no final de cada um de seus turnos para terminar a restrição.",
    emNiveisSuperiores:
      "Para cada nível que você lançar este jutsu acima do Rank D, aumente o custo deste jutsu em 3 e o número de criaturas que você pode atingir em 1.",
  },
  {
    key: "konjiki-estilo-aco-chuva-de-aco",
    nome: "Estilo Aço: Chuva de Aço",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "terra",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros (esfera de 4,5 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra"],
    cla: "konjiki",
    descricao:
      "Você manifesta numerosas armas de arremesso, como shuriken ou kunai, em um ponto dentro de 18 metros e as solta contra todos os alvos dentro de uma esfera de 4,5 metros. Todas as criaturas dentro do alcance devem fazer um teste de resistência de Destreza, sofrendo 3d8 de dano [X] e ganhando uma graduação de uma condição específica em caso de falha, ou metade do dano e sem efeitos em caso de sucesso. A condição adquirida depende do tipo de dano deste jutsu (Contundente/Terra = Contundido, Cortante = Sangrando, Perfurante = Enfraquecido).",
    emNiveisSuperiores:
      "Para cada nível que você lançar este jutsu acima do Rank D, aumente o custo deste jutsu em 3 e o dano em 2d8.",
  },
  // Rank C
  {
    key: "konjiki-estilo-aco-tecnica-do-escudo-de-aco",
    nome: "Estilo Aço: Técnica do Escudo de Aço",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "terra",
    tempoConjuracao: "1 Reação, quando você ou um aliado são alvo de um ataque ou sofreriam dano",
    alcance: "4,5 metros",
    duracao: "1 rodada",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra", "Construção"],
    cla: "konjiki",
    descricao:
      "Você intercepta um ataque que tem como alvo você ou um aliado no alcance com uma parede de aço. Esta parede é uma construção, com 3 metros de altura, 4,5 metros de largura e 1,5 metro de espessura. Ela aparece logo antes do ataque atingir o alvo, interceptando todo o dano e efeitos. A parede possui 7d6 pontos de vida, CA igual à sua CD de resistência de Ninjutsu, e reduz todo o dano recebido em -5 (exceto dano de Raio). A parede também fornece meia-cobertura a todas as criaturas dentro de 1,5 metro.\n\nSe o dano que a parede recebe exceder seus pontos de vida, a criatura originalmente alvo sofre qualquer dano e efeitos remanescentes. Esta parede não desaparece no início do seu próximo turno, permanecendo como uma estrutura, a menos que seja destruída.",
    emNiveisSuperiores:
      "Para cada nível que você lançar este jutsu acima do Rank C, aumente o custo deste jutsu em 3, os pontos de vida da parede em 2d6, a largura em 1,5 metro, e a altura em 3 metros.",
  },
  {
    key: "konjiki-estilo-aco-lanca-de-aco",
    nome: "Estilo Aço: Lança de Aço",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "terra",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra"],
    cla: "konjiki",
    descricao:
      "Você conjura uma lança massiva feita de aço antes de enviá-la voando em direção a um alvo dentro do alcance, fazendo um ataque de ninjutsu à distância e causando 6d8 de dano [X]. Se você acertar um golpe crítico com a rolagem de ataque deste jutsu, a lança de aço se estilhaça e explode, triplicando os dados de dano em vez de dobrá-los.",
    emNiveisSuperiores:
      "Para cada nível que você lançar este jutsu acima do Rank C, aumente o custo deste jutsu em 3, o dano em 2d8, e o bônus deste jutsu à faixa de ameaça crítica em +1.",
  },
  {
    key: "konjiki-estilo-aco-tempestade-de-aco",
    nome: "Estilo Aço: Tempestade de Aço",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "terra",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal (raio de 9 metros)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra"],
    cla: "konjiki",
    descricao:
      "Você cria uma quantidade massiva de armas de aço acima de você em um raio de 9 metros. Todas as criaturas hostis que começarem seu turno ou entrarem nesta área pela primeira vez em um turno devem fazer um dos seguintes testes de resistência, de acordo com o tipo de dano que você selecionou usando seu recurso Formação de Armas (Contundente, Perfurante ou Cortante). Em um teste bem-sucedido, as criaturas sofrem metade do dano e não recebem efeitos.\n\nContundente (Constituição): em uma falha, as criaturas sofrem 4d10 de dano Contundente e ficam Atordoadas.\nPerfurante (Força): em uma falha, as criaturas sofrem 6d6 de dano Perfurante e ficam Agarradas pela duração.\nCortante (Destreza): em uma falha, as criaturas sofrem 5d8 de dano Cortante e ficam Laceradas.",
    emNiveisSuperiores:
      "Para cada nível que você lançar este jutsu acima do Rank C, aumente o custo deste jutsu em 3 e o dano em 1d10/1d6/1d8, respectivamente.",
  },
  // Rank B
  {
    key: "konjiki-estilo-aco-traje-de-aco",
    nome: "Estilo Aço: Traje de Aço",
    tipo: "ninjutsu",
    rank: "B",
    natureza: "terra",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra"],
    cla: "konjiki",
    descricao:
      "Você envolve uma fina camada de metal ao redor do seu corpo para aumentar significativamente suas capacidades defensivas. Você não pode perder a concentração neste jutsu devido a dano. Durante a duração, você ganha 10d10 pontos de vida temporários, que reduzem qualquer dano recebido em -5 (exceto dano de Raio).\n\nAlém disso, enquanto você tiver pontos de vida temporários concedidos por este jutsu, você é considerado um Fragmento de Tremor e causa +2d10 de dano adicional em todos os ataques desarmados e com armas corpo a corpo, duas vezes por turno. Quando os pontos de vida temporários concedidos por este jutsu chegam a 0, o jutsu termina.",
    emNiveisSuperiores:
      "Para cada nível que você lançar este jutsu acima do Rank C, aumente o custo deste jutsu em 3 e os pontos de vida temporários em 1d10.",
  },
  {
    key: "konjiki-estilo-aco-correntes-metalicas-de-amarracao",
    nome: "Estilo Aço: Correntes Metálicas de Amarração",
    tipo: "ninjutsu",
    rank: "B",
    natureza: "terra",
    tempoConjuracao: "1 Ação",
    alcance: "27 metros (raio de 6 metros)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra"],
    cla: "konjiki",
    descricao:
      "Você concentra seu Chakra profundamente no subsolo, criando uma grande quantidade de aço, antes que dezenas de correntes de aço se lancem para a superfície, tentando restringir aqueles que você comandar. Cada criatura dentro do alcance que você selecionar deve fazer um teste de resistência de Destreza.\n\nEm uma falha, o alvo sofre 4d8 de dano [X] e fica Restrito por suas correntes. Durante o restante do jutsu, se uma criatura entrar na área das correntes ou começar seu turno nela sem já estar restrita, você pode escolher que ela faça um teste de resistência de Destreza ou fique Restrita e sofra 4d6 de dano [X].\n\nUma criatura pode tentar deixar de estar restrita pelas correntes fazendo um teste de resistência de Força no final de cada um de seus turnos. A área ocupada pelas correntes é considerada terreno difícil.",
    emNiveisSuperiores:
      "Para cada nível que você lançar este jutsu acima do Rank B, aumente o custo deste jutsu em 3, o raio em 3 metros e o dano em 2d8 e 2d6, respectivamente.",
  },
  // Rank A
  {
    key: "konjiki-estilo-aco-prisao-metalica",
    nome: "Estilo Aço: Prisão Metálica",
    tipo: "ninjutsu",
    rank: "A",
    natureza: "terra",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Permanente",
    componentes: ["SM", "MC"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra", "Construção"],
    cla: "konjiki",
    descricao:
      "Você constrange e amarra uma criatura com metal. Escolha uma criatura dentro do alcance; ela deve fazer um teste de resistência de Força, ficando Restrita pela prisão de metal. Enquanto estiver restrita dessa forma, a criatura possui cobertura total e, se tentar lançar um jutsu com o componente SM, deve ter sucesso em um teste de Ninshou com desvantagem contra sua CD de resistência de Ninjutsu — caso contrário, o jutsu falha e o chakra é desperdiçado.\n\nA prisão de metal tem uma CA igual à sua CD de resistência de Ninjutsu e 120 pontos de vida, sendo resistente a todo tipo de dano, exceto dano de Raio. Uma criatura pode tentar refazer o teste de resistência de Força no final de cada um de seus turnos para terminar a restrição.\n\nCada vez que uma criatura falha no teste de resistência de Força, a CD aumenta em 1, até um máximo de +5.",
  },
];
