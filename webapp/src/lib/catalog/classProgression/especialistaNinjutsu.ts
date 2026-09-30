import type { ClassProgressionDefinition } from "@/lib/classProgression/types";

/**
 * Progressão completa do Especialista em Ninjutsu — "Observações do
 * Orochimaru" (compêndio de Classes), p.102-127. Complementa o resumo em
 * catalog/classes.ts com a tabela nível-a-nível (1-20), as características
 * por extenso e as 11 subclasses ("Tradição Ninjutsu", escolhida no 2º
 * nível) — a classe com mais opções de subclasse do compêndio.
 *
 * A subclasse "Mestre Escribre" está incompleta: a fonte extraída tem uma
 * lacuna entre o fim da página ~114 e o início da página ~126 (o catálogo
 * de opções de "Moldagem Eficiente" citado em featuresBase também é
 * conhecido só parcialmente, por causa dessa mesma lacuna).
 */
export const progressaoEspecialistaNinjutsu: ClassProgressionDefinition = {
  classeKey: "especialista-ninjutsu",
  nomeGrupoSubclasse: "Tradição Ninjutsu",
  nivelEscolhaSubclasse: 2,

  levels: [
    { nivel: 1, bonusProficiencia: 3, caracteristicas: "Recuperação de Chakra, Ninjutsu Refinado",
      colunasExtras: { "Ninjutsu Refinados": "2", "Moldagem Eficiente": "-", "Jutsu Conhecidos": "6", "Rank Máximo do Jutsu": "Rank-D" } },
    { nivel: 2, bonusProficiencia: 3, caracteristicas: "Tradição Ninjutsu",
      colunasExtras: { "Ninjutsu Refinados": "2", "Moldagem Eficiente": "-", "Jutsu Conhecidos": "7", "Rank Máximo do Jutsu": "Rank-D" } },
    { nivel: 3, bonusProficiencia: 3, caracteristicas: "Moldagem Eficiente",
      colunasExtras: { "Ninjutsu Refinados": "2", "Moldagem Eficiente": "2", "Jutsu Conhecidos": "8", "Rank Máximo do Jutsu": "Rank-D" } },
    { nivel: 4, bonusProficiencia: 4, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Ninjutsu Refinados": "3", "Moldagem Eficiente": "2", "Jutsu Conhecidos": "9", "Rank Máximo do Jutsu": "Rank-D" } },
    { nivel: 5, bonusProficiencia: 4, caracteristicas: "Quebrador de Jutsu, Moldagem Eficiente (2)",
      colunasExtras: { "Ninjutsu Refinados": "3", "Moldagem Eficiente": "3", "Jutsu Conhecidos": "10", "Rank Máximo do Jutsu": "Rank-C" } },
    { nivel: 6, bonusProficiencia: 4, caracteristicas: "Tradição Ninjutsu (2), Recuperação de Chakra (2)",
      colunasExtras: { "Ninjutsu Refinados": "3", "Moldagem Eficiente": "3", "Jutsu Conhecidos": "11", "Rank Máximo do Jutsu": "Rank-C" } },
    { nivel: 7, bonusProficiencia: 5, caracteristicas: "–",
      colunasExtras: { "Ninjutsu Refinados": "4", "Moldagem Eficiente": "3", "Jutsu Conhecidos": "12", "Rank Máximo do Jutsu": "Rank-C" } },
    { nivel: 8, bonusProficiencia: 5, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Ninjutsu Refinados": "4", "Moldagem Eficiente": "3", "Jutsu Conhecidos": "13", "Rank Máximo do Jutsu": "Rank-C" } },
    { nivel: 9, bonusProficiencia: 5, caracteristicas: "Ninjutsu Refinado (2), Moldagem Eficiente (3)",
      colunasExtras: { "Ninjutsu Refinados": "4", "Moldagem Eficiente": "4", "Jutsu Conhecidos": "14", "Rank Máximo do Jutsu": "Rank-B" } },
    { nivel: 10, bonusProficiencia: 6, caracteristicas: "Tradição Ninjutsu (3)",
      colunasExtras: { "Ninjutsu Refinados": "5", "Moldagem Eficiente": "4", "Jutsu Conhecidos": "15", "Rank Máximo do Jutsu": "Rank-B" } },
    { nivel: 11, bonusProficiencia: 6, caracteristicas: "Recuperação de Chakra (3), Quebrador de Jutsu (2)",
      colunasExtras: { "Ninjutsu Refinados": "5", "Moldagem Eficiente": "4", "Jutsu Conhecidos": "16", "Rank Máximo do Jutsu": "Rank-B" } },
    { nivel: 12, bonusProficiencia: 6, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Ninjutsu Refinados": "5", "Moldagem Eficiente": "4", "Jutsu Conhecidos": "17", "Rank Máximo do Jutsu": "Rank-B" } },
    { nivel: 13, bonusProficiencia: 7, caracteristicas: "Moldagem Eficiente (4)",
      colunasExtras: { "Ninjutsu Refinados": "6", "Moldagem Eficiente": "5", "Jutsu Conhecidos": "18", "Rank Máximo do Jutsu": "Rank-A" } },
    { nivel: 14, bonusProficiencia: 7, caracteristicas: "Tradição Ninjutsu (4)",
      colunasExtras: { "Ninjutsu Refinados": "6", "Moldagem Eficiente": "5", "Jutsu Conhecidos": "19", "Rank Máximo do Jutsu": "Rank-A" } },
    { nivel: 15, bonusProficiencia: 7, caracteristicas: "Moldagem Eficiente (5)",
      colunasExtras: { "Ninjutsu Refinados": "6", "Moldagem Eficiente": "5", "Jutsu Conhecidos": "20", "Rank Máximo do Jutsu": "Rank-A" } },
    { nivel: 16, bonusProficiencia: 8, caracteristicas: "Melhoria/talento na pontuação de habilidade, Especialização (3)",
      colunasExtras: { "Ninjutsu Refinados": "7", "Moldagem Eficiente": "5", "Jutsu Conhecidos": "21", "Rank Máximo do Jutsu": "Rank-A" } },
    { nivel: 17, bonusProficiencia: 8, caracteristicas: "Recuperação de Chakra (4), Ninjutsu Refinado (3), Quebrador de Jutsu (3)",
      colunasExtras: { "Ninjutsu Refinados": "7", "Moldagem Eficiente": "5", "Jutsu Conhecidos": "22", "Rank Máximo do Jutsu": "Rank-S" } },
    { nivel: 18, bonusProficiencia: 8, caracteristicas: "Tradição Ninjutsu (5), Moldagem Eficiente (6)",
      colunasExtras: { "Ninjutsu Refinados": "7", "Moldagem Eficiente": "6", "Jutsu Conhecidos": "23", "Rank Máximo do Jutsu": "Rank-S" } },
    { nivel: 19, bonusProficiencia: 9, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Ninjutsu Refinados": "8", "Moldagem Eficiente": "6", "Jutsu Conhecidos": "24", "Rank Máximo do Jutsu": "Rank-S" } },
    { nivel: 20, bonusProficiencia: 9, caracteristicas: "Mestre Ninjutsu",
      colunasExtras: { "Ninjutsu Refinados": "8", "Moldagem Eficiente": "6", "Jutsu Conhecidos": "25", "Rank Máximo do Jutsu": "Rank-S" } },
  ],

  features: [
    {
      nivel: 1,
      nome: "Recuperação de Chakra",
      descricao: "A partir do 1º nível, você aprendeu a reter algum chakra gasto ao lançar Ninjutsu. Uma vez por descanso curto, você pode recuperar metade do custo de qualquer Ninjutsu sem a palavra-chave Combinação que você conjurou. Você ganha um uso adicional deste recurso nos níveis 6, 11 e 17 do Especialista em Ninjutsu.",
    },
    {
      nivel: 1,
      nome: "Ninjutsu Refinado",
      descricao: "Além disso, no 1º nível, você pode selecionar uma quantidade de Ninjutsu que você conhece sem a palavra-chave Combinação, igual ao número mostrado para Jutsu Refinado na tabela de classes acima, aumentando a CD de Salvamento ou o dano causado pelo jutsu escolhido por 1 dado. Este recurso acontece uma vez por lançamento do Jutsu Refinado. Você escolhe qual benefício você ganha cada vez que lança o jutsu, mas antes que o jutsu afete uma criatura. Você pode alterar seu Ninjutsu Refinado quando for fazer um descanso longo. No 9º nível, esse aumento passa a ser de 2 em vez de 1, e no 17º nível, de 3 em vez de 2.",
    },
    {
      nivel: 2,
      nome: "Tradição Ninjutsu",
      descricao: "A partir do 2º nível, você começa a se Especializar em uma Tradição que aprimora o estilo de ninjutsu em que você se concentra. A Tradição que você escolher concede recursos no 2º, 6º, 10º, 14º e 18º níveis.",
    },
    {
      nivel: 3,
      nome: "Moldagem Eficiente",
      descricao: "A partir do 3º nível, você aprende como ajustar seu chakra para atender às suas necessidades enquanto lança Ninjutsu, sem a palavra-chave Combinação. Você ganha duas das opções de Moldagem Eficiente à sua escolha (ver catálogo abaixo). Você ganha outra no 5º, 9º, 13º e 18º nível. Você só pode usar uma opção de Moldagem Eficiente em um Ninjutsu sem a palavra-chave Combinação ao lançá-lo, salvo indicação em contrário. Você pode usar qualquer combinação de moldagens eficientes 2 vezes por descanso — ganha um uso adicional no 9º e 15º níveis. Se usar uma moldagem mais vezes do que sua limitação, deve gastar o chakra listado como Custo Alternativo.",
    },
    {
      nivel: 4,
      nome: "Melhoria/Talento de Pontuação de Habilidade",
      descricao: "Quando você alcança o 4º e novamente o 8º, 12º, 16º e 19º nível, você pode aumentar um valor de habilidade em +1 e um Talento de sua escolha para o qual eles se qualificam. Normalmente, você não pode aumentar um valor de habilidade acima de 20 usando este recurso.",
    },
    {
      nivel: 5,
      nome: "Quebrador de Jutsu",
      descricao: "A partir do 5º nível, você aprende como subjugar o jutsu do seu oponente com pura força. Quando você vir uma criatura a até 27 metros de você lançar um Ninjutsu que causaria dano de qualquer tipo, você pode, como reação, lançar um Ninjutsu que você conhece com um tempo de lançamento de 1 ação. Ao fazer isso, se o jutsu que você conjurar não tiver a palavra-chave confronto, ele ganhará a palavra-chave confronto. Você inicia automaticamente um confronto com o jutsu da criatura desencadeadora, mesmo que seu jutsu não tenha a palavra-chave confronto. Você pode usar esse recurso duas vezes por descanso. Você ganha um uso adicional desta característica no 11º e 17º nível.",
    },
    {
      nivel: 20,
      nome: "Mestre Ninjutsu",
      descricao: "A partir do 20º nível, selecione um Ninjutsu de Rank C ou inferior. Você sempre causa dano máximo com o Jutsu escolhido.",
    },
    {
      nivel: 3,
      nome: "Catálogo de Moldagens Eficientes",
      descricao: `Opções disponíveis para o recurso Moldagem Eficiente (a lista pode estar incompleta — ver nota no topo do arquivo):

NINJUTSU CUIDADOSO (5 Chakra): protege até 3 criaturas dos efeitos de um Ninjutsu que força teste de resistência.
NINJUTSU DISTANTE (3 Chakra): dobra o alcance do jutsu (alcance Toque vira 9 metros).
NINJUTSU DUPLO (4/8/12/15/20 Chakra por Rank): atinge uma segunda criatura com um Ninjutsu de alvo único sem alcance Próprio.
ECOANDO NINJUTSU (5 Chakra): cria um eco do jutsu, lançável como ação bônus no turno seguinte sem custo, causando metade do dano no mesmo alvo.
NINJUTSU ESTENDIDO (5 Chakra): multiplica a duração por 10 (máx. 24h sem concentração, 10 min com concentração).
NINJUTSU FOCADO (4 Chakra): passa automaticamente em testes de concentração para manter o jutsu.
NINJUTSU AUMENTADO (5 Chakra): dá desvantagem ao alvo no primeiro teste de resistência contra o jutsu.
NINJUTSU PENETRANTE (5 Chakra): o jutsu ignora resistência e PV temporários até o fim do turno; imunidade vira resistência.
NINJUTSU POTENTE (3/5/7/9/12 Chakra por Rank): trata cada dado de dano como resultado máximo.
NINJUTSU PRECISO (3 Chakra): ganha vantagem em uma jogada de ataque do jutsu.
NINJUTSU RÁPIDO (5 Chakra): muda o tempo de lançamento de 1 ação para 1 ação bônus.
NINJUTSU REATIVO (6 Chakra): lança como reação um jutsu com tempo de lançamento de 1 ação.
NINJUTSU REDIRECIONADO (5 Chakra): permite refazer uma jogada de ataque que errou, mirando a mesma ou outra criatura.
NINJUTSU SUTIL (3 Chakra): lança sem sinais de mão.
NINJUTSU TENAZ (5 Chakra): como reação a uma tentativa de confronto/dissipação/interrupção, +1d10 no teste de confronto e +3 na CD de dissipação.
NINJUTSU TRANSMOGRIFICADO (9 Chakra): troca o atributo do teste de resistência exigido por outro da mesma categoria (físico ou mental).
NINJUTSU AMPLIADO (4 Chakra): aumenta a área de efeito do jutsu (+3m em linha/cubo/esfera/cone, +4,5m em cilindro).`,
    },
  ],

  subclasses: [
    {
      key: "caminhante-de-chamas",
      nome: "Caminhante de Chamas",
      classeKey: "especialista-ninjutsu",
      descricaoIntro: "O Especialista em Ninjutsu que escolhe se tornar um Blaze Walker torna-se um motor primordial de destruição, temido e reverenciado desde os primeiros dias do homem ao usar o Ninjutsu de Liberação de Fogo.",
      features: [
        { nivel: 2, nome: "Liberação de Incêndio", descricao: "Quando você escolhe esta tradição no 2º nível, você ganha a habilidade de aprender ninjutsu com a palavra-chave Liberação de Fogo. Se já pode fazer isso, aprende 2 ninjutsu adicionais de Liberação de Fogo para os quais se qualifica, um dos quais pode ser Rank C ou inferior. Ganha +1d6 em testes de Ninshou relacionados a esse ninjutsu e pode aprendê-lo/criá-lo na metade do tempo. Ao lançar um ninjutsu com a palavra-chave Liberação de Fogo: duas vezes por lançamento, +1d4+1 (torna-se 1d6+1 no 10º nível, 1d8+1 no 18º) nas jogadas de dano; uma vez por lançamento, reduz em 4 a redução de dano do alvo até o início do próximo turno dele." },
        { nivel: 2, nome: "Adepto do Fogo", descricao: "Além disso, no 2º nível, uma vez por turno, ao causar dano com um Jutsu com a palavra-chave Liberação de Fogo, você pode marcar uma criatura danificada com brasa (até 5 marcas por criatura). Uma vez por turno, ao causar dano de fogo a uma criatura marcada, pode ativar todas as marcas, causando 2d6+2 de dano de fogo por marca e removendo-as. As marcas duram até 1 minuto ou até serem ativadas." },
        { nivel: 6, nome: "Fogo Flash", descricao: "A partir do 6º nível, ao lançar um Ninjutsu com a palavra-chave Liberação de Fogo, o jutsu causa dano adicional igual ao seu nível de Especialista em Ninjutsu. Usável duas vezes por descanso." },
        { nivel: 6, nome: "Moldagem Carmesim", descricao: "Também no 6º nível, você aprende a moldagem eficiente exclusiva Moldagem Carmesim (Custo Alternativo 5, cumulativa com outras moldagens). Ao lançar um Ninjutsu com a palavra-chave Liberação de Fogo, criaturas afetadas fazem teste de resistência de Constituição, ficando queimadas em falha (ou ganhando 1 grau de queimado, se o jutsu já forçasse teste de resistência). Se a criatura for Planta, Besta ou Construto orgânico, faz o teste em desvantagem." },
        { nivel: 10, nome: "Fúria Inferno", descricao: "A partir do 10º nível, Ninjutsu com a palavra-chave Liberação de Fogo que se beneficiam do Ninjutsu Refinado ganham um destes benefícios (um por lançamento): dano dobrado contra adversários do tipo Planta; +dano igual ao seu bônus de proficiência; ou, ao iniciar confronto contra um jutsu de Liberação de Água, o usuário do jutsu de água não rola com vantagem." },
        { nivel: 14, nome: "Mestre de Liberação de Incêndio", descricao: "A partir do 14º nível, você pode dobrar o bônus de dano de Fogo Flash. Ao lançar um Jutsu de Liberação de Fogo beneficiado pelo Ninjutsu Refinado, pode dobrar seu custo para causar o triplo do dano a uma única criatura, uma vez por turno (duas vezes por descanso longo). Ninjutsu de Liberação de Fogo que infligem queimado forçam o teste de resistência em desvantagem." },
        { nivel: 18, nome: "Técnica do Blaze Walker", descricao: "A partir do 18º nível, você aprende a moldagem definitiva de Liberação de Fogo: gastando 10 chakra (cumulativa com outras moldagens), o jutsu é automaticamente tratado como Rank S sem custo adicional, ignora imunidade e resistência, e aumenta em 1 passo o dado de dano de fogo (inclusive marcas de brasa)." },
      ],
    },
    {
      key: "elitista-de-hijutsu",
      nome: "Elitista de Hijutsu",
      classeKey: "especialista-ninjutsu",
      descricaoIntro: "O Especialista em Ninjutsu que se especializa nas técnicas de Hijutsu de seu clã torna-se encarnação viva das técnicas familiares, de forma que quem estiver em seu caminho sentirá hesitação em confrontá-lo.",
      features: [
        { nivel: 2, nome: "Especialização Hijutsu", descricao: "Quando você escolhe esta Tradição no 2º nível, aprende um Hijutsu adicional com a palavra-chave Ninjutsu para o qual se qualifica. Ganha +1d6 em testes de Ninshou relacionados a Hijutsu com a palavra-chave Ninjutsu e pode aprendê-lo/criá-lo na metade do tempo. Ao lançar um Hijutsu com a palavra-chave Ninjutsu, uma vez por lançamento: aumenta seu alcance conforme o Rank (D:+10, C:+20, B:+30, A:+40, S:+50); ou reduz o custo em valor igual ao Rank (D:1, C:2, B:3, A:4, S:5)." },
        { nivel: 2, nome: "Adepto de Hijutsu", descricao: "Também no 2º nível, uma vez por turno, ao lançar um ninjutsu com a palavra-chave Hijutsu, você pode armazenar Inércia Tradicional (até 5, durando até 1 minuto ou até serem gastas). Ao lançar um ninjutsu com a palavra-chave Hijutsu, pode gastar qualquer quantidade de inércia (sem ganhar mais no mesmo turno): o tipo de dano muda para o tipo padrão do seu Hijutsu; e escolha um efeito — reduzir o custo de manutenção em 1 (mín. 1) a cada 2 inércias; usar imediatamente um recurso limitado do seu clã como parte do lançamento; ou ignorar um componente necessário a cada 2 inércias gastas." },
        { nivel: 6, nome: "Tradição Mortal", descricao: "A partir do 6º nível, Hijutsu com a palavra-chave Ninjutsu não podem ter seu dano reduzido em mais da metade. Duas vezes por descanso, você pode mudar o tempo de lançamento de um Hijutsu de 1 Ação para 1 Reação, usável quando você ou um aliado ao alcance sofrer dano." },
        { nivel: 6, nome: "Moldagem Geracional", descricao: "Também no 6º nível, você aprende a moldagem eficiente exclusiva Moldagem Geracional (Custo Alternativo 5, cumulativa com outras moldagens). Ao lançar um Hijutsu com a palavra-chave Ninjutsu, o lançamento não pode ser interrompido, negado ou dissipado até o final do seu próximo turno." },
        { nivel: 10, nome: "Grandeza Geracional", descricao: "A partir do 10º nível, Jutsu com as palavras-chave Ninjutsu e Hijutsu beneficiados pelo Ninjutsu Refinado ganham um destes benefícios (um por lançamento): recupera 1 Inércia Tradicional se um alvo falhar por 5+ no teste de resistência (máx. 2 por rodada); trata o jutsu como upcastado duas vezes ao atualizá-lo (até o Rank máximo conhecido); ou vantagem ao iniciar confronto com o jutsu escolhido." },
        { nivel: 14, nome: "Mestre de Hijutsu", descricao: "A partir do 14º nível, ao usar Tradição Mortal você também pode lançar Hijutsu com a palavra-chave Ninjutsu de tempo de lançamento 1 ação bônus como reação. Ao lançar um Hijutsu beneficiado pelo Ninjutsu Refinado, pode dobrar seu custo para ignorar resistência do dano e dobrar o alcance ou área de efeito. Usável duas vezes por descanso longo." },
        { nivel: 18, nome: "Técnica Elitista", descricao: "A partir do 18º nível, você aprende a moldagem definitiva de Hijutsu: gastando 10 chakra (cumulativa com outras moldagens), se o jutsu exigir jogada de ataque, todos os ataques feitos com ele durante sua duração têm vantagem; se exigir teste de resistência, esses testes são feitos em desvantagem." },
      ],
    },
    {
      key: "quebra-raios",
      nome: "Quebra-Raios",
      classeKey: "especialista-ninjutsu",
      descricaoIntro: "O Especialista em Ninjutsu que escolhe se tornar um Quebra-Raios torna-se uma força incomparável de poder imparável, maior do que uma tempestade de raios, ao usar o Ninjutsu de Liberação de Relâmpago.",
      features: [
        { nivel: 2, nome: "Estilo Relâmpago", descricao: "Quando você escolhe esta tradição no 2º nível, ganha a habilidade de aprender ninjutsu com a palavra-chave Liberação de Relâmpago. Se já pode fazer isso, aprende 2 ninjutsu adicionais de Liberação de Relâmpago para os quais se qualifica, um dos quais pode ser Rank C ou inferior. Ganha +1d6 em testes de Ninshou relacionados e pode aprendê-lo/criá-lo na metade do tempo. Ao lançar esse ninjutsu, uma vez por lançamento: duas vezes por lançamento, +1 (torna-se +2 no 10º, +3 no 18º) nas jogadas de ataque de Ninjutsu contra criaturas com graduações de condição Elemental; ou, ao sobrecarregar um jutsu, reduz seu custo em valor igual ao Rank (D:1, C:2, B:3, A:4, S:5)." },
        { nivel: 2, nome: "Adepto do Relâmpago", descricao: "Além disso, no 2º nível, uma vez por turno, ao lançar um jutsu com a palavra-chave Liberação de Relâmpago, você pode se carregar com um Mote Relâmpago (até 5, durando até 1 minuto ou até serem gastos). Ao lançar um jutsu com essa palavra-chave, pode gastar qualquer número de motes (sem ganhar mais no mesmo turno) e escolher um efeito por lançamento: +3 de dano por mote gasto (dobra em acerto crítico); se o jutsu normalmente não causasse dano, adiciona 1d8 de dano elétrico por mote; ou reduz o custo de manutenção em 1 a cada 2 motes gastos." },
        { nivel: 6, nome: "Domador de Relâmpago", descricao: "A partir do 6º nível, você pode ativar os efeitos de Sobrecarga de um Ninjutsu de Liberação de Relâmpago como parte da mesma ação de lançá-lo, duas vezes por descanso (usos adicionais custam 1 dado de Chakra)." },
        { nivel: 6, nome: "Moldagem de Gigawatt", descricao: "Também no 6º nível, você aprende a moldagem eficiente exclusiva Moldagem de Gigawatt (Custo Alternativo 5, cumulativa com outras moldagens). Criaturas afetadas fazem teste de Constituição, ficando chocadas em falha (ou ganhando 1 grau de chocado, se o jutsu já forçasse teste de resistência). Se a criatura for Aberração, Celestial ou Mutante, não pode reagir ao lançamento nem ao dano/condições, e o dano aumenta em 1 dado." },
        { nivel: 10, nome: "Sacos Coletivos", descricao: "A partir do 10º nível, Ninjutsu de Liberação de Relâmpago beneficiados pelo Ninjutsu Refinado ganham um destes benefícios (um por lançamento): acerto crítico com 18-20 no ataque; dobra o dado de dano contra criaturas que falharem no teste de resistência por 5+; ou, ao iniciar confronto contra um jutsu de Liberação de Vento, o usuário do jutsu de vento não rola com vantagem." },
        { nivel: 14, nome: "Mestre do Estilo Relâmpago", descricao: "A partir do 14º nível, ao usar Domador de Relâmpago para sobrecarregar um jutsu, você ganha 2 Motes Relâmpago com o lançamento. Ao lançar um Jutsu de Liberação de Relâmpago beneficiado pelo Ninjutsu Refinado contra criatura chocada, seus ataques têm vantagem, e se exigir teste de resistência, é feito em desvantagem (duas vezes por descanso longo). Ninjutsu de Liberação de Relâmpago que infligem choque impõem -1d4 nos testes de resistência." },
        { nivel: 18, nome: "Técnica do Quebra-Raios", descricao: "A partir do 18º nível, você aprende a moldagem definitiva de Liberação de Relâmpago: gastando 10 chakra (cumulativa com outras moldagens), o jutsu ignora imunidade e resistência, não pode ser reagido durante sua duração e ignora estruturas/construções que interceptariam o dano." },
      ],
    },
    {
      key: "mestre-sanguineo",
      nome: "Mestre Sanguíneo",
      classeKey: "especialista-ninjutsu",
      descricaoIntro: "O Especialista em Ninjutsu que se especializa nas Tradições Hemomânticas aprende a usar o chakra inerente ao sangue de uma criatura, até mesmo o seu próprio. O potencial desta forma de Ninjutsu pode ser desastroso nas mãos erradas, mas também extremamente útil — requer olhar rigoroso e foco adequado.",
      features: [
        { nivel: 2, nome: "Especialização Hemomântica", descricao: "Quando você escolhe esta Tradição no 2º nível, ganha a habilidade de aprender ninjutsu com a palavra-chave Médica que cause dano ácido, necrótico ou venenoso, aprendendo um deles (pode ser Rank C ou inferior). Ganha +1d6 em testes de Ninshou relacionados e pode aprendê-lo/criá-lo na metade do tempo. Ao lançar um jutsu desse tipo, uma vez por turno: uma vez por lançamento, ganha PV temporários iguais à graduação do jutsu (D/C:5, B/A:10, S:15) até o início do próximo turno; ou, uma vez por lançamento, ao infligir uma graduação de Corroído, a criatura recebe uma graduação adicional." },
        { nivel: 2, nome: "Conjuração de Força de Vida", descricao: "Além disso, no 2º nível, uma vez por turno, ao lançar um ninjutsu que causa dano ácido, necrótico ou venenoso, você pode desviar parte da energia para um Frasco de Sangue (até 5, durando até 1 minuto ou até serem consumidos). Ao lançar esse tipo de jutsu, pode gastar qualquer número de frascos e escolher um efeito: +1d8 de dano por frasco gasto; +1 na CD do jutsu a cada 2 frascos; ou reduz o custo do jutsu em 1 a cada 2 frascos gastos." },
        { nivel: 6, nome: "Evocação Sangrenta", descricao: "A partir do 6º nível, ao lançar um jutsu que causa dano ácido, necrótico ou venenoso em criatura com condição elemental ou física, você pode mudar o dano para necrótico e trocar a graduação da condição para Corroído (dano ácido ou necrótico, à escolha). Usável duas vezes por descanso." },
        { nivel: 6, nome: "Técnicas Macabras", descricao: "Também no 6º nível, você aprende a moldagem eficiente exclusiva Técnica Macabra (Custo Alternativo 5, cumulativa com outras moldagens). O ninjutsu passa a causar dano ácido, necrótico ou venenoso (à escolha) e ignora metade da redução de dano do alvo." },
        { nivel: 10, nome: "Ichor Destrutivo", descricao: "A partir do 10º nível, Ninjutsu sem palavra-chave de Liberação de Natureza beneficiados pelo Ninjutsu Refinado ganham um destes benefícios (um por lançamento): adiciona seu modificador de habilidade de Ninjutsu a uma jogada de dano; se o jutsu forçar teste de resistência contra sangramento, envenenamento ou corrosão, criaturas que já tenham essas condições e falharem no teste ganham +1 graduação adicional; ou gasta 1 Frasco de Sangue para ganhar vantagem ao iniciar confronto." },
        { nivel: 14, nome: "Elite Sanguínea", descricao: "A partir do 14º nível, ao lançar um ninjutsu de dano ácido/necrótico/venenoso beneficiado pelo Ninjutsu Refinado que tenha apenas 1 alvo, pode dobrar seu custo para atingir um número de criaturas igual ao número de Frascos de Sangue que você possui. Este jutsu não pode ter seu custo reduzido por Recuperação de Chakra." },
        { nivel: 18, nome: "Técnica Mestre Sanguíneo", descricao: "A partir do 18º nível, você aprende a moldagem definitiva Hemomântica: gastando 10 chakra (cumulativa com outras moldagens), o jutsu ignora imunidade, resistência e redução de dano, e o dano causado reduz a saúde máxima do alvo no próximo minuto." },
      ],
    },
    {
      key: "mestre-escribre",
      nome: "Mestre Escribre",
      classeKey: "especialista-ninjutsu",
      descricaoIntro: "Os Especialistas em Ninjutsu que se especializam na arte de armazenar e usar Pergaminhos de Jutsu passaram a ser conhecidos como Mestres de Pergaminhos, tecelões de Chakra sempre com o jutsu certo à mão.",
      features: [
        { nivel: 2, nome: "Especialização em Fuinjutsu", descricao: "Quando você escolhe esta tradição no 2º nível, aprende 2 Ninjutsu com a palavra-chave Fuinjutsu para os quais se qualifica. Ganha +1d6 em testes de Ninshou relacionados e pode aprendê-lo/criá-lo na metade do tempo. Ao lançar um ninjutsu com a palavra-chave Fuinjutsu, uma vez por lançamento: ignora os componentes Selo de Chakra (CS) e Moldagem de Chakra (CM); ou causa dano de chakra a uma criatura com a condição Selado igual às graduações que ela possui (1 grau: 4, 2: 8, 3: 12, 4: 16, 5: 20)." },
        { nivel: 2, nome: "Rolo Desperto", descricao: "Além disso, no 2º nível, você se vincula a um Pergaminho Desperto (semi-senciente, com sua descrição). Ele tem dois selos de jutsu abertos (mais dois no 6º e 10º nível) para armazenar ninjutsu que você conhece ou de outra fonte (limitado a 1 Rank acima do seu maior jutsu conhecido). Os jutsu selados são lançados como se você os tivesse conjurado (seu bônus de ataque e CD); selar um jutsu custa 1 hora (copiando de outro pergaminho) ou 1 minuto (lançando o jutsu diretamente no pergaminho, sem gastar chakra). Enquanto segurando o pergaminho: ignora os componentes CS/CM ao lançar Fuinjutsu; jutsu armazenados ganham a palavra-chave Fuinjutsu; e você tem vantagem em testes de concentração para manter jutsu conjurados a partir dele." },
        { nivel: 6, nome: "Consumo de Selo", descricao: "A partir do 6º nível, como reação a sofrer dano ou ser forçado a teste de resistência por um Ninjutsu hostil, você pode rasgar seu Pergaminho Desperto e fazer um teste de habilidade (Ninjutsu) contra CD 13 + Rank (D:1, C:2, B:3, A:4, S:5); em sucesso, o pergaminho consome o jutsu, selando-o em um selo vazio e evitando o dano (como um contra-ataque). Usável duas vezes por descanso. Pergaminhos de jutsu também podem ser consumidos como ação bônus." },
        { nivel: 6, nome: "Quebra do Selo", descricao: "Também no 6º nível, você aprende a moldagem eficiente exclusiva Quebra do Selo (Custo Alternativo 5, cumulativa com outras moldagens). Criaturas afetadas fazem teste de resistência de Carisma, ganhando +1 graduação da condição Selado em falha." },
        { nivel: 10, nome: "Rolo Realizado", descricao: "A partir do 10º nível, criaturas aliadas que possuem seu pergaminho podem se comunicar telepaticamente com você e sabem sua localização geral. Ninjutsu lançado via Rolo Desperto ganha um destes benefícios (um por lançamento): manter o jutsu conjurado (some-se automaticamente se relançado antes de um descanso longo); reduzir o custo em valor igual ao Rank (D:1, C:2, B:3, A:4, S:5); ou vantagem ao iniciar confronto com jutsu de palavra-chave Fuinjutsu, com tempo de lançamento alterado para 1 ação bônus. Ninjutsu com a palavra-chave Fuinjutsu que causam dano ou infligem condição não podem ser alvo de reação." },
        { nivel: 14, nome: "Fuinjutsu Sennin", descricao: "A partir do 14º nível, quando você usaria Consumo de Selo para consumir um Jutsu, pode imediatamente lançá-lo de volta na criatura desencadeadora (duas vezes por descanso longo). Ao lançar um Ninjutsu do seu Pergaminho Desperto com palavra-chave de Liberação de Natureza que causa dano, pode dobrar seu custo para trocar essa palavra-chave e o tipo de dano por outra Liberação de Natureza/dano correspondente que você tenha selado em outro compartimento do pergaminho." },
        { nivel: 18, nome: "Mestre Escriba", descricao: "A partir do 18º nível, você aprende a moldagem definitiva de Fuinjutsu: gastando 10 chakra (cumulativa com outras moldagens), se o Fuinjutsu normalmente teria como alvo uma criatura, você pode fazê-lo atingir todas as criaturas à sua escolha a até 9 metros do alvo original." },
      ],
    },
    {
      key: "triturador-de-pedra",
      nome: "Triturador de Pedra",
      classeKey: "especialista-ninjutsu",
      descricaoIntro: "O Especialista em Ninjutsu que escolhe se tornar um Triturador de Pedra torna-se uma força inabalável de poder, destruição devastadora e resistência de montanha ao usar o Ninjutsu de Liberação de Terra.",
      features: [
        { nivel: 2, nome: "Estilo Terra", descricao: "Quando você escolhe esta tradição no 2º nível, ganha a habilidade de aprender ninjutsu com a palavra-chave Liberação da Terra. Se já pode fazer isso, aprende 2 ninjutsu adicionais para os quais se qualifica, um dos quais pode ser Rank C ou inferior. Ganha +1d6 em testes de Ninshou relacionados e pode aprendê-lo/criá-lo na metade do tempo. Ao lançar esse ninjutsu, uma vez por lançamento: uma vez por turno, ganha Redução de Dano (exceto Raio/Psíquico) igual à graduação do jutsu até o início do próximo turno (D:2, C:4, B:6, A:8, S:10); ou, uma vez por conjuração, construtos/estruturas invocados ganham +2d4 PV (2d6 no 10º nível, 2d8 no 18º)." },
        { nivel: 2, nome: "Adepto de Pedra", descricao: "Além disso, no 2º nível, seus PV máximos aumentam em 2, e mais 1 a cada nível ganho nesta classe. Uma vez por turno, quando você ou um constructo receber dano, você manifesta uma Gema Sólida (até 5, durando até 1 minuto ou até serem gastas). Ao lançar um Ninjutsu de Liberação de Terra, pode gastar qualquer número de gemas e escolher um efeito: +4 PV temporários por gema gasta; ou, se o jutsu invocar um construto que intercepte dano, ele ganha +2 RD por gema (máx. 8 RD)." },
        { nivel: 6, nome: "Égide da Montanha", descricao: "A partir do 6º nível, ao lançar um Ninjutsu de Liberação de Terra, você pode conceder a um aliado (não você) a até 18 metros uma égide: reduz o dano sofrido pela metade do seu nível de Especialista em Ninjutsu, terminando após a primeira instância de dano. Usável duas vezes por descanso." },
        { nivel: 6, nome: "Técnica da Placa Tectônica", descricao: "Também no 6º nível, você aprende a moldagem eficiente exclusiva Placas Tectônicas (Custo Alternativo 5, cumulativa com outras moldagens). Criaturas afetadas fazem teste de resistência de Força, ficando machucadas em falha (ou ganhando 1 grau, se o jutsu já forçasse teste de resistência). Se a criatura for Demônio, Monstruosidade ou Morto-Vivo, perde resistência e imunidade aos efeitos do jutsu." },
        { nivel: 10, nome: "Tenacidade das Pedras", descricao: "A partir do 10º nível, Ninjutsu de Liberação de Terra beneficiados pelo Ninjutsu Refinado ganham um destes benefícios (um por lançamento): PV temporários iguais à graduação do jutsu até o início do próximo turno (D:10, C:20, B:30, A:40, S:50, cumulativo com Gema Sólida); construtos/estruturas/efeitos concedidos tratam acertos críticos como normais e ignoram dano adicional por serem construto/estrutura/PVT; ou, ao iniciar confronto contra jutsu de Liberação de Relâmpago, o usuário do jutsu de relâmpago não rola com vantagem." },
        { nivel: 14, nome: "Mestre do Estilo Terra", descricao: "A partir do 14º nível, Égide da Montanha pode proteger até três criaturas de uma vez. Ao lançar um Jutsu de Liberação de Terra beneficiado pelo Ninjutsu Refinado, pode dobrar seu custo para dobrar o alcance e fazer o terreno afetado custar 3x o movimento normal (você ignora esse custo). Ninjutsu de Liberação de Terra que gera Estrutura/construto/criatura dobra seus PV ou redução de dano (à escolha), duas vezes por descanso longo." },
        { nivel: 18, nome: "Técnica de Triturador de Pedra", descricao: "A partir do 18º nível, você aprende a moldagem definitiva de Liberação de Terra: gastando 10 chakra (cumulativa com outras moldagens), o dado de dano aumenta em 1 passo e concede aos lançadores resistência ao dano causado pelas criaturas afetadas até o início do próximo turno." },
      ],
    },
    {
      key: "tempestade-do-terror",
      nome: "Tempestade do Terror",
      classeKey: "especialista-ninjutsu",
      descricaoIntro: "O Especialista em Ninjutsu que escolhe se tornar uma Tempestade do Terror torna-se um desastre natural implacável, de destruição colateral incomparável, ao usar o Ninjutsu de Liberação de Vento.",
      features: [
        { nivel: 2, nome: "Liberação do Vento", descricao: "Quando você escolhe esta tradição no 2º nível, ganha a habilidade de aprender ninjutsu com a palavra-chave Liberação de Vento. Se já pode fazer isso, aprende 2 ninjutsu adicionais para os quais se qualifica, um dos quais pode ser Rank C ou inferior. Ganha +1d6 em testes de Ninshou relacionados e pode aprendê-lo/criá-lo na metade do tempo. Ao lançar esse ninjutsu, uma vez por lançamento: aumenta o alcance de jutsu com alcance mínimo de 1,5m conforme o Rank (D:+10, C:+20, B:+30, A:+40, S:+50); ou, uma vez por conjuração, aumenta a área de efeito em +1,5m (+10 no 10º nível, +15 no 18º)." },
        { nivel: 2, nome: "Adeptado ao Vento", descricao: "Além disso, no 2º nível, uma vez por turno, ao lançar um jutsu de Liberação de Vento, você pode marcar uma criatura afetada com uma Marca de Brisa (até 5, durando até 1 minuto ou até serem esgotadas). Uma vez por turno, ao causar dano de vento a uma criatura marcada, pode ativar todas as marcas, concedendo 1 grau de sangramento por marca." },
        { nivel: 6, nome: "Arauto da Tempestade", descricao: "A partir do 6º nível, ao usar um Ninjutsu de Liberação de Vento, ele aciona todas as condições elementares e físicas que a criatura possui, causando o dano listado de cada uma, se houver. Usável duas vezes por descanso." },
        { nivel: 6, nome: "Técnica Redemoinho", descricao: "Também no 6º nível, você aprende a moldagem eficiente exclusiva Técnica Redemoinho (Custo Alternativo 5, cumulativa com outras moldagens). Criaturas afetadas com condição elemental ou física que possa ter mais de 1 pilha ganham uma pilha adicional." },
        { nivel: 10, nome: "Vendaval Imparável", descricao: "A partir do 10º nível, Ninjutsu de Liberação de Vento beneficiados pelo Ninjutsu Refinado ganham um destes benefícios (um por lançamento): dano dobrado contra criaturas voadoras ou levitantes; ganha deslocamento de voo igual ao seu até o início do próximo turno; ou, ao iniciar confronto contra jutsu de Liberação de Fogo, o usuário do jutsu de fogo não ganha vantagem." },
        { nivel: 14, nome: "Mestre de Liberação de Vento", descricao: "A partir do 14º nível, ao usar Arauto da Tempestade, você dobra o dano das condições acionadas. Ao lançar um Jutsu de Liberação de Vento beneficiado pelo Ninjutsu Refinado, pode dobrar seu custo para dobrar o alcance e, se exigir teste de resistência, dobrar o dano se o alvo falhar por 5+ (duas vezes por descanso longo)." },
        { nivel: 18, nome: "Técnica de Tempestade do Terror", descricao: "A partir do 18º nível, você aprende a moldagem definitiva de Liberação de Vento: gastando 10 chakra (cumulativa com outras moldagens), todas as criaturas afetadas ganham 5 graduações da condição Sangramento." },
      ],
    },
    {
      key: "invocador",
      nome: "Invocador",
      classeKey: "especialista-ninjutsu",
      descricaoIntro: "O Especialista em Ninjutsu que escolhe esta Tradição para se tornar um Invocador percorre o caminho mais próximo do Sábio, formando laços com feras Sábias por toda a terra. São conhecidos por ter uma ampla gama de jutsu aprendidos com as próprias criaturas sábias.",
      features: [
        { nivel: 2, nome: "Convocação Fortalecida", descricao: "Quando você escolhe esta tradição no 2º nível, aprende a Técnica de Invocação Ninjutsu, com custo reduzido em valor igual ao Rank em que é lançada (D:1, C:2, B:3, A:4, S:5). Ganha +1d6 em testes de Ninshou relacionados a Fuinjutsu e pode aprender Ninjutsu de invocação na metade do tempo. Quando sua criatura invocada lançar um jutsu, uma vez por lançamento: duas vezes por lançamento, ela ganha +1 (+2 no 10º, +3 no 18º) nas jogadas de ataque de Jutsu quando ataca; ou, uma vez por conjuração, você pode gastar 1 dado de chakra no lugar de um espaço de Jutsu dela." },
        { nivel: 2, nome: "Invocadores Vão", descricao: "Além disso, no 2º nível, suas criaturas invocadas não podem ser dissipadas e ganham o benefício de ambas as Funções pelas quais sua tribo é conhecida (ver Compêndio de Jiraiya). Você pode gastar 1 dado de Chakra para recarregar um espaço de Jutsu gasto de sua criatura invocada, um número de vezes igual ao seu bônus de proficiência por descanso longo." },
        { nivel: 6, nome: "Invocando Adepto", descricao: "A partir do 6º nível, a Técnica de Invocação torna-se um de seus Ninjutsu Refinados (se ainda não fosse); as criaturas invocadas ganham os benefícios do Ninjutsu Refinado em todo o jutsu que conhecem, e Slots de Jutsu adicionais iguais à CD de salvamento concedida. Você pode lançar a Técnica de Invocação como ação (em vez de ação de turno completo) para invocar criaturas de Rank C ou inferior; Rank B a partir do 10º nível; Rank A a partir do 18º. Usável duas vezes por descanso (usos adicionais custam 1 dado de chakra)." },
        { nivel: 6, nome: "Técnica de Combinação", descricao: "Também no 6º nível, você aprende a moldagem eficiente exclusiva Técnica de Combinação (Custo Alternativo 5, cumulativa com outras moldagens). Você e sua criatura invocada podem se ajudar em jutsu com a palavra-chave Combinação independentemente de restrições de palavra-chave, tratando o modificador de Carisma de quem ajuda como +1 maior para fins de aprimorar o jutsu combinado." },
        { nivel: 10, nome: "Especialista em Convocação", descricao: "A partir do 10º nível, você pode invocar e manter até duas criaturas simultaneamente (ambas até 36 metros de você); comandar a segunda no seu turno exige ação ou reação, não ação bônus, e ela não pode ser do mesmo Rank da primeira. Suas criaturas invocadas podem ter qualquer combinação de duas Funções do capítulo de Invocação, mesmo as que normalmente não teriam." },
        { nivel: 14, nome: "Mestre de Invocação", descricao: "A partir do 14º nível, sua criatura invocada age na iniciativa logo após você e ganha uma ação bônus própria (comandável como sua ação, sem acumular com outras ações bônus). Ela pode executar qualquer jutsu de Rank C ou inferior que você conheça, independentemente das palavras-chave. Ao lançar um Jutsu com a palavra-chave Combinação, se sua criatura ainda não agiu, ela pode participar sem gastar reação." },
        { nivel: 18, nome: "Técnica de Sincronização", descricao: "A partir do 18º nível, você aprende a moldagem definitiva de Combinação: gastando 10 chakra (cumulativa com outras moldagens), todas as criaturas aliadas a até 18 metros e sua criatura invocada podem ajudar a lançar um jutsu combinado independentemente de restrições de palavra-chave, e seu modificador de Carisma é tratado como +3 maior para fins de aprimorar o jutsu." },
      ],
    },
    {
      key: "professor",
      nome: "O Professor",
      classeKey: "especialista-ninjutsu",
      descricaoIntro: "Os Especialistas em Ninjutsu que trilham o caminho do Professor buscam versatilidade e domínio elementar. Apenas um outro shinobi percorreu esse caminho até o auge — ficou conhecido como o Deus dos Shinobi, tendo superado sua e todas as gerações anteriores.",
      features: [
        { nivel: 2, nome: "Lançamento Versátil", descricao: "Quando você escolhe esta tradição no 2º nível, ganha a habilidade de aprender ninjutsu com uma palavra-chave de Liberação de Natureza (Terra, Vento, Fogo, Água ou Relâmpago) à qual ainda não tenha acesso. Ganha +1d4 em testes de Ninshou relacionados a essas liberações. Ao lançar um ninjutsu com qualquer liberação que conheça, uma vez por lançamento: duas vezes por lançamento, +1 (+2 no 10º, +3 no 18º) nas jogadas de ataque de Ninjutsu contra criaturas com graduações de condição Elemental; ou, uma vez por lançamento, ignora redução de dano do alvo igual ao Rank (D:2, C:4, B:6, A:8, S:10)." },
        { nivel: 2, nome: "Adepto Elemental", descricao: "Além disso, no 2º nível, uma vez por turno, ao lançar um Ninjutsu com palavra-chave de Liberação de Natureza, você armazena um Mote Elemental (até 5, durando até 1 minuto ou até serem gastos). Ao lançar esse tipo de jutsu, pode gastar qualquer número de motes (sem ganhar mais no mesmo turno) e escolher um efeito: -1 nos testes de resistência do alvo a cada 2 motes gastos; ou reduz o custo do jutsu em 2 Chakra por mote (até 3 motes)." },
        { nivel: 6, nome: "Elenco Gêmeo", descricao: "A partir do 6º nível, você aprende uma Liberação de Natureza adicional (diferente da escolhida em Lançamento Versátil) e ganha bônus de iniciativa igual ao seu modificador de Inteligência. Como ação, pode gastar 5 Motes Elementais para lançar dois ninjutsu com liberações de natureza diferentes na mesma ação, duas vezes por descanso longo." },
        { nivel: 6, nome: "Técnica de Infusão de Chakra", descricao: "Também no 6º nível, você aprende a moldagem eficiente exclusiva Infusão de Chakra (Custo Alternativo 5, cumulativa com outras moldagens). O ninjutsu ganha todas as palavras-chave de Liberação de Natureza às quais você tem acesso e causa +1d10 de dano por palavra-chave possuída, no tipo de dano afiliado (Água=Frio)." },
        { nivel: 10, nome: "Força da Natureza", descricao: "A partir do 10º nível, Ninjutsu com qualquer Liberação de Natureza que você conheça, beneficiados pelo Ninjutsu Refinado, ganham um destes benefícios (um por lançamento): +1 Mote Elemental (uma vez por rodada); +dano igual ao seu bônus de proficiência; ou, se perder um Confronto, pode gastar reação para rolar o d20 novamente." },
        { nivel: 14, nome: "Soshikage", descricao: "A partir do 14º nível, você aprende uma terceira Liberação de Natureza (diferente das já escolhidas). Ao usar sua ação para lançar um ninjutsu com Liberação de Natureza, pode lançar dois jutsu com liberações diferentes (tempo de lançamento 1 Ação) como ação bônus, duas vezes por descanso longo. Ao gastar 5 Motes Elementais de uma vez para fortalecer um jutsu, adiciona o triplo do seu modificador de habilidade ao dano." },
        { nivel: 18, nome: "A Lição Final", descricao: "A partir do 18º nível, você aprende a moldagem definitiva para lançar dois ninjutsu com liberações de natureza diferentes na mesma ação: gastando 10 chakra (cumulativa com outras moldagens), ambos os jutsu ganham os benefícios de qualquer moldagem usada, desde que aplicável." },
      ],
    },
    {
      key: "tracar-talento",
      nome: "Traçar Talento",
      classeKey: "especialista-ninjutsu",
      descricaoIntro: "Os Especialistas em Ninjutsu que seguem o caminho dos \"Tracers\" são prodígios sem treinamento formal em técnicas elementares, dominando o jutsu sem elementos com grande efeito — nível de poder igual ou, em alguns casos, superior ao ninjutsu elemental.",
      features: [
        { nivel: 2, nome: "Especialização Anulada", descricao: "Quando você escolhe esta tradição no 2º nível, aprende dois ninjutsu sem palavra-chave de Liberação de Natureza para os quais se qualifica (um pode ser Rank C). Ganha +1d6 em testes de Ninshou relacionados. Ao lançar um ninjutsu sem liberação de natureza, uma vez por lançamento: impõe penalidade ao teste de concentração igual ao Rank (D:2, C:4, B:6, A:8, S:10); ou impõe a mesma penalidade a testes de confronto." },
        { nivel: 2, nome: "Adepto Anulado", descricao: "Também no 2º nível, uma vez por turno, ao lançar um ninjutsu sem liberação de natureza, você ganha um Fragmento do Vazio (até 5, durando até 1 minuto ou até serem gastos). Ao lançar esse tipo de jutsu, escolha um efeito: gastando 2 Fragmentos, converte todo o dano em dano de Chakra; aumenta em 5 o custo do próximo jutsu do alvo por Fragmento gasto; ou reduz em 1 o custo de manutenção a cada 2 Fragmentos gastos." },
        { nivel: 6, nome: "Conjuração Ilimitada", descricao: "A partir do 6º nível, ao atingir uma criatura hostil com condição ativa usando um Ninjutsu sem liberação de natureza, você pode, como parte do mesmo lançamento, lançar um segundo Ninjutsu de Rank C ou inferior sem liberação de natureza (metade do custo) no mesmo alvo. Usável duas vezes por descanso (usos adicionais custam 1 dado de chakra)." },
        { nivel: 6, nome: "Técnica de Quebra de Vazio", descricao: "Também no 6º nível, você aprende a moldagem eficiente exclusiva Quebra de Vazio (Custo Alternativo 5, cumulativa com outras moldagens). Criaturas à sua escolha a até 3 metros de você ou do alvo fazem teste de Constituição; em falha, sofrem dano de Chakra igual ao dobro do custo do jutsu e não podem moldar chakra até o fim do próximo turno; em sucesso, metade do dano sem efeito adicional." },
        { nivel: 10, nome: "Chakra Puro", descricao: "A partir do 10º nível, Ninjutsu sem liberação de natureza beneficiados pelo Ninjutsu Refinado ganham um destes benefícios (um por lançamento): remove resistências do alvo ao seu tipo de dano até o início do próximo turno; +dano igual ao seu bônus de proficiência; ou vantagem ao iniciar confronto com o jutsu escolhido." },
        { nivel: 14, nome: "Kiyo", descricao: "A partir do 14º nível, ao usar Conjuração Ilimitada para lançar dois jutsu, o segundo não custa nada. Ao lançar um Ninjutsu sem liberação de natureza, pode dobrar seu custo para dar vantagem a aliados a até 18 metros no próximo teste de resistência contra Ninjutsu ou Genjutsu, antes do fim do próximo turno deles. Criaturas que tentam anular/negar/dissipar um ninjutsu seu sem liberação de natureza fazem esse teste em desvantagem." },
        { nivel: 18, nome: "Anular Talentos", descricao: "A partir do 18º nível, você aprende a moldagem definitiva para ninjutsu sem liberação de natureza: gastando 10 chakra (cumulativa com outras moldagens), o jutsu causa dano de chakra igual ao dano inicial e todas as criaturas afetadas fazem teste de Constituição, perdendo a capacidade de moldar chakra por 1d4+1 turnos em falha." },
      ],
    },
    {
      key: "tsunami",
      nome: "Tsunami",
      classeKey: "especialista-ninjutsu",
      descricaoIntro: "O Especialista em Ninjutsu que escolhe se tornar um Tsunami incorpora a força de tal evento — abrangente como um oceano — ao usar o Ninjutsu de Liberação de Água.",
      features: [
        { nivel: 2, nome: "Estilo Água", descricao: "Quando você escolhe esta tradição no 2º nível, ganha a habilidade de aprender ninjutsu com a palavra-chave Liberação de Água. Se já pode fazer isso, aprende 2 ninjutsu adicionais para os quais se qualifica, um dos quais pode ser Rank C ou inferior. Ganha +1d6 em testes de Ninshou relacionados e pode aprendê-lo/criá-lo na metade do tempo. Ao lançar esse ninjutsu, uma vez por lançamento: gera uma fonte de água usável para Ninjutsu de Liberação de Água; ou reduz a velocidade de criaturas afetadas conforme o Rank (D:-10, C:-15, B:-20, A:-25, S:-30)." },
        { nivel: 2, nome: "Adeptado à Água", descricao: "Além disso, no 2º nível, uma vez por turno, ao lançar um jutsu de Liberação de Água, você manifesta uma Lâmina de Chuva (até 5, durando até 1 minuto ou até serem esgotadas). Ao lançar um Ninjutsu de Liberação de Água, pode gastar qualquer número de lâminas (sem ganhar mais no mesmo turno): uma vez por lançamento, ao lançar um jutsu como reação, ganha +4 RD (exceto Terra e Psíquico) por lâmina até o fim do turno; a cada 2 lâminas gastas ao causar dano, o alvo ganha 1 grau de Resfriado; ou, ao causar dano de frio, move o alvo 5 pés por lâmina gasta em qualquer direção." },
        { nivel: 6, nome: "Frígido Profundo", descricao: "A partir do 6º nível, ao usar um Ninjutsu de Liberação de Água, pode forçar criaturas afetadas à sua escolha a reduzir a velocidade pela metade até o fim do próximo turno delas. Usável duas vezes por descanso." },
        { nivel: 6, nome: "Vórtice Chuvoso", descricao: "Também no 6º nível, você aprende a moldagem eficiente exclusiva Vórtice Chuvoso (Custo Alternativo 5, cumulativa com outras moldagens). Criaturas afetadas que falhariam em teste de resistência de outro Jutsu com Liberação de Natureza antes do fim do próximo turno sofrem um efeito adicional (uma vez por rodada): Terra=machucada; Vento=velocidade reduzida em 3m por 1d6 turnos; Fogo=enfraquecida; Água=1 grau de Resfriado; Relâmpago=1 grau de chocado." },
        { nivel: 10, nome: "Alma Aqua", descricao: "A partir do 10º nível, Ninjutsu de Liberação de Água beneficiados pelo Ninjutsu Refinado ganham um destes benefícios (um por lançamento): cria uma fonte de água usável duas vezes para ninjutsu de água de Rank B ou inferior; +dano igual ao seu bônus de proficiência; ou, ao iniciar confronto contra jutsu de Liberação de Terra, o usuário do jutsu de terra não ganha vantagem." },
        { nivel: 14, nome: "Mestre do Estilo Água", descricao: "A partir do 14º nível, ao usar Frígido Profundo, a velocidade reduzida vai a 0. Ao lançar um Jutsu de Liberação de Água que force teste de resistência, beneficiado pelo Ninjutsu Refinado, pode dobrar seu custo para fazer todas as criaturas afetadas rolarem 2d20 adicionais no teste, usando o menor resultado (duas vezes por descanso longo). Ninjutsu de Liberação de Água que exigem teste de resistência nunca podem ser feitos com vantagem pelo alvo." },
        { nivel: 18, nome: "Técnica do Tsunami", descricao: "A partir do 18º nível, você aprende a moldagem definitiva de Liberação de Água: gastando 10 chakra (cumulativa com outras moldagens), todas as criaturas afetadas ganham 2 graduações de Resfriado e não podem lançar Taijutsu ou Bukijutsu que exijam o componente de Mobilidade (M) até o fim do próximo turno." },
      ],
    },
  ],
};
