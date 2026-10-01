import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Aburame — Estudos da Tsunade, cap. Aburame
 * ("Jutsu Do Clã Aburame"). Só o Clã Aburame pode conjurar estes jutsu (ver
 * catalog/clans.ts para as Características de Clã que liberam o acesso).
 * O livro não traz um Hijutsu de Rank S para este clã — não inventado.
 */
export const jutsuAburame: JutsuDefinition[] = [
  // Rank D
  {
    key: "aburame-cocoonia-humana",
    nome: "Cocoônia Humana",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Especial",
    componentes: ["SM", "MC"],
    custoChakra: 0,
    custoChakraTexto: "Especial",
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "aburame",
    descricao:
      "Usando os insetos que estão habitando seu corpo, você cria um casulo grande o suficiente para segurá-lo e pendurar em qualquer superfície que possa segurá-lo, para uma variedade de cenários dentro e fora de combate.\n\nFora de combate: esse casulo é à prova d'água e pode ser usado como saco de dormir, permitindo que você paire acima do solo, longe de criaturas terrestres que não podem alcançá-lo. Enquanto estiver dentro do casulo, você se parecerá com um grande inseto passando pela metamorfose e não atrairá a atenção de outras criaturas. Se for usado como parte de um descanso curto, você recupera o máximo possível de pontos de vida ou Chakra dos dados de acerto e dos dados de Chakra lançados. Se for usado como parte de um descanso longo, você recupera pontos de vida adicionais iguais ao seu nível + bônus de proficiência.\n\nEm combate: ao gastar 3 de Chakra, no minuto seguinte você pode assumir uma posição defensiva dentro do seu casulo, suspendendo-se em uma posição furtiva. Enquanto estiver nessa posição furtiva, as verificações de furtividade são feitas com bônus de 1d8. Qualquer movimento ou ação usado para completar qualquer tarefa que não seja manter sua furtividade termina imediatamente a furtividade e o bônus desse jutsu.",
  },
  {
    key: "aburame-esfera-de-insetos",
    nome: "Esfera de Insetos",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "aburame",
    descricao:
      "Você envia um enxame de insetos para prender uma criatura alvo. O alvo deve fazer um teste de resistência de Destreza. Em uma falha, ele é contido enquanto você causa 4d6 de dano de veneno ao alvo contido no final de cada um dos seus turnos. Criaturas contidas podem fazer um teste de resistência de Força no final de cada um dos seus turnos; em um sucesso, o jutsu termina nelas.\n\nEnquanto contida dessa forma, o jutsu que a criatura conjura tem seu custo base aumentado em +4. Se o jutsu exigir Selos de Mão (SM) como componente, seu custo base aumenta em mais +4.",
    emNiveisSuperiores:
      "Para cada nível acima do Rank D que você conjurar este jutsu, aumente o custo deste jutsu em 3, o dano em 2d6 e a penalidade de custo do jutsu em +2 para cada instância de aumento de custo.",
  },
  {
    key: "aburame-destruicao-parasitaria",
    nome: "Destruição Parasitária",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["SM"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "aburame",
    descricao:
      "Você envia seu enxame de insetos para atacar uma criatura dentro do alcance, ignorando cobertura. Faça um ataque de ninjutsu à distância, causando 4d6 de dano de veneno. Em um acerto, a criatura afetada deve fazer um teste de resistência de Constituição, tornando-se Envenenada em uma falha.",
    emNiveisSuperiores:
      "Para cada nível que você conjura este jutsu acima do Rank D, aumente o custo deste jutsu em 3 e o dano em 2d6.",
  },
  {
    key: "aburame-toque-parasitico",
    nome: "Toque Parasítico",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "Instantâneo",
    componentes: ["SM"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "aburame",
    descricao:
      "Você cobre suas mãos com uma camada fina de chakra tóxico sugado dos insetos que você está hospedando em seu corpo. Faça dois ataques corpo a corpo de Ninjutsu, causando 2d8 de dano de veneno em um acerto. Uma criatura atingida por ambos os ataques deve ser bem-sucedida em um teste de resistência de Destreza ou ganhar um nível de Envenenado, e tem desvantagem no seu próximo teste de ataque contra você, ou você ganha vantagem no próximo teste de resistência que impuser contra ela — o que acontecer primeiro, antes do fim do próximo turno dela.",
    emNiveisSuperiores:
      "Para cada nível que você conjura este jutsu acima do Rank D, aumente o custo deste jutsu em 3 e o dano em 1d8.",
  },
  // Rank C
  {
    key: "aburame-clone-de-insetos",
    nome: "Clone de Insetos",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    custoChakraTexto: "Especial (8 Chakra, sem custo para manter a concentração)",
    palavrasChave: ["Hijutsu", "Ninjutsu", "Clone"],
    cla: "aburame",
    descricao:
      "Sua variação da técnica de clone de sombra, onde você cria um único clone de si mesmo formado de insetos, chamado de Clone de Inseto. Este clone não tem armas ou ferramentas e não pode falar. Clones de Inseto são capazes de conjurar até 2 Hijutsu do Clã Aburame de Rank D.\n\nO jutsu termina quando o clone atingir 0 pontos de vida, executar 2 Hijutsu do Clã Aburame, seu invocador terminar o turno a mais de 36 metros de distância, ou for dispensado como uma ação bônus.",
    emNiveisSuperiores:
      "Para cada nível que você conjurar este jutsu acima do Rank C, aumente o custo deste jutsu em 3. Se este jutsu for conjurado no Rank A, aumente o rank do jutsu que o Clone de Inseto pode conjurar para Rank C.",
  },
  {
    key: "aburame-enxame-volatil",
    nome: "Enxame Volátil",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal (linha de 13,5 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "aburame",
    descricao:
      "Você coleta um enxame de centopeias escavadoras e besouros escavadores ao longo de seus braços e dedos, liberando-os em uma torrente de insetos em uma linha à sua frente. Todas as criaturas em uma linha de 13,5 metros de comprimento e 1,5 metro de largura, originada em você, devem fazer um teste de resistência de Destreza, sofrendo 5d6 de dano de veneno em uma falha, ou metade disso em um sucesso.",
    emNiveisSuperiores:
      "Para cada rank que você conjura este jutsu acima do Rank C, aumente o custo deste jutsu em 3 e o dano em 2d6.",
  },
  {
    key: "aburame-golpe-de-inseto",
    nome: "Golpe de Inseto",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio (3 metros)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "aburame",
    descricao:
      "Você espalha insetos famintos e purulentos ao seu redor em uma tentativa de infestar secretamente outras criaturas de sua escolha. Selecione qualquer número de criaturas dentro do alcance. As criaturas devem fazer um teste de resistência de Constituição, sem saber o que você fez a menos que tenham Visão de Chakra ou Visão Verdadeira. Em caso de falha, as criaturas ficam levemente infestadas com seus insetos. Uma criatura infestada pode perceber a infestação se sua percepção passiva superar a CD de defesa do jutsu, ou se fizer uma verificação de percepção ativa contra essa CD. Durante esse período, as criaturas infestadas que tentarem lançar um jutsu que exija certos componentes aumentam o custo desse jutsu em +4 para cada componente que ele tiver. [nota: a fonte corta aqui sem listar quais componentes contam — texto incompleto na extração original]",
  },
  // Rank B
  {
    key: "aburame-amplificar-insetos",
    nome: "Amplificar Insetos",
    tipo: "ninjutsu",
    rank: "B",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "aburame",
    descricao:
      "Você preenche seus insetos com uma intensa onda de Chakra, aumentando o potencial e as habilidades gerais deles. Ao usar outros jutsu do Aburame, aumente o dano deles em um dado de dano e seu modificador de Habilidade de Ninjutsu; o custo de Chakra deles aumenta em um valor igual à sua classificação (Rank D: 1, Rank C: 2, Rank B: 3, Rank A: 4, Rank S: 5).",
  },
  {
    key: "aburame-nuvem-de-insetos-parasitas",
    nome: "Nuvem de Insetos Parasitas",
    tipo: "ninjutsu",
    rank: "B",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros (cubo de 6 metros)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM"],
    custoChakra: 12,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "aburame",
    descricao:
      "Seus insetos criam um gás nocivo exalado de seu corpo. Quando você lança este jutsu, escolhe uma área que pode ver dentro do alcance, e o gás se move até essa área. Criaturas que estiverem no caminho do gás ou que começarem seu turno dentro da área afetada devem fazer um teste de resistência de Constituição. Em caso de falha, a criatura fica Envenenada e sofre 5d8 de dano de veneno; em caso de sucesso, sofre metade do dano e não sofre efeitos adicionais. No início de cada turno em que uma criatura começar dentro do gás, ela deve repetir o teste de resistência. Como uma ação bônus, em cada turno após o lançamento, durante a duração deste jutsu, você pode mover a nuvem de gás em até 9 metros.",
    emNiveisSuperiores:
      "Para cada patamar acima do Rank B em que você lançar este jutsu, aumente o custo do jutsu em 3 e o dano em 2d8.",
  },
  // Rank A
  {
    key: "aburame-inseto-gigante-parasita",
    nome: "Inseto Gigante Parasita",
    tipo: "ninjutsu",
    rank: "A",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Ação",
    alcance: "36 metros",
    duracao: "Instantâneo",
    componentes: ["SM"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "aburame",
    descricao:
      "Você insere um inseto especial que se enterra na pele do alvo e cresce explosivamente quanto mais carne e chakra consome. Faça um ataque de ninjutsu corpo a corpo. Em um acerto, no início do próximo turno da criatura alvo, o inseto explode para fora do corpo, deixando um buraco gigante em seu rastro, causando 10d10 de dano necrótico que ignora Redução de Dano, 8d10 de dano de Chakra e infligindo 2 níveis de Sangramento. A criatura então precisa ser bem-sucedida em um teste de resistência de Constituição para resistir ao veneno que o inseto deixa para trás, ou ganhar um nível de Envenenado. Uma criatura pode ter mais de um Inseto Gigante Parasita implantado nela ao mesmo tempo.\n\nVocê pode escolher plantar o inseto sutilmente fazendo um teste de Prestidigitação contra a Percepção Passiva do alvo. Você também pode atrasar seu crescimento, designando o número de rodadas que o inseto esperará para começar a comer no momento da conjuração, até um máximo de 10.",
    emNiveisSuperiores:
      "Para cada nível que você conjurar este jutsu acima do Rank A, aumente o custo deste jutsu em 3 e o dano necrótico em 2d10.",
  },
];
