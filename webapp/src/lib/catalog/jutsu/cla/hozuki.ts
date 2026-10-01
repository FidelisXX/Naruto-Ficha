import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Hōzuki — Estudos da Tsunade, cap. Hozuki
 * ("Jutsu Do Clã Hozuki"). Tema de liquefação corporal ("Hidroficação").
 * O livro não traz um Hijutsu de Rank S para este clã, mas traz 4 (não 3)
 * Hijutsu de Rank C.
 */
export const jutsuHozuki: JutsuDefinition[] = [
  // Rank D
  {
    key: "hozuki-grande-braco-de-agua",
    nome: "Grande Braço de Água",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "agua",
    tempoConjuracao: "1 Ação",
    alcance: "1,5 metro",
    duracao: "Instantâneo",
    componentes: ["A (Qualquer Corpo a Corpo)", "MC", "M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Bukijutsu", "Estilo Água"],
    cla: "hozuki",
    descricao:
      "Você aumenta rapidamente seu braço principal movendo a água em seu corpo. Faça um ataque corpo a corpo de Ninjutsu ou Taijutsu com a arma usada para lançar esse jutsu. Em caso de acerto, você causa o dano da sua arma + 2d8 e força o alvo a fazer um teste de resistência de Força. Se falhar, o alvo é empurrado para trás 4,5 metros e fica Atordoado; se for bem-sucedido, nada acontece. Se estiver sob os efeitos do Jutsu de Hidroficação do Clã Hozuki, aumente o dado de dano em 1 passo.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3. Se esse jutsu for lançado no Rank C ou superior, aumente o dano em 1d8. Se esse jutsu for lançado no Rank B ou superior, aumente o número de ataques feitos em +1. Se esse jutsu for lançado no Rank S, aumente o dado de dano em mais um passo.",
  },
  {
    key: "hozuki-corpo-de-agua",
    nome: "Corpo de Água",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "agua",
    tempoConjuracao: "1 Reação, quando você é alvo ou receberia dano de um ataque",
    alcance: "Próprio",
    duracao: "Instantâneo",
    componentes: [],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água"],
    cla: "hozuki",
    descricao:
      "Você é capaz de se transformar rapidamente em água, permitindo que se esquive de mais ataques. Quando for alvo de um ataque, você pode aumentar sua CA em +5 até o início do seu próximo turno. Além disso, você ganha resistência a dano de arma branca, perfurante e cortante até o início de seu próximo turno. Se estiver usando o Jutsu de Hidroficação, você se torna imune a dano de arma branca, perfurante e cortante.",
  },
  {
    key: "hozuki-musculos-de-agua",
    nome: "Músculos de Água",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "agua",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água"],
    cla: "hozuki",
    descricao:
      "Você fortalece seus músculos controlando a água dentro de seu corpo. Esse jutsu não custa Chakra para manter a concentração. Durante a duração, o dano causado por ataques ou jutsu que dependem de sua Força adiciona 2d4 às rolagens. Se estiver se beneficiando do Jutsu de Hidroficação, você adiciona 3d4 em vez disso. Se você lançar um jutsu que permita que suas armas causem um tipo de dano diferente enquanto estiverem sob os efeitos desse jutsu, você só causa esse dano uma vez; depois disso, volta ao dano de arma original.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o bônus em 1d4.",
  },
  {
    key: "hozuki-fuga-pela-agua",
    nome: "Fuga pela Água",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "agua",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "1 rodada",
    componentes: ["MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água"],
    cla: "hozuki",
    descricao:
      "Você se transforma em água para escapar de suas restrições. Se estiver sendo agarrado ou restringido, você se transforma em uma poça de água, escapando da condição.",
  },
  // Rank C
  {
    key: "hozuki-lamina-hozuki",
    nome: "Lâmina Hozuki",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "agua",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água"],
    cla: "hozuki",
    descricao:
      "Você entrelaça correntes de água para criar uma espada de água solidificada em sua mão. Essa espada construída dura até o fim do jutsu. Ela conta como uma arma corpo a corpo simples com a qual você é proficiente, causando 3d6 + seu modificador de Força ou de Destreza em dano Frio, Cortante, Perfuração ou Concussão (à sua escolha no momento do lançamento), e tem as propriedades Versátil (d8), Mortal e Acuidade.\n\nAlém disso, quando você usa a espada para atacar um alvo que esteja pelo menos meio submerso em água, você faz o teste de ataque com vantagem. Se estiver usando o Jutsu de Hidroficação, o tamanho do dado aumenta em um passo (d6 > d8 > d10 > d12). Se você deixar a arma cair, ela se dissipa no final do turno; depois disso, enquanto o jutsu persistir, você pode usar uma ação bônus para fazer a espada reaparecer em sua mão. Se você lançar um jutsu que permita que suas armas causem esse dano enquanto estiverem sob os efeitos deste jutsu, você só causa esse dano uma vez; depois disso, o dano padrão passa a ser 2d6 (ou 2d8, se estiver segurando com as duas mãos).",
  },
  {
    key: "hozuki-arma-de-agua",
    nome: "Arma de Água",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "agua",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água"],
    cla: "hozuki",
    descricao:
      "Você forma uma bala na ponta do seu dedo e a dispara em um alvo dentro do alcance. Faça dois ataques de ninjutsu contra duas criaturas distintas dentro do alcance. Em um acerto, você causa 5d8 + seu modificador de Habilidade de Ninjutsu de dano Frio. Se você estiver usando o Jutsu de Hidroficação, aumente o dano em um passo (d8 > d10).",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e o dano em 2d8.",
  },
  {
    key: "hozuki-bolha-de-agua",
    nome: "Bolha de Água",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "agua",
    tempoConjuracao: "1 Ação",
    alcance: "1,5 metro",
    duracao: "Concentração, até 1 minuto",
    componentes: ["MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água"],
    cla: "hozuki",
    descricao:
      "Uma criatura alvo que você possa ver dentro do alcance deve fazer um teste de resistência de Destreza ou será agarrada com a cabeça submersa em uma bolha de água, feita a partir do seu corpo. Enquanto estiver agarrada dessa forma, ela começa a sufocar — e, enquanto estiver sufocando, é difícil manter a concentração no jutsu: você deve fazer um teste de Constituição (Controle de Chakra) para manter a concentração, perdendo o jutsu em caso de falha.\n\nA criatura começa a se afogar após um número de rodadas igual ao seu modificador de Constituição (mínimo 1). No início de seu primeiro turno após essas rodadas, e no início de cada turno subsequente em que permanecer agarrada, ela recebe dano necrótico igual a 4d8 + seu modificador de Habilidade de Ninjutsu. Enquanto estiver agarrada dessa forma, quando a criatura tentar escapar da garra, ela pode gastar sua ação para fazer um teste de Força (Atletismo) ou Destreza (Acrobacia) contestado pelo seu teste de Força (Controle de Chakra) ou Constituição (Controle de Chakra). Se você estiver usando o Jutsu de Hidroficação, os testes de habilidade feitos para escapar da garra sofrem uma penalidade de 1d4.",
  },
  {
    key: "hozuki-arma-de-agua-dupla",
    nome: "Arma de Água: Dupla",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "agua",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (cone de 4,5 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água"],
    cla: "hozuki",
    descricao:
      "Você forma balas na borda de cada um de seus dedos e as dispara com força suficiente para imitar uma espingarda. As criaturas em um cone de 4,5 metros à sua frente devem fazer um teste de resistência de Destreza, sofrendo 6d6 de dano Frio e ficando Resfriadas em uma falha, ou metade do dano em um sucesso.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3, o dano em 2d6 e o tamanho do cone em 1,5 metro.",
  },
  // Rank B
  {
    key: "hozuki-hidroficacao",
    nome: "Hidroficação",
    tipo: "ninjutsu",
    rank: "B",
    natureza: "agua",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 12,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água"],
    cla: "hozuki",
    descricao:
      "Você se transforma em uma mistura de água e óleo, liquidificando-se totalmente e tornando-se uma poça de fluido sensível que você pode controlar. Durante a duração deste jutsu, você pode transformar qualquer parte do seu corpo nessa mistura líquida, permitindo que passe por qualquer fenda grande o suficiente para a água passar. Você ganha resistência a dano de arma branca, perfurante e cortante, e imunidade a dano de Fogo — mas ganha vulnerabilidade a dano de Relâmpago. Além disso, suas pontuações de Força e Constituição aumentam em +4 enquanto estiver usando este jutsu.",
  },
  {
    key: "hozuki-balao-de-agua",
    nome: "Balão de Água",
    tipo: "ninjutsu",
    rank: "B",
    natureza: "agua",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros (cubo de 4,5 metros)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 10,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água"],
    cla: "hozuki",
    descricao:
      "Você cria uma poça de água misturada com óleo, produzindo bolhas que flutuam ao seu redor. Essas bolhas são lançadas em um cubo de 4,5 metros de área dentro do alcance, com velocidade suficiente para causar dano de Concussão. As criaturas de sua escolha que entrarem pela primeira vez na área escolhida, ou que começarem seu turno dentro dela, devem fazer um teste de resistência de Destreza, sofrendo 4d10 de dano de Concussão e ficando Atordoadas em uma falha, ou metade do dano em um sucesso. Como uma ação em seu turno, você pode mover a área alvo em até 9 metros em qualquer direção dentro do alcance. Se estiver usando o Jutsu de Hidroficação, aumente o dado de dano em 1 passo (d10 > d12).",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank B, aumente o custo desse jutsu em 3 e o dano em 2d10.",
  },
  // Rank A
  {
    key: "hozuki-onda-de-demonio",
    nome: "Onda de Demônio",
    tipo: "ninjutsu",
    rank: "A",
    natureza: "agua",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 16,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Água"],
    cla: "hozuki",
    descricao:
      "Como requisito para ativar este jutsu, você deve ter a Hidroficação ativa no momento. Você encerra sua concentração em Hidroficação e este jutsu toma seu lugar — você mantém todos os efeitos da Hidroficação, inclusive os efeitos extras concedidos a outros jutsu, e soma os efeitos deste jutsu a eles. Além disso, você só pode lançar jutsu com a palavra-chave Liberação de Água enquanto este jutsu estiver ativo.\n\nVocê se funde com um corpo maior de água, aumentando seu tamanho para Grande e sua pontuação de Força em +4. Além disso, como reação, quando você vir uma criatura aliada em um raio de 3 metros de você ser alvo de um ataque, você pode se interpor por esse aliado, mudando o alvo desse ataque para você.",
  },
];
