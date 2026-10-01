import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Futton — Estudos da Tsunade, cap. Futton ("Jutsu
 * Do Clã Futton"). "Estilo Vapor" (Liberação de Vapor, híbrido de Fogo e
 * Água) — mecanicamente, todo o dano causado é do tipo Ácido, que não tem
 * correspondente em JutsuNatureza (só agua/fogo/etc. isolados), então
 * `natureza` fica de fora em todas as entradas em vez de escolher um dos
 * dois elementos de forma imprecisa. O livro não traz um Hijutsu de Rank S
 * para este clã, mas traz 5 (não 4) Hijutsu de Rank D.
 *
 * Esta foi a seção com OCR mais degradado até agora (frases duplicadas e
 * truncadas, ex: "sofrendo 3d6 ... em caso de falha na defesa ... se a
 * defesa falhar" repetido) — reconstruída com base no contexto, sem
 * inventar mecânica nova, apenas removendo a duplicação/ruído óbvio.
 */
export const jutsuFutton: JutsuDefinition[] = [
  // Rank D
  {
    key: "futton-estilo-vapor-habilidade-de-nevoa",
    nome: "Estilo Vapor: Habilidade de Névoa",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (cone de 6 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo", "Estilo Água"],
    cla: "futton",
    descricao:
      "Você expele uma poderosa nuvem de névoa de sua boca que começa a derreter tudo o que toca. As criaturas, objetos e estruturas ao alcance devem fazer um teste de resistência de Destreza, sofrendo 3d6 de dano Ácido e recebendo a condição Corroído em uma falha, ou metade do dano (sem a condição) em um sucesso.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dano em 2d6.",
  },
  {
    key: "futton-estilo-vapor-propulsao-em-erupcao",
    nome: "Estilo Vapor: Propulsão em Erupção",
    tipo: "taijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "1,5 metro",
    duracao: "Instantâneo",
    componentes: ["MC", "M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Taijutsu", "Liberação de Fogo", "Liberação de Água", "Conflito"],
    cla: "futton",
    descricao:
      "Você expele um poderoso jato de névoa do seu corpo que o impulsiona para frente, permitindo que você ataque uma criatura com força acelerada. Como parte da ativação desse jutsu, você pode selecionar um espaço que possa ver dentro de seu movimento restante, adjacente a uma criatura hostil, e se deslocar imediatamente para esse ponto — esse movimento não provoca ataques de oportunidade. Faça um ataque de taijutsu contra uma criatura dentro do alcance, causando seu dano desarmado + 2d8 em um acerto. Em caso de acerto, a criatura alvo faz um teste de resistência de Constituição, sendo empurrada 4,5 metros para trás se falhar.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dano em 2d8.",
  },
  {
    key: "futton-estilo-vapor-erupcao-fisica",
    nome: "Estilo Vapor: Erupção Física",
    tipo: "taijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "1,5 metro",
    duracao: "Concentração, até 1 minuto",
    componentes: ["MC", "M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Taijutsu", "Estilo Fogo", "Estilo Água"],
    cla: "futton",
    descricao:
      "Você comprime uma mistura rodopiante de chakra de Liberação de Fogo e Água em seus músculos, fazendo-os ferver. Durante esse período, o Taijutsu do Clã Futton que você lançar causa um adicional de 2d8 de dano Ácido, uma vez por conjuração.",
    emNiveisSuperiores:
      "Para cada nível que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dano em 1d8.",
  },
  {
    key: "futton-estilo-vapor-bola-de-vapor",
    nome: "Estilo Vapor: Bola de Vapor",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Liberação de Fogo", "Liberação de Água", "Choque"],
    cla: "futton",
    descricao:
      "Você expele uma poderosa bala de ácido de seu corpo. Faça um ataque de ninjutsu à distância contra uma criatura dentro do alcance, causando 2d8 + seu modificador de Habilidade de Ninjutsu de dano Ácido em um acerto. A criatura alvo deve fazer um teste de resistência de Constituição. Se falhar, ela fica Enfraquecida e Corroída pelo próximo minuto, com o corpo superaquecido. Uma criatura Enfraquecida desta forma pode repetir o teste de Constituição no início de cada turno para encerrar o efeito.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dano em 2d8.",
  },
  {
    key: "futton-estilo-vapor-evaporacao-da-agua-extinguir-fogo",
    nome: "Estilo Vapor: Evaporação da Água / Extinguir Fogo",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Reação, quando uma criatura lança um Ninjutsu com a palavra-chave Liberação de Fogo ou Liberação de Água",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo", "Estilo Água"],
    cla: "futton",
    descricao:
      "Você vê uma criatura conjurar um jutsu de Fogo ou Água e usá-lo para atacar ou se defender, e deseja anular as vantagens que ela possa obter com isso. Como reação, você evapora imediatamente a água usada, fervendo-a, ou satura excessivamente o fogo com uma concentração de água — anulando um jutsu que a criatura lance com a palavra-chave Liberação de Água ou Liberação de Fogo. Faça um teste de Constituição (Controle de Chakra) contra o teste de Constituição (Controle de Chakra) do seu oponente. Se for bem-sucedido, o jutsu alvo é anulado, mas o chakra dele ainda é gasto.",
  },
  // Rank C
  {
    key: "futton-estilo-vapor-forca-inigualavel",
    nome: "Estilo Vapor: Força Inigualável",
    tipo: "taijutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "1 minuto",
    componentes: ["SM", "MC", "M"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Taijutsu", "Estilo Fogo", "Estilo Água"],
    cla: "futton",
    descricao:
      "Você comprime seu chakra fervente em seu corpo, ampliando rapidamente sua força física em um grande grau. Sua pontuação de Força se torna 18, caso ainda não seja; se sua Força já for 18 ou mais, você aumenta sua pontuação de Força em +2. Seu dado de dano desarmado passa a ser 2d6. Além disso, durante esse período, se você usar um jutsu do Clã Futton com a palavra-chave Taijutsu, você reduz o custo de chakra desses jutsus em 2.",
  },
  {
    key: "futton-estilo-vapor-armadura-de-vapor",
    nome: "Estilo Vapor: Armadura de Vapor",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Reação, quando você recebe dano",
    alcance: "Próprio",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo", "Estilo Água"],
    cla: "futton",
    descricao:
      "Você libera poderosos jatos de vapor de todos os poros de seu corpo, criando uma poderosa barreira de vapor entre você e o ataque desencadeado. Role 2d10 + 5, reduzindo o dano pelo resultado. Se o dano for reduzido a 0 e pelo menos uma criatura hostil estiver em um raio de 6 metros de você, selecione uma criatura hostil para receber 5d8 de dano Ácido. Se esse jutsu reduzir o dano de um jutsu que cause dano de Fogo, Vento ou Frio, você dobra a redução de dano.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3, a redução de dano em 1d10+5 e o dano causado em 2d8.",
  },
  {
    key: "futton-estilo-vapor-presa-de-vibora-corrosiva",
    nome: "Estilo Vapor: Presa de Víbora Corrosiva",
    tipo: "taijutsu",
    rank: "C",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Taijutsu", "Estilo Fogo", "Estilo Água"],
    cla: "futton",
    descricao:
      "Você enrola o chakra corrosivo do Estilo Vapor em torno de seu braço, formando uma cobra feita de vapor. Faça um ataque de taijutsu corpo a corpo, causando 4d8 de dano Ácido. Se a criatura alvo estiver afetada pela condição Corroído, aumente o dano desse jutsu em 2d8 e, na próxima vez que ela fizer um teste de resistência contra um jutsu do Clã Futton, reduza o resultado desse teste em -2 até o final do próximo turno dela.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e o dano em 2d8.",
  },
  // Rank B
  {
    key: "futton-estilo-vapor-sopro-acido-do-dragao",
    nome: "Estilo Vapor: Sopro Ácido do Dragão",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio (linha de 9 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 13,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Liberação de Fogo", "Liberação de Água", "Conflito"],
    cla: "futton",
    descricao:
      "Você dispara um feixe de ácido em linha reta, espalhando uma onda maciça de ácido corrosivo. As criaturas em uma linha de 9 metros de comprimento e 1,5 metro de largura à sua frente devem fazer um teste de resistência de Destreza, recebendo 8d8 de dano Ácido e ganhando 2 níveis de Corroído em uma falha, ou metade desse valor em um sucesso. Além disso, as criaturas, exceto você, em um raio de 1,5 metro do feixe devem fazer um teste de resistência de Constituição, recebendo 6d6 de dano Ácido e 1 nível de Corroído em uma falha.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank B, aumente o custo desse jutsu em 3 e o dano em 2d8 e 2d6.",
  },
  {
    key: "futton-estilo-vapor-ferrao-de-escorpiao",
    nome: "Estilo Vapor: Ferrão de Escorpião",
    tipo: "taijutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "1,5 metro",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Taijutsu", "Liberação de Fogo", "Liberação de Água", "Conflito"],
    cla: "futton",
    descricao:
      "Você reveste seu corpo em um manto de vapor altamente comprimido, que você então molda em um ferrão com o mesmo formato de um ferrão de escorpião. Faça um ataque corpo a corpo de Taijutsu ou Ninjutsu (à sua escolha). Se acertar, você causa seu dano desarmado + 5d12 de dano Ácido e o alvo fica Corroído.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank B, aumente o custo desse jutsu em 3 e o dano em 1d12.",
  },
  // Rank A
  {
    key: "futton-estilo-vapor-explosao-acida",
    nome: "Estilo Vapor: Explosão Ácida",
    tipo: "ninjutsu",
    rank: "A",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (esfera de 6 metros de raio)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 18,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Liberação de Fogo", "Liberação de Água"],
    cla: "futton",
    descricao:
      "Você libera um fluxo maciço de vapor ácido pelo seu corpo, suficiente para preencher uma esfera de 6 metros de raio. Todas as criaturas, objetos e estruturas de sua escolha no raio devem fazer um teste de resistência de Constituição, recebendo 10d10 de dano Ácido e ganhando 2 níveis de Corroído em uma falha, ou metade do dano em um sucesso.\n\nApós o lançamento inicial desse jutsu, seu corpo continua a liberar vapor ácido. No início do turno de cada criatura que começa dentro do raio do vapor, ou que entrar no raio pela primeira vez naquele turno, ela deve fazer um teste de resistência de Constituição, sofrendo 4d10 de dano Ácido e ganhando 2 níveis de Corroído em uma falha. Além disso, as criaturas fazem seus testes de resistência para encerrar a condição Corroído com desvantagem enquanto estiverem dentro do raio deste jutsu.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank A, aumente o custo desse jutsu em 3, o dano em 2d10 e os graus de Corroído em +2.",
  },
];
