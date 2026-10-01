import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Iburi — Estudos da Tsunade, cap. Iburi
 * ("Jutsu Do Clã Iburi"). Fumaça (Smoke Release) combinada com Estilo
 * Fogo — mobilidade/defesa em forma de fumaça e ataques incendiários,
 * culminando no jutsu de possessão "Técnica de Oxidação Corporal" e no
 * mergulho explosivo "Queda Orbital". `natureza: "fogo"` nas entradas
 * cujo efeito principal é causar dano de Fogo diretamente (Explosão
 * Incinerante, Bomba de Enxofre, Campo de Cendra, Aegis de Fumaça,
 * Dragão de Fumaça, Varredura Queimante, Queda Orbital); fica de fora
 * nas entradas puramente defensivas/de buff (Substituição de Fumaça,
 * Dança da Chaminé, Forma de Fumaça) e na Técnica de Oxidação Corporal
 * (dano Necrótico, sem correspondência no enum). 11 Hijutsu no total —
 * distribuição 4/3/2/2 (D/C/B/A), com 2 Hijutsu de Rank A em vez do
 * 1 usual, e sem Rank S.
 *
 * Nota de inconsistência preservada (padrão já usado em vesper.ts): em
 * "Explosão Incinerante" (Rank D), o texto de escalonamento refere-se a
 * "acima de Rank C" em vez de "acima de Rank D" — mantido verbatim,
 * sem reconciliar com o rank base da entrada.
 */
export const jutsuIburi: JutsuDefinition[] = [
  // Rank D
  {
    key: "iburi-substituicao-de-fumaca",
    nome: "Substituição de Fumaça",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao:
      "1 Reação, que você realiza quando é alvo de um ataque ou sofreria dano de um ataque que o atinge",
    alcance: "Pessoal",
    duracao: "1 rodada",
    componentes: ["MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo"],
    cla: "iburi",
    descricao:
      "Você rapidamente transforma seu corpo em fumaça para evitar ser atingido por um ataque inimigo. Aumente sua CA em +5 contra o ataque que o atingiria, e para cada outro ataque do qual você for alvo, reduza a rolagem de ataque em 1d4, potencialmente fazendo o ataque errar. Para cada ataque que errar devido a este jutsu, você pode se mover para um espaço dentro de 3 metros de você como uma rajada de fumaça. Isso não provoca ataques de oportunidade.\n\nSe você estiver recebendo os benefícios do jutsu Forma de Fumaça, pode se mover até 4,5 metros quando um ataque errar você devido a este jutsu, e reduzir as rolagens de ataque consecutivas em 1d6+1.",
  },
  {
    key: "iburi-danca-da-chamine",
    nome: "Dança da Chaminé",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Pessoal",
    duracao: "1 minuto",
    componentes: ["MC", "M"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo"],
    cla: "iburi",
    descricao:
      "Seus pés começam a liberar pequenas brasas que convertem o ar ao redor em fumaça, a qual você usa para impulsionar seu movimento. Durante a duração, sua velocidade de movimento aumenta em 3 metros e você ganha uma reação adicional por rodada. Essa reação só pode ser usada para realizar ataques de oportunidade.\n\nCriaturas provocam ataques de oportunidade se se moverem para dentro ou para fora de 3 metros de você. Se você acertar um ataque de oportunidade, causa 1d8+1 de dano de Fogo adicional.\n\nSe você estiver recebendo os benefícios do jutsu Forma de Fumaça, seus ataques de oportunidade são feitos com vantagem, e o dano extra aumenta para 1d10.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo em 3. Se lançado a Rank B ou superior, aumente o dano em 1d8+1, e você pode usar sua velocidade de movimento para voar e pairar. Se lançado a Rank S, aumente o dano em 1d8+1 e ganhe uma reação extra, que só pode ser usada para realizar um ataque de oportunidade.",
  },
  {
    key: "iburi-explosao-incinerante",
    nome: "Explosão Incinerante",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "fogo",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "Instantânea",
    componentes: ["MC", "M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Taijutsu", "Estilo Fogo"],
    cla: "iburi",
    descricao:
      "Seu corpo explode brevemente em fumaça, que irrompe em chamas. Você emite 6 metros de luz intensa e 3 metros de luz tênue a partir disso. Você transforma seu corpo em fumaça, movendo-se para um espaço dentro de 1,5 metro do alvo enquanto simultaneamente executa um uppercut flamejante. Faça um ataque de ninjutsu ou taijutsu corpo a corpo. Se acertar, você causa 1d8+1 de dano de Fogo e a criatura fica Queimada até o final de seu próximo turno.\n\nSe você acertar seu primeiro ataque, pode fazer um segundo ataque contra a mesma criatura ou outra dentro do alcance, enquanto se transforma em fumaça novamente, combinando-o com um chute giratório ou um chute lateral. Se acertar, você causa 1d8+1 de dano de Fogo e a criatura deve fazer um teste de resistência de Força contra sua CD de Resistência de Ninjutsu ou Taijutsu, o que for maior. Em uma falha, se você escolher o chute giratório, a criatura fica Prona; se escolher o chute lateral, ela é empurrada 4,5 metros para trás.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o dano em 1d8+1. Se lançado a Rank B, você pode realizar este jutsu como uma reação quando sofrer um ataque de oportunidade, como se tivesse lançado este jutsu a Rank C.",
  },
  {
    key: "iburi-bomba-de-enxofre",
    nome: "Bomba de Enxofre",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "fogo",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros (esfera de 4,5 metros)",
    duracao: "Instantânea",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo", "Conflito"],
    cla: "iburi",
    descricao:
      "Você gera uma grande quantidade de fumaça em sua mão e a lança a um espaço dentro de 18 metros, criando uma esfera de fumaça de 4,5 metros. Cada criatura dentro da esfera deve fazer um teste de resistência de Destreza, sofrendo 3d6+3 de dano de Fogo e caindo Prona em uma falha, ou metade do dano e nenhum efeito adicional em um sucesso.\n\nA fumaça criada por este jutsu persiste por 1 minuto, fazendo com que criaturas dentro dela fiquem Fortemente Obscurecidas enquanto estiverem lá dentro, embora você possa ver através da fumaça normalmente. Criaturas que terminarem seus turnos dentro dessa nuvem de fumaça sofrem 1d10+1 de dano Necrótico que não pode ser reduzido de nenhuma forma. Se a criatura permanecer na nuvem de fumaça durante todo o minuto, ela fica Inconsciente, incapaz de respirar.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo em 3 e o dano em 2d6. Se lançado a Rank B ou superior, você pode dispersar a fumaça restante como uma ação livre em seu turno; caso contrário, a fumaça agora dura 10 minutos.",
  },
  // Rank C
  {
    key: "iburi-campo-de-cendra",
    nome: "Campo de Cendra",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "fogo",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal (raio de 4,5 metros)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo"],
    cla: "iburi",
    descricao:
      "Você exala uma quantidade enorme de fumaça pela boca, criando um campo de gás pesado ao seu redor. Você não precisa gastar Chakra para se concentrar neste jutsu.\n\nDurante a duração, um raio de 4,5 metros de fumaça envolve você, obscurecendo levemente sua presença para criaturas que não conseguem ver através da fumaça aprimorada por chakra. Criaturas, exceto você, que entrarem ou começarem seu turno dentro do campo de fumaça sofrem 5 de dano de Fogo, mais 5 de dano de Fogo adicional para cada 1,5 metro que se moverem voluntariamente dentro deste raio, enquanto o ar que respiram queima seus pulmões. Esse dano não pode ser reduzido de nenhuma forma. Criaturas que possuem um aparelho respiratório não sofrem dano ao caminhar na área de efeito deste jutsu.\n\nAlém disso, quando você causa dano de Fogo a criaturas dentro deste raio, você causa um dado adicional de dano de Fogo, uma vez por turno, e ignora resistência a dano de Fogo.\n\nEste jutsu termina precocemente se você se mover mais de 27 metros de sua localização original.",
  },
  {
    key: "iburi-aegis-de-fumaca",
    nome: "Aegis de Fumaça",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "fogo",
    tempoConjuracao:
      "1 Reação, quando outra criatura que você poderia alcançar com sua velocidade de movimento seria atingida por um ataque ou falhasse em um teste de resistência de Força, Destreza ou Constituição",
    alcance: "Velocidade de Movimento",
    duracao: "Instantânea",
    componentes: ["MC", "M"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Taijutsu", "Estilo Fogo", "Conflito"],
    cla: "iburi",
    descricao:
      "Você vê um aliado dentro do alcance começar a sucumbir ao perigo e rapidamente se move para protegê-lo.\n\nEscolha uma criatura que você possa alcançar com seu movimento total. Você transforma seu corpo em fumaça e aparece no espaço onde seu aliado estava, sua forma de fumaça produzindo rajadas que empurram o aliado 1,5 metro para trás de você. Se este jutsu foi usado em resposta a uma rolagem de ataque, o ataque automaticamente atinge você, e você levanta os braços formando uma barreira de fumaça com 5d6 pontos de vida temporários. Se este jutsu foi usado em resposta a uma falha em um teste de resistência, a criatura que você protegeu não sofre os efeitos da falha, e você realiza o teste de resistência em vez dela com desvantagem, ganhando um bônus de +2 ao resultado do teste.\n\nSe você reduzir o dano do ataque a 0, ou tiver sucesso no teste de resistência, você imediatamente contra-ataca com um ataque de ninjutsu corpo a corpo, causando seu dano desarmado em dano de Fogo e empurrando a criatura 4,5 metros para trás se acertar.\n\nSe você estiver recebendo os benefícios do jutsu Forma de Fumaça, pode se mover até o dobro de sua velocidade de movimento para alcançar a criatura, sua barreira ganha 5d8 + seu modificador de Habilidade de Ninjutsu em pontos de vida temporários se foi um ataque, ou você ganha um bônus de +3 ao teste de resistência.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo em 3, os pontos de vida temporários ganhos em 1 dado, ou o bônus ao teste em +1 (escolha um).",
  },
  {
    key: "iburi-dragao-de-fumaca",
    nome: "Dragão de Fumaça",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "fogo",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal (linha de 27 metros)",
    duracao: "Instantânea",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo", "Conflito"],
    cla: "iburi",
    descricao:
      "Você emite uma grande quantidade de vapores e gases do seu corpo e produz uma grande construção em forma de dragão à sua frente. Você envia esse dragão em uma linha de 27 metros de comprimento e 1,5 metro de largura.\n\nTodas as criaturas dentro do alcance, à sua escolha, devem fazer um teste de resistência de Constituição, sofrendo 4d8+4 de dano de Fogo e ficando Atordoadas até o final de seu próximo turno em uma falha. Você pode controlar o comprimento desta linha.\n\nSe você estiver recebendo os benefícios do jutsu Forma de Fumaça, pode transformar todo o seu corpo em fumaça e viajar com o dragão sem gastar sua velocidade de movimento.\n\nAo terminar seu movimento, criaturas dentro de 3 metros de você provocam ataques de oportunidade.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo em 3 e o dano em 2d8+2. Se lançado a Rank A, aumente a largura da linha em 1,5 metro.",
  },
  // Rank B
  {
    key: "iburi-forma-de-fumaca",
    nome: "Forma de Fumaça",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo"],
    cla: "iburi",
    descricao:
      "Você transforma seu corpo e suas roupas em fumaça durante a duração deste jutsu. Você ainda parece praticamente o mesmo; no entanto, fumaça continua a emanar de seu corpo e a cair no chão abaixo de você, como um reservatório. Quando você se move, seu corpo rapidamente se transforma em fumaça.\n\nDurante a duração deste jutsu, você não provoca ataques de oportunidade ao se mover e pode passar por pequenas fendas e buracos, grandes o suficiente para que o ar passe. Você também é imune a dano de queda.\n\nSeus ataques com armas causam um dado adicional de dano de Fogo, uma vez por turno, e você ganha imunidade a dano de Fogo, mas vulnerabilidade a dano de Vento.\n\nSua Classe de Armadura aumenta em +1, e o custo dos Hijutsu do Clã Iburi que você lançar, além deste, é reduzido em 2 (mínimo 1).",
  },
  {
    key: "iburi-varredura-queimante",
    nome: "Varredura Queimante",
    tipo: "ninjutsu",
    rank: "B",
    natureza: "fogo",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal (cubo de 7,5 metros de comprimento, 19,5 metros de largura e 9 metros de altura)",
    duracao: "Instantânea",
    componentes: ["SM", "MC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo"],
    cla: "iburi",
    descricao:
      "Você corta agressivamente o ar à sua frente, criando duas grandes colunas à sua frente que geram uma grande rajada de vento e cinzas. Em seguida, você usa a fumaça para levitar no ar, criando mais duas colunas ao seu lado, formando um cubo de 7,5 metros de comprimento, 19,5 metros de largura e 9 metros de altura.\n\nCriaturas presas nas forças imensas de fumaça e vento dentro do alcance deste jutsu devem fazer um teste de resistência de Destreza, enquanto as colunas retornam aos seus braços e você expele a energia em direção a elas. Criaturas que não podem ser movidas realizam esse teste com vantagem.\n\nCriaturas que falharem no teste de resistência contra este jutsu sofrem 9d6+9 de dano de Fogo e ganham 1 grau de Queimado. Criaturas que falharem no teste por 5 ou mais têm o vento arrancado delas, reduzindo sua velocidade de movimento a 0 até o final de seu próximo turno.\n\nSe você estiver recebendo os benefícios do jutsu Forma de Fumaça, criaturas de tamanho Médio ou menor realizam o teste de resistência deste jutsu com desvantagem, e o dano aumenta um nível.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank B, aumente o custo em 3 e o dano em um nível de dado (1d6 < 1d8 < 1d10 < 1d12).",
  },
  // Rank A
  {
    key: "iburi-tecnica-de-oxidacao-corporal",
    nome: "Técnica de Oxidação Corporal",
    tipo: "ninjutsu",
    rank: "A",
    tempoConjuracao: "1 Ação Completa",
    alcance: "9 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 18,
    custoChakraTexto: "Especial (18 Chakra)",
    palavrasChave: ["Hijutsu", "Ninjutsu", "Fuinjutsu", "Estilo Fogo"],
    cla: "iburi",
    descricao:
      "Como parte dos requisitos para lançar este jutsu, você deve estar sob os efeitos do Hijutsu Forma de Fumaça. Este é o jutsu assinatura do Clã Iburi, no qual o usuário entra no corpo de uma criatura e toma controle de suas ações. Você não pode perder a concentração neste jutsu como resultado de sofrer dano.\n\nEscolha uma criatura dentro do alcance. Essa criatura deve fazer um teste de resistência de Carisma. Em uma falha, você entra no corpo dela, tornando-a Incapacitada e incapaz de se mover. Enquanto estiver no corpo de uma criatura, você sente todas as sensações que ela sente e não pode realizar ações ou reações, nem se concentrar em outros jutsu. Além disso, sempre que a criatura sofrer dano de uma fonte externa, você recebe metade do dano que ela sofreu como dano Necrótico.\n\nNo início de cada turno da criatura, ela repete o teste de resistência de Carisma, expulsando você de seu corpo em um sucesso, ou permanecendo Incapacitada e incapaz de se mover em uma falha. No início de cada um dos seus próprios turnos, você pode impor um teste de resistência de Constituição ou Inteligência à criatura. Após impor qualquer um dos testes, seu turno termina.\n\nTeste de Constituição: em uma falha, a criatura sofre 5d12 de dano Necrótico que ignora resistência, imunidade e pontos de vida temporários. A criatura também ganha 3 graus de Hemorragia Interna.\nTeste de Inteligência: em uma falha, você comanda a criatura a se mover e realizar 1 ação que ela poderia tomar, exceto uma habilidade de classe ou adversário. Quando este jutsu termina, você reaparece em um espaço dentro de 1,5 metro da criatura que estava possuindo, e seu jutsu Forma de Fumaça termina automaticamente.",
  },
  {
    key: "iburi-queda-orbital",
    nome: "Queda Orbital",
    tipo: "ninjutsu",
    rank: "A",
    natureza: "fogo",
    tempoConjuracao: "1 Ação",
    alcance: "Velocidade de Movimento (esfera de 36 metros)",
    duracao: "Instantânea",
    componentes: ["MC", "M"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo"],
    cla: "iburi",
    descricao:
      "Como parte dos requisitos para lançar este jutsu, você deve estar sob os efeitos do Hijutsu Forma de Fumaça. Você se move até sua velocidade de movimento para um espaço dentro do alcance e se lança para o alto com uma explosão de fumaça. Seu corpo se divide em 3 pilares de fumaça que sobem tangencialmente uns aos outros a 60 metros no ar. À medida que os pilares de fumaça sobem, eles pegam fogo pela fricção com o ar. Esses pilares se fundem e se reformam em seu corpo, e você começa a descer em direção à terra como um míssil.\n\nAo atingir o chão, você cria uma explosão massiva, aniquilando criaturas dentro de uma esfera de 36 metros. Cada criatura dentro do alcance deve fazer um teste de resistência de Destreza, sofrendo 10d10+10 de dano de Fogo, ganhando 3 graus de Queimado e ficando Cega até o final de seu próximo turno em uma falha. Em um sucesso, as criaturas sofrem metade do dano e ganham apenas 1 grau de Queimado. Se uma criatura já tiver algum grau de Queimado antes de ser afetada por este jutsu, este jutsu ignora quaisquer resistências e imunidades a dano de Fogo que ela possua.\n\nA área afetada por este jutsu se torna permanentemente terreno difícil, e, ao concluir este jutsu, seu jutsu Forma de Fumaça termina automaticamente.",
  },
];
