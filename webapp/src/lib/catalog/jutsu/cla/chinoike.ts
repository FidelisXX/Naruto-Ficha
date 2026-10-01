import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Chinoike — Estudos da Tsunade, cap.
 * Chinoike ("Jutsu do Clã Chinoike", grafado "CHINOIKI" por erro de
 * digitação na fonte). Ninjutsu/Genjutsu de sangue ligados ao dōjutsu
 * Ketsuryūgan, culminando na invocação do Dragão de Sangue. `natureza`
 * fica de fora em todas as entradas: o dano é sempre Frio, Necrótico
 * (muitas vezes à escolha do jogador) ou Psíquico — nenhum desses tem
 * correspondência no enum `JutsuNatureza` deste app. 11 Hijutsu no
 * total — distribuição 5/3/2/1 (D/C/B/A, não o usual 4/3/2/1, como já
 * visto em Futton e Uchiha) — e sem Rank S.
 */
export const jutsuChinoike: JutsuDefinition[] = [
  // Rank D
  {
    key: "chinoike-armas-de-sangue",
    nome: "Armas de Sangue",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Pessoal",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água"],
    cla: "chinoike",
    descricao:
      "Você morde o polegar e envolve o braço para o lado, formando uma arma corpo a corpo em sua mão usando o sangue do seu polegar e as moléculas de água no ar.\n\nSelecione uma arma corpo a corpo de sua escolha. Você cria esta arma como uma arma +1. Esta arma perde a propriedade Pesada se a possuir, e ganha a propriedade Acuidade se não a possuir. Você é sempre proficiente com armas que criar com este jutsu, e pode usar Sabedoria para rolagens de ataque e dano com arma. O dano da arma pode ser de Frio ou Necrótico (você escolhe ao lançar), embora a arma ainda conte como seu tipo de dano original para o propósito de lançar Bukijutsu.\n\nSe seu Ketsuryūgan estiver ativo enquanto este jutsu estiver ativo, você não pode perder a concentração neste jutsu como resultado de dano.",
    emNiveisSuperiores:
      "Para cada rank em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3. Se este jutsu for lançado a Rank C ou superior, sua duração se torna 10 minutos. Se este jutsu for lançado a Rank B ou superior, esta arma ganha uma propriedade de arma adicional e, uma vez por turno, quando você atingir uma criatura com um ataque usando esta arma, ela deve ter sucesso em um teste de resistência de Constituição ou ganhar 1 grau de Sangramento. Se este jutsu for lançado a Rank A ou superior, ele se torna uma arma +2. Se lançado a Rank S, sua duração aumenta para 1 hora e, uma vez por turno, quando você atacar com esta arma, você pode fazer um ataque de arma adicional.",
  },
  {
    key: "chinoike-circulacao-melhorada",
    nome: "Circulação Melhorada",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao:
      "1 Reação, que você usa quando é alvo de, ou sofre dano de, um ataque, ou faria um teste de resistência de Constituição",
    alcance: "Pessoal",
    duracao: "1 rodada",
    componentes: ["MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água"],
    cla: "chinoike",
    descricao:
      "Você melhora rapidamente o fluxo sanguíneo para o seu coração, concedendo-lhe brevemente maior velocidade de reação e capacidade de sobrevivência. Até o início do seu próximo turno, você aumenta sua CA em +4, inclusive contra o ataque desencadeante, e tem vantagem em testes de resistência de Constituição.",
  },
  {
    key: "chinoike-adagas-de-sangue",
    nome: "Adagas de Sangue",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal",
    duracao: "10 minutos",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água"],
    cla: "chinoike",
    descricao:
      "Você manipula a água e o ferro na atmosfera para criar duas adagas aquáticas ricas em ferro que giram ao seu redor no ar. Como uma ação bônus, você pode enviar uma adaga contra uma criatura a até 18 metros. Faça um ataque de ninjutsu à distância, causando 3d4 + seu modificador de Habilidade de Ninjutsu em dano Perfurante ao acertar. Depois que todas as adagas forem lançadas, este jutsu termina.\n\nSe seu Ketsuryūgan estiver ativo enquanto este jutsu estiver ativo, em um acerto bem-sucedido a criatura afetada faz um teste de resistência de Constituição, ganhando 1 grau de Sangramento em uma falha.",
    emNiveisSuperiores:
      "Para cada rank em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3. Se este jutsu for lançado a Rank C ou superior, aumente o número de adagas que este jutsu gera em +1. Se este jutsu for lançado a Rank B ou superior, aumente seu dado de dano para d6. Se este jutsu for lançado a Rank A ou superior, aumente o número de adagas que este jutsu gera em +1. Se este jutsu for lançado a Rank S, aumente seu dado de dano para d8.",
  },
  {
    key: "chinoike-genjutsu-ketsuryugan",
    nome: "Genjutsu: Ketsuryūgan!",
    tipo: "genjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Genjutsu", "Visual", "Tátil"],
    cla: "chinoike",
    descricao:
      "Como parte dos requisitos para lançar este jutsu, você deve ter a característica de clã Ketsuryūgan ativa. Você olha nos olhos de uma criatura e utiliza seu Ketsuryūgan para tornar seu genjutsu mais eficaz.\n\nComo parte do lançamento deste jutsu, você pode lançar qualquer Genjutsu de Rank D que conheça, que tenha um tempo de conjuração de 1 ação ou ação bônus, não tenha alcance Próprio e não tenha os componentes FN ou M, sem custo de Chakra adicional. O alcance do Genjutsu lançado se torna o alcance deste jutsu, e ele só pode afetar o alvo com o qual você está fazendo contato visual. Este jutsu pode ser usado sem quebrar a furtividade.\n\nSeu Genjutsu ganha +1 na rolagem de ataque, no dado de dano e na CD de Resistência inicial. Se o Genjutsu permitir que a criatura repita seu teste de resistência para encerrar o efeito, ela o faz com desvantagem.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 4 e o rank do Genjutsu que pode ser lançado em 1 (D > C > B > A > S).",
  },
  {
    key: "chinoike-genjutsu-ilusoes-ichorosas",
    nome: "Genjutsu: Ilusões Ichorosas!",
    tipo: "genjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Genjutsu", "Visual", "Desavisado"],
    cla: "chinoike",
    descricao:
      "Como parte dos requisitos para lançar este jutsu, você deve ter a característica de clã Ketsuryūgan ativa. Você faz contato visual com uma criatura e a coloca sob um Genjutsu único que sequestra o fluxo sanguíneo para seu cérebro. A criatura deve fazer um teste de resistência de Sabedoria. As criaturas afetadas podem repetir seu teste de resistência no final de cada um de seus turnos, e uma vez por turno quando sofreriam dano. Uma criatura resistente ou imune a medo tem vantagem neste teste de resistência.\n\nSucesso crítico: este jutsu termina e o alvo fica imune a este jutsu por 1d4+1 rodadas.\nSucesso: a criatura sente uma leve dor de cabeça tensional, mas é capaz de resistir aos efeitos deste jutsu, encerrando-o.\nFalha: o alvo começa a ter alucinações, distorcendo a aparência das criaturas ao seu redor, tornando-o incapaz de distinguir amigo de inimigo. Quando o alvo for atacar um de seus aliados, ele deve ter sucesso em um teste de Percepção contra sua CD de Resistência de Genjutsu. Em uma falha, a criatura acredita que seu aliado é na verdade um inimigo, e ataca uma criatura que seja hostil a você dentro do alcance. Se não houver tal criatura dentro do alcance, seu ataque ou jutsu falha.\n\nA criatura também é incapaz de usar ou se beneficiar de habilidades que lhe permitiriam evitar que criaturas fossem afetadas por um ataque ou jutsu durante a duração.\nFalha crítica: os mesmos efeitos de uma falha, porém a criatura agora está tomada pelo pânico. Uma criatura sob os efeitos deste jutsu só pode se mover, realizar a ação de Ataque ou lançar um jutsu de Rank C ou inferior em seu turno.",
  },
  // Rank C
  {
    key: "chinoike-genjutsu-lago-de-sangue",
    nome: "Genjutsu: Lago de Sangue!",
    tipo: "genjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Genjutsu", "Visual", "Tátil"],
    cla: "chinoike",
    descricao:
      "Um Genjutsu que faz com que o alvo experimente uma sensação de afogamento, exaurindo-se como se seu corpo realmente tivesse sofrido um trauma físico. Selecione um alvo dentro do alcance. Essa criatura deve fazer um teste de resistência de Sabedoria. As criaturas não podem ganhar mais do que 2 graus de Exaustão com este jutsu. Se este jutsu for usado enquanto seu Ketsuryūgan estiver ativo, todas as criaturas a até 1,5 metro do alvo, à sua escolha, também devem fazer este teste de resistência.\n\nSucesso crítico: a criatura resiste a este efeito e não pode ser afetada por este jutsu por 1 minuto.\nSucesso: a criatura resiste aos efeitos deste jutsu.\nFalha: a criatura perde a visão dos arredores, e vê uma pequena fissura se abrir sob seus pés, revelando um oceano vermelho. A criatura cai na água e sente como se tivesse ficado presa por vários dias, constantemente tentando escapar e não se afogar. A criatura ganha 1 grau de Exaustão por 1d4 rodadas.\nFalha crítica: os mesmos efeitos de uma falha, mas o alvo sofre 4d8 de dano Psíquico e a Exaustão dura 1d4+1 rodadas. A criatura também ganha 2 graus de Exaustão.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3, o alcance em 4,5 metros e a duração da condição de Exaustão em 1 rodada.",
  },
  {
    key: "chinoike-morte-vermelha",
    nome: "Morte Vermelha",
    tipo: "bukijutsu",
    rank: "C",
    tempoConjuracao: "Especial",
    alcance: "Pessoal",
    duracao: "Instantâneo",
    componentes: ["SM", "A (Shuriken, Kunai ou Adaga de Sangue)"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Bukijutsu", "Estilo Água"],
    cla: "chinoike",
    descricao:
      "Você pode lançar este jutsu como uma ação bônus enquanto segura um Shuriken ou Kunai, ou pode lançá-lo como parte do lançamento do Hijutsu Adagas de Sangue. Estas armas aprimoradas ficam cobertas por sangue vil, tão potente que parece quase preto.\n\nUma vez lançado, até o final do seu próximo turno, o próximo ataque de arma ou ataque de ninjutsu feito com sua arma causa 3d10 de dano adicional de Frio ou Necrótico (à sua escolha). A criatura também deve fazer um teste de resistência de Constituição, ganhando 1 grau de Sangramento, ou se tornando Lacerada se já estiver com Sangramento, em uma falha. Assim que você acertar este ataque, este jutsu termina.\n\nSe este jutsu for usado enquanto seu Ketsuryūgan estiver ativo, o dano deste jutsu também causa dano aos pontos de Chakra da criatura, e em uma falha no teste de resistência, a criatura se torna incapaz de recuperar pontos de vida ou Chakra até o final do seu próximo turno.",
    emNiveisSuperiores:
      "Para cada rank em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e o dano em 1d10.",
  },
  {
    key: "chinoike-esfera-sanguinea",
    nome: "Esfera Sanguínea",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água"],
    cla: "chinoike",
    descricao:
      "Você forma uma grande esfera de água de 3 metros à sua frente e cospe sangue fresco nela, deixando-a completamente vermelha. Você então move a esfera para um ponto dentro do alcance e faz com que ela exploda em cacos de água.\n\nCada criatura à sua escolha a até 6 metros da esfera quando ela explodir deve fazer um teste de resistência de Destreza. Em uma falha, a criatura sofre 6d6 de dano de Frio e ganha 2 graus de Sangramento, ou metade desses graus como graus de Lacerado se já estiver Lacerada no momento. Se uma criatura afetada já tiver graus de Sangramento ou estiver Lacerada, em uma falha você pode, alternativamente, escolher dar a ela a condição Enfraquecida pela duração de sua condição de Sangramento e/ou Lacerado.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3, o dano em 1d6 e os graus de Sangramento em +1.",
  },
  // Rank B
  {
    key: "chinoike-pingos-de-coagulos-sanguineos",
    nome: "Pingos de Coágulos Sanguíneos",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Reação, que você usa quando uma criatura lança um jutsu com o componente M",
    alcance: "18 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 10,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água"],
    cla: "chinoike",
    descricao:
      "Como uma reação a uma criatura usando um jutsu com o componente M, você manipula seu sangue para coagular e formar um espinho, restringindo seu próprio fluxo sanguíneo. Faça um teste de perícia de Ninshou ou Ilusões, contestado pela perícia de Artes Marciais do alvo. Você ganha +1 no seu teste de perícia para cada grau de Sangramento que o alvo possuir (máximo +5).\n\nEm um sucesso, o movimento da criatura é interrompido, sendo reduzido a 0 até o final de seu próximo turno, fazendo com que seu jutsu falhe e seu Chakra seja desperdiçado. A criatura também sofre 4d8 de dano Necrótico.\n\nSe seu Ketsuryūgan estiver ativo quando você lançar este jutsu, e você for bem-sucedido em sua disputa de perícia por 5 ou mais, o alvo fica Contido pela duração deste jutsu, podendo fazer um teste de resistência de Força no início de cada um dos seus turnos para se libertar. Se um alvo permanecer Contido por um minuto inteiro, ele fica Inconsciente devido ao fluxo sanguíneo inibido.",
  },
  {
    key: "chinoike-genjutsu-tormento",
    nome: "Genjutsu: Tormento!",
    tipo: "genjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 13,
    palavrasChave: ["Hijutsu", "Genjutsu", "Desavisado", "Tátil"],
    cla: "chinoike",
    descricao:
      "Como parte dos requisitos para lançar este jutsu, você deve ter a habilidade de clã Ketsuryūgan ativa. Faça um ataque de genjutsu à distância contra uma criatura dentro do alcance. Em um acerto, você faz a criatura se sentir invencível, distraindo-a do fato de que seu corpo foi comprometido.\n\nSempre que a criatura sofrer dano enquanto este jutsu estiver ativo, se ela possuir Redução de Dano, seu valor de Redução de Dano é tratado como metade; caso contrário, ela sofre 1d6 extra + seu modificador de Habilidade de Genjutsu em dano Necrótico, que não pode ser reduzido. Uma criatura não pode estar sob os efeitos deste jutsu mais de uma vez.\n\nOs efeitos deste jutsu podem ser ativados um número de vezes igual ao seu bônus de proficiência, após o qual este jutsu termina.",
  },
  // Rank A
  {
    key: "chinoike-ascensao-do-dragao-de-sangue",
    nome: "Ascensão do Dragão de Sangue",
    tipo: "ninjutsu",
    rank: "A",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "Concentração, até 1 minuto",
    componentes: ["MC", "SC"],
    custoChakra: 20,
    custoChakraTexto: "Especial (20 Chakra)",
    palavrasChave: ["Hijutsu", "Ninjutsu", "Fuinjutsu", "Estilo Água"],
    cla: "chinoike",
    descricao:
      "Como parte dos requisitos deste jutsu, você deve ter o Ketsuryūgan ativo e estar perto de uma fonte suficiente de água. Você corta ambos os pulsos e permite que o sangue vaze para a água abaixo. As feridas em seus braços cicatrizam e a água borbulha e ferve, até irromper em um dragão de várias cabeças. O Dragão de Sangue usa as seguintes estatísticas. Quando este dragão é invocado, você pode escolher ficar em cima dele, em uma de suas muitas cabeças.\n\nVocê comanda o Dragão e ele só escuta você (nenhuma ação necessária), agindo no final de cada um dos seus turnos. Ele é proficiente em todos os testes de resistência, usando seu modificador de Habilidade de Ninjutsu ou Genjutsu como seu bônus de proficiência, e usa seu bônus de ataque de Ninjutsu ou Genjutsu e CD de Resistência para efeitos que o exijam. (Você deve decidir se o Dragão de Sangue usa seu modificador de Habilidade de Ninjutsu ou de Genjutsu ao ser invocado. Essa escolha não pode ser alterada depois, e deve ser usada tanto para seu bônus de proficiência quanto para seus ataques e CD de Resistência.)\n\nDragão de Sangue — Construto Gigantesco, não alinhado\nClasse de Armadura: 15 + seu modificador de Habilidade de Ninjutsu ou Genjutsu\nPontos de Vida: 170 (16d10+75)\nVelocidade: 15 metros\nFOR 23 (+6), DES 12 (+1), CON 25 (+7), INT 1 (-5), SAB 10 (+0), CAR 1 (-5)\nVulnerabilidade a Dano: Terra\nResistências a Dano: Contundente, Perfurante e Cortante\nImunidades a Dano: Necrótico, Venenoso, Psíquico\nImunidades a Condições: Sangramento, Machucado, todas as condições Mentais e Sensoriais, Paralisado, Petrificado, Envenenado\nSentidos: Visão às Cegas 18 metros, percepção passiva 10\n\nArmas Elementais: os ataques do Dragão de Sangue são aprimorados por Chakra.\nForma Imutável: o Dragão de Sangue é imune a qualquer jutsu ou efeito que altere sua forma.\nMaquiagem Inefável: o Dragão de Sangue não pode ser dissipado por nenhum jutsu de Rank A ou inferior.\nCorpo Líquido: criaturas podem passar por seu corpo a critério de seu invocador. Se uma criatura terminar seu turno em seu espaço, ela é imediatamente ejetada para um espaço que possa contê-la.\n\nAções\nAtaque Múltiplo: o Dragão de Sangue pode atacar 2 vezes com sua Mordida ou Bola Hidra.\nMordida: ataque com arma corpo a corpo, alcance 3 metros, uma criatura. Acerto: 3d10+6 de dano de Frio ou Necrótico (escolha um).\nBola Hidra: ataque com arma de longo alcance, alcance 18/36 metros, uma criatura. Acerto: 4d6+6 de dano de Frio ou Necrótico (escolha um).\nVórtice Viscoso: as cabeças do dragão convergem e formam uma torrente gigantesca de água, rasgando tudo o que toca em pedaços. O dragão viaja para um espaço dentro de sua velocidade de movimento, seguindo um caminho específico designado por você. Cada criatura dentro desse caminho deve ter sucesso em um teste de resistência de Destreza, sofrendo 10d4 de dano de Frio ou Necrótico (escolha um) e tendo sua velocidade de movimento reduzida pela metade até o final de seu próximo turno em uma falha, ou metade do dano e nenhum efeito adicional em um sucesso.\nOceano de Sangue (Recarga 9-10): o Dragão de Sangue lança Genjutsu: Lago de Sangue de Rank A como se você o tivesse lançado duas vezes, em dois locais diferentes.",
  },
];
