import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Namikaze — Estudos da Tsunade, cap. Namikaze
 * ("Jutsu Do Clã Namikaze"). Tema de velocidade, com todas as entradas
 * marcadas "Estilo Vento, Estilo Relâmpago" no texto-fonte — `natureza`
 * segue o dano realmente causado (vento, quando há dano fixo de um
 * elemento; omitida quando o jutsu não causa dano). O livro não traz um
 * Hijutsu de Rank S para este clã.
 */
export const jutsuNamikaze: JutsuDefinition[] = [
  // Rank D
  {
    key: "namikaze-estilo-veloz-agilidade",
    nome: "Estilo Veloz: Agilidade",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "M"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Estilo Relâmpago"],
    cla: "namikaze",
    descricao:
      "Você foca seu Chakra, concedendo a si mesmo uma velocidade imensa, permitindo que aja mais rápido do que quase qualquer outra pessoa no campo de batalha. Durante a duração, você pode usar um dos efeitos listados uma vez por turno, sem custo de ação, no seu turno. Você pode se beneficiar deste jutsu um número de vezes igual ao seu modificador de Habilidade de Ninjutsu por lançamento (mínimo 1).\n\nManobras Evasivas: Antes do início do seu próximo turno, o primeiro ataque feito contra você é feito com Desvantagem, e o primeiro teste de resistência de Destreza que você fizer tem Vantagem.\n\nDeduzir: Faça um teste de Percepção ou Investigação contra a CA de uma criatura que você possa ver. Em caso de sucesso, antes do início do seu próximo turno, o próximo ataque que você fizer contra essa criatura terá +1 em sua faixa de ameaça crítica, e o próximo jutsu que você lançar aumentará sua CD de resistência em +1 para o primeiro teste de resistência que forçar a criatura a fazer.",
  },
  {
    key: "namikaze-estilo-veloz-fase",
    nome: "Estilo Veloz: Fase",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Reação, quando você recebe dano ou faz um teste de resistência de Destreza",
    alcance: "Próprio",
    duracao: "1 rodada",
    componentes: ["SM", "M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Estilo Relâmpago"],
    cla: "namikaze",
    descricao:
      "Pouco antes de ser atingido por um ataque, você vibra rápido o suficiente para fazer com que a maioria dos ataques passe inofensivamente por você. Até o início do seu próximo turno, você ganha um bônus de +5 na CA contra ataques e vantagem em testes de resistência de Destreza.",
  },
  {
    key: "namikaze-estilo-veloz-tecnica-imagem-de-espelho",
    nome: "Estilo Veloz: Técnica Imagem de Espelho",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "1 minuto",
    componentes: ["SM", "MC", "M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Estilo Relâmpago"],
    cla: "namikaze",
    descricao:
      "Você molda seu Chakra de Estilo Vento e Estilo Relâmpago em clones muito convincentes de si mesmo. Três clones de você aparecem em seu espaço. Até o fim do jutsu, os clones se movem com você e imitam suas ações, mudando de posição em alta velocidade, de modo que é impossível rastrear qual imagem é real. Você pode usar sua ação bônus para dispensar os clones.\n\nToda vez que uma criatura o atacar durante a duração do jutsu, role um d20 para determinar se o ataque atinge você ou um de seus clones em vez disso. Se você tiver três clones, você deve rolar 6 ou mais para mudar o alvo do ataque para um clone; com dois clones, deve rolar 8 ou mais; com um clone, deve rolar 11 ou mais. Se a criatura que o ataca tiver Visão Verdadeira, você faz essa rolagem com desvantagem.\n\nA CA de um clone é igual a 10 + seu modificador de Destreza + metade do seu bônus de proficiência. Se um ataque atingir um clone, ele é destruído — um clone só pode ser destruído por um ataque que o atinja, ignorando todos os outros danos e efeitos. O jutsu termina quando todos os três clones são destruídos.",
  },
  {
    key: "namikaze-estilo-veloz-ataque-de-destruicao-de-ar",
    nome: "Estilo Veloz: Ataque de Destruição de Ar",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "vento",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Instantâneo",
    componentes: ["MC", "M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Estilo Relâmpago"],
    cla: "namikaze",
    descricao:
      "Você molda e comprime seu Chakra em torno de si mesmo e instantaneamente ataca com ele, mais rápido do que os olhos podem ver. Faça um ataque de ninjutsu corpo a corpo contra um alvo que você possa ver dentro do alcance. Se for atingido, o alvo recebe 4d6 de dano de Vento.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3, o dano em 2d6, e você pode fazer um ataque adicional contra outra criatura dentro do alcance.",
  },
  // Rank C
  {
    key: "namikaze-estilo-veloz-aura-de-rapidez",
    nome: "Estilo Veloz: Aura de Rapidez",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (esfera de 9 metros)",
    duracao: "1 hora",
    componentes: ["SM", "MC"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Estilo Relâmpago"],
    cla: "namikaze",
    descricao:
      "Você estende seu Chakra, criando uma bolha de Chakra em um raio de 9 metros que ocasionalmente crepita com um relâmpago amarelo suave. Durante a duração deste jutsu, a aura se move com você, centrada em você. Cada criatura de sua escolha que começar seu turno dentro de sua aura tem a velocidade aumentada em 4,5 metros até o final de seu próximo turno.\n\nSe usado durante uma exploração ou viagem terrestre, você trata o ritmo normal de viagem como ritmo de viagem rápido, e dobra as distâncias percorridas nesse ritmo.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e a velocidade de movimento em mais 3 metros.",
  },
  {
    key: "namikaze-estilo-veloz-voo-sem-sombras",
    nome: "Estilo Veloz: Voo sem Sombras",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "1 rodada",
    componentes: ["SM", "M"],
    custoChakra: 6,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Estilo Relâmpago"],
    cla: "namikaze",
    descricao:
      "Você se imbui de uma velocidade incrível, aprimorando sua forma física. Até o início de seu próximo turno, uma vez por turno, ao usar sua ação para fazer pelo menos um ataque de Taijutsu (com arma ou desarmado), você pode fazer um ataque adicional de arma ou desarmado.\n\nEsse ataque adicional ignora resistências e, se feito contra um alvo que usou um Taijutsu ou fez um ataque com arma como parte de seu último turno, você tem vantagem na rolagem de ataque. Além disso, enquanto este jutsu estiver ativo, você impõe desvantagem em ataques corpo a corpo contra você.",
  },
  {
    key: "namikaze-estilo-veloz-clarao-do-trovao",
    nome: "Estilo Veloz: Clarão do Trovão",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "vento",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio (Especial)",
    duracao: "1 rodada",
    componentes: ["SM", "M"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Estilo Relâmpago"],
    cla: "namikaze",
    descricao:
      "Você concentra Chakra em suas pernas e corre para frente com força explosiva. Como parte do lançamento deste jutsu, você se move para o último espaço desocupado em uma linha de 9 metros de comprimento e 3 metros de largura a partir de sua posição inicial. Esse movimento não provoca ataques de oportunidade. Cada criatura pela qual você passar durante esse movimento deve fazer um teste de resistência de Destreza, sofrendo 6d6 de dano de Vento em uma falha, ou metade desse valor em um sucesso.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3, o dano em 2d6 e a distância que você se move em 3 metros.",
  },
  // Rank B
  {
    key: "namikaze-estilo-veloz-relampago-espiral",
    nome: "Estilo Veloz: Relâmpago Espiral",
    tipo: "ninjutsu",
    rank: "B",
    natureza: "vento",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "M"],
    custoChakra: 13,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Estilo Relâmpago"],
    cla: "namikaze",
    descricao:
      "Você pode se tornar brevemente mais rápido do que os olhos podem ver ao atacar uma seleção de alvos. Selecione um número de criaturas dentro do alcance, até uma quantidade igual ao seu bônus de proficiência. Faça um ataque de ninjutsu corpo a corpo contra cada alvo. Se for atingido, o alvo recebe 7d8 de dano de Vento.\n\nPara cada ataque bem-sucedido que você fizer, você ganha um bônus de +1 no seu próximo teste de resistência ou verificação de habilidade, até um máximo de +5, até o final do seu próximo turno.\n\nAlém disso, após todos os ataques terem sido feitos, você pode se teletransportar para um espaço desocupado que possa ver em um raio de 1,5 metro de um dos alvos que acertou ou errou.",
  },
  {
    key: "namikaze-estilo-veloz-movimento-instantaneo",
    nome: "Estilo Veloz: Movimento Instantâneo",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 12,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Estilo Relâmpago"],
    cla: "namikaze",
    descricao:
      "Você concentra seu Chakra em suas pernas, concedendo a você uma quantidade imensurável de velocidade, deixando a visão de todos até que esteja preparado para seu próximo movimento. Você não pode perder a concentração neste jutsu como resultado de dano. Role um d20 no final de cada um dos seus turnos durante a duração do jutsu. Em uma rolagem de 11 ou mais, você desaparece de sua localização atual, movendo-se em hipervelocidade.\n\nNo início do seu próximo turno, e quando o jutsu terminar se você ainda estiver correndo, você retorna para um espaço desocupado de sua escolha que possa ver a 3 metros do espaço de onde desapareceu. Se nenhum espaço desocupado estiver disponível dentro desse alcance, você aparece no espaço desocupado mais próximo, escolhido aleatoriamente. Você pode dispensar este jutsu como uma ação.\n\nEnquanto se move em hipervelocidade, seu fluxo de Chakra para seus sentidos fica ligeiramente restrito: você só pode ver tons de cinza, e não pode ver nada a mais de 18 metros de distância do espaço de onde desapareceu. Você também não pode afetar nada enquanto estiver neste estado.",
  },
  // Rank A
  {
    key: "namikaze-estilo-veloz-armadilha-de-velocidade",
    nome: "Estilo Veloz: Armadilha de Velocidade",
    tipo: "ninjutsu",
    rank: "A",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Estilo Relâmpago"],
    cla: "namikaze",
    descricao:
      "Seu domínio da Liberação Rápida permite que você remova a velocidade de uma criatura dentro do alcance. Selecione uma criatura que você possa ver dentro do alcance; você começa a drenar seu movimento e velocidade. A criatura alvo, no início de cada um de seus turnos, deve fazer um teste de resistência de Constituição. Se falhar, ela ganha 2 graus de Enfraquecido e Lento.\n\nEnquanto o alvo estiver Desacelerado ou Enfraquecido dessa forma, ele não pode ganhar bônus de velocidade de forma alguma. O alvo também tem desvantagem em todas as rolagens de ataque, verificações de habilidade e testes de resistência, exceto verificações de habilidade e testes de resistência de Constituição, pois sua velocidade, tempo de reação e capacidade de movimento estão sendo reduzidos. Por fim, se o alvo tentar lançar um jutsu, ele deve primeiro fazer um teste de resistência de Constituição; se falhar, o lançamento falha e o Chakra é desperdiçado como se o jutsu tivesse sido lançado.\n\nUm alvo que sofre com esse sifão de velocidade faz um teste de resistência de Constituição ao final de cada um de seus turnos. Se for bem-sucedido, remove 1 grau das condições Desacelerado ou Enfraquecido, à sua escolha. O alvo ganha uma aplicação adicional da condição Desacelerado ou Enfraquecido cada vez que falhar nesse teste de resistência.",
  },
];
