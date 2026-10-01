import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Hebi — Estudos da Tsunade, cap. Hebi ("Jutsu Do
 * Clã Hebi"). Tema de serpentes: a série "Postura de Ataque" (Bukijutsu,
 * só uma ativa por vez) e Hijutsu de veneno. Dano de Veneno não tem
 * correspondente em JutsuNatureza, então `natureza` fica de fora em todas
 * as entradas. Este clã tem 4 Hijutsu de Rank C e 3 de Rank B (não o
 * padrão 3/2) e nenhum de Rank S.
 *
 * Nota: o texto de escala de nível de "Dança da Cobra Venenosa" (base
 * Rank C) refere "acima do Rank D" — preservado como está na fonte, mesmo
 * tipo de inconsistência já vista em outros clãs (ver vesper.ts). O
 * componente de arma "W" em "Postura de Ataque: Víbora" foi normalizado
 * para "A", consistente com o código usado em todo o resto do catálogo.
 */
export const jutsuHebi: JutsuDefinition[] = [
  // Rank D
  {
    key: "hebi-tecnica-de-camuflagem-adaptativa",
    nome: "Técnica de Camuflagem Adaptativa",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "hebi",
    descricao:
      "Você reveste seu corpo com Chakra, realizando uma versão mais avançada da Técnica de Camuflagem Corporal, mudando a textura de sua pele enquanto também se adapta ao ambiente em constante mudança, sem precisar se concentrar constantemente em seus arredores. Durante esse período, você ganha um bônus de +1d10 em verificações de Destreza (Furtividade) e não pode ser rastreado, exceto por meios baseados em Chakra. Você não deixa rastros de seu movimento.",
  },
  {
    key: "hebi-postura-de-ataque-cobra",
    nome: "Postura de Ataque: Cobra",
    tipo: "bukijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "1 minuto",
    componentes: ["M"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "hebi",
    descricao:
      "Você só pode obter o benefício de uma postura de ataque por vez. Se você entrar em outra postura de ataque enquanto estiver se beneficiando desta, ela termina imediatamente. Você entra na postura de enrolamento de uma Cobra. Durante esse período, ataques com armas e taijutsu feitos com um componente de arma ignoram pontos de vida temporários, causando dano direto à criatura-alvo.",
  },
  {
    key: "hebi-formacao-de-mil-serpentes",
    nome: "Formação de Mil Serpentes",
    tipo: "bukijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (cubo de 4,5 metros)",
    duracao: "Instantâneo",
    componentes: ["A (Espada Larga, Kunai, Katana ou Odachi)", "M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "hebi",
    descricao:
      "Você libera uma série de golpes de lâmina de tal forma que cria a aparência de mil cobras se enrolando ao seu redor. Seus ataques são tão viscosos que todas as criaturas de sua escolha em um cubo de 4,5 metros originado de você devem fazer um teste de resistência de Destreza. A criatura que falhar recebe o dobro do dado de dano de suas armas + seu modificador de Habilidade de Taijutsu, ou metade desse valor se for bem-sucedida. Se a arma tiver dois ou mais dados de dano (como o 2d6 de uma Odachi), você adiciona um dado de dano adicional. Uma criatura que falhar no teste de resistência por 5 ou mais ganha 1 nível de Sangramento.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o multiplicador de dados em 1 (dado de dano duplo ou +1 > dado de dano triplo ou +2 > quádruplo ou +3 > quíntuplo ou +4 > sêxtuplo ou +5).",
  },
  {
    key: "hebi-postura-de-ataque-python",
    nome: "Postura de Ataque: Python",
    tipo: "bukijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "1 minuto",
    componentes: ["A (Espada Larga, Kunai, Katana ou Odachi)", "M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "hebi",
    descricao:
      "Você só pode obter o benefício de uma postura de ataque por vez. Se você entrar em outra postura de ataque enquanto estiver se beneficiando desta, ela termina imediatamente. Você entra na postura de ataque de uma Python. Durante a duração, os ataques de taijutsu feitos com uma arma componente causam o dobro de dano a criaturas que recebem um bônus na CA como resultado de um jutsu, característica ou traço, ou o dobro de dano a uma estrutura convocada como resultado de um jutsu ou característica destinada a interceptar dano — no máximo duas vezes por lançamento.",
  },
  // Rank C
  {
    key: "hebi-escamas-endurecidas-de-mambas",
    nome: "Escamas Endurecidas de Mambas",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Reação, ao sofrer dano",
    alcance: "Próprio",
    duracao: "1 rodada",
    componentes: ["MC"],
    custoChakra: 6,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "hebi",
    descricao:
      "Sua pele se torna envolta em Chakra, assumindo a forma das escamas de uma serpente, se revestindo e endurecendo no ponto de impacto para reduzir a potência do dano recebido. Você ganha +7 de Redução de Dano (RD) contra todas as fontes de dano até o início de seu próximo turno.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e a RD em +5.",
  },
  {
    key: "hebi-danca-da-cobra-venenosa",
    nome: "Dança da Cobra Venenosa",
    tipo: "bukijutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Alcance da Arma",
    duracao: "Instantâneo",
    componentes: ["A (Espada Larga, Kunai, Katana ou Odachi)", "M"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "hebi",
    descricao:
      "Você executa uma enxurrada de golpes graciosos, cada um com a precisão mortal da mordida de uma cobra. Faça dois ataques de Taijutsu corpo a corpo, causando o dano de suas armas + 3d8 em cada acerto bem-sucedido. Você não adiciona seu modificador de Habilidade ao dano. Se sua arma causar dano de Veneno, você pode, em vez disso, fazer até 3 ataques de taijutsu corpo a corpo.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dano em 1d8.",
  },
  {
    key: "hebi-olhar-de-pythons",
    nome: "Olhar de Pythons",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (raio de 9 metros)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "hebi",
    descricao:
      "Você injeta uma onda de Chakra em seus olhos, aumentando sua percepção visual, fazendo com que pareça que o mundo está ficando mais lento ao seu redor. Você não gasta Chakra para manter a concentração neste jutsu. Durante esse período, as criaturas que você pode ver dentro do alcance de suas ações parecem desacelerar. Ataques com armas brancas ou Bukijutsu do Clã Hebi que você lançar não podem ser feitos com desvantagem, e as criaturas dentro do alcance não podem ganhar vantagem contra qualquer Bukijutsu do Clã Hebi.",
  },
  {
    key: "hebi-postura-de-ataque-vibora",
    nome: "Postura de Ataque: Víbora",
    tipo: "bukijutsu",
    rank: "C",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["A (Katana, Espada Larga ou Odachi)"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "hebi",
    descricao:
      "Você só pode obter o benefício de uma postura de ataque por vez. Se entrar em outra postura de ataque enquanto estiver se beneficiando desta, ela termina imediatamente. Você não gasta Chakra para manter este jutsu. Você assume a postura venenosa de uma Víbora. Durante a duração, os ataques com armas e o Bukijutsu do Clã Hebi lançados usando um dos componentes deste jutsu ignoram resistência e redução de dano, causando dano direto à criatura-alvo. Além disso, as armas componentes escolhidas agora podem ser usadas como componentes de Bukijutsu que exigem Perfuração.",
  },
  // Rank B
  {
    key: "hebi-adaptacao-a-serpente",
    nome: "Adaptação à Serpente",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["M", "MC"],
    custoChakra: 12,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Taijutsu", "Bukijutsu"],
    cla: "hebi",
    descricao:
      "Você derrama Chakra por todo o seu corpo, criando presas, sacos de veneno, endurecendo sua pele e permitindo-lhe alongar os braços e pernas como chicotes. Durante esse período, seu alcance de ataque corpo a corpo e de Bukijutsu aumenta em 1,5 metro, à medida que você estica os braços para compensar; sua velocidade de movimento aumenta em 3 metros. Se você tiver Escamas Endurecidas de Mambas em sua lista de jutsu conhecidos, lançá-lo não consome Chakra.",
  },
  {
    key: "hebi-lamina-venenosa-de-mamba",
    nome: "Lâmina Venenosa de Mamba",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "1 minuto",
    componentes: ["SM", "MC", "A (Katana, Espada Larga ou Odachi)"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Bukijutsu"],
    cla: "hebi",
    descricao:
      "Você envolve sua arma em um veneno só encontrado na infame Mamba Negra. Sua arma causa dano venenoso adicional de 2d6, até duas vezes por turno. As criaturas que receberem dano de um ataque que inclua a arma revestida devem fazer um teste de Constituição, ganhando a condição Envenenado e 1 nível de Envenenamento se falharem. Uma criatura com níveis de Envenenado como resultado deste jutsu usa um d8 para o dado de dano das condições de Envenenado, em vez do padrão. Criaturas envenenadas por outra fonte também devem fazer esse teste, tornando-se envenenadas por este jutsu se falharem.\n\nUma criatura envenenada ou enfraquecida por este jutsu tem dificuldade em realizar reações: ao ser envenenada ou enfraquecida, ela não pode realizar uma reação até o início de seu próximo turno. No início de cada um de seus turnos seguintes, ela deve repetir o teste, perdendo a capacidade de realizar uma reação até o início do turno seguinte em caso de falha; em caso de sucesso, ela pode realizar reações normalmente.",
  },
  {
    key: "hebi-onda-venenosa-das-viboras",
    nome: "Onda Venenosa das Víboras",
    tipo: "bukijutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio (9 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC", "A (Katana, Espada Larga ou Odachi)"],
    custoChakra: 12,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "hebi",
    descricao:
      "Você cria uma onda de Chakra venenoso que irrompe de sua arma quando você a balança. Todas as criaturas em uma linha de 3 metros de largura e 9 metros de comprimento devem fazer um teste de resistência de Destreza, sofrendo 6d8 de dano de Veneno em uma falha, ou metade desse dano em um sucesso.\n\nSe a arma que você usar estiver sob os efeitos de Lâmina Venenosa de Mamba ou da característica de clã Potência Venenosa, as criaturas fazem esse teste de resistência com uma penalidade de 1d6. Se a arma estiver sob os efeitos de ambos (Lâmina Venenosa de Mamba e Potência Venenosa), o dano passa a ser 6d10 de Veneno em vez de 6d8, com metade desse valor em um sucesso.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank B, aumente o custo desse jutsu em 3 e o dano em 2d8 ou 2d10.",
  },
  // Rank A
  {
    key: "hebi-bencao-das-cobras-prateadas",
    nome: "Bênção das Cobras Prateadas",
    tipo: "taijutsu",
    rank: "A",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 0,
    custoChakraTexto: "Especial (reduz seu Chakra atual a 0)",
    palavrasChave: ["Hijutsu", "Taijutsu"],
    cla: "hebi",
    descricao:
      "Você ingere um veneno poderoso e potente que reduz seu Chakra atual a 0. Você ganha a condição Envenenado ao final deste jutsu, que não pode ser removida, resistida ou ignorada por qualquer meio durante a próxima hora. No minuto seguinte, você recebe os seguintes efeitos:\n- Você não pode sofrer os efeitos das condições Ferido, Envenenado, Enfraquecido ou Desacelerado durante esse período.\n- Sua pontuação de Habilidade de Taijutsu aumenta em um valor igual ao seu bônus de proficiência.\n- Você pode conjurar todos os jutsu do Clã Hebi que constam em sua lista de jutsu conhecidos sem custo.\n- Os jutsu do Clã Hebi com o prefixo 'Postura de Ataque:' podem ser lançados usando uma ação, ação bônus ou reação.\n- Você pode se concentrar em até 3 jutsu diferentes do Clã Hebi, ignorando quaisquer efeitos que o impeçam de manter mais de uma postura de ataque ao mesmo tempo.\n\nApós 1 minuto, você fica Inconsciente pela hora seguinte, não podendo ser acordado até que a hora tenha passado. Quando você acorda, fica com apenas 1 Chakra.",
  },
];
