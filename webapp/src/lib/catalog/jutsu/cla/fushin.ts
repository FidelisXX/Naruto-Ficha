import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Fūshin — Estudos da Tsunade, cap. Fūshin ("Jutsu
 * Do Clã Fūshin"). Toda a família "Estilo Tufão" (vento). O livro não traz
 * um Hijutsu de Rank S para este clã.
 */
export const jutsuFushin: JutsuDefinition[] = [
  // Rank D
  {
    key: "fushin-estilo-tufao-despejo",
    nome: "Estilo Tufão: Despejo",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "vento",
    tempoConjuracao: "1 Reação, que você toma quando é alvo de um ataque",
    alcance: "Pessoal (esfera de raio de 3 metros)",
    duracao: "1 turno",
    componentes: ["MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Conflito"],
    cla: "fushin",
    descricao:
      "Você libera uma explosão de vento, protegendo-se com um jato de ar. Até o início do seu próximo turno, você ganha um bônus de +4 na CA, incluindo contra o ataque que o ativou. Criaturas que estiverem a até 3 metros de você quando você lançar este jutsu devem fazer um teste de resistência de Força, sofrendo 2d6 de dano de vento e sendo empurradas para a borda do raio deste jutsu em uma falha.",
    emNiveisSuperiores:
      "Para cada rank acima do Rank D em que você lançar este jutsu, aumente o custo deste jutsu em 3 e o raio em 1,5 metro.",
  },
  {
    key: "fushin-estilo-tufao-veu-do-vento-que-soa",
    nome: "Estilo Tufão: Véu do Vento que Soa",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "vento",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal (cilindro de 4,5 metros de raio)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento"],
    cla: "fushin",
    descricao:
      "Você cria um vórtice de vento feroz em um cilindro de 4,5 metros de raio e 18 metros de altura centrado em você. Quando uma criatura, que não seja você, entrar pela primeira vez na área do jutsu em um turno ou começar seu turno lá, ela é empurrada para trás pela pressão e deve fazer um teste de resistência de Força, sofrendo 3d6 de dano de vento em uma falha ou metade desse dano em um sucesso. Criaturas dentro do raio deste jutsu ficam Pesadamente Obscurecidas para quem está fora dele, e vice-versa.",
    emNiveisSuperiores:
      "Para cada rank acima do Rank D em que você lançar este jutsu, aumente o custo deste jutsu em 3, o dano em 1d6 e o raio em 1,5 metro. Quando você lançar este jutsu em Rank B ou superior, você pode ver através dessa obstrução.",
  },
  {
    key: "fushin-estilo-tufao-geyser-da-tempestade",
    nome: "Estilo Tufão: Geyser da Tempestade",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "vento",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento"],
    cla: "fushin",
    descricao:
      "Você conjura uma explosão de vento que se lança para cima a partir de baixo de uma criatura que você pode ver dentro do alcance. O alvo deve fazer um teste de resistência de Destreza, sofrendo 2d8 de dano de vento e sendo levantado 9 metros no ar antes de cair Derrubado em uma falha, ou metade desse dano e sem efeitos adicionais em um sucesso.",
    emNiveisSuperiores:
      "Para cada rank acima do Rank D em que você lançar este jutsu, aumente o custo deste jutsu em 3, o número de alvos que este jutsu pode afetar em +1 e o dano em 1d8.",
  },
  {
    key: "fushin-estilo-tufao-passo-da-tempestade",
    nome: "Estilo Tufão: Passo da Tempestade",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "vento",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Pessoal",
    duracao: "Instantâneo",
    componentes: ["MC", "M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento"],
    cla: "fushin",
    descricao:
      "Você concentra uma poderosa rajada de vento aos seus pés, permitindo um movimento rápido. Escolha um espaço desocupado a até 9 metros em qualquer direção, incluindo para cima, e se mova até lá. Cada criatura que você passar a até 1,5 metro durante este movimento deve fazer um teste de resistência de Destreza, sendo derrubada em uma falha. Este movimento não provoca ataques de oportunidade.",
    emNiveisSuperiores:
      "Para cada rank acima do Rank D em que você lançar este jutsu, aumente o custo deste jutsu em 3 e a distância que você se move em 3 metros.",
  },
  // Rank C
  {
    key: "fushin-estilo-tufao-colapso-de-vacuo",
    nome: "Estilo Tufão: Colapso de Vácuo",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "vento",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento"],
    cla: "fushin",
    descricao:
      "Você reveste sua mão com chakra de vento antes de liberá-lo como um pulso disruptivo. Faça um ataque de ninjutsu corpo a corpo, causando 4d10 de dano de vento ao alvo. Ao acertar, o alvo também deve fazer um teste de resistência de Constituição, ficando Enfraquecido até o final do seu próximo turno em uma falha, à medida que o ar é forçado para fora de seus pulmões.",
    emNiveisSuperiores:
      "Para cada rank acima do Rank C em que você lançar este jutsu, aumente o custo deste jutsu em 3 e o nível de Enfraquecido ganho em +1.",
  },
  {
    key: "fushin-estilo-tufao-vortice-vicioso",
    nome: "Estilo Tufão: Vórtice Vicioso",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "vento",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal (esfera de raio de 4,5 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento"],
    cla: "fushin",
    descricao:
      "Você libera uma força rotativa de vento que arrasta tudo para seu centro. Cada criatura em uma esfera de raio de 4,5 metros centrada em você, que não seja você, deve fazer um teste de resistência de Força. Em uma falha, criaturas e objetos sofrem 5d6 de dano de vento e são puxados para o centro, ficando Derrubados; em um sucesso, sofrem metade desse dano e não há efeitos adicionais. Este jutsu causa o dobro do dano a estruturas e objetos.",
    emNiveisSuperiores:
      "Para cada rank acima do Rank C em que você lançar este jutsu, aumente o custo deste jutsu em 3, o dano em 1d6 e o raio em 1,5 metro.",
  },
  {
    key: "fushin-estilo-tufao-boca-da-serpente-do-vento",
    nome: "Estilo Tufão: Boca da Serpente do Vento",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "vento",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal (cone de 13,5 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Conflito"],
    cla: "fushin",
    descricao:
      "Você cria uma boca de vento que ruge, empurrando tudo em seu caminho. Criaturas na área devem fazer um teste de resistência de Força, sendo empurradas para trás 9 metros e sofrendo 4d8 de dano de vento, além de 1 nível de Sangramento, em uma falha; em um sucesso, sofrem metade do dano e não há efeitos adicionais. Se uma criatura empurrada por este jutsu colidir com um objeto sólido, seu movimento é interrompido e ela sofre o dano que teria tomado como se tivesse caído a uma distância equivalente.",
    emNiveisSuperiores:
      "Para cada rank acima do Rank C em que você lançar este jutsu, aumente o custo deste jutsu em 3, o dano em 1d8 e o empurrão em 1,5 metro.",
  },
  // Rank B
  {
    key: "fushin-estilo-tufao-bomba-do-vortice",
    nome: "Estilo Tufão: Bomba do Vórtice",
    tipo: "ninjutsu",
    rank: "B",
    natureza: "vento",
    tempoConjuracao: "1 Ação",
    alcance: "27 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 12,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento"],
    cla: "fushin",
    descricao:
      "Você condensa uma bola rampante de vento antes de lançá-la, causando uma explosão. Faça um ataque de ninjutsu à distância contra o alvo. Ao acertar, o alvo sofre 7d8 de dano de vento. Acertando ou errando, o alvo e cada criatura a até 4,5 metros dele devem fazer um teste de resistência de Constituição ou sofrem 4d4 de dano de vento e ficam Atordoadas até o final do seu próximo turno.",
    emNiveisSuperiores:
      "Para cada rank acima do Rank B em que você lançar este jutsu, aumente o custo deste jutsu em 3 e o dano em 1d8 e 1d4, respectivamente.",
  },
  {
    key: "fushin-estilo-tufao-destruicao-de-vento-alto",
    nome: "Estilo Tufão: Destruição de Vento Alto",
    tipo: "ninjutsu",
    rank: "B",
    natureza: "vento",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal (raio de 27 metros)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento", "Sensorial"],
    cla: "fushin",
    descricao:
      "Você cria uma poderosa área giratória de vento que impede criaturas de agir contra a sua vontade. Você pode escolher um número de criaturas igual ao seu modificador de Habilidade de Ninjutsu para não serem afetadas pelos efeitos adversos deste jutsu, enquanto o vento flui ao seu redor. Quando uma criatura, que não seja você, entra na área do jutsu pela primeira vez em um turno ou começa seu turno lá, ela é empurrada pelo vento e deve fazer um teste de resistência de Força, sendo empurrada para trás 13,5 metros em uma falha ou metade desse valor em um sucesso. Criaturas voadoras são empurradas o dobro da distância.\n\nCriaturas dentro do raio deste jutsu ficam Pesadamente Obscurecidas para quem está fora dele, e vice-versa. Você sempre conhece a localização das criaturas dentro do raio deste jutsu, ignorando quaisquer penalidades visuais. Todas as criaturas, exceto você, na área são tratadas como se estivessem em terreno difícil, mesmo criaturas voadoras. Se uma criatura empurrada por este jutsu colidir com um objeto sólido, seu movimento é interrompido e ela sofre o dobro do dano que teria tomado como se tivesse caído a uma distância equivalente.",
    emNiveisSuperiores:
      "Para cada rank acima do Rank B em que você lançar este jutsu, aumente o custo deste jutsu em 3 e o empurrão em 3 metros.",
  },
  // Rank A
  {
    key: "fushin-estilo-tufao-destruicao-de-vento-severa",
    nome: "Estilo Tufão: Destruição de Vento Severa",
    tipo: "ninjutsu",
    rank: "A",
    natureza: "vento",
    tempoConjuracao: "1 Ação de Turno Completo",
    alcance: "Pessoal (cilindro de 13,5 metros)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Vento"],
    cla: "fushin",
    descricao:
      "Você cria um pilar espiral de vento centrado em você que se ergue acima até mesmo das criaturas mais altas. Este tornado possui um raio de 13,5 metros e 45 metros de altura. Este cilindro se torna terreno difícil para cada criatura que não seja você durante sua duração, mesmo para criaturas voadoras. Objetos não atendidos dentro deste cilindro que sejam grandes ou menores são puxados para cima e giram ao redor do centro a 240 km/h.\n\nUma criatura que começa seu turno dentro do cilindro deve fazer um teste de resistência de Força ou ser puxada para cima em direção ao centro e ficar Restringida enquanto estiver em movimento. Todos os objetos e criaturas dentro do cilindro recebem 5d12 de dano de vento no início de cada um dos seus turnos.\n\nCriaturas podem fazer um teste de resistência de Força no início de cada um dos seus turnos para não ficarem Restringidas naquele turno. Se uma criatura ou objeto, que não seja você, estiver no raio deste jutsu por 3 turnos consecutivos, é lançado para fora após subir até a altura deste cilindro, sofrendo dano de queda e ficando Derrubado.",
    emNiveisSuperiores:
      "Para cada rank acima do Rank A em que você lançar este jutsu, aumente o custo deste jutsu em 3 e o dano em 2d12.",
  },
];
