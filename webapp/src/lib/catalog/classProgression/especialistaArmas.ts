import type { ClassProgressionDefinition } from "@/lib/classProgression/types";

/**
 * Progressão completa do Especialista em Armas — "Observações do
 * Orochimaru" (compêndio de Classes), p.188-207. Complementa o resumo em
 * catalog/classes.ts com a tabela nível-a-nível (1-20), as características
 * por extenso e as 8 subclasses ("Forma de Arma", escolhida no 3º nível).
 *
 * Terminologia normalizada em relação à fonte bruta (dois trechos extraídos
 * por agentes diferentes usaram termos inconsistentes para os mesmos
 * mecanismos): "dado de Flurry" / "Flurry Die" -> "dado de rajada";
 * "Chakra Strike" -> "Golpe de Chakra"; "DR" -> "RD" (redução de dano).
 *
 * A subclasse "Forma de Arma Primordial" está completa aqui juntando dois
 * trechos da fonte (nível 3 de um chunk, níveis 6/13/20 de outro).
 */
export const progressaoEspecialistaArmas: ClassProgressionDefinition = {
  classeKey: "especialista-armas",
  nomeGrupoSubclasse: "Forma de Arma",
  nivelEscolhaSubclasse: 3,

  levels: [
    { nivel: 1, bonusProficiencia: 3, caracteristicas: "Foco em Arma",
      colunasExtras: { "Estilos Conhecidos": "–", "Dado de Rajada": "d4", "Jutsu Conhecidos": "6", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 2, bonusProficiencia: 3, caracteristicas: "Rajada de Armas, Postura de Arma",
      colunasExtras: { "Estilos Conhecidos": "–", "Dado de Rajada": "d4", "Jutsu Conhecidos": "6", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 3, bonusProficiencia: 3, caracteristicas: "Forma de Arma",
      colunasExtras: { "Estilos Conhecidos": "1", "Dado de Rajada": "d4", "Jutsu Conhecidos": "7", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 4, bonusProficiencia: 4, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Estilos Conhecidos": "1", "Dado de Rajada": "d4", "Jutsu Conhecidos": "7", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 5, bonusProficiencia: 4, caracteristicas: "Ataque Extra, Propriedade Aprimorada",
      colunasExtras: { "Estilos Conhecidos": "1", "Dado de Rajada": "d6", "Jutsu Conhecidos": "8", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 6, bonusProficiencia: 4, caracteristicas: "Forma de Arma (2)",
      colunasExtras: { "Estilos Conhecidos": "2", "Dado de Rajada": "d6", "Jutsu Conhecidos": "8", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 7, bonusProficiencia: 5, caracteristicas: "Foco Crítico, Ataque de Chakra Aprimorado",
      colunasExtras: { "Estilos Conhecidos": "2", "Dado de Rajada": "d6", "Jutsu Conhecidos": "9", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 8, bonusProficiencia: 5, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Estilos Conhecidos": "2", "Dado de Rajada": "d6", "Jutsu Conhecidos": "9", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 9, bonusProficiencia: 5, caracteristicas: "Foco em Arma (2)",
      colunasExtras: { "Estilos Conhecidos": "2", "Dado de Rajada": "d8", "Jutsu Conhecidos": "10", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 10, bonusProficiencia: 6, caracteristicas: "Prontidão para a Batalha",
      colunasExtras: { "Estilos Conhecidos": "2", "Dado de Rajada": "d8", "Jutsu Conhecidos": "10", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 11, bonusProficiencia: 6, caracteristicas: "Ataque Superior, Foco Crítico (2)",
      colunasExtras: { "Estilos Conhecidos": "3", "Dado de Rajada": "d8", "Jutsu Conhecidos": "11", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 12, bonusProficiencia: 6, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Estilos Conhecidos": "3", "Dado de Rajada": "d8", "Jutsu Conhecidos": "11", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 13, bonusProficiencia: 7, caracteristicas: "Forma de Arma (3)",
      colunasExtras: { "Estilos Conhecidos": "3", "Dado de Rajada": "d10", "Jutsu Conhecidos": "12", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 14, bonusProficiencia: 7, caracteristicas: "Rajada de Armas Superior",
      colunasExtras: { "Estilos Conhecidos": "3", "Dado de Rajada": "d10", "Jutsu Conhecidos": "12", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 15, bonusProficiencia: 7, caracteristicas: "Foco em Arma (3)",
      colunasExtras: { "Estilos Conhecidos": "3", "Dado de Rajada": "d10", "Jutsu Conhecidos": "13", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 16, bonusProficiencia: 8, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Estilos Conhecidos": "4", "Dado de Rajada": "d10", "Jutsu Conhecidos": "13", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 17, bonusProficiencia: 8, caracteristicas: "Foco Crítico (3)",
      colunasExtras: { "Estilos Conhecidos": "4", "Dado de Rajada": "d12", "Jutsu Conhecidos": "14", "Rank Mais Alto do Jutsu": "Rank-S" } },
    { nivel: 18, bonusProficiencia: 8, caracteristicas: "Rajada de Armas Superior (2)",
      colunasExtras: { "Estilos Conhecidos": "4", "Dado de Rajada": "d12", "Jutsu Conhecidos": "14", "Rank Mais Alto do Jutsu": "Rank-S" } },
    { nivel: 19, bonusProficiencia: 9, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Estilos Conhecidos": "4", "Dado de Rajada": "d12", "Jutsu Conhecidos": "15", "Rank Mais Alto do Jutsu": "Rank-S" } },
    { nivel: 20, bonusProficiencia: 9, caracteristicas: "Forma de Arma (4)",
      colunasExtras: { "Estilos Conhecidos": "4", "Dado de Rajada": "d12", "Jutsu Conhecidos": "15", "Rank Mais Alto do Jutsu": "Rank-S" } },
  ],

  features: [
    {
      nivel: 1,
      nome: "Foco em Arma",
      descricao: "A partir do 1º nível, o Especialista em Armas escolhe um tipo de arma (como a katana) na qual se especializará — seu Foco em Arma. Armas desse tipo ganham +1 nas rolagens de ataque e dano e uma característica da tabela abaixo (também vale para Bukijutsu lançado com esse tipo de arma). Uma vez selecionado, não é possível mudar. Se uma arma do tipo escolhido receber depois qualquer Selo de Arma, ela perde o benefício deste recurso; o usuário deve escolher um ou outro.\n\nAlém disso, ao usar uma arma na qual é proficiente como componente de Bukijutsu ou ao usar Artes Marciais, você pode usar Destreza no lugar de Força. Você sempre pode usar o Bukijutsu para o qual a arma se qualificava originalmente, independentemente do tipo de dano atual sob efeito de jutsu/selos/características.\n\nA partir do 9º nível, você pode selecionar uma segunda arma como Foco em Arma (bônus sobe para +2, ganha outra característica). A partir do 15º nível, uma terceira arma (bônus sobe para +3, outra característica).\n\nCaracterísticas de arma disponíveis para o Foco em Arma: Bloqueio; Mortal; Desarme (corpo a corpo); Finesse (não pode ser de duas mãos, exceto arcos); Flexível (escolha um tipo de dano B/P/S, reduz 1 passo de dano); Agarrar (corpo a corpo); Oculto (leve); Letal; Multiataque; Alcance (corpo a corpo); Retorno (à distância ou arremesso); Tático; Arremesso (1: 30/60, 2: 60/90, 3: 90/120); Tropeço (corpo a corpo).",
    },
    {
      nivel: 2,
      nome: "Rajada de Armas",
      descricao: "No 2º nível, você pode executar uma série de Técnicas de Rajada, alimentadas por um dado de rajada que cresce com o nível (ver coluna Dado de Rajada da tabela). Uma vez por turno, pode usar uma delas. Técnicas que exigem arremesso salvador usam sua CD de salvamento de Taijutsu. Só pode usar Técnicas de Rajada com armas marcadas como seu Foco em Arma. Se um recurso conceder o benefício de uma Técnica de Rajada adicional, ela pode ser usada sem custo de ação.\n\nTécnicas conhecidas neste nível:\n\nDeflexão Aprimorada. Como reação ao receber dano, ganha RD contra a criatura desencadeadora igual ao resultado máximo do seu Dado de Rajada, até o final do turno atual.\n\nGolpe de Chakra. Ao atingir uma criatura com ataque de arma, pode gastar ação bônus para causar 2 dados de rajada de dano adicional (4 a partir do 9º nível, 6 a partir do 18º).\n\nAumento de Percepção. Sua velocidade aumenta em um valor igual a 5x seu Dado de Rajada até o final do seu turno.",
    },
    {
      nivel: 2,
      nome: "Postura de Arma",
      descricao: "A partir do 2º nível, você adota uma postura de arma específica como sua especialidade. Escolha uma das Posições de Armas do Capítulo 13: Opções de Personalização. Não é possível adotar mais de uma.",
    },
    {
      nivel: 3,
      nome: "Forma de Arma",
      descricao: "Ao atingir o 3º nível, você concentra seus estudos em uma forma específica de luta com armas (sua subclasse). Sua Forma concede recursos no 3º, 6º, 13º e 20º níveis. Você também aprende um Estilo para complementar a forma escolhida, começando com 1 e ganhando mais conforme sobe de nível (ver coluna Estilos Conhecidos).",
    },
    {
      nivel: 4,
      nome: "Aprimoramento da Pontuação de Habilidade/Característica",
      descricao: "Ao atingir o 4º nível, e novamente no 8º, 12º, 16º e 19º nível, você pode aumentar uma pontuação de habilidade em +1 e ganhar uma característica de sua escolha para a qual se qualifica. Não é possível aumentar uma pontuação de habilidade acima de 20 usando esse recurso.",
    },
    {
      nivel: 5,
      nome: "Ataque Extra",
      descricao: "A partir do 5º nível, você pode atacar duas vezes, em vez de uma, sempre que realizar a ação de Ataque em seu turno.",
    },
    {
      nivel: 5,
      nome: "Propriedade Aprimorada",
      descricao: "Recurso citado na tabela de progressão (5º nível, junto com Ataque Extra), mas o parágrafo explicativo não foi localizado no trecho da fonte disponível para extração — possivelmente está em uma página fora da faixa lida. Pendente de revisão contra o livro original.",
    },
    {
      nivel: 7,
      nome: "Foco Crítico",
      descricao: "A partir do 7º nível, todas as armas com as quais você é proficiente ganham +1 nível da propriedade Crítico, aplicável também a Bukijutsu lançado com elas. Aumenta para +2 no 11º nível e +3 no 17º.",
    },
    {
      nivel: 7,
      nome: "Ataque de Chakra Aprimorado",
      descricao: "Também a partir do 7º nível, ao lançar um Bukijutsu que acerte, você pode acionar a Técnica de Rajada Golpe de Chakra sem custo de ação, rolando metade do dado de rajada listado (ainda conta como um uso). Uma vez por conjuração.",
    },
    {
      nivel: 9,
      nome: "Foco em Arma (2)",
      descricao: "A partir do 9º nível, você pode selecionar uma segunda arma para se tornar seu Foco em Arma. O bônus nas rolagens de ataque e dano aumenta para +2 e você ganha outra característica de arma (ver Foco em Arma, 1º nível).",
    },
    {
      nivel: 10,
      nome: "Prontidão para a Batalha",
      descricao: "A partir do 10º nível, você tem vantagem em verificações de iniciativa.",
    },
    {
      nivel: 11,
      nome: "Ataque Superior",
      descricao: "A partir do 11º nível, você pode atacar três vezes, em vez de duas, sempre que realizar a ação de Ataque em seu turno.",
    },
    {
      nivel: 14,
      nome: "Rajada de Armas Superior",
      descricao: "A partir do 14º nível, selecione um dos seguintes benefícios (ganha outro no 18º nível):\n- Deflexão Aprimorada agora dura até o início do seu próximo turno.\n- Deflexão Aprimorada permite, em vez disso, adicionar metade do resultado à sua CA.\n- Aumento de Percepção agora dura até o final do seu próximo turno.\n- Aumento de Percepção agora concede os efeitos da ação Disparada.\n- Qualquer Técnica de Rajada que cause dano, aumente velocidade ou reduza dano sempre adiciona 1 dado de rajada extra ao resultado.",
    },
    {
      nivel: 15,
      nome: "Foco em Arma (3)",
      descricao: "A partir do 15º nível, você pode escolher uma terceira arma para se tornar seu Foco em Arma. O bônus nas rolagens de ataque e dano aumenta para +3 e você ganha outra característica de arma (ver Foco em Arma, 1º nível).",
    },
  ],

  subclasses: [
    {
      key: "postura-dancarino-de-batalha",
      nome: "Postura do Dançarino de Batalha",
      classeKey: "especialista-armas",
      descricaoIntro: "Especialista em armas que se concentra na Dança de Batalha, utilizando sua eficiência implacável para dizimar e derrotar oponentes despreparados com ataques corpo a corpo poderosos e mortais.",
      features: [
        { nivel: 3, nome: "Técnicas de Batalha", descricao: "A partir do 3º nível:\n\nGolpe Desastroso. Ao usar Golpe de Chakra, pode aumentar em +1 o número de dados de rajada rolados e rerrolar todos os 1s e 2s, ficando com o segundo resultado.\n\nRegressão Forçada. Ao atingir uma criatura com ataque de arma branca, pode gastar ação bônus para curar uma condição que a afete (exceto Exaustão)." },
        { nivel: 3, nome: "Estilos de Dançarino de Batalha", descricao: "Além disso, no 3º nível, você conhece 1 dos estilos abaixo (ganha mais conforme sobe de nível):\n\nDança Destrutiva. Ação bônus: selecione criatura a até 30 pés; até o fim do seu turno, vantagem nos dois primeiros ataques de Taijutsu contra ela, mas ela ganha vantagem contra você até o fim do próximo turno dela. Uma vez por turno, em acerto crítico nesse turno, adicione seu nível ao dano e o alvo não ganha a vantagem.\n\nDança do Desastre. Uma vez por turno, ao usar a ação Correr e terminar dentro do alcance de ataque, pode lançar um Bukijutsu contra o alvo com o benefício da Técnica de Rajada Aumento de Percepção; requer uma Ação para se recuperar antes de reusar.\n\nDança Exploradora. Uma vez por turno, ao atingir uma criatura duas vezes com Bukijutsu ou ataque de arma, causa 2 dados de rajada de dano adicional.\n\nDança da Mobilidade. Uma vez por turno, como reação a sofrer dano de ataque à distância, mova-se até seu movimento total em direção ao atacante sem provocar ataques de oportunidade; pode se beneficiar de Aumento de Percepção ao fazê-lo.\n\nDança Selvagem. Ação bônus: selecione criatura a até 30 pés; vantagem no primeiro ataque de Taijutsu com Bukijutsu por turno contra ela durante 1 minuto, mas desvantagem contra todas as outras criaturas nesse período. Termina cedo se o alvo cair a 0 PV, um de vocês ficar inconsciente, ou você encerrar como ação bônus. Duas vezes por descanso curto.\n\nDança da Tempestade. Ao obter acerto crítico com Bukijutsu ou arma branca, faça um ataque corpo a corpo adicional na mesma criatura (uma vez por turno)." },
        { nivel: 6, nome: "Sem Confiança", descricao: "A partir do 6º nível, adicione seu modificador de Força ou Constituição (à escolha) à sua iniciativa, e ganhe +10 pés de velocidade." },
        { nivel: 13, nome: "Varredura de Redemoinho", descricao: "No 13º nível, como ação, selecione criaturas em raio de 3 metros e faça um único ataque de Taijutsu (como se lançasse Bukijutsu), comparando o resultado com a criatura de maior CA. Pode usar qualquer Técnica de Rajada como parte do ataque. Se o resultado for 10+ acima da CA do alvo, trate como acerto crítico. Em acerto, todas as criaturas selecionadas sofrem 10dX + seu modificador de Força ou Destreza (X = dado de dano da arma; acerto crítico dobra o dado). Todas fazem arremesso de Destreza (como alvo de Bukijutsu); falha = derrubadas e atordoadas. Duas vezes por descanso." },
        { nivel: 20, nome: "Mestre da Agressão", descricao: "No 20º nível, seus escores de Força ou Destreza aumentam em 2 (máximo também +2). Como ação, gastando 3 dados de Chakra, mova-se em linha reta até um espaço visível em raio de 90 pés, ignorando terreno difícil/obstruções e sem provocar ataques de oportunidade. Criaturas em raio de 3 metros do caminho percorrido: faça dois ataques de Taijutsu corpo a corpo com vantagem (como Bukijutsu), comparando com a menor CA entre os alvos; pode usar efeitos de Técnicas de Rajada duas vezes por ataque. Resultado 10+ acima da CA = acerto crítico. Em sucesso, todos sofrem 10dX + modificador de Força ou Destreza (crítico dobra o dado); ficam atordoados e Incapacitados (removível com arremesso de Força contra sua CD de Taijutsu no fim de cada turno deles). Uma vez por descanso." },
      ],
    },
    {
      key: "perfurador-de-gungnir",
      nome: "Forma do Perfurador de Gungnir",
      classeKey: "especialista-armas",
      descricaoIntro: "O Especialista em Armas que se concentra na Forma do Perfurador de Gungnir treina na arte da lança suprema, projetada para perfurar todos os tipos de defesa e desconstruir os pontos fracos do inimigo com rapidez e precisão cirúrgica.",
      features: [
        { nivel: 3, nome: "Técnicas do Perfurador de Gungnir", descricao: "A partir do 3º nível:\n\nGarra de Fenrir. Ao usar Golpe de Chakra com ataque corpo a corpo perfurante, role 1 dado de rajada e reduza a RD do alvo nesse valor até o início do seu próximo turno.\n\nVisão de Heimdallr. Ação bônus: ignora penalidades em ataques e dano até o final do turno atual.\n\nVingança de Vitharr. Reação a sofrer dano: cada instância de dano até o início do seu turno concede +1 dado de rajada ao próximo ataque de Taijutsu corpo a corpo com arma perfurante, até o início do próximo turno." },
        { nivel: 3, nome: "Estilos do Perfurador de Gungnir", descricao: "Além disso, no 3º nível, você conhece 1 dos estilos abaixo (ganha mais conforme sobe de nível):\n\nSabedoria de Mímir. Ação bônus: criatura a até 60 pés não adiciona Destreza à CA contra seus ataques corpo a corpo perfurantes durante 1 minuto (uma vez por descanso curto).\n\nSilêncio de Hœnir. Ação bônus: reveste sua arma perfurante; no próximo dano perfurante de Bukijutsu antes do fim do turno, o alvo faz arremesso de Constituição ou fica incapaz de moldar chakra até o fim do próximo turno.\n\nLágrimas de Ouro de Freya. Duas vezes por turno, dano perfurante de Bukijutsu concede 1 grau de sangramento ao alvo.\n\nIra de Thor. Ao realizar a ação de Ataque com arma corpo a corpo perfurante, pode lançar como reação um Bukijutsu de ataque único que cause dano." },
        { nivel: 6, nome: "Heroísmo de Sigurd", descricao: "A partir do 6º nível, duas vezes por descanso longo, como reação ao ver uma criatura ao alcance de movimento ser atingida por um ataque, mova-se até ela; se terminar a 1,5m, faça um ataque corpo a corpo de Taijutsu contra o resultado da rolagem do atacante — em sucesso, o ataque original falha (desviado)." },
        { nivel: 13, nome: "Presa de Fafnir", descricao: "A partir do 13º nível, ao obter acerto crítico com ataque corpo a corpo perfurante, o alvo ganha 2 graus de lacerado." },
        { nivel: 20, nome: "Ragnarok", descricao: "A partir do 20º nível, ação bônus gastando 20 chakra ou 3 dados de Chakra: sela seu chakra (não pode lançar/manter Ninjutsu ou Genjutsu por 1 minuto) e envolve sua arma perfurante em chakra. Durante esse minuto, dano perfurante causa o dobro do seu dado de rajada adicional; criaturas laceradas recebem o dobro do dano. Após 1 minuto, termina; uma vez por descanso longo." },
      ],
    },
    {
      key: "martelo-de-obsidiana",
      nome: "Forma do Martelo de Obsidiana",
      classeKey: "especialista-armas",
      descricaoIntro: "O Especialista em Armas que se concentra na Forma do Martelo de Obsidiana treina a brutalidade de esmagar obstáculos, atacando com a ferocidade de uma onda quebrando ou uma caverna em colapso — ataques incapacitantes que abalam a terra.",
      features: [
        { nivel: 3, nome: "Técnicas do Martelo de Obsidiana", descricao: "A partir do 3º nível:\n\nGolpe Sifão. Ao usar Golpe de Chakra com ataque corpo a corpo contundente, em acerto ganha PV temporários iguais ao seu nível até o início do próximo turno.\n\nDesmembrar. Ao usar Golpe de Chakra com ataque corpo a corpo contundente, em acerto pode retardar o dano: a próxima vez que o alvo ganhar PV, PVT ou RD, o ganho é reduzido pelo resultado do seu dado de rajada (se a RD duraria mais que este ataque, a redução vale até o início do seu próximo turno)." },
        { nivel: 3, nome: "Estilos de Martelo de Obsidiana", descricao: "Além disso, no 3º nível, você conhece 1 dos estilos abaixo (ganha mais conforme sobe de nível):\n\nMuro de Sombra. Reação no seu turno: escudo de chakra cor obsidiana concede RD igual ao resultado máximo de 1 dado de rajada, contra todas as fontes, até o início do próximo turno.\n\nLiberado!. Ação bônus: até o fim do turno, dano de Taijutsu contundente causa +2 dados de rajada. Duas vezes por descanso longo.\n\nFinal Irritante. Ao reduzir PV de uma criatura a 0 com arma contundente, ganha uma ação adicional para um único ataque com arma, causando +2 dados de rajada (acumulativo a cada ativação). Usável um número de vezes igual ao seu modificador de Taijutsu por descanso longo.\n\nRepresália. Ao causar dano com arma contundente a criatura concentrada em jutsu, gaste 1 dado de Chakra para encerrar imediatamente um dos efeitos, sem teste de concentração.\n\nProvocar. Ação: criaturas hostis em raio de 30 pés que vejam/ouçam você têm desvantagem em ataques contra qualquer alvo que não seja você, até o início do seu próximo turno.\n\nDesafio. Reação a arremesso de Força/Constituição enquanto empunha arma branca: bônus na defesa igual a 1 dado de rajada." },
        { nivel: 6, nome: "Corpo de Obsidiana", descricao: "A partir do 6º nível, ao usar uma técnica das Técnicas do Martelo de Obsidiana, pode usar uma segunda ao custo de 1 dado de acerto (ou chakra); se forçar arremesso, o alvo sofre penalidade de 1d4." },
        { nivel: 13, nome: "Mente Obsidiana", descricao: "A partir do 13º nível, em arremesso de Sabedoria ou Inteligência contra Genjutsu, pode rolar 1 dado de rajada e somar ao resultado. Duas vezes por descanso longo." },
        { nivel: 20, nome: "Alma Obsidiana", descricao: "A partir do 20º nível, ação de turno completo gastando 3 dados de chakra: por 1 minuto, criaturas hostis em raio de 30 pés têm desvantagem em testes de concentração; você adiciona seu dado de rajada a rolagens de dano de arma/Bukijutsu e a arremessos de Força e testes de habilidade. Uma vez por descanso longo." },
      ],
    },
    {
      key: "lamina-fantasma",
      nome: "Forma de Lâmina Fantasma",
      classeKey: "especialista-armas",
      descricaoIntro: "O Especialista em Armas que se concentra na Forma de Lâmina Fantasma treina um estilo de lâmina há muito oculto: atacar como um fantasma, com golpes que atingem o alvo muito depois de desferidos.",
      features: [
        { nivel: 3, nome: "Técnicas de Lâmina Fantasma", descricao: "A partir do 3º nível:\n\nGume do Fantasma. Ao usar Golpe de Chakra com arma cortante, pode retardar todo o dano do ataque: no início do próximo turno do alvo, ele recebe o dano retardado de todas as suas armas (não é possível reagir a ele).\n\nEclipse Fantasma. Reação a ser alvo de ataque corpo a corpo enquanto empunha arma cortante: role 3 dados de rajada; no fim do turno do atacante, ele sofre esse dano." },
        { nivel: 3, nome: "Estilos de Lâmina Fantasma", descricao: "Além disso, no 3º nível, você conhece 1 dos estilos abaixo (ganha mais conforme sobe de nível):\n\nPostura da Lâmina Fantasmagórica. Uma vez por turno, ao atingir com arma/Bukijutsu cortante, role 1 dado de rajada e reduza a CA do alvo pela metade do resultado (só contra seus ataques) até o fim do turno. Duas vezes por descanso.\n\nPostura Dança dos Espectros. Ação bônus: selecione criatura visível/audível; ganha 30 pés de visão cega contra ela por 1 minuto, empunhando arma cortante, até 0 PV de um dos dois ou você ficar inconsciente. Duas vezes por descanso longo.\n\nSifão Assombroso. Ao reduzir PV de criatura com arma cortante, ela não pode recuperar PV até o fim do seu próximo turno.\n\nExecução Horrenda. Ao reduzir PV de criatura a 0 com arma cortante, adia o dano até o início do próximo turno dela e ganha ação adicional para atacar outra criatura ao alcance; se reduzir essa a 0 também, repete (até três vezes por descanso).\n\nRevenant Opressivo. Ação bônus ao lançar Bukijutsu com arma cortante: criaturas em raio de 15 pés fazem arremesso de Constituição ou ficam incapazes de moldar chakra/reagir contra você até o fim do próximo turno delas; sofrem seu dado de rajada de dano extra ao receberem dano, uma vez por turno. Duas vezes por descanso longo.\n\nEteralidade Retardada. Ao atingir com Taijutsu via Bukijutsu cortante, retarda o dano; no fim de cada turno seu, pode somar +1 dado de rajada (mantendo concentração como jutsu Rank B, só a até 30 pés de um alvo afetado). Libera como reação ou ação; perde o dano se perder a concentração." },
        { nivel: 6, nome: "Primeiro Passo: Uma Única Gota", descricao: "A partir do 6º nível, ao retardar dano com qualquer recurso da classe, pode estender até o fim do próximo turno, aumentando o dano retardado em 4 dados de rajada (duas vezes por descanso curto). Técnicas de Rajada da subclasse que rolem dado de rajada rolam um dado adicional." },
        { nivel: 13, nome: "Segunda Etapa: Malícia Transbordante", descricao: "A partir do 13º nível, como ação (empunhando arma cortante), assuma a postura Malícia Transbordante: ganha a reação especial Retribuição (não gasta sua reação normal), acionada por criaturas em raio de 15 pés que ajam ou se movam. Retribuição: sua arma ganha Alcance 3 e você faz um ataque corpo a corpo de Taijutsu tratado como Bukijutsu Rank A com palavra-chave Clash; em acerto, causa o dobro do dano de arma e aciona imediatamente qualquer dano retardado nessa criatura." },
        { nivel: 20, nome: "Última Etapa: Postura de Fantasma", descricao: "No 20º nível, Força ou Destreza e Sabedoria ou Inteligência (à escolha) aumentam em 2 (máximo também +2). Ao rolar um dado de rajada, role um adicional (soma-se ao benefício de Primeiro Passo); se o resultado for menor que 4, trate como 4." },
      ],
    },
    {
      key: "arma-primordial",
      nome: "Forma de Arma Primordial",
      classeKey: "especialista-armas",
      descricaoIntro: "O Especialista em Armas que treina a Arma Primordial infunde seus ataques com sua Liberação de Natureza, liberando golpes elementais a cada ataque.",
      features: [
        { nivel: 3, nome: "Técnicas da Arma Primordial", descricao: "A partir do 3º nível, selecione uma Liberação de Natureza (Terra, Vento, Fogo, Água ou Relâmpago); ganha a habilidade de aprender jutsu dessa liberação (ou, se já a possuir, aprende um jutsu adicional dela).\n\nReverberação Primordial. Ao usar Golpe de Chakra com ataque de arma, criaturas à sua escolha em raio de 5 pés do alvo sofrem dano igual ao seu dado de rajada + modificador de Ninjutsu, do tipo correspondente à liberação escolhida (ex.: Água=Frio).\n\nGolpe Primordial. Ao atingir com arma, ação bônus força arremesso de Constituição; falha = 1 grau do Efeito Primordial da liberação escolhida (ver tabela abaixo).\n\nPulso Primordial. Reação ao sofrer dano: role 1 dado de rajada, ganhe PV temporários iguais a 3x o resultado até o fim do turno.\n\nTabela de Efeitos Primordiais (Liberação → Condição): Terra → Machucado; Vento → Sangramento; Fogo → Queimado; Água → Resfriado; Relâmpago → Choque." },
        { nivel: 3, nome: "Estilos de Arma Primordial", descricao: "Além disso, no 3º nível, você conhece 1 dos estilos abaixo (ganha mais conforme sobe de nível):\n\nRiposte Primordial. Reação ao ver criatura em raio de 60 pés lançar Ninjutsu/Taijutsu/Bukijutsu de dano: lance um Bukijutsu que conheça (tempo de lançamento 1 ação), ganhando palavra-chave Clash e iniciando Clash imediatamente (se o jutsu acionador não tiver Clash, ele testa em desvantagem). Duas vezes por descanso curto.\n\nBorda Primordial!. Ação bônus: por 1 minuto sua arma causa também o tipo de dano da liberação escolhida (para fins de ativação de recursos) e adiciona 1 dado de rajada desse tipo ao dano de arma/Taijutsu. Usável um número de vezes igual ao seu bônus de proficiência por descanso longo.\n\nManto Primordial. Ação bônus, gasta 1 dado de chakra: por 1 minuto, +10 pés de velocidade, resistência ao tipo de dano da liberação escolhida, e +1 dado de rajada ao causar esse tipo de dano.\n\nProvocação. Ação: marca criatura a até 30 pés com selo da natureza; cada acerto de Bukijutsu no minuto seguinte acumula 1 carga (máx. 10); ação bônus detona o selo causando 1d8 de dano do tipo escolhido por carga.\n\nPenetração Primordial. Ação bônus: por 1 minuto, ignora resistência ao tipo de dano da sua liberação. Duas vezes por descanso." },
        { nivel: 6, nome: "Lâmina Primordial", descricao: "A partir do 6º nível, uma vez por turno sem custo de ação, você pode manifestar ou desfazer uma arma de chakra puro (deve ser uma arma que você tenha como Foco). Ela é Aprimorada por Chakra e conta tanto como o tipo de dano original quanto como o tipo correspondente à sua liberação de natureza, para fins de jutsu e recursos da classe; herda todos os selos e propriedades da arma-base. Enquanto manifestada, você pode usar até duas Técnicas de Rajada da subclasse. Além disso, se você ou um aliado disposto lançar Bukijutsu em raio de 15 pés, pode gastar 5 chakra para dar a ele a palavra-chave da sua liberação e +1 dado de rajada no dano." },
        { nivel: 13, nome: "Poder Primordial", descricao: "A partir do 13º nível, na primeira vez em cada turno você pode infligir a condição do Efeito Primordial da sua liberação via Bukijutsu ou via Lâmina Primordial, com +1 grau adicional. Além disso, quando um alvo ao alcance da sua arma falhar em arremesso contra um jutsu seu do tipo de dano correspondente à sua natureza, você pode lançar um Bukijutsu como ação bônus nesse turno, ganhando seus efeitos de finalização." },
        { nivel: 20, nome: "Mestre do Primordial", descricao: "A partir do 20º nível, Força ou Destreza (à escolha) e Inteligência aumentam em 2 (máximo também +2). Ação gastando 3 dados de Chakra, por 1 minuto (termina cedo se incapacitado ou a 0 PV; uma vez por descanso longo):\n- Resistência a dano cortante, perfurante e contundente.\n- Uma vez por turno, quando aliado em raio de 30 pés realiza a ação de Ataque, adicione 2 dados de rajada à rolagem de dano, do tipo da sua liberação.\n- Ao lançar um jutsu da sua Liberação de Natureza, pode realizar a ação de Ataque como ação bônus." },
      ],
    },
    {
      key: "forma-ranger",
      nome: "Forma de Ranger",
      classeKey: "especialista-armas",
      descricaoIntro: "Especialista em Armas que se concentra na Forma de Ranger, explorando a superioridade do combate à distância: mantém distância dos alvos e os sobrecarrega com ataques pontuais de uma posição segura.",
      features: [
        { nivel: 3, nome: "Técnicas de Ranger", descricao: "A partir do 3º nível:\n\nTiro Cegante. Ao usar Golpe de Chakra com arma de longo alcance, o alvo faz arremesso de Constituição ou fica cego até o início do seu próximo turno.\n\nTiro Brutal. Ao atingir com arma de longo alcance, gaste ação bônus para +2 no dano; o alvo faz arremesso de Força ou fica atordoado até o fim do próximo turno.\n\nTiro Incapacitante. Ao atingir com arma de longo alcance, gaste 5 chakra para +1 dado de rajada no dano; o alvo faz arremesso de Destreza — falha: velocidade reduzida à metade, derrubado, e penalidade de 1 dado de rajada no próximo arremesso de Destreza antes do fim do próximo turno." },
        { nivel: 3, nome: "Estilos de Ranger", descricao: "Além disso, no 3º nível, você conhece 1 dos estilos abaixo (ganha mais conforme sobe de nível):\n\nLançador de Shuriken. Bukijutsu de longo alcance com Kunai/Shuriken/Senbon causam +1 dado de rajada e não gastam dado de munição.\n\nPostura de Olho Morto. +1 dado de rajada no dano de Taijutsu à distância via Bukijutsu contra criatura a até 15 pés; atacar a até 1,5m não impõe desvantagem.\n\nDuplo Risco. Bukijutsu de longo alcance ou com propriedade de arremesso que force arremesso: falha = +2 dados de rajada (falha por 5+: +3 dados; por 10+: +5 dados).\n\nCriação de Distância. Uma vez por turno, ao atacar à distância via Bukijutsu, +3m de velocidade ao se afastar do alvo até o fim do próximo turno, sem provocar ataques de oportunidade.\n\nPostura de Olhos Afiados. Uma vez por turno, em acerto crítico de Taijutsu à distância via Bukijutsu, +2 dados de rajada no dano.\n\nMira dos Rangers. Ação bônus, uma vez por turno: o próximo ataque de Taijutsu à distância via Bukijutsu é feito com vantagem." },
        { nivel: 6, nome: "Tiro Curvo", descricao: "A partir do 6º nível, uma vez por turno, ao errar um ataque de Taijutsu à distância via Bukijutsu, pode adicionar 1 dado de rajada à rolagem de ataque, podendo transformar a falha em acerto." },
        { nivel: 13, nome: "Desenho Rápido", descricao: "A partir do 13º nível, no seu primeiro turno de combate (se não surpreendido), use sua ação de Ataque contra até 6 criaturas visíveis em raio de 90 pés que ainda não agiram: um ataque de longo alcance cada, aplicando uma Técnica de Rajada por ataque em caso de acerto. Precisa descansar antes de reusar." },
        { nivel: 20, nome: "Eficiência Incomparável", descricao: "No 20º nível, Destreza e Sabedoria aumentam em 2 (máximo também +2). Uma vez por turno, pode tratar um erro com arma de longo alcance como acerto, ou um arremesso de Destreza/Sabedoria falho como sucesso; cada efeito usável duas vezes por descanso." },
      ],
    },
    {
      key: "forma-samurai",
      nome: "Forma Samurai",
      classeKey: "especialista-armas",
      descricaoIntro: "Especialistas em Armas que se concentram na Forma Samurai aprendem um estilo que combina combate à distância e corpo a corpo — da Katana e Naginata ao arco e flecha — adaptando-se à situação para vencer com habilidade e talento inigualáveis.",
      features: [
        { nivel: 3, nome: "Técnica de Kenjutsu", descricao: "A partir do 3º nível:\n\nSaque Frenético. Ao usar Golpe de Chakra com ataque de arma, o alvo faz arremesso de Força; falha = desvantagem em ataques e testes de habilidade contra você até o fim do próximo turno.\n\nRiposte. Ao usar a Técnica de Rajada Deflexão Aprimorada, pode imediatamente fazer dois ataques de arma contra a criatura desencadeadora como parte da reação." },
        { nivel: 3, nome: "Estilos de Samurai", descricao: "Além disso, no 3º nível, você conhece 1 dos estilos abaixo (ganha mais conforme sobe de nível):\n\nSaque Agressivo. Reação no seu turno: até o fim do turno, dobra velocidade e distância de salto, ganha ação bônus extra (só para Disparada); ao se lançar/saltar, vantagem no primeiro ataque contra cada criatura ao alcance onde aterrissar.\n\nSaque da Lâmina. Reação a ataque que erre você: gaste 5 chakra para ganhar PV temporários iguais ao seu nível por 1 minuto e atacar a criatura desencadeadora (se ao alcance); em acerto, ela fica em desvantagem contra você pelo resto do turno. Pode usar duas Técnicas de Rajada além desse ataque.\n\nEspírito de Luta. Ação bônus: gaste 1 dado de rajada para vantagem no próximo ataque de arma e 10 PV temporários (20 PVT e dois ataques a partir do 10º nível; 30 PVT e três ataques a partir do 20º), durando 1 minuto.\n\nOnda de Choque. Uma vez por turno, gaste 5 chakra: até o fim do turno, rerrola 1s e 2s em ataques/testes de habilidade/arremessos (usa o novo resultado). Em Natural 20 obtido assim, o próximo ataque que causar dano soma +3 dados de rajada.\n\nSaque Defensivo. Ação bônus: assuma postura defensiva até o início do próximo turno, ganhando duas reações especiais (Ofensa Defensiva e Pausa Defensiva, usáveis até duas vezes combinadas antes do próximo turno): Ofensa Defensiva (reação a ataque corpo a corpo: você ataca de volta); Pausa Defensiva (reação a ataque à distância: se seu resultado de ataque superar o do atacante, o ataque dele é negado). Repetir o benefício exige um descanso curto antes de reusar.\n\nSaque Iai. Gaste Ação e Ação Bônus: postura de ataque rápido — seu próximo ataque de arma branca ou Taijutsu via Bukijutsu antes do fim do turno adiciona seu nível ao ataque e ao dano." },
        { nivel: 6, nome: "Círculo de Proteção", descricao: "No 6º nível, quando você ou criatura em raio de 3 metros sofrer dano, como reação role 1 dado de rajada: você e aliados em raio de 3 metros ganham bônus de CA igual à metade do resultado contra o ataque desencadeador; se ainda assim for atingido, ganham RD igual ao resultado contra essa criatura até o início do próximo turno. Duas vezes por descanso curto." },
        { nivel: 13, nome: "Golpes Aprimorados", descricao: "A partir do 13º nível, sempre que atingir com arma que seja seu Foco em Arma, o alvo sofre +1 dado de rajada de dano adicional." },
        { nivel: 20, nome: "Mestre do Foco", descricao: "No 20º nível, Força e Constituição aumentam em 2 (máximo também +2). Ação gastando 3 dados de Chakra, por 1 minuto: resistência a dano cortante, contundente e perfurante; aliado em raio de 30 pés que ataque ganha um ataque adicional; suas rolagens de ataque não podem sofrer desvantagem; criatura que atinja você corpo a corpo sofre dano de força igual à metade do dano que você sofreu; Golpes Aprimorados passa a valer também para Bukijutsu com a arma escolhida." },
      ],
    },
    {
      key: "forma-matador",
      nome: "Forma de Matador",
      classeKey: "especialista-armas",
      descricaoIntro: "O Especialista em Armas que pratica a arte da matança torna-se caçador consumado, vivendo para a perseguição e o golpe mortal que a encerra, estudando hábitos e anatomia dos inimigos.",
      features: [
        { nivel: 3, nome: "Técnicas do Matador", descricao: "A partir do 3º nível, essas técnicas se referem a um único alvo estudado por vez:\n\nEstrangulamento Estudado. Ao usar Golpe de Chakra com ataque de arma, em acerto o alvo faz arremesso (constituição); falha = 1 grau de Enfraquecido.\n\nGolpe Estudado. Ao usar Golpe de Chakra com ataque de arma, em acerto ignora a RD ou Resistência do alvo (à escolha) contra esse ataque." },
        { nivel: 3, nome: "Estilos de Matador", descricao: "Além disso, no 3º nível, você conhece 1 dos estilos abaixo (ganha mais conforme sobe de nível):\n\nLeitor de Sangue. Ação: teste de Sobrevivência (CD 8 + nível do alvo) contra criatura visível a até 120 pés; sucesso = sabe os PV atuais dela. Uma vez por criatura por descanso curto (usar em outra criatura perde o conhecimento da anterior).\n\nRastreamento Estudado. 10 minutos estudando: bônus para localizar uma criatura conhecida (2 dados de rajada se Rank E/D/C; 1 dado se B/A; metade de 1 dado se S/desconhecido). Dura 8 horas, uma vez por descanso longo.\n\nGolpe Cooperativo. Uma vez por turno, ao acertar criatura em raio de 30 pés que um aliado tenha atingido na rodada anterior, inflige 1 grau de Concussão adicional.\n\nAlcance Letal. Bukijutsu de Taijutsu corpo a corpo: +10 pés de alcance e +1 dado de rajada de dano. Se for de longo alcance: +20 pés de alcance e, em acerto, pode usar duas Técnicas de Rajada nesse turno. Recarrega no fim do seu próximo turno.\n\nCaçada Venenosa. Perícia com um kit; preparar veneno tem CD reduzida em 5; arma revestida com veneno próprio ganha +1 nas propriedades Crítico e Mortal; pode usar sua CD de Taijutsu ou a do veneno, a maior.\n\nPerseguidor da Ceifa. Uma vez por turno, ao causar dano com Bukijutsu tendo vantagem ou estando escondido, aumenta o dado de dano em 1 passo. Exige ação para recarregar.\n\nTécnica Viciosa. Uma vez por turno, em acerto crítico com Bukijutsu, recupera metade do custo de chakra original do jutsu." },
        { nivel: 6, nome: "Perseguição ao Predador", descricao: "A partir do 6º nível, selecione um de dois Talentos de Predador (troca ao completar descanso curto):\n\nLíngua de Víbora (Enganação). Ao tentar Mentir ou Se Passar por Outro, +1 dado de rajada no teste; sucesso por 5+ faz a mentira ser aceita como verdade absoluta.\n\nLuz Apex (Intimidação). Ao Coagir ou Desmoralizar, +1 dado de rajada; se a criatura ganhar 1 nível de Medo, também ganha 1 grau de Concussão." },
        { nivel: 13, nome: "Pedreira", descricao: "A partir do 13º nível, durante um descanso, marque uma criatura conhecida (mesmo sem tê-la encontrado) como sua Pedreira (só uma por vez, até um descanso, 0 PV, mudança de dimensão, ou remoção por ação bônus). Pode acionar até duas Técnicas de Rajada de uma vez contra ela, mesmo com requisitos de ação diferentes; ignora terreno difícil e não tem velocidade reduzida ao se mover em linha reta até ela." },
        { nivel: 20, nome: "Mestre Matador", descricao: "A partir do 20º nível, ao lançar Bukijutsu de ataque único contra sua Pedreira, declare Matar, Atordoar ou Incapacitar: em acerto, o alvo faz arremesso de Força contra sua CD de Taijutsu; falha = efeito declarado. Recursos: um número de cargas igual ao seu bônus de proficiência por descanso longo.\n- Matar (2 cargas): Elite/Standard/Minion morrem imediatamente; Solo/Icônico permitem acionar até três Técnicas de Rajada de uma vez no mesmo ataque.\n- Atordoar: role 1 dado de rajada; o alvo fica atordoado por um número de turnos igual à metade do resultado.\n- Incapacitar: role 1 dado de rajada; o alvo ganha graus de contusão iguais à metade do resultado." },
      ],
    },
  ],
};
