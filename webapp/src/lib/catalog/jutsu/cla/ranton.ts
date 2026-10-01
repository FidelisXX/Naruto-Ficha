import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Ranton — Estudos da Tsunade, cap. Ranton
 * ("Jutsu Do Clã Ranton"). Estilo Tempestade (Raiton/Suiton combinado) —
 * ataques elétricos em forma de raios/lasers. `natureza: "relampago"`
 * em toda entrada com dano direto; fica de fora nas 3 entradas que são
 * puros buffs/controle sem dano próprio (Descarga Secundária, Correntes
 * de Serpente, Relâmpago Negro). 14 Hijutsu no total — distribuição
 * 5/4/3/2 (D/C/B/A), não o usual 4/3/2/1, e sem Rank S.
 *
 * Nota de normalização: a fonte usa "dano de Relâmpago", "dano de Raio"
 * e "dano elétrico" de forma intercambiável para o mesmo tipo de dano —
 * normalizado para "Relâmpago" em todo o arquivo (consistente com o
 * enum `natureza: "relampago"`).
 *
 * Nota de inconsistência preservada (padrão já usado em vesper.ts): em
 * "Estilo Tempestade: Visão Laser", o campo Alcance diz "raio de 9
 * metros", mas o corpo do texto e o escalonamento descrevem um raio de
 * 4,5 metros (+1,5 metro por rank) — mantido como na fonte, sem
 * reconciliar os dois valores. Da mesma forma, em "Estilo Tempestade:
 * Dança Laser" (Rank B), o texto de escalonamento refere-se a "acima de
 * Rank C" em vez de "acima de Rank B" — também preservado verbatim.
 */
export const jutsuRanton: JutsuDefinition[] = [
  // Rank D
  {
    key: "ranton-estilo-tempestade-golpe-de-relampago",
    nome: "Estilo Tempestade: Golpe de Relâmpago",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "relampago",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Relâmpago"],
    cla: "ranton",
    descricao:
      "Você forma uma corrente de Água como um Relâmpago em sua mão, balançando-a contra uma criatura dentro do alcance. Faça um ataque de ninjutsu corpo a corpo, causando 4d6 de dano de Relâmpago em um acerto. Uma criatura que sofrer dano deste jutsu deve ter sucesso em um teste de resistência de Constituição, ganhando a condição Chocado se falhar.\n\nSe você obtiver um acerto crítico com este jutsu, a criatura é agarrada pelo Relâmpago. Uma criatura agarrada desta forma é simplesmente agarrada no lugar, como se tivesse sido agarrada por você. A criatura permanece agarrada até o final de seu próximo turno.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dano em 2d6.",
  },
  {
    key: "ranton-estilo-tempestade-descarga-secundaria",
    nome: "Estilo Tempestade: Descarga Secundária",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Reação, que você usa quando lança um jutsu que causa dano de Relâmpago",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 0,
    custoChakraTexto: "Especial (igual ao custo do jutsu de ativação)",
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Relâmpago"],
    cla: "ranton",
    descricao:
      "Você fortalece o jutsu de ativação, despejando mais chakra de Relâmpago nele. O custo deste jutsu se torna igual ao custo do jutsu de ativação, e o jutsu de ativação ganha um dos seguintes efeitos, à sua escolha:\n\n— Ganhe um bônus de +2 na primeira jogada de ataque do jutsu de ativação. Se este ataque superar a CA de uma criatura em 5 ou mais, você pode fazer um segundo ataque, com o mesmo bônus, mirando em uma segunda criatura dentro do alcance do jutsu de ativação.\n— Ganhe um bônus de +1 na CD de Resistência do jutsu de ativação. Se uma criatura falhar no teste de resistência do jutsu de ativação em 5 ou mais, ela ganha 1 grau de Chocado, e você pode selecionar uma criatura adicional a até 18 metros de você, forçando-a a fazer o teste de resistência do jutsu de ativação como se estivesse em seu alcance ou alvo original.",
  },
  {
    key: "ranton-estilo-tempestade-feixe-de-laser",
    nome: "Estilo Tempestade: Feixe de Laser",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "relampago",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (linha de 18 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Relâmpago", "Estilo Laser"],
    cla: "ranton",
    descricao:
      "Você conjura um feixe de Relâmpago e Água que se curva em torno dos cantos e perfura seus alvos com eficiência letal. Todas as criaturas em uma linha de 18 metros devem ter sucesso em um teste de resistência de Destreza, sofrendo 3d6 de dano de Relâmpago em uma falha, ou metade do dano em um sucesso. Se uma criatura dentro do alcance tiver a condição Chocado, este jutsu dobra-se e se desloca, ignorando sua forma e direção normal, para em vez disso se enrolar e se mover até atingir a criatura chocada. Este jutsu pode atingir até duas criaturas chocadas desta forma.\n\nUma criatura chocada faz seu teste de resistência de Destreza com uma penalidade de 1d4.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dano em 2d6.",
  },
  {
    key: "ranton-estilo-tempestade-onda-de-nuvem-de-trovao-interior",
    nome: "Estilo Tempestade: Onda de Nuvem de Trovão Interior",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "relampago",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (9 metros)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Relâmpago", "Estilo Tempestade"],
    cla: "ranton",
    descricao:
      "Você conjura um anel espesso de nuvens de trovoada ao seu redor. Durante esse período, uma vez por turno, como uma ação ou ação bônus, você pode disparar um raio de si mesmo para um espaço que consiga ver em um raio de 9 metros de você.\n\nTodas as criaturas em um raio de 1,5 metro do espaço escolhido devem fazer um teste de resistência de Destreza, sofrendo 2d8 de dano de Relâmpago e ganhando 1 grau da condição Chocado.\n\nAlternativamente, uma vez por rodada, como reação no turno de outra criatura, você pode disparar uma descarga defensiva de relâmpago em direção a uma única criatura. Faça um ataque de ninjutsu à distância contra uma criatura em um raio de 9 metros de você. Em caso de acerto, causa 3d8 de dano de Relâmpago e a velocidade do alvo é reduzida a 0 até o final do turno atual.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dano em 2d8.",
  },
  {
    key: "ranton-estilo-tempestade-choque-da-tempestade",
    nome: "Estilo Tempestade: Choque da Tempestade",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "relampago",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio (cubo de 6 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Relâmpago"],
    cla: "ranton",
    descricao:
      "Uma versão avançada do jutsu Estilo Relâmpago: Raio. Você forma uma grande bola de Chakra de Relâmpago e Chakra de Estilo Água, descarregando-a em uma onda de choque que usa as propriedades da Água para poupar seus aliados.\n\nCada criatura à sua escolha dentro de um cubo de 6 metros originado em você deve fazer um teste de resistência de Constituição, sofrendo 4d6 de dano de Relâmpago e ficando Chocada se falhar, ou metade do dano e nenhum efeito adicional em um sucesso.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3, o dano em 1d6 e o tamanho do cubo em 1,5 metro.",
  },
  // Rank C
  {
    key: "ranton-estilo-tempestade-visao-laser",
    nome: "Estilo Tempestade: Visão Laser",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "relampago",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio (raio de 9 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Relâmpago"],
    cla: "ranton",
    descricao:
      "Você dispara raios de chakra de tempestade em cada criatura dentro de um raio de 4,5 metros centrado em você. Este raio se estende por cantos, e você não precisa ver as criaturas para afetá-las. Ao lançar este jutsu, você pode designar qualquer número de criaturas para não serem afetadas por ele. As criaturas restantes dentro do alcance sofrem 4d8 de dano de Relâmpago e devem fazer um teste de resistência de Constituição, ficando Chocadas em caso de falha.\n\nCriaturas já chocadas fazem esse teste de resistência com uma penalidade de 1d4.",
    emNiveisSuperiores:
      "Para cada rank em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3, o dano em 2d8 e o raio em 1,5 metro.",
  },
  {
    key: "ranton-estilo-tempestade-relampago",
    nome: "Estilo Tempestade: Relâmpago",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "relampago",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros (cubo de 7,5 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Relâmpago", "Estilo Tempestade"],
    cla: "ranton",
    descricao:
      "Você lança uma bolha de Relâmpago em um ponto que consiga ver dentro do alcance. A bolha explode, enchendo um cubo de 7,5 metros. As criaturas que se encontrem dentro da área devem fazer um teste de resistência de Destreza, sofrendo 3d8 de dano de Relâmpago e ficando Chocadas se falharem, ou metade do dano e nenhum efeito adicional em um sucesso.\n\nAs criaturas já chocadas aumentam o dado de dano em 1 passo (d8>d10>d12).",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e o dano em 2d8.",
  },
  {
    key: "ranton-estilo-tempestade-correntes-de-serpente",
    nome: "Estilo Tempestade: Correntes de Serpente",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Relâmpago"],
    cla: "ranton",
    descricao:
      "Selecione uma criatura alvo que você possa ver dentro do alcance enquanto cobras feitas de Água e Relâmpago disparam em direção ao alvo, tentando prendê-lo. A criatura alvo deve fazer um teste de resistência de Destreza. Se falhar, fica Imobilizada e Chocada pela duração, incapaz de fazer Selos de Mão.\n\nAlém disso, se o alvo estiver sobre um corpo de água quando este jutsu for lançado, ele faz seu teste de resistência com uma penalidade de 1d4.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e você pode escolher uma criatura adicional para atingir com este jutsu.",
  },
  {
    key: "ranton-estilo-tempestade-feixe-triplo",
    nome: "Estilo Tempestade: Feixe Triplo",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "relampago",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (cone de 9 metros)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Relâmpago", "Estilo Laser"],
    cla: "ranton",
    descricao:
      "Você forma seu Chakra de tempestade em uma pequena esfera à sua frente, que então dispara em um cone de 9 metros originado de você. Cada criatura ao alcance deve fazer um teste de resistência de Destreza, sofrendo 4d10 de dano de Relâmpago se falhar. O Chakra então se transforma em uma bola à sua frente. Durante a duração deste jutsu, você pode usar uma ação em cada turno subsequente para disparar essa onda novamente em qualquer direção, sempre em um cone de 9 metros, originado de você.\n\nUma criatura já chocada sofre 1d10 de dano de Relâmpago adicional.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e o dano em 2d10.",
  },
  // Rank B
  {
    key: "ranton-estilo-tempestade-relampago-negro",
    nome: "Estilo Tempestade: Relâmpago Negro",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 14,
    custoChakraTexto: "Especial (14 Chakra)",
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Relâmpago"],
    cla: "ranton",
    descricao:
      "Você começa a liberar uma onda de Chakra do seu corpo, elevando seu Estilo Tempestade a novas alturas. Seu Chakra de Estilo Relâmpago começa a ficar preto, ou mais escuro em tom e cor. Esse relâmpago surge ao seu redor e começa a se solidificar ao seu redor como uma aura de eletricidade negra.\n\nNão é necessário gastar Chakra para manter a concentração neste jutsu.\n\nDurante este período, os jutsus que você lançar com a palavra-chave Relâmpago, ou que causariam dano de Relâmpago, passam a ter a mesma cor de sua eletricidade escurecida. Aumente o custo de todos esses jutsus em 3. Quando fizer isso, esses jutsus lançados e os ataques que você fizer ganham o seguinte:\n\n— +1 de bônus em sua CD de Resistência.\n— 2d6 de bônus em seu dano, duas vezes por conjuração; se o alvo estiver Chocado, o bônus passa a ser 2d8.\n\nFinalmente, para criaturas que estejam em um raio de 9 metros de você e que estejam Chocadas, você pode escolher remover 1 grau da condição Chocado para sobrecarregar um jutsu com a palavra-chave Estilo Relâmpago sem gastar o custo de ação.",
  },
  {
    key: "ranton-estilo-tempestade-danca-laser",
    nome: "Estilo Tempestade: Dança Laser",
    tipo: "ninjutsu",
    rank: "B",
    natureza: "relampago",
    tempoConjuracao: "1 Ação",
    alcance: "27 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Relâmpago", "Estilo Laser"],
    cla: "ranton",
    descricao:
      "Você forma seu Chakra de tempestade em uma grande esfera e a envia para um ponto que você possa ver dentro do alcance. Como parte do lançamento deste jutsu, e como uma ação em cada um dos seus turnos seguintes, você pode disparar até três raios de relâmpago, fazendo até 3 ataques de ninjutsu à distância contra criaturas dentro de um raio de 9 metros da esfera. Você pode direcionar esses raios para um único alvo ou para vários, até o número de raios que disparar. Em caso de acerto, causa 3d6 de dano de Relâmpago.\n\nSe você atingir a mesma criatura com pelo menos dois feixes, ela deve ter sucesso em um teste de Constituição, ficando Incapacitada até o final de seu próximo turno se falhar, ao sobrecarregar seu corpo com Chakra da Tempestade sobrealimentado.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e o número de ataques em 1.",
  },
  {
    key: "ranton-estilo-tempestade-onda-de-tempestade",
    nome: "Estilo Tempestade: Onda de Tempestade",
    tipo: "ninjutsu",
    rank: "B",
    natureza: "relampago",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (cone de 18 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 13,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Relâmpago", "Estilo Tempestade"],
    cla: "ranton",
    descricao:
      "Você conjura e dispara um cone de 18 metros à sua frente. Todas as criaturas no cone devem fazer um teste de resistência de Destreza, sofrendo 8d8 de dano de Relâmpago e ganhando 2 graus de Chocado se falharem, ou metade do dano e 1 grau de Chocado até o final do próximo turno da criatura afetada se forem bem-sucedidas.",
  },
  // Rank A
  {
    key: "ranton-estilo-tempestade-circuito-laser",
    nome: "Estilo Tempestade: Circuito Laser",
    tipo: "ninjutsu",
    rank: "A",
    natureza: "relampago",
    tempoConjuracao: "1 Ação",
    alcance: "36 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Relâmpago", "Estilo Laser"],
    cla: "ranton",
    descricao:
      "Você dispara uma quantidade absurda de raios em direção a até 10 alvos à sua escolha. Você faz um ataque de ninjutsu por criatura, contra os alvos selecionados dentro do alcance. Você pode direcionar qualquer número desses raios para um único alvo ou para vários, até o número de feixes que disparar. Em caso de acerto, causa 1d12 por raio, mais seu modificador de Habilidade de Ninjutsu. Esses feixes ignoram cobertura.",
  },
  {
    key: "ranton-estilo-tempestade-onda-furiosa",
    nome: "Estilo Tempestade: Onda Furiosa",
    tipo: "ninjutsu",
    rank: "A",
    natureza: "relampago",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio (raio de 9 metros)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Relâmpago", "Estilo Tempestade"],
    cla: "ranton",
    descricao:
      "Uma versão avançada do Estilo Água: você expulsa uma enorme quantidade de água de sua boca, simultaneamente carregando-a com relâmpago, e a faz girar em um raio de 9 metros ao seu redor. Até que o jutsu termine, essa área é terreno difícil para qualquer criatura exceto você, e qualquer criatura que comece seu turno ali, ou que se mova para lá pela primeira vez em seu turno, deve ter sucesso em um teste de resistência de Força.\n\nSe o teste falhar, a criatura sofre 7d10 de dano de Relâmpago e é empurrada 4,5 metros para longe do centro da área. Se o teste for bem-sucedido, a criatura sofre metade do dano e é empurrada apenas 1,5 metro para longe.\n\nAlém disso, uma criatura que comece seu turno na área, ou que se desloque para lá pela primeira vez em seu turno, também deve ter sucesso em um teste de resistência de Constituição, ganhando 3 graus de Eletrocutado e 1 grau de Enfraquecido se o teste falhar.",
  },
];
