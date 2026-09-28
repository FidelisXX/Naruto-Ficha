import type { TalentDefinition } from "@/lib/talents/types";

/** Talentos Gerais — Manual Shinobi, Cap. 13, p.209-214. */
export const talentosGeral: TalentDefinition[] = [
  {
    key: "surto-de-acao",
    nome: "Surto de Ação",
    categoria: "geral",
    preRequisito: "Nível 8+",
    descricao:
      "Você pode se esforçar além dos seus limites normais por um momento. Você ganha o seguinte benefício: No seu turno, você pode realizar uma ação adicional. Uma vez que você usa esse recurso, você deve realizaer um descanso longo antes você pode usá-lo novamente. A partir do nível 17, você pode ganhar um uso adicional deste feito, por longo descanso.",
  },
  {
    key: "estudo-avancado",
    nome: "Estudo Avançado",
    categoria: "geral",
    descricao:
      "Você é um aluno avançado e um aluno capaz. Você geralmente se destacam na compreensão de conceitos muito acima do seu conjunto de habilidades com um potencial incrível. Aumente um valor de Habilidade em 1, até um máximo de 20. Você aprende um jutsu adicional que está 1 graduação acima do seu Jutsu de classificação mais alta conhecido, de acordo com sua tabela de classe. (Isso não conta contra o seu jutsu conhecido). Na próxima vez que você atingir o 4º, 8º, 12º e 16º níveis, você aprende um Jutsu adicional de 1 nível superior ao seu Jutsu de classificação mais alta conhecida.",
  },
  {
    key: "finta-agil",
    nome: "Finta Ágil",
    categoria: "geral",
    descricao:
      "Você sabe como usar sua agilidade para lhe garantir vantagem e desvantagem do seu oponente. Você ganha o seguinte benefícios: Aumente seu valor de Destreza em 1, até um máximo de 20. Reduz o volume das Armaduras Leves em 1. Você pode usar a habilidade ação de finta, com destreza (Acrobacia) e sem experiência em Enganação. Quando uma criatura erra você com um ataque corpo a corpo, você pode usar sua reação para fazer um ataque de oportunidade contra a criatura desencadeadora.",
  },
  {
    key: "alerta",
    nome: "Alerta",
    categoria: "geral",
    descricao:
      "Sempre atento ao perigo, você ganha os seguintes benefícios: Você ganha um bônus de +5 na Iniciativa. Você pode adicionar seu modificador de Sabedoria no lugar de Destreza ao seu bônus de Iniciativa. Você não pode ser surpreendido enquanto estiver consciente. Você fica ciente de qualquer criatura conjurando um jutsu com Selos de Mão (SM) a até 60 pés de você. Isso não lhe diz imediatamente a localização das criaturas, em vez disso, você só sabe que os Selos de Mão (SM) foram feitos com a intenção de conjurar um Jutsu. Você tem vantagem em testes feitos para encontrar criaturas escondidas. Outras criaturas não ganham vantagem em jogadas de ataque contra você como resultado de estarem escondidas de você.",
  },
  {
    key: "atleta",
    nome: "Atleta",
    categoria: "geral",
    descricao:
      "Você passou por um extenso treinamento físico para ganhar os seguintes benefícios: Aumente seu valor de Força ou Destreza em 1, até um máximo de 20. Você ganha velocidade de natação, escalada e corrida na parede igual à sua velocidade normal. Aumente seu volume máximo em +5. O salto em distância foi aumentado para 3 metros + o modificador de Força e o salto em altura foi aumentado para 5 + o modificador de Força. Você tem vantagem em testes de agarrar contra criaturas cuja pontuação de força é menor que a sua.",
  },
  {
    // NOTE: nesta página (210) o talento "Adepto de Confronto" preenche toda a coluna
    // esquerda e o texto da coluna direita, no topo da mesma página, continua
    // tematicamente o mesmo talento (menção a "Choque Predestinado" como benefício
    // adicional). Interpretei como continuação do mesmo talento (mais um benefício),
    // e não como um talento separado sem cabeçalho — mas a extração não deixa 100%
    // claro se essa continuação pertence aqui ou se houve perda de um cabeçalho.
    key: "adepto-de-confronto",
    nome: "Adepto de Confronto",
    categoria: "geral",
    preRequisito: "Proficiência em Ninshou ou Artes Marciais, Nível 4+",
    descricao:
      "Você se especializa na arte de Confronto, ganhando os seguintes benefícios: Escolha entre Ninshou ou Artes Marciais. Quando você participa de um Confronto de Jutsu, trate seus níveis de Maestria na habilidade escolhida como +1 maior, desde que você seja proficiente com a habilidade. Você sempre pode dizer se um Jutsu possui a palavra-chave Confronto apenas ao vê-lo conjurado. Você não fica Atordoado como resultado de perder um Confronto. Quando você tem sucesso em um Confronto de Jutsu, você pode escolher empurrar o alvo para trás 30 pés. Selecione dois jutsus que você conhece. Esses jutsus se tornam conhecidos como seu Jutsu de Confronto. Você pode mudar quais jutsus são seus Jutsu de Confronto em um descanso longo. Seu Jutsu de Confronto ganha a palavra-chave Confronto, e uma vez por descanso você pode conjurar esses jutsus como uma Reação ao ser alvo de um Jutsu ou Efeito com a palavra-chave Confronto, ignorando o tempo de conjuração listado. Você pode denotar dois jutsus adicionais que você conhece como Jutsu Conhecido. Além disso, uma vez por descanso longo quando você inicia um Choque com seu Choque Jutsu, você pode declarar este choque como seu Choque Predestinado. Choque Predestinado: Você ignora quaisquer efeitos que penalizariam suas disputas de Choque Jutsu de qualquer forma, e sempre trata seu Choque como um Melhor de 3, independentemente do nível do jutsu usado. Você também pode colidir com Artes, independentemente do nível do seu jutsu. Por fim, se a criatura com a qual você está Chocando aumentaria seus testes de choque com qualquer forma de bônus baseado em dados (como Dado de Tenacidade), você rola a mesma quantidade de dado bônus, do mesmo tamanho de dado, para seus testes de Conflito.",
  },
  {
    // NOTE: o cabeçalho impresso é "ESPECIALISTA EM CONFLITO", mas o pré-requisito e
    // o corpo do texto tratam da mecânica "Confronto" (mesmo termo do talento
    // "Adepto de Confronto"). Mantive "Conflito" literalmente como no original —
    // pode ser inconsistência do próprio livro, não necessariamente erro de extração.
    key: "especialista-em-conflito",
    nome: "Especialista em Conflito",
    categoria: "geral",
    preRequisito: "Talento Adepto de Confronto, Nível 12+",
    descricao:
      "Você dominou a arte de Confronto, ganhando os seguintes benefícios: Você ganha +1 graduações de Maestria na Habilidade selecionada com o talento Adepto de Confronto. Se você tiver/for tratado como tendo +3 graduações de Maestria quando fizer um Confronto de Jutsu com a habilidade escolhida, ganhe um bônus de +1d6 na sua jogada. Isso se torna um +1d10 se você estiver Ensanguentado (abaixo de 50% dos pontos de vida máximos). Quando você perde um Confronto de Jutsu, você não fica Abalado e ganha resistência ao dano causado. Quando você tem sucesso em um Confronto de Jutsu, você pode escolher derrubar o alvo.",
  },
  {
    key: "explorador-de-masmorras",
    nome: "Explorador de Masmorras",
    categoria: "geral",
    descricao:
      "Alerta para as armadilhas escondidas e portas secretas encontradas em muitas masmorras, você ganha os seguintes benefícios: Aumente seu valor de Inteligência ou Sabedoria em 1, sendo o máximo de 20. Você tem vantagem em testes de Percepção e Investigação feitas para detectar a presença de armadilhas. Você tem vantagem em testes de resistência feitos para evitar ou resistir às armadilhas. Você tem resistência ao dano causado por armadilhas. Você pode procurar armadilhas como uma ação bônus, em vez de uma ação.",
  },
  {
    key: "duravel",
    nome: "Durável",
    categoria: "geral",
    descricao:
      "Resistente e resiliente, você obtém os seguintes benefícios: Aumente seu valor de Constituição em 1, até o máximo de 20. Quando você rola um Dado de Vida para recuperar pontos de vida, o número mínimo de pontos de vida que você pode recuperar gastando o dado atingido é igual ao dobro da sua constituição modificador (Min. 2). Seu máximo de pontos de vida aumenta em um valor igual ao dobro do seu nível quando você ganha este talento. Sempre que você ganha um nível depois disso, seus pontos de vida máximo aumenta em 2 pontos de vida adicionais.",
  },
  {
    key: "alvo-elusivo",
    nome: "Alvo Elusivo",
    categoria: "geral",
    descricao:
      "Você é ágil demais para ser pego de surpresa ou ser empurrado para um canto. Você ganha os seguintes benefícios: Aumente seu valor de Destreza em 1, até um máximo de 20. Você pode realizar a ação Esconder-se como uma ação bônus e você pode fazer isso mesmo quando levemente obscurecido. As criaturas não ganham vantagem em ataques contra você como resultado de estar contido ou propenso. Se você for submetido a um ataque ou jutsu que exija um salvamento de Destreza. Em um salvamento bem-sucedido, você não recebe dano e não sofrer nenhum efeito. Quando você é empurrado com força por mais de 3 metros em qualquer direção, se você terminar o seu movimento dentro de 3 metros de uma cobertura grande o suficiente para esconder para trás, você pode gastar sua reação para ficar para trás e execute a ação Esconder-se, tentando se esconder enquanto a poeira do último ataque assenta.",
  },
  {
    key: "gourmande",
    nome: "Gourmande",
    categoria: "geral",
    preRequisito: "Talento Chef, Nível 8+",
    descricao:
      "Você dominou uma variedade de receitas especiais, permitindo você prepare pratos exóticos com efeitos úteis. Você ganha os seguintes benefícios: Como ação bônus, você pode inspecionar uma bebida ou prato de comida a até 3 metros de você e determine se ela foi alterada de qualquer forma positiva ou negativa e o que faz sem ter que fazer um teste. Durante um descanso curto, se você preparar comida usando o talento Chef, você realça seu sabor. Criaturas que obtêm o benefício de sua comida especial, tornar-se imune à condição envenenada e ganhar resistência a dano venenoso até seu próximo descanso. Durante um descanso longo, você pode gastar um uso de seu Kit de Culinária para preparar e servir uma refeição que te ajuda e os seus aliados se recuperam dos rigores da aventura. A refeição serve até seis pessoas, e cada pessoa que come, ele recupera 3 Dados de Vida. Além disso, aumentam seus pontos de vida máximos e ganham pontos de vida adicionais pontos iguais a 4d8 pelas próximas 8 horas.",
  },
  {
    // NOTE: trechos "por um trimestres" e "para um sendo o máximo de 20" no texto
    // original parecem artefatos de extração/erro do próprio livro (frases
    // gramaticalmente quebradas). Mantive literalmente, sem corrigir ou inventar.
    key: "especialista-em-selo-de-mao",
    nome: "Especialista em Selo de Mão",
    categoria: "geral",
    descricao:
      "Você praticou utilizando Ninjutsu e Genjutsu por um trimestres e em conflitos contestados, técnicas de aprendizagem que lhe concedem os seguintes benefícios: Aumente seu valor de Inteligência ou Sabedoria em 1, para um sendo o máximo de 20. Ao fazer um ataque de Ninjutsu ou Genjutsu à distância enquanto você estiver a até 1,5 metro de uma criatura hostil, você não tem desvantagem na jogada de ataque. Quando uma criatura tentaria interromper um jutsu você conjura no seu turno, eles devem fazer um teste de habilidade para interromper, independentemente de eles terem um recurso ou jutsu que diz o contrário. Eles aumentam a CD para interromper seu jutsu em +2.",
  },
  {
    key: "dominio-de-armadura",
    nome: "Domínio de Armadura",
    categoria: "geral",
    preRequisito: "Proficiência com Armadura Média, Nível 4+",
    descricao:
      "Você treinou para dominar o uso de armadura pesada, ganhando os seguintes benefícios: Você ganha proficiência com armadura pesada. Se você já é proficiente com armadura pesada, em vez disso, aumente sua pontuação de Força ou Constituição em 1, até um máximo de 20. Selecione 4 tipos de dano da lista a seguir: Terra, Vento, Fogo, Frio, Relâmpago, Força, Ácido, Veneno, Necrótico. A armadura pesada que você veste aplica seu valor Reforçado vs os tipos de dano escolhidos.",
  },
  {
    key: "mao-amiga",
    nome: "Mão Amiga",
    categoria: "geral",
    descricao:
      "Sua presença em uma briga tende a elevar seus camaradas, você ganha os seguintes benefícios: Você pode usar a ação Ajuda como uma ação bônus. Quando você usa a ação Ajudar para ajudar um aliado atacando uma criatura, aumente o alcance da ação Ajudar em 3 metros. Você pode ajudar uma criatura com um teste de perícia que não seja proficiente. Você pode ajudar dois aliados que tenham como alvo a mesma criatura dentro do alcance quando você usa a ação de Ajuda dessa maneira.",
  },
  {
    key: "lider-inspirador",
    nome: "Líder Inspirador",
    categoria: "geral",
    preRequisito: "Carisma 15+",
    descricao:
      "Você pode passar 10 minutos inspirando seus companheiros, reforçando sua determinação de lutar. Ao fazer isso, escolhe até seis criaturas amigáveis (que podem incluir você) dentro de 30 pés de você, quem pode ver ou ouvir você e que possa entender você. Cada criatura pode ganhar temporariamente pontos de vida iguais ao seu bônus de proficiência + sua Pontuação de Carisma. Além disso, cada criatura ganha dois Dados de Líder, que são d4s. Uma criatura pode gastar um Dado de Líder quando faz uma jogada de ataque, teste de perícia, iniciativa ou teste de resistência, não mais do que uma vez por jogada. Uma criatura pode ganhar os benefícios deste talento não mais do que uma vez por descanso.",
  },
  {
    key: "presenca-inspiradora",
    nome: "Presença Inspiradora",
    categoria: "geral",
    descricao:
      "Sua presença no campo de batalha é uma fonte de inspiração. Você ganha os seguintes benefícios: Aumente seu valor de Carisma em 1, até um máximo de 20. Como ação, você pode soltar um grito de guerra inspirador. Selecione um número de criaturas que podem ouvi-lo igual ao seu bônus de proficiência. Cada uma dessas criaturas ganha um bônus em seu próximo teste de perícia ou jogada de ataque igual ao seu modificador de Carisma. Como uma ação bônus, você solta um uivo tranquilizador, terminando a condição assustada ou encantada em você e vários aliados que podem ouvi-lo igual ao seu bônus de proficiência (Mínimo 1). Como reação, quando você ou uma criatura que você pode ver que faria um teste de resistência, você soltou um forte discurso. A criatura selecionada ganha proficiência em salvaguarda se eles ainda não estavam. Este bônus dura até o final do turno atual. Depois de usar cada uma das habilidades deste talento uma vez, você deve completar um descanso antes de poder usá-los de novo.",
  },
  {
    key: "manobravel",
    nome: "Manobrável",
    categoria: "geral",
    descricao:
      "Você aprendeu que está no seu melhor quando está no mover. Você ganha os seguintes benefícios: Sua velocidade aumenta em 3 metros. Quando você faria um teste de resistência de Destreza em seu turno, você ganha um bônus de +2 no teste de resistência. Uma vez por turno, ao se mover pelo menos 3 metros, você ganha um 1d4 de bônus em sua próxima jogada de ataque antes do final do turno atual. Quando você realiza um ataque corpo a corpo contra uma criatura, você não provoque ataques de oportunidade daquela criatura pelo resto do turno, quer você acerte ou não.",
  },
  {
    key: "mestre-tecelao",
    nome: "Mestre Tecelão",
    categoria: "geral",
    preRequisito: "Nível 8+",
    descricao:
      "Você praticou lançar Ninjutsu ou Genjutsu no meio do combate, aprendendo técnicas que lhe concedem a seguintes benefícios: Você tem vantagem nas verificações de constituição que você fazer para manter a concentração no jutsu quando você estiver mantendo dois ou mais deles ao mesmo tempo. Selecione um jutsu que você conheça de Rank C ou inferior que você deve se concentrar. Quando você lança este jutsu em sua classificação base, você não precisa gastar chakra para manter a concentração no início de cada um dos seus turnos. Você pode trocar esse jutsu quando você completar um descanso longo. Quando o movimento de uma criatura hostil provoca um ataque de oportunidade seu, você pode usar sua reação para lançar um ninjutsu ou genjutsu na criatura, em vez de fazer um ataque de oportunidade. O Jutsu deve ter um tempo de lançamento de 1 ação, deve exigir um Ninjutsu ou Ataque Genjutsu e deve ter como alvo apenas aquela criatura.",
  },
  {
    key: "movel",
    nome: "Móvel",
    categoria: "geral",
    descricao:
      "Você é excepcionalmente rápido e ágil. Você ganha o seguintes benefícios: Sua velocidade aumenta em 3 metros. Você pode correr como uma ação bônus. Sua velocidade de movimento não pode ser reduzida abaixo da metade como resultado de um jutsu ou característica. Sua velocidade de movimento pode ainda ser afetado como resultado de uma condição como Contido ou agarrado. Você ganha vantagem em testes de resistência e testes para resistir às condições de agarramento ou restrição. Você ignora terrenos difíceis que ocorrem naturalmente.",
  },
  {
    key: "aperto-do-macaco",
    nome: "Aperto do Macaco",
    categoria: "geral",
    preRequisito: "Nível 4+",
    descricao:
      "Suas habilidades de fazer e excelente moldagem de Chakra permitem que você use objetos do cotidiano de maneiras imprevistas. Você ganha o seguintes benefícios: Aumente seu valor de Força em 1, até um máximo de 20. Você é proficiente com armas improvisadas e ataques com eles contam como Chakra aprimorado para o objetivo de superar resistências e imunidades. Uma vez por turno, quando você ataca com um ataque improvisado arma, você pode adicionar um bônus igual ao seu modificador de inteligência na jogada de dano. Você pode substituir os componentes da arma de um Bukijutsu com qualquer item que seu Mestre considere próximo o suficiente para a substituição.",
  },
  {
    key: "rapido",
    nome: "Rápido",
    categoria: "geral",
    descricao:
      "Grandes ideias surgem naturalmente, muitas vezes quando sua vida depende disso. Você sempre tem um plano, ou pelo menos partes dele. Você ganha os seguintes benefícios: Aumente o valor da habilidade Inteligência em 1, máximo de 20. Você pode usar seu modificador de Inteligência em vez de seu Modificador de Destreza ao fazer testes de Iniciativa. Quando você faria um teste de resistência de Destreza, você em vez disso, pode fazer um teste de resistência de Inteligência. Você pode usar este efeito duas vezes por descanso longo.",
  },
  {
    // NOTE: cabeçalho impresso é apenas "DIFICIL". O conteúdo (imunidade adicional a
    // testes de resistência contra Morte, cura ao Esquivar) sugere um nome mais
    // longo no original (ex.: "Difícil de Matar"), mas o texto extraído só traz essa
    // única palavra como título — mantido literalmente, sem completar.
    key: "dificil",
    nome: "Difícil",
    categoria: "geral",
    preRequisito: "Talento Durável",
    descricao:
      "Você tem o sangue dos heróis fluindo em suas veias. Você ganha os seguintes benefícios: Aumente seu valor de Constituição em 1, até o máximo de 20. Agora você deve falhar em 5 testes de resistência contra a Morte antes de morrer. Sempre que você realizar a ação Esquivar em combate, você pode gastar um Dado de Vida para se curar. Jogue o dado, adicione seu modificador de Constituição e recupere um número de pontos de acerto iguais ao total (mínimo de um). Se você obtivesse um 20 natural em um teste de resistência contra Morte, em vez disso, você recupera um número de pontos de vida igual ao seu nível.",
  },
  {
    key: "resiliente",
    nome: "Resiliente",
    categoria: "geral",
    descricao:
      "Escolha um valor de habilidade. Você ganha os seguintes benefícios: Aumente o valor da habilidade escolhida em 1, até um máximo de 20. Você ganha proficiência em testes de resistência usando o pontuação de habilidade.",
  },
  {
    key: "tecelao-de-selos",
    nome: "Tecelão de Selos",
    categoria: "geral",
    descricao:
      "Você praticou lançar Jutsu em rápida sucessão, técnicas de aprendizagem que concedem a você o seguinte benefícios: Quando você lança um Ninjutsu ou Genjutsu com um tempo de 1 ação, você pode usar sua ação bônus para conjurar um jutsu do mesmo tipo com o mesmo tempo de lançamento. Quando você lança um Ninjutsu ou Genjutsu com uma ação bônus, você pode reduzir o custo pela metade contanto que não seja um nível superior à sua classificação mais alta conhecido. Depois de usar qualquer um dos efeitos deste talento duas vezes, você deve completar um descanso longo antes de poder usá-lo novamente.",
  },
];
