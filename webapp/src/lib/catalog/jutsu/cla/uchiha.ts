import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Uchiha — Estudos da Tsunade, cap. Uchiha
 * ("Jutsu Do Clã Uchiha"). Sharingan, Genjutsu visual e variações de
 * jutsu de Fogo (Fogo da Fênix, Grande Bola de Fogo, Sol Quente).
 * `natureza` é "fogo" nas entradas com dano de Fogo fixo; as de Taijutsu/
 * Bukijutsu/Genjutsu ficam sem natureza. Este clã tem 5 Hijutsu de Rank D
 * (não 4) e nenhum de Rank S.
 */
export const jutsuUchiha: JutsuDefinition[] = [
  // Rank D
  {
    key: "uchiha-genjutsu-sharingan",
    nome: "Genjutsu: Sharingan!",
    tipo: "genjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Instantâneo",
    componentes: ["MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Genjutsu", "Visual"],
    cla: "uchiha",
    descricao:
      "Como parte dos requisitos deste jutsu, você deve ter o recurso de clã Sharingan ativo. Ao fazer contato visual com uma criatura enquanto seu Sharingan estiver ativo, você pode lançar qualquer Genjutsu de Rank D ou inferior que você conheça, sem custo adicional de Chakra, desde que ele não exija Mobilidade (M), um Selo de Chakra (SC), uma Arma (A) ou Ferramentas Ninja (FN), e não tenha alcance Próprio. O Genjutsu lançado deve ter um tempo de conjuração de 1 ação ou ação bônus.\n\nO alcance do Genjutsu se torna o alcance deste jutsu, e ele só pode afetar a criatura alvo para a qual você está olhando. Isso pode ser feito sem quebrar a furtividade.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 4 e o rank do jutsu que pode ser lançado em 1 (D > C > B > A > S).",
  },
  {
    key: "uchiha-grande-ataque-uchiha",
    nome: "Grande Ataque Uchiha",
    tipo: "taijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "1,5 metro",
    duracao: "Instantâneo",
    componentes: ["M"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Taijutsu"],
    cla: "uchiha",
    descricao:
      "Realize um ataque de taijutsu corpo a corpo contra uma criatura alvo no alcance. Em caso de acerto, você causa 3d8 de dano Contundente. Você também ganha vantagem no seu próximo ataque corpo a corpo ou de taijutsu contra essa criatura, no seu próximo turno. Se este jutsu for lançado como resultado da Postura de Espera Uchiha, ele é automaticamente lançado no mesmo rank, sem custo adicional.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dano em 2d8.",
  },
  {
    key: "uchiha-postura-de-espera-uchiha",
    nome: "Postura de Espera Uchiha",
    tipo: "taijutsu",
    rank: "D",
    tempoConjuracao: "1 Reação, quando for alvo de um ataque ou fizer um teste de resistência de Destreza",
    alcance: "Próprio",
    duracao: "1 rodada",
    componentes: ["M"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Taijutsu"],
    cla: "uchiha",
    descricao:
      "Como uma reação, você força a criatura desencadeadora e todos os ataques subsequentes direcionados a você a rolarem com desvantagem, ou ganha vantagem no teste de Destreza e em todos os testes de resistência de Destreza subsequentes até o início do seu próximo turno. Quando uma criatura errar um ataque contra você, ou você passar em um teste de Destreza, você imediatamente faz um ataque com arma branca ou lança um taijutsu ou bukijutsu de Rank D que conheça. Se o jutsu lançado for um Hijutsu do Clã Uchiha, você pode lançá-lo com custo 0. Você pode atacar ou lançar um jutsu dessa forma apenas uma vez por lançamento deste jutsu.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o rank do jutsu lançado em 1 (D > C > B > A > S).",
  },
  {
    key: "uchiha-chuva-de-shurikens-uchiha",
    nome: "Chuva de Shurikens Uchiha",
    tipo: "bukijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros (esfera de 3 metros de raio)",
    duracao: "Instantâneo",
    componentes: ["A (Shuriken ou Kunai)", "FN", "M"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "uchiha",
    descricao:
      "Você consome uma pilha de shuriken ou kunai e as lança de uma só vez no ar. As criaturas na área alvo devem fazer um teste de resistência de Destreza. Se falharem, sofrem 5d4 de dano Cortante e ficam presas à superfície mais próxima até o final de seu próximo turno, ou sofrem metade do dano e nenhum efeito adicional em um sucesso.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dano em 2d4.",
  },
  {
    key: "uchiha-bola-de-brasa-uchiha",
    nome: "Bola de Brasa Uchiha",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "fogo",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo"],
    cla: "uchiha",
    descricao:
      "Esta é uma variação única do jutsu Estilo Fogo: Fogo da Fênix. Faça um ataque de ninjutsu contra uma criatura alvo dentro do alcance. Se for atingida, ela recebe 5d6+5 de dano de Fogo e ganha 1 grau de Queimado.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dano em 2d6+2.",
  },
  // Rank C
  {
    key: "uchiha-genjutsu-redirecionar",
    nome: "Genjutsu: Redirecionar!",
    tipo: "genjutsu",
    rank: "C",
    tempoConjuracao: "1 Reação, quando você ou outra criatura que você possa ver estiver sob os efeitos de um Genjutsu",
    alcance: "9 metros",
    duracao: "Instantâneo",
    componentes: ["MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Genjutsu", "Visual"],
    cla: "uchiha",
    descricao:
      "Como parte dos requisitos deste jutsu, você deve ter o Sharingan ativo. Você pode tentar imediatamente fazer um teste de habilidade usando seu modificador de Habilidade de Genjutsu contra o Genjutsu desencadeante. Se for bem-sucedido, você encerra o Genjutsu que afeta você ou outra criatura, pois ele se torna Defletido. Ao fazer isso, você deve selecionar outro alvo dentro do alcance que você possa ver e com quem possa fazer contato visual. A criatura alvo deve fazer um teste de resistência de Sabedoria.\n\nSucesso: o alvo resiste aos efeitos deste jutsu.\nFalha: a criatura afetada fica sob o efeito do Genjutsu Defletido como se você o tivesse lançado, seguindo o efeito de falha original desse Genjutsu.\nFalha crítica: o mesmo que falha, mas o alvo segue o efeito original de Falha Crítica desse Genjutsu. Se esse Genjutsu não tiver efeito de Falha Crítica, o alvo se torna Restrito pela duração original do Genjutsu. Uma criatura Restrita é incapaz de fazer Selos de Mão e refaz seu teste no final de cada um de seus turnos para encerrar o efeito sobre ela.",
  },
  {
    key: "uchiha-genjutsu-estrela-vermelha",
    nome: "Genjutsu: Estrela Vermelha",
    tipo: "genjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Genjutsu", "Visual", "Inconsciente"],
    cla: "uchiha",
    descricao:
      "Você tenta colocar um grupo de criaturas sob um Genjutsu único e poderoso. O sol fica vermelho e começa a se aproximar lentamente. Selecione um espaço que você possa ver dentro do alcance. Todas as criaturas em uma esfera de 6 metros de raio centrada nesse espaço devem fazer um teste de resistência de Sabedoria.\n\nSucesso: este jutsu termina e a criatura resiste a seus efeitos.\nFalha: a criatura ganha 2 graus de Medo contra o sol e tenta fugir de qualquer fonte de energia, optando por entrar na escuridão total. Ela deve passar todo o seu turno procurando cobertura ou ocultação de todas as fontes de luz. Uma criatura que começar seu turno sob qualquer fonte de luz recebe 5d8 de dano Psíquico e refaz seu teste no final de cada um de seus turnos, encerrando este Genjutsu em caso de sucesso.\nFalha crítica: o mesmo que falha, mas a criatura também recebe 2d8 de dano Psíquico adicional para cada grau de Medo que tiver no início de seu turno.",
  },
  {
    key: "uchiha-bola-de-chamas-uchiha",
    nome: "Bola de Chamas Uchiha",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "fogo",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros (esfera de 6 metros de raio)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo", "Confronto"],
    cla: "uchiha",
    descricao:
      "Esta é uma variação única do jutsu Estilo Fogo: Grande Bola de Fogo. Você dispara uma corrente de fogo de 1,5 metro de largura e até 18 metros de comprimento em uma linha reta originada de você. Esse fogo para em um espaço de sua escolha ao longo dessa distância e se expande em uma grande esfera de 6 metros de raio de chama laranja flamejante centrada no espaço selecionado. Todas as criaturas no fluxo e na esfera flamejante deste jutsu devem fazer um teste de resistência de Destreza. Se falharem, sofrem 11d4+11 de dano de Fogo e a condição Queimado, ou metade desse valor em um sucesso.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e o dano em 2d4+2.",
  },
  // Rank B
  {
    key: "uchiha-flor-da-chama-uchiha",
    nome: "Flor da Chama Uchiha",
    tipo: "ninjutsu",
    rank: "B",
    natureza: "fogo",
    tempoConjuracao: "1 Ação",
    alcance: "36 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo"],
    cla: "uchiha",
    descricao:
      "Esta é uma variação única do Jutsu Liberação de Fogo: Sol Quente, em que você cria 8 esferas menores de fogo vermelho rubi no ar, fazendo-as flutuar a uma altura de até 9 metros e a não mais de 36 metros de você. Como uma ação bônus no seu turno, você pode comandar uma única esfera para atacar uma única criatura. Faça um ataque de ninjutsu contra essa criatura. Em caso de acerto, ela recebe 4d8+4 de dano de Fogo e a esfera é perdida. Se você errar, ainda perde uma das esferas de fogo.",
  },
  {
    key: "uchiha-genjutsu-efemera",
    nome: "Genjutsu: Efêmera",
    tipo: "genjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 12,
    palavrasChave: ["Hijutsu", "Genjutsu", "Visual", "Inconsciente"],
    cla: "uchiha",
    descricao:
      "Como parte dos requisitos deste jutsu, você deve ter o recurso de clã Sharingan ativo. Você olha para uma criatura alvo e tenta colocá-la em uma poderosa ilusão projetada para torturá-la caso decida não seguir seu comando. Você pode dar a ela qualquer comando de uma palavra que ela possa cumprir de forma confiável em 6 segundos. Se o comando causar dano à pessoa de alguma forma, este jutsu é automaticamente encerrado.\n\nSe o alvo se submeter ao comando, ele o executa e continua a executá-lo mesmo depois de já tê-lo concluído, repetindo a mesma ação e esquecendo-se de que já a realizou, durante toda a duração. Se optar por resistir ao comando, deve fazer um teste de resistência de Sabedoria.\n\nSucesso crítico: este jutsu termina e o alvo se torna imune a ele pelo próximo minuto.\nSucesso: este jutsu termina e o alvo resiste aos seus efeitos.\nFalha: o alvo começa a experimentar uma enorme torrente de visões torturantes de sua escolha, que tanto você quanto ele podem ver. Seus medos, preocupações, desejos e arrependimentos começam a se materializar no corpo do alvo em uma variedade de formas diferentes, de acordo com sua descrição. A cada turno em que não completar seu pedido, o alvo recebe 5d10 de dano Psíquico, ganha 1 grau de Concussão e 1 grau de Confuso.\nFalha crítica: o mesmo que falha, mas o dado de dano se torna 1d12.",
  },
  // Rank A
  {
    key: "uchiha-espiral-de-chamas-uchiha",
    nome: "Espiral de Chamas Uchiha",
    tipo: "ninjutsu",
    rank: "A",
    natureza: "fogo",
    tempoConjuracao: "1 Ação",
    alcance: "36 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Fogo"],
    cla: "uchiha",
    descricao:
      "O lançamento de fogo definitivo dos Uchiha. Como parte dos requisitos deste jutsu, você deve ter o Sharingan ativo. Você conjura três tornados flamejantes. Cada tornado é uma coluna com 1,5 metro de raio e 9 metros de altura.\n\nAs criaturas que estiverem dentro da área dos tornados quando você lançar este jutsu, e aquelas cujo espaço os tornados passarem a ocupar depois, devem fazer um teste de resistência de Destreza, sofrendo 10d10+10 de dano de Fogo em caso de falha, ou metade desse dano em um sucesso.\n\nAlém disso, uma criatura que fizer um teste de resistência para resistir aos efeitos deste jutsu também deve fazer um teste de Constituição, ficando Queimada se falhar. Como uma ação bônus em cada um dos seus turnos, você pode comandar cada tornado separadamente, movendo-os até 18 metros cada; um tornado não pode ocupar o mesmo espaço que outro.\n\nUma criatura não pode ser afetada por mais de 1 tornado por turno. Os Tornados Flamejantes podem ser dispersos com força suficiente: têm CA igual à sua CD de Ninjutsu e pontos de vida iguais a dez vezes o seu modificador de Habilidade de Ninjutsu. O Tornado Flamejante é considerado um construto flamejante, tem vulnerabilidade a dano de Frio e, quando danificado por dano de Vento, recupera pontos de vida igual ao dano que o jutsu teria causado.",
  },
];
