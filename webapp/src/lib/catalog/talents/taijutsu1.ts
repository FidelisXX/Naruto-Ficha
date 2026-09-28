import type { TalentDefinition } from "@/lib/talents/types";

/** Talentos de Taijutsu — Manual Shinobi, Cap. 13, p.232-235 (parte 1, inclui subcategoria Bukijutsu). */
export const talentosTaijutsu1: TalentDefinition[] = [
  {
    key: "treinamento-de-assassinos",
    nome: "Treinamento de Assassinos",
    categoria: "taijutsu",
    descricao: "Você treinou sob os ensinamentos da terra das Sombras diretamente ou por descendência, ganhando os seguintes benefícios:\n\n- Aumente seu valor de Destreza em 1, até um máximo de 20.\n- Você ganha proficiência em Kunai, Shuriken e Senbon, se você já não estiver. Essas armas ficaram conhecidas como Armas Assassinas.\n- Quando você causaria dano com uma Arma Assassina como resultado de um ataque com arma ou Bukijutsu que você lança, uma vez por turno, você pode infligir a condição Sangramento em um alvo.\n- Você não pode ser desarmado da sua Arma Assassina e eles não podem ser quebrados enquanto você os empunha.\n- Quando você realiza uma ação de ataque usando uma arma Assassina, você pode, no lugar dos ataques feitos com essa ação, fazer um Ataque de Assassinato. Ataques de assassinato são armas de ataques que causam o máximo de dano possível com o arma escolhida.",
  },
  {
    key: "arquivista-de-bukijutsu",
    nome: "Arquivista de Bukijutsu",
    categoria: "taijutsu",
    preRequisito: "Nível 4+",
    descricao: "Seu foco no calor do combate e no domínio do bukijutsu, permite tecer artes de armas junto com a habilidade muito maior. Você ganha os seguintes benefícios:\n\n- Aumente seu valor de Força ou Destreza em 1, até um máximo de 20.\n- Você aprende um bukijutsu adicional para o qual você se qualifica. Isso não conta para o seu Jutsu Conhecido.\n- Na próxima vez que você atingir o 5º, 9º ou 13º nível, você aprende um bukijutsu adicional de 1 nível inferior a sua classificação de jutsu mais alta conhecida.\n- Se você escolher esse talento depois de passar no teste de níveis declarados anteriormente, você ganha 1 adicional Rank D se passou do 5º nível, 1 Rank C adicional se passou no 9º nível e um Rank B adicional se passou 13º nível.",
  },
  {
    // NOTE: Categoria original no livro é "Bukijutsu" (subcategoria de Taijutsu); campo categoria fixado como "taijutsu" conforme instrução da tarefa.
    key: "treinamento-de-alvo",
    nome: "Treinamento de Alvo",
    categoria: "taijutsu",
    descricao: "Você treinou sob os ensinamentos da terra dos Arcos diretamente ou por descendência, ganhando os seguintes benefícios:\n\n- Aumente seu valor de Força ou Destreza em 1, até um máximo de 20.\n- Você ganha proficiência em um conjunto de equipamentos, pois essas armas passaram a ser conhecidas como Armas alvo.\n- Laços curtos, laços longos e jaqueta pesada\n- Bestas leves, bestas pesadas e jaqueta pesada\n- Ataques de arma de uma arma Alvo ignoram estruturas e construções que interceptariam o dano causado, causando dano diretamente à(s) criatura(s) alvo.\n- Você não pode ser desarmado da sua arma Alvo e eles não podem ser quebrados enquanto você os empunha.\n- Quando você executa a ação de ataque usando uma arma alvo, você pode acertar 2 tiros em vez de um. Para o restante neste turno, ataques de arma de longo alcance que você faz com sua Arma Alvo dobra seu dado de dano de arma. Reduzir seu dado de munição em um tamanho, em vez de rolar.",
  },
  {
    key: "especialista-em-punho-de-dragao",
    nome: "Especialista em Punho de Dragão",
    categoria: "taijutsu",
    preRequisito: "Postura do Punho do Dragão, Nível 4+",
    descricao: "Você treinou sob os ensinamentos da terra de Dragões diretamente ou por descendência, ganhando os seguintes benefícios:\n\n- Aumente seu valor de Força ou Destreza em 1, até um máximo de 20.\n- Enquanto você estiver na Postura Punho do Dragão, seu [Desarmado O dado de dano] se torna um d8.\n- Taijutsu, você sabe, isso requer a Postura do Punho do Dragão para serem lançados, e até dois Taijutsu adicionais que você conhece, isso exige que você não faça mais do que dois ataques tornando-se Taijutsu do Punho do Dragão. Taijutsu Punho do Dragão que você lança ganha a característica Dragão Faminto.\n- Dragão Faminto. Uma vez por lançamento, quando você lida seu [Dano Desarmado] a uma criatura hostil, você rouba uma fração de seu chakra. Você recupera Pontos de Chakra Temporários iguais a metade do resultado de um de seus dados [Dano Desarmado] rolado (se mais do que 1.). Este Chakra temporário dura até o início do seu próximo turno.",
  },
  {
    key: "especialista-em-punho-bebado",
    nome: "Especialista em Punho Bêbado",
    categoria: "taijutsu",
    preRequisito: "Postura do Punho Bêbado, Nível 4+",
    descricao: "Você treinou sob os ensinamentos dos Monges de embriaguez diretamente ou por descendência, ganhando a seguintes benefícios:\n\n- Aumente seu valor de Força ou Destreza em 1, até um máximo de 20.\n- Enquanto você estiver na Postura do Punho Bêbado, seu [Desarmado O dado de dano] se torna um d8.\n- Taijutsu você sabe que requer a Postura do Punho Bêbado a serem lançados e até dois Taijutsu adicionais que você sabe, isso exige que você não faça mais do que dois ataques de taijutsu tornam-se Taijutsu do Punho Bêbado. O Taijutsu de punho Bêbado que você lança ganha a característica Gin & Tônico.\n- Gin & Tônica. Uma vez por lançamento, quando você lida com seu [Dano Desarmado] a uma criatura hostil, você é capaz de saborear uma bebida especial que realça o imprevisibilidade de seus ataques. Até o começo do seu próximo turno, criaturas a até 3 metros de você não pode ganhar bônus de características, jutsu ou características para suas jogadas de ataque corpo a corpo visando você.",
  },
  {
    key: "respiracao-eficiente",
    nome: "Respiração Eficiente",
    categoria: "taijutsu",
    preRequisito: "Nível 4+",
    descricao: "Você começou a dominar o uso da respiração do Céu e aprender a administrar o estresse e tensão que causa ao seu corpo. Você ganha os seguintes benefícios:\n\n- Você não precisa mais pagar chakra para manter a concentração de qualquer Taijutsu com o nome Respiração Celestial.\n- Você reduz o custo do Taijutsu com o Nome da respiração Celestial por um valor igual à sua classificação (Rank D: 1, Rank C: 2, Rank B: 3, Rank A: 4, Rank S: 5).\n- Você pode lançar um Taijutsu com o nome Respiração Celestial usando uma Ação, Ação Bônus ou Reação em seu turno, ignorando o tempo de lançamento listado.\n- Os benefícios do Taijutsu com a Respiração Celestial podem aplicam-se aos seus ataques desarmados e com armas, uma vez por vez.",
  },
  {
    key: "bukijutsu-capacitado",
    nome: "Bukijutsu Capacitado",
    categoria: "taijutsu",
    descricao: "Você aprende a capacitar seu Bukijutsu com técnica e habilidade refinada, você ganha os seguintes benefícios:\n\n- Ao lançar um bukijutsu você pode aumentar seu [Dano de Armas] dado em 1 passo. (d4>d6>d8>d10>d12)\n- Quando uma criatura faria um teste de resistência para resistir a um bukijutsu você lança; Se falharem por 5 ou mais, eles levam dano duplo.\n- Quando você faria uma Constituição (controle de Chakra) verifique para manter a concentração em um Bukijutsu que você conjurou, você pode adicionar 1d4 ao resultado do teste.",
  },
  {
    key: "taijutsu-capacitado",
    nome: "Taijutsu Capacitado",
    categoria: "taijutsu",
    descricao: "Você aprende a capacitar seu Taijutsu com técnicas mais elegantes técnicas, você ganha os seguintes benefícios:\n\n- Ao lançar um taijutsu como uma ação, você pode escolher para também gastar sua ação bônus. Se você fizer isso, você lida o dano adicional igual ao seu bônus de proficiência, até três vezes\n- Quando você lança um taijutsu com a palavra-chave Combo ou Finalizador, reduza o custo em um valor igual ao seu classificação (Rank D: 1, Rank C: 2, Rank B: 3, Rank A: 4, Rank S: 5). Vários efeitos com redução baseada em classificação não empilhe.\n- Quando você faria uma Constituição (controle de Chakra) verifique para manter a concentração em um Taijutsu que você lançou, você pode fazer um teste de Artes Marciais, usando seu modificador de habilidade de Taijutsu.",
  },
  {
    key: "estilista-de-luta",
    nome: "Estilista de Luta",
    categoria: "taijutsu",
    descricao: "Você adota um estilo particular de luta como sua especialidade, obtendo os seguintes benefícios:\n\n- Aumente seu valor de Força ou Destreza em 1, até um máximo de 20.\n- Escolha uma das Posturas de Combate do Capítulo 13.\n- Você pode selecionar esse talento diversas vezes. Você não pode pegar uma opção Postura de Combate mais de uma vez, mesmo se você mais tarde poderá escolher novamente.",
  },
  {
    key: "especialista-em-punho-de-sapo",
    nome: "Especialista em Punho de Sapo",
    categoria: "taijutsu",
    preRequisito: "Postura do Punho de Sapo, Nível 4+",
    descricao: "Você treinou sob os ensinamentos da Terra dos Pântanos diretamente ou por descendência, ganhando os seguintes benefícios:\n\n- Aumente seu valor de Força ou Destreza em 1, até um máximo de 20.\n- Enquanto você estiver na Postura Punho de Sapo, seu [dado de dano Desarmado] se torna um d8.\n- Taijutsu, você sabe que isso exige que a Postura do Punho de Sapo seja lançado, e até dois Taijutsu adicionais que você conhece, que exige que você não faça mais do que dois ataques de taijutsu tornam-se Taijutsu do Punho de Sapo. Taijutsu Punho sapo que você lança ganha o traço amarrado.\n- Amarrado. Uma vez por lançamento, quando seu Taijutsu atacar dano for interceptado por uma estrutura ou construção, você ignore essas estruturas e construções que causam dano normalmente ao alvo original.",
  },
  {
    key: "especialista-em-punho-de-ferro",
    nome: "Especialista em Punho de Ferro",
    categoria: "taijutsu",
    preRequisito: "Postura do Punho de Ferro, Nível 4+",
    descricao: "Você treinou sob os ensinamentos dos Mestres das brigas e punhos dobrados de metal, ganhando o seguinte benefícios:\n\n- Aumente seu valor de Força ou Destreza em 1, até um máximo de 20.\n- Enquanto você estiver na Postura Punho de Ferro, seu [O dado de dano Desarmado] se torna um d8. Se você estiver com Braçadeiras de combate, torna-se 1d10 se Força for sua pontuação de habilidade de Taijutsu.\n- Taijutsu que você sabe que exige que a Postura do Punho de Ferro seja lançado, e até dois Taijutsu adicionais que você conhece, que exige que você não faça mais do que dois ataques de taijutsu tornar-se Taijutsu do Punho de Ferro. Taijutsu do Punho de Ferro que você lança ganha o Traço metálico.\n- Metálico. Uma vez por lançamento, ao causar dano a uma criatura com RD baseada em Armadura (redução de dano), você pode perfurar sua armadura. Ao gastar sua ação bônus como parte do lançamento de jutsu, você pode reduzir sua armadura com base na RD por um valor igual ao resultado de um de seus [Dano Desarmado] dados. Esta redução de armadura dura até que a criatura afetada gaste uma Ação ajustando-se.",
  },
  {
    // NOTE: Categoria original no livro é "Bukijutsu" (subcategoria de Taijutsu); campo categoria fixado como "taijutsu" conforme instrução da tarefa.
    key: "treinamento-de-lancador",
    nome: "Treinamento de Lançador",
    categoria: "taijutsu",
    descricao: "Você treinou sob os ensinamentos da terra dos Juncos diretamente ou por descendência, ganhando os seguintes benefícios:\n\n- Aumente seu valor de Força ou Constituição em 1, até um máximo de 20.\n- Você ganha proficiência em um conjunto de equipamentos, pois essas armas passam a ser conhecidas como Armas de Lança.\n- Lanças, Naginata e Armadura de Batalha\n- Lança Acorrentada, Sasumata e Armadura de Batalha\n- Armas Lance ganham o nível Mortal 2 e aumentam sua classificação de Alcance em +1.\n- Você não pode ser desarmado de sua arma lança e eles não podem ser quebrados enquanto você os empunha.\n- Quando você realiza uma ação de ataque usando uma arma Lance, você pode no lugar de um dos ataques feitos com a referida ação, faça um ataque de lança. Lanças de Ataques são ataques com armas que mira em todas as criaturas em um cone diretamente à sua frente com um comprimento igual ao alcance de sua arma como seu golpe repetido para frente, comparando a única jogada de ataque com todos os alvos CA, causando dano de arma normalmente.",
  },
  {
    key: "maestria-de-passo-leve",
    nome: "Maestria de Passo Leve",
    categoria: "taijutsu",
    descricao: "Você dominou a arte de lutar enquanto está minimamente blindado, tratando o combate como uma dança elegante. Enquanto você não estiver usando armadura, você ganha os seguintes benefícios:\n\n- Aumente seu valor de Destreza em 1, até um máximo de 20.\n- Sempre que uma jogada de ataque erra você, você pode se mover 1,5 Metro sem desencadear ataques de oportunidade.\n- Uma vez por turno, quando uma criatura erra você com um ataque, seu próximo ataque contra eles causa um 1d8 de dano adicional.\n- Ao realizar a ação de correr, você pode mover +3 Metros adicionais.\n- Quando uma criatura erra você em um ataque, você ganha um bônus de +1 em sua CA, até um máximo de +2, até o início do seu próximo turno.",
  },
  {
    key: "especialista-em-punho-de-leao",
    nome: "Especialista em Punho de Leão",
    categoria: "taijutsu",
    preRequisito: "Postura do Punho de Leão, Nível 4+",
    descricao: "Você treinou sob os ensinamentos da Terra de Reis, seja diretamente ou por descendência, ganhando o seguintes benefícios:\n\n- Aumente seu valor de Força ou Destreza em 1, até um máximo de 20.\n- Enquanto você estiver na Postura do Punho de Leão, seu dado de dano desarmado se torna um d8. Isso se torna um d10 contra uma criatura com condição de Medo.\n- Taijutsu você sabe que exige que a Postura do Punho do Leão seja lançado, e até dois Taijutsu adicionais que você conhece, que exige que você não faça mais do que dois ataques de taijutsu tornar-se Taijutsu do Punho de Leão. O Taijutsu punho do leão que você lança ganha o traço Real Majestoso.\n- Majestoso. Uma vez por lançamento, quando você causaria dano para uma criatura hostil com graduações de qualquer condição Mental, você ganha um bônus de +2 em seu próximo salvamento, jogue antes do início do seu próximo turno.",
  },
  {
    key: "ninja-assassino",
    nome: "Ninja Assassino",
    categoria: "taijutsu",
    descricao: "Você praticou técnicas úteis em combate corpo a corpo contra Shinobi Ninjutsu e Genjutsu, ganhando o seguintes benefícios:\n\n- Quando uma criatura dentro do seu alcance de armas lança um Ninjutsu ou Genjutsu, você pode usar sua reação fazer um ataque de oportunidade usando sua arma mirando na criatura desencadeadora.\n- Quando você causa dano a uma criatura que está se concentrando um Jutsu, aquela criatura tem desvantagem em testes de perícia feito para manter a concentração.\n- Você tem vantagem em testes de resistência contra Ninjutsu & Genjutsu lançado por criaturas a até 3 metros de você.",
  },
  {
    key: "especialista-em-punho-de-coelho",
    nome: "Especialista em Punho de Coelho",
    categoria: "taijutsu",
    preRequisito: "Postura do Punho do Coelho, Nível 4+",
    descricao: "Você treinou sob os ensinamentos do Guerreiro sacerdotisas da Terra do Lúpulo, diretamente ou por descendência, obtendo os seguintes benefícios:\n\n- Aumente seu valor de Força ou Destreza em 1, até um máximo de 20.\n- Enquanto você estiver na Postura do Punho do Coelho, seu dado de dano Desarmado se torna um d8.\n- Taijutsu você sabe que exige que a Postura do Punho do Coelho seja lançado, e até dois Taijutsu adicionais que você conhece, que exige que você não faça mais do que dois ataques de taijutsu torne-se Taijutsu do Punho do Coelho. O Taijutsu punho do coelho que você lança ganha a característica Chute de Salto em Altura.\n- Chute de salto em altura. Uma vez por lançamento, você pode passar para 6 Metros em qualquer direção. Se você terminasse seu movimento a até 1,5 metro de uma criatura que não estava afetado pela conjuração deste jutsu, você imediatamente faz 1 Ataque desarmado contra eles.",
  },
  {
    // NOTE: Categoria original no livro é "Bukijutsu" (subcategoria de Taijutsu); campo categoria fixado como "taijutsu" conforme instrução da tarefa.
    // NOTE: o texto original alterna entre "Armas de ataque"/"arma de ataque" e "arma de Incursão"/"ataque de invasão"/"Ataques de Invasão" para o mesmo conceito — inconsistência presente no livro-fonte, mantida como está.
    key: "treinamento-de-atacante",
    nome: "Treinamento de Atacante",
    categoria: "taijutsu",
    descricao: "Você treinou sob os ensinamentos da terra da guerra diretamente ou por descendência, ganhando os seguintes benefícios:\n\n- Aumente seu valor de Força ou Constituição em 1, até um máximo de 20.\n- Você ganha proficiência em um conjunto de equipamentos, pois estas armas passam a ser conhecidas como Armas de ataque.\n- Machado de mão, machado grande e casaco de batalha\n- Tekko, Clube de Guerra e Casaco de Batalha\n- Armas de ataque ganham a propriedades Desarmar, Pesada e Sinuosa\n- Armas de ATAQUE com propriedade Pesada ignoram o requisito de pontuação de habilidade de Força da propriedade.\n- Você não pode ser desarmado de sua arma de ataque e eles não podem ser quebrados enquanto você os empunha.\n- Quando você realiza uma ação de ataque usando uma arma de Incursão, você pode colocar em prática um dos ataques feitos com essa ação, fazer um ataque de invasão. Ataques de Invasão são ataques com armas que quando você causa dano a uma criatura usando armadura, você reduza sua CA em 1 e a redução de dano de sua armadura em 2, até o início do seu próximo turno.",
  },
];
