import type { ClassProgressionDefinition } from "@/lib/classProgression/types";

/**
 * Progressão completa do Ninja Médico — "Observações do Orochimaru" (compêndio
 * de Classes), p.87-101. Complementa o resumo em catalog/classes.ts com a
 * tabela nível-a-nível (1-20), as características por extenso e as 6
 * subclasses ("Princípios da Medicina", escolhidos no 2º nível).
 *
 * Notas de divergência entre a tabela impressa e o texto corrido do livro
 * (mantidas como estão na fonte, sem tentar "corrigir" um lado pelo outro):
 * - Nível 10/14: a tabela chama a característica de "Curador Talentoso", o
 *   texto corrido usa "Curador Dotado".
 * - Nível 16: "Especialização (3)" não corresponde a nenhuma característica
 *   nomeada encontrada no texto corrido.
 * - Nível 17: a tabela repete "Princípios da Medicina (4)" (já usado no
 *   nível 13); pela progressão esperava-se "(5)".
 */
export const progressaoNinjaMedico: ClassProgressionDefinition = {
  classeKey: "ninja-medico",
  nomeGrupoSubclasse: "Princípios da Medicina",
  nivelEscolhaSubclasse: 2,

  levels: [
    { nivel: 1, bonusProficiencia: 3, caracteristicas: "Ninjutsu Médico, Descanso Rejuvenescedor",
      colunasExtras: { "Cura Canalizada": "-", "Cargas do Bisturi de Chakra": "-", "Dano do Bisturi de Chakra": "-", "Jutsu Conhecidos": "6", "Rank Máximo do Jutsu": "Rank-D" } },
    { nivel: 2, bonusProficiencia: 3, caracteristicas: "Cura Canalizada, Princípios da Medicina",
      colunasExtras: { "Cura Canalizada": "+2", "Cargas do Bisturi de Chakra": "-", "Dano do Bisturi de Chakra": "-", "Jutsu Conhecidos": "7", "Rank Máximo do Jutsu": "Rank-D" } },
    { nivel: 3, bonusProficiencia: 3, caracteristicas: "Bisturi Chakra, Doutrina Médica",
      colunasExtras: { "Cura Canalizada": "+2", "Cargas do Bisturi de Chakra": "3", "Dano do Bisturi de Chakra": "1d4", "Jutsu Conhecidos": "8", "Rank Máximo do Jutsu": "Rank-D" } },
    { nivel: 4, bonusProficiencia: 4, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Cura Canalizada": "+2", "Cargas do Bisturi de Chakra": "4", "Dano do Bisturi de Chakra": "1d4", "Jutsu Conhecidos": "9", "Rank Máximo do Jutsu": "Rank-D" } },
    { nivel: 5, bonusProficiencia: 4, caracteristicas: "Princípios da Medicina (2), Preservar/Tirar Vida",
      colunasExtras: { "Cura Canalizada": "+2", "Cargas do Bisturi de Chakra": "4", "Dano do Bisturi de Chakra": "1d4", "Jutsu Conhecidos": "10", "Rank Máximo do Jutsu": "Rank-C" } },
    { nivel: 6, bonusProficiencia: 4, caracteristicas: "Pesquisa Médica Avançada",
      colunasExtras: { "Cura Canalizada": "+4", "Cargas do Bisturi de Chakra": "4", "Dano do Bisturi de Chakra": "2d4", "Jutsu Conhecidos": "11", "Rank Máximo do Jutsu": "Rank-C" } },
    { nivel: 7, bonusProficiencia: 5, caracteristicas: "Bisturi Chakra (2)",
      colunasExtras: { "Cura Canalizada": "+4", "Cargas do Bisturi de Chakra": "5", "Dano do Bisturi de Chakra": "2d4", "Jutsu Conhecidos": "12", "Rank Máximo do Jutsu": "Rank-C" } },
    { nivel: 8, bonusProficiencia: 5, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Cura Canalizada": "+4", "Cargas do Bisturi de Chakra": "5", "Dano do Bisturi de Chakra": "2d4", "Jutsu Conhecidos": "13", "Rank Máximo do Jutsu": "Rank-C" } },
    { nivel: 9, bonusProficiencia: 5, caracteristicas: "Princípios da Medicina (3)",
      colunasExtras: { "Cura Canalizada": "+4", "Cargas do Bisturi de Chakra": "5", "Dano do Bisturi de Chakra": "2d4", "Jutsu Conhecidos": "14", "Rank Máximo do Jutsu": "Rank-B" } },
    { nivel: 10, bonusProficiencia: 6, caracteristicas: "Curador Talentoso",
      colunasExtras: { "Cura Canalizada": "+4", "Cargas do Bisturi de Chakra": "6", "Dano do Bisturi de Chakra": "3d4", "Jutsu Conhecidos": "15", "Rank Máximo do Jutsu": "Rank-B" } },
    { nivel: 11, bonusProficiencia: 6, caracteristicas: "Bisturi Chakra (3)",
      colunasExtras: { "Cura Canalizada": "+8", "Cargas do Bisturi de Chakra": "6", "Dano do Bisturi de Chakra": "3d4", "Jutsu Conhecidos": "16", "Rank Máximo do Jutsu": "Rank-B" } },
    { nivel: 12, bonusProficiencia: 6, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Cura Canalizada": "+8", "Cargas do Bisturi de Chakra": "6", "Dano do Bisturi de Chakra": "3d4", "Jutsu Conhecidos": "17", "Rank Máximo do Jutsu": "Rank-B" } },
    { nivel: 13, bonusProficiencia: 7, caracteristicas: "Doutrina Médica (2), Princípios da Medicina (4)",
      colunasExtras: { "Cura Canalizada": "+8", "Cargas do Bisturi de Chakra": "7", "Dano do Bisturi de Chakra": "3d4", "Jutsu Conhecidos": "18", "Rank Máximo do Jutsu": "Rank-A" } },
    { nivel: 14, bonusProficiencia: 7, caracteristicas: "Curador Talentoso (2)",
      colunasExtras: { "Cura Canalizada": "+8", "Cargas do Bisturi de Chakra": "7", "Dano do Bisturi de Chakra": "4d4", "Jutsu Conhecidos": "19", "Rank Máximo do Jutsu": "Rank-A" } },
    { nivel: 15, bonusProficiencia: 7, caracteristicas: "–",
      colunasExtras: { "Cura Canalizada": "+8", "Cargas do Bisturi de Chakra": "7", "Dano do Bisturi de Chakra": "4d4", "Jutsu Conhecidos": "20", "Rank Máximo do Jutsu": "Rank-A" } },
    { nivel: 16, bonusProficiencia: 8, caracteristicas: "Melhoria/talento na pontuação de habilidade, Especialização (3)",
      colunasExtras: { "Cura Canalizada": "+12", "Cargas do Bisturi de Chakra": "8", "Dano do Bisturi de Chakra": "4d4", "Jutsu Conhecidos": "21", "Rank Máximo do Jutsu": "Rank-A" } },
    { nivel: 17, bonusProficiencia: 8, caracteristicas: "Princípios da Medicina (4)",
      colunasExtras: { "Cura Canalizada": "+12", "Cargas do Bisturi de Chakra": "8", "Dano do Bisturi de Chakra": "4d4", "Jutsu Conhecidos": "22", "Rank Máximo do Jutsu": "Rank-S" } },
    { nivel: 18, bonusProficiencia: 8, caracteristicas: "Bisturi Chakra (4)",
      colunasExtras: { "Cura Canalizada": "+12", "Cargas do Bisturi de Chakra": "8", "Dano do Bisturi de Chakra": "5d4", "Jutsu Conhecidos": "23", "Rank Máximo do Jutsu": "Rank-S" } },
    { nivel: 19, bonusProficiencia: 9, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Cura Canalizada": "+12", "Cargas do Bisturi de Chakra": "9", "Dano do Bisturi de Chakra": "5d4", "Jutsu Conhecidos": "24", "Rank Máximo do Jutsu": "Rank-S" } },
    { nivel: 20, bonusProficiencia: 9, caracteristicas: "Curador Supremo",
      colunasExtras: { "Cura Canalizada": "+12", "Cargas do Bisturi de Chakra": "9", "Dano do Bisturi de Chakra": "5d4", "Jutsu Conhecidos": "25", "Rank Máximo do Jutsu": "Rank-S" } },
  ],

  features: [
    {
      nivel: 1,
      nome: "Ninjutsu Médico",
      descricao: "Começando no 1º nível, como Ninja Médico você ganha a habilidade de aprender qualquer jutsu com a Palavra-chave Médica. Jutsu que você lança com a palavra-chave Médica pode usar Sabedoria para suas jogadas de ataque e dano, bem como cálculo de CD de Salvamento. Finalmente, os testes de Medicina que você fizer podem usar Inteligência ou Sabedoria.",
    },
    {
      nivel: 1,
      nome: "Descanso Rejuvenescedor",
      descricao: "Além disso, no nível 1 você usa suas habilidades médicas para revitalizar aliados feridos durante um breve descanso. Quando você ou qualquer criatura aliada que você possa tocar recupera pontos de vida no final de um descanso curto ou longo, eles recuperam 1d6 pontos de vida extras. Esta quantidade de cura extra aumenta para 2d6 no 7º nível, 3d6 no 11º e 4d6 no 17º nível.",
    },
    {
      nivel: 2,
      nome: "Princípios da Medicina",
      descricao: "A partir do 2º nível, você começa a se concentrar em um Princípio Específico da Medicina que irá aprimorar suas habilidades de apoiar seus aliados. Esses princípios fornecerão recursos adicionais no 2º nível e novamente no 5º, 9º, 13º e 17º níveis.",
    },
    {
      nivel: 2,
      nome: "Cura Canalizada",
      descricao: "Começando no 2º nível, você aprende a aprimorar passivamente seu Jutsu Médico para comprimentos maiores. Sempre que você usar um Jutsu com a palavra-chave médica Rank-D ou superior para restaurar pontos de vida, a criatura afetada recupera +2 pontos de vida adicionais. O bônus de cura que esse recurso oferece aumenta conforme você aumenta de nível, conforme visto na coluna Cura Canalizada da tabela de classes. Este bônus de cura só pode ser aplicado uma vez por turno.\n\nAlém disso, o jutsu com a Palavra-chave Médica que você conjura que restaura pontos de vida ou encerra condições, remove uma falha no teste de resistência contra a morte de uma criatura afetada, se houver. Você pode remover testes de resistência contra a morte que falharam desta forma um número de vezes igual ao seu bônus de proficiência por descanso longo.",
    },
    {
      nivel: 3,
      nome: "Bisturi Chakra",
      descricao: "A partir do 3º nível, você aprendeu a manifestar a técnica característica de um ninja médico, o Bisturi de Chakra. Como ação bônus, você cobre suas mãos com lâminas de Chakra altamente condensadas, projetadas para cortar músculos e carne com eficiência cirúrgica por um minuto, durante o combate, ou 1 hora, enquanto não estiver em combate. Independentemente da duração aplicada, enquanto você tiver o bisturi de Chakra ativo, você pode adicionar seu modificador de Sabedoria a todas as curas feitas como resultado de um Jutsu com a palavra-chave médica. Você só pode ativar esse recurso 3 vezes por descanso longo, você ganha usos adicionais à medida que ganha níveis nesta classe, como visto na coluna de cargas do bisturi de Chakra da tabela de classes Medical-Nin.\n\nEnquanto estiver em combate. Enquanto você executa a ação de ataque, você pode substituir os ataques concedidos com essa ação por um ataque de ninjutsu corpo a corpo, como se estivesse lançando um ninjutsu médico. Este ataque causa 1d4 + seu modificador de habilidade de sabedoria em dano cortante. Este dano aumenta em uma quantidade listada na coluna Bisturi de Chakra da tabela de classe Medical-Nin.\n\n• A partir do 7º nível, quando você causa dano com o bisturi de Chakra, a criatura alvo deve realizar um teste de resistência de constituição, como se estivesse lançando um Ninjutsu com a palavra-chave médica. Se falhar na resistência, as criaturas ganham uma graduação na condição enfraquecida.\n\n• A partir do 11º nível, quando você causaria dano a uma criatura com pontos de vida temporários com o bisturi de Chakra, você ignora os pontos de vida temporários, em vez de reduzir diretamente seus pontos de vida.\n\n• Finalmente, no 18º nível, se falhar na resistência, o alvo também ganha a condição Lacerado.\n\nEnquanto estiver fora de combate. Enquanto você faria um teste de Medicina para estabilizar uma criatura, você ganha um bônus de +5 no resultado.\n\n• A partir do 7º nível você pode gastar um uso do seu Bisturi de Chakra para encerrar automaticamente uma Condição Não-Jutsu.\n\n• A partir do 11º nível, o bônus de +5 é aumentado para um bônus de +10 feito para estabilizar uma criatura.\n\n• Finalmente, no 18º nível, você pode usar seu Bisturi de Chakra para acabar com qualquer condição que uma criatura esteja sofrendo, independentemente de sua origem.",
    },
    {
      nivel: 3,
      nome: "Doutrina Médica",
      descricao: "A partir do 3º nível, sua experiência em jutsu médico ascendeu a um ponto em que seu jutsu começou a ser lentamente infundido com essas crenças, tornando-as mais fortes e vice-versa. Selecione uma das seguintes doutrinas nas quais você ganha os efeitos ou habilidades das doutrinas listadas. Você pode selecionar uma segunda Doutrina quando atingir o 13º nível. Você não pode alterar esta escolha feita.\n\nLONGA VIDA, CURTA MORTE\nVocê acredita que seus pacientes deveriam se beneficiar de uma vida muito mais longa, mas quando estiverem morrendo, não deveriam atrasar o processo mais do que o necessário. Quando você curaria os pontos de vida de uma criatura, em qualquer quantidade ela ganha pontos de vida temporários em uma quantidade igual à classificação do jutsu lançado. Uma criatura só pode ganhar pontos de vida temporários desta forma duas vezes por descanso. (Rank D: 5, Rank C: 10, Rank B: 15, Rank A: 20, Rank S: 25.)\n\nNUNCA NA LINHA DE FRENTE\nVocê acredita profundamente que os ninjas médicos não pertencem à linha de frente, assim como seu mestre ou mentor. Sempre que você estiver a até 3 metros de uma criatura hostil, você pode realizar ações de avanço ou desengajamento como uma ação bônus.\n\nNÃO É PERMITIDO MORRER\nVocê acredita que as mortes médicas de shinobi deveriam ser a última coisa a acontecer no campo de batalha. Contanto que outra criatura aliada tenha iniciativa e tenha 1 ou mais pontos de vida, uma vez por descanso, você ignora os efeitos de jutsu, características ou características de criaturas hostis que o matariam automaticamente ou o reduziriam a 0 pontos de vida, em vez disso sendo reduzido a 1 ponto de vida.\n\nATÉ O CORAÇÃO PARAR\nVocê acredita profundamente que o ninja médico deve continuar a administrar cura a todos os membros do grupo, não importa quão terrível ou desesperador seja, até que eles parem de respirar, mesmo contra a vontade de seus aliados. Duas vezes por descanso, uma criatura que não seja você, que recupera pontos de vida como resultado de um jutsu que você conjurou, que está atualmente sob os efeitos de uma condição hostil infligida, faz seu próximo teste de resistência ou teste de perícia para encerrar essa condição com vantagem.",
    },
    {
      nivel: 4,
      nome: "Melhoria/Talento de Pontuação de Habilidade",
      descricao: "Quando você alcança o 4º e novamente o 8º, 12º, 16º e 19º nível, você pode aumentar um valor de habilidade em +1 e um Talento de sua escolha para o qual eles se qualificam. Normalmente, você não pode aumentar um valor de habilidade acima de 20 usando este recurso.",
    },
    {
      nivel: 5,
      nome: "Preservar/Tirar Vida",
      descricao: "A partir do 5º nível você ganhou a experiência necessária para salvar vidas, mesmo aquelas em perigo mortal ou tomá-las, mesmo aquelas que estão mais longe das portas da morte. Você aprende Preservar Vida e Tirar Vida. Alguns Princípios concedem efeitos adicionais conforme você avança nesta classe. Independentemente disso, você pode usar Preservar vida ou Tirar vida duas vezes entre os descansos. Você ganha um uso adicional no 9º, 13º e 17º níveis.\n\nPRESERVAR A VIDA\nComo uma ação, você libera um pulso de Chakra de liberação médica, projetado para proteger as criaturas ao seu redor com energias curativas. Esta energia pode restaurar um número total de pontos de vida igual a 5 vezes o seu nível de Medical Nin e zera a contagem de todos os testes de resistência à morte que falharam. Escolha qualquer número de criaturas a até 9 metros de você e divida esses pontos de vida entre elas. Este recurso não pode restaurar mais do que metade do seu máximo de pontos de vida. Você não pode usar esse recurso em mortos-vivos ou construtos.\n\nTIRAR A VIDA\nQuando você causa dano a uma criatura usando um Jutsu com a palavra-chave médica, você libera energias corrosivas, destinadas a infligir danos horríveis. Selecione uma criatura afetada. Essa criatura sofre dano adicional igual a 5 + duas vezes o seu nível de Médico-Nin.",
    },
    {
      nivel: 6,
      nome: "Pesquisa Médica Avançada",
      descricao: "A partir do 6º nível, seu conhecimento médico é um dos poucos selecionados. Você pode aprender e criar jutsu com a palavra-chave Médica na metade do tempo e sem gastar Ryo para sustentar seu estilo de vida.\n\nAlém disso, você pode reduzir o custo final de Chakra de um jutsu recém-criado com a palavra-chave médica em um valor igual à sua classificação. (Rank D: 1, Rank C: 2, Rank B: 3, Rank A: 4, Rank S: 5)",
    },
    {
      nivel: 10,
      nome: "Curador Dotado",
      descricao: "A partir do 10º nível, seus Jutsu de Cura são mais eficazes. Sempre que você usar um jutsu de Rank C ou inferior para restaurar pontos de vida de uma criatura, você pode selecionar até dois dados de cura lançados e jogá-los novamente, obtendo o resultado mais alto. No 14º nível, você pode selecionar até quatro dados de cura.",
    },
    {
      nivel: 20,
      nome: "Curador Supremo",
      descricao: "No 20º nível você alcançou a perfeição nas artes de cura. Quando você restauraria pontos de vida, ao lançar um jutsu com a palavra-chave médica de classificação B ou inferior em sua classificação base, você pode selecionar até 4 dados de cura lançados e tratá-los como seu resultado máximo.",
    },
  ],

  subclasses: [
    {
      key: "medico-adepto",
      nome: "Médico Adepto",
      classeKey: "ninja-medico",
      descricaoIntro: "Médicos-Nin que seguem o caminho do Adept Medic prometem seu serviço para manter todos vivos, curando todos os ninjas feridos no campo. De longe os mais numerosos Ninja Médico, mas não devem ser subestimados no campo de batalha.",
      features: [
        { nivel: 2, nome: "Sopro de Vida", descricao: "A partir do 2º nível, quando você lançaria um jutsu com a palavra-chave Médica que restaura pontos de vida ou fornece pontos de vida temporários, você adiciona seu modificador de habilidade Ninjutsu ao resultado." },
        { nivel: 2, nome: "Curador Talentoso", descricao: "Além disso, no 2º nível, o jutsu de cura que você lança nos outros cura você também. Quando você conjura um jutsu de Rank-D ou superior que restaura pontos de vida de uma criatura que não seja você, você recupera pontos de vida iguais a 4 + o Rank do Jutsu. (Rank D = 1, Rank C = 2, Rank B = 3, Rank A = 4, Rank S = 5).\n\nA partir do 5º nível, você pode usar o Bisturi de Chakra para realizar uma Cirurgia no próximo minuto. Ao fazer isso, a criatura alvo recupera xd6 onde x = seu bônus de proficiência. Uma criatura na qual você realizou uma cirurgia não pode ser operada por ele mais de duas vezes por descanso completo.\n\nA partir do 9º nível, quando você restauraria os pontos de vida de uma criatura, ela ganha pontos de vida temporários iguais à metade dos pontos de vida que recuperou." },
        { nivel: 5, nome: "Toque de Cura", descricao: "Além disso, no 5º nível, quando você lançaria um Jutsu com a palavra-chave Médica, reduza o custo do jutsu lançado pela classificação do jutsu. (Rank D = 1, Rank C = 2, Rank B = 3, Rank A = 4, Rank S = 5)." },
        { nivel: 5, nome: "Medicina Adequada", descricao: "A partir do 5º nível, você aprende as técnicas necessárias para manter seus aliados vivos a todo custo. Você aprende jutsu adicionais à medida que ganha níveis na classe, cada um concedendo um recurso extra que não conta contra seu Jutsu Conhecido:\n\n5º — Ajuda: a criatura alvo também ganha pontos de vida temporários iguais ao dobro dos pontos de vida máximos aumentados.\n9º — Renascimento: bônus de 1d6 no teste feito para reviver uma criatura usando este jutsu.\n13º — Cura Onda: adicione duas vezes seu bônus de proficiência aos pontos de vida curados de cada criatura.\n17º — Liberação de Água: Chuva de Rancor: este jutsu perde a palavra-chave Liberação de Água e ganha a palavra-chave Médica; restaura 10 pontos de vida no início de todos os turnos das criaturas de sua escolha, em vez de dobrar o custo de Chakra." },
        { nivel: 6, nome: "Preservar a Vida: Reparando a Presença", descricao: "A partir do 6º nível, você pode usar o recurso Preservar Vida um número de vezes adicionais igual à metade do seu bônus de proficiência, por descanso longo." },
        { nivel: 9, nome: "Jutsu Médico Inigualável", descricao: "Começando no 9º nível, criaturas que recuperariam pontos de vida de um Jutsu que você conjurou com a palavra-chave Médica, ou do recurso de classe Descanso Rejuvenescedor, Cura Canalizada ou Curador Dotado, encerram automaticamente quaisquer condições de Rank B ou inferior. Você pode usar esse recurso duas vezes por descanso curto." },
        { nivel: 13, nome: "Ascensão de Cura", descricao: "A partir do 13º nível, quando você recuperaria pontos de vida ou restauraria pontos de vida para outra criatura usando um jutsu ou recurso de classe, você entra em um estado de Ascensão até o final do seu próximo turno. Na próxima vez que sofrer dano, você recupera pontos de vida iguais ao seu nível e então o estado de ascensão termina. Você pode entrar no estado de Ascensão um número de vezes igual ao seu modificador de habilidade de Ninjutsu por descanso longo." },
        { nivel: 17, nome: "Super Cura", descricao: "No 17º nível, quando você restaura os pontos de vida de uma criatura e ela atinge o total de pontos de vida com pontos restantes, a criatura ganha pontos de vida temporários iguais à metade dos pontos de vida restantes que seriam restaurados, adicionais a quaisquer PVT que já tenha. Uma criatura que ganha PVT adicionais desta forma não pode ganhar mais PVT adicionais no próximo minuto." },
      ],
    },
    {
      key: "medicina-negra",
      nome: "Medicina Negra",
      classeKey: "ninja-medico",
      descricaoIntro: "Ninja Médico que seguem o caminho da Medicina Negra concentram-se no aspecto desastroso de como veneno e toxinas podem destruir um inimigo.",
      features: [
        { nivel: 2, nome: "Mãos Contaminadas", descricao: "No 2º nível, quando você causar dano de ácido ou veneno como resultado de um jutsu que você conjurou, um recurso que você usou ou um ataque que você fez, você pode rolar novamente todos os 1 e 2. Você deve fazer o novo lançamento, mesmo que seja 1 ou 2." },
        { nivel: 2, nome: "Toque de Terror", descricao: "Além disso, no 2º nível, quando uma criatura que você pode ver a até 9 metros de você está fazendo um teste de resistência para resistir a um efeito que causa dano de veneno ou inflige a condição envenenado, você pode dar-lhe desvantagem em seu teste de resistência. Você pode fazer isso duas vezes por descanso.\n\nA partir do 5º nível você pode usar o Bisturi de Chakra para aumentar a potência de seus venenos. O próximo jutsu que você lançar ou item que você usar, como um frasco de veneno ou ácido que causa dano de veneno ou ácido, inflige 1 graduação da condição Corroído." },
        { nivel: 5, nome: "Medicina Negra", descricao: "A partir do 5º nível, você aprende jutsu adicionais à medida que ganha níveis na classe, cada um concedendo um recurso extra que não conta contra seu Jutsu Conhecido:\n\n5º — Ninjutsu Médico: Spore Caller: uma criatura que falhe neste teste de resistência também fica surda e envenenada.\n9º — Ninjutsu Médico: Esporos da Ruína: selecione criaturas adicionais que ganhariam pontos de vida iguais ao dano causado.\n13º — Coroa de Estrelas: este jutsu ganha a palavra-chave Médica; se acertar, reduz a Força do alvo em 1d4 enquanto durar (conta como dano venenoso para resistência/imunidade).\n17º — Ninjutsu Médico: Veneno Supremo Divino: esta invocação ganha redução de dano contra todas as fontes de dano, igual ao seu bônus de proficiência mais seu modificador de habilidade Ninjutsu." },
        { nivel: 5, nome: "Toque Venenoso", descricao: "Além disso, no 5º nível, ao fazer um ataque com bisturi de Chakra, você causa dano de veneno e pode fazer um segundo ataque como uma ação bônus. A criatura que você atingir com este ataque deve fazer um teste de resistência de constituição contra a CD de salvamento do seu ninjutsu ou ficar envenenada por 1 minuto. Com cada ataque consecutivo de bisturi de Chakra que atinge a mesma criatura, você aumenta a CD do salvamento de efeitos em +1 para o próximo minuto e aumenta a classificação do envenenado em 1. Uma criatura envenenada faz outro salvamento no final de cada um de seus turnos para encerrar este efeito." },
        { nivel: 6, nome: "Tirar a Vida: Médico da Praga", descricao: "A partir do 6º nível, como uma ação, você libera uma névoa verde em uma das seguintes áreas originárias de você: cone de 15 pés, cubo de 20 pés, linha de 30 pés de comprimento (5 pés de largura). Todas as criaturas na área alvo devem ser bem-sucedidas em um teste de resistência de constituição, como se você tivesse lançado um ninjutsu com a palavra-chave médica. Em falha, as criaturas recebem dano de veneno igual a Xd8 + seu nível de ninja médico e ganham a condição envenenado e 2 graduações da condição envenenado ou corroído pelo próximo minuto (X = seu bônus de proficiência); em sucesso, metade do dano e nenhum efeito adicional." },
        { nivel: 9, nome: "Língua Tóxica", descricao: "A partir do 9º nível, o dano venenoso e ácido que você causa ignora a resistência. Você também sempre sabe onde estão as plantas venenosas e como formular venenos a partir delas na metade do tempo e do custo. Além disso, você ganha resistência a dano de Veneno e imunidade à condição Envenenado." },
        { nivel: 13, nome: "Veneno de Criança", descricao: "A partir do 13º nível, você adiciona seu modificador de habilidade Ninjutsu a todo dano de veneno e ácido que você causa. Além disso, ao lidar dano com veneno ou ácido, você pode usar seu Bisturi de Chakra ou Tirar Vida para dobrar o dado de dano. Se você usar o Bisturi de Chakra e Tirar Vida juntos, poderá optar por dobrar seu dado de dano e maximizar seu dano." },
        { nivel: 17, nome: "Picada Venenosa", descricao: "A partir do 17º nível, quando uma criatura ganharia uma graduação nas condições envenenado ou corroído, ela ganha 1 graduação adicional." },
      ],
    },
    {
      key: "medico-combate",
      nome: "Médico de Combate",
      classeKey: "ninja-medico",
      descricaoIntro: "Os Ninja Médico que se tornam Médicos de Combate prometem estar sempre presentes no campo de batalha como uma das linhas de frente, ajudando seus Aliados a atravessar o caos do campo de batalha, mantendo a si mesmos e a seus aliados vivos até a queda do último homem.",
      features: [
        { nivel: 2, nome: "Competência Marcial", descricao: "Começando no 2º nível, você aprende a lutar com os melhores deles. Você ganha proficiência com Combat Bracers e armaduras pesadas. Você também adota uma postura de combate específica: escolha uma das Posturas de Taijutsu localizadas no Capítulo 13: Opções de Personalização; você não pode assumir uma postura mais de uma vez, mesmo que ganhe uma escolha de postura novamente. Além disso, você pode realizar um ataque desarmado como uma ação bônus." },
        { nivel: 2, nome: "Combatente Competente", descricao: "Também no 2º nível, você pode usar sua Sabedoria no lugar de Destreza ao calcular a Classe de Armadura (CA). Além disso, o dado de dano do seu bisturi de Chakra se torna um d6 e você pode escolher fazer um ataque corpo a corpo de taijutsu no lugar de um ataque de ninjutsu.\n\nQuando você causaria dano com um ataque desarmado, você pode gastar 5 Chakra para dobrar o modificador relevante ao calcular o dano causado. Você pode fazer isso duas vezes por descanso; esse número de usos aumenta em um no 5º, 9º, 13º e 17º níveis.\n\nA partir do 5º nível, você pode usar o Bisturi de Chakra para aumentar seu poder de ataque: seus ataques desarmados, com armas e de taijutsu têm seu alcance de ameaça crítica aumentado em +1 até o final do seu turno (torna-se +2 no 13º nível).\n\nA partir do 9º nível, quando você usaria esse recurso, você poderá triplicar (em vez de dobrar) seu modificador relevante aplicado ao dano causado." },
        { nivel: 5, nome: "Médico de Combate", descricao: "A partir do 5º nível, você aprende jutsu adicionais à medida que ganha níveis na classe, cada um concedendo um recurso extra que não conta contra seu Jutsu Conhecido:\n\n5º — Barragem de Ponto de Pressão: ganha a palavra-chave Médica; pode fazer um segundo ataque de taijutsu, mas se fizer, o jutsu não força teste de resistência nem inflige condições.\n9º — Força da Técnica 100: adicione seu modificador de Força aos ataques desarmados enquanto durar; ao terminar, você não sofre desvantagem em testes nem perde velocidade de movimento, e não perde a concentração deste jutsu por dano.\n13º — Palma do Verdadeiro Rakshasa: ganha a palavra-chave Médica; você não precisa da Palma de Rakshasa ou da Sola de Rakshasa para lançar este jutsu.\n17º — Renascimento da Criação: Força de 1000: ao terminar, você não sofre o choque normal e ganha apenas 1 graduação de Exaustão, ignorando os efeitos da exaustão sobre você durante o período; não perde a concentração deste jutsu por dano." },
        { nivel: 5, nome: "Selo Yin: Carga", descricao: "Além disso, no 5º nível, você começou a armazenar o Chakra de liberação médica em seus músculos, preparando-os para liberá-lo em um único ataque. Esse poder armazenado se manifesta como Motes Yin. Você tem um número de Motes Yin igual ao seu bônus de proficiência por descanso, gastáveis para:\n\n• Ao lançar um jutsu com a palavra-chave médica, gastar 1 mote para, como ação bônus, lançar um Taijutsu de Rank C ou inferior com tempo de lançamento de 1 ação.\n• Ao realizar a ação de ataque, gastar 2 motes para dobrar seu dado de dano desarmado.\n• Ao lançar um Taijutsu que causa dano desarmado, gastar 3 motes para aumentar o jutsu em 1 nível sem custo adicional, ignorando limitações de upcast." },
        { nivel: 6, nome: "Tirar a Vida: Prova de Combate", descricao: "A partir do 6º nível, você pode usar o recurso Tirar Vida com seus ataques desarmados e Taijutsu que causam dano desarmado. Além disso, uma criatura na qual você usa o recurso Tirar Vida torna-se vulnerável à próxima instância de dano que sofrer até o início do próximo turno." },
        { nivel: 9, nome: "Combatente Especialista", descricao: "A partir do 9º nível, selecione um taijutsu ou bukijutsu que você conheça; ele ganha a Palavra-chave Médica. Você pode selecionar um jutsu adicional no 13º e 17º nível para obter a Palavra-chave Médica desta forma, e pode trocar essa escolha ao completar um Descanso Longo. Além disso, você pode atacar duas vezes, em vez de uma, sempre que realizar a ação de Ataque no seu turno." },
        { nivel: 13, nome: "Regeneração Passiva", descricao: "No 13º nível, como ação bônus, você pode gastar 1 Mote Yin para recuperar 5d8 + seu modificador de habilidade de Ninjutsu em pontos de vida para uma criatura voluntária que você tocar. Você só pode usar esse recurso um número de vezes igual ao seu bônus de proficiência por descanso longo." },
        { nivel: 17, nome: "Selo Yin: Liberação", descricao: "A partir do 17º nível, quando você gastaria o uso do seu Combatente Competente, você pode gastar 7 Motes Yin adicionais: quadruplique seu modificador relevante e triplique seu dado de dano desarmado. Se fizer isso, você não ganha os benefícios normais do Combatente Competente nem dos efeitos de Selo Yin: Carga." },
      ],
    },
    {
      key: "medicina-natural",
      nome: "Medicina Natural",
      classeKey: "ninja-medico",
      descricaoIntro: "Médicos-Nin que seguem o caminho da Medicina Natural aprendem a complementar as técnicas médicas modernas com curas naturais e energia, aprendidas com a observação de pacientes e criaturas sábias. No processo, tornam-se mais próximos do mundo natural que os rodeia, aprendendo até a transformar os próprios corpos na forma de seus parceiros animais.",
      features: [
        { nivel: 2, nome: "Convocando Aprendiz", descricao: "A partir do 2º nível, você entrou em contato com uma tribo de animais dispostos a ajudá-lo em seus estudos e a lutar ao seu lado. Você aprende a Técnica de Invocação Ninjutsu (não conta no seu limite conhecido de Jutsu). As criaturas que você invoca usando este jutsu também podem lançar Ninjutsu com a palavra-chave médica." },
        { nivel: 2, nome: "Cura Natural", descricao: "Além disso, no 2º nível, você aprende a usar as veias naturais de Chakra da Terra e da natureza para curar a si mesmo e a seus aliados ao alcance, embora menos potente que a cura direta. Você armazena uma reserva de energia representada por um número de d6 igual ao seu nível de Médico-Nin. Como ação bônus, escolha uma criatura a até 18 metros e gaste um número desses dados; o alvo recupera pontos de vida iguais ao total rolado, mais 3 pontos de vida temporários por dado gasto. Você recupera todos os dados gastos ao terminar um descanso longo.\n\nA partir do 5º nível, enquanto se beneficia do Bisturi de Chakra, cada vez que causa dano com ele você recupera pontos de vida iguais ao dano causado + seu modificador de habilidade de Ninjutsu, uma vez por turno." },
        { nivel: 5, nome: "Talento Natural", descricao: "A partir do 5º nível, você aprende jutsu adicionais à medida que ganha níveis na classe, cada um concedendo um recurso extra que não conta contra seu Jutsu Conhecido. Além disso, você aprende a se transformar em um membro da tribo escolhida por curtos períodos: como ação, assume a forma de uma Invocação de Rank D de sua Tribo, substituindo Força/Destreza/Constituição/PV/CA pelos da criatura invocada (seu Chakra não muda) e ganhando as características dela no nível apropriado, por até metade do seu nível de Medical-Nin em horas; se os PV da nova forma chegarem a 0, você volta à forma normal com seus PV originais. Pode assumir forma de Rank C no 9º nível, Rank B no 13º, Rank A no 17º; usável duas vezes por descanso longo.\n\n5º — Transferência de Chakra: adicione metade do seu nível de Médico-Nin ao Chakra máximo ganho pelo alvo.\n9º — Presente do Apex: ganha a palavra-chave médica; pode selecionar um segundo efeito, ganhando metade do aumento de atributo dele além da primeira seleção.\n13º — Predador de Arte Bestial: ganha a palavra-chave médica; pode selecionar um segundo alvo além de você mesmo.\n17º — Campo de Distorção de Chakra: ao lançar, aumente o custo em 5 para aumentar a área para uma esfera de raio de 20 pés (não afeta você nem suas Feras Sábias)." },
        { nivel: 6, nome: "Preservar a Vida: Amortecer a Dor", descricao: "A partir do 6º nível, como ação, você libera uma aura esverdeada de Chakra médico em uma criatura voluntária ao alcance. Pelo próximo minuto, cada vez que a criatura afetada sofrer dano, ela recupera 4d6 pontos de vida. O recurso termina após 1 minuto ou 5 ativações." },
        { nivel: 9, nome: "Invocador do Guardião", descricao: "A partir do 9º nível, sua invocação ganha um segundo papel exclusivo: Guardião — concede a todas as criaturas aliadas em 6 metros um número de pontos de vida temporários igual à sua classificação (D:5, C:10, B:15, A:20, S:25) no início do turno de seu invocador." },
        { nivel: 13, nome: "Protetor da Natureza", descricao: "A partir do 13º nível, se você for reduzido a 0 pontos de vida ou incapacitado contra sua vontade, pode usar sua reação, antes que os efeitos tenham lugar, para invocar uma criatura de classificação S ignorando as restrições normais (reduzindo seu Chakra a 0 se tiver 30 ou menos, ou gastando normalmente caso contrário). A criatura invocada protege você e seus aliados, priorizando a sobrevivência do grupo, e se dissipa 10 minutos após ser convocada ou quando o perigo passa. Utilizável uma vez por descanso longo." },
        { nivel: 17, nome: "Avatar da Natureza", descricao: "A partir do 17º nível, você pode gastar um uso de Talento Natural para ganhar o benefício de todos os seus recursos de transformação de besta sábia ao mesmo tempo, adotando os valores de habilidade de transformação escolhidos onde forem maiores que os seus, por 1 minuto." },
        { nivel: 17, nome: "Transformação de Talento Natural", descricao: "Quando você se transforma em uma convocação de Rank C ou superior de sua Tribo, você recebe os valores de Habilidade de Rank D das criaturas e, em vez de aplicar +6 em aumentos de pontuação de habilidade, aplica +4, até no máximo 20." },
      ],
    },
    {
      key: "xama",
      nome: "Xamã",
      classeKey: "ninja-medico",
      descricaoIntro: "Médicos-Nin que seguem o caminho do Xamã concentram-se em drenar a vida de seus inimigos e transferi-la a seus aliados, controlando o fluxo da batalha através de Hexes semelhantes a Genjutsu, e drenando a vida com Ninjutsu Médico.",
      features: [
        { nivel: 2, nome: "Hex do Xamã", descricao: "Começando no 2º nível, você aprende os segredos do Genjutsu psicossomático. Como ação bônus, escolha uma criatura que você possa ver a até 9 metros; o alvo fica enfeitiçado por 1 minuto (termina mais cedo se você morrer ou ficar incapacitado). Você pode transferir este hex como ação bônus no seu turno. Enquanto durar:\n\n• Uma vez por turno, ao atingir o alvo enfeitiçado com ataque corpo a corpo usando um Jutsu com a Palavra-chave Médica, suas Armas Espirituais ou seu Bisturi de Chakra, você causa dano necrótico extra igual ao seu bônus de proficiência.\n• Como reação, quando uma criatura a até 9 metros de você e o alvo enfeitiçado sofre acerto crítico, você pode transformá-lo em acerto normal (nenhum efeito de crítico é desencadeado). Usável um número de vezes igual ao seu bônus de proficiência por descanso." },
        { nivel: 2, nome: "Armas Espirituais", descricao: "Além disso, no 2º nível, como ação bônus você pode conjurar uma Arma Espiritual de seu design, sempre proficiente. Ela causa 1d8 de dano necrótico, alcance 1,5 metro, tratada como arma corpo a corpo sem propriedades de arma, conta como Chakra aprimorado (supera resistência/imunidade a dano não-Chakra). Escolha um tipo de dano (contundente, perfurante ou cortante) para fins de qualificação a Bukijutsu; pode ser dispensada como ação bônus. Ao atacar com ela, pode usar Destreza no lugar de Força para ataque, dano e CD de Bukijutsu.\n\nA partir do 5º nível, você pode usar o Bisturi de Chakra para conceder à sua Arma Espiritual duas propriedades de arma à escolha (Bloqueio, Crítico, Mortal, Desarmar, Sutileza, Ataque Múltiplo, Alcance, Tropeçar, Versátil [d12]), retidas por 10 minutos ou até trocar novamente com outro uso do Bisturi de Chakra." },
        { nivel: 5, nome: "Xamã de Batalha", descricao: "A partir do 5º nível, você aprende jutsu adicionais à medida que ganha níveis na classe, cada um concedendo um recurso extra que não conta contra seu Jutsu Conhecido. Além disso, quando uma criatura enfeitiçada por você morre, você pode comandá-la para se mover até sua velocidade e fazer um ataque contra uma criatura no alcance; isso encerra o hex imediatamente.\n\n5º — Toque Vampírico: pode dar os pontos de vida recuperados a outra criatura a até 9 metros de você.\n9º — Assassino Fantasmagórico: ganha a palavra-chave Médica; pode selecionar uma criatura a até 9 metros para recuperar pontos de vida iguais à metade do dano causado ao alvo afetado.\n13º — Aura de Poder: ganha a palavra-chave Médica; reduz o dano que criaturas afetadas sofrem em valor igual ao seu modificador de Sabedoria.\n17º — Prisão Mental: ganha a palavra-chave Médica; uma criatura que sai da ilusão ou ataca através dela também fica enfraquecida e amedrontada de você pelo próximo minuto." },
        { nivel: 6, nome: "Tirar a Vida: Golpe Enfeitiçante", descricao: "A partir do 6º nível, ao acertar com sua Arma Espiritual usando ataque de arma ou de Taijutsu, você pode gastar um uso do recurso Tirar Vida: selecione um Ninjutsu ou Genjutsu de alvo único que exija teste de resistência e que você conheça — ele tem como alvo a criatura atingida, que faz seu teste de resistência em desvantagem." },
        { nivel: 9, nome: "Guerreiro do Hex", descricao: "A partir do 9º nível, você pode atacar duas vezes, em vez de uma, sempre que realizar a ação Atacar com sua Arma Espiritual. Além disso, ao usar Preservar Vida, uma criatura à sua escolha a até 9 metros ganha pontos de vida temporários iguais ao seu nível de Médico-Nin + seu modificador de Sabedoria. Finalmente, quando você usa Tirar Vida em uma criatura que se beneficia de algum bônus (dano adicional, PVT etc.), ela perde esses benefícios imediatamente." },
        { nivel: 13, nome: "Drenando Hexes", descricao: "A partir do 13º nível, quando uma criatura enfeitiçada por você morre, você ou outra criatura a até 9 metros recupera pontos de vida iguais ao seu nível de Médico-Nin + seu bônus de proficiência (o hex termina imediatamente ao ser usado). Além disso, quando você cai a 0 pontos de vida devido a ataque corpo a corpo, pode gastar imediatamente 10 Chakra para fazer um ataque com sua Arma Espiritual em uma criatura no alcance; qualquer dano causado concede pontos de vida iguais ao dano causado. Utilizável duas vezes por descanso." },
        { nivel: 17, nome: "Mestre dos Hexes", descricao: "A partir do 17º nível, uma vez por turno, quando você causa dano a uma criatura que enfeitiçou com um Bukijutsu ou ataque que usa sua Arma Espiritual, você adiciona seu nível ao dano rolado." },
      ],
    },
    {
      key: "transmutador",
      nome: "Transmutador",
      classeKey: "ninja-medico",
      descricaoIntro: "Médicos-Nin que seguem o caminho do Transmutador aprendem a curar e lutar com precisão cirúrgica, alterando a própria estrutura celular das criaturas — sejam amigas, inimigas ou eles próprios.",
      features: [
        {
          nivel: 2,
          nome: "Técnica Transfigurada",
          descricao: "A partir do 2º nível, você começa a aprender a alterar a estrutura celular de outras criaturas em seu benefício ou detrimento. Quando você causaria dano de Ácido, Veneno ou Necrótico a uma criatura com um Jutsu com a Palavra-chave Médica, você pode forçá-la a um teste de resistência de constituição contra sua CD; em falha, ela ganha 1 graduação de Enfraquecido.\n\nUma vez por lançamento, quando você curaria uma criatura ou concederia PVT com um recurso de classe ou Jutsu com a palavra-chave Médica, pode encerrar uma graduação de qualquer condição causada por jutsu de Rank D ou inferior (Rank C no 7º nível, Rank B no 11º, Rank A no 15º, Rank S no 20º); usável um número de vezes igual ao seu bônus de proficiência por descanso longo.\n\nA partir do 5º nível, você aprende jutsu adicionais à medida que ganha níveis na classe (ver Tabela do Transmutador), e seu Bisturi de Chakra passa a causar dano necrótico: uma vez por turno, ao causar dano com ele, você causa dano necrótico adicional igual ao seu bônus de proficiência.\n\nTabela do Transmutador (jutsu aprendidos):\n5º — Restaurador: a criatura também recupera pontos de vida iguais ao seu nível de classe Médico-Nin.\n9º — Maldição da Rapina: ganha a palavra-chave Médica; aumenta a penalidade para -6.\n13º — Mão Reconstrutiva: ao causar dano com este jutsu, o dado de dano se torna d12.\n17º — Lótus Vermelho: ganha a palavra-chave médica, e você ainda pode se concentrar nele mesmo mantendo concentração em outro jutsu com a palavra-chave médica.",
        },
        {
          nivel: 2,
          nome: "Força Alterada",
          descricao: "Além disso, no 2º nível, com uma ação você pode tocar uma criatura para lhe dar, pelo próximo minuto, um dos seguintes benefícios:\n\n• Uma vez por turno, adicione seu modificador de habilidade de Ninjutsu à jogada de dano.\n• Ganhe 10 pontos de vida temporários no início de cada um dos seus turnos; enquanto os tiver, ganha resistência a um tipo de dano à escolha.\n• Ganhe um bônus de 1d4 em um teste de resistência no qual não tenha proficiência.\n• Ganhe um bônus de 1d4 em testes de perícia nos quais não tenha proficiência.\n\nUma criatura só pode ter um benefício desta característica por vez, e você só pode manter duas instâncias ativas simultaneamente (uma terceira força você a escolher qual das duas anteriores encerrar).\n\nA partir do 5º nível, você pode gastar 1 dado de Chakra para usar uma versão aprimorada: a criatura afetada pode ganhar até dois benefícios desta característica de uma vez.",
        },
        {
          nivel: 6,
          nome: "Preservar a Vida: Transmutada",
          descricao: "A partir do 6º nível, como ação bônus, você toca uma criatura voluntária ao alcance para alterar temporariamente sua composição biológica para outro tipo de criatura à escolha, pelo próximo minuto (ela perde o descritor humanoide e ganha um benefício passivo):\n\n• Construto: resistência a dano de Contusão/Perfuração/Corte.\n• Demônio: resistência a dano de Fogo e imunidade às condições Encantado e Medo.\n• Planta: ganha pontos de vida temporários iguais ao modificador de Constituição (mín. 1) a cada início de turno.\n• Monstruosidade: vantagem em testes de resistência de Força e Constituição.\n• Mutante: vantagem em testes de resistência de Inteligência e Sabedoria.",
        },
        {
          nivel: 9,
          nome: "Fortitude Reconstruída",
          descricao: "A partir do 9º nível, quando você usa Força Alterada em uma criatura que não seja você, ela ganha um benefício adicional à escolha: uma vez por turno adicione seu modificador de habilidade de Ninjutsu à jogada de ataque dela; ou uma vez por turno, quando ela lançar um jutsu que causa dano, role 1 dado de dano adicional; ou +2 de bônus na CA durante a duração.",
        },
        {
          nivel: 13,
          nome: "Eu Transmutado",
          descricao: "A partir do 13º nível, o dado de dano do seu Bisturi de Chakra aumenta para d8. Quando uma criatura faz teste de resistência de constituição contra sua Técnica Transfigurada, ela o faz em desvantagem. Além disso, você pode usar Força Alterada como ação bônus, mas ao fazer isso só pode usá-la em si mesmo.",
        },
        {
          nivel: 17,
          nome: "Biologia Transmogrificada",
          descricao: "A partir do 17º nível, quando você ganha o benefício de Força Alterada, pode ganhar 3 benefícios sem gastar nenhum Chakra adicional.",
        },
      ],
    },
  ],
};
