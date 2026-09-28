import type { TalentDefinition } from "@/lib/talents/types";

/** Talentos de Habilidade — Manual Shinobi, Cap. 13, p.215-219 (parte 1). */
export const talentosHabilidade1: TalentDefinition[] = [
  {
    key: "acrobata",
    nome: "Acrobata",
    categoria: "habilidade",
    descricao: "Você se torna mais ágil, obtendo os seguintes benefícios:\n- Aumente sua pontuação de Destreza em 1, até um máximo de 20.\n- Você ganha proficiência na perícia Acrobacia. Se você já for proficiente, você ganha Maestria.\n- Você reduz o dano de queda pela metade.\n- Uma vez por turno, ao se levantar de uma posição deitada devido ao efeito de uma criatura hostil, você não gasta movimento e pode fazer um ataque desarmado ou ataque com arma corpo a corpo contra uma criatura dentro do alcance como parte do seu movimento usado para se levantar de uma posição deitada.\n- Como uma ação bônus, você pode fazer um teste de Destreza (Acrobacia) CD 15. Se você for bem-sucedido, terrenos difíceis não custam movimento extra até o final do seu próximo turno.",
  },
  {
    key: "ator",
    nome: "Ator",
    categoria: "habilidade",
    descricao: "Hábil em mímica e dramatização, você ganha os seguintes benefícios:\n- Aumente seu valor de Carisma em 1, até um máximo de 20.\n- Você ganha proficiência na Habilidade de Desempenho. Se você já for proficiente, você ganha experiência.\n- Quando seu teste de Carisma (Desempenho) for 5 ou superior do que uma criatura não hostil, Percepção Passivo, eles ganham 1 classificação de Charme para você, até o final deste conversação. Eles só podem ganhar 2 graduações de charme para você desse jeito.\n- Você pode lançar Mudança de voz ignorando seus componentes e ao mesmo tempo sem custo. Quando conjurado desta forma, você rola um d8.\n- Durante a apresentação, você pode tentar distrair um humanoide que você pode ver e que pode ver e ouvir você. Faça um teste de Carisma (Desempenho) contestado pela Sabedoria do humanoide (Percepção). Se seu teste for bem sucedido, você pega a atenção do humanoide o suficiente para tornar a Sabedoria (Percepção) e Inteligência (Investigação) com desvantagem até você parar de atuar.",
  },
  {
    key: "alquimista",
    nome: "Alquimista",
    categoria: "habilidade",
    descricao: "Você estudou os segredos da alquimia e é um especialista em sua prática, obtendo os seguintes benefícios:\n- Aumente seu valor de Inteligência em 1, até um máximo de 20.\n- Você ganha proficiência com o Kit Alquimista. Se você já for proficiente, você ganha experiência.\n- Como uma ação, você pode identificar qualquer veneno ou líquido consumível a até 1,5 metro de você, como se você tivesse provado. Você deve ver isso para que esse benefício funcione.\n- Ao longo de qualquer descanso curto, você pode criar um conjunto de Sangue de Assassinos. Você deve ter um Kit Alquimista com pelo menos uma carga com você quando fizer isso.\n- Durante qualquer descanso curto, você pode temporariamente melhorar a potência de um veneno, chakra ou pílula de sangue. Para utilizar este benefício, você deve gastar o valor do Kit Alquimista. Ao fazer isso, você aprimora o seguinte;\n  - Potência de um Veneno - Aumenta sua CD de resistência em +2 e o dano por um dado de dano adicional.\n  - Potência de uma Pílula de Chakra – Aumenta o chakra ganho em 1 dado.\n  - Potência de uma Pílula de Sangue – Aumenta os pontos de vida ganho por 2 dados.",
  },
  {
    key: "musculoso",
    nome: "Musculoso",
    categoria: "habilidade",
    descricao: "Você se tornou mais forte, ganhando os seguintes benefícios:\n- Aumente seu valor de Força em 1, até um máximo de 20.\n- Você ganha proficiência na perícia Atletismo. Se você já for proficiente, você ganha experiência.\n- Aumente seu volume máximo em +10.\n- Uma vez por descanso, você pode fazer uma habilidade baseada em Força ou teste de habilidade, jogada de ataque ou teste de resistência com vantagem.\n- Armas de arremesso que usam Força, dobram o alcance de ambos incrementos.",
  },
  {
    key: "manipulador-de-animais",
    nome: "Manipulador de Animais",
    categoria: "habilidade",
    descricao: "Você domina as técnicas necessárias para treinar e lidar com animais. Você ganha os seguintes benefícios:\n- Aumente seu valor de Sabedoria em 1, até um máximo de 20.\n- Você ganha proficiência na habilidade Manejo de Animais. Se você já for proficientes, você ganha experiência.\n- Ao passar 1 semana de inatividade com um animal normal, você pode fazer um teste de Sabedoria CD 20 (manejo de animais). Com um sucesso, você se relaciona com o animal. Se torna permanentemente útil para você, a menos que você faça algo flagrante quebrar seu vínculo. Estabelecendo vínculo com um novo animal quebrando quaisquer vínculos anteriores. Novos animais não sabem tudos seus jutsu anteriores de animais vinculados, se houver.\n- Ao passar 1 ou mais semanas de inatividade com um animal vinculado, você pode ensiná-lo um Taijutsu Rank D ou superior que você sabe. Você pode gastar 1 tempo de inatividade por classificação de jutsu (Rank D: 1, Rank C: 5, Rank B: 10, Rank A: 20, Rank S: 50). Ele usa sua mordida e garras no lugar de socos ou chutes. A criatura só pode aprender 3 Taijutsu desta forma.\n- Você pode usar uma ação bônus no seu turno para comandar seu animal vinculado a até 18 metros de você que possa ouvi-lo.",
  },
  {
    key: "assaltante",
    nome: "Assaltante",
    categoria: "habilidade",
    descricao: "Você se orgulha de sua rapidez e de seu fechamento estudo de certas atividades clandestinas. Você ganha o seguintes benefícios:\n- Aumente seu valor de Destreza em 1, até um máximo de 20.\n- Você ganha proficiência com um Kit de Segurança ou selos de Mão (escolha uma).\n- Criaturas que estejam a mais de 9 metros de você enquanto está usando seu kit de segurança ou fazendo um truque de teste manual para arrombar uma fechadura, roubar algo tem -5 penalidade em testes de Percepção ou Intuição para ver o que você está fazendo.\n- Bloqueios e dispositivos de segurança são sempre contados como 1 Classificação inferior para você.\n- Como uma ação bônus, você pode tentar roubar carteiras ou escolha uma fechadura.",
  },
  {
    key: "pessoa-encantadora",
    nome: "Pessoa Encantadora",
    categoria: "habilidade",
    descricao: "Você dominou a arte de encantar as pessoas ao seu redor, obtendo os seguintes benefícios:\n- Aumente seu valor de Carisma em 1, até um máximo de 20.\n- Você ganha proficiência na perícia Persuasão. Se você já for proficiente, você ganha experiência.\n- Você é hábil em coletar informações por meio de conversa, sem fazer uma única pergunta. Por passar 10 minutos coletando informações em um novo local, você toma conhecimento de todos os rumores atuais e potencialmente pessoas importantes que você deve estar atento.\n- Se você passar 1 minuto conversando com alguém, poderá fazer uma Teste de Carisma (Persuasão) contestado pelo teste de uma criatura percepção passiva. Se você ou seus companheiros estiverem em combate com a criatura, você falha automaticamente. Em caso de sucesso, o alvo ganha 2 graduações de encantado para você enquanto permanece a 18 metros de você pelos próximos 10 minutos.",
  },
  {
    key: "intensidade-do-chakra",
    nome: "Intensidade do Chakra",
    categoria: "habilidade",
    descricao: "Você tem um controle imenso sobre o seu chakra, de maneiras que outros aspiram. Você ganha os seguintes benefícios:\n- Aumente seu valor de Constituição em 1, até um máximo de 20.\n- Você ganha proficiência na habilidade de controle de Chakra. Se você já for proficiente, você ganha experiência.\n- Você libera uma aura de chakra indicativa da sua habilidade de combate. Ao fazer um teste de Carisma (Intimidação), você em vez disso, você pode rolar seu bônus de Constituição (Controle de Chakra).\n- Você pode suprimir sua própria assinatura de chakra de uma maneira muito mais eficiente. Você pode fazer a atividade Suprimir Chakra como uma Ação, em vez de exigir 1 minuto.",
  },
  {
    // NOTE: trecho "valeram a pena desligado" está estranho no original extraído (possível erro de OCR/quebra de linha do PDF); mantido literalmente, sem invenção.
    key: "chefe-de-cozinha",
    nome: "Chefe de Cozinha",
    categoria: "habilidade",
    descricao: "O tempo e o esforço despendidos no domínio das artes culinárias valeram a pena desligado. Você ganha os seguintes benefícios:\n- Aumente seu valor de Sabedoria em 1, até um máximo de 20.\n- Você ganha proficiência com Kit de Culinária ou Sobrevivência (Escolha um). Se você já é proficiente, você ganha perícia.\n- Durante um breve descanso, você pode cozinhar alimentos especiais, com um kit de cozinha. Esta comida especial é da sua descrição e as criaturas consomem esse alimento durante o breve descanso. Eles recuperam pontos de vida adicionais iguais ao seu bônus de Sobrevivência, pelas próximas 8 horas ou até seu próximo descanso, eles aumentam temporariamente seus pontos de vida máximos em 10. Você pode cozinhar alimentos especiais desta forma duas vezes por descanso longo.\n- Durante um descanso longo, você pode preparar um prato completo especial para sua equipe com kit de culinária. Esta refeição especial leva 1 hora para consumir e estraga no final do longo descanso. As criaturas que participam da refeição são curadas de todas as doenças e venenos e faz com que a constituição tenha vantagem. Esse benefício dura 24 horas.",
  },
  {
    // NOTE: "Kit de armeiros ou armeiros (escolha um)" repete a mesma palavra nas duas opções no texto extraído; provável erro de OCR do PDF original (talvez devesse ser "Ferreiro ou Armeiro"), mantido literal.
    key: "construtor",
    nome: "Construtor",
    categoria: "habilidade",
    descricao: "Você tem talento para artesanato, você trabalha com maior eficiência e produzir bens de maior qualidade. Você ganha os seguintes benefícios:\n- Aumente sua pontuação de Força, Inteligência ou Sabedoria em 1, até um máximo de 20.\n- Você ganha proficiência em Artesanato e Kit de armeiros ou armeiros (escolha um). Se você já for proficiente, você ganha experiência.\n- Ao criar itens usando um kit, que você tenha proficiência, dobre o valor de mercado a cada semana de inatividade gasto concede a você.\n- Quando você cria selos usando o Armeiro ou Kit de armeiro, você não precisa mais de uma forja. Reduza a CD de criação do selo de Aprimoramento em -2 em todas as classificações de itens.",
  },
  {
    key: "quimico",
    nome: "Químico",
    categoria: "habilidade",
    descricao: "Você estudou os segredos da química e é um especialista em sua prática, obtendo os seguintes benefícios:\n- Aumente seu valor de Inteligência em 1, até um máximo de 20.\n- Você ganha proficiência com o kit Alquimista ou Investigação. (Escolha um)\n- Quando você faria um teste de Inteligência (Investigação) e tem pelo menos uma carga do Kit Alquimista para coletar DNA, evidências ou quaisquer restos de um local, você reduz a CD definida pelo Mestre em -2.\n- Durante um breve descanso, você pode desenvolver diferentes compostos químicos, usando um Kit de amostra, que você em seguida, use para criar um dos seguintes itens de qualidade básica: Bomba de pimenta, bomba de fumaça, pílula de ração militar ou Pílula de Chakra.\n- Durante um descanso longo, você pode desenvolver uma habilidade especial química com um Kit Alquimista chamado Água Branca. A água branca tem 2 cargas e expira após 8 horas. Se uma criatura bebe esta água branca, eles ganham um dos seguintes benefícios para a próxima hora: Visão de Chakra de 60 pés, 60 pés de Visão no escuro, sentido de tremor de 20 pés ou visão cega de 10 pés.",
  },
  {
    key: "consciencia-de-elite",
    nome: "Consciência de Elite",
    categoria: "habilidade",
    preRequisito: "Sabedoria 20, Nível 10+",
    descricao: "Você tem a sabedoria associada aos mais renomados mestres de Ninshou, que lhe concedem um nível de consciência a maioria dos outros não tem. Você ganha os seguintes benefícios:\n- Você ganha um bônus de 1d4 em todos os testes de resistência de Sabedoria que você fizer.\n- Você ganha experiência em uma habilidade de Sabedoria que você já possui proficiência.\n- Você ganha um bônus de +5 em sua percepção passiva e Entendimento.\n- Você pode usar sua ação para tentar obter uma posição exaltada da sua situação atual. Contanto que você não esteja cego e/ou surdo, todas ilusões, genjutsu com a Palavras-chave visuais e/ou auditivas e efeitos projetados para enganá-lo, a menos de 18 metros de você, tem seus CDs reduzido em 5 no próximo minuto ou até o início do seu próximo turno se estiver em combate.",
  },
  {
    key: "agilidade-de-elite",
    nome: "Agilidade de Elite",
    categoria: "habilidade",
    preRequisito: "Destreza 20, Nível 10+",
    descricao: "Você tem os reflexos de quem consegue ver as coisas antes de elas acontecer, concedendo os seguintes benefícios:\n- Você ganha um bônus de 1d4 em todos os testes de resistência de Destreza que fizer.\n- Escolha duas perícias de Destreza nas quais você já tenha proficiência. Quando você faz um teste de perícia usando essas perícias, você trata qualquer resultado de 9 ou menor no d20 como 10.\n- Você ganha Maestria em uma Perícia de Destreza de sua escolha na qual você já tenha proficiência.\n- Aumente sua iniciativa em +5 e sua velocidade de movimento em +10.\n- Se uma criatura tiver desvantagem em um ataque contra você, você pode escolher fazê-la rolar um d20 adicional, usando a menor rolagem. Depois de usar essa habilidade duas vezes, você deve completar um descanso antes de usá-la novamente.",
  },
  {
    key: "intelecto-de-elite",
    nome: "Intelecto de Elite",
    categoria: "habilidade",
    preRequisito: "Inteligência 20, Nível 10+",
    descricao: "Você tem a astúcia dos estudiosos mais prolíficos, concedendo os seguintes benefícios:\n- Você ganha um bônus de 1d4 em todos os testes de resistência de Inteligência que você fizer.\n- Você ganha experiência em uma Habilidade de Inteligência que você já tem proficiência.\n- Testes de habilidade e perícia de inteligência que você ignora qualquer penalidade infligida por uma criatura ou efeito.\n- Você reduz o custo do tempo de inatividade necessário para concluir qualquer treinamento para o seguinte:\n  - 1 Semana: Proficiência em Nova Ferramenta ou Veículo.\n  - 3 Semanas: Nova Arma ou Proficiência em Idioma.\n  - 5 Semanas: Nova Proficiência em Armadura.\n  - 8 semanas: Proficiência em novas habilidades.\n  - 16 Semanas: Novo Talento.",
  },
  {
    key: "presenca-de-elite",
    nome: "Presença de Elite",
    categoria: "habilidade",
    preRequisito: "Carisma 20, Nível 10+",
    descricao: "Você tem a presença do mais rico dos líderes, concedendo os seguintes benefícios:\n- Você ganha um bônus de 1d4 em todos os testes de resistência de Carisma que fizer.\n- Você ganha Maestria em uma Habilidade de Carisma na qual você já tem proficiência.\n- Criaturas aliadas a até 20 pés de você não podem ganhar níveis de medo ou encanto. Criaturas que têm tais condições que falam com você por pelo menos 1 minuto, imediatamente perdem tais condições e se tornam imunes a ganhá-las da criatura que as infligiu a elas pelas próximas 24 horas.\n- Como uma ação, você pode tentar impor sua Presença de Elite sobre outra criatura. Contanto que a criatura com a qual você está interagindo seja de nível igual ou inferior ao seu, não seja hostil e possa ouvir e ver você, a cada minuto que ela estiver interagindo com você, ela ganha uma penalidade de -2 em todos os testes de perícia de Sabedoria e Carisma feitos contra você. Essas penalidades terminam imediatamente se ela se tornar hostil a você de qualquer forma.",
  },
  {
    key: "resiliencia-de-elite",
    nome: "Resiliência de Elite",
    categoria: "habilidade",
    preRequisito: "Constituição 20, Nível 10+",
    descricao: "Você tem a coragem frequentemente atribuída aos deuses, concedendo ao seguintes benefícios:\n- Você ganha um bônus de 1d4 em todos os testes de resistência de Constituição que você fizer.\n- Você ganha experiência em uma Habilidade de Constituição que você já tem proficiência.\n- Você não pode ser envenenado ou sucumbir a doenças como resultado de métodos não baseados em jutsu.\n- Efeitos de restauração, como Jutsu de Cura ou Pílulas de Ração Militar, que restaurariam pontos de vida para você, não pode restaurar uma quantia inferior à metade do seu nível + seu Modificador de Constituição. Se esse valor exceder aquela quantidade máxima de pontos de vida que o efeito pode restaurar, em vez disso, você obtém o máximo desse efeito.\n- Você pode adicionar seu modificador de Constituição aos testes de salvamento da morte que você fizer.",
  },
  {
    key: "forca-de-elite",
    nome: "Força de Elite",
    categoria: "habilidade",
    preRequisito: "Força 20, Nível 10+",
    descricao: "Você tem a força que as lendas contam, concedendo os seguintes benefícios:\n- Você ganha um bônus de 1d4 em todos os testes de resistência de Força que você fizer.\n- Você ganha experiência em uma Habilidade de Força que você já possui ter proficiência.\n- Você ignora a propriedade de armas com duas mãos com a qual você é proficiente.\n- Você pode tentar usar sua Força de Elite para completar atos de Força normalmente impossíveis. Escolha um dos seguintes atos de força sobre-humana para serem concluídos. Uma vez que você usa um desses recursos, você deve completar um descanso antes que você possa fazer isso novamente.\n  - Mantenha a linha. Como uma ação, você se prepara para qualquer coisa até o final do seu próximo turno. Quando uma criatura faria um ataque contra você, forçaria você a fazer um teste de resistência de qualquer tipo ou usaria uma característica ou traço que o visasse, você imediatamente age sem nenhum custo de ação adicional. Você exerce força que rivaliza com fábulas e mitos. Se você for o alvo de um ataque, jutsu, característica ou seria afetado por tal, você estende suas mãos e luta com fios de lógica. Faça um teste de habilidade de Força, adicionando metade do seu nível de personagem ao resultado vs a jogada de ataque ou CD de Resistência da criatura acionadora. Em um sucesso, você dissipa o ataque, jutsu ou efeito. Isso aciona um número de vezes igual ao seu modificador de Força antes do início do seu próximo turno.\n  - Hercules. Como uma ação bônus, no próximo minuto, você pode mover qualquer coisa que você possa colocar em suas mãos. Você pode agarrar, empurrar e tropeçar gigantesco ou criaturas menores como se fossem do seu tamanho.\n  - Não caído. Como uma reação a uma estrutura ou construção caindo ou desabando a menos de 1,5 metro de você, você pode exercer sua força, evitando que ela caia no próximo minuto. Independentemente de quantos pontos de vida uma estrutura foi embora, enquanto você a segura, ela não pode desmoronar sobre si mesmo.",
  },
  {
    // NOTE: a última frase do texto extraído tem um "é" duplicado ("quem ou o que é aquela coisa ou pessoa é.") — mantido literal, provável erro de digitação/OCR do original, não uma falha de junção de colunas.
    key: "empatico",
    nome: "Empático",
    categoria: "habilidade",
    descricao: "Você possui uma visão aguçada de como as outras pessoas pensam e sentem. Você ganha os seguintes benefícios:\n- Aumente seu valor de Sabedoria em 1, até um máximo de 20.\n- Você ganha proficiência na habilidade Intuição. Se você já for proficiente, você ganha experiência.\n- Você pode gastar uma ação bônus para tentar um teste de percepção.\n- Se você passar mais de 10 minutos conversando com uma criatura não hostil, você obterá informações sobre sua maneirismos que permitem que você conte seu estado emocional e se eles estiverem mentindo pelo resto do conversação. Isso concede uma visão sobre seu emocional, mentiras razas e superficiais que requerem um contexto menor. Esse não revela mentiras mais profundas que exijam significativamente mais contexto ou evidência para provar.\n- Você pode usar sua ação para tentar obter uma visão estranha a cerca de um humanoide que você possa ver a até 9 metros de você. Faça um teste de Sabedoria (Intuição) contestado pelo engano passivo do alvo. Com um sucesso, você se torna ciente se alguma ilusão baseada em chakra os está afetando ou se eles estão atualmente enfrentando um desequilíbrio de Estado mental. Isso informa se eles têm medo, está apaixonado por uma pessoa, ou até mesmo detestado por algo ou alguém. Você ganha uma pista sobre quem ou o que é aquela coisa ou pessoa é.",
  },
];
