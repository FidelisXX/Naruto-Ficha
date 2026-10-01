import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Ryu — Estudos da Tsunade, cap. Ryu ("Ryu Clan
 * Jutsu"). Tema "sangue de dragão": vários Hijutsu causam dano do mesmo
 * elemento escolhido pela característica de clã "Sangue de Dragão" (não
 * fixo), então `natureza` fica de fora em todas as entradas em vez de
 * escolher um elemento arbitrário. O livro não traz um Hijutsu de Rank S
 * para este clã.
 *
 * Texto-fonte em português europeu ("tens de", "tua", "bónus", "num") com
 * trechos garblados (frases e palavras duplicadas) — normalizado para o
 * padrão brasileiro do resto do catálogo e limpo do ruído óbvio de OCR. O
 * texto também usa nomes inconsistentes para os buffs de referência cruzada
 * ("Raiva do Dragão" vs. "Ira dos Dragões", "Capa de Dragão" vs. "Manto do
 * Dragão") — normalizado para um nome único por buff.
 */
export const jutsuRyu: JutsuDefinition[] = [
  // Rank D
  {
    key: "ryu-manto-do-dragao",
    nome: "Manto do Dragão",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Reação, que você toma quando recebe dano",
    alcance: "Próprio",
    duracao: "1 turno",
    componentes: ["SM", "MC"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "ryu",
    descricao:
      "Seu corpo é revestido de Chakra, criando escamas dracônicas e asas de Chakra entre você e o ataque. Você ganha 3d6 + 10 pontos de vida temporários até o final do turno atual. Esses pontos de vida temporários se somam a quaisquer outros pontos de vida temporários concedidos por um Hijutsu do Clã Ryu. Se você estiver concentrado em Manto do Dragão, não perde esses pontos de vida temporários no final do turno, mantendo-os.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar este jutsu acima do Rank D, aumente o custo deste jutsu em 3 e os pontos de vida temporários em 5.",
  },
  {
    key: "ryu-aura-de-dragao",
    nome: "Aura de Dragão",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio (4,5 metros)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "ryu",
    descricao:
      "Você cria uma aura de Chakra elemental que se estende ao seu redor, até 4,5 metros de distância. Durante a duração, criaturas dentro do alcance recebem dano igual ao seu modificador de Habilidade de Ninjutsu a cada turno que começarem dentro da aura. Além disso, criaturas que fizerem um teste de resistência enquanto estiverem dentro da aura, contra um jutsu da mesma afinidade elemental que a aura, reduzem o resultado desse teste em 1.",
    emNiveisSuperiores:
      "Para cada nível que você lançar este jutsu acima do Rank D, aumente o custo deste jutsu em 3 e o tamanho da aura em 1,5 metro. Aumente a penalidade do teste de resistência para -2 no Rank B e -3 no Rank S.",
  },
  {
    key: "ryu-sopro-de-dragao",
    nome: "Sopro de Dragão",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Autônomo (cone de 6 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 3,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "ryu",
    descricao:
      "Este jutsu causa o mesmo tipo de dano que a Liberação de Natureza escolhida pela sua característica Sangue de Dragão. Você inspira e libera uma onda de Chakra destrutivo que corresponde à sua afinidade. As criaturas ao alcance devem fazer um teste de resistência de Destreza, sofrendo 3d8 de dano em uma falha ou metade em um sucesso.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar este jutsu acima do Rank D, aumente o custo deste jutsu em 3, o tamanho do cone em 1,5 metro e o dano em 2d8.",
  },
  {
    key: "ryu-visao-de-dragao",
    nome: "Visão de Dragão",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "1 hora",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Sensorial"],
    cla: "ryu",
    descricao:
      "Suas pupilas se estreitam em fendas dracônicas, concedendo-lhe uma visão fenomenal. Enquanto durar, você é imune à condição Cego, ganha Visão no Escuro e tem um bônus de +5 em testes de Sabedoria (Percepção) e (Perspicácia). Você pode ver as Afinidades de Natureza de outras criaturas, e também ganha 9 metros de Visão de Chakra, sendo capaz de ver quanto Chakra uma criatura tem com base na aura que ela exala.",
  },
  // Rank C
  {
    key: "ryu-bomba-de-dragoes",
    nome: "Bomba de Dragões",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "1,5 metro",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Choque"],
    cla: "ryu",
    descricao:
      "Este jutsu causa o mesmo tipo de dano que a Liberação de Natureza escolhida pela sua característica Sangue de Dragão. Você comprime Chakra do seu corpo em uma esfera do tamanho de uma bola de golfe, arremessando-a contra o alvo e criando uma onda de choque que afeta criaturas e objetos próximos a ele.\n\nFaça um ataque de ninjutsu corpo a corpo. Se acertar, causa 4d10 de dano. A criatura alvo e todas as criaturas, exceto você, em um raio de 4,5 metros ao redor do alvo devem fazer um teste de resistência de Constituição, sendo empurradas 4,5 metros pela onda de choque; as que falharem nesse teste também sofrem 3d6 de dano e caem Derrubadas, ou sofrem metade do dano em um sucesso.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar este jutsu acima do Rank C, aumente o custo deste jutsu em 3, o dano inicial em 2d10 e o dano da onda de choque em 1d6.",
  },
  {
    key: "ryu-furia-dos-dragoes",
    nome: "Fúria dos Dragões",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "ryu",
    descricao:
      "Você amplifica seu corpo com sua afinidade de Natureza, criando uma aura leve, porém chamativa, que simboliza seu Chakra. Durante a duração, você aumenta sua CA em +1, sua velocidade de movimento em 6 metros, e ganha um bônus de +2 em testes de resistência de Força e Destreza.\n\nSe você lançar este jutsu enquanto estiver recebendo os benefícios de Ira dos Dragões, reduza o custo deste jutsu em 2. Além disso, nesse caso, a duração deste jutsu se torna 1 minuto.",
  },
  {
    key: "ryu-ataque-dos-dragoes",
    nome: "Ataque dos Dragões",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio (Especial)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC", "A (Katana)"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Bukijutsu"],
    cla: "ryu",
    descricao:
      "Este jutsu causa o mesmo tipo de dano que a Liberação de Natureza escolhida pela sua característica Sangue de Dragão. Você banha sua katana em Chakra, de forma que ela vibra e zumbe alto o suficiente para soar como um ventilador giratório. Você faz um único corte decisivo, liberando o ataque e destruindo tudo em seu caminho. Você tem duas opções para o tamanho e a forma deste ataque:\n\nCorte Horizontal: você balança a espada da esquerda para a direita, liberando um violento vendaval de energia elemental que atinge todas as criaturas em um cone de 7,5 metros. As criaturas ao alcance devem fazer um teste de resistência de Destreza, sofrendo 5d8 de dano e caindo Derrubadas se falharem, ou sofrendo metade do dano se forem bem-sucedidas.\n\nCorte Vertical: você balança a espada diretamente para baixo, liberando um único feixe de energia elemental da katana. O feixe voa em uma linha reta de 18 metros de comprimento e 3 metros de largura. As criaturas ao alcance devem fazer um teste de resistência de Destreza, sofrendo 7d6 de dano e caindo Derrubadas se falharem, ou sofrendo metade do dano se forem bem-sucedidas.",
    emNiveisSuperiores:
      "Para cada nível de conjuração deste jutsu acima do Rank C, aumente o custo deste jutsu em 3 e o dano do Corte Horizontal em 2d8, ou o dano do Corte Vertical em 2d6.",
  },
  // Rank B
  {
    key: "ryu-onda-destrutiva",
    nome: "Onda Destrutiva",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio (raio de 9 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Choque"],
    cla: "ryu",
    descricao:
      "Este jutsu causa o mesmo tipo de dano que a Liberação de Natureza escolhida pela sua característica Sangue de Dragão. Você reúne sua energia elemental, comprimindo-a em um único ponto — como a boca ou as mãos — e então a libera em todas as direções, golpeando o chão e criando uma onda de choque que se espalha e esmaga todos os inimigos ao redor.\n\nCada criatura de sua escolha em um raio de 9 metros de você deve fazer um teste de resistência de Constituição, sofrendo 10d6 de dano e ficando Derrubada se falhar, ou sofrendo metade do dano se for bem-sucedida.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar este jutsu acima do Rank B, aumente o custo deste jutsu em 3, o dano em 2d6 e o raio em 3 metros.",
  },
  {
    key: "ryu-capa-de-dragao",
    nome: "Capa de Dragão",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "ryu",
    descricao:
      "Você cobre seu corpo com Chakra e o molda até que se torne visível a olho nu. Seu Chakra então começa a borbulhar e ferver até tomar a forma de um dragão que cobre toda a sua silhueta — você continua visível dentro da construção de Chakra. Durante a duração, você ganha 30 pontos de vida temporários, seus ataques desarmados causam um dado adicional de dano, e você ganha um bônus de +2 em testes de resistência de Constituição e Sabedoria enquanto ainda tiver pontos de vida temporários concedidos por este jutsu.\n\nSe você lançar este jutsu enquanto estiver recebendo os benefícios de Fúria dos Dragões ou Ira dos Dragões, reduza o custo deste jutsu em 3 para cada um desses jutsu que estiver ativo.\n\nAlém disso, se você estiver recebendo os benefícios de Fúria dos Dragões, não precisa mais manter a concentração nele — mas continua ganhando seus benefícios durante a duração deste jutsu.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar este jutsu acima do Rank B, aumente o custo deste jutsu em 3 e os pontos de vida temporários em 15.",
  },
  // Rank A
  {
    key: "ryu-ascensao-dos-dragoes",
    nome: "Ascensão dos Dragões",
    tipo: "ninjutsu",
    rank: "A",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "ryu",
    descricao:
      "Você retém todo o seu Chakra dentro de si, sem permitir que nada dele escape, aumentando seus atributos físicos além dos limites normais e igualando-os aos de um dragão. Sua Força, Destreza e Constituição se tornam todas 24 durante esse período. Sua velocidade é duplicada e você ganha um bônus de +2 em Inteligência e Carisma. Você perde a capacidade de lançar ou se concentrar em jutsu que não sejam do Clã Ryu durante este período.\n\nQuando este jutsu terminar, faça um teste de Constituição contra uma CD 20 + 1 para cada rodada em que este jutsu permaneceu ativo. Se falhar, você cai Caído e Atordoado por um número de minutos igual ao número de rodadas em que este jutsu esteve ativo.\n\nSe você lançar este jutsu enquanto estiver recebendo os benefícios de Fúria dos Dragões, Ira dos Dragões ou Manto do Dragão, reduza o custo deste jutsu em 4 para cada um desses jutsu que estiver ativo.\n\nAlém disso, se você estiver recebendo os benefícios de Fúria dos Dragões e/ou Manto do Dragão, não precisa mais manter a concentração neles — mas continua ganhando seus benefícios durante a duração deste jutsu.",
  },
];
