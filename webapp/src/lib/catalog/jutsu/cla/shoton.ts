import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Shoton — Estudos da Tsunade, cap. Shoton
 * ("Jutsu Do Clã Shoton"). "Estilo Cristal" (Liberação de Cristal, Estilo
 * Terra). `natureza` é "terra" só nas entradas com dano de Terra fixo
 * (Agulhas de Cristal, Roda de Cristal, Lâmina de Cristal de Jade,
 * Shuriken de Vento Dançante); as demais (defensivas/utilitárias, ou com
 * dano cortante sem componente de terra) ficam sem natureza. O livro não
 * traz um Hijutsu de Rank S para este clã.
 *
 * Nota: o texto de escala de nível de "Estilo Cristal: Fruto de Cristal"
 * (base Rank B) refere "acima do Rank D" — preservado como está na fonte,
 * mesmo tipo de inconsistência já vista em outros clãs.
 */
export const jutsuShoton: JutsuDefinition[] = [
  // Rank D
  {
    key: "shoton-estilo-cristal-armadura-de-cristal",
    nome: "Estilo Cristal: Armadura de Cristal",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra"],
    cla: "shoton",
    descricao:
      "Você cria uma camada de chakra cristalino em seu corpo, projetada para agir como uma segunda pele, protegendo-o de golpes poderosos e ataques incapacitantes.\n\nDurante esse período, você não pode obter os benefícios da armadura que estiver usando. Você não gasta Chakra para manter a concentração deste jutsu, e ele não pode terminar como resultado de falha em uma verificação de concentração.\n\nVocê recebe um bônus de +1 na sua CA e reduz o dano recebido em 2. Essa redução de dano não se aplica contra dano de Raio.\n\nEnquanto estiver recebendo os benefícios deste jutsu, você é considerado uma Construção de Terra de sua própria criação.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo em 3. Se esse jutsu for lançado no Rank C ou superior, aumente a redução de dano para 4. Se esse jutsu for lançado no Rank B ou superior, aumente o bônus de CA em +1. Se for lançado no Rank A ou superior, a duração passa a ser de 8 horas e pode ser mantida junto com até dois outros jutsu com a palavra-chave Estilo Terra. Se for lançado no Rank S, a redução de dano aumenta para 8.",
  },
  {
    key: "shoton-estilo-cristal-agulhas-de-cristal",
    nome: "Estilo Cristal: Agulhas de Cristal",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "terra",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra"],
    cla: "shoton",
    descricao:
      "Você manifesta hastes de cristal rosa, azul, vermelho ou verde que lança em uma criatura que você pode ver ao alcance. Faça dois ataques de ninjutsu à distância contra uma criatura que você possa ver dentro do alcance. Em caso de acerto, você causa 2d6 + modificador de Habilidade de Ninjutsu de dano de Terra.\n\nSe você causar 15 ou mais de dano com esse jutsu, o cristal se expande ao entrar em contato com a criatura afetada. O alvo deve fazer um teste de resistência de Força; se falhar, a criatura fica Restrita pelos cristais. No final do turno da criatura afetada, ela refaz o teste, encerrando a condição de restrição em caso de sucesso.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo em 3, o dano em 1d6 e o número de ataques em +1.",
  },
  {
    key: "shoton-estilo-cristal-roda-de-cristal",
    nome: "Estilo Cristal: Roda de Cristal",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "terra",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra"],
    cla: "shoton",
    descricao:
      "Você manifesta um anel de cristal rosa, azul, vermelho ou verde em torno de si mesmo, que faz girar como uma serra elétrica ao seu redor. Durante a duração deste jutsu, você aumenta sua velocidade de movimento em 5 vezes seu modificador de Habilidade de Ninjutsu, ignora terreno difícil, e as criaturas que fariam um ataque de oportunidade contra você recebem 10 de dano de Terra quando o anel de cristal as golpeia ao você passar por elas.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo em 3 e o dano em 5.",
  },
  {
    key: "shoton-estilo-cristal-lamina-de-cristal-de-jade",
    nome: "Estilo Cristal: Lâmina de Cristal de Jade",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "terra",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra"],
    cla: "shoton",
    descricao:
      "Você manifesta lâminas de cristal rosa, azul, vermelho ou verde em um de seus braços. Como uma ação em cada um de seus turnos, você pode fazer dois ataques de ninjutsu corpo a corpo contra uma criatura que você possa ver em um raio de 1,5 metro de você. Em caso de acerto, você causa seu dano desarmado + 1d8 de dano de Terra.\n\nSe você acertar uma criatura com ambos os ataques, o alvo ganha 2 graus de Sangramento.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo em 3 e o dano em 2d8.",
  },
  // Rank C
  {
    key: "shoton-estilo-cristal-shuriken-de-cristal-hexagonal",
    nome: "Estilo Cristal: Shuriken de Cristal Hexagonal",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Permanente, até ser usada",
    componentes: ["SM", "MC"],
    custoChakra: 6,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra"],
    cla: "shoton",
    descricao:
      "Você manifesta uma pilha de shuriken de cristal rosa, azul, vermelho ou verde. Essas shuriken não têm volume, e você só pode ter uma pilha de cada vez — se manifestar outra pilha, a anterior se dissolve. Essas shuriken têm o mesmo alcance das shuriken normais, causam 1d6 de dano Cortante e têm a propriedade Mortal.\n\nEssas shuriken podem ser arremessadas usando seu bônus de ataque de Ninjutsu, e sempre contam como componentes para Bukijutsu que exijam uma arma cortante de longo alcance.\n\nSe você obtiver um acerto crítico com essas shuriken, elas se estilhaçam e se fragmentam, causando metade do dano a todas as criaturas em um raio de 1,5 metro do alvo original.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo em 3 e o tamanho do dado da pilha em 1 passo (d6 > d8 > d10 > d12).",
  },
  {
    key: "shoton-estilo-cristal-shuriken-de-vento-dancante",
    nome: "Estilo Cristal: Shuriken de Vento Dançante",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "terra",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio (raio de 1,5 metro)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra"],
    cla: "shoton",
    descricao:
      "Você manifesta shuriken de cristal rosa, azul, vermelho ou verde que giram furiosamente ao seu redor, protegendo-o do perigo e causando dano às criaturas que se aproximarem demais. Ataques à distância contra você causam dano reduzido em 2d6 (essa redução não se aplica contra dano de Raio).\n\nSe uma criatura começar ou terminar seu turno a menos de 1,5 metro de você, ela deve fazer um teste de resistência de Destreza, sofrendo 3d6 de dano de Terra e 3d6 de dano Cortante se falhar, ou metade do dano se for bem-sucedida.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo em 3 e o dano em 1d6 de cada tipo.",
  },
  {
    key: "shoton-estilo-cristal-pilares-hexagonais-de-cristal-de-jade",
    nome: "Estilo Cristal: Pilares Hexagonais de Cristal de Jade",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio (raio de 18 metros)",
    duracao: "Concentração, até 10 minutos",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra", "Fuinjutsu"],
    cla: "shoton",
    descricao:
      "Você manifesta cinco grandes pilares cristalinos rosa, azul, vermelho ou verde ao seu redor, cada um na borda do raio deste jutsu, com você no centro.\n\nDurante esse período, cada um desses pilares conta como uma Construção de Terra. Enquanto o jutsu durar, você e as criaturas de sua escolha dentro do raio ganham os seguintes benefícios:\n- Jutsu lançado com a palavra-chave Estilo Terra, de rank igual ou inferior ao deste jutsu, ignoram os requisitos de Selo de Mão (SM).\n- Jutsu lançado com a palavra-chave Estilo Terra que exijam concentração têm seu custo de concentração reduzido em 1 (mínimo 1).\n- Reduz todo o dano recebido, exceto dano Luminoso e Psíquico, em 1d6+2.\n- As criaturas não podem se beneficiar de Furtividade ou de se esconder de você enquanto estiverem dentro do raio deste jutsu.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo em 3 e a redução de dano em 3. Se for lançado no Rank A ou superior, aumenta a redução do custo de concentração para jutsu de Estilo Terra para 3 (mínimo 1).",
  },
  // Rank B
  {
    key: "shoton-estilo-cristal-fruto-de-cristal",
    nome: "Estilo Cristal: Fruto de Cristal",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação ou Reação, quando uma criatura que você vê receberia dano",
    alcance: "27 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 12,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra"],
    cla: "shoton",
    descricao:
      "Você manifesta uma cúpula de cristal rosa, azul, vermelho ou verde em torno de uma criatura de sua escolha dentro do alcance, projetada para proteger ou prender uma criatura.\n\nSe este jutsu for lançado tendo como alvo uma criatura disposta, você manifesta a cúpula de cristal ao redor dela quase instantaneamente. Essa cúpula intercepta todos os ataques e efeitos prejudiciais, exceto Genjutsu.\n\nSe este jutsu for lançado em uma criatura que não esteja disposta, ela faz um teste de resistência de Destreza, sendo envolta pela cúpula se falhar. Enquanto estiver dentro da cúpula de cristal, ela intercepta todos os ataques e efeitos de dano, exceto Genjutsu.\n\nA cúpula tem CA igual à sua CD de resistência de Ninjutsu, resistência a dano de Frio, vulnerabilidade a dano de Raio, e um número de pontos de vida igual a 6d8+15. A criatura não pode passar voluntariamente pelo cristal; é necessário que ele seja destruído, dissipado ou removido para que ela possa se mover do espaço atual.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo em 3 e os pontos de vida da cúpula em 1d8+5.",
  },
  {
    key: "shoton-estilo-cristal-prisao-de-cristal",
    nome: "Estilo Cristal: Prisão de Cristal",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra"],
    cla: "shoton",
    descricao:
      "Você manifesta uma estrutura cristalina rosa, azul, vermelha ou verde, envolvendo completamente uma criatura que você toca dentro dela. O custo deste jutsu e seus custos de concentração não podem ser reduzidos por nenhum meio, exceto pelo Estilo Cristal: Pilares Hexagonais de Cristal de Jade.\n\nFaça um ataque de ninjutsu corpo a corpo. Se acertar, o alvo deve fazer um teste de resistência de Constituição; se falhar, você infunde o alvo com seu Chakra de Estilo Cristal pelo minuto seguinte. No início de cada um de seus turnos, ele deve ser bem-sucedido em um teste de Constituição (Controle de Chakra) contra sua CD de resistência de Ninjutsu durante esse período.\n\nCada vez que a criatura falhar, sua estrutura celular começa a se assemelhar à de um cristal:\n- Uma criatura que falhar uma ou mais vezes ganha 1 grau da condição Lento, pois fica difícil se mover da maneira como deseja.\n- Uma criatura que falhar duas ou mais vezes ganha a condição Restrito, pois suas células começam a assumir uma estrutura cristalina, solidificando-se.\n- Uma criatura que falhar três ou mais vezes fica Incapacitada, pois seu corpo é tomado por células cristalinas.\n- Uma criatura que falhar cinco ou mais vezes fica Petrificada permanentemente, até que você lance novamente este jutsu sobre ela, ou um Ninjutsu com a palavra-chave Médico que remova condições de qualquer tipo seja lançado sobre ela no Rank A ou superior.\n\nSe sua figura petrificada sofrer dano ou for destruída de alguma forma, a criatura petrificada é imediatamente morta, sem possibilidade de ser revivida.",
  },
  // Rank A
  {
    key: "shoton-estilo-cristal-prisao-de-cristal-wave",
    nome: "Estilo Cristal: Prisão de Cristal Wave",
    tipo: "ninjutsu",
    rank: "A",
    tempoConjuracao: "Ação de Turno Completo",
    alcance: "Autônomo (esfera de raio de 9 metros)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 25,
    custoChakraTexto: "Especial (25 Chakra)",
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra"],
    cla: "shoton",
    descricao:
      "Como parte do lançamento deste jutsu, você deve conhecer o Hijutsu Estilo Cristal: Prisão de Cristal. Você executa o Estilo Cristal: Prisão de Cristal, mas em grande escala, afetando todas as criaturas dentro do alcance.\n\nCada criatura em um raio de 9 metros deve fazer um teste de resistência de Destreza. Se falhar, ela fica sob os efeitos do Estilo Cristal: Prisão de Cristal, como se você a tivesse atingido.",
  },
];
