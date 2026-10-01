import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Shikigami — Estudos da Tsunade, cap. Shikigami
 * ("Jutsu Do Clã Shikigami"). Tema de papel (estilo Konan). `natureza` fica
 * de fora na maioria das entradas (dano cortante/perfurante/necrótico não
 * é elemental); "Armadilha de Papel" é exceção, marcada "fogo" por causar
 * dano de Fogo fixo. O livro não traz um Hijutsu de Rank S para este clã.
 *
 * Nota: "Chuva de Papel" tem um campo "Posição:Rank D" no texto-fonte, mas
 * está listada na seção "RANK C" e sua escala de nível referencia "acima
 * de C" — tratada como Rank C (match com a seção e a escala), e o campo
 * "Posição" tratado como erro de digitação/cópia da fonte. A descrição de
 * "Servo do Origami" corta no meio de uma frase sobre dano ao corpo do
 * conjurador durante a projeção — sinalizado inline em vez de inventado.
 */
export const jutsuShikigami: JutsuDefinition[] = [
  // Rank D
  {
    key: "shikigami-shuriken-de-papel",
    nome: "Shuriken de Papel",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["SC"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "shikigami",
    descricao:
      "Você cria 3 shurikens afiadas como lâminas a partir de papel e as guia com seu Chakra. Realize um ataque de ninjutsu à distância para cada shuriken que criar — você pode atacar um único alvo ou vários. Ao atingir, você causa 1d4+1 de dano Cortante. O dano deste jutsu ignora Redução de Dano (RD) que não seja obtida a partir de jutsu. Uma criatura ganha 1 grau de Sangramento para cada shuriken que causar dano a ela.\n\nEnquanto estiver sob os efeitos de Dança do Shikigami, você pode optar por lançar este jutsu como uma ação bônus.",
    emNiveisSuperiores:
      "Para cada nível acima do Rank D em que você lançar este jutsu, aumente o custo em 3 e crie duas shurikens adicionais.",
  },
  {
    key: "shikigami-substituicao-de-papel",
    nome: "Substituição de Papel",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Reação, quando você é alvo ou receberia dano de um ataque",
    alcance: "Próprio",
    duracao: "1 rodada",
    componentes: ["SM", "SC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "shikigami",
    descricao:
      "Você transforma seu corpo em um monte de pequenos quadrados de papel que, com o impacto, se espalham, anulando uma quantidade significativa de dano. Você ganha +5 de bônus na CA e resistência a dano de arma branca, perfurante e cortante até o início de seu próximo turno.\n\nEnquanto estiver recebendo os benefícios do Hijutsu Dança do Shikigami, você ganha imunidade a dano de arma branca, perfurante e cortante.",
  },
  {
    key: "shikigami-etiqueta-de-rastreamento",
    nome: "Etiqueta de Rastreamento",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "24 horas",
    componentes: ["SC"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Sensorial"],
    cla: "shikigami",
    descricao:
      "Você coloca uma etiqueta de papel com sua assinatura de Chakra em um alvo, que muda de cor para se misturar com sua pele ou vestimenta. Você pode detectar a localização geral dessa etiqueta a até 1 quilômetro de distância; quando estiver a menos de 150 metros, pode detectar sua localização exata.",
  },
  {
    key: "shikigami-armadilha-de-papel",
    nome: "Armadilha de Papel",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "fogo",
    tempoConjuracao: "10 minutos",
    alcance: "Próprio",
    duracao: "Até ser acionada ou dissipada",
    componentes: ["SC"],
    custoChakra: 0,
    custoChakraTexto: "Especial (5 Chakra ao ativar, não ao criar)",
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "shikigami",
    descricao:
      "Você pega um selo de Chakra e o infunde com seu Chakra, tornando-o muito semelhante a uma etiqueta de violação. Cada vez que você lançar esse jutsu, cria duas dessas etiquetas. Essas etiquetas devem ser preparadas e colocadas em uma superfície sólida, e só podem ser ativadas como uma reação. Cada armadilha leva 10 minutos para ser preparada e montada.\n\nVocê não gasta Chakra para fazer essa armadilha de papel; em vez disso, é necessário gastar 5 de Chakra para ativá-la. Para cada armadilha que ativar, você deve gastar 5 de Chakra.\n\nTodas as criaturas em um raio de 9 metros da armadilha quando detonada devem fazer um teste de resistência de Destreza, sofrendo 4d6 de dano de Fogo em caso de falha. Uma criatura que falhar nesse teste sofre uma penalidade de -2 em cada teste de resistência subsequente que fizer contra outras armadilhas de papel (essa penalidade se acumula). Uma criatura pode ser afetada por até 10 armadilhas de papel ao mesmo tempo.",
  },
  // Rank C
  {
    key: "shikigami-chuva-de-papel",
    nome: "Chuva de Papel",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "27 metros (cubo de 9 metros)",
    duracao: "Instantâneo",
    componentes: ["SC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "shikigami",
    descricao:
      "Você forma brevemente um par de asas de papel, que fazem chover senbon de papel em uma área de sua escolha que você possa ver dentro do alcance. Cada criatura na área alvo deve fazer um teste de resistência de Destreza, sofrendo 4d10 de dano Perfurante em uma falha, ou metade em um sucesso.\n\nEnquanto estiver sob os efeitos de Dança do Shikigami, você pode escolher afetar somente criaturas hostis dentro da área de efeito, e aumentar a área do jutsu para um cubo de 15 metros.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo em 3 e o dano em 2d10.",
  },
  {
    key: "shikigami-servo-do-origami",
    nome: "Servo do Origami",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "150 metros",
    duracao: "1 hora",
    componentes: ["SC"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Sensorial"],
    cla: "shikigami",
    descricao:
      "Você usa origami para criar um animal de papel, como um pássaro ou uma borboleta, e o envia para coletar informações. O origami que você cria é um objeto minúsculo com uma velocidade de voo de 18 metros e um bônus de furtividade igual à sua CD de resistência de Ninjutsu.\n\nEnquanto este jutsu estiver ativo, você pode gastar uma ação para ver e ouvir como se estivesse no mesmo local que seu origami. Enquanto estiver fazendo isso, seu corpo fica Incapacitado e alheio ao seu entorno. [nota: a fonte corta aqui — a frase sobre o que acontece se seu corpo sofrer dano enquanto nesse estado está incompleta na extração original.]",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo em 3, o alcance que seu origami pode percorrer em 75 metros, e o bônus de furtividade em +2. Se este jutsu for lançado no Rank B, aumente a duração para 8 horas; no Rank A, para 24 horas.",
  },
  {
    key: "shikigami-clone-de-papel",
    nome: "Clone de Papel",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Concentração, até 1 hora",
    componentes: ["SC"],
    custoChakra: 8,
    custoChakraTexto: "Especial (8 Chakra por clone, até 2 clones)",
    palavrasChave: ["Hijutsu", "Ninjutsu", "Clone"],
    cla: "shikigami",
    descricao:
      "Você conjura um clone feito de papel, semelhante à Técnica do Clone das Sombras, mas mais durável, em um espaço que ele pode ocupar em um raio de 3 metros de você — conhecido como Clone de Papel. Os clones de papel são feitos de papel e pesam 1/10 do peso do lançador. Você pode criar até 2 Clones de Papel, cada um custando 8 de Chakra. Os Clones de Papel têm imunidade a dano de arma branca, perfurante e cortante, e vulnerabilidade a dano de Fogo; podem lançar até dois Hijutsu do Clã Shikigami de Rank C ou inferior antes que este jutsu termine. Os Clones de Papel criados com este jutsu não podem criar seus próprios clones, nem se concentrar em jutsu.\n\nSe um Clone de Papel lançar um jutsu que exija mais de um ataque ao ser lançado, ele fará apenas um ataque. Se vários clones atacarem a mesma criatura, você não faz vários rolamentos de ataque — em vez disso, escolhe um clone principal, que ganha um bônus de +1d4 em suas rolagens de dano para cada clone adicional que estiver ajudando.\n\nOs Clones de Papel podem mudar de cor para se misturar a qualquer superfície como uma ação; quando isso acontece, podem fazer uma verificação de furtividade usando Ninshou ou Furtividade, o que for maior. Os Clones de Papel se dissipam automaticamente se entrarem em um corpo de água. Eles podem fazer um ataque com sua ação — se o fizerem, causam 1d8 de dano Cortante.",
  },
  // Rank B
  {
    key: "shikigami-chakram-de-papel",
    nome: "Chakram de Papel",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "1,5 metro (36 metros)",
    duracao: "1 minuto",
    componentes: ["SC"],
    custoChakra: 10,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "shikigami",
    descricao:
      "Você cria um chakram incrivelmente afiado de papel, que comanda mentalmente para atacar os oponentes repetidamente durante toda a duração, ou até que você descarte este jutsu. Quando você lança este jutsu, o chakram aparece em um raio de 1,5 metro de você, e você pode mover o chakram até 9 metros e fazer um ataque contra um alvo em um raio de 1,5 metro do chakram. Em caso de acerto, o alvo sofre dano Cortante igual a 6d6 + seu modificador de Habilidade de Ninjutsu. O chakram tem uma faixa de ameaça crítica de 19 a 20; em um acerto crítico, o alvo também ganha 4 graus de Sangramento.\n\nComo uma ação bônus em cada um de seus turnos, você pode mover o chakram até 9 metros e repetir o ataque contra um alvo em um raio de 1,5 metro.\n\nEnquanto estiver sob os efeitos de Dança do Shikigami, ao mover o chakram você pode fazer com que ele ataque cada criatura que passar durante o movimento. Uma criatura só pode ser alvo do chakram uma vez por turno.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank B, aumente o custo em 3, o dano em 1d6 e a faixa de ameaça crítica em 1.",
  },
  {
    key: "shikigami-caixao-de-papel",
    nome: "Caixão de Papel",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "24 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "shikigami",
    descricao:
      "Você cobre um alvo com folhas de papel, restringindo seus movimentos e tapando seu nariz e boca, sufocando-o. Você não precisa pagar Chakra para manter a concentração neste jutsu. Uma criatura alvo que você possa ver dentro do alcance deve fazer um teste de resistência de Destreza ou será coberta por inúmeras folhas de papel. Se for bem-sucedida, ela evita o papel, encerrando o jutsu.\n\nEnquanto estiver presa pelo papel, a criatura fica Restrita, incapaz de lançar jutsu que exijam Selos de Mão (SM), sacar ou guardar armas, ou fazer movimentos corporais complexos como um ataque com arma. Ela também começa a sufocar: no início de cada um de seus turnos, recebe 5d6+15 de dano Necrótico que não pode ser reduzido por nenhum meio (uma criatura que não precisa respirar não pode receber dano desse jutsu). Durante esse tempo, a criatura não pode falar, mas você pode permitir que ela o faça, interrompendo o sufocamento por uma rodada. No final do turno da criatura, ela pode fazer um teste de resistência, libertando-se do papel em caso de sucesso.\n\nUma criatura pode tentar destruir o caixão de papel que você criou. Esse Sokushinbutsu tem CA igual à sua CD de resistência de Ninjutsu, 25 pontos de vida e vulnerabilidade a dano de Fogo. Se os pontos de vida do Sokushinbutsu forem reduzidos a 0, este jutsu termina.",
  },
  // Rank A
  {
    key: "shikigami-danca-do-shikigami",
    nome: "Dança do Shikigami",
    tipo: "ninjutsu",
    rank: "A",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Concentração, até 10 minutos",
    componentes: ["SC"],
    custoChakra: 18,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "shikigami",
    descricao:
      "Com sua maestria em papel, você se transforma em um anjo de papel, com um corpo intocável por armas comuns e a habilidade de voar. Até que este jutsu termine, você ganha os seguintes benefícios:\n\nResistência: você ganha resistência a dano Contundente, Perfurante e Cortante.\nVelocidade de Voo: você ganha uma velocidade de voo de 18 metros.\n\nVocê pode usar sua ação bônus para selecionar um espaço que possa ver a até 18 metros de distância. Todas as criaturas em um cubo de 4,5 metros centrado nesse espaço devem fazer um teste de resistência de Destreza. Em uma falha, as criaturas sofrem 6d8 de dano Perfurante e ganham a condição Lacerado, ou metade desse dano em um sucesso. Você tem vantagem em testes para manter a concentração neste jutsu.",
  },
];
