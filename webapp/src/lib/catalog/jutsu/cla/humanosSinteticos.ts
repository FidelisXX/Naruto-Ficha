import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã dos Humanos Sintéticos — Estudos da Tsunade,
 * cap. Humanos Sintéticos ("Jutsu dos Humanos Sintéticos"). Tema de
 * cobras (criaturas sintéticas estilo Orochimaru). `natureza` fica de fora
 * em todas as entradas: a maioria não tem dano elemental fixo, e as duas
 * "Liberação da Natureza" (Cobra da Natureza, Grande Ataque da Cobra) têm
 * o elemento escolhido pelo jogador (mesmo tratamento dado ao "Sangue de
 * Dragão" do Clã Ryu). Este clã tem 2 (não 1) Hijutsu de Rank A e nenhum
 * de Rank S.
 */
export const jutsuHumanosSinteticos: JutsuDefinition[] = [
  // Rank D
  {
    key: "humanos-sinteticos-maos-de-cobra-das-sombras-ocultas",
    nome: "Mãos de Cobra das Sombras Ocultas",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Pessoal",
    duracao: "1 minuto",
    componentes: ["MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "humanos-sinteticos",
    descricao:
      "Durante a duração, seu alcance de ataque desarmado é o mesmo que o da sua característica Modificação da Fisiologia Suave, e você ganha os benefícios e penalidades dessa característica. Seu dano desarmado causa 1d6 + seu modificador de Ninjutsu de dano Perfurante.",
    emNiveisSuperiores:
      "Para cada nível acima do Rank D que você lançar este jutsu, aumente o custo deste jutsu em 3.\n\nQuando você lançar este jutsu no Rank C, uma vez que você agarre uma criatura, pode, como uma ação ou ação bônus, comandar suas cobras para morder ou constringir a criatura:\n- Mordida: o alvo sofre 2d8 de dano de Veneno e deve fazer um teste de resistência de Constituição, ganhando a condição Envenenado em caso de falha.\n- Constrição: o alvo sofre 2d8 de dano Contundente e deve fazer um teste de resistência de Força ou ficará Restrito em caso de falha.\n\nSe lançado no Rank B, o dado de ataque desarmado se torna 1d8 e o dano de Mordida e Constrição aumenta em 1d8. Se lançado no Rank S, o dado de ataque desarmado se torna 1d10 e o dano de Mordida e Constrição aumenta em 2d8.",
  },
  {
    key: "humanos-sinteticos-olhar-vinculante-de-cobra",
    nome: "Olhar Vinculante de Cobra",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "1,5 metro",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "humanos-sinteticos",
    descricao:
      "Você convoca até duas cobras que saem de suas mangas. Até duas criaturas de sua escolha dentro do alcance do seu ataque desarmado devem fazer um teste de resistência de Destreza, ganhando a condição Restrito até que este jutsu termine e sofrendo 2d8 de dano Contundente em caso de falha. Uma criatura Restrita pode tentar se libertar fazendo um teste de resistência de Força em seu turno.",
    emNiveisSuperiores:
      "Para cada nível acima do Rank D que você lançar este jutsu, aumente o custo deste jutsu em 3 e o dano em 1d12. Se lançado no Rank B, aumente o número de criaturas para 3 e o alcance em 1,5 metro. Se lançado no Rank S, aumente o número de criaturas para 4 e o alcance em mais 1,5 metro.",
  },
  {
    key: "humanos-sinteticos-enterramento-das-cobras-ocultas",
    nome: "Enterramento das Cobras Ocultas",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Instantâneo",
    componentes: ["MC", "M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "humanos-sinteticos",
    descricao:
      "Você enterra os braços no chão e estende os membros para agarrar um oponente pelos tornozelos, arrastando-o para o chão e enterrando-o com apenas a cabeça exposta. O alvo deve fazer um teste de resistência de Destreza, ficando Restrito e incapaz de usar o componente SM em caso de falha. Se o alvo não estiver ciente de sua presença, ele faz esse teste com desvantagem. Criaturas Restritas por este jutsu podem fazer um teste de resistência de Força como uma ação em seu turno para terminar o efeito. Este jutsu ignora cobertura.",
  },
  {
    key: "humanos-sinteticos-tecnica-do-clone-de-cobra",
    nome: "Técnica do Clone de Cobra",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Reação, quando você sofre dano",
    alcance: "Pessoal",
    duracao: "1 rodada",
    componentes: ["MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "humanos-sinteticos",
    descricao:
      "Em resposta a ser ferido, seu corpo se desintegra em dezenas de pequenas cobras e se reformula no mesmo local momentos depois. Até o início do seu próximo turno, você tem um bônus de +4 na CA, incluindo contra o ataque que disparou essa habilidade. Se um ataque corpo a corpo errar você devido a esse aumento de CA, a criatura que errou deve fazer um teste de resistência de Constituição ou ganhar a condição Envenenado até o início de seu próximo turno.",
    emNiveisSuperiores:
      "Para cada nível acima do Rank D que você lançar este jutsu, aumente o custo deste jutsu em 3, o alcance em 1,5 metro e qualquer dano em 1d8.",
  },
  // Rank C
  {
    key: "humanos-sinteticos-modo-de-cobra-deslizante",
    nome: "Modo de Cobra Deslizante",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Pessoal",
    duracao: "Concentração, até 1 minuto",
    componentes: ["MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "humanos-sinteticos",
    descricao:
      "Você transforma a metade inferior do seu corpo em uma cauda de cobra, o que aumenta significativamente sua velocidade e agilidade. Você não gasta Chakra para manter a concentração deste jutsu.\n\nDurante a duração, sua velocidade de movimento é duplicada, e você ganha vantagem em testes de resistência de Destreza e ignora terreno difícil. Além disso, você tem vantagem em testes de resistência contra efeitos que estejam agarrando ou restringindo você.",
  },
  {
    key: "humanos-sinteticos-ataque-das-sombras-de-cobra-impactante",
    nome: "Ataque das Sombras de Cobra Impactante",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal (cubo de 9 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "humanos-sinteticos",
    descricao:
      "Você enterra as mãos e convoca uma grande quantidade de cobras que emergem do subsolo. Criaturas dentro deste cubo devem fazer um teste de resistência de Destreza, sofrendo 2d8 de dano Perfurante e 2d8 de dano de Veneno, além de fazer um teste de resistência de Constituição, ganhando a condição Envenenado em caso de falha. Em caso de sucesso no teste de Destreza, a criatura sofre apenas metade do dano. Este jutsu ignora cobertura total.",
    emNiveisSuperiores:
      "Para cada nível acima do Rank C que você lançar este jutsu, aumente o custo deste jutsu em 3 e aumente cada tipo de dano em 1d8.",
  },
  {
    key: "humanos-sinteticos-liberacao-da-natureza-cobra-da-natureza",
    nome: "Liberação da Natureza: Cobra da Natureza",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "humanos-sinteticos",
    descricao:
      "Você cria uma construção de cobra de Chakra e a envia em direção a um inimigo. Faça um ataque de ninjutsu à distância; em um acerto, o alvo sofre 4d6 de dano de Força e deve fazer um teste de resistência de Constituição ou ser empurrado para trás 9 metros. Alternativamente, se você tiver uma palavra-chave elemental, pode escolher um dos seguintes efeitos com base na Liberação de Natureza selecionada:\n\nTerra: a criatura alvo sofre 2d10 de dano Contundente e 2d8 de dano de Terra, e deve também fazer um teste de resistência de Constituição, ganhando a condição Enfraquecido até o final de seu próximo turno em caso de falha.\nVento: o jutsu ganha um alcance de 18 metros e causa 3d6 de dano Cortante e 3d6 de dano de Vento.\nFogo: a criatura alvo sofre 2d8 de dano de Força e 2d8 de dano de Fogo, e todas as criaturas em um cone de 7,5 metros atrás da criatura alvo devem também fazer um teste de resistência de Constituição, ganhando 2 graduações da condição Queimado em uma falha.\nÁgua: a criatura alvo sofre 2d10 de dano Frio e 2d10 de dano Contundente, e é forçada a fazer um teste de resistência de Força. Em caso de falha, a criatura alvo é empurrada para trás 4,5 metros e fica Caída.\nRelâmpago: a criatura alvo sofre 2d8 de dano de Força e 2d8 de dano Elétrico, e deve fazer um teste de resistência de Constituição, ficando Chocada por 1d4 rodadas em caso de falha.",
  },
  // Rank B
  {
    key: "humanos-sinteticos-formacao-das-dez-mil-cobras",
    nome: "Formação das Dez Mil Cobras",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Cone de 18 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "humanos-sinteticos",
    descricao:
      "Você libera um número incontável de cobras de sua boca ou vestimenta, que se movem violentamente em direção a todos à sua frente. Criaturas em um cone de 18 metros que se origina de você devem fazer um teste de resistência de Constituição com desvantagem, sofrendo 3d10 de dano Perfurante e 3d10 de dano de Veneno, ganhando 2 graduações de Envenenado em caso de falha. Em caso de sucesso, sofrem metade do dano e não têm efeitos adicionais.",
    emNiveisSuperiores:
      "Para cada nível acima do Rank B que você lançar este jutsu, aumente o custo deste jutsu em 3 e o dano em 1d10.",
  },
  {
    key: "humanos-sinteticos-agregacao-das-cobras",
    nome: "Agregação das Cobras",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao:
      "1 Reação, quando você sofre dano letal de qualquer tipo, ou quando seria cortado ao meio, decapitado ou perderia algum membro",
    alcance: "Pessoal",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "humanos-sinteticos",
    descricao:
      "Cobras emergem do local onde você foi ferido e puxam seu corpo de volta, desfazendo o dano sofrido. Após usar este jutsu, você não pode usá-lo novamente por 1d4 semanas.",
  },
  // Rank A
  {
    key: "humanos-sinteticos-tecnica-da-morte-mutua-das-cobras-gemeas",
    nome: "Técnica da Morte Mútua das Cobras Gêmeas",
    tipo: "ninjutsu",
    rank: "A",
    tempoConjuracao: "1 Ação Completa",
    alcance: "Toque",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Kinjutsu"],
    cla: "humanos-sinteticos",
    descricao:
      "Para lançar este jutsu, você deve unir pelo menos uma mão com a criatura alvo, que deve estar sob a condição Restrito ou Agarrada. Você agarra uma das mãos de sua vítima e a força a ajudar na execução dos selos necessários. Uma vez feito isso, tanto você quanto a vítima morrem instantaneamente.",
  },
  {
    key: "humanos-sinteticos-liberacao-da-natureza-grande-ataque-da-cobra",
    nome: "Liberação da Natureza: Grande Ataque da Cobra",
    tipo: "ninjutsu",
    rank: "A",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros (cone de 18 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "humanos-sinteticos",
    descricao:
      "Uma versão evoluída do Hijutsu Liberação da Natureza: Cobra da Natureza. Você gera múltiplas construções de cobra de Chakra para atacar todas as criaturas em um cone de 18 metros, originado de um ponto dentro de 18 metros. Todas as criaturas dentro do alcance devem fazer um teste de resistência de Força, sofrendo 8d10 de dano de Força e ficando Derrubadas. Criaturas que falharem nesse teste por 5 ou mais ficam Restritas até o início de seu próximo turno, constringidas por cobras. Em um sucesso, as criaturas sofrem metade do dano e nenhum efeito adicional.\n\nAlternativamente, se você tiver acesso a uma Liberação de Natureza, pode escolher um dos seguintes efeitos, substituindo os efeitos normais deste jutsu (exceto o efeito de falha por 5 ou mais):\n\nTerra: as criaturas sofrem, em vez disso, 4d10 de dano Contundente e 4d10 de dano de Terra, e ganham 2 graduações de Contundido em uma falha.\nVento: este jutsu ganha 9 metros adicionais de alcance e aumenta o tamanho do cone em +3 metros. As criaturas sofrem, em vez disso, 5d6 de dano Cortante e 5d6 de dano de Vento, e ganham 1 graduação de Sangrando em uma falha.\nFogo: as criaturas sofrem, em vez disso, 14d4+14 de dano de Fogo e ganham 1 graduação de Queimado em uma falha.\nÁgua: as criaturas sofrem, em vez disso, 10d6 de dano Frio, ganham 1 graduação de Gelado, caem ao chão e são empurradas para trás 4,5 metros em uma falha. A área afetada se torna uma fonte de água pelos próximos minutos, para efeitos de jutsu de Rank B ou inferior.\nRelâmpago: as criaturas sofrem, em vez disso, 6d12 de dano Elétrico e ficam Chocadas e Enfraquecidas por 1d4 rodadas em uma falha (role uma vez para todas as criaturas afetadas).",
  },
];
