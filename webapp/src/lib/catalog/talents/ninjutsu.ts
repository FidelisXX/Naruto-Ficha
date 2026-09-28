import type { TalentDefinition } from "@/lib/talents/types";

/** Talentos de Ninjutsu — Manual Shinobi, Cap. 13, p.228-231. */
export const talentosNinjutsu: TalentDefinition[] = [
  {
    // NOTE: trecho "aumentaria sua CA, ganharia pontos de vida temporários ou reduzir o dano sofre uma penalidade" e "reduz o impacto temporário pontos ganhos em 1d4" apresentam sintaxe estranha na extração (possível problema de OCR/formatação do PDF original); mantido literalmente.
    key: "especialista-em-clone",
    nome: "Especialista em Clone",
    categoria: "ninjutsu",
    preRequisito: "Qualquer Ninjutsu com a palavra-chave Clone, Nível 4+",
    descricao: "Você se tornou especialista em ordenar seus clones para fazer uma série de manobras e ações táticas.\n\nVocê ganha o seguinte benefícios:\n- Quando você invoca no máximo dois clones e está dentro de 18 Metros de terreno que poderia obscurecê-los que você pode ver, que pode segurá-los, você pode fazer um Teste de Inteligência (Furtividade) contra a passiva das criaturas mais hostis. Em caso de sucesso, seus clones não são detectados.\n- Quando você invoca pelo menos 3 clones e uma criatura hostil você pode ver está a até 9 metros de você, você pode causar seu flanquear ao alvo, convocando-o em espaços adjacente a eles. Ao fazer isso, o alvo sofre -1 Penalidade em sua CA até o início do próximo turno para cada clone invocado a até 1,5 metro deles (Máx. -3).\n- Com uma ação bônus, todos os clones a até 18 metros de você sobem até 9 Metros, terminando seu movimento o mais próximo possível de uma única criatura hostil que você possa ver em um raio de 18 metros. Para cada clone que termina seu movimento a até 4,5 metros deles, você aumenta o dano dos próximos ataques corpo a corpo que você causar em 1d8.\n- Como uma ação bônus, ordenando que seus clones se apressem e ataquem, você seleciona até três criaturas hostis que você pode ver dentro de 18 Metros de você. Todos os clones são forçados a mover até 18 Metros, terminando seu movimento o mais próximo possível do alvo. Para cada clone que termina seu movimento dentro de 4,5 Metros da criatura hostil, o próximo jutsu que o alvo lançar isso aumentaria sua CA, ganharia pontos de vida temporários ou reduzir o dano sofre uma penalidade com base até o final do próximo turno seguinte.\n  - Bônus AC: Reduz o bônus AC em -1, para cada 2 Clones dentro do alcance.\n  - Pontos de vida temporários: reduz o impacto temporário pontos ganhos em 1d4 para cada clone dentro do alcance.\n  - Redução de Danos: Reduzir a Redução de Danos em -1, para cada clone dentro do alcance.",
  },
  {
    // NOTE: frase "você emanar chakra ouro, prata e platina cada vez que você moldar o chakra da terra" está gramaticalmente estranha na extração; mantida literalmente.
    key: "especialista-em-estilo-terra",
    nome: "Especialista em Estilo Terra",
    categoria: "ninjutsu",
    preRequisito: "Nível 8+, Palavra-chave Estilo Terra",
    descricao: "Seu domínio com o chakra da natureza terrestre é tão grande, você emanar chakra ouro, prata e platina cada vez que você moldar o chakra da terra para lançar um Ninjutsu com a palavra-chave estilo terra.\n\nAo lançar um Ninjutsu com liberação de terra palavra-chave, você obtém os seguintes benefícios:\n- Aumente seu valor de Inteligência em 1, até um máximo de 20.\n- Construtos e estruturas que você invoca recebe dano de interceptação ganha pontos de vida adicionais iguais ao classificação do elenco de jutsu. (Rank D: +4, Rank C: +8, Rank B: +12, Rank A: +16, Rank S: +20).\n- Construções, estruturas e objetos feitos como resultado de Jutsu lançados com a palavra-chave estilo Terra não são mais vulnerável a danos de raio.",
  },
  {
    key: "penetracao-do-chakra-elemental",
    nome: "Penetração do Chakra Elemental",
    categoria: "ninjutsu",
    descricao: "Quando você ganha esse talento, escolha um dos seguintes tipos de dano: Terra, Vento, Fogo, Frio, Relâmpago. Ninjutsu, você lança ignorar resistência ao dano do tipo escolhido.\n\nAlém disso, quando você rola o dano de um jutsu que você conjura que causa dano desse tipo, você pode rolar novamente 1 e 2, mantendo o segundo resultado.\n\nVocê pode selecionar esse talento várias vezes. Cada vez que você fazer isso, você deve escolher um tipo de dano diferente.",
  },
  {
    key: "especializacao-elementar",
    nome: "Especialização Elementar",
    categoria: "ninjutsu",
    descricao: "Você começou a se especializar em um elemento específico a sua escolha. Você ganha os seguintes benefícios:\n- Selecione uma palavra-chave de uma Natureza de chakra (Terra, Vento, Fogo, Água, Relâmpago). Você pode ignorar o Selo de Mão (SM) como requisito para Ninjutsu de Rank C inferior com sua natureza de chakra escolhida.\n- Você causa dano adicional com Ninjutsu com a Palavra-chave da Natureza de chakra escolhida, igual à sua classificação. (Rank D: 1, Rank C: 2, Rank B: 3, Rank A: 4, Rank S: 5).\n- Você reduz o custo de chakra do Ninjutsu com sua palavra-chave da Natureza de chakra escolhida por um valor igual a sua classificação. (Rank D: 1, Rank C: 2, Rank B: 3, Rank A: 4, Rank S: 5). Se um jutsu tiver múltiplas palavras-chave selecionadas, esta redução de custos é aplicada apenas uma vez.\n- Você pode realizar esse talento diversas vezes, cada vez selecionando um elemento diferente.",
  },
  {
    key: "especializacao-nao-elemental",
    nome: "Especialização Não Elemental",
    categoria: "ninjutsu",
    descricao: "Você começou a se especializar em alguma forma de Ninjutsu Não Elemental, seja Fuinjutsu ou Ninjutsu Médico.\n\nVocê ganha os seguintes benefícios:\n- Selecione um: (Fuinjutsu ou Médico). Você pode ignorar o requisito de Selo de Mão (HS) para Ninjutsu, com a palavra-chave escolhida de Rank C ou menor.\n- Você causa dano adicional com Ninjutsu com a palavra-chave escolhida, igual ao seu rank. (Rank D: 1, Rank C: 2, Rank B: 3, Rank A: 4, Rank S: 5)\n- Você reduz o custo de chakra do Ninjutsu, com a palavra-chave escolhida, em uma quantidade igual ao seu rank (Rank D: 1, Rank C: 2, Rank B: 3, Rank A: 4, Rank S: 5).",
  },
  {
    // NOTE: no arquivo extraído, o cabeçalho e o início deste talento aparecem na coluna esquerda perto do fim da página 229 (terminando em "...como 3."), enquanto o restante da lista "um dos seguintes efeitos" (as 3 opções seguintes) aparece fisicamente ANTES, no topo da coluna direita da mesma página. A junção abaixo foi feita por continuidade temática (todas completam a mesma lista de efeitos de "duplica o potencial do jutsu"), mas a ordem exata das colunas nesse trecho específico não pôde ser confirmada com certeza a partir do texto extraído.
    key: "ninjutsu-capacitado",
    nome: "Ninjutsu Capacitado",
    categoria: "ninjutsu",
    descricao: "Você aprende a capacitar seu Ninjutsu com movimentos mais precisos com o chakra, fortalecendo seus efeitos. Você ganha o seguinte benefícios:\n- Quando você lança um ninjutsu que você conhece, você pode gastar 10 Chakra. Se fizer isso, você duplica o potencial do jutsu de impacto que lhe confere um dos seguintes efeitos:\n  - Se o seu ninjutsu exigir uma jogada de ataque, quando você rolar o dado de dano, você trata todos os 1 e 2 como 3.\n  - Se o seu ninjutsu forçar uma criatura a fazer uma defesa jogar, se eles reagiriam em resposta a seu ninjutsu, eles dobram o custo de chakra do jutsu usado. Se a reação que eles tiveram não custa chakra, eles devem gastar 10 chakra para obter a reação.\n  - O Ninjutsu que você lança não pode ter seu dano reduzido em mais da metade como resultado de Jutsu, Características ou Características. Criaturas com resistências ou imunidades naturais ainda reduzem o dano normalmente.\n  - Quando você faria uma Constituição (controle de Chakra) verifique para manter a concentração em um Ninjutsu que você lançou, você pode adicionar um bônus ao teste igual ao Ninjutsu de melhor classificação em que você está se concentrando. (Rank D: 1, Rank C: 2, Rank B: 3, Rank A: 4, Rank S: 5).",
  },
  {
    // NOTE: frase "chamas você conjura queimar duas vezes mais quente, com metade do esforço" está gramaticalmente estranha na extração; mantida literalmente.
    key: "especialista-em-estilo-fogo",
    nome: "Especialista em Estilo Fogo",
    categoria: "ninjutsu",
    preRequisito: "Nível 8+, Palavra-chave Estilo Fogo",
    descricao: "Seu domínio com o chakra da natureza do fogo é tão grande, chamas você conjura queimar duas vezes mais quente, com metade do esforço.\n\nAo lançar um Ninjutsu com a palavra-chave estilo fogo, você ganha os seguintes benefícios:\n- Aumente seu valor de Inteligência em 1, até um máximo de 20.\n- Para cada dado de dano de fogo que você rolar, você ignora 1 de RD de criaturas (redução de dano), até um máximo de 10.\n- Quando você lançaria um Ninjutsu do estilo fogo que cria um cone, esfera ou linha, você pode aumentar o tamanho da área ou comprimento da linha em 3 Metros.",
  },
  {
    // NOTE: "Reduza a CD feita para manter a concentração Ninjutsu com a palavra-chave..." parece faltar uma preposição ("em Ninjutsu"); mantido literalmente.
    key: "especialista-em-estilo-relampago",
    nome: "Especialista em Estilo Relâmpago",
    categoria: "ninjutsu",
    preRequisito: "Nível 8+, Palavra-chave Estilo Relâmpago",
    descricao: "Seu domínio com o chakra de natureza relâmpago é tão grande, você ocasionalmente faísca com energia residual. Você pode alimentar a maioria das tecnologias mundanas passivamente. O relâmpago que você gera é tão potente que pode perfurar até mesmo a maior das defesas.\n\nAo lançar um Ninjutsu com a palavra-chave estilo relâmpago, você obtém os seguintes benefícios:\n- Aumente seu valor de Inteligência em 1, até um máximo de 20.\n- As criaturas não podem ter vantagem em testes de resistência contra Ninjutsu que você lança com a palavra-chave estilo relâmpago.\n- Reduza a CD feita para manter a concentração Ninjutsu com a palavra-chave Estilo Relâmpago por -2.",
  },
  {
    // NOTE: última frase "e um Rank B adicional é passado 13º nível" parece truncada/faltando "se passou do" e pontuação final; mantida literalmente.
    key: "arquivista-ninjutsu",
    nome: "Arquivista Ninjutsu",
    categoria: "ninjutsu",
    preRequisito: "Nível 4+",
    descricao: "Seu foco no calor do combate e no domínio dos selos de mãos, permitem tecer ninjutsu com muito maior eficiência. Você ganha os seguintes benefícios:\n- Aumente seu valor de Inteligência em 1, até um máximo de 20.\n- Você aprende um ninjutsu adicional para o qual se qualifica. Isso não conta para o seu Jutsu Conhecido.\n- Na próxima vez que você atingir o 5º, 9º ou 13º nível, você aprende um Ninjutsu adicional de 1 nível inferior ao sua classificação de jutsu mais alta conhecida.\n- Se você escolher esse talento depois de passar no teste dos níveis declarados anteriormente, você ganha 1 jutsu adicional Rank D se passou do 5º nível, 1 Rank C adicional se passou do 9º nível, e um Rank B adicional é passado 13º nível.",
  },
  {
    key: "penetracao-medica-de-chakra",
    nome: "Penetração Médica de Chakra",
    categoria: "ninjutsu",
    preRequisito: "palavra-chave médica",
    descricao: "Quando você ganha esse talento, escolha um dos seguintes tipos de dano: Ácido, Necrótico ou Venenoso. Ninjutsus que você lançar ignora a resistência a danos do tipo escolhido.\n\nAlém disso, quando você rola o dano de um jutsu que você conjura que causa dano desse tipo, você pode rolar novamente 1 e 2, mantendo o segundo resultado.\n\nVocê pode selecionar esse talento várias vezes. Cada vez que você fazer isso, você deve escolher um tipo de dano diferente.",
  },
  {
    // NOTE: "O dano causado por Ácido, Veneno ou Necrótico é ignorado." está sem complemento claro (provavelmente "resistência ao dano... é ignorada"); mantido literalmente.
    key: "especialista-em-jutsu-medico",
    nome: "Especialista em Jutsu Médico",
    categoria: "ninjutsu",
    preRequisito: "Nível 8+, Palavra-chave Médico",
    descricao: "Cada centelha de energia vital, chakra escuro corrompido ou onda venenosa que você manifesta tem um pequeno pedaço de você entre eles. Você pode comandar os poderes da vida e da morte.\n\nAo lançar um Ninjutsu com a palavra-chave médica, você ganha os seguintes benefícios:\n- Aumente seu valor de Inteligência ou Sabedoria em 1, para um máximo de 20.\n- O dano causado por Ácido, Veneno ou Necrótico é ignorado.\n- Quando você restauraria pontos de vida de criaturas, exceto de você mesmo, você ganha um número de pontos de vida temporários iguais ao número de dados de cura lançados.",
  },
  {
    key: "teorico-de-ninshou",
    nome: "Teórico de Ninshou",
    categoria: "ninjutsu",
    preRequisito: "Inteligência 15+, Proficiência em Ninshou",
    descricao: "Você estuda as artes Ninshou, ganhando os seguintes benefícios:\n- Aumenta sua pontuação de Inteligência em 1, até um máximo de 20.\n- Reduz o Tempo de Inatividade necessário para Aprender, Modificar e Criar Ninjutsu em 1 semana, até um mínimo de 1 semana.\n- Ao longo de um breve descanso, você tenta teorizar e dobrar o fluxo de chakra do Ninjutsu que você sabe ser mais eficaz. Selecione um número de Ninjutsu que você conhece igual ao seu modificador de Inteligência (Máx. 4) e faça um teste de Inteligência (Ninshou) para cada jutsu. A CD para cada teste é baseada no nível do jutsu (Rank D: 16, Rank C: 17, Rank B: 18, Rank A: 19, Rank S: 20). Em um sucesso, até seu próximo descanso, cada jutsu selecionado estará sempre sob uma das seguintes Moldagens Eficientes da Classe Especialista em Ninjutsu sem custo de chakra adicional (você pode escolher uma Moldagem Eficiente diferente para cada jutsu).\n  - Ninjutsu Cuidadoso (Máx. 3 criaturas.)\n  - Ninjutsu Distante\n  - Ninjutsu Perfurante\n  - Ninjutsu Sutil\n  - Ninjutsu Tenaz\n  - Ninjutsu Ampliado",
  },
  {
    key: "especialista-em-estilo-vento",
    nome: "Especialista em Estilo Vento",
    categoria: "ninjutsu",
    preRequisito: "Nível 8+, Palavra-chave Estilo Vento",
    descricao: "Seu domínio com o chakra da natureza do vento é tão grande que com apenas um pensamento, você pode criar a lâmina mais afiada já feita exclusivamente do vento.\n\nAo lançar um Ninjutsu do estilo vento, você obtém os seguintes benefícios:\n- Aumente seu valor de Inteligência em 1, até um máximo de 20.\n- Quando você acionaria um efeito de redemoinho, aumente o raio em +1,5 Metro.\n- As criaturas não podem ter vantagem em testes de resistência contra Ninjutsu que você lança com a palavra-chave Estilo Vento.",
  },
  {
    // NOTE: primeiro benefício ("Você manifesta uma dimensão de bolso com a qual pode interagir com esta dimensão do bolsão tem um limite máximo de volume de 25.") está gramaticalmente confuso na extração; mantido literalmente.
    key: "armazenando-a-alma-do-selo",
    nome: "Armazenando a Alma do Selo",
    categoria: "ninjutsu",
    preRequisito: "Nível 8+",
    descricao: "Você criou uma pequena dimensão de bolso que o segue, que você pode usar para armazenar itens dentro. Você ganha o seguinte Benefícios:\n- Você manifesta uma dimensão de bolso com a qual pode interagir com esta dimensão do bolsão tem um limite máximo de volume de 25.\n- Como uma ação bônus você pode armazenar qualquer item que estiver segurando ou vestindo na dimensão do bolso.\n- Como uma ação bônus você pode recuperar qualquer item armazenado dentro a dimensão do bolso.\n- Se você estiver reduzido a 0 pontos de vida, todos os itens em sua dimensão de bolso são expelidas e caem ocupando espaços aleatórios dentro de 3 metros de você.\n- Outra criatura que esteja ciente da sua dimensão de bolso pode lançar um jutsu com a palavra-chave Fuinjutsu visando você e faça um teste de Inteligência (Ninshou) contra seu Teste de Inteligência ou Constituição (Ninshou). Em um sucesso, eles rasgam a dimensão do seu bolso retirando qualquer item eles estão procurando.",
  },
  {
    key: "especialista-em-estilo-agua",
    nome: "Especialista em Estilo Água",
    categoria: "ninjutsu",
    preRequisito: "Nível 8+, Palavra-chave Estilo Água",
    descricao: "Você pode sentir cada gota de água e cada molécula de chakra fluindo dentro de cada gota. Você pode apertar eficiência de cada gota. Ao lançar um Ninjutsu com a palavra-chave estilo água, você ganha o seguinte benefícios:\n- Aumente seu valor de Inteligência em 1, até um máximo de 20.\n- Quando você estiver perto de uma fonte de água suficiente que possa ser usado para reduzir o custo de um determinado jutsu lançado, reduza o custo em 3, em vez de 2.\n- Quando um ninjutsu que você lança com a palavra-chave estilo água causa dano a pelo menos uma criatura, você pode opte por deixar para trás uma pequena fonte de água dentro 1,5 Metro de uma das criaturas afetadas. A fonte de água pode ser usada para ativar efeitos que requerem um fonte suficiente de água não mais de uma vez, o que em seguida, drena a fonte de água.",
  },
];
