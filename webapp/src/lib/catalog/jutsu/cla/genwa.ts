import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Genwa — Estudos da Tsunade, cap. Genwa
 * ("Jutsu Do Clã Genwa"). Liberação de Dados ("Data Release") — um
 * clã de tema digital/moderno único no livro (firewalls, lâminas
 * holográficas, VPN, antivírus com construtos de Anjo/Demônio, e o
 * jutsu supremo "Ataque DDoS"). `natureza` fica de fora em todas as
 * entradas: o dano é sempre "dano de Força" no texto-fonte (apesar da
 * palavra-chave Estilo Relâmpago), e "força" não tem correspondência no
 * enum `JutsuNatureza` (mesma regra já aplicada às correntes do Uzumaki
 * e ao Jugo). 10 Hijutsu no total, mas com distribuição 4/3/1/2
 * (D/C/B/A) — o livro só traz 1 Hijutsu de Rank B para este clã, não
 * os 2 usuais — e nenhum Rank S.
 */
export const jutsuGenwa: JutsuDefinition[] = [
  // Rank D
  {
    key: "genwa-liberacao-de-dados-firewall",
    nome: "Liberação de Dados: Firewall",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Reação, que você usa quando for receber dano",
    alcance: "Pessoal",
    duracao: "1 rodada",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Relâmpago"],
    cla: "genwa",
    descricao:
      "Como uma reação quando você for receber dano, você pode rapidamente manifestar uma barreira de Liberação de Dados para se proteger.\n\nReduza a instância inicial de dano que você receberia em 3d8. Depois disso, sua barreira se separa de você, transformando-se em um escudo de seu design. Este escudo flutua ao seu redor e, enquanto você tiver um escudo, na próxima vez que receber dano, você pode bloquear com o escudo, reduzindo o dano recebido em 4d4. Após você bloquear com o escudo, ele é destruído. Este jutsu termina antes do tempo se todos os escudos que você possui forem destruídos. Para cada escudo que você possui, você ganha um bônus de +1 em CA.",
    emNiveisSuperiores:
      "Para cada rank em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e a redução de dano em 1d8. Se lançado a Rank B ou superior, aumente o número de escudos criados em +1 e a redução de dano de cada escudo para dados de 6. Se lançado a Rank S, aumente o número de escudos criados em +1 e a redução de dano de cada escudo para dados de 8.",
  },
  {
    key: "genwa-liberacao-de-dados-impacto-de-lamina",
    nome: "Liberação de Dados: Impacto de Lâmina",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Relâmpago"],
    cla: "genwa",
    descricao:
      "Você manifesta a Liberação de Dados em suas mãos enquanto a molda em uma forma mais estável, criando uma espada digital que você lança em um inimigo para imobilizá-lo.\n\nFaça um ataque de ninjutsu à distância contra uma criatura dentro do alcance, causando 2d8 de dano de Força e impondo um teste de agarrão contra a criatura em um acerto. Para este teste, você pode usar sua habilidade de Ninshou. Se você vencer este teste, a criatura fica imobilizada no chão pela espada por 1 minuto, estando agarrada. Uma criatura agarrada dessa forma é considerada Restrita. Uma criatura agarrada dessa maneira pode refazer o teste no início de cada um de seus turnos, encerrando essa condição em um sucesso.",
    emNiveisSuperiores:
      "Para cada rank em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dano em 2d8, ou o número de alvos em +1 (escolha um).",
  },
  {
    key: "genwa-liberacao-de-dados-torrent",
    nome: "Liberação de Dados: Torrent",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Instantânea",
    componentes: ["MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Relâmpago"],
    cla: "genwa",
    descricao:
      "Você estende a mão e lança uma série de partículas prismáticas e falhas que fazem seu braço parecer pixelizado e emitem 3 metros de luz brilhante de qualquer cor de sua escolha.\n\nFaça dois ataques de ninjutsu à distância contra uma criatura dentro de 9 metros, lançando explosões de dados nela, causando 2d8 de dano de Força e impondo um teste de resistência de Força em cada acerto. Em uma falha, a criatura é empurrada para trás 3 metros e cai Prona. Uma criatura que caia Prona e/ou seja empurrada para fora do alcance deste jutsu, como resultado deste jutsu, não causa desvantagem em rolagens de ataque consecutivas feitas com este jutsu por estar Prona, nem impede que a criatura seja alvo devido ao alcance limitado.",
    emNiveisSuperiores:
      "Para cada rank em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o número de ataques feitos em +1.",
  },
  {
    key: "genwa-liberacao-de-dados-surge",
    nome: "Liberação de Dados: Surge",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Pessoal",
    duracao: "Instantânea",
    componentes: ["SM", "MC"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Relâmpago"],
    cla: "genwa",
    descricao:
      "Você tece Selos de Mão para manifestar seu chakra de Estilo Dados atrás de você, formando asas holográficas de uma cor à sua escolha. Até o início do seu próximo turno, você ganha uma velocidade de voo igual à sua velocidade de movimento, pode pairar e ignora terreno difícil. Além disso, quando você lançar este jutsu pela primeira vez, pode realizar as ações de Correr ou Desengajar como parte da mesma ação.",
    emNiveisSuperiores:
      "Para cada rank em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3.\n\nSe lançado a Rank C ou superior, você pode escolher se concentrar neste jutsu, dando a ele um tempo de conjuração de Concentração, por até 1 minuto.\nSe lançado a Rank B ou superior, você pode se concentrar neste jutsu por 10 minutos, e quando usar Correr ou Desengajar como parte da conjuração deste jutsu, ganha +9 metros de velocidade de movimento até o início do seu próximo turno.\nSe lançado a Rank A ou superior, este jutsu não exige mais que você se concentre para se beneficiar dele por 10 minutos.\nSe lançado a Rank S, sua velocidade de movimento aumenta em +9 metros durante a duração do jutsu, e quando você usar Correr ou Desengajar como parte da conjuração deste jutsu, aumenta em +9 metros adicionais (total de 18 metros) até o início do seu próximo turno.",
  },
  // Rank C
  {
    key: "genwa-liberacao-de-dados-zip-blade",
    nome: "Liberação de Dados: Zip Blade",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "27 metros",
    duracao: "Instantânea",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Relâmpago"],
    cla: "genwa",
    descricao:
      "Você marca um alvo dentro do alcance e gera 3 lâminas holográficas que voam em direção a ele como um cabo de tirolesa. Faça um ataque de ninjutsu à distância. Em um acerto, o alvo sofre 4d10 de dano de Força e fica Chocado até o final do seu próximo turno. Esta rolagem de ataque ignora bônus na CA provenientes de um jutsu, traço ou característica (excluindo mudanças no cálculo da CA).\n\nSe você exceder a CA do alvo em 5 ou mais, as espadas colidem em uma pequena explosão sobre o alvo. Cada criatura a até 1,5 metro do alvo, exceto o alvo, à sua escolha, deve ter sucesso em um teste de resistência de Destreza ou sofrer metade do dano causado.",
    emNiveisSuperiores:
      "Para cada rank em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e o dano em 1d10.",
  },
  {
    key: "genwa-liberacao-de-dados-vpn",
    nome: "Liberação de Dados: VPN",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação Bônus ou Reação",
    alcance: "Toque",
    duracao: "Especial",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Relâmpago", "Sensorial"],
    cla: "genwa",
    descricao:
      "Você rapidamente cobre uma criatura disposta ao seu alcance com um reservatório de chakra de Liberação de Dados, gerando uma aura que a imerge. Durante a duração, a criatura não produz som e fica Invisível, até que faça um ataque, cause dano ou sofra dano.\n\nNo final de cada um dos seus turnos (ou a cada 10 minutos, se não estiver em combate), você deve gastar 4 Chakra, mais 1 Chakra adicional para cada instância deste jutsu que você tiver ativa ao mesmo tempo. Criaturas sob os efeitos deste jutsu podem se comunicar mentalmente entre si a qualquer distância.",
    emNiveisSuperiores:
      "Para cada rank em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3, o alcance em que você pode afetar criaturas em 3 metros, e o número de criaturas que você pode afetar durante a conjuração inicial deste jutsu em +1.",
  },
  {
    key: "genwa-liberacao-de-dados-compilar",
    nome: "Liberação de Dados: Compilar",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Toque",
    duracao: "Concentração, até 1 minuto",
    componentes: ["MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Relâmpago"],
    cla: "genwa",
    descricao:
      "Você gera um fluxo de Liberação de Dados que flui por seus braços e se converte em uma grande espada de chakra azul opaco ou em duas grandes garras de chakra vermelho translúcido. Você não pode perder a concentração neste jutsu como resultado de sofrer dano ou falhar em um teste de concentração. Em seu turno, você pode gastar 3 Chakra para trocar sua arma pela outra que este jutsu oferece.\n\nEspada de Dados: esta espada causa 2d6 de dano de Força e possui as propriedades Letal, Acuidade, Leve e Versátil (d8). Esta espada usa Inteligência para rolagens de ataque e dano, e pode lançar qualquer Bukijutsu que não exija uma arma de longo alcance e que cause dano Cortante.\n\nGarras de Dados: estas garras causam 3d4 de dano de Força e possuem as propriedades Crítico, Acuidade, Leve e Desarmado, podendo usar Inteligência para rolagens de ataque e dano.",
    emNiveisSuperiores:
      "Para cada rank em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e ganhe um bônus de +1 em rolagens de ataque e dano desarmadas/armadas com sua Espada de Dados/Garras de Dados.",
  },
  // Rank B
  {
    key: "genwa-liberacao-de-dados-antivirus",
    nome: "Liberação de Dados: Antivírus",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "4,5 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC", "SC"],
    custoChakra: 12,
    custoChakraTexto: "Especial (12 Chakra)",
    palavrasChave: ["Hijutsu", "Ninjutsu", "Fuinjutsu", "Estilo Relâmpago", "Construto"],
    cla: "genwa",
    descricao:
      "Você libera um pulso de Liberação de Dados de si mesmo que faz um construto angelical ou demoníaco se materializar e lutar ao seu lado. Ao lançar este jutsu, escolha entre um Anjo de Dados ou um Demônio de Dados. Sua escolha afeta a aparência e as habilidades de seu construto. Anjos aparecem como cavaleiros centuriões alados, destinados a ajudar os fracos. Demônios aparecem como monstros, destinados a punir os ímpios.\n\nAnjo / Demônio de Dados — Construto Celestial/Demoníaco Grande, Neutro\nClasse de Armadura: 17 + seu modificador de Habilidade de Ninjutsu\nPontos de Vida: 90 (10d10+45)\nVelocidade: 12 metros voando (pode pairar)\nFOR 16 (+3), DES 16 (+3), CON 18 (+4), INT 1 (-5), SAB 10 (+0), CAR 1 (-5)\nImunidades a Dano: Ácido, Necrosante, Veneno, Relâmpago\nResistências a Dano: Contundente, Perfurante, Cortante de armas não aprimoradas por Chakra\nImunidades a Condições: todas as condições Mentais e Sensoriais, Exaustão, Petrificado, Envenenado\nSentidos: Visão no Escuro 18 metros, percepção passiva 10\n\nProgramação Embutida: Anjos/Demônios de Dados só podem ser comandados por seu invocador. Eles são proficientes em todos os testes de resistência, usando o modificador de Habilidade de Ninjutsu do invocador como seu bônus de proficiência. Eles também usam o bônus de ataque de Ninjutsu e a CD de Resistência do invocador. O invocador pode comandar qualquer número de Anjos/Demônios para se mover em seu turno (sem necessidade de ação), e pode comandar um como uma ação bônus para realizar sua ação. No Rank S, o invocador pode comandar um Anjo/Demônio para realizar sua ação em seu turno (sem necessidade de ação), uma vez por rodada.\n\nHabilidade Projetada: dependendo da escolha do invocador entre Anjo de Dados ou Demônio de Dados, você ganha o seguinte:\n\nAnjo: você é classificado como um Celestial e ganha uma arma corpo a corpo, Espada Grande, que causa 2d6+3 de dano de Força ao acertar. Você emite uma aura de cura revigorante. Aliados (excluindo outros Anjos) a até 6 metros de você ganham +1 em testes de resistência e recuperam 5 pontos de vida no início de cada um de seus turnos (isso pode se acumular até duas vezes, com múltiplos Anjos).\n\nDemônio: você é classificado como um Demônio e ganha uma arma corpo a corpo, Garras, que causa 3d4+3 de dano de Força ao acertar. Você possui uma presença irada. Para cada Demônio a até 9 metros de você, seus ataques ganham +1 em rolagens de ataque e CD de Resistência. Aliados a até 4,5 metros de você ignoram 3 de Redução de Dano ao causar dano a uma criatura hostil (isso pode se acumular até duas vezes, com múltiplos Demônios).\n\nArmas Holográficas: os ataques dos Anjos/Demônios de Dados são aprimorados por Chakra.\nForma Imutável: Anjos/Demônios de Dados são imunes a qualquer jutsu ou efeito que altere sua forma.\n\nAções\nMultiataque: você pode fazer dois ataques com sua Espada Grande ou Garras, respectivamente.\nBombardeio em Mergulho: você voa alto no ar e desce com uma velocidade incrível, enviando uma explosão de chakra azul (anjo) ou vermelho (demônio) para um espaço dentro de 18 metros. Todas as criaturas a até 4,5 metros desse espaço, à sua escolha, devem ter sucesso em um teste de resistência de Destreza, sofrendo 4d6 + metade do nível do invocador em dano de Força em uma falha, ou metade do dano em um sucesso.\n(Anjo) Laser Azul: você lança um feixe de chakra azul em uma linha de 18 metros de comprimento e 1,5 metro de largura. Cada criatura dentro do alcance, à sua escolha, deve ter sucesso em um teste de resistência de Sabedoria, sofrendo 5d8 de dano de Força e ficando Cega até o início de seu próximo turno, ou metade do dano e nenhum efeito em um sucesso.\n(Demônio) Mísseis Vermelhos: você gira no ar e forma 3 esferas de chakra vermelho. Faça 3 ataques de ninjutsu à distância. Em um acerto, a criatura sofre 1d12+3 de dano de Força, ignora Redução de Dano, e deve ter sucesso em um teste de resistência de Constituição, ficando Enfraquecida até o final de seu próximo turno em uma falha.",
    emNiveisSuperiores:
      "Para cada rank em que você lançar esse jutsu acima do Rank B, aumente o custo desse jutsu em 4 e o número de construtos criados em +1. Você pode escolher se esses construtos adicionais são Anjos ou Demônios.",
  },
  // Rank A
  {
    key: "genwa-liberacao-de-dados-ataque-ddos",
    nome: "Liberação de Dados: Ataque DDoS",
    tipo: "ninjutsu",
    rank: "A",
    tempoConjuracao: "1 Ação",
    alcance: "Cubo de 27 metros",
    duracao: "Instantânea",
    componentes: ["SM", "MC"],
    custoChakra: 22,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Estilo Relâmpago"],
    cla: "genwa",
    descricao:
      "O jutsu supremo do Clã Genwa, a culminação absoluta de todas as técnicas de Liberação de Dados. Você estende as mãos à sua frente, formando dois grandes discos de Liberação de Dados, um azul e um vermelho. O céu escurece, fazendo com que seus discos se tornem a fonte mais brilhante de luz. Você então junta as mãos, estilhaçando os discos e liberando partículas em um cubo de 27 metros à sua frente. A partir dessas partículas, Anjos e Demônios de Dados se formam, voando em direção a todas as criaturas, cortando, arranhando e disparando contra elas.\n\nCada criatura deve ter sucesso em um teste de resistência de Destreza, sofrendo 7d8 de dano de Força, ficando Enfraquecida e caindo Prona em uma falha, ou metade do dano e nenhum efeito adicional em um sucesso.\n\nOs anjos e demônios então sobem ao ar e mergulham com força incrível, resultando em uma explosão massiva. As criaturas devem ter sucesso em um teste de resistência de Força, com desvantagem se tiverem falhado no teste de Destreza, ou sofrem 7d8 de dano de Força e ficam Atordoadas e Chocadas, ou sofrem metade do dano e nenhum efeito adicional em um sucesso.",
  },
  {
    key: "genwa-liberacao-de-dados-visualizacao-de-dados",
    nome: "Liberação de Dados: Visualização de Dados",
    tipo: "ninjutsu",
    rank: "A",
    tempoConjuracao: "Ação de Rodada Completa",
    alcance: "Toque",
    duracao: "Especial",
    componentes: ["SM", "MC"],
    custoChakra: 10,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Sensorial", "Estilo Relâmpago"],
    cla: "genwa",
    descricao:
      "Você toca uma criatura disposta ou incapacitada e começa a vasculhar suas memórias em busca de um evento específico. A criatura não precisa se lembrar desse evento no momento para usar esta técnica; ela apenas precisa tê-lo visto ou ouvido. Faça um teste de Ninshou, ou de Destreza ou Inteligência à sua escolha, contra uma CD igual a quão distante a memória foi registrada. (No último dia: 12; na última semana: 16; no último mês: 20; nos últimos seis meses: 24; no último ano: 28; nos últimos cinco anos: 32; seis ou mais anos: 36+)\n\nEm um sucesso, você localiza a memória e retira a mão da criatura, segurando uma esfera de Liberação de Dados contendo uma cópia da memória. A duração da memória começa em 10 minutos, embora você possa, quantas vezes quiser, aumentar o custo desta técnica em 1 para adicionar mais um minuto. Você pode então escolher transmitir a memória em uma pequena nuvem de relâmpago em um espaço de 4,5 metros que você possa alcançar, ou colocá-la em um monitor.\n\nAlternativamente, você pode esmagar a esfera, liberando a memória na mente de todas as criaturas dispostas dentro de 4,5 metros. Cada criatura é imersa completamente na memória, ficando no mesmo lugar onde foi gravada, perfeitamente recriada, e capaz de explorar/se mover à sua maneira como se fossem viajantes do tempo.\n\nAo visualizar uma memória, você pode pausar, retroceder ou avançar rapidamente pela memória, e pode se mover até 18 metros no espaço da memória, revelando potencialmente novas informações.\n\nUma vez que você tenha sucesso neste teste e termine esta técnica, você não pode usar esta técnica na mesma criatura novamente por 1 dia, e não pode conjurá-la novamente nas próximas 8 horas, pois a técnica é exaustiva para sua rede de chakra.",
  },
];
