import type { TalentDefinition } from "@/lib/talents/types";

/** Talentos de Chakra — Manual Shinobi, Cap. 13, p.225-227. */
export const talentosChakra: TalentDefinition[] = [
  {
    key: "orientacao-de-chakra",
    nome: "Orientação de Chakra",
    categoria: "chakra",
    descricao: "Você aprendeu a utilizar seu dom com Chakra de uma forma única e específica. Você ganha os seguintes benefícios:\n- Aumente seu valor de Sabedoria ou Carisma em 1, sendo o máximo de 20.\n- Escolha uma habilidade na qual você seja proficiente. Quando você fizer um teste de habilidade com a habilidade escolhida, você pode usar seu modificador de Sabedoria ou Carisma no lugar da sua pontuação de habilidade original.\n- Jutsu que você encontra é muito mais fácil de lidar devido a suas peculiaridades únicas com Chakra. Quando você tentar interromper ou dissipar um jutsu que outra criatura conjure ou esteja se concentrando no momento, você ganha 1d4 de bônus para quaisquer testes que você fizer interrompendo ou dissipando seu jutsu.\n- Jutsu, seu elenco é muito mais difícil de reconhecer, e portanto, mais difícil de planejar. Quando um criatura tentaria interromper ou dissipar um jutsu que você lança ou está se concentrando, eles sofrem 1d4 penalidade para quaisquer testes feitos para fazer qualquer um desses.",
  },
  {
    key: "pressao-do-chakra",
    nome: "Pressão do Chakra",
    categoria: "chakra",
    descricao: "Você tem uma aura de Chakra muito poderosa. Você ganha o seguinte benefícios:\n- Aumente sua pontuação de constituição em 1, até um máximo de 20.\n- Selecione entre: Ninjutsu, Genjutsu, Taijutsu ou Bukijutsu. Jutsu que você usa que tem uma das palavras-chave mencionadas acima, que exigem que uma criatura faça um teste de resistência, não pode adicionar bônus baseados em Jutsu ao seu salvamento, a menos que o jutsu que concede o bônus é de classificação superior ao jutsu você lançou originalmente.\n- Seu chakra é pesado e carrega um peso diferente de qualquer outro. Jutsu que você lança com a moldagem de chakra (MC) de componente, que invoca uma criatura, construto ou objeto com pontos de vida ou pontos de vida temporários. Aquela criatura, construto ou objeto ganha um número de pontos de vida adicionais igual a duas vezes o seu modificador de constituição (min 2).\n- Suas construções baseadas em chakra são mais difíceis para os inimigos derrubar ou dissipar. Quando uma criatura tentar interromper ou dissipar um jutsu ou recurso que você lançou que invocaria uma criatura, construto ou objeto com pontos de vida temporários, aumente sua CD para fazer isso por +2.",
  },
  {
    key: "resistencia-latente",
    nome: "Resistência Latente",
    categoria: "chakra",
    descricao: "Você tem uma grande quantidade de chakra dentro de você, pronto para liberar. Você ganha os seguintes benefícios:\n- Aumente sua pontuação de Constituição em 1, até um máximo de 20\n- Quando você rola um Dado de Chakra para recuperar pontos de chakra, você trata todos os 1 como 2.\n- Seu máximo de pontos de chakra aumenta em uma quantidade igual ao seu nível quando você ganha este talento. Sempre que você ganha um nível depois disso, seu máximo de pontos de chakra aumenta em mais 1 ponto de chakra.\n- Como uma ação de turno completo, você pode usar o poço de chakra dentro de si. Você pode gastar um número de dados de chakra até seu nível. Quando fizer isso, role todos os dados de chakra gastos, ganhando pontos de chakra iguais ao resultado. Você então ganha 1 nível de exaustão pela próxima hora",
  },
  {
    // NOTE: o pré-requisito no original cita apenas "Resistência" (sem "Latente"); mantido literal, mas provavelmente se refere ao talento "Resistência Latente".
    key: "resistencia-realizada",
    nome: "Resistência Realizada",
    categoria: "chakra",
    preRequisito: "Resistência, Nível 8+",
    descricao: "As reservas de chakra que você possui são significativamente mais volumoso do que se pensava anteriormente. Você ganha o seguintes benefícios:\n- Aumente seu valor de Constituição em 1, até o máximo 20.\n- Você ganha resistência a Dano de Chakra.\n- Seu máximo de pontos de chakra aumenta em uma quantidade igual ao seu nível quando você ganha este talento. Em qualquer momento você ganha um nível depois disso, seus pontos de chakra máximo aumenta em 1 ponto de chakra adicional.\n- Seu máximo de pontos de Chakra não pode ser reduzido por efeitos hostis",
  },
  {
    key: "eficiencia-de-chakra-melhorada",
    nome: "Eficiência de Chakra Melhorada",
    categoria: "chakra",
    descricao: "Você ganhou maior controle sobre seu chakra, ganhando os seguintes benefícios:\n- Aumente seu valor de Constituição em 1, até um máximo de 20.\n- Você pode selecionar 2 Jutsus que possui atualmente. Esse custo do jutsu é reduzido em um valor igual à sua classificação. Você pode mudar esta escolha, quando você completaria um descanso longo. (Rank D: 1, Rank C: 2, Rank B: 3, Rank A: 4, Rank S: 5).\n- Você pode selecionar um recurso de classe que possui atualmente e seu custo de chakra. Você pode usar esse recurso com custo 0, duas vezes por longo descanso. Se o recurso selecionado pode ter seu custo aumentado para um benefício maior, não pode ser selecionado como uma opção para este talento. Se um recurso tiver sub-recursos e/ou múltiplos custos, escolha um para aplicar este talento.\n- Se você não tiver uma característica de classe que custe chakra, você em vez disso, ganhe 1 uso adicional de uma característica de classe que normalmente é atualizado quando você completa um descanso curto ou longo. Você não pode mudar o recurso que este talento beneficia.",
  },
  {
    key: "jutsu-medico",
    nome: "Jutsu Médico",
    categoria: "chakra",
    preRequisito: "Proficiência em Medicina e Controle de Chakra.",
    descricao: "Você aprende a moldar chakra de maneiras condizentes com um Medical-Nin bonificado. Você ganha os seguintes benefícios:\n- Aumenta sua pontuação de Inteligência em 1, até um máximo de 20.\n- Agora você pode adicionar jutsu com a palavra-chave Medical.\n- Você aprende um jutsu com a palavra-chave Medical.\n- Ao longo de um descanso longo, você pode remover qualquer condição ou doença de Rank C ou inferior, que esteja afetando você ou um único aliado que você possa alcançar durante o descanso longo. No final do descanso, eles são curados da doença ou condição, ganham os benefícios de um descanso longo e ganham resistência à doença ou condição até o próximo descanso.",
  },
  {
    // NOTE: o original usa "Índice de Inteligência" (em vez do usual "pontuação de Inteligência"); mantido literal.
    key: "natureza-de-chakra",
    nome: "Natureza de Chakra",
    categoria: "chakra",
    descricao: "Você aprende como moldar o chakra em um dos 5 Elementos, você ganha os seguintes benefícios:\n- Aumente seu Índice de Inteligência em 1, até um máximo de 20.\n- Você seleciona um dos 5 seguintes lançamentos da natureza. Fogo, Água, Relâmpago, Vento, Terra.\n- Você agora é capaz para adicionar jutsu com a palavra-chave correspondente a sua lista de jutsus.\n- Você aprende um jutsu com a Natureza correspondente ao estilo que você selecionou, para a qual você se qualifica.\n- Você pode escolher esse talento mais de uma vez, selecionando uma natureza diferente.",
  },
  {
    key: "eficiencia-de-chakra-simplificada",
    nome: "Eficiência de Chakra Simplificada",
    categoria: "chakra",
    descricao: "Sua rede de chakras é diferente da maioria das outras. Você pode ter o dobro dos resultados da sua rede com metade do esforço concedendo-lhe os seguintes benefícios:\n- Aumente seu valor de Constituição em 1, até um máximo de 20.\n- Selecione uma categoria de Jutsu entre Ninjutsu, Genjutsu, Taijutsu ou Bukijutsu. O custo para manter a concentração de um jutsu do tipo escolhido, é reduzido em 1, para um mínimo de 1.\n- Quando você completaria com sucesso um breve descanso e gastar 3 ou mais dados de chakra, você recupera 1 dado de chakra na conclusão de calcular quanto chakra você recupera.\n- Você ganha RD (redução de dano) versus dano de Chakra, igual ao seu bônus de proficiência.\n- Efeitos hostis que aumentariam o custo base do jutsu você conjura têm seus efeitos reduzidos pela metade. Isso não conta a condição selada. (Ex. Se um efeito hostil aumentar a base custo de um Jutsu que você conjurou em 4, em vez disso, ele só aumenta em 2.)",
  },
  {
    key: "resistente-a-selamento",
    nome: "Resistente a Selamento",
    categoria: "chakra",
    preRequisito: "Proficiência em Controle de Chakra, Nível 8+",
    descricao: "Seu chakra é resistente aos efeitos da maioria das tentativas de selamentos. Você ganha os seguintes benefícios:\n- Aumente seu valor de Constituição ou Carisma em 1, para um máximo de 20.\n- Você ganha um bônus de +2 em testes de resistência de Carisma contra jutsus com a palavra-chave Fuinjutsu.\n- Você faz testes para remover a condição Selado com vantagem.\n- Se um jutsu, efeito, característica ou tentar remover sua habilidade de moldar chakra sem um teste de resistência, você em vez disso, faz um teste de resistência de constituição contra a CD de jutsu do oponente. Se o efeito não foi causado por um jutsu, você em vez disso, faça um teste de resistência de constituição CD 20, mantendo sua capacidade de moldar o chakra em um sucesso.",
  },
];
