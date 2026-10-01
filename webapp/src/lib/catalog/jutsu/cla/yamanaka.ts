import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Yamanaka — Estudos da Tsunade, cap. Yamanaka
 * ("Jutsu Do Clã Yamanaka"). Tema de transferência mente-corpo e telepatia
 * (estilo Ino). Dano Psíquico não tem correspondente em JutsuNatureza,
 * então `natureza` fica de fora em todas as entradas. O livro não traz um
 * Hijutsu de Rank S para este clã.
 *
 * Nota: o texto de escala de nível de "Disjunção Corpo-Mente em Massa"
 * (base Rank B) refere "acima do Rank C" — preservado como está na fonte,
 * mesmo tipo de inconsistência já vista em outros clãs.
 */
export const jutsuYamanaka: JutsuDefinition[] = [
  // Rank D
  {
    key: "yamanaka-dominacao-da-mente-bestial",
    nome: "Dominação da Mente Bestial",
    tipo: "genjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Genjutsu", "Fuinjutsu"],
    cla: "yamanaka",
    descricao:
      "Você executa uma versão menos intensa da técnica de Transferência de Mente e Corpo em um animal ou em criaturas com menos força mental do que um humano. Selecione uma única criatura alvo que você possa ver dentro do alcance.\n\nA criatura alvo deve fazer um teste de resistência de Inteligência contra sua CD de resistência de Genjutsu. Se falhar, ela se torna amigável com você e mais inclinada a realizar tarefas para você durante o período, inclusive lutando por você se solicitada. Enquanto estiver amigável com você, você pode comandá-la com ações verbais e não verbais. Você também pode entender coisas sobre ela, como o fato de estar feliz, assustada ou animada.",
  },
  {
    key: "yamanaka-disturbio-mente-corpo",
    nome: "Distúrbio Mente-Corpo",
    tipo: "genjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Genjutsu", "Fuinjutsu", "Tátil"],
    cla: "yamanaka",
    descricao:
      "Você executa uma versão modificada da Técnica de Transferência de Mente e Corpo em uma criatura humanoide que você possa ver dentro do alcance, dissociando suas atividades mentais e corporais e forçando-as a reiniciar, causando uma quantidade significativa de dano psíquico à criatura. A criatura alvo deve fazer um teste de resistência de Carisma. Em caso de falha, sofre 3d8 de dano Psíquico e fica Atordoada; em caso de sucesso, recebe metade do dano.",
    emNiveisSuperiores:
      "Para cada rank que você lançar este jutsu acima do Rank D, aumente o custo deste jutsu em 3 e o dano em 2d8.",
  },
  {
    key: "yamanaka-transferencia-mente-corpo",
    nome: "Transferência Mente-Corpo",
    tipo: "genjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "36 metros",
    duracao: "1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Genjutsu", "Fuinjutsu"],
    cla: "yamanaka",
    descricao:
      "Você realiza o jutsu mais prolífico do Clã Yamanaka, invadindo a mente e o corpo de uma criatura alvo e sobrescrevendo sua consciência com a sua. Mire em uma criatura que você possa ver dentro do alcance e que tenha pensamento senciente, como outro humano, animal ou qualquer coisa que se encaixe nesse pré-requisito. Marionetes, objetos inanimados e até algumas criaturas estrangeiras podem ser imunes a este jutsu, como mutantes ou demônios — consulte seu mestre para verificar o que pode não se aplicar.\n\nA criatura selecionada deve fazer um teste de resistência de Carisma. Em caso de falha, você transfere sua consciência para o corpo do seu alvo por 1 minuto. Uma vez que você possua o corpo de uma criatura, você o controla e age em seus turnos usando esse corpo. Enquanto estiver habitando o corpo de outra criatura, você ganha o seguinte:\n- Ao fazer rolagens de ataque, testes de habilidade ou lançar jutsu que você conhece e que usam Força, Destreza ou Constituição, você usa as estatísticas da criatura cujo corpo está ocupando.\n- Ao fazer rolagens de ataque, testes de habilidade ou lançar jutsu que você conhece e que usam Inteligência, Sabedoria ou Carisma, você continua usando suas próprias estatísticas.\n- Você retém o benefício de suas próprias características de classe e clã.\n- Você não pode ativar ou lançar características de classe ou jutsu que inflijam condições negativas ao corpo hospedeiro, como Exaustão.\n- Você ganha acesso a qualquer traço geral ou de clã que a criatura possua e que você já conheça.\n- Você não tem acesso a nenhuma característica/habilidade de classe ou de função que a criatura possua.\n- Você retém acesso à sua própria lista de Hijutsu, Ninjutsu, Taijutsu, Bukijutsu e Genjutsu.\n- Você não ganha acesso à lista de jutsu da criatura hospedeira em nenhuma circunstância, mas pode encerrar a concentração em jutsu que ela estivesse concentrando ou de que estivesse se beneficiando.\n\nSe o corpo hospedeiro sofrer algum dano, ele imediatamente tenta outro teste de resistência; em um sucesso, o efeito termina e você fica inconsciente até o início do seu próximo turno, quando sua consciência retorna ao seu corpo. O hospedeiro não conta como disposto para efeitos aos quais normalmente não estaria.\n\nSeu corpo permanece onde você estava antes de lançar esta habilidade, ficando funcionalmente inconsciente até que você encerre esta técnica — nesse caso, você deixa o corpo da criatura e retorna ao seu. Se o seu próprio corpo sofrer qualquer dano enquanto você estiver habitando o corpo de outra criatura, você retorna imediatamente a ele.",
  },
  {
    key: "yamanaka-tecnica-de-deteccao-da-mente",
    nome: "Técnica de Detecção da Mente",
    tipo: "genjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio (27 metros)",
    duracao: "1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Genjutsu", "Fuinjutsu", "Sensorial"],
    cla: "yamanaka",
    descricao:
      "Usando os ensinamentos da família do Clã Yamanaka, você manifesta um pequeno campo telepático ao seu redor. Você se torna ciente de todas as criaturas capazes de pensamento senciente em um raio de 27 metros de você. Embora você esteja ciente da presença de uma criatura, isso não a revela automaticamente, mas você fica ciente da direção em que ela está em relação a você. As criaturas com as quais você já está familiarizado, ou que já tenha detectado antes com este jutsu, são imediatamente reconhecíveis, sendo capaz de reconhecer quem são apenas pela memória.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3. Se esse jutsu for lançado no Rank C, a duração será de 10 minutos. Se esse jutsu for lançado no Rank B, o raio passa a ser de 150 metros. Se esse jutsu for lançado no Rank S, o raio passa a ser de 1,6 quilômetro.",
  },
  // Rank C
  {
    key: "yamanaka-tecnica-de-conexao-mental",
    nome: "Técnica de Conexão Mental",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "150 metros",
    duracao: "10 minutos",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Fuinjutsu"],
    cla: "yamanaka",
    descricao:
      "Você cria um vínculo telepático temporário entre você e uma criatura disposta com a qual você esteja familiarizado e que esteja dentro do alcance. Até o fim do jutsu, você e o alvo podem compartilhar instantaneamente palavras, imagens, sons e outras mensagens sensoriais um com o outro, e o alvo o reconhece como a criatura com a qual está se comunicando. O alvo deve ser capaz de entender as mensagens e imagens que você está enviando para compreender suas intenções.",
  },
  {
    key: "yamanaka-tecnica-de-clone-mental",
    nome: "Técnica de Clone Mental",
    tipo: "genjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "36 metros",
    duracao: "1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Genjutsu", "Fuinjutsu"],
    cla: "yamanaka",
    descricao:
      "Você divide sua consciência em dois clones idênticos um ao outro e, em seguida, realiza a transferência corpo-mente como de costume em até duas criaturas alvo que você possa ver dentro do alcance. Ambas as criaturas devem fazer um teste de resistência de Carisma contra sua CD de resistência de Genjutsu. Em uma falha, você transfere sua consciência para o corpo do seu alvo por 1 minuto, controlando-o como se fosse o seu próprio corpo. Em um sucesso, você cai até o início do seu próximo turno, incapaz de se mover ou agir de qualquer outra forma até que sua consciência retorne ao seu corpo. Cada corpo é controlado por uma consciência separada e, portanto, não sabe o que o outro está pensando, mas agirá como você agiria durante esse período.",
  },
  {
    key: "yamanaka-aumento-da-mente-e-do-corpo",
    nome: "Aumento da Mente e do Corpo",
    tipo: "genjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Genjutsu", "Fuinjutsu"],
    cla: "yamanaka",
    descricao:
      "Usando a propensão do Clã Yamanaka para exploração mental, você é capaz de aprimorar os receptores mentais de uma criatura disposta que você possa tocar, dentro do alcance. Escolha uma entre Inteligência, Sabedoria e Carisma. Durante a duração, a criatura afetada ganha proficiência na habilidade escolhida. Uma criatura que já tenha proficiência na pontuação escolhida ganha um bônus de +2 em testes de resistência feitos com essa pontuação.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3. Se esse jutsu for lançado no Rank A, você pode selecionar +1 criatura adicional.",
  },
  // Rank B
  {
    key: "yamanaka-danca-massa-mente-corpo",
    nome: "Dança Massa Mente Corpo",
    tipo: "genjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Genjutsu", "Fuinjutsu"],
    cla: "yamanaka",
    descricao:
      "Você emite um curso de ação (limitado a uma frase ou duas) e influencia até 6 criaturas de sua escolha que você possa ver e ouvir dentro do alcance. Cada alvo deve fazer um teste de resistência de Carisma contra sua CD de Genjutsu. Se falhar, segue o curso de ação da melhor maneira possível. Uma criatura não pode ser ordenada a se prejudicar de forma alguma, nem ser obrigada a realizar uma ação que sabe que resultaria em dano para si mesma.\n\nA ação ordenada continua sendo tentada durante toda a duração; se a atividade for concluída em um tempo mais curto, o jutsu termina imediatamente. As criaturas estão totalmente conscientes de suas ações, mas não podem se deter enquanto durar esse jutsu. Se uma criatura receber dano de qualquer tipo durante esse período, ela refaz o teste de resistência com vantagem.",
  },
  {
    key: "yamanaka-disjuncao-corpo-mente-em-massa",
    nome: "Disjunção Corpo-Mente em Massa",
    tipo: "genjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio (9 metros)",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Genjutsu", "Fuinjutsu"],
    cla: "yamanaka",
    descricao:
      "Usando os mesmos princípios de Distúrbio Mente-Corpo, você emite uma onda de Chakra psíquico que redefine a conexão entre a mente e o corpo de uma criatura. Todas as criaturas de sua escolha em um raio de 9 metros de você devem fazer um teste de resistência de Carisma, sofrendo 8d6 de dano Psíquico e ficando Atordoadas até o início do seu próximo turno se falharem, ou metade do valor se forem bem-sucedidas.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e o dano em 2d8.",
  },
  // Rank A
  {
    key: "yamanaka-troca-de-marionete-mental-selo-amaldicoado",
    nome: "Troca de Marionete Mental: Selo Amaldiçoado",
    tipo: "ninjutsu",
    rank: "A",
    tempoConjuracao: "1 Semana",
    alcance: "1,5 metro",
    duracao: "Permanente",
    componentes: ["SM", "MC", "FN", "SC"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Fuinjutsu"],
    cla: "yamanaka",
    descricao:
      "Você pega uma marionete, boneco ou item em forma humanoide, com tamanho não inferior a 1 categoria de tamanho do alvo, e coloca um jutsu secreto de selamento Yamanaka no item. Você só pode ter um item desse tipo criado por vez; criar outro destrói o item existente. Você define condições e gatilhos para o selo com antecedência e os coloca no item.\n\nUma vez posicionado, quando uma criatura ativa o selo de Chakra, ela deve imediatamente fazer um teste de resistência de Carisma contra sua CD de resistência de Genjutsu ou Ninjutsu (o que for maior). Em caso de falha, a consciência da criatura alvo é selada dentro do item utilizado. Enquanto estiver selada, o corpo da criatura torna-se imediatamente Incapacitado, pois sua consciência agora está presa dentro de um objeto à escolha do usuário. A criatura não pode fazer mais testes de resistência, a menos que seu corpo original seja danificado, caso em que pode tentar um teste de resistência de Carisma para escapar.\n\nSe o item for destruído, este jutsu termina e a consciência da criatura tenta reentrar em seu corpo. Se o corpo estiver morto, sua consciência fica presa, vagando sem conseguir se conectar a nada ou ninguém — efetivamente morta e incapaz de ser revivida.",
  },
];
