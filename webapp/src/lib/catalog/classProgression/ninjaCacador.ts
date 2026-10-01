import type { ClassProgressionDefinition } from "@/lib/classProgression/types";

/**
 * Progressão completa do Ninja Caçador — "Observações do Orochimaru"
 * (compêndio de Classes), p.256-290. Complementa o resumo em
 * catalog/classes.ts com a tabela nível-a-nível (1-20), as características
 * por extenso e as 8 subclasses de "Credo do Caçador" (escolhida no 3º
 * nível).
 *
 * Notas sobre a fonte:
 * - O nome do grupo de subclasses varia na fonte: "Credo do Caçador"
 *   (tabela e corpo do texto), "Credo da Caçada" e "Credos de Caçadores"
 *   (títulos de seção). Mantido "Credo do Caçador" por ser o mais usado.
 * - Três características têm nomes divergentes entre a tabela de nível e o
 *   corpo do texto; usado aqui o nome do corpo do texto: "Ação Ardilosa"
 *   (tabela: "Ação astuta"), "Desvio Estranho" (tabela: "Esquiva
 *   Sobrenatural") e "Perícia" (tabela: "Especialização").
 * - A tabela indica um 3º ganho de Exploração de Caçador no 18º nível,
 *   enquanto o corpo do texto diz "10º e 17º nível"; mantida a numeração
 *   literal da tabela (10º e 18º) por ser a fonte mais completa disponível.
 * - A subclasse "Perseguidor das Sombras" tem nome incerto na fonte
 *   (extraído literalmente como "PERSEGUIDOR GRAVE", possível tradução
 *   truncada de "Grave Stalker" — nome em inglês citado depois, em outro
 *   trecho, como pré-requisito do talento "Passo de Sombra"). O nome
 *   "Perseguidor das Sombras" é uma estimativa com base na característica
 *   de 3º nível ("Perseguidor de Sombras") e no tema de furtividade.
 * - A subclasse "Arsenalista" foi remontada juntando dois trechos da fonte
 *   (3º/7º/10º parcial em um trecho, a cauda do 10º/14º/17º em outro). A
 *   característica "Ferramentas do Comércio" (3º nível) ficou cortada no
 *   limite exato de um dos trechos, no meio da opção "Lançador de Armas
 *   Ocultas" — o parágrafo de continuação (efeito a partir do 10º nível)
 *   não foi localizado em nenhum dos trechos extraídos.
 * - A característica "Lâmina Medicinal" (Mão Necrótica, 3º nível) concede
 *   acesso exclusivo à Exploração de Caçador "Sifonagem Pulsante", que não
 *   foi capturada no catálogo abaixo (ver nota no catálogo).
 * - O Catálogo de Explorações de Caçadores (Hunter Exploits) está
 *   incompleto na fonte extraída — várias entradas citadas como concedidas
 *   por subclasses (ex.: "Shadow Step" da Perseguidor das Sombras,
 *   "Festering Siphonage"/Sifonagem Pulsante da Mão Necrótica, "Deflection"
 *   da Legado dos Lobos) não tiveram seu texto completo capturado. Apenas
 *   as entradas com texto completo foram incluídas.
 */
export const progressaoNinjaCacador: ClassProgressionDefinition = {
  classeKey: "ninja-cacador",
  nomeGrupoSubclasse: "Credo do Caçador",
  nivelEscolhaSubclasse: 3,

  levels: [
    { nivel: 1, bonusProficiencia: 3, caracteristicas: "Resposta Rápida, Precisão Letal, Ataque Letal",
      colunasExtras: { "Ataque Letal": "1d8", "Jutsu Conhecidos": "6", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 2, bonusProficiencia: 3, caracteristicas: "Ação Ardilosa, Padrões de Caçadores, Alvo Primário",
      colunasExtras: { "Ataque Letal": "1d8", "Jutsu Conhecidos": "6", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 3, bonusProficiencia: 3, caracteristicas: "Credo do Caçador, Explorações de Caçadores",
      colunasExtras: { "Ataque Letal": "2d8", "Jutsu Conhecidos": "7", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 4, bonusProficiencia: 4, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Ataque Letal": "2d8", "Jutsu Conhecidos": "7", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 5, bonusProficiencia: 4, caracteristicas: "Desvio Estranho, Perícia",
      colunasExtras: { "Ataque Letal": "3d8", "Jutsu Conhecidos": "8", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 6, bonusProficiencia: 4, caracteristicas: "Alvo Caçado, Táticas Defensivas",
      colunasExtras: { "Ataque Letal": "3d8", "Jutsu Conhecidos": "8", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 7, bonusProficiencia: 5, caracteristicas: "Credo do Caçador (2)",
      colunasExtras: { "Ataque Letal": "4d8", "Jutsu Conhecidos": "9", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 8, bonusProficiencia: 5, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Ataque Letal": "4d8", "Jutsu Conhecidos": "9", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 9, bonusProficiencia: 5, caracteristicas: "Padrões de Caçadores (2)",
      colunasExtras: { "Ataque Letal": "5d8", "Jutsu Conhecidos": "10", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 10, bonusProficiencia: 6, caracteristicas: "Credo do Caçador (3), Explorações de Caçadores (2)",
      colunasExtras: { "Ataque Letal": "5d8", "Jutsu Conhecidos": "10", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 11, bonusProficiencia: 6, caracteristicas: "Táticas Defensivas (2), Alvo Caçado (2)",
      colunasExtras: { "Ataque Letal": "6d8", "Jutsu Conhecidos": "11", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 12, bonusProficiencia: 6, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Ataque Letal": "6d8", "Jutsu Conhecidos": "11", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 13, bonusProficiencia: 7, caracteristicas: "Enganoso",
      colunasExtras: { "Ataque Letal": "7d8", "Jutsu Conhecidos": "12", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 14, bonusProficiencia: 7, caracteristicas: "Credo do Caçador (4)",
      colunasExtras: { "Ataque Letal": "7d8", "Jutsu Conhecidos": "12", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 15, bonusProficiencia: 7, caracteristicas: "Padrões de Caçadores (3), Perícia (2)",
      colunasExtras: { "Ataque Letal": "8d8", "Jutsu Conhecidos": "13", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 16, bonusProficiencia: 8, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Ataque Letal": "8d8", "Jutsu Conhecidos": "13", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 17, bonusProficiencia: 8, caracteristicas: "Credo do Caçador (5), Táticas Defensivas (3)",
      colunasExtras: { "Ataque Letal": "9d8", "Jutsu Conhecidos": "14", "Rank Mais Alto do Jutsu": "Rank-S" } },
    { nivel: 18, bonusProficiencia: 8, caracteristicas: "Explorações de Caçadores (3)",
      colunasExtras: { "Ataque Letal": "9d8", "Jutsu Conhecidos": "14", "Rank Mais Alto do Jutsu": "Rank-S" } },
    { nivel: 19, bonusProficiencia: 9, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Ataque Letal": "10d8", "Jutsu Conhecidos": "15", "Rank Mais Alto do Jutsu": "Rank-S" } },
    { nivel: 20, bonusProficiencia: 9, caracteristicas: "Ataque dos Caçadores, Assassinar",
      colunasExtras: { "Ataque Letal": "10d8", "Jutsu Conhecidos": "15", "Rank Mais Alto do Jutsu": "Rank-S" } },
  ],

  features: [
    {
      nivel: 1,
      nome: "Resposta Rápida",
      descricao: "Começando no 1º nível, você aprende a reagir com ações rápidas e decisivas em combate. Você ignora terreno difícil e adiciona seu bônus de proficiência total às jogadas de iniciativa, em vez de metade.",
    },
    {
      nivel: 1,
      nome: "Precisão Letal",
      descricao: "Além disso, no 1º nível, selecione um entre Taijutsu e Bukijutsu. Você pode lançar o tipo de jutsu escolhido usando Destreza em vez de Força para todos os cálculos. Você não pode mudar esta escolha mais tarde.",
    },
    {
      nivel: 1,
      nome: "Ataque Letal",
      descricao: "Finalmente, no 1º nível, você sabe como explorar a distração do inimigo, baixar a guarda e os momentos de hesitação. Uma vez por turno, você pode causar 1d8 de dano extra a uma criatura que atingiu com um ataque, se tiver vantagem na jogada de ataque ou se outro inimigo do alvo estiver a até 1,5 metro dele (não incapacitado) e você não tiver desvantagem na jogada de ataque. A quantidade de dano extra aumenta conforme você ganha níveis nesta classe, conforme a coluna Ataque Letal da tabela.",
    },
    {
      nivel: 2,
      nome: "Ação Ardilosa",
      descricao: "A partir do 2º nível, seu raciocínio rápido e agilidade permitem que você se mova e aja rapidamente. Quando tentar Ocultar um objeto, Esconder-se ou Esgueirar-se, ganha +1d4 de bônus no teste de Destreza (Furtividade). Além disso, enquanto se esgueira, pode se mover com toda a sua velocidade e pode usar o resultado do teste de Destreza (Furtividade) da sua tentativa de Esconder-se, em vez de fazer outro teste cada vez que se esgueirar. Como ação bônus, pode realizar a ação Correr, Desengajar ou Esconder-se.",
    },
    {
      nivel: 2,
      nome: "Padrões de Caçadores",
      descricao: "Além disso, no 2º nível, você começou a desenvolver padrões de seus mentores, heróis, inimigos ou até aliados — manifestações diversas de tudo que captou ao longo do caminho. Você começa com um único padrão do catálogo abaixo, desenvolvendo um padrão adicional no 9º e no 15º níveis.",
    },
    {
      nivel: 2,
      nome: "Alvo Primário",
      descricao: "Finalmente, no 2º nível, você tem experiência em pesquisa, rastreamento e caça. Uma vez ao rolar a iniciativa, pode selecionar qualquer criatura visível em raio de 36 metros e marcá-la como seu Alvo Primário sem custo de ação; pode gastar uma ação bônus para marcar outra criatura visível no alcance. Só pode ter uma criatura marcada por vez; ela permanece marcada até atingir 0 PV ou você marcar outra.\n\nEnquanto marcado, você ganha: vantagem em testes de Sabedoria para rastrear ou procurar seu Alvo Primário, desde que esteja no mesmo país que você; e conhecimento de uma das seguintes informações sobre a criatura marcada (reaplicar o recurso ou aguardar turnos subsequentes para obter conhecimento adicional): uma imunidade a dano que ela possua (se resultado de recurso, jutsu ou traço); uma resistência a dano que possua (idem); ou seu valor atual de redução de dano.",
    },
    {
      nivel: 3,
      nome: "Credo do Caçador",
      descricao: "A partir do 3º nível, você começa a seguir um Credo do Caçador (sua subclasse), que molda ainda mais seu conjunto de habilidades. Seu Credo concede recursos no 3º, 7º, 10º, 14º e 17º níveis.",
    },
    {
      nivel: 3,
      nome: "Explorações de Caçadores",
      descricao: "Além disso, no 3º nível, você aprende a explorar suas habilidades para melhorar sua caçada. Você aprende duas Explorações de Caçador (Hunter Exploits) do catálogo abaixo, aprendendo mais uma no 10º e no 18º nível. Pode trocar uma Exploração aprendida ao completar um descanso longo.",
    },
    {
      nivel: 4,
      nome: "Melhoria/Talento de Pontuação de Habilidade",
      descricao: "Quando você alcança o 4º nível, e novamente no 8º, 12º, 16º e 19º, você pode aumentar um valor de habilidade em +1 e um Talento de sua escolha para o qual se qualifique. Normalmente, você não pode aumentar um valor de habilidade acima de 20 usando este recurso.",
    },
    {
      nivel: 5,
      nome: "Desvio Estranho",
      descricao: "A partir do 5º nível, quando uma criatura que você pode ver causar dano a você, pode usar sua reação para reduzir pela metade o dano desencadeado pelo ataque, jutsu ou efeito contra você.",
    },
    {
      nivel: 5,
      nome: "Perícia",
      descricao: "Também no 5º nível, escolha qualquer perícia ou kit de ferramentas em que tenha proficiência. Você ganha experiência (expertise) nela. Ao atingir o 15º nível, pode selecionar mais uma proficiência (em perícia ou ferramenta) para este benefício.",
    },
    {
      nivel: 6,
      nome: "Alvo Caçado",
      descricao: "A partir do 6º nível, uma criatura marcada como seu Alvo Primário que tenha 50% ou menos de pontos de vida passa a ser considerada Caçada contra você. Uma criatura Caçada que recupera pontos de vida, limpa uma condição ou lança um jutsu desencadeia um ataque de oportunidade seu.\n\nA partir do 11º nível, você ganha a reação especial Ataque dos Caçadores (Hunter's Strike), obtida e usada além de outras ações especiais que você tenha; só pode ser usada para realizar um ataque de oportunidade.",
    },
    {
      nivel: 6,
      nome: "Táticas Defensivas",
      descricao: "Também a partir do 6º nível, você aprende a lutar defensivamente contra seus alvos, levando-os a uma falsa sensação de segurança. Ganhe uma das características abaixo à sua escolha (ganha uma segunda no 11º nível e uma terceira no 17º):\n- Escapando do Perigo: ataques de oportunidade e ataques feitos como resultado da reação de uma criatura contra você são feitos em desvantagem.\n- Vontade Ininterrupta: vantagem em testes de resistência para resistir a qualquer Condição Mental ou Sensorial.\n- A Vingança do Caçador: quando você é atingido pelo ataque de uma criatura, na próxima vez que causar dano a ela, pode ativar Ataque Letal ignorando seus requisitos normais de ativação.\n- Evasão: quando sujeito a um efeito que permite resistência de Destreza para sofrer apenas metade do dano, não sofre nenhum dano em sucesso, e apenas metade em falha.",
    },
    {
      nivel: 13,
      nome: "Enganoso",
      descricao: "A partir do 13º nível, você é tão evasivo que os atacantes raramente ganham vantagem contra você. Nenhuma jogada de ataque tem vantagem contra você enquanto não estiver incapacitado.",
    },
    {
      nivel: 20,
      nome: "Assassinar",
      descricao: "No 20º nível, você domina a arte de caçar, rastrear e assassinar alvos. Pode ativar Ataque Letal duas vezes por turno.",
    },
    {
      nivel: 2,
      nome: "Catálogo de Padrões de Caçadores",
      descricao: `Lista de Padrões disponíveis para o recurso Padrões de Caçadores (2º nível). São hábitos, manias e traços de personalidade adquiridos ao longo do caminho.

- Anos de Backup, Backup: uma vez por descanso, extraia de um pergaminho de backup uma ferramenta, kit ou arma de maior qualidade; só pode ser usada uma vez, depois quebra ou fica inerte.
- Botânica: selecione duas regiões (Terra do Fogo, da Terra, do Relâmpago, da Água, do Vento, da Neve, ou Terras Menores — qualquer 3); ganha +1d6 em testes de Natureza e Sobrevivência feitos nelas. Pode ser selecionado várias vezes, para regiões diferentes.
- Bebedor: converta seu dado de vida em usos adicionais de qualquer recurso de classe de Ninja Caçador com limite de uso — a cada 2 dados de vida gastos, ganha 1 uso adicional de uma característica.
- Estudante Marcial: pode usar Destreza como modificador de lançamento do tipo de jutsu (Ninjutsu ou Genjutsu) que não escolheu com Precisão Letal.
- Viciado em Cartão de Informações Ninja: selecione um tipo de Adversário (Conjurador, Controlador, Defensor, Espreitador, Generalista, Atacante ou Apoiador); ao identificar um adversário desse tipo, fica ciente de todas as suas características de função. Pode ser selecionado várias vezes, para tipos diferentes.
- Super Preparado: ao completar um descanso, role 1d20 e registre o resultado; pode substituir o resultado de um teste de Destreza, Sabedoria ou Carisma (seu ou de outra criatura) pelo valor registrado, uma vez.
- Combatente Praticado: ganha uma postura de Taijutsu ou de Arma do Capítulo 13: Opções de Personalização.
- Pesquisador Habitual: selecione duas perícias; ganha proficiência nelas. Pode ser selecionado várias vezes, para perícias diferentes.
- Filmes de Terror: ganha imunidade à condição Medo e a efeitos baseados em Medo.
- Olho Hiper Crítico: ao ver armas, armaduras ou ferramentas a até 18 metros, pode usar uma ação de interação com objetos para inspecioná-las de perto e descobrir sua qualidade, efeitos especiais, características ou selos.
- Literatura Ilícita: ganha imunidade à condição Encantado e a efeitos baseados em Encanto.
- Cleptomaníaco: ganha proficiência em Prestidigitação ou em kits de Segurança. Ao tentar furtar carteiras ou arrombar uma fechadura, pode marcá-la como seu Alvo Primário, reduzindo a CD em 2 (mantém o alvo até abri-la ou até passar 1 hora).
- Rota Pré-Planejada: ao realizar a ação Correr, pode dobrar sua velocidade de movimento base; depois, só recupera o benefício ao reduzir sua velocidade a 0 no início do turno ou ao terminar um descanso.
- Revisando Táticas: quando você e um aliado estão em lados opostos de uma criatura hostil, ela sofre -2 de CA contra seus ataques.
- Fumante: converta seu dado de chakra em bônus para um teste de habilidade, uma vez por turno — gaste 1 dado de chakra e some o resultado a um teste.`,
    },
    {
      nivel: 3,
      nome: "Catálogo de Explorações de Caçadores",
      descricao: `Lista de Explorações de Caçador (Hunter Exploits) disponíveis para o recurso Explorações de Caçadores (3º nível). Cada uma indica a perícia usada e, quando houver, o pré-requisito de subclasse. Catálogo incompleto na fonte extraída: diversas entradas citadas em outros trechos do livro (ex.: Grito de Guerra, Objetivo, Analisar, Ângulo, Recuo do Chakra, Encantador, Confundir Feras, Deflexão [Legado dos Lobos], Diplomacia, Distração, Emular Predador, Finta, Sifonagem Pulsante [Mão Necrótica], Passo de Sombra* [Perseguidor das Sombras]) não tiveram seu texto completo localizado — a entrada marcada com * foi recuperada; as demais não aparecem abaixo.

- Pecado da Fox (Persuasão; requer subclasse Vice Agente): ao causar dano com Mordida Sombria, teste de Persuasão contestado pela resistência de Sabedoria do alvo (com experiência, +1d4 em vez de dobrar); em sucesso, rouba um jutsu/característica que concede bônus, reforço ou benção ao alvo, ganhando o benefício pela duração restante (se desconhecido, rouba um aleatório).
- Aflição Incurável (Enganação; requer subclasse Agente Funerário): quando uma criatura sofre dano de veneno seu, teste de Enganação contestado pela resistência de Constituição do alvo; em sucesso, ela ganha 1 grau de Envenenado por 1 minuto e não pode remover graus dessa condição até o fim do seu próximo turno.
- Impedir (Prestidigitação): reação a uma criatura tentando atacar ou lançar um jutsu a até 9 metros; teste de Prestidigitação contestado pela resistência de Constituição do alvo; em sucesso, ela fica cega até o início do próximo turno.
- Instruir (Investigação): ação, teste de Investigação contestado pela resistência de Sabedoria do alvo; em sucesso, as próximas jogadas de ataque de aliados contra ele são feitas com vantagem.
- Intuito (Intuição): ação, teste de Intuição contestado pela resistência de Carisma de uma criatura visível em raio de 9 metros; em sucesso, ela não pode ganhar bônus em testes de perícia contra você ou um aliado.
- Passo de Sombra (Furtividade; requer subclasse Perseguidor das Sombras): em um espaço escuro ou obscurecido, teletransporte-se para outro espaço com as mesmas condições; teste de Furtividade contestado pela percepção passiva de criaturas hostis; em sucesso, fica indetectável por jutsu Sensorial até o fim do seu próximo turno e seu primeiro ataque furtivo com Armas das Trevas atinge automaticamente.
- Sunder (Artesanato/Ofícios): ação bônus, teste de Ofícios contestado pela resistência de Força do alvo; em sucesso, ignora o bônus de CA da armadura dele até o fim do turno.
- Tumble (Acrobacia): como parte do movimento, teste de Acrobacia; sua CA passa a ser o resultado contra o primeiro ataque sofrido antes do início do seu próximo turno.
- Chuva Afiada (Artesanato; requer subclasse Arsenalista): ao causar dano com arma/jutsu/ferramenta do seu Arsenal, teste de Artesanato contestado pela resistência de Força do alvo; em sucesso, reduz sua velocidade a 3 metros e o impede de formar selos de mão ou usar Investida/Desengajar/Esquiva até o fim do seu próximo turno.
- Desaparecer (Furtividade): ação, teste de Furtividade contestado pela maior resistência de Sabedoria entre observadores; em sucesso, move-se até sua velocidade para um espaço com ocultação parcial/total, tratando o teste como uma tentativa de Esconder-se.
- Estudar (História): reação a uma criatura tentando atacá-lo ou lançar um jutsu contra você; teste de História contestado pela resistência de Carisma do alvo; em sucesso, vantagem no primeiro teste de perícia, ataque e resistência contra ela até o fim do seu próximo turno.
- Assalto Anular (Ninshou; requer Caminhante do Vazio): ao ativar Ataque Letal em uma criatura marcada (Alvo Primário ou Marca de Chakra), teste de Ninshou comparado à CA de todas as outras criaturas marcadas; teletransporta-se e ataca cada uma, causando metade do dano a todas e encerrando a Marca de Chakra nelas; depois, teletransporta-se para um espaço a até 1,5 metro de uma criatura marcada.
- Assalto dos Guardas (Atletismo; requer subclasse Guarda da Lâmina): como parte de um ataque com arma ou de Taijutsu, teste de Atletismo contra a CA do alvo; em sucesso, pode ativar Ataque Letal duas vezes nele no turno.
- Aterrificante (Intimidação): teste de Intimidação contestado pela resistência de Carisma do alvo; em sucesso, ele ganha 1 grau de Medo contra você por 1 minuto, e você ganha +1 em testes de resistência até o fim do seu próximo turno para cada grau de Medo que ele tiver contra você.`,
    },
  ],

  subclasses: [
    {
      key: "guarda-da-lamina",
      nome: "Guarda da Lâmina",
      classeKey: "ninja-cacador",
      descricaoIntro: "Alguns Hunter-Nin procuram dominar as armas para melhor remover seu inimigo da equação. Os seguidores deste Credo aprendem técnicas de luta especializadas para usar contra as ameaças mais terríveis, desde um ataque violento de inimigos até brutos imponentes.",
      features: [
        { nivel: 3, nome: "Proficiência do Guarda", descricao: "A partir do 3º nível, você ganha proficiência em Atletismo e Intimidação, podendo usar Força ou Destreza para qualquer teste com elas. Além disso, você investiu totalmente em uma arma singular: selecione um tipo de arma simples em que seja proficiente, sem as propriedades Duas Mãos ou Pesada. Ela se torna sua Arma do Guardião, que ganha uma propriedade exclusiva à sua escolha entre:\n- Ataque Rápido: a arma pode ser usada para fazer dois ataques com arma como ação bônus (sem adicionar modificador de habilidade ao dano desses ataques).\n- Mortal: a arma ignora pontos de vida temporários, causando dano diretamente aos pontos de vida, uma vez por turno.\n- Fatal: o dano da arma não pode ser rerrolado quando usada no primeiro ataque com arma ou de Bukijutsu do turno.\n\nPode trocar a propriedade escolhida ao completar um descanso de qualquer tipo. Pode selecionar uma segunda propriedade ao atingir o 10º nível." },
        { nivel: 3, nome: "Agressão da Lâmina", descricao: "Além disso, no 3º nível, o dado de dano da sua Arma do Guardião aumenta em 1 passo. Se você tiver vantagem em um ataque contra um alvo no seu turno (fora de uma ação bônus), pode imediatamente fazer um ataque com arma adicional usando sua Arma do Guardião logo após o ataque com vantagem." },
        { nivel: 7, nome: "Ataque Agressivo", descricao: "A partir do 7º nível, ao fazer um ataque com arma com sua Arma do Guardião, pode adicionar seu modificador de Força E Destreza às jogadas de dano, em vez de apenas um deles (salvo indicação contrária)." },
        { nivel: 7, nome: "Presença do Guarda", descricao: "A partir do 7º nível, sua presença se torna passivamente intimidante. Fora de combate, ao interagir com uma criatura e fazer um teste de Enganação ou Persuasão, pode optar por um teste de Intimidação em seu lugar. Criaturas com modificador de Carisma igual ou inferior ao seu sofrem -1d4 em testes de perícia baseados em Sabedoria ou Carisma ao interagir com você ou seus aliados.\n\nAo rolar iniciativa, pode usar seu bônus de Intimidação como bônus de iniciativa (sem benefício de experiência nesse teste). Com experiência em Intimidação, rola iniciativa com vantagem e pode fazer testes de Intimidação como ação bônus ao usar a ação para atacar. Em um teste de Intimidação bem-sucedido, a criatura ganha 1 grau de Medo contra você pelo próximo minuto." },
        { nivel: 10, nome: "Eu Não Faria Isso", descricao: "A partir do 10º nível, se você ou um aliado falhar em um teste de perícia baseado em Carisma contra uma criatura e ela se tornar hostil, ela deve fazer um teste de Sabedoria contra sua Intimidação Passiva (bônus de Intimidação + 10, sem experiência contada). Em falha, ela escolhe não entrar em combate, agindo por último na iniciativa caso o combate comece de outra forma. Criaturas imunes a Medo são imunes a esta característica." },
        { nivel: 14, nome: "Retaliação dos Guardas", descricao: "A partir do 14º nível, se seu Alvo Primário forçar você a fazer um teste de resistência, pode usar sua reação para atacá-lo com arma imediatamente antes do teste. Se o ataque acertar, ganha vantagem no teste de resistência." },
        { nivel: 17, nome: "Ofensa Superior", descricao: "No 17º nível, você ganha 9 metros de visão cega e seus ataques não podem ser feitos em desvantagem, ignorando a Redução de Dano concedida por jutsu." },
      ],
    },
    {
      key: "mao-necrotica",
      nome: "Mão Necrótica",
      classeKey: "ninja-cacador",
      descricaoIntro: "Alguns Caçadores seguem um ensino médico ofensivo, usando a arte da necrose para combater os inimigos. Treinados para usar suas distorcidas artes médicas e derrubar inimigos poderosos com olhos frios e imóveis, dignos de um cirurgião, esses Caçadores são conhecidos como Mão Necrótica.",
      features: [
        { nivel: 3, nome: "Proficiência Médica", descricao: "No 3º nível, você ganha proficiência em Remédios e em Kits de Remédios, podendo usar Inteligência ou Sabedoria para qualquer teste com elas. Você aprende o Ninjutsu Necrose, que perde a palavra-chave Médico, e ganha uma das técnicas abaixo para aprimorá-lo (um jutsu modificado desta forma não pode ser ensinado a outra criatura nem personalizado por outras opções de personalização de jutsu ou recursos de classe de não-Ninja Caçador). Pode trocar a técnica ao completar um descanso de qualquer tipo; seleciona uma segunda no 10º nível.\n\nTécnicas de Assassinato Médico: Falha Celular (falha na resistência de Constituição também concede 1 grau de Enfraquecido); Overdose (ganha Enlouquecido em vez de Envenenado); Sedativo (ganha 1 grau de Lentidão em vez de Envenenado); Laceração (também ganha 1 grau de Laceração); Viral (também ganha 1 grau de Concussão); Destrutivo (dano base do jutsu +1d12); Cirúrgico (adiciona seu modificador de conjuração ao dano); Narcótico (reduz o custo de upcast em 1); Salutar (reduz o custo base em 2)." },
        { nivel: 3, nome: "Lâmina Medicinal", descricao: "Além disso, no 3º nível, selecione uma arma em que seja proficiente e cubra-a com uma névoa negra venenosa: ela passa a causar dano necrótico e, ao causar pelo menos 10 de dano em um único ataque com ela, o alvo fica envenenado até o fim do próximo turno (máximo 1 grau por turno com este recurso). Você também ganha acesso exclusivo à Exploração de Caçador Sifonagem Pulsante (não conta no seu limite de Explorações; texto completo desta Exploração não foi localizado na fonte extraída)." },
        { nivel: 7, nome: "Estudos Anatômicos", descricao: "A partir do 7º nível, como ação, faça um teste de Medicina contra uma criatura visível a até 27 metros, CD 10 + nível da criatura; em sucesso, sabe seus pontos de vida atuais, se está afetada por doença/veneno e se consumiu alguma substância que lhe conceda benefícios ou penalidades.\n\nTambém pode fazer um teste de Medicina (CD 15 + rank usado) contra uma armadilha ou jutsu que tenha infligido Machucado, Sangramento, Cegueira, Ofuscamento, Surdez ou Enfraquecido em um aliado; em sucesso, encerra uma dessas condições (sem benefício de experiência). Com experiência em Medicina, faz esses testes com vantagem e pode fazê-los como ação bônus." },
        { nivel: 7, nome: "Toque Necrótico", descricao: "Além disso, no 7º nível, ao causar dano necrótico com jutsu, recurso ou arma, force resistência de Constituição contra sua CD de Ninjutsu; em falha, a criatura reduz sua Constituição em 1 durante a próxima hora e seus PV máximos/atuais são reduzidos em um valor igual ao seu nível. Alternativamente, pode usar este recurso para lançar Necrose em um aliado, restaurando PV iguais ao dano que causaria. Usável um número de vezes igual ao seu modificador de Inteligência por descanso longo." },
        { nivel: 10, nome: "Ressuscitação Rápida", descricao: "A partir do 10º nível, suas habilidades médicas compensam sua falta de Ninjutsu Médico: Check Up Médico (reduz o tempo para 1 minuto); Light Patch Up (aumenta o dado para d6); Tratamento de Condição (muda o dado de d6 para 2d4); Criação de Pílulas de Sangue (cria duas pílulas por kit antes de gastar qualquer insumo)." },
        { nivel: 10, nome: "Cirurgião Fatal", descricao: "Além disso, no 10º nível, ao ativar Ataque Letal lançando Necrose, pode escolher um efeito adicional: o alvo testa resistência contra Necrose em desvantagem; o alvo perde a concentração em um jutsu aleatório; ou a velocidade do alvo é reduzida a 0 até o início do próximo turno." },
        { nivel: 14, nome: "Ferida Mortal", descricao: "A partir do 14º nível, você pode ver através de escuridão, cobertura e até 1,5 metro de material qualquer criatura com 25% ou menos de pontos de vida, sendo tratado como se tivesse visão verdadeira contra ela." },
        { nivel: 17, nome: "Dr. Morte", descricao: "A partir do 17º nível, lançar Necrose de Rank C ou menos custa 0 chakra. Além disso, seu bônus de dano de upcast aumenta de 1d12 para 2d12 em cada nível." },
      ],
    },
    {
      key: "perseguidor-das-sombras",
      nome: "Perseguidor das Sombras",
      classeKey: "ninja-cacador",
      descricaoIntro: "Alguns Ninjas Caçadores são consumidos pela emoção da caça. Apenas ouvidos e nunca vistos, deleitam-se com a violência de uma batalha silenciosa. Os seguidores deste Credo aprimoram suas habilidades para rastrear outras pessoas por camuflagem, infiltração, vigilância e aquisição de alvos, sempre atacando nas sombras com vantagem no combate.",
      features: [
        { nivel: 3, nome: "Proficiência de Stalkers", descricao: "A partir do 3º nível, você ganha proficiência em Prestidigitação e Ilusão, podendo usar Destreza ou Sabedoria para qualquer teste com elas, e faz testes de Furtividade ou Prestidigitação com vantagem. Você aprende o Genjutsu Armas das Trevas, que ganha a palavra-chave Bukijutsu e perde a palavra-chave Visual, e ganha uma das técnicas abaixo para aprimorá-lo (um jutsu modificado desta forma não pode ser ensinado a outra criatura nem personalizado por outras opções de personalização de jutsu ou recursos de classe de não-Ninja Caçador). Quando mantém concentração neste jutsu, a arma invocada conta como Arma Sombria: não pode ser quebrada, pode atacar com Genjutsu ou Taijutsu conforme o texto do jutsu, e não pode ser componente de Bukijutsu. Pode trocar a técnica ao completar um descanso de qualquer tipo; seleciona uma segunda no 10º nível.\n\nTécnicas de Assassinato de Sombra: Shuriken das Sombras (forma de shuriken, alcance 18 metros, pode atacar como ação bônus uma vez por turno); Tanto Sombra (forma de tanto, ataques corpo a corpo adicionam modificador de habilidade ao dano); Fio de Batalha Sombria (forma de fio de batalha, agarra a até 9 metros usando Destreza/Sabedoria contestada); Espada das Sombras (forma de espada, ganha as propriedades Letal e Mortal); Garra de Ferro Sombrio (forma de garra de ferro, ganha as propriedades Crítica e Tática); Sangue Negro (15+ de dano em um ataque concede +1 grau de Desmoralizado); Letalidade Negra (+1 no alcance de ameaça crítica); Eficiência Negra (custo base reduzido em 2)." },
        { nivel: 3, nome: "Perseguidor de Sombras", descricao: "Também no 3º nível, você ganha Visão Cega até 6 metros. Ao atacar em escuridão total, até o fim do turno você não produz som ou vibração detectável por sentido de Tremor ou visão cega. Fora de combate, seguindo um Alvo Primário na penumbra ou escuridão, pode correr sem quebrar a furtividade uma vez por rodada (refazendo o teste de Furtividade se outra criatura tiver sucesso em sua Percepção contra ele). Você também ganha acesso exclusivo à Exploração de Caçador Shadow Step (não conta no seu limite de Explorações; equivalente ao talento de classe \"Passo de Sombra\" do catálogo geral)." },
        { nivel: 7, nome: "Marcado para a Morte", descricao: "A partir do 7º nível, enquanto escondido de uma criatura marcada como Alvo Primário, você ganha +1 no alcance de ameaça crítica (ignorando limites normais). Além disso, enquanto tiver uma Arma Sombria, pode fazer um ataque com ela como ação bônus." },
        { nivel: 7, nome: "Mestre Emboscador", descricao: "A partir do 7º nível, pode usar Bomba de Fumaça como ação bônus. Ao começar o combate escondido ou invisível com aliados, pode usar seu bônus de Furtividade no lugar da iniciativa de todos; se começar fora de furtividade, tem vantagem na iniciativa.\n\nQuando você ou um aliado a até 9 metros falha em um teste de perícia baseado em Carisma num encontro social, pode intervir com um teste de Enganação (CD 10 + nível do alvo); em sucesso, muda a conversa de forma que o alvo esqueça o fracasso anterior. Uma vez a cada 10 minutos." },
        { nivel: 10, nome: "Um Com a Escuridão", descricao: "A partir do 10º nível, sua visão cega aumenta para 12 metros. Enquanto levemente ou fortemente obscurecido, criaturas que dependam de qualquer sentido (visão, visão no escuro, visão cega, visão verdadeira, sentido de Tremor, jutsu Sensorial) não podem detectá-lo, desde que não use mais da metade do seu movimento base no turno. Mover-se mais que isso ou sofrer dano encerra o benefício até o fim do seu próximo turno." },
        { nivel: 10, nome: "Presa da Noite", descricao: "Também no 10º nível, ao ativar Ataque Letal contra um Alvo Primário com Armas das Trevas, estando na penumbra, escuridão, ou se o alvo estiver cego, o dado de dano de Armas das Trevas aumenta em 1 passo." },
        { nivel: 14, nome: "Uma Sombra Andando", descricao: "A partir do 14º nível, sempre que estiver fortemente obscurecido e sofrer dano, pode usar a reação para evitar todo o dano do efeito ou ataque desencadeador. Até duas vezes por descanso." },
        { nivel: 17, nome: "Assassinato de Sombra", descricao: "A partir do 17º nível, ao atacar um Alvo Primário enquanto levemente ou fortemente obscurecido, aumenta seu alcance de ameaça crítica em +2." },
      ],
    },
    {
      key: "arsenalista",
      nome: "Arsenalista",
      classeKey: "ninja-cacador",
      descricaoIntro: "Alguns Caçadores tratam sua caçada como um jogo, para o qual estão mais do que preparados. Montam armadilhas, esperando que suas presas caiam nelas, capturando-as e partindo para a matança. Usam explosivos, com a intenção de eliminar o maior número possível de inimigos com uma única explosão. Esses caçadores são conhecidos como Arsenalistas.",
      features: [
        { nivel: 3, nome: "Proficiência do Arsenal", descricao: "No 3º nível, você ganha proficiência em Artesanato e em um dos seguintes: Kits de Alquimista, Demolições ou Caçadores, podendo usar Destreza ou Sabedoria para qualquer teste com eles. Selecione quatro itens da lista abaixo (seleciona mais dois no 10º nível): Ferramentas Manipuladas (Chute de Lâmina, Chuva de Lâminas ou Parede de Lâmina), Bombas de Papel, Bolas Explosivas, Bombas de Fogo, Flash Tag, Bomba de Gelo, Etiquetas Venenosas, Bombas de Choque, armas com a palavra-chave Arremesso, Multiataque, Leve ou Finesse. Um jutsu selecionado desta forma é aprendido e passa a fazer parte do seu Arsenal (sem poder ser ensinado a outra criatura nem personalizado por opções de jutsu ou recursos de classe de não-Ninja Caçador), com os seguintes benefícios:\n\nArsenal Jutsu: reduz o custo de lançamento em -1 (-2 no 10º, -3 no 17º). Se o jutsu causar dano, pode desencadear Ataque Letal mesmo sem exigir jogada de ataque (o gatilho passa a ser falhar no teste de resistência), afetando apenas uma criatura à sua escolha.\n\nFerramentas do Arsenal: ao final de um descanso de qualquer tipo, role 1d4+1 e ganhe esse número de Ferramentas do Arsenal (uso único, só por você, duram até seu próximo descanso; dado aumenta 1 passo no 10º e 17º). Se causarem dano, podem desencadear Ataque Letal da mesma forma que Arsenal Jutsu. Bombas de papel/bolas explosivas: +1 passo no dado de dano. Bombas de Fogo/Gelo/Choque: alcance base aumenta para 18 metros. Flash/Poison Tags: +2 na CD.\n\nArmas do Arsenal: o dado de dano das armas aumenta 1 passo, ganham a propriedade Arma Oculta, e um bônus de +2 no dano de ataques com arma (+4 no 10º, +6 no 17º)." },
        { nivel: 3, nome: "Ferramentas do Comércio", descricao: "Além disso, no 3º nível, selecione uma das opções abaixo ao completar um descanso de qualquer tipo; pode usá-la um número de vezes igual ao seu bônus de proficiência por descanso. Você ganha acesso exclusivo à Exploração de Caçador Sharp Rain (Chuva Afiada; não conta no seu limite de Explorações).\n\n- Estrepes: ação bônus, selecione um espaço visível a até 9 metros, cobrindo um cubo de 3 metros (6 metros a partir do 10º nível) com estrepes. Criaturas que entrem são tratadas como marcadas pelo seu Alvo Primário enquanto permanecerem na área, sofrendo 1d6 + modificador de Destreza de dano perfurante e ganhando 1 grau de Sangramento. Os estrepes permanecem até alguém gastar uma ação para espalhá-los.\n- Rolamentos de Esferas: ação bônus, cobre um cubo de 3 metros (6 metros a partir do 10º nível) com rolamentos; terreno difícil para qualquer um além de você, e criaturas com bônus de velocidade (jutsu ou Disparada) escorregam e caem ao entrar.\n- Johyo: ação bônus, ataque com arma de longo alcance (como se proficiente) contra criatura a até 18 metros; em acerto, ela é capturada e pode ser puxada até 6 metros (12 a partir do 10º nível) em linha reta na sua direção, podendo provocar ataques de oportunidade.\n- Lançador de Armas Ocultas: selecione uma arma sua com a propriedade Oculta; como ação bônus, invoque-a e ataque com vantagem como parte da mesma ação bônus. É preciso reiniciar o lançador com uma ação bônus antes de reusá-lo (o efeito de recarga a partir do 10º nível não foi localizado na fonte extraída — provável redução do custo de recarga ou ataque adicional, mas o texto exato ficou cortado)." },
        { nivel: 7, nome: "Armas Letais", descricao: "A partir do 7º nível, uma criatura que falhe no teste de resistência contra uma armadilha sua pode ativar Ataque Letal como se você cumprisse os requisitos normais. Além disso, você pode usar qualquer Ferramenta do Arsenal como ação ou ação bônus." },
        { nivel: 7, nome: "Armadilhas Escondidas", descricao: "Também no 7º nível, você tem vantagem em testes de Sabedoria ou Inteligência para detectar portas, mecanismos e armadilhas ocultas. Criaturas que tentem detectar armadilhas suas fazem o teste em desvantagem." },
        { nivel: 10, nome: "Arsenal Crítico", descricao: "A partir do 10º nível, quando uma criatura falha por 5 ou mais em um teste de resistência contra um jutsu ou ferramenta Ninja do seu Arsenal, sofre o dobro do dano." },
        { nivel: 10, nome: "Construtor de Arsenal", descricao: "Também no 10º nível, você aprimora o uso de suas ferramentas:\n\nKit de Alquimista — Criar Bombas Químicas: reduz o tempo para 1 minuto, sem precisar de descanso curto (itens de uso único, só por você).\nKit de Demolições — criar bombas de papel, bolas explosivas e bombas de fogo: reduz o tempo para 1 minuto, sem precisar de descanso curto (uso único, só por você).\nKit de Armadilhas — criar armadilhas: divide o tempo de construção por 10 (mínimo 1 minuto); gastando uma carga adicional por armadilha, reduz para uma ação de turno completo." },
        { nivel: 14, nome: "Arsenal Letal", descricao: "A partir do 14º nível, armadilhas e ferramentas suas com CD predefinida menor que sua CD de salvamento mais alta a elevam até esse valor. Suas armadilhas não precisam mais que o alvo falhe no teste de resistência para ativar Ataque Letal — basta que uma das criaturas afetadas sofra dano." },
        { nivel: 17, nome: "Funcionamento Ilimitado da Lâmina", descricao: "No 17º nível, quando você causar dano a múltiplas criaturas com um jutsu ou ferramenta do seu Arsenal, causa o dano de Ataque Letal a todas as criaturas afetadas." },
      ],
    },
    {
      key: "agente-funerario",
      nome: "Agente Funerário",
      classeKey: "ninja-cacador",
      descricaoIntro: "Alguns Ninjas Caçadores se concentram em fazer com que aqueles em seu caminho sofram uma morte longa, lenta e dolorosa. Aqueles que aderem a este credo nascem assassinos, especialistas em venenos e, acima de tudo, shinobi. Veneno, disfarces e subterfúgios ajudam a eliminar inimigos com eficiência mortal.",
      features: [
        { nivel: 3, nome: "Proficiência Tóxica", descricao: "No 3º nível, você ganha proficiência em Enganação e em Kits de Disfarce e Veneno, podendo usar Destreza ou Inteligência para qualquer teste com eles. Como ação bônus, pode ativar um chakra tóxico próprio, infundindo-o em um Ninjutsu conhecido ou em uma arma empunhada: por 1 minuto, o item/jutsu muda seu tipo de dano para Veneno e ganha efeitos adicionais da técnica escolhida (se o jutsu originalmente desencadeava efeitos com outro tipo de dano, passa a desencadeá-los com dano de veneno). Após infundir, não pode infundir outro item/jutsu por 1 minuto. Bukijutsu lançado com a arma infundida não ganha os efeitos (só ataques de arma). Pode trocar a técnica ao completar um descanso de qualquer tipo; seleciona uma segunda no 10º nível.\n\nTécnicas de Assassinato Tóxico: Acônito (sucesso ou falha: o alvo perde a capacidade de se comunicar e sofre -2 em testes/resistências de Constituição até o fim do próximo turno); Akee (sucesso ou falha: ganha Enfraquecido; se reagir antes do fim do próximo turno, ganha Restrito até o fim do turno seguinte); Beladona (sucesso ou falha: perde a capacidade de discernir aliados de hostis até o fim do próximo turno); Dafne (sucesso ou falha: ganha Machucado); Salamandra de Fogo (sucesso ou falha: ganha 1 grau de Corroído); Dedaleira (sucesso ou falha: ganha 1 grau de Sangramento); Sapo Gelado (sucesso ou falha: ganha Frio; se usar ação bônus no próximo turno, ganha Lentidão até o fim do turno seguinte); Cicuta (sucesso ou falha: ganha Envenenado)." },
        { nivel: 3, nome: "Abraço Venenoso", descricao: "Além disso, no 3º nível, ao completar um descanso curto com acesso a um Kit de Veneno, você cria 2 frascos de Sangue de Assassino (ficam inertes ao descansar de qualquer tipo). A CD deste veneno é igual à sua CD de Ninjutsu e o dano base é 3d6; pode aplicá-lo à arma como parte da ação de atacar. O número de frascos e o dano aumentam para 3 frascos/4d6 no 7º nível, 4 frascos/5d6 no 10º e 6 frascos/6d6 no 17º. Você também ganha acesso exclusivo à Exploração de Caçador Aflição Incurável (não conta no seu limite de Explorações)." },
        { nivel: 7, nome: "Caras Falsas", descricao: "A partir do 7º nível, você aprende uma Transformação avançada que duplica fisicamente qualquer humanoide já conhecido (impressões digitais e tipo sanguíneo inclusos), levando 1 hora e dispensável à vontade. Com mais estudo (ao menos 1 hora observando fala, escrita e comportamento), você imita isso de forma indiscernível ao observador casual — se uma criatura cautelosa suspeitar, você tem vantagem no teste de Enganação para evitar a detecção. Após manter a aparência de uma criatura por 1 semana seguida, passa a assumi-la como ação bônus, sem precisar de 1 hora." },
        { nivel: 7, nome: "Assalto Venenoso", descricao: "Também no 7º nível, selecione um Bukijutsu que você conhece: ele passa a poder ser infundido com seu chakra tóxico, ganhando os benefícios de Proficiência Tóxica quando ativado." },
        { nivel: 10, nome: "Lambida de Veneno", descricao: "A partir do 10º nível, quando envenena uma criatura, pode aplicar um efeito adicional: ela não recupera pontos de vida até o fim do próximo turno; sua velocidade é reduzida pela metade enquanto durar o Envenenado; se reduzida a 0 PV, ela se torna estável; ela ganha 1 grau de Enfraquecido enquanto durar o Envenenado; ou ela fica surda enquanto durar o Envenenado." },
        { nivel: 10, nome: "Troca Enganosa", descricao: "A partir do 10º nível, quando uma criatura tenta enganá-lo em uma troca social, ela sofre -5 no teste de Enganação; você pode fazer um teste de Enganação contestado — em sucesso, revela uma informação verdadeira relacionada à mentira. Além disso, seus testes de Enganação para mentir têm vantagem; em sucesso, a criatura considera sua afirmação como verdade absoluta, a menos que receba evidências irrefutáveis, desde que o engano seja razoável e não contrarie eventos que ela já tenha vivido." },
        { nivel: 14, nome: "O Veneno Perfeito", descricao: "Também no 14º nível, ao criar frascos de Sangue de Assassino, pode optar por criar metade da quantidade como Veneno Kamizuru, cuja CD se torna igual à sua CD de Ninjutsu." },
        { nivel: 17, nome: "Beijo da Morte", descricao: "A partir do 17º nível, ao ativar Ataque Letal contra um Alvo Primário com duas ou mais condições infligidas por você, trate todo dado de Ataque Letal com resultado 4 ou menos como 5. Além disso, uma criatura que falhe em resistência contra um veneno seu sofre o dobro do dano do veneno." },
      ],
    },
    {
      key: "vice-agente",
      nome: "Vice Agente",
      classeKey: "ninja-cacador",
      descricaoIntro: "Alguns Caçadores caem em uma área cinzenta de negócios e moralidade, e alguns optam por ir ainda mais longe, aprendendo a usar os Pecados e Vícios Cardeais do homem como arma contra seus inimigos. Esses Caçadores são conhecidos como Agentes do Vício, ou Vice Agentes.",
      features: [
        { nivel: 3, nome: "Proficiência do Pecado", descricao: "No 3º nível, você ganha proficiência em Persuasão e Intuição, podendo usar Sabedoria ou Carisma para qualquer teste com elas. Você aprende o Genjutsu Mordida Sombria (Shadow Bite), que ganha a palavra-chave Ninjutsu e perde a palavra-chave Visual; se lançado com seu ataque de Ninjutsu, adiciona seu modificador de Ninjutsu em vez de Genjutsu ao dano, e se lançado com seu ataque de Genjutsu, pode usar Carisma em vez de Sabedoria. Você também ganha uma das técnicas abaixo para aprimorá-lo (um jutsu modificado desta forma não pode ser ensinado a outra criatura nem personalizado por opções de jutsu ou recursos de classe de não-Ninja Caçador). Pode trocar a técnica ao completar um descanso de qualquer tipo; seleciona uma segunda no 10º nível.\n\nTécnicas de Vice-Assassinato: Raiva (até o fim do próximo turno do alvo, se ele atacar ou lançar jutsu visando uma criatura, deve mirar a mais próxima); Arrogância (até o fim do próximo turno, não pode usar reação que reduza dano ou conceda PV temporários); Inveja (até o fim do próximo turno, ao ver um aliado ajudando outra criatura, tenta interromper essa ajuda); Gula (até o fim do próximo turno, ao lançar um jutsu que o beneficiaria, deve relançá-lo mirando apenas a si mesmo, usando suas ações/ações bônus restantes, ignorando o tempo de lançamento normal); Ambição (até o fim do turno, um jutsu que ajudaria aliados só pode ajudar a si mesmo); Preguiça (até o fim do próximo turno, ganha 1 grau de Lentidão)." },
        { nivel: 3, nome: "Couraça da Ganância", descricao: "Além disso, no 3º nível, como ação livre no seu turno, envolva sua pele com chakra metálico por 1 minuto, um número de vezes igual ao seu bônus de proficiência por descanso longo: fora de armadura média/pesada, ganha RD contra todas as fontes igual ao seu modificador de Genjutsu; e ganha 10 PV temporários (20 no 7º nível, 30 no 10º, 40 no 14º). Você também ganha acesso exclusivo à Exploração de Caçador Pecado da Fox (não conta no seu limite de Explorações)." },
        { nivel: 7, nome: "O Foco da Ira", descricao: "A partir do 7º nível, quando seu Alvo Primário causa dano a você, na próxima vez que você causar dano com Mordida Sombria, causa dano adicional igual ao seu nível, uma vez por turno. Se ganhar este benefício ao ativar Ataque Letal, o dado de dano de Mordida Sombria aumenta em 1 passo." },
        { nivel: 7, nome: "Influência da Arrogância", descricao: "A partir do 7º nível, criaturas à sua escolha a até 9 metros que façam um teste baseado em Carisma podem somar 1d6 ao teste. Além disso, quando uma criatura não aliada duvida de sua capacidade de realizar uma tarefa em um encontro social, você ganha +5 em qualquer teste de perícia para realizá-la." },
        { nivel: 10, nome: "Roubo Invejoso", descricao: "A partir do 10º nível, quando uma criatura a até 18 metros conjura um jutsu que você seria elegível para aprender/conjurar, pode usar sua reação para roubá-lo: teste de habilidade relevante contra CD 13 + rank do jutsu. Em sucesso, o jutsu é roubado (o alvo gasta chakra normalmente, mas o jutsu não é lançado; conta como negação/contra-ataque para fins de interação com outras características). Pode lançar o jutsu armazenado como se conhecesse, ignorando limitações de palavra-chave, usando seus próprios valores. Pode armazenar um número de jutsu igual ao seu modificador de Carisma; eles se dissipam no seu próximo descanso." },
        { nivel: 10, nome: "Pressupostos Luxuosos", descricao: "Também no 10º nível, em um encontro social com uma criatura não hostil, se você teria sucesso em um teste de Persuasão, pode optar por fazê-la ganhar 1 grau de Encantado contra você pela próxima hora." },
        { nivel: 14, nome: "Ambição Gulosa", descricao: "Também no 14º nível, ao lançar um Genjutsu que lhe conceda impulso ou benefício, pode ganhar o benefício duas vezes se ele puder ser relançado (como Abençoar ou Confiança). Se exigir ação/ação bônus/reação para manter e ambas as instâncias exigirem a mesma, pode gastá-la uma vez para manter as duas. Ainda contam como jutsu separados para concentração e custo de chakra." },
        { nivel: 17, nome: "Epítome do Pecado", descricao: "No 17º nível, selecione um efeito da tabela de Técnicas de Vice-Assassinato. Você ganha esse efeito ao lançar qualquer Genjutsu." },
      ],
    },
    {
      key: "caminhante-do-vazio",
      nome: "Caminhante do Vazio",
      classeKey: "ninja-cacador",
      descricaoIntro: "Alguns Caçadores utilizam o Ninjutsu de Tempo e Espaço para entrar e sair do combate tão facilmente quanto piscar. Esses shinobi são especializados em táticas de bater e correr.",
      features: [
        { nivel: 3, nome: "Proficiência de Stalker", descricao: "No 3º nível, você ganha proficiência em Ninshou e Sobrevivência, podendo usar Inteligência ou Sabedoria para qualquer teste com elas. Você aprende o Ninjutsu Marca de Chakra, que pode ser lançado como parte da ativação de Alvo Primário — o custo é reduzido em 2, o alcance passa a 36 metros e não exige jogada de ataque para marcar. Uma criatura marcada desta forma permanece marcada até você ativar Ataque Letal nela ou marcar outra criatura com Marca de Chakra, quando o jutsu termina.\n\nVocê também ganha uma das técnicas abaixo para aprimorar Marca de Chakra (um jutsu modificado desta forma não pode ser ensinado a outra criatura nem personalizado por opções de jutsu ou recursos de classe de não-Ninja Caçador). Pode trocar a técnica ao completar um descanso de qualquer tipo; seleciona uma segunda no 10º nível.\n\nTécnicas de Assassinato do Vazio: Éter (criatura marcada sofre -1 em resistência contra jutsu Fuinjutsu, uma vez por turno; -2 no 10º, -3 no 17º); Arcano (marque uma construção/estrutura/superfície sem custo de ação; como reação a sofrer dano, teletransporte-se a até 1,5 metro dela, quebrando o selo; só 1 ativo por vez); Enigma (criatura marcada que sofreria dano de Ninjutsu/Genjutsu sofre -1 na próxima jogada de ataque até o fim do próximo turno; -3 no 10º, -5 no 17º); Disruptivo (criatura marcada que sofreria dano de Taijutsu/Bukijutsu tem o custo do próximo jutsu aumentado em +3 até o início do próximo turno; +6 no 10º, +9 no 17º); Runa (marque uma arma/pilha de armas com Arremesso sem custo de ação; ao causar dano de longo alcance com ela, gaste 3 metros de movimento para se teletransportar a até 1,5 metro do alvo danificado)." },
        { nivel: 3, nome: "Piscar", descricao: "Além disso, no 3º nível, como parte do movimento, gaste metade dele para se teletransportar a uma distância igual à metade do seu movimento, para um espaço desocupado visível. Se terminar a até 1,5 metro de uma criatura marcada (Marca de Chakra ou Alvo Primário) usando este recurso ou uma Técnica de Assassinato do Vazio, ganhe um dos seguintes (apenas um): +1 no alcance de ameaça crítica do próximo ataque contra ela até o fim do turno; +2 na CA até o início do seu próximo turno; ou +2 no próximo teste de resistência até o início do seu próximo turno.\n\nVocê também ganha acesso exclusivo à Exploração de Caçador Void Assault (Assalto Anular; não conta no seu limite de Explorações)." },
        { nivel: 7, nome: "Ataque Vorpal", descricao: "A partir do 7º nível, marque sua arma (ou pilha de armas) com um selo vorpal por 1 minuto (indisponível por 10 minutos após o uso). Enquanto marcada, ganha um dos seguintes: Passagem Vorpal (o primeiro ataque do turno com a arma ignora PV temporários e estruturas que interceptariam o dano); Afiação Vorpal (o dado de dano da arma aumenta em 1 passo)." },
        { nivel: 7, nome: "Etapa Anulada", descricao: "Também no 7º nível, ao realizar a ação Correr, pode se teletransportar a cada movimento até o fim do turno (podendo dividi-lo como um movimento normal). Se terminar a até 1,5 metro de uma criatura hostil, ganha os benefícios da ação Esquivar contra ela." },
        { nivel: 10, nome: "Artes de Selagem", descricao: "A partir do 10º nível, ao perceber um efeito baseado em chakra de um Ninjutsu a até 18 metros, pode usar uma ação para um teste de Ninshou contra a CD de salvamento do conjurador (ou, sem conjurador, 10 + rank da missão/jutsu equivalente: D:5, C:9, B:13, A:17, S:21). Em sucesso, sela o efeito, encerrando-o temporariamente por até 10 minutos. Só pode mirar a mesma criatura duas vezes por descanso desta forma." },
        { nivel: 10, nome: "Campo Fuin", descricao: "Também no 10º nível, pode lançar Marca de Chakra como ação bônus gastando selos vorpais do Ataque Vorpal; ao fazê-lo, o jutsu passa a ter alcance de 18 metros (cubo de 3 metros), marcar automaticamente todas as criaturas no alcance à sua escolha sem exigir ataque, e não pode ser modificado por outras opções desta forma." },
        { nivel: 14, nome: "Conjuração Vorpal", descricao: "A partir do 14º nível, ao lançar um jutsu que exija jogada de ataque contra uma criatura marcada (Alvo Primário ou Marca de Chakra), pode gastar um selo vorpal para que o alcance seja irrelevante (teletransportado instantaneamente ao alvo); ainda precisa de ataque bem-sucedido para causar dano normalmente." },
        { nivel: 17, nome: "Deslocamento Espacial", descricao: "No 17º nível, como ação, teletransporte-se até uma criatura visível marcada (Alvo Primário ou Marca de Chakra), ignorando distância, cobertura ou prisões (se o espaço estiver ocupado, a criatura é empurrada ao seu espaço anterior); ao final, pode fazer um ataque com arma como parte do teletransporte, obtendo acerto crítico automático em caso de acerto. Duas vezes por descanso.\n\nAlém disso, ao ser alvo de um ataque, pode gastar dois selos vorpais como reação para: Ataque Corpo a Corpo — teletransportar-se até sua velocidade para um espaço desocupado, esquivando do ataque; ou Ataque à Distância — redirecionar o ataque a outra criatura à sua escolha, fazendo um ataque de Ninjutsu contra ela (em sucesso, ela recebe o ataque como se fosse o alvo original)." },
      ],
    },
    {
      key: "legado-dos-lobos",
      nome: "Legado dos Lobos",
      classeKey: "ninja-cacador",
      descricaoIntro: "Alguns Caçadores acham que hesitação é derrota. Então, esquecem o que significa hesitação. Treinam seu corpo até um ponto em que ele quebra, para reconstruí-lo melhor e mais forte. Esses caçadores são conhecidos como lobos: violentamente eficientes, impulsionados agressivamente e desimpedidos pelo medo.",
      features: [
        { nivel: 3, nome: "Proficiência do Lobo", descricao: "No 3º nível, você ganha proficiência em Artes Marciais e Intuição, podendo usar Destreza ou Sabedoria para qualquer teste com elas. Você substituiu voluntariamente seu braço orgânico por uma prótese shinobi, controlada por chakra, equipável com ferramentas de combate. Selecione dois acessórios protéticos da lista abaixo (dois mais no 10º nível). Se uma ferramenta exigir resistência, usa sua CD de Taijutsu. Pode usar cada acessório um número de vezes igual ao seu bônus de proficiência por descanso, e trocar os escolhidos ao completar um descanso de qualquer tipo.\n\nAcessórios Protéticos: Abdução Divina (ação, esconde-se em ventos divinos, ganhando vantagem no próximo teste de Furtividade); Ventilação Elemental (ação, cone de 4,5 metros força resistência de Destreza, 4d6 de dano de fogo em falha/metade em sucesso — ou o elemento de outra liberação de natureza que você tenha, ex. Água=Frio; +2d6 no 10º e 17º); Shuriken Carregado (ação bônus, ataque de longo alcance com o dobro do alcance normal de shuriken; em acerto, 4d4 de dano cortante + 1 grau de Sangramento; +2 no dado e no grau no 10º e 17º); Guarda-chuva Carregado (reação a sofrer dano, intercepta o dano desencadeador e o próximo em 3d4; +3 no 10º e 17º); Névoa Corvo (reação a sofrer dano, teletransporta-se até 9 metros; +4,5 metros no 10º e 17º); Sabimaru (parte do ataque com arma ou Taijutsu corpo a corpo via Bukijutsu, gasta um uso: em acerto, 3d6 de dano venenoso adicional e resistência de Constituição ou Envenenado por 1 minuto — em crítico, 3 graus de Envenenado); Fogo de Artifício Shinobi (ação bônus, cubo de 3 metros força resistência de Sabedoria; falha = atordoado e cego até o início do próximo turno)." },
        { nivel: 3, nome: "Karma de Shinobi: Corpo", descricao: "Além disso, no 3º nível, aumente em 2 o número de falhas em testes de resistência contra a morte necessárias para morrer, e ganhe vantagem nesses testes. Testes de perícia ou jutsu usados para agarrar, derrubar ou empurrar você são feitos em desvantagem; em falha, a criatura desencadeadora sofre um ataque de oportunidade seu que não gasta sua reação. Você também ganha acesso exclusivo à Exploração de Caçador Deflection (Deflexão; não conta no seu limite de Explorações; texto completo desta Exploração não foi localizado na fonte extraída)." },
        { nivel: 7, nome: "Quebra de Postura", descricao: "A partir do 7º nível, se seu Alvo Primário tiver 3 ou mais graus totais de qualquer condição, você ignora metade da RD dele. Se tiver 5 ou mais graus totais, seu dado de dano de Ataque Letal aumenta para d10." },
        { nivel: 7, nome: "Olhos de um Shinobi", descricao: "Também no 7º nível, como ação bônus, ative seu sentido shinobi: até o fim do seu próximo turno, sente todas as criaturas vivas a até 9 metros (com ou sem chakra, através de paredes de até 1,5 metro de espessura) e fica ciente da CA de qualquer uma de nível igual ou inferior ao seu. Usável um número de vezes igual ao seu modificador de Sabedoria por descanso." },
        { nivel: 10, nome: "Técnicas de Lobo", descricao: "A partir do 10º nível, selecione 1 jutsu da lista abaixo: ele se torna uma Técnica de Lobo, soma-se aos seus jutsu conhecidos e ganha o efeito listado. Pode lançá-lo gastando dois usos de um Acessório Protético em vez de chakra, ignorando requisitos de componente (podendo usar qualquer arma) e sempre como se fosse Rank B.\n\n- Ataque Kunai: X sempre é igual a 8.\n- Deflexão de Arma: o dano adicional aumenta para d10.\n- Quebra de Arma: sua arma é tratada como Rank B ou +2, o que for maior.\n- Earth Breaker: o dado de dano do teste de resistência aumenta para d10, e você faz dois ataques corpo a corpo de Taijutsu contra um alvo caído.\n- Reaper's Swing: não é possível reagir ao lançamento do jutsu.\n- Lâminas Triplas do Moinho de Vento: o alcance do jutsu aumenta para 27 metros.\n- Ichimonji: faça um ataque adicional.\n- Corte de Julgamento: reduz o custo adicional para atingir o mesmo espaço para 4 de chakra." },
        { nivel: 10, nome: "Ensinamentos das Corujas", descricao: "Também no 10º nível, como ação, observando uma criatura, faça um teste de Intuição contra sua Enganação Passiva (10 + bônus de Enganação). Em sucesso, pelo próximo minuto você percebe uma das seguintes: ela tenta mentir; ela tem intenções hostis contra você ou alguém próximo; ou ela tem sentimentos românticos/de admiração por você ou alguém próximo. Não pode usar este recurso na mesma criatura mais de uma vez por hora." },
        { nivel: 14, nome: "Karma de Shinobi: Vontade", descricao: "A partir do 14º nível, você ganha proficiência em testes de resistência de Carisma. Além disso, testes de resistência contra Genjutsu que o restringiriam, incapacitariam, retardariam ou atordoariam são feitos com vantagem." },
        { nivel: 14, nome: "Devoção ao Credo", descricao: "Também no 14º nível, ao completar um descanso, selecione uma Classe Adversária (Conjurador, Controlador, Defensor, Espreitador, Generalista, Atacante ou Apoiador): você fica ciente sempre que um adversário dessa classe estiver a até 36 metros, e de sua localização. Em um encontro social com ele, pode usar Sabedoria no lugar de Carisma em testes baseados em Carisma, e ganha +1d6 em todos os testes para interagir com ele." },
        { nivel: 17, nome: "Kages Morrem Duas Vezes", descricao: "No 17º nível, uma vez por descanso longo, ao chegar a 0 PV, pode optar por se levantar, recuperando PV iguais ao dobro do seu nível de Ninja Caçador e ganhando resistência a todo dano até o fim do seu próximo turno; ao fazê-lo, ganha imediatamente 2 falhas em testes de resistência contra a morte (não removíveis até um descanso longo).\n\nAlternativamente, se fosse morrer, uma vez por descanso longo, antes de usar o recurso acima, pode optar por ressuscitar do éter, ignorando efeitos que impediriam ser revivido, retornando com metade dos PV máximos — ganhando, neste caso, 5 falhas em resistência contra a morte (não removíveis até um descanso longo)." },
      ],
    },
  ],
};
