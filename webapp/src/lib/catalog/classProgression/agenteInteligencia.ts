import type { ClassProgressionDefinition } from "@/lib/classProgression/types";

/**
 * Progressão completa do Agente de Inteligência — "Observações do
 * Orochimaru" (compêndio de Classes), p.60-87. Complementa o resumo em
 * catalog/classes.ts com a tabela nível-a-nível (1-20), as características
 * por extenso e as 9 subclasses de "Estrategista Mestre" (escolhida no 3º
 * nível).
 *
 * Notas sobre a fonte:
 * - O recurso de recarga da classe ("Brave Order"/"Ordem de Bravura"/
 *   "pedido de Bravo"/"Ordens Corajosas") aparece com grafias muito
 *   inconsistentes ao longo da fonte. Padronizado aqui como "Ordem Brava"
 *   (singular) / "Ordens Bravas" (plural, nome do recurso/coluna).
 * - Uma das 9 subclasses se chama "Estrategista Mestre", o mesmo nome do
 *   grupo de subclasses e da característica-base de 3º nível — confirmado
 *   pela estrutura do texto-fonte, não é erro de extração.
 * - A característica-base "Explorar Fraqueza" (1º nível) referencia uma
 *   "Tabela de Abuso de Fraqueza" com efeitos adicionais por condição
 *   (usada também pela característica "Abuso de Fraqueza" da subclasse
 *   Estrategista Mestre); apenas os nomes das condições cobertas foram
 *   localizados na fonte extraída (Berserk, Atordoado, Sangramento/
 *   Lacerado, Cego, Ensurdecido, Machucado/Escalonado, Queimado, Chocado,
 *   Encantado, Temer, Resfriado, Lento, Confuso, Enfraquecido, Corroído,
 *   Selado) — os efeitos de cada entrada não foram capturados.
 * - O Catálogo de Planos (recurso "Planejador Mestre", 2º nível) está
 *   incompleto na fonte extraída: apenas 6 dos cerca de 21 planos citados
 *   têm texto completo (Plano Rainha, Guerra de Informação, Opressão à
 *   Distância, Vitória Através do Conhecimento, Plano de Rooks, Conflitos
 *   de Apoio); os demais 15 foram capturados apenas pelo nome.
 */
export const progressaoAgenteInteligencia: ClassProgressionDefinition = {
  classeKey: "agente-inteligencia",
  nomeGrupoSubclasse: "Estrategista Mestre",
  nivelEscolhaSubclasse: 3,

  levels: [
    { nivel: 1, bonusProficiencia: 3, caracteristicas: "Tempo Estratégico, Explorar Fraqueza",
      colunasExtras: { "Planos Conhecidos": "-", "Ordens Bravas": "-", "Jutsu Conhecidos": "6", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 2, bonusProficiencia: 3, caracteristicas: "Planejador Mestre, Perícia",
      colunasExtras: { "Planos Conhecidos": "2", "Ordens Bravas": "3", "Jutsu Conhecidos": "7", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 3, bonusProficiencia: 3, caracteristicas: "Estrategista Mestre",
      colunasExtras: { "Planos Conhecidos": "2", "Ordens Bravas": "3", "Jutsu Conhecidos": "8", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 4, bonusProficiencia: 4, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Planos Conhecidos": "2", "Ordens Bravas": "4", "Jutsu Conhecidos": "8", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 5, bonusProficiencia: 4, caracteristicas: "Esquema Tático, Operativo Útil",
      colunasExtras: { "Planos Conhecidos": "3", "Ordens Bravas": "4", "Jutsu Conhecidos": "9", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 6, bonusProficiencia: 4, caracteristicas: "Estrategista Mestre (2)",
      colunasExtras: { "Planos Conhecidos": "3", "Ordens Bravas": "5", "Jutsu Conhecidos": "10", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 7, bonusProficiencia: 5, caracteristicas: "Sabaki",
      colunasExtras: { "Planos Conhecidos": "3", "Ordens Bravas": "5", "Jutsu Conhecidos": "10", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 8, bonusProficiencia: 5, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Planos Conhecidos": "4", "Ordens Bravas": "6", "Jutsu Conhecidos": "11", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 9, bonusProficiencia: 5, caracteristicas: "Estrategista Mestre (3), Perícia (2)",
      colunasExtras: { "Planos Conhecidos": "4", "Ordens Bravas": "6", "Jutsu Conhecidos": "12", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 10, bonusProficiencia: 6, caracteristicas: "Esquema Tático (2)",
      colunasExtras: { "Planos Conhecidos": "4", "Ordens Bravas": "7", "Jutsu Conhecidos": "13", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 11, bonusProficiencia: 6, caracteristicas: "Declaração de Guerra",
      colunasExtras: { "Planos Conhecidos": "5", "Ordens Bravas": "7", "Jutsu Conhecidos": "14", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 12, bonusProficiencia: 6, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Planos Conhecidos": "5", "Ordens Bravas": "8", "Jutsu Conhecidos": "14", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 13, bonusProficiencia: 7, caracteristicas: "Estrategista Mestre (4)",
      colunasExtras: { "Planos Conhecidos": "5", "Ordens Bravas": "8", "Jutsu Conhecidos": "15", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 14, bonusProficiencia: 7, caracteristicas: "Tsume",
      colunasExtras: { "Planos Conhecidos": "6", "Ordens Bravas": "9", "Jutsu Conhecidos": "16", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 15, bonusProficiencia: 7, caracteristicas: "Esquema Tático (3)",
      colunasExtras: { "Planos Conhecidos": "6", "Ordens Bravas": "9", "Jutsu Conhecidos": "17", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 16, bonusProficiencia: 8, caracteristicas: "Melhoria/talento na pontuação de habilidade, Perícia (3)",
      colunasExtras: { "Planos Conhecidos": "6", "Ordens Bravas": "10", "Jutsu Conhecidos": "17", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 17, bonusProficiencia: 8, caracteristicas: "Estrategista Mestre (5)",
      colunasExtras: { "Planos Conhecidos": "7", "Ordens Bravas": "10", "Jutsu Conhecidos": "18", "Rank Mais Alto do Jutsu": "Rank-S" } },
    { nivel: 18, bonusProficiencia: 8, caracteristicas: "Declaração de Guerra (2)",
      colunasExtras: { "Planos Conhecidos": "7", "Ordens Bravas": "11", "Jutsu Conhecidos": "19", "Rank Mais Alto do Jutsu": "Rank-S" } },
    { nivel: 19, bonusProficiencia: 9, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Planos Conhecidos": "7", "Ordens Bravas": "11", "Jutsu Conhecidos": "20", "Rank Mais Alto do Jutsu": "Rank-S" } },
    { nivel: 20, bonusProficiencia: 9, caracteristicas: "Xeque-mate",
      colunasExtras: { "Planos Conhecidos": "8", "Ordens Bravas": "12", "Jutsu Conhecidos": "20", "Rank Mais Alto do Jutsu": "Rank-S" } },
  ],

  features: [
    {
      nivel: 1,
      nome: "Tempo Estratégico",
      descricao: "A partir do 1º nível, você pode usar seu modificador de Inteligência no lugar de Destreza para testar Iniciativa. Além disso, ao realizar a ação Ler o Inimigo, pode fazer um teste de Investigação no lugar de qualquer outro teste de perícia listado para essa ação.",
    },
    {
      nivel: 1,
      nome: "Explorar Fraqueza",
      descricao: "Também no 1º nível, você é capaz de analisar um alvo, desenvolver um plano sobre a melhor forma de superar obstáculos e executá-lo com eficiência implacável. Como ação bônus, analise um alvo visível a até 18 metros; durante o próximo minuto, ou até analisar outro alvo, ganha:\n- Ataques Inteligentes: enquanto empunhar uma arma com propriedade Leve/Finesse (corpo a corpo) ou Arremesso/Retorno (à distância) na qual é proficiente, pode usar sua ação para fazer um ataque de Ninjutsu corpo a corpo ou à distância com ela contra o alvo analisado.\n- Explorar: uma vez por turno, pode tentar a ação Ler o Inimigo com custo de reação, testando contra a CD do alvo (CD = 8 + nível da criatura); em sucesso, ganha os benefícios de Ler o Inimigo e fica ciente de uma característica que o adversário possui, seus efeitos e se pode ser dissipada/suprimida.\n\nA partir do 7º nível, você também pode analisar uma criatura aliada (como ação bônus, por 1 minuto), selecionando uma estatística (Rolagem de Ataque, Rolagem de Dano, Teste de Habilidade, Teste de Resistência ou CA): ela ignora quaisquer penalidades que tenha como resultado de jutsu, característica ou condição enquanto durar a análise. Só pode analisar uma criatura aliada por vez.\n\nQuando você causa uma das condições listadas na Tabela de Abuso de Fraqueza (referenciada também pela característica de subclasse Abuso de Fraqueza) em uma criatura marcada, ela ganha um efeito adicional específico da condição — a lista de condições cobertas (Berserk, Atordoado, Sangramento/Lacerado, Cego, Ensurdecido, Machucado/Escalonado, Queimado, Chocado, Encantado, Temer, Resfriado, Lento, Confuso, Enfraquecido, Corroído, Selado) foi localizada na fonte extraída, mas o efeito de cada entrada não — lacuna de conteúdo pendente de revisão contra o livro original.",
    },
    {
      nivel: 2,
      nome: "Planejador Mestre",
      descricao: "A partir do 2º nível, você aprende Planos (catálogo abaixo) e o recurso Ordens Bravas para potencializá-los.\n\nPlanos: aprende dois planos à sua escolha, ganhando mais conforme a coluna \"Planos Conhecidos\". Pode ativar um plano gastando uma Ordem Brava como ação, ação bônus ou reação; aprimorar um plano ativo gasta outra Ordem Brava (sem ação adicional); pode encerrar um plano ativo a qualquer momento, como encerraria concentração em um jutsu. Ativar um novo plano encerra imediatamente o anterior. Só pode ter um plano ativo por vez, salvo indicação contrária. Pode trocar os planos conhecidos ao terminar um descanso longo.\n\nOrdens Bravas: pode gastar até duas por turno, ganhando mais conforme a coluna \"Ordens Bravas\" da tabela. Recupera todas ao terminar um descanso curto ou longo.",
    },
    {
      nivel: 2,
      nome: "Perícia",
      descricao: "A partir do 2º nível, selecione uma perícia ou kit de ferramentas em que seja proficiente; ganha experiência (expertise) nela. Ganha mais uma perícia adicional com este benefício no 9º e no 16º nível.",
    },
    {
      nivel: 3,
      nome: "Estrategista Mestre",
      descricao: "Além disso, no 3º nível, você dedica suas táticas a um tipo de estratégia (sua subclasse). A Estratégia escolhida concede recursos no 3º, 6º, 9º, 13º e 17º níveis.",
    },
    {
      nivel: 4,
      nome: "Melhoria/Talento de Pontuação de Habilidade",
      descricao: "Quando você alcança o 4º nível, e novamente no 8º, 12º, 16º e 19º, você pode aumentar um valor de habilidade em +1 e um Talento de sua escolha para o qual se qualifique. Normalmente, você não pode aumentar um valor de habilidade acima de 20 usando este recurso.",
    },
    {
      nivel: 5,
      nome: "Esquema Tático",
      descricao: "A partir do 5º nível, sempre que gastar uma Ordem Brava ou ativar um Plano, pode ganhar um d20 especial chamado Dado de Esquema, válido até o fim do seu próximo turno: antes disso, pode substituir o resultado de qualquer rolagem de d20 de uma criatura aliada pelo resultado do seu Dado de Esquema (role-o e use no lugar do d20 dela).\n\nA partir do 10º nível, ganha dois Dados de Esquema por ativação, podendo rolar ambos e escolher qual usar. A partir do 15º nível, pode usar este recurso também para substituir a rolagem de d20 de uma criatura hostil marcada por Explorar Fraqueza. Depois de usar este recurso em uma criatura hostil duas vezes, só pode fazê-lo novamente após um descanso longo.",
    },
    {
      nivel: 5,
      nome: "Operativo Útil",
      descricao: "Além disso, no 5º nível, você pode usar a ação de Ajuda como ação bônus, mesmo em habilidades nas quais não é proficiente. Ao usar Ajuda para auxiliar um aliado a atacar, o alvo desse ataque pode estar a até 9 metros de você (em vez de 1,5 metro), se puder vê-lo ou ouvi-lo. Além disso, ao rolar iniciativa, pode ativar um Plano gastando uma Ordem Brava como parte do teste de iniciativa.",
    },
    {
      nivel: 7,
      nome: "Sabaki",
      descricao: "A partir do 7º nível, você aprende a incorporar o jogo de Shogi em suas estratégias.\n\nCombate: ao rolar iniciativa, gaste 1 Ordem Brava para que uma criatura aliada (exceto você) a até 9 metros que possa ouvi-lo ganhe os benefícios de um plano que você conheça, como se você o tivesse ativado, mantendo-os pelo resto da iniciativa (a menos que você encerre o recurso no seu turno, sem custo de ação adicional).\n\nSocial: no início de um encontro social, todos os aliados ganham +2 no primeiro teste de perícia que fizerem a cada rodada. Se um aliado vencer uma CD ou teste contestado por 5 ou mais sob este efeito, você ganha um Dado de Esquema utilizável durante o encontro.",
    },
    {
      nivel: 11,
      nome: "Declaração de Guerra",
      descricao: "A partir do 11º nível, selecione uma criatura hostil visível ou audível: enquanto estiver a até 18 metros dela, pode gastar uma Ordem Brava para lhe dar desvantagem em um teste de perícia, jogada de ataque ou teste de resistência. No 18º nível, pode selecionar um número de criaturas igual ao seu modificador de Inteligência.",
    },
    {
      nivel: 14,
      nome: "Tsume",
      descricao: "A partir do 14º nível, quando se beneficia de um Plano enquanto tem uma criatura hostil marcada por Explorar Fraqueza, pode gastar 1 Ordem Brava: todos os aliados (exceto você) ficam marcados por Explorar Fraqueza por até 1 minuto, ganham o benefício de serem analisados, e ganham a ação especial Tsume.\n\nTsume: cumpre o custo de ação de um jutsu com tempo de lançamento de 1 ação, 1 ação bônus ou 1 reação, ou pode ser usada para Correr, Desengajar ou Esconder-se. Volta a ficar disponível no início do próximo turno da criatura; após usada duas vezes, é perdida até o recurso ser reativado. Usável duas vezes por descanso longo.",
    },
    {
      nivel: 20,
      nome: "Xeque-mate",
      descricao: "A partir do 20º nível, como ação bônus, todos os aliados ganham a condição Xeque-mate (não removível, com cargas iguais ao seu bônus de proficiência; uma carga é gasta quando uma criatura afetada falha em um teste de resistência ou quando você termina seu turno; a condição termina quando as cargas acabam). Uma vez por descanso longo.\n\nXeque-mate concede: planos ativados não custam Ordem Brava; imunidade a condições infligidas por criaturas hostis; acertos críticos contra a criatura são tratados como acertos normais; não pode sofrer desvantagem ou penalidades em rolagens de d20; e os benefícios de planos atualmente ativos são dobrados (bônus dobrados, ações especiais adicionais duram mais, e limites de uso aumentam em +1).",
    },
    {
      nivel: 2,
      nome: "Catálogo de Planos",
      descricao: `Lista de Planos disponíveis para o recurso Planejador Mestre (2º nível). Cada plano tem uma versão Básica (ativada gastando uma Ordem Brava) e uma versão Aprimorada (gastando outra Ordem Brava para intensificá-lo). Catálogo incompleto na fonte extraída: apenas os 6 planos abaixo tiveram seu texto completo localizado. Os demais são citados apenas pelo nome: Batalha de Atrito, Plano dos Bispos, Liberando o Mal, Cuidado com o Vento, Consciência Condicional, Conflitos Condicionais, Agressão Controlada, Ambiente Deletivo, Retiro Detrimental, Chute-os Enquanto Estão em Baixo, Escapa Fácil, Plano de Cavaleiros, Fluxo de Batalha, Vantagem de Mobilidade e Plano de Peões — seu texto não foi recuperado.

- Plano Rainha — Básico: selecione um aliado visível e audível a até 18 metros; ele adiciona seu bônus de proficiência às jogadas de dano, por um número de rodadas igual ao seu bônus de proficiência. Aprimorado: a criatura também adiciona o bônus a testes de habilidade e de resistência até o fim do seu próximo turno (sem encerrar o plano básico).
- Guerra de Informação — Básico: selecione uma criatura hostil a até 18 metros; ataques de aliados contra ela somam dois dados de dano adicionais, por um número de rodadas igual ao seu bônus de proficiência. Aprimorado: aliados também somam 1d6 à jogada de ataque contra ela, pelo tempo restante do plano.
- Opressão à Distância — Básico: aliados a até 27 metros, alvo de ataques à distância, são tratados como tendo cobertura parcial enquanto estiverem a até 3 metros um do outro, por um número de rodadas igual ao seu bônus de proficiência. Aprimorado: ataques à distância contra eles são feitos em desvantagem pelo tempo restante do plano.
- Vitória Através do Conhecimento — Básico: selecione uma criatura hostil a até 18 metros; você e aliados ficam cientes de seu maior valor de habilidade (ou ambos, se empatado) e do valor percentual de seus PV, por um número de rodadas igual ao seu bônus de proficiência. Aprimorado: também ficam cientes do menor valor de habilidade (ou ambos, se empatado) e do valor percentual de chakra, pelo tempo restante do plano.
- Plano de Rooks — Básico: criaturas hostis a até 18 metros rolam dano duas vezes contra seus aliados, usando o menor resultado, por um número de rodadas igual ao seu bônus de proficiência. Aprimorado: também sofrem penalidade de dano igual ao seu bônus de proficiência, pelo tempo restante do plano.
- Conflitos de Apoio — Básico: criaturas hostis a até 18 metros que atacarem um aliado seu provocam ataques de oportunidade de aliados a até 9 metros, por um número de rodadas igual ao seu bônus de proficiência. Aprimorado: um aliado que faria esse ataque de oportunidade faz um ataque adicional, pelo tempo restante do plano.`,
    },
  ],

  subclasses: [
    {
      key: "analista-azure",
      nome: "Analista Azure",
      classeKey: "agente-inteligencia",
      descricaoIntro: "Alguns Operadores de Inteligência acham que saber o que seus inimigos sabem e usam é muito mais crítico do que ter suas próprias técnicas poderosas. Acreditam que usar a força dos inimigos contra eles é um caminho muito menos perigoso do que combater fogo com fogo. Esses Operadores são conhecidos como Analistas Azure.",
      features: [
        { nivel: 3, nome: "Pesquisa Azure", descricao: "Ao escolher esta Estratégia no 3º nível, você ganha proficiência em Intuição (ou outra perícia baseada em Sabedoria, se já proficiente), podendo usar Inteligência em vez de Sabedoria nela. Uma vez por turno, ao realizar Ler o Inimigo via Explorar Fraqueza, pode usar um teste de Inteligência (Intuição); em sucesso, fica ciente de uma característica geral aleatória ou um traço de Afiliação aleatório do adversário (a partir do 10º nível, também pode escolher uma característica de Função aleatória). Usável na mesma criatura duas vezes por descanso longo (duas vezes por descanso curto a partir do 13º nível; três vezes a partir do 17º)." },
        { nivel: 3, nome: "Hipótese Azure", descricao: "Além disso, no 3º nível, você registra o conhecimento adquirido em um Pergaminho Azure. Ao tomar conhecimento de uma característica via Pesquisa Azure, pode selá-la em um slot do pergaminho (começa com 1, ganha mais no 6º, 13º e 20º nível). Com todos os slots ocupados, selar uma nova característica substitui uma já selada.\n\nGastando 1 Ordem Brava, pode infundir-se com uma característica selada, retendo o benefício por até 1 minuto (uma vez por descanso longo por característica). A partir do 7º nível, ao analisar um aliado via Explorar Fraqueza, pode infundir nele uma característica selada: ele retém o benefício enquanto durar a análise, mas a característica se dissipa e desaparece do pergaminho ao final." },
        { nivel: 6, nome: "Bloqueio Azure", descricao: "A partir do 6º nível, enquanto uma criatura hostil marcada tiver uma característica à qual você tem acesso selada no Pergaminho Azure, pode usar uma ação para vinculá-la: por 1 minuto, a criatura não pode se beneficiar dela (só uma característica vinculada por vez; aliados não podem se beneficiar de características vinculadas via Insights de Safira; ao fim da duração, a característica desaparece do pergaminho). A partir do 13º nível, pode vincular até duas características; a partir do 17º, até três." },
        { nivel: 9, nome: "Insights de Safira", descricao: "A partir do 9º nível, como ação, gaste 1 Ordem Brava e selecione uma característica do Pergaminho Azure: todos os aliados a até 9 metros ganham seu benefício. Tratado como um plano (encerra planos ativos e é encerrado por eles); dura um número de turnos igual ao seu bônus de proficiência. Uma vez por descanso longo; a característica desaparece do pergaminho ao final." },
        { nivel: 13, nome: "Teoria da Safira", descricao: "A partir do 13º nível, ao ter sucesso em Ler o Inimigo, também pode ficar ciente de todos os tipos e ranks de jutsu que o alvo conhece (ex.: Ninjutsu Rank B, Taijutsu Rank D — sem saber quais jutsu específicos). Pode então vincular uma combinação de rank e categoria não superior a Rank B: jutsu vinculado assim não pode ser lançado pelo alvo enquanto durar; você deve manter concentração na vinculação como se fosse um jutsu do tipo correspondente." },
        { nivel: 17, nome: "Conclusão Azure", descricao: "A partir do 17º nível, ao marcar uma criatura hostil via Explorar Fraqueza, pode marcar uma adicional; ao se beneficiar de Pesquisa Azure, pode optar por uma característica de Clã aleatória. Uma característica de clã selada ocupa dois slots do Pergaminho Azure, e aliados que se beneficiem dela via Insights de Safira devem manter concentração nela como em um jutsu." },
      ],
    },
    {
      key: "estrategista-calculado",
      nome: "Estrategista Calculado",
      classeKey: "agente-inteligencia",
      descricaoIntro: "Alguns Operadores de Inteligência são muito mais calculados do que outros. Seus planos são feitos antes e durante o combate, mas exigem muito mais informação que a de outros para serem infalíveis — usando cartões de informação Ninja para descobrir todas as capacidades de um inimigo antes de ele agir.",
      features: [
        { nivel: 3, nome: "Livro de Conflito", descricao: "A partir do 3º nível, você cria sua própria versão do Bingo Book, registrando cartões informativos sobre quem analisa. Ganha proficiência em Percepção (ou outra perícia baseada em Sabedoria, se já proficiente), podendo usar Inteligência em vez de Sabedoria nela. Uma vez por turno, ao realizar Ler o Inimigo via Explorar Fraqueza, pode fazer um teste de Inteligência (Percepção) — ou, alternativamente, realizar Ler o Inimigo como ação bônus em vez de reação. Em sucesso, aprende uma das seguintes estatísticas: Afiliação Adversária, Clã Adversário ou Papel Adversário (até duas a partir do 9º nível, três a partir do 17º)." },
        { nivel: 3, nome: "Insight Calculado", descricao: "Além disso, no 3º nível, como ação bônus, faça um teste de Inteligência (Percepção) contra uma criatura marcada visível a até 18 metros; em sucesso, escolha um efeito: Determinar Ataque (desvantagem no próximo ataque dela contra quem ela possa ver/ouvir); Prever Movimento (se ela se mover antes do fim do próximo turno, um aliado pode se mover até seu movimento total +6 metros); Resposta Mais Astuta (ela não pode ganhar bônus baseados em jutsu na CA); ou Expor Fraqueza (a próxima instância de dano que ela sofrer é aumentada em duas vezes seu bônus de proficiência). Duas vezes por iniciativa (mais uma a partir do 9º e do 17º nível)." },
        { nivel: 6, nome: "Táticas Calculadas", descricao: "A partir do 6º nível, enquanto tiver um adversário marcado (Explorar Fraqueza, Afiliação, Clã ou Função registrados no Livro de Conflito), pode se beneficiar de uma Tática por vez: Afiliação (fica ciente das táticas do inimigo e de seu maior bônus de ataque — Ninjutsu, Genjutsu, Taijutsu ou Arma); Clã (fica ciente de até três Hijutsu aleatórios que ele conhece); Função (fica ciente de sua CA e de seu maior bônus em teste de resistência)." },
        { nivel: 9, nome: "De Acordo com o Plano", descricao: "Além disso, no 9º nível, como ação bônus, gaste 1 Ordem Brava para dar a um aliado visível e audível a até 18 metros uma ação adicional no turno dele, usável para Atacar, lançar um jutsu, Esquivar, Correr, Desengajar, Ajudar ou Esconder-se. Cada aliado só pode se beneficiar duas vezes por descanso longo." },
        { nivel: 13, nome: "Nada É Uma Surpresa", descricao: "A partir do 13º nível, enquanto consciente, você e aliados a até 9 metros não podem ser surpreendidos, e criaturas hostis não ganham vantagem contra vocês por estarem escondidas. Além disso, ataques contra vocês não podem se beneficiar de bônus de acerto concedido por jutsu (vantagem ou bônus fixo)." },
        { nivel: 17, nome: "Xadrez 4-D", descricao: "A partir do 17º nível, como ação bônus, gaste uma Ordem Brava para um dos efeitos: Mudar o Campo (até 5 aliados que o vejam/ouçam se movem em sua velocidade total sem provocar oportunidades); Vitória Sangrenta (se você ou um aliado reduzir uma criatura hostil a 0 PV antes do fim do seu próximo turno, ambos ganham PV temporários iguais ao nível dela); Ninguém Fica Para Trás (aliados a até 18 metros que testariam resistência contra morte, ou morreram no último minuto, estabilizam-se em 1 PV — não pode se beneficiar novamente por 24 horas); Absolvição (aliados a até 18 metros ganham +1d4 em ataque, resistência, perícia e habilidade até o fim do seu próximo turno)." },
      ],
    },
    {
      key: "controlador-de-tumulo",
      nome: "Controlador de Túmulo",
      classeKey: "agente-inteligencia",
      descricaoIntro: "Alguns Agentes de Inteligência buscam o domínio sobre cada criatura no campo de batalha. Seus planos manipulam os corpos de seus inimigos usando Técnicas Proibidas, ao mesmo tempo que desmoralizam e quebram o moral dos oponentes.",
      features: [
        { nivel: 3, nome: "Anatomia Torcida", descricao: "Ao escolher esta Estratégia no 3º nível, você ganha proficiência em Medicina (ou outra perícia baseada em Sabedoria, se já proficiente), podendo usar Inteligência em vez de Sabedoria nela." },
        { nivel: 3, nome: "Técnica da Alma Morta", descricao: "A partir do 3º nível, quando uma criatura que você analisa com Explorar Fraqueza morre a até 18 metros, tendo nível igual ou inferior ao seu e classificada como Adversário Padrão, pode usar sua reação para vincular sua essência a um Pergaminho da Alma Morta. Enquanto houver pelo menos uma essência vinculada, como ação pode gastar 1 Ordem Brava para invocar o Cadáver Atado correspondente em um espaço a até 18 metros, por 1 minuto. Enquanto controla um Cadáver Atado, só pode se concentrar em um jutsu por vez. Só pode ter uma essência vinculada por vez, ganhando um espaço adicional no 9º e no 17º nível.\n\nO cadáver usa as estatísticas de Cadáver Atado (com os valores de habilidade originais da criatura) e ganha uma característica aleatória de General, Função ou Clã que tinha em vida. É comandado como ação bônus, podendo se mover e realizar 1 ação; conhece apenas 2 jutsu (do rank mais alto que você pode lançar), gastando seu próprio chakra; vira pó ao não conseguir moldar chakra ou ficar sem PV temporários. Jutsu que lança usam seu bônus de ataque/CD de Ninjutsu." },
        { nivel: 6, nome: "Coletor de Cadáveres", descricao: "A partir do 6º nível, você pode capturar via Técnica da Alma Morta até 4 essências de adversários classificados como Lacaio (Minion), ocupando um slot exclusivo para essa categoria. Eles se tornam Minions Atados (bloco de estatísticas Cadáver Minion). Pode controlar até 2 Minions Atados ao mesmo tempo, comandando-os juntos com uma ação bônus; cada um tem 9 metros de movimento e 1 ação, usável para lançar 1 jutsu que conheceu em vida, até duas vezes por convocação." },
        { nivel: 9, nome: "Fortitude Morto-Vivo", descricao: "A partir do 9º nível, ao invocar um Cadáver Atado, gaste 1 Ordem Brava: criaturas à sua escolha a até 9 metros dele fazem resistência de Sabedoria contra sua CD de Ninjutsu ou ganham 2 graus de Medo originados dele. Além disso, quando o Cadáver Atado chega a 0 PV temporários, pode gastar 1 Ordem Brava para que ele recupere PV temporários iguais ao seu nível de Agente de Inteligência. Duas vezes por descanso longo." },
        { nivel: 13, nome: "Modificação Escura", descricao: "A partir do 13º nível, você pode vincular a essência de uma criatura hostil classificada como Adversário de Elite — que ganha 1 Falsa Característica adicional e PV adicionais iguais ao dobro do seu nível de classe. Além disso, ao completar um descanso longo, pode modificar um Cadáver Atado em sua posse: teste de Inteligência (Medicina) CD 20; em sucesso, descobre suas proficiências e até 3 jutsu que conhecia em vida, e ele ganha dois dos seguintes na próxima invocação (uma verificação por cadáver): PV temporários adicionais iguais à sua CD de Ninjutsu; pode lançar um jutsu Rank C ou inferior que você conheça; ganha um ataque adicional com arma corpo a corpo; ganha ação bônus e pode se beneficiar de Explorar Fraqueza; ou um valor de habilidade dele torna-se proficiente em resistência e sobe para 20." },
        { nivel: 17, nome: "Reanimação Impura", descricao: "A partir do 17º nível, todos os seus Cadáveres Atados agem imediatamente após você na iniciativa e não precisam mais de ação bônus para serem comandados." },
      ],
    },
    {
      key: "interrogationista",
      nome: "Interrogationista",
      classeKey: "agente-inteligencia",
      descricaoIntro: "Alguns Operadores de Inteligência procuram obter todo o conhecimento disponível por qualquer meio. Seus planos capturam e extraem informações dos alvos, ao mesmo tempo que desmoralizam e quebram o moral dos oponentes.",
      features: [
        { nivel: 3, nome: "Guerras de Informação", descricao: "Ao escolher esta Estratégia no 3º nível, você ganha proficiência em Intimidação (ou outra perícia baseada em Carisma, se já proficiente), podendo usar Inteligência em vez de Carisma nela. Além disso, você ganha vantagem em testes de perícia baseados em Carisma contra uma criatura com qualquer condição." },
        { nivel: 3, nome: "Quebra Sistemática", descricao: "Além disso, no 3º nível, Genjutsu que você lança visando uma criatura marcada por Explorar Fraqueza pode usar seu modificador de Carisma em vez de Sabedoria. Você ganha proficiência com armas de propriedade Agarrar, podendo usar Inteligência (Intimidação) em vez de Força (Atletismo) para agarrar uma criatura marcada (ela também fica Contida e testa para escapar em desvantagem). Você aprende o Genjutsu Bane (ou outro de igual rank, se já o conhecer), com efeitos alterados: Sucesso — penalidade de 1d4 em ataque, resistência, perícia e habilidade até o início do seu próximo turno; Falha — penalidade de 1d6 pela duração, sem poder se beneficiar de Abençoar, tratada como sob condição Mental e Sensorial; Falha Crítica — como falha, mas também não pode se beneficiar de jutsu que concedam bônus em ataque, dano, resistência ou habilidade." },
        { nivel: 6, nome: "Quebra Críptica", descricao: "A partir do 6º nível, você aprende 2 idiomas/dialetos adicionais, pode ler lábios e criar cifras escritas (indecifráveis sem que você as explique ou sem sucesso em teste de Inteligência contra sua CD de Ninjutsu/Genjutsu). Quando uma criatura sob condição Mental ou Sensorial sua também cai sob uma condição física, pode gastar 1 Ordem Brava: criaturas hostis a até 4,5 metros dela ganham 1 condição que a afeta (não pode ser acionado sozinho)." },
        { nivel: 9, nome: "Explosão/Quebra de Moral", descricao: "A partir do 9º nível, ao aprimorar um plano, selecione um efeito adicional (uma vez por iniciativa): Explosão de Moral — todos os aliados a até 9 metros são analisados por Explorar Fraqueza; ou Quebra de Moral — criaturas hostis a até 9 metros testam Sabedoria contra seu teste de Intimidação, ganhando 2 graus de Medo contra você por 1 minuto se o resultado for menor que o seu." },
        { nivel: 13, nome: "Olho Incerto", descricao: "A partir do 13º nível, você ganha +1d4 em testes de perícia ou resistência contra Genjutsu com palavra-chave Visual e/ou Auditivo. Como ação, pode sentir a presença de Genjutsu a até 9 metros (se não estiver cego ou surdo); se for de um rank que você pode lançar, aprende do que se trata e se o lançador está a até 36 metros. Se o Genjutsu sentido estiver em sua lista conhecida, pode gastar 1 Ordem Brava como reação para lançar Quebra de Genjutsu sem custo de chakra." },
        { nivel: 17, nome: "Mente Perfeita", descricao: "A partir do 17º nível, ganha proficiência em resistência de Sabedoria ou Carisma (ou, se já proficiente em ambas, dobra o bônus de proficiência em uma delas). Além disso, quando uma criatura visível a até 18 metros é alvo de um Genjutsu, pode gastar 1 Ordem Brava como reação para lançar Quebra de Chakra sem custo e marcar automaticamente a criatura desencadeadora com Explorar Fraqueza." },
      ],
    },
    {
      key: "estrategista-mestre",
      nome: "Estrategista Mestre",
      classeKey: "agente-inteligencia",
      descricaoIntro: "Alguns Operadores de Inteligência são mentores por direito próprio, concentrando-se em si mesmos como peças-chave de suas estratégias. Quando preparados, focam em identificar um único alvo e controlar todos os aspectos do conflito.",
      features: [
        { nivel: 3, nome: "Estratégia Principal", descricao: "Ao escolher esta Estratégia no 3º nível, ataques e jutsu que causam dano a uma criatura marcada por Explorar Fraqueza causam dano adicional igual ao seu modificador de Inteligência. Além disso, gastando 1 Ordem Brava, o próximo jutsu de alcance Próprio que você lançar, afetando só você e concedendo bônus/aumento em valor de habilidade, ataque ou dano, é automaticamente upcast para o próximo rank onde haveria mudança de efeito (vantagem conta como tal bônus)." },
        { nivel: 3, nome: "Abuso de Fraqueza", descricao: "Além disso, no 3º nível, gastando 1 Ordem Brava quando força uma criatura a testar resistência contra um jutsu seu que inflige uma condição, pode fazê-la testar em desvantagem. A partir do 9º nível, ao lançar um jutsu que cause uma das condições da Tabela de Abuso de Fraqueza, a condição ganha os efeitos adicionais daquela tabela." },
        { nivel: 6, nome: "Centro das Atenções", descricao: "A partir do 6º nível, como reação a um aliado ser alvo de ataque, gaste 1 Ordem Brava: ataques de criaturas hostis contra qualquer criatura que não seja você são feitos em desvantagem até o início do seu próximo turno." },
        { nivel: 9, nome: "Controle o Fluxo", descricao: "A partir do 9º nível, ao acertar uma criatura com um jutsu, gaste 1 Ordem Brava para forçá-la a testar resistência de Sabedoria contra a CD aplicável (Taijutsu, Ninjutsu ou Genjutsu); em falha, ela não pode usar reações até o fim do próximo turno." },
        { nivel: 13, nome: "Grito de Guerra", descricao: "A partir do 13º nível, ao gastar uma Ordem Brava para ativar ou aprimorar um plano, escolha um efeito: ganha PV temporários iguais à tabela de rank da criatura hostil mais graduada a até 18 metros (E:10, D:20, C:30, B:40, A:50, S:75, por 1 minuto); ou ganha o benefício de Abuso de Fraqueza (3º nível), forçando todas as criaturas hostis afetadas pelo jutsu a testar com desvantagem. Duas vezes por descanso longo." },
        { nivel: 17, nome: "Declaração Própria", descricao: "A partir do 17º nível, ao ativar um plano gastando uma Ordem Brava, pode gastar uma adicional: na primeira vez que sofreria dano depois, ganha imunidade a esse tipo de dano por um número de rodadas igual ao seu modificador de Inteligência." },
      ],
    },
    {
      key: "precognitivo",
      nome: "Precognitivo",
      classeKey: "agente-inteligencia",
      descricaoIntro: "Alguns Operadores de Inteligência têm uma mente mais perspicaz que a maioria, capazes de planejar e traçar estratégias no calor da batalha. Capazes de prever o movimento de amigos e inimigos sem muita dificuldade, alguns dizem que podem vislumbrar o futuro.",
      features: [
        { nivel: 3, nome: "Precognição", descricao: "Ao escolher esta Estratégia no 3º nível, você e aliados a até 9 metros ficam imunes a serem surpreendidos. Como ação, gaste 1 Ordem Brava olhando para uma criatura a até 18 metros: pela próxima hora, tem vantagem em Investigação, Intuição e História para rastreá-la/aprender sobre ela, pode usar Inteligência em testes de Intuição contra ela, e ignora bônus de CA concedidos por jutsu (mas não mudanças no cálculo da CA)." },
        { nivel: 3, nome: "Pausa Momentânea", descricao: "Além disso, no 3º nível, como ação bônus, gaste 1 Ordem Brava: ao fim do seu turno, realize outro turno. Uma vez por descanso longo. A partir do 9º nível, também pode usar este recurso em um aliado marcado por Explorar Fraqueza." },
        { nivel: 6, nome: "Cronos Convergentes", descricao: "A partir do 6º nível, no início do seu turno, role 1d6 para um efeito (tabela abaixo); gastando 1 Ordem Brava, pode dar o mesmo efeito a um aliado a até 9 metros. Usável um número de vezes por descanso longo igual ao seu bônus de proficiência.\n\n1 — +2 na CA e próxima resistência com vantagem, até o início do próximo turno.\n2 — 1 reação adicional, usável antes do início do próximo turno.\n3 — ataques hostis de uma criatura marcada por Explorar Fraqueza contra você são feitos em desvantagem até o início do próximo turno.\n4 — se uma criatura no alcance estiver conjurando um jutsu, pode conjurar um Rank C ou inferior conhecido sem gastar reação (uma vez).\n5 — duas vezes na ação realizada, +bônus de proficiência no dano de ataques/jutsu até o fim do turno.\n6 — vantagem em todas as jogadas de ataque e testes de habilidade até o fim do turno." },
        { nivel: 9, nome: "Assalto Esperado", descricao: "A partir do 9º nível, você e aliados a até 6 metros que o ouçam não perdem a reação por efeito de jutsu ou recurso. Quando uma criatura a até 6 metros ataca, pode usar sua reação e gastar 1 Ordem Brava para dar a ela vantagem ou desvantagem no próximo ataque antes do fim do turno." },
        { nivel: 13, nome: "Dia Seguinte", descricao: "A partir do 13º nível, ao terminar um descanso longo, role dois d20 e registre os resultados. Antes de uma jogada de ataque, teste de resistência, de perícia ou de habilidade (seu ou de uma criatura visível), pode substituí-la por um desses resultados (um por turno). Cada resultado só pode ser usado uma vez; os não usados se perdem no próximo descanso longo." },
        { nivel: 17, nome: "Clarividência Onisciente", descricao: "A partir do 17º nível, gaste 1 Ordem Brava para entrar em transe por 1 minuto: todos os seus ataques, testes de habilidade, de perícia e de resistência têm vantagem; ataques contra você são feitos em desvantagem. Exige concentração como um jutsu Rank S. Uma vez por descanso longo." },
      ],
    },
    {
      key: "sensorial",
      nome: "Sensorial",
      classeKey: "agente-inteligencia",
      descricaoIntro: "Alguns Operadores de Inteligência descobrem que conhecer as posições e localizações de seus inimigos em relação ao grupo torna a estratégia de combate muito mais eficaz e ajuda a apoiar sua equipe tanto em combate quanto em investigação.",
      features: [
        { nivel: 3, nome: "Consciência Preternatural", descricao: "Ao escolher esta Estratégia no 3º nível, você aprende o Ninjutsu Rank D Sentir Chakra (se ainda não conhece), podendo lançá-lo fora do seu turno gastando 1 Ordem Brava (sempre no nível mais alto possível). A ação especial que ele concede pode, uma vez por lançamento, ser feita como ação livre no seu turno, e pode substituir o teste de perícia por Inteligência (Investigação). Criaturas cujo chakra você sente revelam sua Liberação de Natureza (se houver), se estão concentradas em um jutsu, se estão sob efeito de um, e o rank mais alto de jutsu a que têm acesso.\n\nA partir do 9º nível, selecione uma habilidade (outra no 17º): (a) criaturas marcadas cujo chakra você sente não ganham bônus baseados em jutsu em ataque/dano contra você; (b) sofrem -5 em testes de perícia contestados contra você; (c) não podem obter vantagem em ataques contra aliados seus (exceto você) que estejam sob efeito de seus planos ativos." },
        { nivel: 3, nome: "Selos Sensoriais", descricao: "Também no 3º nível, você tem um número de Marcas Sensoriais igual ao seu bônus de proficiência, recuperadas em um descanso longo. Como ação bônus, ou ao analisar com Explorar Fraqueza, marque uma criatura voluntária visível a até 18 metros por 1 minuto. Quando você e ela rolam iniciativa juntas ou estão a até 9 metros, ambos ganham um dos benefícios (fixo até marcar outra criatura): Conjuração Aliada (+2 em ataque de Ninjutsu/Genjutsu/Taijutsu); Combinação Aliada (jutsu com palavra-chave Combinação custam -5, mín. 1); Defesa Aliada (+2 na CA e resistência quando adjacentes à mesma criatura); Harmonia Aliada (+3 em perícias físicas ou mentais, escolhido na ativação); Ataque Aliado (+2 em ataque e dano quando adjacentes à mesma criatura); Percepções Aliadas (imune à vantagem de Agarrado/Contido; inimigos adjacentes a até 1,5m não ganham bônus de adjacência); Blindagem Aliada (+1 na CA)." },
        { nivel: 6, nome: "Selos Sensoriais Melhorados", descricao: "A partir do 6º nível, ao usar Selos Sensoriais, gaste um uso adicional para marcar uma segunda criatura voluntária, ou para amplificar o selo de uma única: Conjuração Aliada +4; Combinação Aliada -10; Defesa Aliada +4; Harmonia Aliada +5; Ataque Aliado +4; Percepções Aliadas (também impede bônus de acerto contra você via jutsu); Blindagem Aliada +2." },
        { nivel: 9, nome: "Conscientização do Esquadrão", descricao: "A partir do 9º nível, um aliado marcado por Explorar Fraqueza fica ciente de todas as criaturas cujo chakra você sente via Sentir Chakra. Ao ativar um plano, pode tratar esse aliado como se estivesse no seu espaço no momento da ativação." },
        { nivel: 13, nome: "Consciência Situacional", descricao: "A partir do 13º nível, aliados a até 9 metros são tratados como proficientes em Percepção; se já proficientes, também em Intuição; se proficientes em ambas, ganham +5 na Percepção e Intuição passivas." },
        { nivel: 17, nome: "Nada Nos Escapa", descricao: "A partir do 17º nível, ao marcar uma criatura com Explorar Fraqueza, faça um teste de Percepção ou Intuição contra CD 8 + nível do alvo; em sucesso, fica ciente de todos os jutsu de uma Liberação de Natureza que ela pode lançar. Duas vezes por descanso longo." },
      ],
    },
    {
      key: "mao-sombria",
      nome: "Mão Sombria",
      classeKey: "agente-inteligencia",
      descricaoIntro: "Alguns Operadores de Inteligência descobrem que sua personalidade exterior não tem autoridade ou peso suficiente para executar o que desejam. Então criam um construto de chakra conhecido como Mão Sombria, para agir ao seu lado, dando credibilidade e autoridade às suas ordens em batalha.",
      features: [
        { nivel: 3, nome: "Manifestação da Sombra", descricao: "Ao escolher esta Estratégia no 3º nível, você cria uma Mão Sombria, construto de chakra formado por Fuinjutsu complexo (design e nome à sua escolha), invocável para apoiá-lo em ou fora de combate. Invocada como ação bônus, ocupa um espaço ao seu lado e é visível para quem usa chakra; enquanto convocada, pode calcular sua própria CA usando Carisma em vez de Destreza. Comande-a como ação livre; ela usa ações, ações bônus e reações conforme necessário.\n\nRegras: pode lançar qualquer jutsu que você conheça com as próprias estatísticas e usar características de classe de Agente de Inteligência suas; não pode existir a mais de 36 metros de você (senão desaparece); compartilha seus pontos de chakra; se vocês dois testarem resistência contra o mesmo efeito, só um teste é feito (o maior bônus), aplicando-se a ambos uma única vez; em testes de resistência, ela usa metade do seu bônus de proficiência + o valor de habilidade correspondente. Para cada +1 no seu modificador de Carisma, dois valores de habilidade dela aumentam em +2 (máx. 20).\n\nA partir do 6º nível, selecione um Sigilo da Mão Sombria (catálogo na característica Sigilos da Mão Sombria); ganha outro no 9º, 13º e 17º.\n\nEstatísticas da Mão Sombria (Construção média): CA 10 + metade da proficiência + mod. Destreza; PV temporários 10 + nível de classe + (10×mod. Constituição) + (10×mod. Carisma); velocidade igual à sua; atributos 10 (+0); imune a Encantado; visão no escuro 9m; percepção passiva 10. Traços: Forma Imutável; Inesgotável (não ganha Exaustão); Construção de Chakra (ataques aprimorados com chakra); Vinda das Cinzas (se cair a 0 PV, deixa de poder ser convocada até você gastar 10 de chakra + 1 Ordem Brava para reinvocá-la com metade do PV máximo; recupera metade em descanso curto, tudo em descanso longo). Ataque Desarmado corpo a corpo: For + proficiência para acertar, alcance 1,5m, 1d8 + For de dano de concussão." },
        { nivel: 3, nome: "Presença Comandante", descricao: "Também no 3º nível, como ação bônus, gaste 1 Ordem Brava: você e criaturas à sua escolha a até 9 metros ganham, até o início do seu próximo turno, um dos seguintes (dois a partir do 9º nível): +2 em ataque; +2 em dano; +2 em perícia; +2 em resistência. Se uma criatura beneficiada acertar um ataque, ou tiver sucesso em teste de perícia/resistência superando a CA/CD em 5 ou mais, a Ordem Brava gasta é reembolsada; cada criatura só pode se beneficiar assim duas vezes por descanso longo." },
        { nivel: 6, nome: "Se Revele", descricao: "A partir do 6º nível, você pode usar Carisma em vez de Sabedoria para testes de Intuição, e faz com vantagem testes de Carisma (Intuição) contra quem fala com você. Em combate, como ação bônus, faça um teste de Carisma (Intuição) contra o Carisma (Enganação) de uma criatura hostil visível a até 18 metros; em sucesso, fica ciente de todos os jutsu/características/efeitos ativos sobre ela e pode gastar 1 Ordem Brava para encerrá-los imediatamente (como Dissipar Chakra, usando Carisma em vez do modificador de Ninjutsu)." },
        { nivel: 6, nome: "Sigilos da Mão Sombria", descricao: "Lista de Sigilos disponíveis para a Mão Sombria (um por vez; trocável em descanso curto ou longo, conforme Mostrando Crescimento):\n- Sigilo Atingindo: ganha Multiataque (2 ataques desarmados); ataques desarmados causam dano contundente ou cortante (escolha antes de atacar) e contam como arma para Bukijutsu.\n- Sigilo Perfurante: ataques desarmados usam Destreza em vez de Força; causam contundente ou perfurante (escolha antes de atacar); contam como arma para Bukijutsu.\n- Sigilo dos Elementos: resistência a Terra, Vento, Fogo, Frio ou Relâmpago (escolha); jutsu de liberação de natureza lançados por ela ganham a palavra-chave correspondente; dano de seus jutsu torna-se do tipo resistente; ataques desarmados causam +1d4 desse tipo.\n- Sigilo de Ilusões: resistência a dano psíquico; jutsu sem palavra-chave Genjutsu ganham Genjutsu/Tátil/Auditivo/Visual; dano de seus jutsu torna-se psíquico; ataques desarmados causam +1d4 psíquico.\n- Sigilo da Psicose: vantagem em resistência de Inteligência ou Sabedoria (escolha) contra Genjutsu; criatura sob Genjutsu dela deve testar concentração a cada turno ou perder a concentração em todos os jutsu.\n- Sigilo de Foco: Ninjutsu dela custa -2 (-1 para manter concentração); aumenta o alcance em 1,5m × rank do jutsu.\n- Sigilo de Comando: Taijutsu dela custa -2 e ganha +2 em ataque/dano; aumenta o dano em 2 × rank do jutsu.\n- Sigilo de Selos Quebrados: Fuinjutsu dela que causa condição aumenta a CD em 1; Fuinjutsu que causa dano ignora resistência.\n- Sigilo de Habilidade: ganha proficiência em todas as perícias suas; você ganha proficiência em uma perícia à escolha; perícias proficientes dela nunca são feitas em desvantagem.\n- Sigilo de Poder: adiciona seu modificador de Carisma ao dano de Ninjutsu/Genjutsu dela; +2 em dois testes de resistência à escolha; dobra o dano a Construtos, Demônios e Monstruosidades.\n- Sigilo de Esforço: adiciona Carisma a Testes de Confronto dela; selecione um valor de habilidade — ela adiciona Carisma a testes de perícia que o usem.\n- Sigilo de Velocidade: velocidade igual à sua +15m; aumenta sua iniciativa em seu modificador de Carisma; pode ser invocada como reação quando qualquer criatura age; uma vez por descanso curto, lança um jutsu de 1 ação como ação bônus." },
        { nivel: 9, nome: "Mostrando Crescimento", descricao: "A partir do 9º nível, você ganha um segundo Sigilo da Mão Sombria, podendo se beneficiar de ambos. Pode trocar os sigilos ao completar um descanso curto ou longo." },
        { nivel: 13, nome: "Curinga", descricao: "A partir do 13º nível, quando sua Mão Sombria ou um aliado próximo dela lançar um jutsu, pode gastar 1 Ordem Brava (como parte da mesma ação/ataque) para rerrolar resultados 1, 2 ou 3, usando o novo resultado mesmo que também seja 1, 2 ou 3." },
        { nivel: 17, nome: "Evolução da Sombra", descricao: "A partir do 17º nível, ao ativar uma Ordem Brava com sua Mão Sombria ativa, os efeitos também se originam dela, como se ela também a tivesse ativado. Uma criatura pode se beneficiar de ambas se os raios se sobrepuserem a ela." },
      ],
    },
    {
      key: "estrategista-tatico",
      nome: "Estrategista Tático",
      classeKey: "agente-inteligencia",
      descricaoIntro: "Alguns Operadores de Inteligência se orgulham de sua abordagem tática em seus Planos, concentrando-se em jogar o jogo longo, montando armadilhas básicas e avançadas para ajudar aliados e desestabilizar inimigos.",
      features: [
        { nivel: 3, nome: "Plano Favorito", descricao: "Ao escolher esta Estratégia no 3º nível, selecione 1 Plano do catálogo da classe que você não conhece; ele não conta nos seus Planos Conhecidos e se torna seu Plano Favorecido. Gastando 1 Ordem Brava, pode ativá-lo mesmo com outro plano ativo, concedendo os efeitos de ambos.\n\nA partir do 9º nível, selecione um segundo Plano Favorecido; pode trocar entre os dois Planos Favorecidos ativos sem gastar Ordem Brava, até duas vezes por descanso longo." },
        { nivel: 3, nome: "Configurador de Armadilha", descricao: "Além disso, no 3º nível, selecione 2 Armadilhas Operatórias do catálogo abaixo (mais uma no 6º e outra no 9º nível). Pode manter definidas um número de armadilhas igual ao seu bônus de proficiência antes de precisar descansar para preparar mais. Configurar uma exige ação bônus, podendo designar quem pode ativá-la. Armadilhas Operatórias usam sua CD de Ninjutsu ou Taijutsu (escolha) para resistências, e exigem teste de Sabedoria (Percepção) contestado pela CD da armadilha para serem vistas. Ao usar um Kit de Armadilhas para configurá-las, reduza em -2 a CD de todas." },
        { nivel: 3, nome: "Catálogo de Armadilhas Operatórias", descricao: `Lista de Armadilhas Operatórias disponíveis para Configurador de Armadilha. Todas ficam imóveis após instaladas e são acionadas quando uma criatura Pequena ou maior se move sobre elas ou a até 1,5 metro.

- Armadilha de Selação de Chakra: resistência de Constituição ou o custo dos jutsu da criatura aumenta em +10 até o selo ser removido (ação, teste de Força contra a CD da armadilha). Aprimorada: também impede moldar chakra até ser removida.
- Armadilha Explosiva: criaturas em raio de 4,5 metros testam Destreza; falha = 6d6 de dano de fogo, sucesso = metade. Aprimorada: dado aumenta para d12.
- Armadilha de Kunai: criaturas em raio de 3 metros testam Destreza; falha = 7d4 de dano perfurante, sucesso = metade. Aprimorada: dobra os dados.
- Armadilha Neutralizante: resistência de Constituição ou atordoada até o fim do próximo turno (ou do turno atual, em sucesso). Aprimorada: todas as criaturas em um cubo de 4,5 metros testam.
- Armadilha Venenosa: resistência de Destreza ou Envenenada por 1 minuto. Aprimorada: também ganha 3 graus de Envenenado (mesma duração).
- Armadilha de Gás do Sono: resistência de Constituição ou Inconsciente por 10 minutos (dano encerra imediatamente). Aprimorada: criaturas em raio de 1,5 metro também testam.
- Armadilha de Fumaça: cria uma nuvem que cega criaturas em um cubo de 4,5 metros até saírem dela. Aprimorada: a fumaça é inflamável — criaturas no raio ao ser acesa (por dano de Fogo ou Relâmpago) testam Destreza, sofrendo 6d6 de dano de fogo em falha ou metade em sucesso.
- Armadilha de Laço: resistência de Destreza ou Contida por fios de metal por até 1 minuto (Força/Atletismo como ação para se libertar, ou outra criatura pode libertá-la com teste de Inteligência contra a CD). Aprimorada: todas as criaturas no raio testam, ficando Contidas juntas com desvantagem para escapar.` },
        { nivel: 6, nome: "Táticas de Esquadrão", descricao: "A partir do 6º nível, gaste uma Ordem Brava para que até dois aliados a até 18 metros que o vejam/ouçam ganhem +1d6 no próximo teste de habilidade, ataque ou resistência, podendo usar a ação de Ajuda como ação bônus até o fim do turno. Se um deles usar Ajuda em outra criatura, esta ganha o mesmo benefício (repassado, com +2d6)." },
        { nivel: 9, nome: "Armadilhas de Adeptos", descricao: "A partir do 9º nível, armadilhas montadas com um Kit de Armadilhas são tratadas como Rank B, com os efeitos Aprimorados correspondentes. Além disso, podem usar sua CD de Ninjutsu ou Taijutsu no lugar da CD listada, à sua escolha." },
        { nivel: 13, nome: "Armadilhas Avançadas", descricao: "A partir do 13º nível, selecione 2 armadilhas que conhece: elas passam a sempre ganhar seu efeito Aprimorado." },
        { nivel: 17, nome: "Em Perfeita Sincronização", descricao: "A partir do 17º nível, gaste uma Ordem Brava: aliados à sua escolha a até 9 metros ganham, pelo próximo minuto, +1d6 adicional em ataque, perícia ou resistência (escolha um). Duas vezes por descanso longo." },
      ],
    },
  ],
};
