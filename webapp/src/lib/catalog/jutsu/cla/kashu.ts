import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Kashu — Estudos da Tsunade, cap. Kashu
 * ("Jutsu Do Clã Kashu"). Genjutsu sonoro/auditivo canalizado através
 * de uma "Ferramenta Ninja Auditiva" (um instrumento musical amaldiçoado).
 * `natureza` fica de fora em todas as entradas (dano Psíquico, sem
 * elemento). 10 Hijutsu no total (4/3/2/1), sem Rank S.
 *
 * Nota: a fonte também traz blocos de estatística de criatura para os
 * três "Doki" (Bandido, Garra e Clube), invocados por Instrumento
 * Demoníaco: Trio Requiem — não incluídos aqui por serem criaturas, não
 * jutsu; ficam fora de escopo deste catálogo.
 */
export const jutsuKashu: JutsuDefinition[] = [
  // Rank D
  {
    key: "kashu-zombaria-vulgar",
    nome: "Zombaria Vulgar",
    tipo: "genjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Genjutsu", "Auditivo"],
    cla: "kashu",
    descricao:
      "Esta é uma variante única de \"Zombaria Viciosa\". Você libera um ataque agressivo de insultos profanos contra uma criatura dentro do alcance. Se o alvo puder ouvi-lo, deve fazer um teste de resistência de Sabedoria.\n\nSucesso: o alvo não sofre dano e não recebe efeitos adicionais.\nFalha: o alvo sofre 4d6 de dano Psíquico e tem desvantagem no primeiro ataque que fizer até o final de seu próximo turno.\nFalha crítica: mesmos efeitos da falha, mas o alvo sofre desvantagem em todos os ataques que fizer até o final de seu próximo turno.",
  },
  {
    key: "kashu-instrumento-demoniaco-disparo-potenciado",
    nome: "Instrumento Demoníaco: Disparo Potenciado",
    tipo: "genjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Instantâneo",
    componentes: ["MC", "A (Ferramenta Ninja Auditiva)"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Genjutsu", "Auditivo", "Tátil"],
    cla: "kashu",
    descricao:
      "Você concentra seu chakra em sua Ferramenta Ninja Auditiva para liberar uma poderosa onda sonora contra um inimigo. Faça um ataque de Genjutsu à distância. Se acertar, o alvo sofre 3d8 + seu modificador de Habilidade de Genjutsu em dano Psíquico e deve ter sucesso em um teste de resistência de Sabedoria ou ganhar 1 grau de Desorientação.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3. Se lançado a Rank C ou superior, aumente o dado de dano deste jutsu em 1 dado, até um máximo de d12. Se lançado a Rank B ou superior, aumente o número de ataques feitos em +1. Se lançado a Rank A ou superior, aumente o dado de dano deste jutsu em 1 dado, até um máximo de d12. Se lançado a Rank S, aumente o número de ataques feitos em +1.",
  },
  {
    key: "kashu-instrumento-demoniaco-aprimoramento-psiquico",
    nome: "Instrumento Demoníaco: Aprimoramento Psíquico",
    tipo: "genjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal",
    duracao: "Concentração, até 1 minuto",
    componentes: ["MC", "A (Ferramenta Ninja Auditiva)"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Genjutsu", "Tátil"],
    cla: "kashu",
    descricao:
      "Você aprimora o poder de sua Ferramenta Ninja Auditiva ao concentrar seu chakra através dela, fazendo-a ressoar com uma melodia mortal. Ataques com sua Ferramenta Ninja Auditiva usam seu modificador de Habilidade de Genjutsu para os testes de ataque. Criaturas atingidas por sua Ferramenta Ninja Auditiva sofrem 3d4 + seu modificador de Habilidade de Genjutsu em dano Psíquico e, uma vez por rodada, devem fazer um teste de resistência de Inteligência, ganhando 1 grau de Desorientação em uma falha.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dado de dano em 1 dado (d4>d6>d8>d10>d12). Se lançado a Rank B ou superior, a duração deste jutsu se torna 10 minutos.",
  },
  {
    key: "kashu-instrumento-demoniaco-ruptura-sonora",
    nome: "Instrumento Demoníaco: Ruptura Sonora",
    tipo: "genjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["MC", "A (Ferramenta Ninja Auditiva)"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Genjutsu", "Auditivo", "Tátil"],
    cla: "kashu",
    descricao:
      "Esta é uma variante única de \"Zombaria Viciosa\". Você libera um ataque agressivo de insultos profanos contra uma criatura dentro do alcance. Se o alvo puder ouvi-lo (embora não precise compreendê-lo), deve fazer um teste de resistência de Sabedoria.\n\nSucesso crítico: o alvo não sofre dano e perde todos os graus de Desorientação.\nSucesso: o alvo não sofre dano e não recebe efeitos adicionais.\nFalha: o alvo sofre Xd6 de dano Psíquico, onde X = 1 + os graus de Desorientação que o alvo possui.\nFalha crítica: o alvo sofre Xd6 de dano Psíquico, onde X = 2 + o dobro dos graus de Desorientação que o alvo possui.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dano deste jutsu em 1 dado (d4>d6>d8>d10>d12). Se este jutsu for lançado a Rank S, o alvo também ganha a condição Surdo até remover todos os graus de Desorientação.",
  },
  // Rank C
  {
    key: "kashu-instrumento-demoniaco-interrupcao-psiquica",
    nome: "Instrumento Demoníaco: Interrupção Psíquica",
    tipo: "genjutsu",
    rank: "C",
    tempoConjuracao:
      "1 Reação, que você usa quando uma criatura dentro do alcance for lançar um jutsu com o componente SM",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["MC", "A (Ferramenta Ninja Auditiva)"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Genjutsu", "Auditivo"],
    cla: "kashu",
    descricao:
      "Quando você vê uma criatura tentando fazer Selos de Mão para seu jutsu, você libera uma onda sonora em resposta, tentando perturbá-la. A criatura alvo deve fazer um teste de resistência de Sabedoria, perdendo a capacidade de fazer Selos de Mão até o início de seu próximo turno e ganhando 1 grau de Desorientação em uma falha.",
  },
  {
    key: "kashu-instrumento-demoniaco-musica-hipnotica",
    nome: "Instrumento Demoníaco: Música Hipnótica",
    tipo: "genjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "36 metros (esfera de 6 metros de raio)",
    duracao: "Concentração, até 1 minuto",
    componentes: ["MC", "A (Ferramenta Ninja Auditiva)"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Genjutsu", "Auditivo", "Desavisado"],
    cla: "kashu",
    descricao:
      "Esta é uma variante única de \"Padrões Hipnóticos\". Você toca uma canção encantadora que cativa aqueles em uma esfera de 6 metros de raio originada em um ponto dentro do alcance, fazendo-os dançar como se ninguém estivesse olhando. Cada criatura na área que ouvir essa música deve fazer um teste de resistência de Sabedoria.\n\nEnquanto estiver encantada por este jutsu, a criatura não consegue ouvir nada além da música produzida pelo genjutsu.\n\nSucesso crítico: os efeitos deste jutsu terminam no alvo e ele tem vantagem no próximo teste de resistência contra este jutsu pelos próximos 10 minutos.\nSucesso: sem efeitos, e este jutsu termina no alvo.\nFalha: a criatura fica Encantada e Restrita, enredada pela música. O alvo pode refazer este teste de resistência para encerrar os efeitos deste jutsu no final de cada um de seus turnos. Os efeitos deste jutsu terminam imediatamente se o alvo sofrer dano ou for derrubado.\nFalha crítica: mesmos efeitos da falha, mas o alvo também fica Incapacitado durante a duração.",
  },
  {
    key: "kashu-interrogacao-forcada",
    nome: "Interrogação Forçada",
    tipo: "genjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Concentração, até 10 minutos",
    componentes: ["SM", "MC"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Genjutsu", "Auditivo", "Tátil", "Desavisado"],
    cla: "kashu",
    descricao:
      "Você penetra na mente do seu alvo, agarrando as partes mais delicadas do cérebro dele e falando uma língua incompreensível, compelindo-o a revelar seus segredos.\n\nSelecione uma criatura dentro do alcance; o alvo deve fazer um teste de resistência de Carisma. Em uma falha, sempre que lhe for feita uma pergunta, ele deve responder completamente e com sinceridade; caso contrário, sofre 7d4 de dano Psíquico e ganha 1 grau de Desorientação.\n\nUma criatura sob os efeitos deste Genjutsu refaz seu teste de resistência cada vez que responde a uma pergunta. Se a criatura responder sinceramente, faz o teste com vantagem. Se mentir ou se recusar a responder, faz o teste com desvantagem.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e o dano em 2d4.",
  },
  // Rank B
  {
    key: "kashu-instrumento-demoniaco-trio-requiem",
    nome: "Instrumento Demoníaco: Trio Requiem",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação de Turno Completo",
    alcance: "3 metros",
    duracao: "10 minutos",
    componentes: ["SM", "MC", "SC", "A (Ferramenta Ninja Auditiva)"],
    custoChakra: 15,
    custoChakraTexto: "Especial (15 Chakra)",
    palavrasChave: ["Hijutsu", "Ninjutsu", "Fuinjutsu"],
    cla: "kashu",
    descricao:
      "Você invoca 1 dos 3 Doki lendários para sua ajuda. Os Doki podem ser controlados em seu turno usando sua ação bônus, enquanto você estiver equipado com sua Ferramenta Ninja Auditiva.\n\nComo uma ação bônus em seu turno, você pode dispensar todos os Doki convocados. Se um Doki for reduzido a 0 pontos de vida, ele se desfaz, e você não pode convocar o mesmo Doki novamente até completar um Descanso Longo. Além disso, você não pode convocar o mesmo Doki mais de uma vez por Descanso Longo e não pode ter mais de um Doki do mesmo tipo convocado ao mesmo tempo.\n\nEnquanto seu Doki estiver a até 1,5 metro de um aliado, e esse aliado for o alvo de um ataque, você pode usar sua reação para comandar o Doki a se interpor ao ataque, tornando-se o novo alvo.\n\nAlgumas habilidades dos Doki podem exigir um teste de resistência; nesse caso, a CD é igual à sua CD de Resistência de Ninjutsu ou Genjutsu.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank B, aumente o custo desse jutsu em 5 e o número de Doki convocados em 1. Você não pode convocar mais de 1 Doki do mesmo tipo dessa forma.",
  },
  {
    key: "kashu-instrumento-demoniaco-onda-potenciada",
    nome: "Instrumento Demoníaco: Onda Potenciada",
    tipo: "genjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal",
    duracao: "Concentração, até 1 minuto",
    componentes: ["MC", "A (Ferramenta Ninja Auditiva)"],
    custoChakra: 11,
    palavrasChave: ["Hijutsu", "Genjutsu", "Auditivo", "Tátil"],
    cla: "kashu",
    descricao:
      "Você flui chakra através de sua Ferramenta Ninja Auditiva, aprimorando seus sons com melodias aterrorizantes. Genjutsu que você lançar com a palavra-chave Auditivo reduzem sua faixa de Falha Crítica em 2. Isso não se acumula com outros efeitos que reduzam sua faixa de Falha Crítica.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank B, aumente o custo desse jutsu em 3 e a faixa de Falha Crítica em 1.",
  },
  // Rank A
  {
    key: "kashu-instrumento-demoniaco-cadeias-da-fantasia",
    nome: "Instrumento Demoníaco: Cadeias da Fantasia",
    tipo: "genjutsu",
    rank: "A",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal (esfera de 18 metros de raio)",
    duracao: "Instantânea",
    componentes: ["MC", "A (Ferramenta Ninja Auditiva)"],
    custoChakra: 25,
    palavrasChave: ["Hijutsu", "Genjutsu", "Auditivo", "Visual", "Tátil"],
    cla: "kashu",
    descricao:
      "Você toca um som demoníaco, criando uma paisagem infernal onde só existem dor e sofrimento para todos aqueles sob os efeitos deste Genjutsu. Todas as criaturas dentro do alcance devem fazer um teste de resistência de Sabedoria.\n\nSucesso crítico: o alvo não sofre efeitos e fica imune a este Genjutsu pelas próximas 24 horas.\nSucesso: o alvo não sofre dano e não tem efeitos adicionais.\nFalha: o alvo sofre 10d8 de dano Psíquico e fica Restrito à medida que fios se enrolam ao seu redor.\nFalha crítica: o alvo sofre 10d8 de dano Psíquico, fica Restrito e não pode realizar ações enquanto os fios se enrolam ao seu redor.\n\nCriaturas sob os efeitos deste Genjutsu ficam Cegas e Surdas para todas as outras criaturas fora do lançador. Ao final do turno de uma criatura, ela pode refazer o teste para encerrar os efeitos deste Genjutsu sobre si mesma; caso contrário, sofre 10d8 de dano adicional. Se uma criatura sob os efeitos deste Genjutsu sofrer qualquer dano além do dano Psíquico, ela imediatamente refaz o teste com vantagem. Se uma criatura tiver 0 de Chakra, este jutsu causa, em vez disso, 20d8 de dano Psíquico.",
  },
];
