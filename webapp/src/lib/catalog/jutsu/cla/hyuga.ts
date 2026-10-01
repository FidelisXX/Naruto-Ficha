import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Hyūga — Estudos da Tsunade, cap. Hyūga
 * ("Jutsu Do Clã Hyūga"). Punho Gentil (Jūken) — taijutsu que causa
 * dano de Chakra/Força usando o Byakugan. `natureza` fica de fora em
 * todas as entradas (dano de Chakra, Força ou Contundente — nenhum
 * elemental; o mesmo vale para os taijutsu do catálogo base, que
 * também nunca têm `natureza`). 14 Hijutsu no total — distribuição
 * 5/4/3/2 (D/C/B/A), não o usual 4/3/2/1, e sem Rank S.
 *
 * Nota de normalização: a fonte alterna entre "Postura do Punho
 * Suave" e "Postura do Punho Gentil" para a mesma característica de
 * clã — normalizado para "Postura do Punho Gentil" em todo o arquivo,
 * por ser o nome usado em clans.ts.
 */
export const jutsuHyuga: JutsuDefinition[] = [
  // Rank D
  {
    key: "hyuga-contra-ataque-gentil",
    nome: "Contra-Ataque Gentil",
    tipo: "taijutsu",
    rank: "D",
    tempoConjuracao: "1 Reação, que você recebe quando é atingido por um ataque corpo a corpo",
    alcance: "Próprio",
    duracao: "Instantâneo",
    componentes: ["MC", "M"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Taijutsu"],
    cla: "hyuga",
    descricao:
      "Como parte do lançamento deste jutsu, você deve estar se beneficiando da Postura do Punho Gentil. Você reage instantaneamente a um ataque. Quando sofrer dano de um ataque corpo a corpo, você pode rolar 1d8 + seu bônus de ataque desarmado. Reduza o dano que você sofreu pelo resultado.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e a redução de dano em 2d8 adicionais.",
  },
  {
    key: "hyuga-rotacao-de-palma",
    nome: "Rotação de Palma",
    tipo: "taijutsu",
    rank: "D",
    tempoConjuracao:
      "1 Reação, que você realiza quando é alvo de um ataque, sofreria dano, ou faria um teste de resistência de Força ou Destreza",
    alcance: "Próprio (1,5 metro)",
    duracao: "1 rodada",
    componentes: ["MC", "M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Taijutsu", "Confronto"],
    cla: "hyuga",
    descricao:
      "Você gira em velocidade violenta enquanto libera Chakra de todos os pontos de Chakra do seu corpo, criando uma cúpula de Chakra azul que repele a maioria dos ataques. Até o início do seu próximo turno, você tem um bônus de +5 na CA, inclusive contra o ataque desencadeante. Se você estiver sujeito a um jutsu que exija que você faça um teste de resistência de Força ou Destreza, você faz o teste com vantagem.\n\nAs criaturas que estiverem a até 1,5 metro de você quando você lançar este jutsu devem ter sucesso em um teste de resistência de Força, recebendo 2d8 de dano de Força e sendo empurradas para trás 1,5 metro se falharem.",
  },
  {
    key: "hyuga-golpe-de-palma",
    nome: "Golpe de Palma",
    tipo: "taijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "1,5 metro",
    duracao: "Instantâneo",
    componentes: ["MC", "M"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Taijutsu", "Finalizador"],
    cla: "hyuga",
    descricao:
      "Como parte dos requisitos deste jutsu, você deve estar se beneficiando da Postura do Punho Gentil. Você faz um único ataque decisivo contra a rede de Chakra de seu oponente. Faça um ataque de taijutsu corpo a corpo e, se acertar, causa 3d8 de dano de Chakra. A criatura alvo deve fazer um teste de resistência de Constituição, tornando-se incapaz de moldar Chakra até o início de seu próximo turno em uma falha. Se a criatura alvo tiver 0 de Chakra, você causa o dobro desse valor como dano de Força aos seus pontos de vida. Se este jutsu for usado como finalizador, você causa 5d8 de dano de Chakra.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dano em 2d8. Se este jutsu for usado como finalizador, em vez disso aumente o dano em 3d8.",
  },
  {
    key: "hyuga-agulha-tenketsu",
    nome: "Agulha Tenketsu",
    tipo: "taijutsu",
    rank: "D",
    tempoConjuracao: "Especial",
    alcance: "1,5 metro",
    duracao: "Instantâneo",
    componentes: ["MC", "M"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Taijutsu"],
    cla: "hyuga",
    descricao:
      "Como parte dos requisitos deste jutsu, você deve ter o Byakugan ativo e estar se beneficiando da Postura do Punho Gentil. Quando você atinge uma criatura com um ataque desarmado ou de Taijutsu, você pode lançar este jutsu como parte da mesma ação. Quando fizer isso, a criatura deve fazer um teste de resistência de Constituição. Se falhar, o custo de todos os jutsus dela aumenta em 5 até o final de seu próximo turno.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o custo do jutsu do alvo em 5.",
  },
  {
    key: "hyuga-palma-de-vacuo",
    nome: "Palma de Vácuo",
    tipo: "taijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Instantâneo",
    componentes: ["MC", "M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Taijutsu"],
    cla: "hyuga",
    descricao:
      "Como parte do lançamento deste jutsu, você deve estar se beneficiando da Postura do Punho Gentil. Você empurra sua palma para a frente contra uma criatura que você possa ver dentro do alcance, criando uma explosão invisível de chakra. Faça um ataque de taijutsu à distância. Em um acerto, você causa 5d4 de dano de Força.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dano em 2d4.",
  },
  // Rank C
  {
    key: "hyuga-8-trigramas-64-palmas",
    nome: "8-Trigramas 64 Palmas",
    tipo: "taijutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal (1,5 metro)",
    duracao: "Instantâneo",
    componentes: ["MC", "M"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Taijutsu", "Combo"],
    cla: "hyuga",
    descricao:
      "Como parte dos requisitos deste jutsu, você deve ter o Byakugan ativo e estar se beneficiando da Postura do Punho Gentil. Você executa a manobra final do Clã Hyūga, o Punho Gentil. Faça um único ataque corpo a corpo de taijutsu, comparando o resultado com a CA de todas as criaturas de sua escolha a até 1,5 metro de você. Em um acerto, você causa seu [Dano Desarmado] + 3d8 de dano de Chakra e metade do dano de Chakra causado como dano de Força, e você pode escolher Interromper II ou Bloqueio II nos caminhos de Chakra da criatura. Se a criatura alvo tiver 0 de Chakra, você causa o dobro do resultado como dano de Força.\n\nInterromper II: você aumenta o custo de todos os jutsus que ela lançar em +9, até o final do seu próximo turno.\nBloqueio II: você força a criatura alvo a fazer um teste de resistência de Constituição, ficando incapaz de moldar Chakra por 2 de seus turnos (ou Ações Elite).",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e o dano em 1d8, e se você usar Interromper II, aumente o custo do próximo jutsu dela em +6 adicionais. Se este jutsu for lançado a Rank B ou superior, você faz 2 ataques, e as criaturas que você atingir com ambos os ataques sofrem efeitos aumentados de Interromper II e Bloqueio II. Este jutsu não pode fazer mais de 2 ataques por lançamento.\n\nInterromper II: você aumenta o custo de todos os jutsus que ela lançar em +12, até o final do seu próximo turno.\nBloqueio II: você força a(s) criatura(s) alvo a fazer um teste de resistência de Constituição, ficando incapaz(es) de moldar Chakra por 3 de seus turnos (ou Ações Elite). Elas podem refazer o teste de resistência para remover esse efeito no final de seus turnos.",
  },
  {
    key: "hyuga-rotacao-da-palma-gigante",
    nome: "Rotação da Palma Gigante",
    tipo: "taijutsu",
    rank: "C",
    tempoConjuracao:
      "1 Reação, quando você ou uma criatura aliada dentro do alcance for alvo de um ataque, fizer um teste de resistência de Força, Destreza ou Constituição, ou sofreria dano",
    alcance: "Próprio (esfera com raio de 3 metros)",
    duracao: "1 rodada",
    componentes: ["MC", "M"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ramo Principal", "Taijutsu", "Confronto"],
    cla: "hyuga",
    descricao:
      "A forma aperfeiçoada da \"Rotação da Palma\", ensinada somente àqueles do Ramo Principal do Clã Hyūga. Como parte dos requisitos deste jutsu, você deve estar se beneficiando da Postura do Punho Gentil. Isso cria uma cúpula de Chakra azul visível que repele todos os ataques que tentarem atingi-lo e empurra as criaturas que você escolher para longe, a uma distância de até 4,5 metros, em um raio centrado em você.\n\nAté o início do seu próximo turno, você e todas as criaturas aliadas que você selecionar dentro de um raio de 3 metros de você se beneficiam dos efeitos deste jutsu. Você e os aliados afetados ganham um bônus de +5 na CA; isso inclui o ataque desencadeante. Se algum de vocês estiver sujeito a um jutsu que exija um teste de resistência de Força, Destreza ou Constituição, vocês fazem o teste com vantagem.\n\nAs criaturas hostis que estiverem a até 3 metros de você quando você lançar este jutsu devem ter sucesso em um teste de resistência de Força contra sua CD de Resistência de Taijutsu, sofrendo 4d8 de dano de Força e sendo empurradas 3 metros para trás se falharem.",
  },
  {
    key: "hyuga-palma-da-parede-de-vacuo",
    nome: "Palma da Parede de Vácuo",
    tipo: "taijutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["MC", "M"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Taijutsu"],
    cla: "hyuga",
    descricao:
      "Você empurra ambas as palmas das mãos para frente, criando um vendaval extremamente poderoso de Chakra com o objetivo de interromper o fluxo de Chakra de seu oponente à distância. Você faz um ataque de taijutsu à distância contra uma criatura que você possa ver dentro do alcance. Em caso de acerto, você causa 10d4 de dano Contundente, e a criatura alvo deve fazer um teste de resistência de Constituição, tornando-se incapaz de moldar Chakra por 1d4 rodadas se falhar.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e o dano em 2d4.",
  },
  {
    key: "hyuga-sopro-de-um-corpo",
    nome: "Sopro de um Corpo",
    tipo: "taijutsu",
    rank: "C",
    tempoConjuracao:
      "1 Reação, que você tem quando é agarrado, restrito ou preso como resultado de um jutsu, característica de criatura hostil, traço ou ação",
    alcance: "Próprio",
    duracao: "Instantâneo",
    componentes: ["MC"],
    custoChakra: 6,
    palavrasChave: ["Hijutsu", "Ramo Secundário", "Taijutsu"],
    cla: "hyuga",
    descricao:
      "Você libera Chakra de cada ponto de Chakra do corpo, criando uma onda de choque que se origina de você, empurrando as criaturas ao seu redor para longe.\n\nPrimeiro, se você estiver sob o efeito de um jutsu, característica, traço ou ação que lhe permitiria fazer um teste de perícia ou um teste de resistência para encerrar qualquer uma das condições desencadeantes, você é automaticamente bem-sucedido nesse teste de perícia ou teste de resistência.\n\nPor fim, todas as criaturas à sua escolha em um raio de 3 metros de você devem fazer um teste de resistência de Força, ficando Prona se falharem e se tornando incapazes de moldar Chakra até o final de seu próximo turno.",
  },
  // Rank B
  {
    key: "hyuga-8-trigramas-espiral-palma-do-ceu",
    nome: "8-Trigramas Espiral Palma do Céu",
    tipo: "taijutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal",
    duracao: "Concentração, até 1 minuto",
    componentes: ["MC", "M"],
    custoChakra: 10,
    palavrasChave: ["Hijutsu", "Taijutsu"],
    cla: "hyuga",
    descricao:
      "Como parte dos requisitos deste jutsu, você deve estar se beneficiando da Postura do Punho Gentil e ter o Byakugan ativo.\n\nVocê respira uma única vez, afiando sua Postura do Punho Gentil, tornando cada golpe mais preciso e letal que o anterior, fazendo com que cada golpe atinja com precisão os órgãos internos de seus inimigos. Este jutsu não custa Chakra para se concentrar. Durante a duração, você ganha os seguintes benefícios:\n\n— O dano de Chakra que você causa como resultado de ataques de taijutsu desarmados e corpo a corpo ignora Redução de Dano.\n— Quando você faz um ataque desarmado que causa dano de Chakra, você causa uma quantidade igual de dano de Força ao alvo.\n— Cada ataque desarmado bem-sucedido que você fizer no mesmo turno, que cause dano de Chakra, aumenta o custo do próximo jutsu que a criatura afetada lançar em +2. Isso se acumula até 3 vezes por rodada.",
  },
  {
    key: "hyuga-8-trigramas-64-palmas-de-defesa",
    nome: "8-Trigramas 64 Palmas de Defesa",
    tipo: "taijutsu",
    rank: "B",
    tempoConjuracao: "1 Ação ou 1 Reação ao sofrer dano",
    alcance: "Próprio (1,5 metro)",
    duracao: "Instantâneo",
    componentes: ["MC", "M"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ramo Principal", "Taijutsu", "Confronto"],
    cla: "hyuga",
    descricao:
      "Criado por um Hyūga do Ramo Principal anos atrás, esta é uma variação de \"8-Trigramas 64 Palmas\". Como parte dos requisitos deste jutsu, você deve ter o Byakugan ativo e estar se beneficiando da Postura do Punho Gentil.\n\nComo uma ação, ao usar este jutsu, todas as criaturas de sua escolha em um raio de 1,5 metro centrado em você devem ter sucesso em um teste de resistência de Destreza, recebendo 8d8 de dano de Força e sendo empurradas 1,5 metro para trás se falharem. Até o início do seu próximo turno, você ganha um bônus de +3 na CA.\n\nComo uma reação ao sofrer dano: até o início de seu próximo turno, você ganha um bônus de +8 na CA contra o ataque desencadeante e todos os ataques subsequentes. Se essa reação desencadear um Confronto, adicione 1d6 ao seu teste de Confronto.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank B, aumente o custo desse jutsu em 3 e o dano em 2d8.",
  },
  {
    key: "hyuga-triturador-de-montanha",
    nome: "Triturador de Montanha",
    tipo: "taijutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (cone de 9 metros)",
    duracao: "Instantâneo",
    componentes: ["MC", "M"],
    custoChakra: 12,
    palavrasChave: ["Hijutsu", "Ramo Secundário", "Taijutsu", "Confronto"],
    cla: "hyuga",
    descricao:
      "Como parte dos requisitos deste jutsu, você deve ter o Byakugan ativo e estar se beneficiando da Postura do Punho Gentil. Uma versão avançada e ampliada da \"Palma da Parede de Vácuo\". Todas as criaturas no alcance devem fazer um teste de resistência de Constituição, recebendo 15d4 de dano de Força, sendo empurradas 1,5 metro para trás e caindo Prona, se falharem. Se forem bem-sucedidas, recebem metade do dano, sem efeitos adicionais.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank B, aumente o custo desse jutsu em 3 e o dano em 2d4.",
  },
  // Rank A
  {
    key: "hyuga-8-trigramas-128-palmas",
    nome: "8-Trigramas 128 Palmas",
    tipo: "taijutsu",
    rank: "A",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio (raio de 3 metros)",
    duracao: "Instantâneo",
    componentes: ["MC", "M"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Ramo Secundário", "Taijutsu", "Combo", "Finalizador"],
    cla: "hyuga",
    descricao:
      "Este é o resultado de anos de treinamento, tentando alcançar técnicas maiores do que o Ramo Principal normalmente permite. É o auge absoluto da técnica Punho Gentil Hyūga dentro do Ramo Secundário. Como parte dos requisitos deste jutsu, você deve ter o Byakugan ativo, estar se beneficiando da Postura do Punho Gentil e ter aprendido \"8-Trigramas 64 Palmas\".\n\nFaça um único ataque de taijutsu corpo a corpo, comparando o resultado com a CA de todas as criaturas de sua escolha em um raio de 3 metros de você, enquanto corre entre cada uma delas, golpeando mais rápido do que os olhos podem ver. Em caso de acerto, você causa 15d8 de dano de Chakra, além de metade desse dano de Chakra como dano de Força aos pontos de vida do alvo. Os alvos afetados também devem fazer um teste de resistência de Constituição, perdendo a capacidade de moldar Chakra e tendo sua velocidade de movimento reduzida pela metade por 5d4 rodadas, em uma falha. Se a criatura alvo tiver 0 de Chakra, você causa o dobro do resultado como dano de Força.\n\nAlém disso, ao gastar 10 de Chakra, você ganha uma ação adicional, que pode ser usada para lançar Golpe de Palma sem custo adicional, podendo ser lançado até o Rank S. Você não pode lançar o mesmo Golpe de Palma duas vezes em um único turno dessa maneira. Como alternativa, até o final do seu turno, você pode atingir uma criatura afetada com um Taijutsu do Clã Hyūga independentemente do alcance, uma vez por turno, usando uma ação, ação bônus ou reação, ignorando o tempo de conjuração listado.\n\nPor fim, se este jutsu for usado como finalizador, você causa dano adicional de 12d8 de Chakra a cada criatura afetada. Se for usado como finalizador, este jutsu perde a palavra-chave Combo e não aciona os bônus de finalização de outros jutsus.",
  },
  {
    key: "hyuga-palma-dos-leoes-gemeos",
    nome: "Palma dos Leões Gêmeos",
    tipo: "taijutsu",
    rank: "A",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["MC"],
    custoChakra: 15,
    palavrasChave: ["Hijutsu", "Ramo Principal", "Taijutsu", "Confronto"],
    cla: "hyuga",
    descricao:
      "A culminação final da pesquisa e do treinamento dos Ramos Principais. Você libera Chakra de suas mãos, revestindo-o e moldando-o em dois leões guardiões com uma presença visível, porém intimidadora. Durante a duração deste jutsu, você não gasta Chakra para mantê-lo.\n\nComo parte dos requisitos deste jutsu, você deve ter o Byakugan ativo e estar se beneficiando da Postura do Punho Gentil. Além disso, ataques desarmados usando a Postura do Punho Gentil e os Hijutsu do Clã Hyūga que fazem ataques de taijutsu corpo a corpo usam um dado de dano d10, os Hijutsu do Clã Hyūga têm seus custos reduzidos em 3, e o jutsu do Clã Hyūga causa um dado de dano extra em um acerto.\n\nComo uma ação bônus no seu turno, você pode fazer um ataque de taijutsu à distância contra uma criatura que você possa ver a até 9 metros de distância, disparando um dos leões de sua mão contra a mão como um míssil. Em um acerto, você causa 3d10 + seu modificador de Habilidade de Taijutsu em dano de Força.",
  },
];
