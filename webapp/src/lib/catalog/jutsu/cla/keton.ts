import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Keton — Estudos da Tsunade, cap. Keton ("Jutsu
 * Do Clã Keton"). Toda a família "Estilo Plasma" (neon, híbrido de Fogo e
 * Relâmpago) — todas as entradas carregam as palavras-chave "Estilo Fogo,
 * Estilo Raio" no livro independentemente do dano mecânico específico, mas
 * aqui `natureza` segue o dano realmente causado por cada jutsu (deixado
 * de fora quando o jutsu não causa dano de um elemento fixo). O livro não
 * traz um Hijutsu de Rank S para este clã.
 */
export const jutsuKeton: JutsuDefinition[] = [
  // Rank D
  {
    key: "keton-estilo-plasma-marcador-neon",
    nome: "Estilo Plasma: Marcador Neon",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "relampago",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo", "Estilo Raio"],
    cla: "keton",
    descricao:
      "Você cobre sua mão com relâmpagos neon, iluminando a área ao seu redor, antes de golpear rapidamente uma criatura ao alcance. Faça um ataque de ninjutsu corpo a corpo contra uma criatura ao alcance. Se acertar, o alvo sofre 3d6+3 de dano de relâmpago e emite luz brilhante em um raio de 6 metros e luz fraca por mais 6 metros durante 1d4 rodadas. A luz pode ser colorida como você desejar.",
    emNiveisSuperiores:
      "Para cada rank que você lançar este jutsu acima de Rank D, aumente o custo deste jutsu em 3, o dano em 2d6+2 e o dado que determina o número de rodadas que o alvo é iluminado aumenta em um nível (1d4 > 1d6 > 1d8 > 1d10 > 1d12).",
  },
  {
    key: "keton-estilo-plasma-raio-de-plasma",
    nome: "Estilo Plasma: Raio de Plasma",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "fogo",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo", "Estilo Raio"],
    cla: "keton",
    descricao:
      "Você cria e dispara um feixe de plasma da ponta do seu dedo, perfurando e cauterizando o que atravessa. Faça um ataque de ninjutsu à distância contra uma criatura ao alcance, causando 2d8+2 de dano de fogo em um acerto.",
    emNiveisSuperiores:
      "Para cada rank que você lançar este jutsu acima de Rank D, aumente o custo deste jutsu em 3, o dano em 1d8+2 e você pode fazer um ataque adicional contra outra criatura ao alcance.",
  },
  {
    key: "keton-estilo-plasma-engolir-plasma",
    nome: "Estilo Plasma: Engolir Plasma",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Toque",
    duracao: "1 minuto",
    componentes: ["SM", "MC", "A (Qualquer)"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo", "Estilo Raio"],
    cla: "keton",
    descricao:
      "Uma técnica de fluxo de chakra onde o usuário flui plasma através de sua arma, enviando arcos contínuos de plasma pela lâmina.\n\nDurante a duração deste jutsu, sua arma causa um dano adicional de 1d8 de fogo ou relâmpago (sua escolha) em um acerto, duas vezes por turno. Enquanto este jutsu estiver ativo, você ignora o componente SM para seus Hijutsu do Keton e é considerado uma fonte de luz brilhante em um raio de 9 metros. Quando você acerta um golpe com sua arma, pode gastar até seus Dados de Energia restantes, adicionando-os ao dano causado e produzindo 3 metros de luz brilhante por dado gasto no espaço afetado até o início do seu próximo turno.",
    emNiveisSuperiores:
      "Para cada rank que você lançar este jutsu acima de Rank D, aumente o custo deste jutsu em 3. Se este jutsu for lançado em Rank B, aumente o dano em 1d8. Se este jutsu for lançado em Rank S, aumente o dado de dano em 1d8.",
  },
  {
    key: "keton-estilo-plasma-luz-neon",
    nome: "Estilo Plasma: Luz Neon",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "fogo",
    tempoConjuracao: "1 Reação, que você toma quando é alvo de um ataque",
    alcance: "Pessoal (raio de 3 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo", "Estilo Raio"],
    cla: "keton",
    descricao:
      "Quando você for alvo de um ataque ou jutsu, você libera uma onda de luz brilhante para desorientar seu oponente. Todas as criaturas dentro de 3 metros de você devem fazer um teste de resistência de Destreza. Em uma falha, as criaturas sofrem 2d8+2 de dano de fogo e ficam Cegas até o início do seu próximo turno. Em um sucesso, as criaturas sofrem metade do dano e não sofrem efeitos adicionais. Contra todas as criaturas que não estão cegas, você trata sua CA como +3 maior até o início do seu próximo turno.",
  },
  // Rank C
  {
    key: "keton-estilo-plasma-explosao-de-esferas-de-fogos-de-artificio",
    nome: "Estilo Plasma: Explosão de Esferas de Fogos de Artifício",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "fogo",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo", "Estilo Raio"],
    cla: "keton",
    descricao:
      "Você convoca duas esferas de plasma e as lança em diferentes locais, produzindo uma série de explosões brilhantes. Cada criatura em uma esfera de 3 metros de raio centrada em cada ponto escolhido deve fazer um teste de resistência de Destreza, sofrendo 3d6+3 de dano de fogo em uma falha, ou metade desse dano em um sucesso. Uma criatura na área de mais de uma explosão é afetada no máximo duas vezes.",
    emNiveisSuperiores:
      "Para cada rank que você lançar este jutsu acima de Rank C, aumente o custo deste jutsu em 3, o dano em 1d6+1 e a quantidade de explosões em +2.",
  },
  {
    key: "keton-estilo-plasma-nova",
    nome: "Estilo Plasma: Nova",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "relampago",
    tempoConjuracao: "1 Ação",
    alcance: "27 metros (esfera de 9 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo", "Estilo Raio"],
    cla: "keton",
    descricao:
      "Você cria uma esfera de chakra de plasma em suas mãos antes de lançá-la a um ponto dentro do alcance. Esta esfera então explode em uma explosão de plasma. Todas as criaturas dentro de 9 metros do local alvo devem fazer um teste de resistência de Destreza, sofrendo 4d10+4 de dano de relâmpago e ganhando 1 classificação de Atordoado ou Queimado (escolha do conjurador) em uma falha, ou metade do dano e sem efeitos em um sucesso.\n\nApós a explosão, o centro da explosão se torna uma fonte de luz brilhante em um raio de 9 metros e luz fraca por mais 9 metros durante 1 minuto. A luz pode ser colorida como você desejar.",
    emNiveisSuperiores:
      "Para cada rank que você lançar este jutsu acima de Rank C, aumente o custo deste jutsu em 3 e o dano em 2d10. Se este jutsu for lançado em Rank A ou superior, criaturas que falharem no teste de resistência são afetadas por ambas as condições.",
  },
  {
    key: "keton-estilo-plasma-explosao-caotica-projetada",
    nome: "Estilo Plasma: Explosão Caótica Projetada",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "fogo",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal (cone de 13,5 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo", "Estilo Raio"],
    cla: "keton",
    descricao:
      "Você cria uma esfera de plasma e projeta sua energia para frente, causando uma série de explosões coloridas. Cada criatura em um cone de 13,5 metros deve fazer um teste de resistência de Destreza, sofrendo 5d10+5 de dano de fogo em uma falha, ou metade desse dano em um sucesso. Após a explosão, toda a área do jutsu brilha com uma luz fraca por 6 metros durante 1 minuto. A luz pode ser colorida como você desejar.",
    emNiveisSuperiores:
      "Para cada rank que você lançar este jutsu acima de Rank C, aumente o custo deste jutsu em 3 e o dano em 1d10+1, e o alcance em 1,5 metro.",
  },
  // Rank B
  {
    key: "keton-estilo-plasma-passo-neon",
    nome: "Estilo Plasma: Passo Neon",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Pessoal",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 12,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo", "Estilo Raio"],
    cla: "keton",
    descricao:
      "Você transforma seu corpo inteiro em neon. Sua velocidade de movimento é duplicada, ataques à distância têm desvantagem para te acertar, e você pode usar sua reação para se teletransportar para uma fonte de luz brilhante, desde que essa fonte esteja a uma distância igual ou menor que sua velocidade de movimento. Fazer isso encerra este jutsu e a fonte de luz se dissipa.",
    emNiveisSuperiores:
      "Para cada rank que você lançar este jutsu acima de Rank B, aumente o custo em 3. Se este jutsu for lançado em Rank A ou superior, usar a reação especial concedida por este jutsu não encerra automaticamente o jutsu na primeira vez que você usar essa reação por conjuração. Se este jutsu for lançado em Rank S, sua velocidade de movimento é triplicada.",
  },
  {
    key: "keton-estilo-plasma-caos-em-ascensao",
    nome: "Estilo Plasma: Caos em Ascensão",
    tipo: "ninjutsu",
    rank: "B",
    natureza: "fogo",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo", "Estilo Raio"],
    cla: "keton",
    descricao:
      "Este jutsu não pode causar um golpe crítico. Você envia chakra de plasma para seus membros e prepara um ataque contra um alvo. Faça 3 ataques de ninjutsu corpo a corpo em uma criatura alvo, causando 3d8+3 de dano de fogo e lançando-a 3 metros para o alto em cada golpe (você se eleva junto com a criatura). Se você acertar 2 ou mais ataques, a criatura se torna Atordoada até o final do seu próximo turno. Se você acertar todos os 3 ataques, a criatura se torna Queimada pela mesma duração.",
    emNiveisSuperiores:
      "Para cada rank que você lançar este jutsu acima de Rank B, aumente o custo deste jutsu em 3. Se lançado em Rank S, aumente o dano em 1d8+1.",
  },
  // Rank A
  {
    key: "keton-estilo-plasma-onda-de-destruicao-do-caos",
    nome: "Estilo Plasma: Onda de Destruição do Caos",
    tipo: "ninjutsu",
    rank: "A",
    natureza: "relampago",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal (linha de 36 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo", "Estilo Raio"],
    cla: "keton",
    descricao:
      "Você une ambas as mãos, carregando uma esfera de plasma em crescimento antes de finalmente liberá-la em uma linha de destruição de 36 metros de comprimento e 3 metros de largura. Todas as criaturas dentro do alcance devem fazer um teste de resistência de Destreza, sofrendo 9d10+9 de dano de relâmpago em uma falha, ou metade em um sucesso. Uma criatura com a condição Queimado faz esse teste com desvantagem.\n\nAs criaturas que falharem no teste de resistência de Destreza devem fazer um teste de resistência de Constituição com desvantagem, tornando-se Queimadas e Atordoadas até o final do seu próximo turno em caso de falha.",
    emNiveisSuperiores:
      "Para cada rank que você lançar este jutsu acima de Rank A, aumente o custo deste jutsu em 3 e o dano em 3d10+3.",
  },
];
