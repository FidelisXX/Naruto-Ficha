import type { TalentDefinition } from "@/lib/talents/types";

/** Talentos de Habilidade — Manual Shinobi, Cap. 13, p.220-224 (parte 2). */
export const talentosHabilidade2: TalentDefinition[] = [
  {
    key: "confianca-fingida",
    nome: "Confiança Fingida",
    categoria: "habilidade",
    descricao: "Você passou anos fingindo que sabe o que está fazendo, obtendo os seguintes benefícios:\n- Aumente sua pontuação de carisma em 1, até um máximo de 20.\n- Você ganha proficiência em Enganação. Se você já for proficiente, você ganha experiência.\n- Quando você faria um teste de Carisma (Persuasão), você pode optar por usar seu Carisma (Engano), enquanto você tece mentiras inocentes em sua conversa ou declarações diplomáticas na tentativa de ganhar o favor os outros participantes da conversa. Essas mentiras inocentes são inofensivo e não pode criar reações negativas de outros participantes da conversa.\n- Selecione uma habilidade na qual você não é proficiente, excluindo atletismo, acrobacia ou controle de chakra (você pode alterar essa habilidade quando você completa um descanso longo). Quando você faria fazer um teste usando a perícia escolhida, você usa seu Bônus de engano no lugar daquele bônus de habilidades. Se você sucesso, você acreditou tanto em si mesmo, que completar a tarefa ao acaso. A tarefa concluída pode passar como trabalho genuíno por um momento, mas depois da inspeção contra uma CD igual ao seu bônus de Enganação outros percebem que foi potencialmente uma sorte estúpida ou você fez isso de uma forma muito pouco profissional. (Ex. Você usa esse talento para usar Enganação em vez de prestidigitação para arrombar uma fechadura. Se você sucesso, você pode ter arrombado a fechadura, mas agora a porta ou a própria fechadura também está quebrada ou há evidências de adulteração.)",
  },
  {
    key: "lista-de-ferramentas-geniais",
    nome: "Lista de Ferramentas Geniais",
    categoria: "habilidade",
    descricao: "Você passou um uso prolongado com um kit de ferramentas, o que o tornou um gênio ao usá-lo. Você ganha os seguintes benefícios:\n- Aumente sua Inteligência em 1, até um máximo de 20.\n- Você ganha proficiência com qualquer Kit de Ferramentas. Se você já for proficiente, você ganha experiência.\n- Sempre que você usaria o Kit de Ferramentas para desenvolver uma habilidade, você pode usar sua Inteligência no lugar de qualquer outro Modificador de habilidade.\n- Como uma ação, ao visualizar uma construção, você pode fazer um teste de habilidade de Inteligência vs uma CD (5 + nível do alvo (qualquer)). Com um sucesso, você fica ciente de qualquer Vulnerabilidades que pode ter (se houver).\n- Se você estiver visualizando uma estrutura por pelo menos 10 minutos por categoria de tamanho de edifício, você pode fazer um teste de Inteligência contra CD 8 + a categoria de tamanho da estrutura (Prédio Pequeno: 3, Prédio Médio: 5, Grande Edifício: 7, Edifício enorme: 9, Edifício gigantesco: 11). Com um sucesso, você toma conhecimento de uma ou duas entradas secretas ou existências de passagens.\n\nTAMANHOS DE EDIFÍCIOS EM RELAÇÃO À FERRAMENTA GENIUS: Embora não haja regras diretas para determinar o tamanho de um edifício fora de suas dimensões dadas, esse talento assume que um Mestre tem uma aproximação para o tamanho de uma estrutura. Com base nas categorias de tamanho fornecidas aqui estão exemplos de um determinado edifício dentro de uma determinada categoria de tamanho: Edifício pequeno: casa média, chalé, pequeno escritório ou loja, cabanas, prédios de favela. Esta categoria abrange a maioria dos alojamentos para todos os estilos de vida modestos e abaixo. Edifício Médio: Casa rica, Hotel ou Pousada, Lojas de alto padrão, Forjas, Instalações de treinamento. Esta categoria abrange a maioria dos alojamentos para estilos de vida confortáveis. Grandes Edifícios: Mansões, complexos, Edifícios/escritórios Kage, instalações militares. Esta categoria abrange a maioria dos alojamentos para estilos de vida ricos. Edifícios Enormes: Castelos, Palácios, propriedades Daimyo. Esta categoria abrange a maioria dos alojamentos para estilos de vida sem precedentes. Edifícios Gigantesco: Edifícios do tamanho de pequenas cidades, castelo, Fortalezas de montanha.",
  },
  {
    key: "perceptivo",
    nome: "Perceptivo",
    categoria: "habilidade",
    descricao: "Você aprimora seus sentidos até que eles se tornem aguçados. Você obtem os seguintes benefícios:\n- Aumente seu valor de Sabedoria em 1, até um máximo de 20.\n- Você ganha proficiência na perícia Percepção. Se você já for proficiente, você ganha experiência.\n- Estar em uma área levemente obscurecida não impõe desvantagem em seus testes de Sabedoria (Percepção) se você pode ver e ouvir.\n- Você recebe um bônus de +5 em sua Sabedoria passiva (Percepção) e Inteligência passiva (Investigação) pontuações.\n- Se você puder ver a boca de uma criatura enquanto ela fala um dialeto que você entende, você pode interpretar o que é dizendo lendo seus lábios.",
  },
  {
    // NOTE: cabeçalho extraído como "PESQUISA ILUSIONISTA"; muito provavelmente é "PESQUISADOR ILUSIONISTA" (padrão análogo a "Pesquisador das Artes Marciais" e "Pesquisa Ninshou" nesta mesma seção), mas o texto foi mantido exatamente como extraído por segurança.
    key: "pesquisa-ilusionista",
    nome: "Pesquisa Ilusionista",
    categoria: "habilidade",
    descricao: "Você começou a encontrar alguma verdade no mundo da ilusões e Genjutsu, descobrindo que suas origens são mais sombrias e mais sinistro do que você pensava. Você ganha o seguintes benefícios:\n- Aumente sua Inteligência ou Sabedoria em 1, até um máximo de 20.\n- Você ganha proficiência na habilidade Ilusões. Se você já for proficiente, você ganha experiência.\n- Quando você faria um teste de Identificar Genjutsu, você reduz a CD em 5.\n- Se você tentasse um teste de Ler o Inimigo, em um criatura lançando um Genjutsu, você não precisa mais ver uma criatura usando sinais de mão para tentar este teste, e você ganha um bônus de +2 em testes de resistência feitos contra a conjuração deste Genjutsu, até o início do seu próximo turno.\n- Você reduz o tempo de inatividade necessário para aprender Genjutsu usando o método autodidata por um valor igual a a classificação do jutsu. (Rank D: 1, Rank C: 2, Rank B: 3, Rank A: 4, Rank S: 5.)",
  },
  {
    key: "historiador",
    nome: "Historiador",
    categoria: "habilidade",
    descricao: "Seu estudo da história o recompensa com os seguintes benefícios:\n- Aumente seu valor de Inteligência em 1, até um máximo de 20.\n- Você ganha proficiência na habilidade História. Se você já for proficiente, você ganha experiência.\n- Quando você realiza a ação Ajudar para ajudar outra pessoa em um teste, você pode fazer um teste de Inteligência CD 15 (Histórico). Se obtiver sucesso, o teste daquela criatura ganha um bônus igual ao seu modificador de Inteligência, conforme você compartilha conselhos pertinentes e exemplos históricos.\n- Como uma ação no seu turno ou como uma reação ao ver um criatura pela primeira vez, selecione uma criatura que você possa ver. Faça um teste de Inteligência (Histórico) contra um CD (8 + nível das criaturas). Com um sucesso, você se torna ciente do tipo de jutsu primário desta criatura ou método de combate conforme você se lembra de ter lido ou pesquisado sobre eles. Você só pode usar esse recurso em uma criatura uma vez por descanso longo. Em caso de falha, você não pode lembre-se de qualquer coisa sobre eles imediatamente.",
  },
  {
    key: "medico-de-campo",
    nome: "Médico de Campo",
    categoria: "habilidade",
    descricao: "Você é um médico competente, permitindo curar feridas rapidamente e traga seus aliados de volta à luta. Você ganha o seguinte benefícios:\n- Aumente seu valor de Sabedoria em 1, até um máximo de 20.\n- Você ganha proficiência em Medicina. Se você já for proficiente, você ganha experiência.\n- Você ganha proficiência em Kits de Medicamentos. Se você já for proficiente, você ganha experiência.\n- Quando você superasse a CD de estabilização em 10 ou mais, a criatura alvo também recupera 1 ponto de vida, tornando-se consciente e você remove 1 teste de resistência à morte. Você pode remover um teste de resistência contra a morte de uma criatura desta forma duas vezes por descanso total, por criatura.\n- Como uma ação bônus, você pode gastar um uso do seu kit de remédio. Se fizer isso, você melhora a próxima pílula de sangue que você ou outra criatura consumir. Quando você faz isso, eles em vez disso obtenha o máximo benefício de consumir uma dessas pílulas e não precisa rolar.",
  },
  {
    key: "mestre-do-disfarce",
    nome: "Mestre do Disfarce",
    categoria: "habilidade",
    descricao: "Você aprimorou sua capacidade de moldar sua personalidade e olhar para o de outros com um nível surpreendente de detalhe. Você ganha os seguintes benefícios:\n- Você ganha proficiência com o kit de disfarce.\n- Você ganha proficiência com desempenho. Se você já for proficiente, você ganha experiência.\n- Você pode fazer testes de Carisma (Desempenho) no lugar de Verificações de engano.\n- Ao imitar uma criatura, você tem vantagem nas verificações de desempenho feitas para personificar isso criatura.\n- Reduza o tempo necessário para fazer um disfarce ao usar um kit de disfarce por um fator de até 10. Disfarces simples agora leva apenas 1 minuto. Disfarces elaborados agora levam apenas 10 minutos, e disfarces requintados agora levam apenas 1 hora.",
  },
  {
    key: "envenenador",
    nome: "Envenenador",
    categoria: "habilidade",
    descricao: "Você estudou os segredos dos venenos e toxinas, obtendo os seguintes benefícios:\n- Aumente sua Inteligência em 1, até um máximo de 20.\n- Você ganha proficiência com o kit de envenenador. Se você já for proficiente, você ganha Maestria.\n- Reduza a CD para criar Venenos em uma quantidade igual ao seu modificador de habilidade de Ninjutsu.\n- Você pode aplicar um veneno a uma arma como parte da mesma ação usada para atacar com a arma, uma vez por turno.\n- Durante um descanso curto, você pode infundir seu chakra em uma única dose de veneno. Para usar esse benefício, você deve ter um kit de envenenador e ter um veneno de qualquer tipo. Você só pode ter um veneno infundido dessa forma. Este veneno infundido pode usar sua CD de Resistência listada ou sua CD de Resistência de Ninjutsu (você decide). Além disso, se causar dano, ele causa dano adicional igual a uma quantidade de dado de dano, igual à metade do seu bônus de proficiência.",
  },
  {
    // NOTE: a ordem exata dos benefícios deste talento é incerta por causa do layout em duas colunas: o cabeçalho, a categoria, o parágrafo introdutório e dois benefícios simples aparecem em uma coluna, enquanto o benefício sobre criar "pomadas" e a "TABELA DE HERBALISTA" aparecem fisicamente antes no topo da coluna vizinha. O conteúdo foi preservado por completo, mas a posição relativa do bloco da pomada/tabela dentro da lista de benefícios pode não refletir a ordem original exata do livro.
    key: "herbalista",
    nome: "Herbalista",
    categoria: "habilidade",
    descricao: "Você é adepto de aproveitar as propriedades úteis de ervas e outras plantas. Você ganha os seguintes benefícios:\n- Aumente seu valor de Inteligência em 1, até um máximo de 20.\n- Você ganha proficiência na Natureza. Se você já for proficiente, você ganha experiência.\n- Você pode aplicar curas naturais e medicamentos para curar seus aliados. Contanto que você esteja perto de uma variedade de plantas e folhagem natural você pode fazer uma Inteligência (Natureza) para checar no lugar de um teste de medicina.\n- Se você estiver em uma região selvagem, você pode tratar os arredores folhagem natural como se você tivesse um kit de remédios com 3 cargas.\n- Durante um breve descanso, você pode fazer um Teste de Inteligência (Natureza) para procurar plantas especiais que pode ser usado para criar uma pomada especial que você ou outra criatura pode consumir ou aplicar a outra criatura disposta como uma ação. O CD para encontrar as plantas necessárias para criar a pomada estão listados na tabela do Herbalista no final desta façanha. Se você tiver sucesso no teste, você escolhe uma das pomadas que você deseja fazer que tenham uma CD menor ou igual ao resultado de suas verificações. Você só pode fazer um teste por descanso. Essas pomadas mantêm sua potência por até 24 horas. Você só pode tomar duas pomadas por vez. Se você ganha uma terceira pomada, uma das pomadas anteriores perde a potência e torna-se inerte. Você só pode encontrar plantas especiais para essas pomadas em qualquer local dentro de 10 milhas duas vezes por mês.\n\nTABELA DE HERBALISTA (Nome da Pomada, CD, Efeito):\n- CD 10, Pomada Amarga: Acabe com a condição Envenenado e recupere 2d10 + 4 pontos de vida.\n- CD 12, Pomada Doce: Recupere a capacidade de moldar chakra e recuperar 2d6 + 4 pontos de chakra.\n- CD 15, Pomada Gelatinosa: Selecione um tipo de dano. Você reduz todos os danos infligido por esse tipo de dano em 5 por 1 minuto.\n- CD 17, Pomada Azeda: Acabe com a condição de Encantado ou Temido e recuperar 2d12 + 12 pontos de vida.\n- CD 20, Pomada Picante: Acabe com a condição de atordoado ou paralisado e recupere 2d8 + 12 pontos de chakra.\n- CD 22, Salgadinho Salgado: Recupera 1d4 + 1 ponto de vida no final de cada seus turnos por 1 minuto.\n- CD 25, Pomada ressecada: Você ganha resistência a todos os danos por 1 minuto.\n- CD 27, Pomada de caramelo: Seu AC se torna 15 + Seu bônus de proficiência por 1 minuto se for inferior ao resultado. Seu AC não pode ser reduzido abaixo deste valor para o duração.\n- CD 30, Pomada Omni: Selecione duas de quaisquer Pomadas anteriores e combine seus efeitos.",
  },
  {
    key: "investigador",
    nome: "Investigador",
    categoria: "habilidade",
    descricao: "Você tem olho para os detalhes e pode escolher os menores pistas. Você ganha os seguintes benefícios:\n- Aumente seu valor de Inteligência em 1, até um máximo de 20.\n- Você ganha proficiência em Investigação ou Kit de amostra (escolha um). Se você já for proficiente, você em vez disso, ganha experiência.\n- Você pode realizar a ação Procurar ou fazer uma Investigação (Inteligência) como uma ação bônus.\n- Quando você faz um teste de Inteligência (Investigação), se seu resultado for 5 ou maior que a CD, você ganha informações adicionais ou pistas sobre o mistério em questão ou situação.\n- Ao passar 10 minutos estudando uma área do tamanho de uma sala pequena, você pode começar a ver ecos dos últimos 24 horas na área determinada. Este eco toca em sua mente como se estivesse assistindo a um filme ao contrário e todos os atores estivessem em figuras humanoides inexpressivas que você não pode atribuir um nome ou rosto a. Esta cena se desenrola em sua integra e você pode retroceder, desacelerar ou acelerar este eco à vontade. Você não pode reproduzir um eco se as 24 horas passou. Ao visualizar este eco, você pode fazer Verificações de inteligência (investigação) de várias dificuldade definida pelo Mestre para coletar informações do eco com base no que está acontecendo.",
  },
  {
    key: "dedos-rapidos",
    nome: "Dedos Rápidos",
    categoria: "habilidade",
    descricao: "Seus dedos ágeis e agilidade permitem que você faça selos de mão. Você ganha os seguintes benefícios:\n- Aumente seu valor de Destreza em 1, até um máximo de 20.\n- Você ganha proficiência na habilidade Prestidigitação. Se você já for proficiente, você ganha experiência.\n- Você pode realizar um teste de prestidigitação como ação bônus.\n- Suas habilidades em roubo são tão boas que você pode até batedor de carteira ou plante algo a até 9 metros de distância.\n- Como reação a uma criatura fazendo um ataque com arma mirando em você, você pode fazer um teste de Destreza (Prestidigitação) verifique versus a jogada de ataque do alvo. Em um sucesso, você os desarma tão rapidamente que eles não percebem você o desarmou. Seu ataque se torna um ataque desarmado. Eles não percebem que foram desarmados até depois do ataque ter concluído.",
  },
  {
    key: "especialista-praticado",
    nome: "Especialista Praticado",
    categoria: "habilidade",
    descricao: "Você aprimorou sua proficiência com habilidades específicas ou ferramentas, obtendo os seguintes benefícios:\n- Aumente um valor de habilidade de sua escolha em 1, até o máximo de 20.\n- Você ganha proficiência em um kit de ferramentas de sua escolha. Se você tiver proficiência no kit de ferramentas escolhido, você ganha experiência nesse kit.\n- Você pode realizar esse talento diversas vezes.",
  },
  {
    key: "furtivo",
    nome: "Furtivo",
    categoria: "habilidade",
    descricao: "Você sabe a melhor forma de se esconder. Você ganha o seguinte benefícios:\n- Aumente sua Destreza em 1, até um máximo de 20.\n- Você ganha proficiência na habilidade Furtividade. Se você já for proficiente, você ganha experiência.\n- Você pode realizar a ação Esconder-se como uma ação bônus.\n- Se você estiver escondido, você ganha um bônus de +20 em velocidade de movimento ao se esgueirar.\n- As criaturas têm uma penalidade de -5 em Sabedoria (Percepção) em verificações feitas para procurar por você, enquanto você está escondido deles.",
  },
  {
    // NOTE: no texto extraído, o primeiro benefício está incompleto ("...até um máximo de" sem o valor numérico, que em todos os outros talentos desta lista é "20."). O valor não foi inventado; o texto foi mantido exatamente como extraído.
    key: "ameacador",
    nome: "Ameaçador",
    categoria: "habilidade",
    descricao: "Você se torna temível para os outros, ganhando os seguintes benefícios:\n- Aumente seu valor de Carisma em 1, até um máximo de\n- Você ganha proficiência na perícia Intimidação. Se você já for proficiente, você ganha experiência.\n- Você pode tentar a Ação de Habilidade Desmoralizar, como ação bônus.\n- Você pode tentar a Ação de Habilidade Desmoralizar contra a mesma criatura até três vezes, antes de se tornarem acostumado com sua presença intimidante.",
  },
  {
    // NOTE: cabeçalho extraído como "PESQUISA NINSHOU"; provavelmente "PESQUISADOR NINSHOU" (mesmo padrão de nome de outros talentos "Pesquisador de..." nesta seção), mantido como extraído.
    key: "pesquisa-ninshou",
    nome: "Pesquisa Ninshou",
    categoria: "habilidade",
    descricao: "Você começou a mergulhar profundamente na tradição, na mecânica e propósito do Ninjutsu. Você ganha os seguintes benefícios:\n- Aumente sua Inteligência em 1, até um máximo de 20.\n- Você ganha proficiência na habilidade Ninshou. Se você já for proficiente, você ganha experiência.\n- Quando você faria um teste de Identificar Ninjutsu, você reduz a CD em 5.\n- Se você tentasse um teste de Ler o Inimigo, em uma criatura lançando um Ninjutsu, você não precisa mais ver uma criatura usando sinais de mão para tentar este teste, e você aumenta o bônus CA que ganharia para +3.\n- Você reduz o tempo de inatividade necessário para aprender Ninjutsu usando o método autodidata por um valor igual a classificação do jutsu. (Rank D: 1, Rank C: 2, Rank B: 3, Rank A: 4, Rank S: 5.)",
  },
  {
    // NOTE: cabeçalho extraído como "PESQUIDOR DAS ARTES MARCIAIS" (provável erro de OCR/extração para "Pesquisador das Artes Marciais"), mantido como extraído.
    key: "pesquidor-das-artes-marciais",
    nome: "Pesquidor das Artes Marciais",
    categoria: "habilidade",
    descricao: "Você começou a pesquisar a história das artes marciais e como eles mudaram ao longo das gerações. Você obter os seguintes benefícios:\n- Aumente sua Inteligência ou Força em 1, até um máximo de 20.\n- Você ganha proficiência na habilidade Artes Marciais. Se você já for proficiente, você ganha experiência.\n- Quando você faria um teste de identificação de Taijutsu/Bukijutsu, você reduz a CD em 5.\n- Se você tentasse um teste de Ler o Inimigo, em uma criatura lançando um Taijutsu ou Bukijutsu, você ganha 5 redução de dano ao lançamento de Taijutsu ou Bukijutsu.\n- Selecione um entre os seguintes: Taijutsu ou Bukijutsu. Você reduz o tempo de inatividade necessário para aprender o tipo escolhido usando o método autodidata por uma quantidade igual à classificação do jutsu. (Rank D: 1, Rank C: 2, Rank B: 3, Rank A: 4, Rank S: 5.)",
  },
  {
    key: "performista",
    nome: "Performista",
    categoria: "habilidade",
    descricao: "Seus anos de treinamento com seu instrumento musical valeram a pena. Você ganha os seguintes benefícios:\n- Aumente sua pontuação de Carisma em 1, até um máximo de 20.\n- Você ganha proficiência na perícia Performance. Se você já for proficiente, você ganha Maestria.\n- Ao se apresentar por pelo menos um minuto com seu instrumento musical mais praticado, você ganha vantagem em um teste de perícia performance.\n- Uma vez por descanso longo, você pode se apresentar para sua equipe com seu instrumento musical mais praticado e inspirar seus aliados. Seus aliados inspirados ganham pontos de vida temporários iguais ao seu bônus de proficiência + pontuação de habilidade Carisma.",
  },
];
