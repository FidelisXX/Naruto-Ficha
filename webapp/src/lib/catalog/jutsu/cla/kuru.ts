import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Kuru — Estudos da Tsunade, cap. Kuru ("Jutsu Do
 * Clã Kuru"). Tema sombrio/necrótico, com vários Hijutsu exigindo a
 * característica de classe "Kurugan" (um dojutsu de clã) ativa. Dano
 * Necrótico não tem correspondente em JutsuNatureza, então `natureza` fica
 * de fora em todas as entradas. Este clã tem 2 (não 1) Hijutsu de Rank A e
 * nenhum de Rank S.
 *
 * Nota: o rodapé de página deste capítulo na extração OCR aparece como
 * "KURO" em vez de "KURU" — confirmado como o Clã Kuru pelo cabeçalho
 * interno "JUTSU DO CLÃ KURU" e pelo conteúdo (Kurugan).
 */
export const jutsuKuru: JutsuDefinition[] = [
  // Rank D
  {
    key: "kuru-punho-de-devocao-das-trevas",
    nome: "Punho de Devoção das Trevas",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "1,5 metro",
    duracao: "Concentração, até 1 minuto",
    componentes: ["M", "MC"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Taijutsu"],
    cla: "kuru",
    descricao:
      "Seus punhos e pés irrompem em Chakra negro e ardente enquanto você funde seus ataques com o poder da falsa moldagem. Durante esse período, o primeiro taijutsu que você lançar a cada turno que causaria dano desarmado pode usar Sabedoria para calcular o ataque e o dano (isso não conta para testes de resistência). O dano desarmado que você causar é tratado como Necrótico e causa 1d6 de dano adicional.",
  },
  {
    key: "kuru-parede-espiral-obscura",
    nome: "Parede Espiral Obscura",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Reação, quando você sofreria dano",
    alcance: "Próprio",
    duracao: "1 rodada",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Genjutsu", "Tátil"],
    cla: "kuru",
    descricao:
      "Uma parede em espiral de Chakra preto aparece para protegê-lo. Até o início do seu próximo turno, você ganha um bônus de +3 na CA e 8 de RD (Redução de Dano), incluindo contra o ataque que desencadeou o jutsu.\n\nAlém disso, você ganha resistência a dano Psíquico de Genjutsu com as palavras-chave Visual, Auditivo e/ou Tátil. Isso não afeta Genjutsu com a palavra-chave Inalar.",
    emNiveisSuperiores:
      "Para cada nível que você conjurar este jutsu acima do Rank D, aumente o custo deste jutsu em 3 e a RD em +4.",
  },
  {
    key: "kuru-perfurar-o-veu",
    nome: "Perfurar o Véu",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Concentração, especial",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "kuru",
    descricao:
      "Como parte da ativação deste jutsu, você deve ter a característica de classe Kurugan ativa. Além disso, você não pode perder a concentração neste jutsu como resultado de falha em uma verificação de concentração. Ao concentrar seu Chakra em seus olhos, você é capaz de perfurar o véu com muito mais precisão. Durante a duração do seu Kurugan, você ganha os seguintes benefícios:\n- Você pode calcular sua CA usando Sabedoria em vez de Destreza.\n- Ao usar a ação bônus da característica Kurugan, o alvo da sua próxima rolagem de ataque não pode obter os benefícios de uma reação que conceda a ele um bônus de CA.\n- Ao passar 1 minuto concentrado, você pode lançar imediatamente Arte Seladora: Técnica de Adivinhação sem custo, ignorando os componentes SM, MC e SC. Além disso, você pode conjurar Arte Seladora: Técnica de Adivinhação dessa forma duas vezes por lançamento deste jutsu, ignorando a limitação de ver o futuro listada no próprio jutsu.",
  },
  {
    key: "kuru-isolamento-negro",
    nome: "Isolamento Negro",
    tipo: "genjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC", "SC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Genjutsu", "Fuinjutsu"],
    cla: "kuru",
    descricao:
      "Como parte da ativação deste jutsu, você deve ter o recurso de classe Kurugan ativo. Usando as habilidades concedidas pelo seu Kurugan, você começa a invocar uma manifestação tangível de solidão para envolver o alvo, arrastando-o para um vazio de puro isolamento. Selecione uma criatura que você possa ver dentro do alcance. Todas as criaturas aliadas ao alvo em um raio de 60 metros dele devem fazer um teste de resistência de Sabedoria.\n\nSucesso: as criaturas afetadas resistem aos efeitos deste jutsu, continuando a ver seu aliado normalmente.\nFalha: as criaturas aliadas ao alvo não podem mais vê-lo. Elas ainda sabem que ele está presente, mas são incapazes de interagir com ele.\nFalha crítica: além dos efeitos de uma falha, as criaturas também esquecem que o alvo existe durante esse período.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o número de criaturas que você pode atingir em +1.",
  },
  // Rank C
  {
    key: "kuru-onda-negra",
    nome: "Onda Negra",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio (18 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "kuru",
    descricao:
      "Uma linha de Chakra negro em espiral, de 18 metros de comprimento e 1,5 metro de largura, emana de você na direção que escolher. Cada criatura no alcance deve fazer um teste de resistência de Carisma, sofrendo 5d8 de dano Necrótico em caso de falha — pois as criaturas afetadas envelhecem rapidamente antes de voltar à sua idade normal, sofrendo um choque — ou metade do dano em um sucesso.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e o dano em 2d8.",
  },
  {
    key: "kuru-drenagem-obscura",
    nome: "Drenagem Obscura",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "1 ação",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "kuru",
    descricao:
      "O Chakra negro envolve uma criatura que você atinge, drenando sua vitalidade. Faça um ataque de ninjutsu (ou taijutsu) corpo a corpo, causando 4d10 de dano Necrótico. Se a criatura alvo tiver pontos de vida temporários, você primeiro drena todos os pontos de vida temporários dela, ganhando-os como pontos de vida temporários para si mesmo. Em seguida, você recupera pontos de vida iguais à metade do dano Necrótico causado.",
    emNiveisSuperiores:
      "Para cada rank acima do Rank C que você lançar este jutsu, aumente o custo deste jutsu em 3 e o dano em 2d10.",
  },
  {
    key: "kuru-lamina-negra",
    nome: "Lâmina Negra",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "kuru",
    descricao:
      "Seu braço inteiro irrompe em Chakra negro e sombrio que se estende em uma lâmina sombria. Essa espada de Chakra dura até o fim do jutsu. Ela conta como uma arma corpo a corpo simples com a qual você é proficiente, causando 3d8 de dano Necrótico em um acerto, e tem as propriedades Acuidade, Leve e Arremesso (alcance 6/18 metros). Além disso, quando você usa a arma para atacar um alvo em condições de pouca luz ou escuridão, você faz a rolagem de ataque com vantagem.\n\nSe você deixar a arma cair ou arremessá-la, ela se dissipa no final do turno. Depois disso, enquanto o jutsu persistir, você pode usar uma ação bônus para fazer a arma reaparecer cobrindo sua mão.",
  },
  // Rank B
  {
    key: "kuru-banimento-sombrio",
    nome: "Banimento Sombrio",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Concentração, até 10 minutos",
    componentes: ["SM", "MC", "SC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Fuinjutsu"],
    cla: "kuru",
    descricao:
      "Você tenta enviar uma criatura que você possa ver dentro do alcance para um espaço de bolso feito inteiramente de Chakra. O alvo deve fazer um teste de resistência de Carisma ou será banido. Você não gasta Chakra adicional para manter a concentração deste jutsu.\n\nSe o alvo permanecer lá durante toda a duração do jutsu, quando retornar ficará Incapacitado por 10 minutos devido a ter ficado em um espaço normalmente inóspito por tanto tempo, reaparecendo em um sopro de fumaça no espaço que deixou ou no espaço desocupado mais próximo, se aquele espaço estiver ocupado.",
  },
  {
    key: "kuru-contingencia-sombria",
    nome: "Contingência Sombria",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "10 minutos",
    alcance: "Próprio",
    duracao: "10 dias",
    componentes: ["SM", "MC", "SC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Fuinjutsu"],
    cla: "kuru",
    descricao:
      "Escolha um jutsu de Rank B ou inferior que você possa lançar, que tenha um tempo de conjuração de 1 ação e que possa atingir você. Você lança esse jutsu — chamado de jutsu contingente — como parte da ativação desta contingência, gastando Chakra para ambos, mas o jutsu contingente não entra em vigor.\n\nEm vez disso, ele é armazenado em um selo de Chakra em sua pessoa e entra em vigor quando ocorre uma determinada circunstância, descrita por você no momento em que lança os dois jutsu. Por exemplo, uma contingência lançada com a Técnica de Detecção pode estipular que ela entra em vigor quando você estiver imerso em uma nuvem de neblina ou outro vapor obscurecedor.\n\nO jutsu contingente entra em vigor imediatamente após a circunstância ser atendida pela primeira vez, quer você queira ou não, e então a contingência termina.\n\nO jutsu contingente tem efeito apenas em você, mesmo que normalmente possa atingir outras pessoas. Você pode manter apenas uma contingência por vez — se você lançar este jutsu novamente, o efeito da contingência anterior termina. Ela também termina se o selo de Chakra for removido de você.",
  },
  // Rank A
  {
    key: "kuru-deslocamento-das-trevas",
    nome: "Deslocamento das Trevas",
    tipo: "ninjutsu",
    rank: "A",
    tempoConjuracao: "1 Ação",
    alcance: "1,5 metro",
    duracao: "Instantâneo",
    componentes: ["SM", "MC", "SC"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Taijutsu", "Fuinjutsu"],
    cla: "kuru",
    descricao:
      "Como parte do lançamento deste jutsu, você deve ter o Kurugan ativo. Ao concentrar o Chakra usado para olhar para o futuro, você é capaz de agarrar o poder dos deslocamentos temporais, concentrando-o em suas mãos. Ao fazer isso, seu braço envelhece mais rápido que o resto do seu corpo, ainda que levemente.\n\nFaça um ataque de ninjutsu corpo a corpo contra um alvo que você possa ver no alcance. Se for atingido, você causa 9d10 de dano Necrótico à criatura alvo. O alvo deve fazer um teste de resistência de Carisma, reduzindo seus pontos de vida máximos pela metade do dano causado se falhar. Se os pontos de vida máximos do alvo chegarem a 0, ele se desfaz em pó, incapaz de ser revivido por qualquer meio. Uma criatura pode restaurar seu valor máximo de pontos de vida lançando um Ninjutsu com a palavra-chave Médico que remova condições de Rank A ou superior.",
  },
  {
    key: "kuru-previsao-irrestrita",
    nome: "Previsão Irrestrita",
    tipo: "ninjutsu",
    rank: "A",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Especial",
    componentes: ["SM", "MC"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "kuru",
    descricao:
      "Como parte do lançamento deste jutsu, você deve ter o Kurugan ativo. Você libera todos os limitadores do seu Kurugan, permitindo que veja livremente todos os eventos possíveis relativos a você, filtrando milhares de futuros possíveis. Durante a duração do seu Kurugan, você não pode ser surpreendido por nada. Você tem vantagem em rolagens de ataque, verificações de habilidade e testes de resistência. Além disso, todas as outras criaturas têm desvantagem em rolagens de ataque contra você durante esse período.\n\nVocê sempre sabe que horas são e o momento exato em que um evento menor ocorrerá, como um sino tocando ou o nome de alguém sendo chamado em sua vizinhança.\n\nAlém disso, você pode, como uma ação, tocar uma criatura que possa alcançar e observar o futuro imediato dela, lançando Arte Seladora: Técnica de Adivinhação sem custo, ignorando os componentes SM, MC e SC, permitindo que você veja o futuro dela.\n\nSe você tiver Perfurar o Véu ativo, seus recursos do Kurugan não têm limite de uso durante esse período. Ao término deste jutsu, você gasta todos os usos restantes de seus recursos do Kurugan, até completar um descanso longo.",
  },
];
