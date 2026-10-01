import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Akimichi — Estudos da Tsunade, cap. Akimichi
 * ("Jutsus do Clã Akimichi"). Tema de expansão corporal, com um recurso
 * próprio ("Calorias") que pode substituir o custo de Chakra em vários
 * Hijutsu — guardado em `custoChakraTexto` quando a fonte dá as duas
 * opções. `natureza` fica de fora em todas as entradas (sem elemento).
 * O livro não traz um Hijutsu de Rank S para este clã.
 *
 * Nota: o texto de escala de nível de "Pedregulho Humano" (base Rank D)
 * refere "acima do Rank C" — preservado como está na fonte, mesmo tipo de
 * inconsistência já vista em outros clãs (ver vesper.ts). A fonte também
 * usa "Contundência"/"Espancamento" como sinônimos de dano contundente em
 * passagens diferentes — normalizado para "Contundente" em todo o arquivo.
 */
export const jutsuAkimichi: JutsuDefinition[] = [
  // Rank D
  {
    key: "akimichi-amortecedor-de-gordura-corporal",
    nome: "Amortecedor de Gordura Corporal",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Reação, que você toma quando receberia dano",
    alcance: "Próprio",
    duracao: "Instantâneo",
    componentes: ["MC"],
    custoChakra: 4,
    custoChakraTexto: "4 Chakra ou 2 Calorias",
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "akimichi",
    descricao:
      "Você expande seu corpo como um balão, reduzindo o dano ao amortecer os impactos. Você ganha resistência a danos Contundentes e Cortantes, mas recebe um dado adicional de dano de ataques Perfurantes até o início do seu próximo turno.",
  },
  {
    key: "akimichi-colisao-vazia",
    nome: "Colisão Vazia",
    tipo: "taijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Instantâneo",
    componentes: ["M"],
    custoChakra: 4,
    custoChakraTexto: "4 Chakra ou 2 Calorias",
    palavrasChave: ["Hijutsu", "Taijutsu"],
    cla: "akimichi",
    descricao:
      "Você esmaga o chão, levantando pedaços de pedra e os arremessa em direção a uma criatura alvo dentro do alcance. Faça um ataque de taijutsu à distância. Em um acerto, você causa 4d6 de dano Contundente. Se o jutsu Expansão Parcial do clã estiver ativo quando você usar esse jutsu, você causa 6d6 de dano Contundente em vez disso.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo de Chakra desse jutsu em 3 ou o custo de Calorias em 1, e o dano em 2d6.",
  },
  {
    key: "akimichi-expansao-parcial",
    nome: "Expansão Parcial",
    tipo: "taijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 4,
    custoChakraTexto: "4 Chakra ou 2 Calorias",
    palavrasChave: ["Hijutsu", "Taijutsu"],
    cla: "akimichi",
    descricao:
      "Se você gastar Calorias para ativar esse jutsu, não precisará gastar Chakra para mantê-lo pela duração. Você expande temporariamente uma parte do seu corpo, aumentando o potencial de impacto de cada ataque desarmado. O alcance do seu ataque desarmado passa a ser 3 metros durante a duração, e seu dado de dano desarmado se torna 1d8.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo de Chakra desse jutsu em 3 ou o custo de Calorias em 1. Quando for lançado no Rank B, aumente o dano em 1d8 (total 2d8). Quando for lançado no Rank S, aumente o dano em 2d8 (total 3d8).",
  },
  {
    key: "akimichi-pedregulho-humano",
    nome: "Pedregulho Humano",
    tipo: "taijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC", "M"],
    custoChakra: 5,
    custoChakraTexto: "5 Chakra ou 3 Calorias",
    palavrasChave: ["Hijutsu", "Taijutsu", "Conflito"],
    cla: "akimichi",
    descricao:
      "Você expande seu corpo como um balão, retraindo seus braços e pernas dentro de sua gordura. Você usa seu Chakra para girar seu corpo como uma bola de boliche, evitando ficar tonto, e se arremessa em uma linha reta em direção a um alvo, esmagando todos os outros em seu caminho. Mova-se até 9 metros em uma linha reta, terminando seu movimento ocupando o espaço da criatura-alvo. Faça um ataque de taijutsu corpo a corpo contra a criatura-alvo, causando 2d12 + seu modificador de Força de dano Contundente em um acerto. A criatura-alvo é movida para o espaço mais próximo de sua escolha em um raio de 1,5 metro que ela possa ocupar. As criaturas em seu caminho, pelas quais você atravessar, devem fazer um teste de resistência de Destreza, sofrendo 4d6 de dano Contundente se falharem, ou metade do dano se forem bem-sucedidas.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo de Chakra desse jutsu em 3 ou o custo de Calorias em 1, e o dano em 2d12 e 2d6. Se esse jutsu for lançado no Rank B ou superior, seu cabelo se eriça e você causa um dano Perfurante adicional de 4d6 à criatura-alvo e às criaturas que atravessar. Se esse jutsu for lançado no Rank S, a distância que você pode percorrer aumenta para 27 metros, sendo capaz de se mover em qualquer direção e virar cantos. As criaturas só podem ser afetadas por esse jutsu mais de uma vez se você passar por cima delas mais de uma vez usando esse movimento adicional.",
  },
  // Rank C
  {
    key: "akimichi-expansao-de-corpo-inteiro",
    nome: "Expansão de Corpo Inteiro",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    custoChakraTexto: "8 Chakra ou 4 Calorias",
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "akimichi",
    descricao:
      "Se você gastar Calorias para ativar esse jutsu, não precisará gastar Chakra para mantê-lo pela duração. Você expande temporariamente todo o seu corpo, crescendo em tamanho. Durante a duração, você aumenta seu tamanho em 1 categoria (Médio > Grande > Enorme). Você também aumenta o dano que causa ao usar um Hijutsu do Clã Akimichi que usa Força em Xd4 (X = seu modificador de Força); esse bônus de dano não pode ser aplicado mais de duas vezes por turno. Você também ganha vantagem em todos os testes de resistência de Constituição.\n\nVocê pode lançar este jutsu uma segunda vez, aumentando seu tamanho em mais 1 categoria, até um máximo de Enorme — isso faz com que o custo de manter este jutsu se torne 8 Chakra por rodada. Se você se tornar Enorme como resultado deste jutsu, o bônus de dano dos Hijutsu do Clã Akimichi passa a ser Xd6. Além disso, as criaturas fazem seus testes de resistência contra os Hijutsu do Clã Akimichi que você lançar com desvantagem.",
  },
  {
    key: "akimichi-missil-de-braco-de-varios-tamanhos",
    nome: "Míssil de Braço de Vários Tamanhos",
    tipo: "taijutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (linha de 9 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC", "M"],
    custoChakra: 9,
    custoChakraTexto: "9 Chakra ou 5 Calorias",
    palavrasChave: ["Hijutsu", "Taijutsu", "Conflito"],
    cla: "akimichi",
    descricao:
      "Você só pode lançar esse jutsu enquanto estiver recebendo os benefícios do jutsu Expansão Parcial ou Expansão de Corpo Inteiro. Você estende o braço à sua frente e injeta nele uma massa de Chakra e Calorias, fazendo-o se expandir tão rapidamente que atinge, esmaga e empurra tudo em uma linha de 9 metros a partir de você. Todas as criaturas no alcance devem fazer um teste de resistência, sofrendo seu dano desarmado + 2d8 se falharem, ou metade do dano se forem bem-sucedidas. As criaturas que falharem ficam machucadas, são empurradas 3 metros para trás e ficam Derrubadas.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo de Chakra desse jutsu em 3 ou o custo de Calorias em 2, e o dano em 2d8.",
  },
  {
    key: "akimichi-tapa-de-mao-super-aberto",
    nome: "Tapa de Mão Super Aberto",
    tipo: "taijutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "Instantâneo",
    componentes: ["MC", "M"],
    custoChakra: 9,
    custoChakraTexto: "9 Chakra ou 5 Calorias",
    palavrasChave: ["Hijutsu", "Taijutsu", "Conflito"],
    cla: "akimichi",
    descricao:
      "Você já deve ter o jutsu Expansão Parcial ou Expansão de Corpo Inteiro ativo. O Chakra irrompe da palma da sua mão, a ponto de se tornar visível, aumentando o peso, a densidade muscular e o impacto de suas palmas. Como parte da ativação deste jutsu, faça um ataque de Taijutsu corpo a corpo. Em um acerto, você causa seu dano desarmado + 5d8. Independentemente de você acertar ou não, todas as criaturas, exceto a criatura-alvo original, em um raio de 3 metros do alvo original, devem fazer um teste de resistência de Destreza, sofrendo 4d8 de dano Contundente se falharem, ou metade do dano se forem bem-sucedidas.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo de Chakra desse jutsu em 3 ou o custo de Calorias em 2, e o dano em 2d8.",
  },
  // Rank B
  {
    key: "akimichi-modo-borboleta",
    nome: "Modo Borboleta",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 0,
    custoChakraTexto: "6 Calorias",
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "akimichi",
    descricao:
      "Você libera Chakra das suas costas, que se transforma em asas de borboleta visíveis a olho nu, com o design de sua escolha. Durante a duração deste jutsu, você não pode usar o jutsu Expansão de Corpo Inteiro, e ganha imunidade a dano de Veneno. O dano que você causa em ataques corpo a corpo com armas ou desarmados, ou ao lançar um Hijutsu do Clã Akimichi que use Força, é aumentado em Xd6 (X = seu bônus de proficiência). Se você lançar um Taijutsu que não seja um Hijutsu do Clã Akimichi, o dano adicional é metade do dado bônus que você receberia se fosse um Hijutsu Akimichi. Esse dano bônus pode ser aplicado no máximo duas vezes por rodada.\n\nVocê também ganha vantagem em testes de resistência de Força e Constituição, além de testes de habilidade baseados em Força. Quando este jutsu termina, você perde todas as Calorias restantes e não pode recuperar Calorias até completar um descanso longo.",
  },
  {
    key: "akimichi-recarga-calorica",
    nome: "Recarga Calórica",
    tipo: "taijutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Instantâneo",
    componentes: ["MC"],
    custoChakra: 0,
    custoChakraTexto: "Especial (gasta Calorias, não Chakra)",
    palavrasChave: ["Hijutsu", "Taijutsu"],
    cla: "akimichi",
    descricao:
      "Ao gastar qualquer quantidade de Calorias, você pode recuperar pontos de vida convertendo-as em energia de cura. Para cada Caloria gasta dessa forma, você recupera 1d6 + seu modificador de Constituição em pontos de vida, até um máximo de 10 Calorias gastas. Uma vez que você tenha gasto um total de 10 Calorias dessa maneira ao lançar esse jutsu antes de completar qualquer tipo de descanso, você deve completar um descanso antes de poder lançar esse jutsu novamente dessa forma.",
    emNiveisSuperiores:
      "Para cada patamar acima do Rank B em que você lançar este jutsu, você recupera 1d8 + seu modificador de Constituição em pontos de vida por Caloria. Se este jutsu for lançado no Rank S, você recupera 1d10 + seu modificador de Constituição em pontos de vida por Caloria.",
  },
  // Rank A
  {
    key: "akimichi-bomba-bala-borboleta",
    nome: "Bomba-Bala Borboleta",
    tipo: "taijutsu",
    rank: "A",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "Instantâneo",
    componentes: ["SM", "MC", "M"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Taijutsu", "Confronto"],
    cla: "akimichi",
    descricao:
      "Como parte dos requisitos para este jutsu, você deve ter o jutsu Expansão de Corpo Inteiro ou Modo Borboleta ativo. Você converte forçadamente todas as suas Calorias restantes em Chakra e canaliza essa energia em seu punho, tentando realizar um ataque devastador. Reduza suas Calorias restantes a 0. Faça um ataque de Taijutsu corpo a corpo contra uma criatura ao alcance. Em um acerto, você causa 10d10 de dano Contundente + 1d10 de dano adicional para cada Caloria que você tinha antes de lançar este jutsu.\n\nTodas as criaturas em um cone de 9 metros atrás da criatura-alvo devem fazer um teste de resistência de Destreza. Em caso de falha, elas sofrem metade do dano causado, são empurradas 6 metros para trás e ficam Atordoadas.\n\nApós a conclusão deste jutsu, o Modo Borboleta termina imediatamente, e você não pode recuperar Calorias até completar um descanso longo.",
    emNiveisSuperiores:
      "Para cada patamar acima do Rank A em que você lançar este jutsu, aumente o custo de Chakra deste jutsu em 3 e o dano inicial em 2d10.",
  },
];
