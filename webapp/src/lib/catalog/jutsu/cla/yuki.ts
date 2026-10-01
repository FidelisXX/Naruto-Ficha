import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Yuki — Estudos da Tsunade, cap. Yuki ("Jutsu Do
 * Clã Yuki"). "Estilo Gelo" (híbrido de Água e Vento, estilo Haku). Dano
 * de Frio não tem correspondente em JutsuNatureza (gelo ≠ água
 * mecanicamente), então `natureza` fica de fora em todas as entradas. O
 * livro não traz um Hijutsu de Rank S para este clã.
 */
export const jutsuYuki: JutsuDefinition[] = [
  // Rank D
  {
    key: "yuki-adagas-de-gelo",
    nome: "Adagas de Gelo",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Vento"],
    cla: "yuki",
    descricao:
      "Você coleta partículas de água do próprio ar e as congela em adagas feitas de gelo, antes de lançá-las em uma criatura alvo. Faça um ataque de ninjutsu de longo alcance, causando 4d4 de dano de Frio. Além disso, todas as criaturas (exceto você) em um raio de 3 metros do alvo devem fazer um teste de resistência de Destreza, sofrendo 2d8 de dano Perfurante se falharem, ou metade em caso de sucesso, pois os estilhaços da adaga de gelo disparam em todas as direções.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dano em 2d4 e 2d8.",
  },
  {
    key: "yuki-prisao-de-gelo",
    nome: "Prisão de Gelo",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Concentração, até 10 minutos",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Vento"],
    cla: "yuki",
    descricao:
      "Você libera um fluxo de cristais de gelo irregulares antes que eles explodam em uma névoa e se solidificam sobre uma criatura, congelando-a no lugar. Selecione uma criatura alvo no alcance. A criatura alvo faz um teste de resistência de Destreza; se falhar, fica Atordoada, ganha 1 grau de Congelado pelo próximo minuto e é envolta em gelo.\n\nUma criatura afetada, enquanto estiver dentro do gelo, fica Surda. O gelo que envolve a criatura tem CA igual à sua CD de resistência de Ninjutsu e 10 pontos de vida antes de se despedaçar; qualquer dano excedente é causado à criatura alvo. A criatura alvo, em seu turno, faz um teste de Força (Atletismo) para sair do gelo no final do turno.",
  },
  {
    key: "yuki-cupula-de-gelo",
    nome: "Cúpula de Gelo",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Reação, quando você recebe dano",
    alcance: "Próprio (raio de 1,5 metro)",
    duracao: "1 rodada",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Vento"],
    cla: "yuki",
    descricao:
      "Você materializa rapidamente uma cúpula de gelo, protegendo a si mesmo e as criaturas em um raio de 1,5 metro de você. A cúpula de gelo intercepta todos os ataques até o início de seu próximo turno, absorvendo o dano até se despedaçar. Qualquer dano excedente é transferido para você. A cúpula tem CA igual à sua CD de resistência de Ninjutsu e 25 pontos de vida.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e os pontos de vida da cúpula em 10.",
  },
  {
    key: "yuki-agulha-de-gelo",
    nome: "Agulha de Gelo",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Bukijutsu", "Estilo Água", "Estilo Vento"],
    cla: "yuki",
    descricao:
      "Você conjura água na forma de uma espada fina em sua mão livre. Você não gasta Chakra para manter a concentração neste jutsu. A lâmina tem 1,5 metro de comprimento e o cabo tem 1 metro de comprimento; o design da lâmina pode ser o que você decidir. Se você soltar a lâmina, ela se dispersa na água novamente. Você pode usar sua ação para fazer um ataque corpo a corpo de Ninjutsu ou Taijutsu com a espada de gelo. Em caso de acerto, o alvo recebe 2d10 + seu modificador de Habilidade de Ninjutsu de dano de Frio.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3. Se esse jutsu for lançado no Rank C, aumente o dano em 1d10. Se esse jutsu for lançado no Rank B, aumente o número de ataques que você pode fazer com essa arma para dois. Se esse jutsu for lançado no Rank S, aumente o número de ataques que você pode fazer com essa arma para três.",
  },
  // Rank C
  {
    key: "yuki-lancas-de-gelo-de-morte-certa",
    nome: "Lanças de Gelo de Morte Certa",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (esfera com raio de 3 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Vento"],
    cla: "yuki",
    descricao:
      "Você bate com as palmas das mãos no chão, congelando instantaneamente o ar ao seu redor e criando lanças de gelo que empalam tudo ao seu redor, tornando a área em que este jutsu foi lançado em terreno difícil. As criaturas nesse raio, com exceção de você, devem fazer um teste de resistência, sofrendo 3d10 de dano de Frio ou metade desse dano em caso de sucesso.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e o dano em 2d10.",
  },
  {
    key: "yuki-campo-de-captura-congelado",
    nome: "Campo de Captura Congelado",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio (cubo de 9 metros)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Vento"],
    cla: "yuki",
    descricao:
      "O solo irrompe a partir de você, cobrindo um cubo de 9 metros no chão e congelando os pés das criaturas ao alcance. As criaturas ao alcance devem fazer um teste de resistência de Destreza, ficando Restritas e ganhando 1 grau de Frio se falharem. As criaturas capturadas por esse jutsu podem fazer um teste de resistência de Força como uma ação em seu turno para escapar. As criaturas que entrarem na área deste jutsu devem fazer um teste de Acrobacia para evitar cair de bruços na superfície escorregadia do gelo. O gelo permanece até derreter ou até passar 1 hora.",
  },
  {
    key: "yuki-dez-mil-petalas-de-gelo",
    nome: "Dez Mil Pétalas de Gelo",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Vento"],
    cla: "yuki",
    descricao:
      "Você congela a água e o ar à sua frente enquanto os lança para frente, criando um ataque inumerável de adagas de gelo que rasgam tudo em uma linha de 18 metros de comprimento e 3 metros de largura. As criaturas na linha devem fazer um teste de resistência de Destreza, sofrendo 4d8 de dano de Frio em caso de falha, ou metade desse valor em caso de sucesso. Esse jutsu causa o dobro de dano a estruturas e objetos em seu caminho.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e o dano em 2d8.",
  },
  // Rank B
  {
    key: "yuki-redemoinho-dos-dragoes-gemeos",
    nome: "Redemoinho dos Dragões Gêmeos",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal (esfera de raio de 6 metros)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 12,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Vento"],
    cla: "yuki",
    descricao:
      "Você congela o ar ao seu redor e o faz girar, criando uma tempestade de gelo localizada. Durante a duração, você não pode ser alvo de ataques à distância ou efeitos que exijam linha de visão. Criaturas que entrarem no raio do seu redemoinho devem fazer um teste de resistência de Constituição; em uma falha, ganham 2 graus de Resfriado.\n\nAlém disso, criaturas dentro do raio deste jutsu que falharem no teste de resistência ficam Cegas pelos ventos fortes e fragmentos de gelo cortando seus olhos durante a duração, ou até saírem do raio.",
  },
  {
    key: "yuki-dragao-dilacerante-tigre-feroz",
    nome: "Dragão Dilacerante, Tigre Feroz",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "27 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Vento"],
    cla: "yuki",
    descricao:
      "Você conjura um grande tigre ou dragão feito de neve ou gelo. Ao lançar esse jutsu, escolha qual criatura você invoca, o que determina como o jutsu funciona, seu alcance e seu raio de efeito.\n\nTigre: o Tigre se forma e começa a correr em direção a um alvo. Se houver algum jutsu de Água entre você e a criatura alvo, ele congela imediatamente, encerrando o jutsu. As criaturas submersas na água, ou que estejam recebendo os benefícios de um jutsu de Estilo Água com alcance Próprio ou Toque, devem fazer um teste de resistência de Destreza, ganhando 2 graus de Resfriado se falharem. Ao atingir o alvo, o Tigre de Gelo explode, disparando fragmentos de gelo em um raio de 9 metros centrado no alvo. Todas as criaturas no raio devem fazer um teste de resistência, sofrendo 12d4 de dano de Frio e ganhando 1 grau de Congelamento se falharem, ou metade do dano e nenhum efeito adicional se forem bem-sucedidas.\n\nDragão: o Dragão se forma e começa a correr em direção a uma criatura alvo. Se houver qualquer jutsu de Água entre você e a criatura alvo, ele congela imediatamente, encerrando o jutsu. As criaturas submersas na água, ou que estejam recebendo os benefícios de um jutsu de Estilo Água com alcance Próprio ou Toque, devem fazer um teste de resistência de Destreza, ganhando 2 graus de Resfriado se falharem. Ao atingir o alvo, o dragão se choca contra a criatura alvo. As criaturas em uma linha de 27 metros de comprimento e 3 metros de largura, com origem em você, devem fazer um teste de resistência, sofrendo 8d6 de dano de Frio, ganhando 1 grau de Frio e sendo empurradas 3 metros para trás se falharem, ou metade do dano e nenhum outro efeito se forem bem-sucedidas.",
  },
  // Rank A
  {
    key: "yuki-espelhos-de-gelo-demoniacos",
    nome: "Espelhos de Gelo Demoníacos",
    tipo: "ninjutsu",
    rank: "A",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (esfera com raio de 6 metros)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água", "Estilo Vento"],
    cla: "yuki",
    descricao:
      "Você cria um domo de espelhos de gelo reflexivos, aprimorados por Chakra. Este domo abrange um raio de 6 metros, e os espelhos aprimorados forram a borda do domo. Cada espelho tem 1,2 metro de largura e 1,8 metro de altura. Ao manifestar, você cria espelhos suficientes para ocupar o raio externo da esfera, deixando cerca de 0,6 metro de espaço entre cada espelho.\n\nVocê se funde dentro de um dos espelhos de gelo e ganha a capacidade de se teleportar para qualquer outro espelho de gelo dentro do raio deste jutsu, gastando 1,5 metro de movimento.\n\nEnquanto estiver dentro de seus Espelhos de Gelo Demoníacos, você é quase imperceptível, pois seus espelhos de gelo fazem duplicatas perfeitas de você refletidas em sua superfície — as criaturas não têm conhecimento da sua localização. Cada vez que você faz um ataque ou usa seu movimento para se teleportar, cada criatura dentro do domo pode fazer uma verificação de Percepção com desvantagem contra sua CD de resistência de Ninjutsu para descobrir sua localização. Criaturas com Visão de Chakra fazem essa verificação com vantagem.\n\nAlém disso, enquanto estiver dentro de seus Espelhos de Gelo Demoníacos, você ganha um bônus de +5 na CA e tem vantagem em testes de resistência de Destreza, além de acessar as seguintes ações especiais:\n\nAgulhas de Gelo Reflexivas: como uma ação, faça três ataques à distância, visando todas as criaturas dentro do raio dos Espelhos de Gelo Demoníacos, causando 4d8 de dano de Frio.\n\nDispersão de Gelo Reflexivo: como uma reação a criaturas que tentam se mover mais de 3 metros enquanto estão dentro do raio dos espelhos, você faz dois ataques de ninjutsu corpo a corpo ou à distância, causando 4d6 de dano de Frio ao alvo e reduzindo sua velocidade de movimento a 0.\n\nA primeira vez que você usar essa reação por rodada, você ganha duas reações adicionais até o início do seu próximo turno (tomar Ações de Elite não remove essas reações antes do tempo). Essas reações só podem ser usadas para realizar essa reação especial novamente.\n\nCriaturas dentro do raio do seu jutsu podem se mover livremente por toda a extensão dele. Uma criatura que deseje sair do raio pode fazer um teste de Destreza, tentando se espremer através do espelho.",
  },
];
