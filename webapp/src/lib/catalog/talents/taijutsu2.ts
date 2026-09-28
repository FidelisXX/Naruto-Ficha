import type { TalentDefinition } from "@/lib/talents/types";

/** Talentos de Taijutsu — Manual Shinobi, Cap. 13, p.236-239 (parte 2, inclui subcategoria Bukijutsu e 8-Portões Internos). */
export const talentosTaijutsu2: TalentDefinition[] = [
  {
    // NOTE: cabeçalho original tinha "Categoria: Bukijutsu" (não "Taijutsu"); mapeado para "taijutsu" fixo conforme instrução. Lista de equipamentos ("Jaqueta Kama, Kusarigama, Foice e Shinobi. Foice de Lâmina Tripla e Tecido Sintético.") parece incompleta/truncada em comparação com talentos irmãos (ex: Treinamento de Ronin, que lista 3 linhas). Último benefício ("...causa dano de arma a uma criatura pontos de vida.") está gramaticalmente incompleto na extração.
    key: "treinamento-de-ceifador",
    nome: "Treinamento de Ceifador",
    categoria: "taijutsu",
    descricao: "Você treinou sob os ensinamentos da terra de Graves diretamente ou por descendência, ganhando os seguintes benefícios:\n\n- Aumente seu valor de Força ou Destreza em 1, até um máximo de 20.\n- Você ganha proficiência em um conjunto de equipamentos, pois estas armas passaram a ser conhecidas como equipamentos de ceifador: Jaqueta Kama, Kusarigama, Foice e Shinobi. Foice de Lâmina Tripla e Tecido Sintético.\n- Armas do ceifador aumentam sua classificação Mortal em +2 e sua classificação crítica em +1.\n- Você não pode ser desarmado da equipamentos de ceifador e eles não podem ser quebrados enquanto você os empunha.\n- Quando você executa a ação de ataque usando uma arma ceifadora, em local de um ataque feito com sua ação de ataque você pode fazer um ataque de ceifador.\n- Ataques do Ceifador são ataques com armas que infligem uma classificação de Lacerado em um sucesso que causa dano de arma a uma criatura pontos de vida.",
  },
  {
    // NOTE: "desaermado" no texto original (provável erro de digitação de "desarmado"), mantido como extraído. Trecho "ou levante-se deitado enquanto estiver adjacente a você" parece confuso/corrompido na extração.
    key: "especialista-em-punho-de-serpente",
    nome: "Especialista em Punho de Serpente",
    categoria: "taijutsu",
    preRequisito: "Postura do Punho da Serpente, Nível 4+",
    descricao: "Você treinou sob os ensinamentos dos mestres serpentes na terra da grama, obtendo os seguintes benefícios:\n\n- Aumente seu valor de Força ou Destreza em 1, até um máximo de 20.\n- Enquanto você estiver na Postura do Punho da Serpente, seu dado de dano desaermado se torna um d8.\n- Taijutsu você sabe que exige que a Postura do Punho da Serpente seja lançado, e até dois Taijutsu adicionais que você conhece, que exige que você não faça mais do que dois ataques de taijutsu tornar-se Taijutsu do Punho da Serpente. O Taijutsu punho da serpente que você ganha a característica Chocalho.\n- Chocalho. Quando uma criatura hostil desencadearia um ataque de oportunidade seu, lance um jutsu que requer sinais de mão a até 1,5 metro de você ou levante-se deitado enquanto estiver adjacente a você, você pode lançar este jutsu, como uma reação.",
  },
  {
    // NOTE: cabeçalho original tinha "Categoria: Bukijutsu"; mapeado para "taijutsu" fixo. Nomenclatura da lista de equipamentos ("Besta de Mão, Armadura Chokuto e Ronin." etc.) é estranha/possivelmente corrompida na extração, mantida como está.
    key: "treinamento-de-ronin",
    nome: "Treinamento de Ronin",
    categoria: "taijutsu",
    descricao: "Você treinou sob os ensinamentos da terra do Ferro diretamente ou por descendência, ganhando os seguintes benefícios:\n\n- Aumente seu valor de Força ou Destreza em 1, até um máximo de 20.\n- Você ganha proficiência em um conjunto de equipamentos, pois estas armas ficaram conhecidas como Armas Ronin: Besta de Mão, Armadura Chokuto e Ronin. Armadura de Arco Curto, Katana e Ronin. Armadura de Arco Longo, Tachi e Ronin.\n- Armas Ronin ganham propriedade Bloqueio 1, Letal +1 e Ataque Múltiplo nas armas.\n- Você não pode ser desarmado da sua Arma Ronin e eles não podem ser quebrados enquanto você os empunha.\n- Quando você executa a ação de ataque usando uma Arma Ronin, em vez um ataque feito com sua ação de ataque você pode fazer um ataque Ronin.\n- Ataques de Ronin são ataques com armas que causam mais dano quanto menos armadura uma criatura tiver. Ao acertar uma criatura com armadura média, cause um 1d4 de dano adicional. Ao acertar uma criatura com Armadura de chakra, causa 1d6 de dano adicional. Em um golpe contra uma criatura com armadura leve, cause um dano adicional 1d8 de dano. Ao acertar uma criatura sem armadura, causa 1d10 de dano adicional.",
  },
  {
    // NOTE: trecho introdutório "aproveitar cada abaixe a guarda de qualquer inimigo" parece corrompido na extração (possivelmente "cada abertura na guarda"), mantido como está.
    key: "sentinela-shinobi",
    nome: "Sentinela Shinobi",
    categoria: "taijutsu",
    descricao: "Você dominou técnicas para aproveitar cada abaixe a guarda de qualquer inimigo, em espaços apertados você está indomável. Enquanto você está empunhando uma arma branca com os quais você é proficiente, você ganha os seguintes benefícios:\n\n- Quando você atinge uma criatura com um ataque de oportunidade, o deslocamento da criatura se torna 0 pelo resto do turno.\n- Criaturas a até 1,5 metro de você provocam oportunidade ataques seus, mesmo que eles tomem a ação Desengajar antes de sair do seu alcance.\n- Se uma criatura fizer um ataque de oportunidade contra você, você pode, como reação, fazer um ataque de oportunidade contra eles.",
  },
  {
    // NOTE: o último benefício listado ("Eco") termina abruptamente em "distribuindo" — o texto parece truncado no fim da coluna/página 237 na extração original; nenhuma continuação foi encontrada nas linhas seguintes (que já pertencem ao talento vizinho "Arquivista de Taijutsu").
    key: "especialista-em-punho-silencioso",
    nome: "Especialista em Punho Silencioso",
    categoria: "taijutsu",
    preRequisito: "Postura do Punho Silencioso, Nível 4+",
    descricao: "Você treinou sob os ensinamentos da Terra de Silenciar diretamente ou por descendência, ganhando os seguintes benefícios:\n\n- Aumente seu valor de Força ou Destreza em 1, até um máximo de 20.\n- Enquanto você estiver na Postura do Punho Silencioso, seu dado de dano desarmado se torna um d8. Se você tiver Garras de Ferro, em vez disso, torna-se 1d10 se Destreza for seu modificador de habilidade de Taijutsu.\n- Taijutsu você sabe que exige que a Postura do Punho Silencioso seja lançado, e até dois Taijutsu adicionais que você conhece, que exige que você não faça mais do que dois ataques de taijutsu torne-se Taijutsu do Punho Silencioso. O Taijutsu punho silencioso que você lança ganha o traço Eco.\n- Eco. Uma vez por lançamento, quando você causa dano desarmado a uma criatura, você deixa um Eco do seu ataque, registrando os dados de dano lançados. Se o afetado criatura tentaria atacar ou lançar um jutsu que seria prejudicial para outra criatura antes do no início do seu próximo turno, você pode acionar esse eco. Role novamente o dado de dano do seu ataque ecoado e selecione os dois resultados de dados mais altos, distribuindo",
  },
  {
    // NOTE: cabeçalho extraído como "EXPERIENCIA EM TAIJUTSU" (sem acento) — assumido "Experiência" por consistência ortográfica com o restante do documento; possível artefato de extração do PDF.
    key: "experiencia-em-taijutsu",
    nome: "Experiência em Taijutsu",
    categoria: "taijutsu",
    descricao: "Seu foco no calor do combate e domínio das artes marciais, permitem que você lute com muito maior eficiência. Você ganha os seguintes benefícios:\n\n- Aumente seu valor de Destreza em 1, até um máximo de 20.\n- Selecione entre Taijutsu ou Bukijutsu. Você pode usar Destreza em vez de Força como seu modificador de Taijutsu ao lançar o tipo de jutsu escolhido.\n- Você pode usar Destreza em vez de Força para seu Ataque desarmado e jogadas de dano.\n- Você pode usar Destreza ao fazer testes de Artes Marciais.\n- Você pode escolher esse talento novamente, selecione o tipo de jutsu que você não selecionou da primeira vez.",
  },
  {
    key: "especialista-em-armas",
    nome: "Especialista em Armas",
    categoria: "taijutsu",
    descricao: "Você praticou extensivamente com uma variedade de armas, obtendo os seguintes benefícios:\n\n- Aumente seu valor de Força ou Destreza em 1, até um máximo de 20.\n- Você ganha proficiência com quatro armas à sua escolha.\n- Selecione uma arma com a qual você seja proficiente. Uma vez por turno, quando você rola o dano para a arma escolhida, você pode rolar novamente o dano, usando qualquer um dos totais.\n- Uma vez por turno, quando você lançaria um Bukijutsu usando uma arma, sua arma aumenta seu dado de dano de arma por +1.",
  },
  {
    key: "arquivista-de-taijutsu",
    nome: "Arquivista de Taijutsu",
    categoria: "taijutsu",
    preRequisito: "Nível 4+",
    descricao: "Seu foco no calor do combate e domínio das artes marciais, permitem que você entrelace o taijutsu com muito maior habilidade. Você ganha os seguintes benefícios:\n\n- Aumente seu valor de Força ou Destreza em 1, até um máximo de 20.\n- Você aprende um taijutsu adicional para o qual se qualifica. Isso não conta para o seu Jutsu Conhecido.\n- Na próxima vez que você atingir o 5º, 9º ou 13º nível, você aprende um Taijutsu adicional de 1 nível inferior a sua classificação jutsu mais alta conhecida.\n- Se você escolher esse talento depois de passar no teste de níveis declarados anteriormente, você ganha 1 adicional Rank D se aprovado no 5º nível, 1 Rank C adicional se aprovado 9º nível e um Rank B adicional se passar do 13º nível.",
  },
  {
    key: "maestria-de-armas",
    nome: "Maestria de Armas",
    categoria: "taijutsu",
    descricao: "Você praticou extensivamente com uma única arma, expandindo muito suas capacidades com ele, ganhando o seguintes benefícios:\n\n- Aumente seu valor de Força ou Destreza em 1, até um máximo de 20.\n- Selecione uma arma com a qual você seja proficiente. Então selecione uma propriedade de arma na lista a seguir. A arma escolhida ganha a propriedade da arma escolhida enquanto você o empunha ou aumenta a classificação do propriedade da arma escolhida em +1 enquanto você a estiver empunhando: Crítico (Máx. 3), Mortal (Máx. 3), Tático, Enrolamento.\n- Você pode escolher esse talento mais de uma vez, escolhendo a mesma arma e propriedade, arma diferente, propriedade diferente ou arma diferente, mesma propriedade.",
  },
  {
    // NOTE: categoria original é "Taijutsu, Raro" — o qualificador "Raro" não tem campo próprio no schema e foi omitido (categoria fixada em "taijutsu" conforme instrução).
    key: "oito-portoes-internos-seimon",
    nome: "8-Portões Internos: Seimon",
    categoria: "taijutsu",
    preRequisito: "Pontuação de habilidade de Taijutsu de 16+",
    descricao: "Você começou a dominar o uso dos Oito Portões Internos. Uma técnica lendária projetada para liberar os limites de um caminhos de chakra do usuário, aumentando assim sua força física e velocidade. Você aprende a desbloquear 3 desses portões internos: Kaimon, Kyumon e Seimon. Desbloqueando cada portão concede benefícios adicionais além dos benefícios concedido pelo portão anterior ativado. Os portões não podem ser desbloqueado fora de ordem. Ativar cada Portão Interno custa uma Ação, Ação Bônus ou reação no seu turno.\n\nEnquanto você estiver obtendo o benefício de qualquer Portal, você não poderá lançar ou manter a concentração em qualquer Ninjutsu ou Genjutsu. Qualquer Portal que você ativar só pode permanecer ativo por 1 minuto ou até você desativá-lo. Você deve completar um descanso para obter o benefício de qualquer Portão concedido por este talento. Se você tentaria obter o benefício de um Portal concedido por este faça uma segunda vez sem descansar, você deve gastar 2 dados de vida para fazer isso, que não são recuperados até que você complete um descanso completo. Quando você terminaria a ativação ou ser forçado a encerrar qualquer portão 8 Interno, você ganha todos os níveis de qualquer fadiga. Você perde um nível de Fadiga a cada 1 hora:\n\n- Kaimon. Força: +2, Velocidade: +15, +1 Grau de Fadiga.\n- Kyumon. Força: +2, Velocidade: +15. Gaste 2 Dados de Vida, recuperando o resultado. Isto só pode ser usado uma vez por descanso curto. +2 Grau de Fadiga.\n- Seimon. For: +4, Velocidade: +10, CA: +1, +2 Grau(s) de Fadiga.",
  },
  {
    // NOTE: categoria original é "Taijutsu, Raro" — qualificador "Raro" omitido pelo mesmo motivo acima.
    key: "oito-portoes-internos-keimon",
    nome: "8-Portões Internos: Keimon",
    categoria: "taijutsu",
    preRequisito: "8 Portões Internos: Seimon, Pontuação de Habilidade de Taijutsu de 18+, Nível 10+.",
    descricao: "Você aprendeu uma técnica mais magistral dos Oito portões internos, aprendendo a desbloquear mais 3 portões poderosos de Poder interior; Shomon, Tomon e Keimon. Você deve estar atualmente obtendo o benefício do Seimon, em para ativar Shomon.\n\nVocê deve completar um descanso para obter o benefício de qualquer Portal concedido por este talento uma segunda vez. Se você tentasse ganhar o benefício de um Portal concedido por este talento uma segunda vez sem descansar, você deve gastar 2 dados de vida para fazer isso, que não são recuperados até que você complete um descanso completo. Quando você encerraria a ativação ou seria forçado a terminar qualquer portão 8-Inner, você ganha todos os níveis de qualquer fadiga e Enfraquecido listados. Depois de terminar qualquer portão concedido por este recurso, você perde uma graduação de Fadiga a cada 1 hora:\n\n- Shomon. Força: +2, Con: +2, Velocidade: +10, +2 Grau de Fadiga.\n- Tomon. For: +4, Velocidade: +10, CA: +1, Ação Extra. +1 Grau de Fadiga.\n- Keimon. For: +4, Con: +2. Gaste 2 Dados de Vida, recuperando o resultado. Isto só pode ser usado uma vez por descanso curto. +2 Grau(s) de Fadiga.",
  },
  {
    // NOTE: categoria original é "Taijutsu, Raro" — qualificador "Raro" omitido pelo mesmo motivo acima.
    key: "oito-portoes-internos-shimon",
    nome: "8-Portões Internos: Shimon",
    categoria: "taijutsu",
    preRequisito: "8-Portões Internos: Keimon, Pontuação de Habilidade de Taijutsu de 20+, Nível 16+",
    descricao: "Você se tornou um mestre dos Oito Portões Internos, destrancando os 2 portões finais: Kyomon e Shimon. Você deve estar atualmente ganhando o benefício do Keimon, para ativar Kyomon.\n\nVocê deve completar um descanso para obter o benefício de qualquer Portão concedido por este talento uma segunda vez. Se você tentar ganhar o benefício de um Portão concedido por este talento uma segunda vez sem descansar, você deve gastar 2 dados de vida para fazer, que não são recuperados até que você complete um descanso completo. Quando você encerraria a ativação ou seria forçado a encerrar qualquer 8-Portão interno, você ganha todos os níveis de qualquer fadiga e enfraquecido. Depois de terminar qualquer portão concedido por este recurso, você perde uma classificação de fadiga a cada 24 horas:\n\n- Kyomon. For: +6, CA: +1, +2 Grau de Fadiga.\n- Shimon. For: +6, Con: +2, Tripla velocidade, CA: +2, Ação Extra. Você morre, transformando-se lentamente em pó, que não pode ser interrompido ou impedido. Você se torna incapaz de ser revivido por qualquer meio.",
  },
  {
    key: "especialista-em-punho-de-lobo",
    nome: "Especialista em Punho de Lobo",
    categoria: "taijutsu",
    preRequisito: "Postura do Punho do Lobo, Nível 4+",
    descricao: "Você treinou sob os ensinamentos da Terra de Lobos, diretamente ou por descendência, ganhando os seguintes benefícios:\n\n- Aumente seu valor de Força ou Destreza em 1, até um máximo de 20.\n- Enquanto você estiver na Postura Punho do Lobo, seu dado de dano desarmado se torna um d8.\n- Taijutsu você sabe que exige que a Postura do Punho do Lobo seja lançado, e até dois Taijutsu adicionais que você conhece, que exige que você não faça mais do que dois ataques de taijutsu torne-se Taijutsu do Punho do Lobo. O Taijutsu do Punho do Lobo que você lança ganha o traço Uivo.\n- Uivo. Uma vez por lançamento, quando você causa Dano desarmado a uma criatura, todos os aliados a até 4,5 metros de você, excluindo você mesmo são inspirados por sua agressividade de ataque, ganhando um bônus Xd4 para a próxima instância de dano causado à mesma criatura como resultado de um Ataque de Taijutsu, antes do início do seu próximo turno. (X = seu bônus de proficiência.)",
  },
];
