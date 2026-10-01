import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Senju — Estudos da Tsunade, cap. Senju
 * ("Jutsu Do Clã Senju"). Estilo Madeira (Mokuton) — fusão de Estilo
 * Terra e Estilo Água, com dano sempre listado como "dano de Terra" no
 * texto-fonte, por isso `natureza: "terra"` em todas as entradas. 10
 * Hijutsu no total (4/3/2/1), sem Rank S.
 *
 * Nota de normalização: o texto-fonte usa dois nomes diferentes para a
 * mesma estrutura em "Estilo Madeira: Cabeças de Cão" ("Fragmento de
 * Terremoto" na descrição inicial, "Pilar" nas referências seguintes) —
 * normalizado para "Pilar de Madeira" ao longo de toda a entrada, como
 * já feito antes para a Raiva do Dragão/Ira dos Dragões (Ryu) e o Clone
 * Humano-Fera/Besta (Inuzuka). A fonte também mistura terminologia de
 * Portugal ("utilizador", "lançamento de resistência", "tua/teu") —
 * normalizada para o padrão brasileiro usado no restante do catálogo.
 */
export const jutsuSenju: JutsuDefinition[] = [
  // Rank D
  {
    key: "senju-estilo-madeira-tecnica-da-grande-floresta",
    nome: "Estilo Madeira: Técnica da Grande Floresta",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "terra",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra", "Estilo Água"],
    cla: "senju",
    descricao:
      "Você muda a estrutura de seus braços ou pernas para uma estrutura de madeira reforçada com Chakra, transformando seu apêndice em uma forquilha de múltiplos ramos.\n\nFaça um ataque de ninjutsu corpo a corpo contra uma criatura que você possa ver dentro do alcance. Se for atingida, ela sofre 2d8 de dano de Terra e deve fazer um teste de resistência de Força. Se falhar, a criatura fica agarrada por você até escapar ou até você decidir libertá-la.\n\nUma criatura agarrada por você pode ser puxada 3 metros para mais perto de você como uma ação bônus em cada um dos seus turnos. Uma criatura agarrada pode gastar sua ação para refazer seu teste e escapar deste agarramento, se for bem-sucedida.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3, o dano em 2d8 e o alcance em 3 metros.",
  },
  {
    key: "senju-estilo-madeira-mundo-das-arvores",
    nome: "Estilo Madeira: Mundo das Árvores",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "terra",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (cubo de 9 metros)",
    duracao: "1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra", "Estilo Água"],
    cla: "senju",
    descricao:
      "Você bate as palmas das mãos juntas enquanto injeta Chakra no chão, dando origem a uma série de raízes e plantas que sobem e enchem um cubo de 9 metros originado em você com madeira e raízes. Todas as criaturas à sua escolha tratam a área como terreno difícil e não podem usar as ações de Correr ou Esquivar enquanto estiverem dentro da área.\n\nAlém disso, os Hijutsu do Clã Senju que você lançar dentro da área deste jutsu ignoram pontos de vida temporários e estruturas que receberiam dano no lugar do alvo, afetando o alvo diretamente.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o tamanho do cubo em 3 metros.",
  },
  {
    key: "senju-estilo-madeira-casca-de-pera",
    nome: "Estilo Madeira: Casca de Pera",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "terra",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra", "Estilo Água"],
    cla: "senju",
    descricao:
      "Você bate as palmas enquanto injeta Chakra no solo, controlando uma única raiz e aprimorando-a até que obedeça ao seu comando mental.\n\nFaça um ataque de ninjutsu à distância contra uma criatura que você possa ver dentro do alcance, enquanto a raiz irrompe do solo, afiando-se para produzir lanças. Em caso de acerto, a criatura alvo sofre 3d6 de dano de Terra.\n\nUma criatura que sofra 15 ou mais de dano deste jutsu deve fazer um teste de resistência, pois as raízes empaladas se agarram ao chão novamente, enraizando-a no lugar. Se falhar, a criatura alvo fica Imobilizada durante 1 minuto.\n\nUma criatura imobilizada por este jutsu pode fazer um teste de Atletismo contra sua CD de resistência de Ninjutsu para encerrar este efeito como uma ação em seu turno, libertando-se da madeira enraizada.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dano em 2d6.",
  },
  {
    key: "senju-estilo-madeira-cabecas-de-cao",
    nome: "Estilo Madeira: Cabeças de Cão",
    tipo: "ninjutsu",
    rank: "D",
    natureza: "terra",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC", "SC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Fuinjutsu", "Estilo Terra", "Estilo Água"],
    cla: "senju",
    descricao:
      "Você bate as palmas enquanto injeta Chakra no chão antes de conjurar 4 Pilares de Madeira, que preenchem até 4 espaços diferentes que você possa ver. Cada Pilar de Madeira tem 3 metros de altura, 1,5 metro de espessura, é feito de madeira, tem uma CA igual à sua CD de resistência de Ninjutsu e 25 pontos de vida.\n\nCada Pilar de Madeira emite uma aura supressiva que afeta criaturas à sua escolha a até 4,5 metros de cada pilar. Criaturas selecionadas que estejam dentro de um raio de 4,5 metros de um pilar no início de seus turnos, ou que entrarem no raio pela primeira vez em seus turnos, devem fazer um teste de resistência de Constituição, sofrendo 4d6 de dano de Chakra e ganhando 1 grau de Selado em uma falha, ou metade do dano e nenhum efeito adicional em um sucesso. Uma criatura só pode ser afetada por 1 aura de pilar por turno.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3, os pontos de vida do Pilar em 15 e o dano em 2d6.",
  },
  // Rank C
  {
    key: "senju-estilo-madeira-arvore-da-grande-lanca",
    nome: "Estilo Madeira: Árvore da Grande Lança",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "terra",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros (cubo de 4,5 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra", "Estilo Água"],
    cla: "senju",
    descricao:
      "Você bate as palmas enquanto injeta Chakra no chão. Selecione um espaço que você possa ver dentro do alcance, onde uma grande árvore explode do solo sem quaisquer folhas ou folhagem, mas sim ramos de madeira afiados que enchem um cubo de 4,5 metros.\n\nAs criaturas ao alcance da árvore maciça fazem um teste de resistência de Destreza, sofrendo 8d4 de dano de Terra e ficando Restritas pela árvore maciça se falharem, ou metade do dano e nenhum efeito adicional em um sucesso.\n\nAs criaturas restritas por este jutsu podem fazer um teste de Atletismo contra sua CD de resistência de Ninjutsu para encerrar a condição de Restrito.\n\nA árvore que aparece permanece por 1 hora antes de murchar e se transformar em pó, ou ser destruída por outros meios. Esta árvore tem uma CA igual à sua CD de resistência de Ninjutsu e 20 pontos de vida, e conta como um Constructo de Terra.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e invoque uma segunda árvore em um espaço diferente dentro do alcance. Uma criatura só pode ser afetada por uma instância deste jutsu.",
  },
  {
    key: "senju-estilo-madeira-tecnica-hobi",
    nome: "Estilo Madeira: Técnica Hōbi",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "terra",
    tempoConjuracao:
      "1 Reação, que você usa quando você ou uma criatura que possa ver dentro do alcance sofreria dano ou fizesse um teste de resistência de Força, Destreza ou Constituição",
    alcance: "Próprio (cubo de 3 metros)",
    duracao: "1 rodada",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra", "Estilo Água"],
    cla: "senju",
    descricao:
      "Você bate as palmas enquanto injeta Chakra no chão, conjurando uma enorme cúpula de madeira como uma estrutura de seu desenho e descrição. Todas as criaturas à sua escolha são protegidas, enquanto outras criaturas que você não selecionou são empurradas para fora da proteção desta estrutura, para a borda, em um espaço que as mantenha a salvo. A estrutura intercepta todos os ataques exceto Genjutsu, e quebra a linha de visão, concedendo cobertura total à criatura afetada.\n\nA estrutura se fragmenta e se dissolve no início do seu próximo turno. Uma criatura pode deixar a proteção da estrutura, mas não pode voltar a entrar nela depois de sair.\n\nA estrutura tem uma CA igual à sua CD de resistência de Ninjutsu e 30 pontos de vida temporários. Qualquer dano em excesso atravessa e afeta a criatura alvo normalmente.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e os pontos de vida temporários da estrutura em 10.",
  },
  {
    key: "senju-estilo-madeira-tecnica-hotei",
    nome: "Estilo Madeira: Técnica Hotei",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "terra",
    tempoConjuracao: "1 Ação",
    alcance: "36 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra", "Estilo Água"],
    cla: "senju",
    descricao:
      "Você bate as palmas enquanto injeta Chakra no chão, conjurando múltiplas mãos de madeira que se projetam do chão e tentam agarrar até duas criaturas que você possa ver dentro do alcance. A criatura alvo deve ter sucesso em um teste de resistência de Destreza, ou é agarrada; se for bem-sucedida, não há mais efeitos.\n\nUma criatura agarrada também deve fazer um teste de resistência de Força, sendo puxada para a frente e derrubada enquanto as mãos se retraem; se o teste for bem-sucedido, a criatura permanece de pé.\n\nUma criatura agarrada ou derrubada pode fazer um teste de resistência como uma ação em seu turno para encerrar o efeito.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e selecione uma criatura adicional para este jutsu afetar.",
  },
  // Rank B
  {
    key: "senju-estilo-madeira-clone-de-madeira",
    nome: "Estilo Madeira: Clone de Madeira",
    tipo: "ninjutsu",
    rank: "B",
    natureza: "terra",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 10,
    custoChakraTexto: "Especial (10 Chakra por clone)",
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Terra", "Estilo Água", "Clone"],
    cla: "senju",
    descricao:
      "Você bate as palmas enquanto injeta Chakra no chão, conjurando clones feitos de madeira. Esta é uma versão ainda mais avançada da Técnica dos Clones das Sombras, em que você manifesta clones feitos de madeira endurecida, maleável e densa, conhecida como Clone de Madeira.\n\nVocê pode conjurar até 6 Clones de Madeira de uma vez, cada um custando 10 Chakra. Os Clones de Madeira agem de uma só vez e todos tentam executar o mesmo comando. Se ordenados a realizar a ação de Ajudar, eles só podem ajudar o invocador. Os Clones de Madeira são conjurados com uma réplica de qualquer arma que você tenha consigo no momento da criação, também feita de madeira aprimorada com Chakra.\n\nQuando um Clone de Madeira faz um ataque usando essa arma ou um ataque desarmado, causa 1d10 + seu modificador de Habilidade de Ninjutsu de dano de Terra, independente do ataque usado. Ele pode fazer até 2 ataques usando sua ação.\n\nTodos os Clones de Madeira têm 15 pontos de vida e podem usar todos os Jutsu Senju de sua lista conhecida de Rank C ou inferior, até duas vezes cada. Os Clones de Madeira usam seu bônus de Constituição para todos os testes de resistência.\n\nDepois que o clone atingir 0 pontos de vida, executar 2 Hijutsu do Clã Senju, ou for dispensado como uma ação bônus, o jutsu termina.",
  },
  {
    key: "senju-estilo-madeira-invocacao-de-dragao-de-madeira",
    nome: "Estilo Madeira: Invocação de Dragão de Madeira",
    tipo: "ninjutsu",
    rank: "B",
    natureza: "terra",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC", "SC"],
    custoChakra: 14,
    custoChakraTexto: "Especial (14 Chakra)",
    palavrasChave: ["Hijutsu", "Ninjutsu", "Fuinjutsu", "Estilo Terra", "Estilo Água"],
    cla: "senju",
    descricao:
      "Você bate as palmas enquanto injeta Chakra no chão, conjurando um enorme dragão de madeira serpentino. Você comanda o Dragão e ele só obedece a você (não é necessária nenhuma ação), agindo no final de cada um dos seus turnos. Ele é proficiente em todos os testes de resistência, usando seu modificador de Habilidade de Ninjutsu como bônus de proficiência, e usa seu bônus de ataque de Ninjutsu ou sua CD de resistência para efeitos que exijam isso.\n\nVocê pode, como ação bônus ou reação, fazer com que o dragão use sua habilidade Detonação. Ele usa as seguintes estatísticas:\n\nDragão de Madeira — Construto Enorme, não alinhado\nClasse de Armadura: 13 + seu modificador de Habilidade de Ninjutsu\nPontos de Vida: 125 (10d10 + 70)\nVelocidade: 12 metros\nFOR 23 (+6), DES 10 (+0), CON 25 (+7), INT 1 (-5), SAB 10 (+0), CAR 1 (-5)\nImunidades a Dano: Veneno, Psíquico, Contundente, Perfurante e golpes de armas não aprimoradas com Chakra.\nImunidades a Condições: Encantado, Exaustão, Amedrontado, Paralisado, Petrificado, Envenenado.\nSentidos: Visão no Escuro a 18 metros, percepção passiva 10.\nForma Imutável: o Dragão de Madeira é imune a qualquer jutsu ou efeito que altere sua forma.\nArmas Elementais: os ataques do Dragão são aprimorados com Chakra.\nMaquiagem Inefável: o Dragão de Madeira não pode ser dissipado por nenhum jutsu de Rank B ou inferior.\n\nAções\nAtaque Múltiplo: o Dragão de Madeira pode atacar 2 vezes com sua mordida.\nMordida: ataque com arma corpo a corpo, alcance 3 metros, um alvo. Acerto: 2d8+6 de dano de Terra. Em um acerto, o alvo deve ter sucesso em um teste de Constituição ou sofre dano de Chakra igual à metade do dano causado.\nConstrição: em um ataque de Mordida bem-sucedido, o dragão de madeira pode abrir mão de seu segundo ataque para, em vez disso, constringir o alvo. Se isso for feito, o alvo deve ter sucesso em um teste de resistência de Força para não ficar agarrado e contido pelo dragão. No final do turno do dragão e das criaturas restritas, a criatura perde 5 de Chakra. Uma criatura restrita pode fazer um teste de Atletismo ou Acrobacia contra CD 18 como uma ação para encerrar ambas as condições.\nDetonação: o dragão explode em uma enorme explosão incendiária de Água e madeira. Todas as criaturas em um raio de 4,5 metros do dragão quando ele explode fazem um teste de resistência de Destreza, sofrendo 6d8 de dano de Terra se falharem, ou metade desse valor se forem bem-sucedidas. Uma criatura que estiver contida por esse dragão, quando essa habilidade for usada, recebe o dobro do dano.",
  },
  // Rank A
  {
    key: "senju-estilo-madeira-florescimento-do-vinculo-da-arvore-burial",
    nome: "Estilo Madeira: Florescimento do Vínculo da Árvore Burial",
    tipo: "ninjutsu",
    rank: "A",
    natureza: "terra",
    tempoConjuracao: "Ação de Rodada Completa",
    alcance: "27 metros (cilindro de 9 metros)",
    duracao: "Até ser Dissipado ou Destruído",
    componentes: ["SM", "MC", "SC"],
    custoChakra: 20,
    custoChakraTexto: "Especial (20 Chakra)",
    palavrasChave: ["Hijutsu", "Ninjutsu", "Fuinjutsu", "Estilo Terra", "Estilo Água"],
    cla: "senju",
    descricao:
      "Você bate as palmas enquanto injeta Chakra no chão, trazendo uma grande onda de vitalidade para a folhagem nas profundezas do solo. Selecione um espaço que você possa ver dentro do alcance. Uma árvore enorme, com 27 metros de altura e 9 metros de largura, feita de raízes, explode para cima tentando capturar todas as criaturas em seu caminho. Este jutsu conta como um Constructo de Terra.\n\nTodas as criaturas em um cilindro de 9 metros de largura e 27 metros de altura devem ter sucesso em um teste de resistência de Força, ou a árvore as captura completamente, as domina e as prende dentro de si. Se o teste for bem-sucedido, elas escapam das raízes da árvore.\n\nAs criaturas que falharem no teste têm cobertura total de todas as criaturas dentro e fora da árvore, e começam a sentir uma pressão imensa, à medida que a árvore começa a se comprimir, esmagando-as e se alimentando de sua massa biológica como nutrientes. As criaturas presas sofrem 7d8 de dano de Terra e de Chakra no início de cada um de seus turnos.\n\nUma criatura contida pode usar uma ação em seu turno para fazer um teste de Força contra sua CD de resistência de Ninjutsu. Assim que passar nesse teste duas vezes, ela escapa completamente do jutsu.\n\nUma criatura cujos pontos de vida atinjam 0 enquanto estiver sob os efeitos deste jutsu se torna parte da árvore.\n\nA árvore conjurada por este jutsu permanece e não se dissolve. Ela tem 100 pontos de vida e 21 de CA.",
  },
];
