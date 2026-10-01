import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Jūgo — Estudos da Tsunade, cap. Jūgo ("Jutsu Do
 * Clã Jugo"). Tema de "Chakra Bruto" (transformação parcial/total), com
 * vários Hijutsu tendo um bônus extra quando conjurados em "Forma de
 * Chakra Bruto". Dano de Força não tem correspondente em JutsuNatureza
 * (não é elemental), então `natureza` fica de fora em todas as entradas.
 * Este clã tem 3 (não 2) Hijutsu de Rank B e nenhum de Rank S.
 */
export const jutsuJugo: JutsuDefinition[] = [
  // Rank D
  {
    key: "jugo-disparo-erroneo",
    nome: "Disparo Errôneo",
    tipo: "taijutsu",
    rank: "D",
    tempoConjuracao: "Especial",
    alcance: "Toque",
    duracao: "Instantâneo",
    componentes: ["M", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Taijutsu"],
    cla: "jugo",
    descricao:
      "Após errar um golpe desarmado ou uma rolagem de ataque de Taijutsu, você rapidamente corrige seu erro, usando um jato em uma de suas pernas ou braços para impulsionar um ataque à frente. Faça um ataque de Taijutsu, causando seu Dano Desarmado como dano de Força. Você só pode usar este jutsu uma vez por turno.",
    emNiveisSuperiores:
      "Para cada nível acima do Rank D em que você lançar este jutsu, aumente o custo em 3 e o dano em 1 dado de dano.",
  },
  {
    key: "jugo-canhao-de-chakra",
    nome: "Canhão de Chakra",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "27 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "jugo",
    descricao:
      "Transformando um dos seus braços em um canhão, você dispara um feixe de Chakra bruto. Faça um ataque de ninjutsu à distância. Em caso de acerto, você causa 2d10 de dano de Força.\n\nForma de Chakra Bruto: se você conjurar este jutsu enquanto estiver na Forma de Chakra Bruto, adicione metade do seu modificador de Constituição ao dano.",
    emNiveisSuperiores:
      "Para cada rank acima do Rank D que você conjurar este jutsu, aumente o custo em 3 e o dano em 2d10.",
  },
  {
    key: "jugo-transferencia-de-chakra-bruto",
    nome: "Transferência de Chakra Bruto",
    tipo: "taijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação de Turno Completo",
    alcance: "Toque",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 0,
    custoChakraTexto: "Especial (gasta Dados de Chakra Bruto)",
    palavrasChave: ["Hijutsu", "Taijutsu"],
    cla: "jugo",
    descricao:
      "Estendendo a mão, você converte seu Chakra Bruto para outra criatura, permitindo que ela se beneficie de suas habilidades. Gaste um número de Dados de Chakra Bruto; a criatura recebe essa quantidade de Dados de Chakra Bruto e pode gastá-los nas funções Amplificar ou Reduzir nas seguintes palavras-chave: Taijutsu, Bukijutsu ou Hijutsu.",
  },
  {
    key: "jugo-punhos-furiosos",
    nome: "Punhos Furiosos",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "jugo",
    descricao:
      "Você faz crescer propulsores nas costas dos seus cotovelos ou tornozelos, aprimorando seus ataques desarmados com o poder de jatos de Chakra. Durante a duração, ataques desarmados, corpo a corpo com armas, ataques de Taijutsu corpo a corpo ou ataques de agarrão que você fizer causam um adicional de 1d8 de dano de Força, até três vezes por turno.\n\nForma de Chakra Bruto: quando você estiver em sua Forma de Chakra Bruto e se beneficiando deste jutsu, você não gasta Chakra para mantê-lo.",
    emNiveisSuperiores:
      "Para cada rank acima do Rank D que você conjurar este jutsu, aumente o custo em 3. Se este jutsu for conjurado no Rank B ou superior, aumente o dano em 1d8 e as criaturas atingidas ganham 1 nível de Machucado, uma vez por criatura por rodada. Se este jutsu for conjurado no Rank S, você ignora resistência a dano Contundente e trata imunidade como resistência.",
  },
  // Rank C
  {
    key: "jugo-jatos-de-fogo-infernal",
    nome: "Jatos de Fogo Infernal",
    tipo: "taijutsu",
    rank: "C",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "Concentração, até 10 minutos",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Taijutsu"],
    cla: "jugo",
    descricao:
      "Você cria vários túneis de Chakra em suas costas, que liberam Chakra bruto para se impulsionar. Durante a duração deste jutsu, sua velocidade é aumentada em 6 metros.\n\nAlém disso, todos os ataques de oportunidade feitos contra você são feitos com desvantagem. Sua distância de salto é quadruplicada e, embora não possa voar, você pode se mover em qualquer direção que desejar enquanto estiver caindo. Você ignora os primeiros 18 metros de dano de queda, começando a receber apenas o primeiro incremento de dano de queda depois disso.\n\nAlém disso, quando você pular, pode optar por não cair até o final de seu próximo turno.",
  },
  {
    key: "jugo-canhao-de-chakra-overdrive",
    nome: "Canhão de Chakra: Overdrive",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (linha de 9 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "jugo",
    descricao:
      "O uso do seu Canhão de Chakra se expandiu, permitindo que você o utilize de maneiras mais versáteis. Este jutsu tem duas alternativas de conjuração:\n\nComo uma ação: você pode disparar uma linha de energia de 18 metros a partir do seu braço, causando 5d8 de dano de Força a todas as criaturas dentro do alcance. Cada criatura na área deve fazer um teste de resistência de Destreza para reduzir o dano pela metade.\n\nComo parte de um ataque corpo a corpo, ataque de taijutsu ou ataque de bukijutsu: você pode, em vez disso, conjurar este jutsu, que se torna o Hijutsu de Rank D Canhão de Chakra. Se o ataque que você está substituindo possuir benefícios para a jogada de ataque, você os recebe; no entanto, não recebe bônus de dano do ataque que está substituindo.\n\nForma de Chakra Bruto: se você conjurar este jutsu enquanto estiver na sua Forma de Chakra Bruto, adicione metade do seu modificador de Constituição ao dano da linha de 18 metros.",
    emNiveisSuperiores:
      "Para cada rank acima do Rank C que você conjurar este jutsu, aumente o custo em 3 e o dano do efeito em linha em 2d8.",
  },
  {
    key: "jugo-protetor-de-brilho-de-ferro",
    nome: "Protetor de Brilho de Ferro",
    tipo: "taijutsu",
    rank: "C",
    tempoConjuracao: "1 Reação, quando você é alvo de um ataque ou faz um teste de resistência de Destreza que causaria dano",
    alcance: "Próprio",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 6,
    palavrasChave: ["Hijutsu", "Taijutsu"],
    cla: "jugo",
    descricao:
      "Você forma um escudo com seu corpo, usando um de seus braços para bloquear um ataque. Sua CA aumenta em +4 pela duração, e o escudo tem 25 pontos de vida que o inimigo deve quebrar primeiro para causar dano a você. O escudo não pode bloquear ataques de Genjutsu.\n\nSe você precisar fazer um teste de resistência de Destreza que reduza o efeito com um sucesso (como reduzir o dano pela metade), você pode, em vez disso, fazer um teste de resistência de Força; em caso de sucesso, seu escudo reduz o dano da habilidade em 5.\n\nForma de Chakra Bruto: se você conjurar este jutsu enquanto estiver na sua Forma de Chakra Bruto, adicione seu modificador de Força aos pontos de vida do escudo.",
    emNiveisSuperiores:
      "Para cada rank acima do Rank C que você conjurar este jutsu, aumente os pontos de vida do escudo em 10.",
  },
  // Rank B
  {
    key: "jugo-barragem-de-propulsao-a-jato",
    nome: "Barragem de Propulsão a Jato",
    tipo: "taijutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "Instantâneo",
    componentes: ["M", "MC"],
    custoChakra: 15,
    palavrasChave: ["Hijutsu", "Taijutsu"],
    cla: "jugo",
    descricao:
      "Uma versão aprimorada do Taijutsu 'Soco Metralhadora', onde você realiza múltiplos ataques incrivelmente rápidos e poderosos. Faça um número de ataques de Taijutsu corpo a corpo igual ao seu bônus de proficiência, causando seu Dado de Dano Desarmado + 2d6 de dano de Força.\n\nForma de Chakra Bruto: se você conjurar este jutsu enquanto estiver na sua Forma de Chakra Bruto, você não pode ter desvantagem nas jogadas de ataque.",
  },
  {
    key: "jugo-reflexao-do-raio-de-dobra",
    nome: "Reflexão do Raio de Dobra",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Reação, que você obtém quando uma criatura o atinge com uma rolagem de ataque de ninjutsu",
    alcance: "Toque",
    duracao: "Instantâneo",
    componentes: ["M", "MC"],
    custoChakra: 13,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "jugo",
    descricao:
      "Apontando canhões para fora de seu peito, você tenta produzir poder de fogo suficiente para refletir um ataque. Quando uma criatura faz um ataque de ninjutsu em sua direção, ao lançar esse jutsu, você pode empurrá-lo de volta.\n\nFaça uma rolagem de ataque de ninjutsu. Se sua rolagem de ataque for maior do que a da criatura, você não é atingido pelo ataque — em vez disso, você o envia de volta para ela. O ataque refletido causa o dano total que teria, além de quaisquer outros efeitos que o jutsu refletido causaria. Você deve lançar esse jutsu antes que a criatura faça sua rolagem de ataque.",
  },
  {
    key: "jugo-floresta-reforcada",
    nome: "Floresta Reforçada",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 13,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "jugo",
    descricao:
      "Endurecendo Chakra bruto sobre seu corpo, você cria escamas espessas. Durante a duração, sua CA aumenta em +1 e, quando você sofreria dano não Psíquico, reduza-o em 6. Se estiver usando armadura média, reduza o dano não Psíquico em 4 em vez disso; se estiver usando armadura pesada, reduza em 2.\n\nEnquanto se beneficia deste jutsu, você tem vantagem em testes de resistência de Constituição.\n\nForma de Chakra Bruto: quando você estiver em sua Forma de Chakra Bruto e se beneficiando deste jutsu, não gasta Chakra para mantê-lo.",
    emNiveisSuperiores:
      "Para cada rank acima do Rank B que você conjurar este jutsu, aumente o custo em 3 e a redução de dano em 3. Se estiver usando armadura média, aumente em 2; se estiver usando armadura pesada, aumente em 1.",
  },
  // Rank A
  {
    key: "jugo-canhao-de-dobra-de-obliteracao",
    nome: "Canhão de Dobra de Obliteração",
    tipo: "ninjutsu",
    rank: "A",
    tempoConjuracao: "1 Ação de Turno Completo",
    alcance: "Autônomo (cone de 27 metros)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 21,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Confronto"],
    cla: "jugo",
    descricao:
      "Apoiando ambos os braços juntos, você os transforma em um único canhão de Chakra grande. Você não pode reduzir o custo deste jutsu por nenhum meio.\n\nComo parte da conjuração deste jutsu, você pode escolher disparar o canhão. O canhão dispara um feixe em um cone de 27 metros que reduz os Pontos de Vida Temporários de uma criatura a 0 e, em seguida, causa 12d10 de dano de Força. Um teste de resistência bem-sucedido reduz pela metade seus Pontos de Vida Temporários e o dano causado.\n\nApós a conjuração inicial, você pode escolher manter o canhão. Se o fizer, você ganha os seguintes efeitos: sua velocidade é reduzida a 0; você ganha 10 de RD contra todos os danos (exceto Psíquico); você não pode ser movido, derrubado ou atordoado de forma alguma.\n\nComo uma Ação Completa em seu turno, você pode escolher uma das duas opções abaixo:\n- Disparar o canhão no mesmo local: cada criatura na área deve ser bem-sucedida em um teste de resistência de Constituição ou ter seus Pontos de Vida Temporários reduzidos a 0 e sofrer 12d10 de dano de Força (um sucesso reduz pela metade os Pontos de Vida Temporários e o dano sofrido).\n- Ajustar o canhão, girando até 90 graus: cada criatura pega na trajetória do feixe à medida que se move (ainda um cone de 27 metros) deve ser bem-sucedida em um teste de resistência de Destreza ou perder quaisquer Pontos de Vida Temporários e sofrer 6d10 de dano de Força (um sucesso reduz pela metade os Pontos de Vida Temporários e o dano sofrido).\n\nNo início de cada um dos seus turnos, você pode escolher encerrar este jutsu e desfazer o canhão; você não precisa disparar o canhão a cada turno. O custo de concentração não pode ser reduzido ou ignorado de nenhuma maneira, mas você só o paga se disparar o canhão.\n\nForma de Chakra Bruto: se você conjurar este jutsu em sua Forma de Chakra Bruto, pode se mover 3 metros a cada turno antes ou depois de disparar.",
    emNiveisSuperiores:
      "Para cada rank acima do Rank A que você conjurar este jutsu, aumente o custo deste jutsu em 3, o alcance em 3 metros e o dano em 2d10.",
  },
];
