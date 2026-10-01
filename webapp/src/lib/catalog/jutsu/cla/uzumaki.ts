import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Uzumaki — Estudos da Tsunade, cap. Uzumaki
 * ("Jutsu Do Clã Uzumaki"). Correntes de chakra e Fuinjutsu (selos).
 * `natureza` fica de fora na maioria das entradas (Fuinjutsu não é um
 * estilo elemental); "Arte Uzumaki: Fonte da Vida" é a exceção, marcada
 * "medico" por ter a palavra-chave Médico no texto-fonte. O livro não
 * traz um Hijutsu de Rank S para este clã.
 */
export const jutsuUzumaki: JutsuDefinition[] = [
  // Rank D
  {
    key: "uzumaki-correntes-de-ataque-adamantinas",
    nome: "Correntes de Ataque Adamantinas",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Fuinjutsu", "Ninjutsu"],
    cla: "uzumaki",
    descricao:
      "Você inscreve um selo de Chakra na palma da mão e manifesta uma grande corrente baseada em Chakra a partir de um local de sua escolha em seu corpo. Faça um ataque de ninjutsu contra uma criatura que você possa ver dentro do alcance, enquanto sua corrente de Chakra se choca contra ela, causando 3d6 de dano de Força, e o alvo deve fazer um teste de resistência de Constituição. Se falhar, o custo do próximo jutsu que ele lançar aumenta em 1d6.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3, o dano em 2d6, e o aumento no custo do próximo jutsu em 1d6.",
  },
  {
    key: "uzumaki-arte-uzumaki-selo-basico",
    nome: "Arte Uzumaki: Selo Básico",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "1 minuto",
    componentes: ["SM", "MC", "SC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Fuinjutsu", "Ninjutsu"],
    cla: "uzumaki",
    descricao:
      "Você inscreve um selo de Chakra na palma da mão e cria uma formação de selo de três pontas, tentando selar uma grande parte do Chakra de uma criatura alvo ao bater o selo nela por um tempo limitado. Faça um ataque de ninjutsu corpo a corpo. Se for atingido, o alvo é infundido com três nós de selo. Sempre que a criatura alvo tentar lançar um Ninjutsu ou Genjutsu, todos os nós de selo restantes são ativados e aumentam o custo do jutsu lançado em +2 para cada selo restante; em seguida, ela faz um teste de resistência de Carisma. Se for bem-sucedida, ela quebra um dos nós de selamento colocados. Após 1 minuto, ou quando todos os três selos forem rompidos, esse jutsu termina.\n\nAlém disso, a criatura selada faz os testes de Constituição (Controle de Chakra) com desvantagem.",
  },
  {
    key: "uzumaki-arte-uzumaki-fonte-da-vida",
    nome: "Arte Uzumaki: Fonte da Vida",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "medico",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "Instantâneo",
    componentes: ["MC"],
    custoChakra: 0,
    custoChakraTexto: "Especial (gasta todo o Chakra restante)",
    palavrasChave: ["Hijutsu", "Médico", "Ninjutsu"],
    cla: "uzumaki",
    descricao:
      "Você sacrifica seu sangue, Chakra e essência para curar os ferimentos de um aliado. Uma criatura disposta, que não seja você, pode mordê-lo, causando 1 de dano Perfurante que não pode ser reduzido de forma alguma. Quando ela faz isso, você gasta Chakra até esgotar seu Chakra restante; para cada dado de Chakra gasto, o alvo recupera pontos de vida iguais ao resultado desse dado + seu modificador de Constituição.",
  },
  {
    key: "uzumaki-arte-uzumaki-ancora-de-flash",
    nome: "Arte Uzumaki: Âncora de Flash",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao:
      "1 Reação, quando você recebe dano ou faz um teste de resistência ou verificação de habilidade que o moveria por qualquer meio",
    alcance: "Próprio",
    duracao: "1 rodada",
    componentes: ["MC", "SC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Fuinjutsu"],
    cla: "uzumaki",
    descricao:
      "Você rapidamente implanta selos de Chakra ao seu redor para criar uma barreira defensiva imóvel. Até o início do seu próximo turno, você não pode ser movido por nenhum meio. Além disso, você ganha um bônus na sua CA igual ao seu modificador de Habilidade de Ninjutsu até o início do seu próximo turno.",
  },
  // Rank C
  {
    key: "uzumaki-barreira-adamantina",
    nome: "Barreira Adamantina",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Concentração, até 10 minutos",
    componentes: ["SM", "MC", "SC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Fuinjutsu", "Ninjutsu"],
    cla: "uzumaki",
    descricao:
      "Você habilmente tece uma rede, criando uma barreira inexpugnável usando suas correntes de selamento adamantinas. A barreira aparece em um ponto que você pode ver dentro do alcance — flutuando livremente ou apoiada em uma superfície sólida — na forma de uma esfera com 4,5 metros de raio, que dura pela duração.\n\nSe a esfera cortar o espaço de uma criatura ao aparecer, essa criatura é empurrada para um dos lados da barreira (à sua escolha). Se uma criatura hostil tentar se mover através da barreira sem a permissão do conjurador, ela deve fazer um teste de resistência de Carisma; em uma falha, não pode atravessar a barreira pelo resto do turno, e em um sucesso, não é mais afetada por este jutsu pelo resto de sua duração.\n\nAlém disso, durante a duração, qualquer criatura fora da barreira que tenha como alvo uma criatura dentro dela com um ataque ou jutsu deve fazer um teste de resistência de Carisma. Em uma falha, a criatura deve escolher um novo alvo fora da barreira ou perder o ataque ou jutsu (a área de efeito ainda pode atravessar a barreira como se ela não estivesse lá); em um sucesso, não é mais afetada por este jutsu pelo resto de sua duração.",
    emNiveisSuperiores:
      "Para cada nível que você conjurar este jutsu acima do Rank C, aumente o custo deste jutsu em 3 e o tamanho da barreira em 1,5 metro.",
  },
  {
    key: "uzumaki-cadeias-de-ligacao-de-adamantina",
    nome: "Cadeias de Ligação de Adamantina",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Fuinjutsu"],
    cla: "uzumaki",
    descricao:
      "Seu corpo produz 4 grandes correntes baseadas em Chakra a partir das suas costas, que você controla como se fossem extensões do seu corpo — elas agem sob seu comando, todas ao mesmo tempo, tendo como alvo a mesma criatura. Como uma ação bônus no seu turno, você pode fazer as correntes de Chakra agirem usando uma das seguintes habilidades:\n\nChicote: faça um ataque de ninjutsu à distância contra uma criatura alvo, causando 4d10 de dano de Chakra em um acerto.\nAmarrar: selecione uma criatura que você possa ver dentro do alcance. A criatura alvo deve fazer um teste de resistência de Força. Em uma falha, ela fica Restrita; uma criatura pode refazer o teste de resistência para encerrar esse efeito como uma ação.",
    emNiveisSuperiores:
      "Para cada rank que você conjurar este jutsu acima do Rank C, aumente o custo deste jutsu em 3, o dano em 2d10 e o número de criaturas que você pode alvejar com Amarrar em +1.",
  },
  {
    key: "uzumaki-arte-uzumaki-selo-de-5-pontas",
    nome: "Arte Uzumaki: Selo de 5 Pontas",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "Até 1 semana",
    componentes: ["SM", "MC", "SC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Fuinjutsu", "Ninjutsu"],
    cla: "uzumaki",
    descricao:
      "Uma versão avançada da Arte Uzumaki: Selo Básico, que usa dois selos de Chakra sobrepostos e reforçados com um selo de 5 pontas de sua escolha, feito para trancar o Chakra de criaturas poderosas. Faça um ataque de ninjutsu corpo a corpo contra uma criatura dentro do alcance. Se o ataque for bem-sucedido, o alvo é infundido com o selo de 5 pontas. Durante a duração, na primeira vez que a criatura afetada lançar um Ninjutsu ou Genjutsu a cada rodada, ela dobra o custo base do jutsu lançado. Além disso, ela tem desvantagem em testes de Controle de Chakra durante a duração.\n\nApós 1 semana, este jutsu termina imediatamente. A criatura pode tentar fazer um teste de Inteligência (Ninshou) contra sua CD de resistência de Ninjutsu, como uma Ação de Turno Completo em seu turno, para encerrar o efeito deste jutsu sobre ela.\n\nSe este jutsu estiver afetando atualmente uma criatura com graduações da condição Selado, qualquer teste de resistência ou de habilidade feito para remover graduações de Selado ou resistir a jutsu com a palavra-chave Fuinjutsu é feito com desvantagem.",
  },
  // Rank B
  {
    key: "uzumaki-teimosia-uzumaki",
    nome: "Teimosia Uzumaki",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Reação, quando você cairia a 0 pontos de vida",
    alcance: "Próprio",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 12,
    custoChakraTexto: "Especial (12 Chakra)",
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "uzumaki",
    descricao:
      "Sua determinação e reservas de Chakra são poderosas o suficiente para mantê-lo de pé, mesmo que seu corpo sofra ferimentos graves. Quando você cai para 0 pontos de vida ou menos, você pode, como reação, injetar Chakra por todo o seu corpo, forçando-se a sobreviver e caindo para 1 ponto de vida em vez disso.\n\nNo início do seu próximo turno, você ganha 1 grau de Enfraquecido pelo próximo minuto, pois o estresse de manter a consciência e lutar contra o trauma cobra seu preço.",
  },
  {
    key: "uzumaki-quebra-de-selo-uzumaki",
    nome: "Quebra de Selo Uzumaki",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros (cubo de 3 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC", "SC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Fuinjutsu", "Ninjutsu"],
    cla: "uzumaki",
    descricao:
      "Usando seu conhecimento de selos e Fuinjutsu, você tenta desmontar e quebrar cirurgicamente todos os jutsu que você vê dentro do alcance que estejam sendo mantidos ou ativos. Como parte da ativação deste jutsu, selecione um espaço que você possa ver dentro do alcance e faça um teste de habilidade de Ninjutsu contra uma CD (13 + nível do jutsu: Rank D = 1, Rank C = 2, Rank B = 3, Rank A = 4, Rank S = 5).\n\nEm caso de sucesso, você compreende o funcionamento interno de todos os jutsu ativos de rank igual ou inferior ao resultado dentro do alcance, e como quebrá-los, interrompendo imediatamente seus efeitos. Você decide quais jutsu deseja afetar ao lançar esse jutsu.",
  },
  // Rank A
  {
    key: "uzumaki-arte-uzumaki-selo-da-represa-do-rio",
    nome: "Arte Uzumaki: Selo da Represa do Rio",
    tipo: "ninjutsu",
    rank: "A",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "Permanente",
    componentes: ["SM", "MC", "SC"],
    custoChakra: 25,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Fuinjutsu"],
    cla: "uzumaki",
    descricao:
      "Como parte da ativação deste jutsu, o alvo deve ter pelo menos 5 graduações da condição Selado. Você gera um selo infame que cresce em tamanho até abranger um raio de até 18 metros, antes de se comprimir instantaneamente em um selo de 1 kanji que pode dizer ou significar qualquer coisa que você desejar.\n\nFaça um ataque de ninjutsu corpo a corpo contra o alvo. Em um acerto, o selo se enrola ao redor do alvo, distorcendo os selos nele em um selo novo e único, conhecido como Selo da Represa do Rio. Este selo hiperpoderoso faz com que o alvo perca todas as graduações da condição Selado, já que este efeito as substitui. Uma criatura com este selo sofre os seguintes efeitos:\n- É contada como tendo 5 graduações da condição Selado para fins de interação com características, traços e jutsu, e não pode ganhar graduações de Selado enquanto tiver o Selo da Represa do Rio.\n- Tem o custo de Chakra base de todos os jutsu, características e traços que custam Chakra aumentado em +15.\n- Sofre uma penalidade de -5 em todas as suas CDs de resistência de Ninjutsu e Genjutsu.\n\nUma criatura pode gastar uma Ação de Turno Completo para fazer um teste de Ninshou (CD 25) para remover esta condição.",
  },
];
