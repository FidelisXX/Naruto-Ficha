import type { ClassProgressionDefinition } from "@/lib/classProgression/types";

/**
 * Progressão completa do Especialista em Taijutsu — "Observações do
 * Orochimaru" (compêndio de Classes), p.234-255. Complementa o resumo em
 * catalog/classes.ts com a tabela nível-a-nível (1-20), as características
 * por extenso e as 8 subclasses de "Estilo Taijutsu" (escolhida no 3º
 * nível).
 *
 * Notas sobre a fonte:
 * - A coluna "características" da tabela de nível da fonte diverge da
 *   prosa em 7 das 20 linhas (nomes genéricos/incorretos, provável erro de
 *   OCR/tradução). A coluna abaixo foi reconstruída a partir da prosa das
 *   características (featuresBase), não copiada literalmente da tabela.
 * - A linha do 18º nível veio corrompida na fonte ("Jutsu Conhecidos: 10,
 *   Rank: 14"); corrigida aqui para 14/Rank-S, seguindo a progressão clara
 *   das linhas vizinhas (17º = 14/Rank-S, 19º = 15/Rank-S).
 * - A tabela original lista, só no 5º nível, duas características extras
 *   ("Jack de Todos [os Ofícios]" e "Mestre de N...", nome cortado na
 *   fonte) sem nenhum parágrafo correspondente capturado em nenhum dos
 *   trechos extraídos — lacuna genuína de conteúdo, não reproduzida aqui.
 * - "Rígido" é chamado "Ironclad" no corpo do texto; "Fúria Justa" é
 *   ligada a "Righteous Fury"; "Ruína" é chamada "Ruin" na descrição.
 * - Vários nomes de características aparecem com a marca "[Alterado]" no
 *   material original (provável errata/revisão de uma versão anterior do
 *   homebrew) — a marca foi omitida do nome aqui por não agregar
 *   informação jogável.
 * - Na subclasse "Talento e Foco", a característica "Golpe Concentrado"
 *   (17º nível) tem o tipo de arremesso de salvamento cortado na fonte
 *   ("a criatura deve ser bem-sucedida em um ___"); mantido como lacuna
 *   sinalizada, sem inventar o atributo.
 * - Na subclasse "Chama Apaixonada", a opção "Mobilidade Poderosa" de
 *   "Envoltórios de Mão da Paixão" (6º nível) tem sua lista de condições
 *   adicionais cortada na fonte ("imunidade a Lentidão e ___"); mantida
 *   como lacuna sinalizada.
 */
export const progressaoEspecialistaTaijutsu: ClassProgressionDefinition = {
  classeKey: "especialista-taijutsu",
  nomeGrupoSubclasse: "Estilo Taijutsu",
  nivelEscolhaSubclasse: 3,

  levels: [
    { nivel: 1, bonusProficiencia: 3, caracteristicas: "Fundição de Jutsu, Defesa Marcial, Técnica Desarmada, Técnica Marcial",
      colunasExtras: { "Bônus de Dado Marcial": "–", "Técnicas Marciais Conhecidas": "–", "Jutsu Conhecidos": "6", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 2, bonusProficiencia: 3, caracteristicas: "Adeptos Marciais, Movimento Aprimorado",
      colunasExtras: { "Bônus de Dado Marcial": "1", "Técnicas Marciais Conhecidas": "4", "Jutsu Conhecidos": "6", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 3, bonusProficiencia: 3, caracteristicas: "Estilo Taijutsu",
      colunasExtras: { "Bônus de Dado Marcial": "1", "Técnicas Marciais Conhecidas": "4", "Jutsu Conhecidos": "7", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 4, bonusProficiencia: 4, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Bônus de Dado Marcial": "1", "Técnicas Marciais Conhecidas": "4", "Jutsu Conhecidos": "7", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 5, bonusProficiencia: 4, caracteristicas: "Ataque Extra",
      colunasExtras: { "Bônus de Dado Marcial": "1", "Técnicas Marciais Conhecidas": "4", "Jutsu Conhecidos": "8", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 6, bonusProficiencia: 4, caracteristicas: "Estilo Taijutsu (2)",
      colunasExtras: { "Bônus de Dado Marcial": "2", "Técnicas Marciais Conhecidas": "4", "Jutsu Conhecidos": "8", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 7, bonusProficiencia: 5, caracteristicas: "Evasão, Golpes Aprimorados de Chakra",
      colunasExtras: { "Bônus de Dado Marcial": "2", "Técnicas Marciais Conhecidas": "5", "Jutsu Conhecidos": "9", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 8, bonusProficiencia: 5, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Bônus de Dado Marcial": "2", "Técnicas Marciais Conhecidas": "5", "Jutsu Conhecidos": "9", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 9, bonusProficiencia: 5, caracteristicas: "Estilo Taijutsu (3)",
      colunasExtras: { "Bônus de Dado Marcial": "2", "Técnicas Marciais Conhecidas": "5", "Jutsu Conhecidos": "10", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 10, bonusProficiencia: 6, caracteristicas: "Vontade Inquebrantável",
      colunasExtras: { "Bônus de Dado Marcial": "3", "Técnicas Marciais Conhecidas": "5", "Jutsu Conhecidos": "10", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 11, bonusProficiencia: 6, caracteristicas: "Fluxo de Batalha",
      colunasExtras: { "Bônus de Dado Marcial": "3", "Técnicas Marciais Conhecidas": "5", "Jutsu Conhecidos": "11", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 12, bonusProficiencia: 6, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Bônus de Dado Marcial": "3", "Técnicas Marciais Conhecidas": "5", "Jutsu Conhecidos": "11", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 13, bonusProficiencia: 7, caracteristicas: "Mestre da Persistência",
      colunasExtras: { "Bônus de Dado Marcial": "3", "Técnicas Marciais Conhecidas": "6", "Jutsu Conhecidos": "12", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 14, bonusProficiencia: 7, caracteristicas: "Estilo Taijutsu (4)",
      colunasExtras: { "Bônus de Dado Marcial": "4", "Técnicas Marciais Conhecidas": "6", "Jutsu Conhecidos": "12", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 15, bonusProficiencia: 7, caracteristicas: "Corpo Perfeito",
      colunasExtras: { "Bônus de Dado Marcial": "4", "Técnicas Marciais Conhecidas": "6", "Jutsu Conhecidos": "13", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 16, bonusProficiencia: 8, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Bônus de Dado Marcial": "4", "Técnicas Marciais Conhecidas": "6", "Jutsu Conhecidos": "13", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 17, bonusProficiencia: 8, caracteristicas: "Estilo Taijutsu (5)",
      colunasExtras: { "Bônus de Dado Marcial": "4", "Técnicas Marciais Conhecidas": "6", "Jutsu Conhecidos": "14", "Rank Mais Alto do Jutsu": "Rank-S" } },
    { nivel: 18, bonusProficiencia: 8, caracteristicas: "Mente Perfeita",
      colunasExtras: { "Bônus de Dado Marcial": "5", "Técnicas Marciais Conhecidas": "6", "Jutsu Conhecidos": "14", "Rank Mais Alto do Jutsu": "Rank-S" } },
    { nivel: 19, bonusProficiencia: 9, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Bônus de Dado Marcial": "5", "Técnicas Marciais Conhecidas": "7", "Jutsu Conhecidos": "15", "Rank Mais Alto do Jutsu": "Rank-S" } },
    { nivel: 20, bonusProficiencia: 9, caracteristicas: "Estilo Taijutsu (6)",
      colunasExtras: { "Bônus de Dado Marcial": "5", "Técnicas Marciais Conhecidas": "7", "Jutsu Conhecidos": "15", "Rank Mais Alto do Jutsu": "Rank-S" } },
  ],

  features: [
    {
      nivel: 1,
      nome: "Fundição de Jutsu",
      descricao: "Como Especialista em Taijutsu, você é capaz de lançar Ninjutsu, Genjutsu e Taijutsu. CD de resistência do Ninjutsu = 8 + bônus de proficiência + modificador de Inteligência; modificador de ataque de Ninjutsu = bônus de proficiência + modificador de Inteligência. CD de resistência de Genjutsu = 8 + bônus de proficiência + modificador de Sabedoria; modificador de ataque de Genjutsu = bônus de proficiência + modificador de Sabedoria. CD de resistência de Taijutsu = 8 + bônus de proficiência + modificador de Força; modificador de ataque de Taijutsu = bônus de proficiência + modificador de Força.",
    },
    {
      nivel: 1,
      nome: "Defesa Marcial",
      descricao: "A partir do 1º nível, enquanto não estiver usando armadura, sua CA é igual a 10 + modificador de Destreza + bônus de proficiência.\n\nA partir do 5º nível, você aprende a combinar essa defesa com técnicas dos ferreiros de selo: ganha 2 espaços de guarda, usados para se infundir com um selo de imitação de armadura menor (a infusão exige um período de descanso completo); não pode se beneficiar desta característica enquanto usar o cálculo de CA normal de armadura. Ganha acesso a selos de armadura refinados e 1 espaço adicional no 9º nível, selos maiores e 1 espaço adicional no 13º, e selos superiores e 1 espaço adicional no 17º.",
    },
    {
      nivel: 1,
      nome: "Técnica Desarmada",
      descricao: "Também no 1º nível, sua prática de artes marciais lhe dá domínio de estilos de combate desarmados e de armas especializadas em Taijutsu (braçadeiras de combate, garras de ferro, bastões de quartel, nunchaku, tonfa e knuckle blades). Escolha uma das posturas de Taijutsu (Capítulo 13: Opções de Personalização).\n\nEnquanto estiver em uma postura de Taijutsu ou empunhando apenas armas de Especialista em Taijutsu: pode usar Força ou Destreza para ataque, dano e CD de defesa dos golpes desarmados, armas especializadas em Taijutsu e das habilidades Atletismo e Artes Marciais; e pode rolar um d6 no lugar do dano normal do golpe desarmado ou das armas com as quais é proficiente (aumenta para d8 no 6º nível e d10 no 11º).",
    },
    {
      nivel: 1,
      nome: "Técnica Marcial",
      descricao: "Finalmente, a partir do 1º nível, seu foco em Taijutsu preparou seu corpo para executar essas técnicas melhor que outros. O Taijutsu que você lança é sempre lançado com um custo de chakra predeterminado, ignorando o custo listado (a menos que seja especial); pode optar por não usar este recurso ao lançar um Taijutsu. Custos: Rank D: 3 chakra; Rank C: 5 chakra; Rank B: 9 chakra; Rank A: 14 chakra; Rank S: 20 chakra. Um aprimoramento ainda aumenta o custo do jutsu conforme listado em seu texto.",
    },
    {
      nivel: 2,
      nome: "Adeptos Marciais",
      descricao: "A partir do 2º nível, seu treinamento com técnicas desarmadas concede um dado marcial (d4). No início de cada um dos seus turnos, você manifesta dados marciais em quantidade igual ao valor da coluna \"Bônus de Dado Marcial\" da tabela de classe. Pode gastar esses dados para completar técnicas marciais ou recursos de classe do Especialista em Taijutsu; dados não gastos são perdidos no início de cada turno.\n\nVocê começa conhecendo 4 técnicas marciais do catálogo abaixo, aprendendo mais conforme a coluna \"Técnicas Marciais Conhecidas\". O dado marcial aumenta de tamanho para d6 no 9º nível e d8 no 17º. Técnicas marciais que exigem lance de defesa usam sua CD de defesa de Taijutsu. Ao completar um descanso completo, pode trocar as técnicas marciais conhecidas.",
    },
    {
      nivel: 2,
      nome: "Movimento Aprimorado",
      descricao: "Além disso, no 2º nível, sua velocidade aumenta em 3 metros quando não estiver usando armadura pesada. Esse bônus aumenta para 4,5 metros no 6º nível, 6 metros no 9º, 7,5 metros no 13º e 9 metros no 17º.",
    },
    {
      nivel: 3,
      nome: "Estilo Taijutsu",
      descricao: "No 3º nível, você aprende um estilo de combate que se encaixa na forma como vê o combate e engloba sua abordagem geral em relação ao Taijutsu (sua subclasse). Seu estilo concede uma característica no 3º nível e novamente no 6º, 9º, 14º, 17º e 20º.",
    },
    {
      nivel: 4,
      nome: "Melhoria/Talento de Pontuação de Habilidade",
      descricao: "Ao atingir o 4º nível, e novamente no 8º, 12º, 16º e 19º, você pode aumentar uma pontuação de habilidade em +1 e um Talento de sua escolha para o qual se qualifique. Normalmente, você não pode aumentar uma pontuação de habilidade acima de 20 usando este recurso.",
    },
    {
      nivel: 5,
      nome: "Ataque Extra",
      descricao: "A partir do 5º nível, você pode atacar duas vezes, em vez de uma, sempre que realizar a ação de Ataque em seu turno. Os ataques feitos com a ação de Ataque contam como Chakra Aprimorado.",
    },
    {
      nivel: 7,
      nome: "Evasão",
      descricao: "A partir do 7º nível, sua agilidade instintiva permite que você se desvie do caminho de certos efeitos de área. Quando um jutsu permitir um lance de defesa de Destreza para receber apenas metade do dano, em vez disso você não sofre dano nem efeitos se for bem-sucedido, e apenas metade do dano se falhar.",
    },
    {
      nivel: 7,
      nome: "Golpes Aprimorados de Chakra",
      descricao: "No 7º nível, seus ataques ficam impregnados com chakra e cada golpe se torna cada vez mais letal à medida que mais chakra é acumulado. Ao lançar um Taijutsu, ganhe um dos seguintes benefícios, até duas vezes por conjuração: seus ataques de Taijutsu corpo a corpo que causam [Dano desarmado] adicionam +1 dado de dano; ou os ataques de Taijutsu ignoram metade da redução de dano das criaturas.",
    },
    {
      nivel: 10,
      nome: "Vontade Inquebrantável",
      descricao: "A partir do 10º nível, sua presença no campo de batalha não pode ser suprimida, reprimida ou ignorada. Quando um jutsu ou efeito com a palavra-chave Fuinjutsu forçaria você a fazer um lance de defesa, pode adicionar 1 dado marcial ao resultado.",
    },
    {
      nivel: 11,
      nome: "Fluxo de Batalha",
      descricao: "A partir do 11º nível, você começou a dominar a arte do Taijutsu a um grau assustador, aprendendo quando se mover para posições ofensivas e defensivas. Ganha um bônus à iniciativa igual ao seu modificador de Inteligência, Sabedoria ou Carisma (à escolha; uma vez decidido, não pode ser alterado).",
    },
    {
      nivel: 13,
      nome: "Mestre da Persistência",
      descricao: "No 13º nível, você não sabe como nem quando desistir, o que só torna mais difícil detê-lo. Se começar seu turno cego, atordoado, ensurdecido, incapacitado ou paralisado, pode gastar 2 dados marciais para acabar com uma dessas condições.",
    },
    {
      nivel: 15,
      nome: "Corpo Perfeito",
      descricao: "No 15º nível, seu treinamento intenso lhe concede proficiência em lances de defesa de Constituição. Além disso, sempre que fizer um lance de defesa com uma habilidade na qual não é proficiente, adiciona seu dado marcial (ou bônus de proficiência, conforme o recurso) ao lance.",
    },
    {
      nivel: 18,
      nome: "Mente Perfeita",
      descricao: "No 18º nível, seu treinamento intenso lhe concede proficiência em lances de defesa de Inteligência ou Sabedoria (escolha uma). Além disso, você se torna imune à condição Medo.",
    },
    {
      nivel: 2,
      nome: "Catálogo de Técnicas Marciais",
      descricao: `Lista de Técnicas Marciais disponíveis para o recurso Adeptos Marciais (2º nível). A última entrada do catálogo na fonte ficou cortada antes do corpo do texto (apenas o cabeçalho sobreviveu) e não foi reproduzida aqui.

- Taijutsu Brutal: Ao lançar um Taijutsu, pode gastar qualquer número de dados marciais; se o jutsu não adicionar seu modificador de habilidade ao dano causado, adicione o total gasto à primeira rolagem de dano.
- Técnica Brutal: Ao lançar um Taijutsu, gaste 1 dado marcial para conceder a palavra-chave Brutal: o jutsu sempre adiciona metade do seu modificador de habilidade ao dano, se ainda não o fizer; se já adicionar, em vez disso adiciona Força e Destreza ao dano.
- Taijutsu Devastador: Ao lançar um Taijutsu, gaste 1 dado marcial; criaturas atingidas em raio de 3 metros do alvo original fazem resistência de Destreza, recebendo metade do dano. Uma vez por conjuração.
- Técnica Devastadora: Ao lançar um Taijutsu, gaste 1 dado marcial para conceder a palavra-chave Devastador: o jutsu não pode ter seus acertos críticos negados ou reagidos.
- Enxurrada de Golpes: Ao realizar a ação de Ataque, gaste 1 dado marcial como ação bônus para fazer 1 ataque desarmado adicional (2 ataques a partir do 7º nível, 3 a partir do 13º).
- Enxurrada de Guardas: Ao ser alvo de um ataque corpo a corpo, use a reação e gaste 1 dado marcial para reduzir o resultado do ataque ou da rolagem de dano desencadeante (escolha um) pelo resultado do dado (2 dados a partir do 7º nível, 3 a partir do 13º).
- Taijutsu Furioso: Ao lançar um Taijutsu que exija pelo menos 2 ataques, gaste 2 dados marciais para aumentar o número de ataques em +1 (pode gastar mais 2 dados marciais para +1 adicional).
- Técnica Furiosa: Ao lançar um Taijutsu, gaste 1 dado marcial para conceder a palavra-chave Furioso: o jutsu não pode ter seu dano reduzido por outro jutsu.
- Defesa do Paciente: Gaste 1 dado marcial para realizar a ação Esquivar como ação bônus.
- Movimento Paciente: Gaste 1 dado marcial; você não aciona ataques de oportunidade, criaturas não podem reagir ao seu movimento, e as que você atingir não podem reagir ao primeiro ataque desarmado que fizer no turno.
- Ataque Paciente: Quando uma criatura errar você com um ataque corpo a corpo, gaste 1 dado marcial para fazer um ataque desarmado contra ela.
- Técnica (nome não identificado na fonte): Ao lançar um Taijutsu, gaste 1 dado marcial para conceder uma palavra-chave que reduz o custo para manter a concentração nele em um valor igual à metade do resultado do dado.
- Taijutsu Preciso: Ao lançar um Taijutsu, gaste até 3 dados marciais para +1 de bônus de acerto por dado gasto.
- Técnica Precisa: Ao lançar um Taijutsu, gaste 1 dado marcial para conceder a palavra-chave Preciso: o jutsu não pode ter seus resultados de ataque penalizados ou reduzidos por efeitos de jutsu ou característica.
- Taijutsu Bruto: Ao lançar um Taijutsu, gaste 1 dado marcial para +1 na CD de defesa do jutsu (2 dados para +2 a partir do 7º nível, 3 dados para +3 a partir do 13º).
- Técnica Bruta (Raw): Ao lançar um Taijutsu, gaste 1 dado marcial para conceder a palavra-chave Bruto: o jutsu causa dano a uma criatura em pontos de vida e pontos de vida temporários simultaneamente.
- Passo da Escuridão: No seu turno, gaste 1 dado marcial para realizar a ação Esconder-se como ação bônus.
- Passo da Lua: No início do seu turno, antes de qualquer ação, gaste 1 dado marcial para tentar encerrar qualquer condição física, mental ou sensorial que esteja sofrendo, com um teste de Constituição CD 18.
- Passo das Estrelas: Quando uma criatura desencadear um ataque de oportunidade contra você, gaste 1 dado marcial para fazer dois ataques desarmados no lugar de um, sem gastar sua reação.
- Passo do Vento: No seu turno, como ação bônus, gaste 1 dado marcial para obter os benefícios da ação Desvencilhar-se ou Arrastar-se (escolha) e dobrar sua distância de salto até o final do turno.`,
    },
  ],

  subclasses: [
    {
      key: "disturbio",
      nome: "Distúrbio",
      classeKey: "especialista-taijutsu",
      descricaoIntro: "Os especialistas em Taijutsu que combinam seu estilo com a Arte da Perturbação têm um nível de truque misturado em sua luta. Eles se concentram em subjugar seus inimigos com uma enxurrada de ataques de vários ângulos ao mesmo tempo, usando opções armadas e desarmadas. Você pode quebrar até mesmo a mais perfeita defesa.",
      features: [
        { nivel: 3, nome: "Velocidade Cegante", descricao: "Ao escolher este estilo, a partir do 3º nível, você aprende duas técnicas marciais exclusivas. Destruição: quando uma criatura tentar lançar um jutsu em raio de 4,5 metros de você, use a reação e gaste 1 dado marcial para se mover até metade da sua velocidade, terminando a até 1,5 metro dela, e fazer dois golpes desarmados visando pontos vitais; se acertar ambos, ela faz resistência de Constituição ou tem o jutsu interrompido (ainda gastando o chakra). Núcleo Instável: depois de usar sua ação para lançar um Taijutsu, gaste 1 dado marcial para fazer dois ataques desarmados como ação bônus, somando o dado ao dano de cada um, forçando resistência de Força ou a criatura cai de bruços." },
        { nivel: 3, nome: "Rajada de Perturbação", descricao: "Além disso, no 3º nível, ao gastar 1 dado marcial você ganha uma ação bônus adicional, usada para lançar um Taijutsu ou fazer um ataque desarmado adicional, somando o dado ao dano causado; uma vez por turno, sem custo de ação. A partir do 17º nível, gastando 3 dados marciais, pode ganhar 1 ação bônus adicional usada para lançar um Taijutsu com a palavra-chave Finalizador." },
        { nivel: 6, nome: "Intocável", descricao: "A partir do 6º nível, criaturas não podem fazer ataques de oportunidade contra você por qualquer meio. Além disso, criaturas que gastarem a reação para atacá-lo o fazem com desvantagem." },
        { nivel: 9, nome: "Reflexos Inigualáveis", descricao: "A partir do 9º nível, no início do seu turno, gaste 1 dado marcial para ganhar 1 reação adicional, usável apenas para lançar um Taijutsu." },
        { nivel: 14, nome: "Barragem Debilitante", descricao: "No 14º nível, sempre que atingir uma criatura com dois ou mais ataques como parte da mesma ação, gaste 2 dados marciais para forçar um lance de defesa de Taijutsu; em falha, ela fica vulnerável a um tipo de dano à sua escolha até a próxima instância desse dano que a afetar. Duas vezes por descanso." },
        { nivel: 17, nome: "Resistência Perturbadora", descricao: "A partir do 17º nível, se uma característica concedida por esta subclasse custaria mais de 1 dado marcial, reduza o custo em 1 dado marcial." },
        { nivel: 20, nome: "Técnica Perturbadora", descricao: "A partir do 20º nível, ao lançar um Taijutsu que exija 2 ou mais ataques com pelo menos duas criaturas hostis no alcance, gaste 1 dado marcial para conceder a palavra-chave Perturbador: o jutsu dobra o número de ataques feitos, mas devem ser divididos igualmente entre as criaturas hostis no alcance." },
      ],
    },
    {
      key: "rigido",
      nome: "Rígido",
      classeKey: "especialista-taijutsu",
      descricaoIntro: "Os especialistas em Taijutsu que preferem força bruta e defesas impenetráveis em vez de Ninjutsu ou Genjutsu são conhecidos como Rígido (Ironclad). Esses shinobi confiam na força de suas armaduras, de seus corpos e, o mais importante, de sua força de vontade para ser um muro inquebrável na linha de frente dos conflitos.",
      features: [
        { nivel: 3, nome: "Rígido", descricao: "Ao escolher este estilo a partir do 3º nível, você ganha proficiência em armadura pesada e no kit de ferreiro de armadura. Enquanto usa armadura pesada, ainda recebe os benefícios de Movimento Aprimorado.\n\nAlém disso, sua pesquisa em metalurgia permitiu criar um escudo único, no qual ganha proficiência: 3 espaços para selos; se perdido ou destruído, pode ser recriado com 100 ryo e 1 tempo de inatividade (só pode se beneficiar de um escudo por vez). Estatísticas do Escudo Revestido de Ferro: CA +1, propriedades Bloqueio de volume e leve." },
        { nivel: 3, nome: "Combate de Ferro", descricao: "Além disso, no 3º nível, você aprende duas técnicas marciais disponíveis enquanto empunha seu escudo. Interpor: quando um aliado em raio de 3 metros recebe dano de um ataque, use a reação e gaste 1 dado marcial para redirecionar o ataque para você, lançando o Taijutsu apropriado e somando o dado marcial à redução de dano, redução de acerto ou bônus de CA. Golpe de Escudo: ao fazer um ataque desarmado, gaste 1 dado marcial para, em acerto, empurrar o alvo usando a rolagem de ataque no lugar de Atletismo; em sucesso, causa seu dano desarmado + dado marcial e o alvo fica Machucado." },
        { nivel: 6, nome: "Coração de Ferro", descricao: "A partir do 6º nível, como reação, quando um aliado em raio de 1,5 metro é atingido por um ataque que cause qualquer dano exceto psíquico, você pode mergulhar na frente dele, usando armadura e escudo para absorver o impacto: o dano é reduzido pelo seu dado de combate desarmado + bônus de proficiência; o ataque atinge você independentemente de sua CA.\n\nNo 14º nível, pode ter como alvo um aliado a até sua velocidade máxima de movimento, movendo-se até ele; também pode mirar em um aliado na área de um jutsu, fazendo-o passar automaticamente na defesa sem sofrer efeito, mas você ganha desvantagem na sua própria defesa." },
        { nivel: 9, nome: "Vontade de Ferro", descricao: "A partir do 9º nível, você se torna imune às condições Berserk e Atordoado. Além disso, ganha 2 reações adicionais por rodada, usáveis apenas para Coração de Ferro." },
        { nivel: 14, nome: "Fúria de Ferro", descricao: "A partir do 14º nível, duas vezes por descanso, como ação, gaste 4 dados marciais para entrar em transe de combate por 1 minuto: resistência a todos os danos exceto psíquico; ao usar Coração de Ferro, pode fazer dois ataques desarmados contra a criatura desencadeadora como parte da mesma ação; e seu escudo concede +1 adicional na CA enquanto segurado." },
        { nivel: 17, nome: "Fluxo de Ferro", descricao: "A partir do 17º nível, sempre que usar Coração de Ferro estando com metade ou menos dos PV máximos, pode adicionar 1 dado marcial à quantidade de dano reduzido." },
        { nivel: 20, nome: "Técnica de Revestimento de Ferro", descricao: "A partir do 20º nível, ao lançar um Taijutsu que reduza dano, reduza a taxa de acerto de uma criatura hostil ou aumente sua CA, gaste 1 dado marcial para conceder a palavra-chave Escudo de Ferro: o jutsu concede PV temporários iguais a 5x o resultado do dado marcial, até o início do seu próximo turno." },
      ],
    },
    {
      key: "nin-tai",
      nome: "Nin-Tai",
      classeKey: "especialista-taijutsu",
      descricaoIntro: "O especialista em Taijutsu que mistura seu estilo com o Ninjutsu abre um mundo de imprevisibilidade e técnica. Encontrou maneiras de aumentar ainda mais seu corpo além do Taijutsu simples, revestindo-o com uma determinada natureza, ampliando sua força e aumentando muito seu potencial.",
      features: [
        { nivel: 3, nome: "Combate Aprimorado pela Natureza", descricao: "Ao escolher este estilo a partir do 3º nível, selecione uma Liberação de Natureza (Terra, Vento, Fogo, Água ou Relâmpago). Ganha a habilidade de aprender e lançar jutsu com a palavra-chave correspondente; ao aprender Ninjutsu dessa palavra-chave, pode usar seu modificador de Taijutsu no lugar de Ninjutsu para cumprir requisitos de pontuação de habilidade, podendo lançá-lo mesmo sem a pontuação apropriada.\n\nComo ação bônus, gastando 1 dado marcial, aprimore seu corpo com o Chakra da Natureza escolhida por 1 minuto (ou até gastar ação bônus para encerrar):\n- Terra: [Dano desarmado] tratado como Terra; ganha PV temporários iguais à metade do seu nível no início de cada turno.\n- Vento: [Dano desarmado] tratado como Vento; uma vez por turno, ganha +6 metros de velocidade e os benefícios de Desengajar contra uma criatura que sofreu [Dano desarmado] até o fim do turno.\n- Fogo: [Dano desarmado] tratado como Fogo; aumenta em +1 dado marcial.\n- Água: [Dano desarmado] tratado como dano de Água/Frio; ataques desarmados recebem a propriedade de arma Alcance.\n- Relâmpago: [Dano desarmado] tratado como Raio; ataques desarmados ganham as propriedades de arma Enrolamento e Tática." },
        { nivel: 3, nome: "Combate Elemental", descricao: "Além disso, no 3º nível, ao usar um Taijutsu sob efeito de Combate Aprimorado pela Natureza, o jutsu ganha a palavra-chave da Liberação escolhida e causa o tipo de dano correspondente. Você aprende duas técnicas marciais. Investida Elemental: sempre que atingir uma criatura com pelo menos dois ataques de Taijutsu corpo a corpo sob efeito de Combate Aprimorado pela Natureza, gaste 1 dado marcial para fazer dois ataques desarmados adicionais como reação. Esmagamento Elemental: ao causar dano com um Taijutsu conjurado, gaste qualquer número de dados marciais para causar dano adicional igual ao dobro do resultado; depois, precisa gastar um número igual de dados marciais para recarregar." },
        { nivel: 6, nome: "Manto Elemental", descricao: "A partir do 6º nível, sob efeito de Combate Aprimorado pela Natureza, ganha benefícios adicionais conforme a Liberação:\n- Terra: resistência a dano de Terra e +4 de redução de dano contra todas as fontes (exceto psíquico).\n- Vento: resistência a dano de Vento e imunidade a efeitos que criem nuvem/gás/névoa em raio de 3 metros.\n- Fogo: resistência a dano de Fogo; uma vez por turno, criaturas que causem dano a você em corpo a corpo ou toque recebem 2 dados marciais de dano de Fogo.\n- Água: resistência a dano de Frio e a efeitos que o empurrem/puxem/derrubem (soma 1 dado marcial ao lance de defesa/contestação).\n- Relâmpago: resistência a dano de Raio; ao usar a ação de Ataque, pode fazer 1 ataque desarmado adicional como parte da mesma ação." },
        { nivel: 9, nome: "Armadura Elemental", descricao: "A partir do 9º nível, sob efeito de Combate Aprimorado pela Natureza, pode aprimorar seu Manto Elemental além dos limites normais, mantendo a forma ao gastar 1 dado marcial no início de cada turno (sair dela exige uma ação). Benefícios por elemento:\n- Terra: PV temporários de Combate Aprimorado pela Natureza são dobrados.\n- Vento: imunidade às condições Agarrado e Restrito.\n- Fogo: [Dano desarmado] aumentado em +1 dado de dano.\n- Água: criaturas não ganham bônus baseados em jutsu em defesas contra seu Taijutsu.\n- Relâmpago: dano em ataques desarmados ignora metade da redução de dano das criaturas." },
        { nivel: 14, nome: "Recarga Elemental", descricao: "A partir do 14º nível, ao receber dano do tipo associado à sua Liberação de Natureza, use a reação para absorver parte do chakra e recuperar pontos de vida e dados marciais conforme o rank do jutsu causador (D: 10 PV/1 dado, C: 15 PV/2 dados, B: 20 PV/3 dados, A: 30 PV/4 dados, S: 40 PV/5 dados), um número de vezes por descanso longo igual ao seu bônus de proficiência." },
        { nivel: 17, nome: "Ira da Natureza", descricao: "A partir do 17º nível, você domina a mistura de Ninjutsu e Taijutsu. Sob efeito de Armadura Elemental, ganha:\n- Terra: acertos críticos contra você são tratados como acertos normais.\n- Vento: ao se mover, criaturas percebem apenas que você se teletransportou — não provoca ataques de oportunidade nem aciona efeitos de movimento.\n- Fogo: o dano de ataque desarmado ou Taijutsu ignora resistência e trata imunidade como resistência.\n- Água: ao causar [Dano desarmado], pode mover a criatura até 3 metros em qualquer direção.\n- Relâmpago: ataques desarmados corpo a corpo e Taijutsu sempre causam metade do dano por efeitos que interceptam dano, afetando o alvo original diretamente." },
        { nivel: 20, nome: "Técnica Nin-Tai", descricao: "A partir do 20º nível, ao lançar um Taijutsu que exija no máximo um ataque, gaste 4 dados marciais para conceder a palavra-chave Nin-Tai: o jutsu obtém acerto crítico em uma rolagem de d20 igual ou superior a 10. Usar este recurso exige gastar 4 dados marciais no início de um turno para recarregar." },
      ],
    },
    {
      key: "furia-justa",
      nome: "Fúria Justa",
      classeKey: "especialista-taijutsu",
      descricaoIntro: "Os especialistas em Taijutsu que combinam seu estilo com a Fúria Justa (Righteous Fury) tendem a ser brutais em seus golpes. Embora tradicionalmente protegessem grandes monastérios, passaram suas técnicas para a próxima geração de shinobi. Seu treinamento lhes incutiu uma paixão ardente que os torna extremamente poderosos em curtas explosões.",
      features: [
        { nivel: 3, nome: "Frenesi de Chakra", descricao: "Ao escolher este estilo a partir do 3º nível, desde que não esteja usando armadura pesada, gaste 1 dado marcial e uma ação bônus para entrar em Frenesi de Chakra por até 1 minuto, ganhando: vantagem em verificações de Força e lances de defesa de Força; bônus de dano igual ao seu dado marcial em ataques com armas brancas usando Força ou Destreza (escolha a pontuação de habilidade ao entrar no frenesi); resistência a dano de concussão, perfuração e cortante.\n\nEnquanto ativo, só pode manter concentração em jutsu de alcance Próprio. O Frenesi termina mais cedo se você ficar inconsciente ou se o turno terminar sem ter atacado uma criatura hostil, forçado um lance de defesa ou sofrido dano desde o início; também pode ser encerrado como ação bônus." },
        { nivel: 3, nome: "Ataque Frenético", descricao: "Além disso, a partir do 3º nível, você aprende duas técnicas marciais. Força Selvagem: ao acertar uma criatura com Taijutsu que cause dano desarmado, gaste até 2 dados marciais para aumentar o dano em um valor igual a três vezes o resultado; em troca, o próximo ataque corpo a corpo que causaria dano a você não pode sofrer redução. Selvageria dos Tiranos: quando uma criatura causa dano a você, gaste qualquer número de dados marciais e registre o resultado; na próxima vez que causar dano a essa criatura, cause dano adicional igual ao dobro do valor registrado." },
        { nivel: 6, nome: "Força da Fúria", descricao: "A partir do 6º nível, escolha um jutsu que conheça com tempo de conjuração de 1 ação ou 1 ação bônus, alcance Próprio, que dure pelo menos 1 minuto (com ou sem concentração). Ao ativar o Frenesi de Chakra, gaste dados marciais adicionais conforme o rank do jutsu (D/C-Rank: 1 dado, B/A-Rank: 2 dados, S-Rank: 3 dados) para lançá-lo como parte da mesma ação; ainda paga o custo inicial de chakra, mas não precisa pagar para manter a concentração. Pode trocar esse jutsu ao completar um descanso completo." },
        { nivel: 9, nome: "Fúria Implacável", descricao: "A partir do 9º nível, se chegar a 0 PV com o Frenesi de Chakra ativo, gaste 1 dado marcial para não morrer ou ficar inconsciente imediatamente, fazendo um teste de Constituição CD 10; em sucesso, cai para 1 PV. Cada uso subsequente na mesma sequência aumenta a CD em 2, voltando a 10 após um descanso curto ou longo.\n\nA partir do 17º nível, cada sucesso nesse teste concede vantagem em qualquer ataque até o fim do seu próximo turno." },
        { nivel: 14, nome: "Fúria Imparável", descricao: "A partir do 14º nível, seu Frenesi de Chakra só termina mais cedo se você ficar inconsciente ou optar por encerrá-lo. Além disso, ao rolar 4 ou menos em um dado de dano desarmado, pode rolar novamente e deve usar o novo resultado, mesmo que também seja 4 ou menor." },
        { nivel: 17, nome: "Fúria dos Justos", descricao: "A partir do 17º nível, sob efeito do Frenesi de Chakra, sua velocidade não pode ser reduzida e você é imune a Berserk, Enfeitiçado e às condições Assustado, Paralisado e Atordoado. Se já estiver assustado, paralisado ou atordoado, ainda pode usar a ação bônus para entrar em Frenesi de Chakra, encerrando imediatamente esses efeitos." },
        { nivel: 20, nome: "Técnica de Fúria Justa", descricao: "A partir do 20º nível, ao lançar um Taijutsu que exija qualquer número de ataques, gaste 3 dados marciais para conceder a palavra-chave Fúria Justa: o jutsu causa dano adicional igual ao seu nível em cada ataque bem-sucedido cujo resultado seja pelo menos 5 maior que a CA do alvo." },
      ],
    },
    {
      key: "ruina",
      nome: "Ruína",
      classeKey: "especialista-taijutsu",
      descricaoIntro: "Especialistas em Taijutsu que usam próteses, tecnologia ou aprimoramentos shinobi e os utilizam para melhorar suas habilidades marciais são conhecidos como \"Ruin\". Eles incorporam dispositivos para controlar seu Chakra, permitindo que lutem com uma coisa a menos para se concentrar e se preocupar.",
      features: [
        { nivel: 3, nome: "Catalisador Pronto para a Batalha", descricao: "Ao escolher este estilo a partir do 3º nível, você descobriu uma maneira de aprimorar seu Taijutsu por meio de um Catalisador para seu Chakra, usado em sua pessoa, na armadura ou como parte do traje diário (design à sua escolha, como botas ventiladas ou luvas especiais). Tecê-lo em suas roupas leva 1 hora. Uma vez concluído, ganha: resistência a dano de chakra; +1 na CA se integrado a armadura leve ou média; ao fazer verificações de Constituição (Controle de Chakra), pode adicionar seu dado de combate desarmado à rolagem." },
        { nivel: 3, nome: "Comprimento de Onda Anti-Chakra", descricao: "Além disso, no 3º nível, seu catalisador gera um comprimento de onda dispersor de chakra hostil, usado para interromper e arruinar as capacidades de combate de seus alvos. Escolha duas palavras-chave da lista: Sensorial, Fuinjutsu, Liberação da Terra, Liberação do Vento, Liberação do Fogo, Liberação da Água, Liberação do Relâmpago, Tático, Visual, Auditivo. Suas técnicas marciais concedidas por este recurso sempre referenciam as palavras-chave escolhidas.\n\nQuebra de Chakra: ao acertar uma criatura com ataque desarmado ou de Taijutsu que cause dano desarmado, gaste 1 dado marcial; em falha na resistência de Constituição, ela fica incapaz de gastar chakra em jutsu com a palavra-chave escolhida até o fim do seu próximo turno.\n\nQuebra de Foco: ao acertar uma criatura com ataque desarmado ou de Taijutsu que cause dano desarmado, gaste 1 dado marcial, somando-o ao dano causado; se a criatura estiver testando concentração, ela faz resistência de Força contra sua CD de defesa de Taijutsu em vez do teste normal, perdendo a concentração em todos os jutsu se falhar (falha automática se o jutsu tiver a palavra-chave escolhida)." },
        { nivel: 6, nome: "Ataque Perturbador", descricao: "A partir do 6º nível, uma vez por turno, ao causar dano desarmado, gaste até dois dados marciais; o alvo recebe dano de Chakra igual ao dobro do resultado (triplo no 14º nível, quádruplo no 20º). Se o alvo estiver sob efeito de um jutsu com uma palavra-chave escolhida por Comprimento de Onda Anti-Chakra, adicione seu bônus de proficiência ao dano de Chakra causado." },
        { nivel: 9, nome: "Overdrive Catalítico", descricao: "A partir do 9º nível, gastando 1 dado marcial no início de cada turno, pode colocar seu Catalisador em overdrive até o início do próximo turno, ganhando: +1 na CA; +1d4 em verificações de Força, Destreza e Constituição; +1d6 em rolagens de dano de Taijutsu; bônus em arremessos salvadores contra jutsu com palavras-chave escolhidas por Comprimento de Onda Anti-Chakra igual a 1 dado marcial. Em overdrive, só pode manter concentração em um jutsu; se ficar incapacitado, atordoado ou paralisado, o catalisador entra em curto-circuito, ficando incapaz de entrar em overdrive pelos próximos 10 minutos." },
        { nivel: 14, nome: "Comprimento de Onda Anti-Shinobi", descricao: "A partir do 14º nível, sob efeito de Overdrive Catalítico, gaste até 2 dados marciais para selecionar mais uma palavra-chave da lista Comprimento de Onda Anti-Chakra para cada dado gasto. Essas palavras-chave adicionais contam como escolhidas para suas técnicas marciais desta subclasse." },
        { nivel: 17, nome: "Catalisador Inquebrável", descricao: "A partir do 17º nível, seu catalisador não pode mais entrar em curto-circuito por você estar incapacitado, atordoado ou paralisado enquanto em overdrive." },
        { nivel: 20, nome: "Técnica de Ruína", descricao: "A partir do 20º nível, ao lançar um Taijutsu que exija lance de defesa do alvo, gaste 2 dados marciais para conceder a palavra-chave Ruína: o jutsu sempre inflige duas das condições a seguir, independentemente de sucesso ou falha, uma vez por conjuração: Machucado, Concussão, Confuso, Deslumbrado, Enfraquecido." },
      ],
    },
    {
      key: "stancer",
      nome: "Stancer",
      classeKey: "especialista-taijutsu",
      descricaoIntro: "Os especialistas em Taijutsu que se especializam em várias posições são conhecidos como \"Stancers\", capazes de pular para frente e para trás entre várias posturas, misturando e combinando-as para maximizar sua eficácia marcial e potencial.",
      features: [
        { nivel: 3, nome: "Artes Marciais Mistas", descricao: "Ao escolher este estilo a partir do 3º nível, você pode aprender uma postura de Taijutsu do Capítulo 13: Opções de Personalização que não conhece. Enquanto estiver em qualquer postura de Taijutsu, gaste 1 dado marcial para obter o benefício de uma segunda postura de Taijutsu não baseada em plano (como Punho Gentil) que você conheça, simultaneamente pelo minuto seguinte." },
        { nivel: 3, nome: "Combo Breaker", descricao: "Além disso, no 3º nível, você aprende duas técnicas marciais. Contador Alfa: quando uma criatura erra um ataque, use a reação e gaste 1 dado marcial para fazer imediatamente dois ataques desarmados contra ela, somando o dado ao dano; se pelo menos um acertar, ela faz um teste de resistência ou fica incapaz de usar uma reação até o início do próximo turno dela. Cancelamento de Esquiva: ao atingir uma criatura com pelo menos dois ataques desarmados, gaste 1 dado marcial; até o fim do próximo turno dela, ataques direcionados a você sofrem penalidade igual ao seu dado marcial." },
        { nivel: 6, nome: "Memória Muscular", descricao: "A partir do 6º nível, gastando 1 dado marcial, selecione uma criatura hostil visível e faça uma verificação de Artes Marciais contra sua Artes Marciais passiva. Em sucesso, seu próximo ataque corpo a corpo que a atingir adiciona 1 dado de dano adicional; se o resultado for 5 ou mais acima da CD, aumente em +1 (e mais +1 a cada +5 adicional). A partir do 10º nível, pode gastar um dado marcial adicional, somando-o ao resultado da verificação." },
        { nivel: 9, nome: "Combinação de Postura", descricao: "A partir do 9º nível, pode selecionar uma postura de Taijutsu que não conheça, aprendendo-a. Além disso, gastando 1 dado marcial no início de cada turno, obtém o benefício de até 3 posturas de Taijutsu simultaneamente até o início do próximo turno. Enquanto sob o benefício de duas ou mais posturas, adiciona metade do seu dado marcial aos ataques de Taijutsu e adiciona seu modificador de Taijutsu ao dano dos ataques resultantes de Taijutsu que exijam postura, mesmo que já o adicione." },
        { nivel: 14, nome: "Combate Reforçado", descricao: "A partir do 14º nível, se estiver sob o benefício de uma postura com ação especial usável como ação bônus (ex.: Punho da Serpente, Punho do Dragão), pode gastar 1 dado marcial para executá-la como parte de sua ação de Ataque, sem custo adicional, uma vez por rodada, só no seu turno. Se uma postura tiver habilidade especial que exija uma ação ou ação de turno completo, pode gastar 1 dado marcial para realizá-la como ação bônus, uma vez por turno." },
        { nivel: 17, nome: "O Dançarino", descricao: "A partir do 17º nível, o Taijutsu que você lança que exija postura de Taijutsu causa dano adicional igual a 1 dado marcial e ignora resistência, tratando imunidade como resistência. Além disso, sob o benefício de Combinação de Postura, pode adicionar seu modificador de Inteligência, Sabedoria ou Carisma (escolha) ao dano de ataques de Taijutsu que adicionam seu modificador de Taijutsu." },
        { nivel: 20, nome: "Técnica de Dançarino", descricao: "A partir do 20º nível, ao lançar um Taijutsu que exija postura de Taijutsu, gaste 2 dados marciais para conceder a palavra-chave Stancer: o jutsu ignora imunidade, bônus de CA resultantes de características/traços/jutsu, penalidades de acerto, penalidades de dano e aumentos de custo." },
      ],
    },
    {
      key: "talento-e-foco",
      nome: "Talento e Foco",
      classeKey: "especialista-taijutsu",
      descricaoIntro: "Os especialistas em Taijutsu que combinam seu estilo com talento e foco têm um nível de perfeição completamente inédito. Seu talento vem do trabalho árduo, da dedicação e de um suprimento inesgotável de determinação para ser sempre melhor do que no dia anterior.",
      features: [
        { nivel: 3, nome: "Talento Não Natural", descricao: "Ao escolher este estilo a partir do 3º nível, aumente seu conjunto de dados marciais em +1 (+2 no 10º nível, +3 no 17º, cumulativo). Além disso, seus ataques desarmados são tratados como se tivessem as propriedades de arma Crítica, Mortal e Multiataque." },
        { nivel: 3, nome: "Talento Focado", descricao: "Além disso, no 3º nível, você aprende duas técnicas marciais. Agressão Redirecionada: quando uma criatura hostil erra um ataque corpo a corpo ou à distância, use a reação e gaste 1 dado marcial para redirecioná-lo de volta a ela — faça um ataque desarmado corpo a corpo ou à distância (usando o alcance original do ataque); se atingida, ela sofre os efeitos de seu próprio ataque. Ponto de Estilhaçamento: ao acertar um ataque desarmado ou de Taijutsu que cause dano desarmado, gaste 1 dado marcial; a criatura faz resistência de Força ou perde todos os PV temporários ou efeitos de redução de dano até o início do próximo turno dela." },
        { nivel: 9, nome: "Adaptação Concentrada", descricao: "A partir do 9º nível, no início de cada turno, gaste 1 dado marcial e escolha um tipo de dano (Força, Terra, Vento, Fogo, Frio, Relâmpago, Necrótico). Até o início do próximo turno, seus ataques corpo a corpo que causam dano desarmado são tratados como o tipo escolhido. Se usado enquanto sob efeito de uma postura que cause um tipo de dano diferente, pode gastar 1 dado marcial adicional para estender o benefício ao tipo de dano da postura." },
        { nivel: 14, nome: "Legado Talentoso", descricao: "A partir do 14º nível, você ganha +1 técnica marcial adicional conhecida (mais +1 ao atingir o 20º nível)." },
        { nivel: 17, nome: "Golpe Concentrado", descricao: "A partir do 17º nível, ao desferir um ataque desarmado ou de Taijutsu que cause dano desarmado em uma criatura, gaste 3 dados marciais; a criatura faz um arremesso de salvamento (tipo não especificado na fonte extraída) ou fica atordoada até o fim do próximo turno. Depois de usar esta característica, deve gastar 5 dados marciais no início de um turno ou descansar 1 hora para recarregá-la." },
        { nivel: 20, nome: "Técnica Concentrada", descricao: "A partir do 20º nível, ao lançar um Taijutsu, gaste 2 dados marciais para conceder a palavra-chave Foco: o jutsu força a criatura-alvo a um arremesso de Constituição, causando 2d12 de dano e 1 nível de Enfraquecido para cada ponto abaixo da CD em que falhar. Com as palavras-chave Talento e Foco, o jutsu também reduz o lance de defesa do alvo em um valor igual ao número de palavras-chave ganhas por técnicas marciais (ex.: Brutal, Bruto, Devastador). Depois de usar, deve gastar 8 dados marciais no início de um turno ou descansar 8 horas para recarregar." },
      ],
    },
    {
      key: "chama-apaixonada",
      nome: "Chama Apaixonada",
      classeKey: "especialista-taijutsu",
      descricaoIntro: "Os especialistas em Taijutsu que combinam seu estilo com a Chama Apaixonada exalam uma tenacidade inigualável no mundo do Taijutsu — macacões verdes, roupas pesadas e cortes de cabelo excêntricos. Embora associado aos 8 Portões Internos (técnica formalmente proibida, por sua reserva de poder potencialmente fatal), este grupo se concentra em manter o corpo no auge da habilidade e técnica humanas.",
      features: [
        { nivel: 3, nome: "Punhos de Ferro", descricao: "Ao escolher este estilo a partir do 3º nível, uma vez por turno, seu golpe desarmado causa dano adicional igual a 1 dado marcial (+2 dados marciais no 10º nível, +3 no 17º, cumulativo)." },
        { nivel: 3, nome: "Rajada Aprimorada", descricao: "Além disso, no 3º nível, você aprende duas técnicas marciais. Golpes Aprimorados por Chakra: ao declarar um ataque desarmado ou corpo a corpo de Taijutsu, gaste 1 dado marcial para aplicar Chakra: os dois primeiros ataques bem-sucedidos forçam os alvos a um arremesso de Força, ficando Machucados em falha." },
        { nivel: 6, nome: "Envoltórios de Mão da Paixão", descricao: "A partir do 6º nível, você envolve as mãos (fita branca, tiras de tecido preto, etc.), infundindo-as constantemente com chakra. Ao final de um descanso longo, selecione um aprimoramento da lista; não pode trocar até completar outro descanso longo.\n\nGolpes Poderosos: seus ataques de Taijutsu que causam [Dano desarmado] ignoram resistência e tratam imunidade como resistência. A partir do 14º nível, ao causar [Dano desarmado] duas vezes na mesma criatura no seu turno, ela não pode reagir contra você até o início do próximo turno dela.\n\nGuardas Poderosos: ganha redução de dano igual à metade do seu bônus de proficiência (proficiência total a partir do 14º nível).\n\nMobilidade Poderosa: sua velocidade não pode ser reduzida por qualquer meio e você ignora terreno difícil. A partir do 14º nível, ganha imunidade à condição Lentidão (lista de condições adicionais incompleta na fonte extraída)." },
        { nivel: 9, nome: "Finalizadores Flamejantes", descricao: "A partir do 9º nível, ao lançar um Taijutsu com a palavra-chave Finalizador, aprimore-o gastando o número de dados marciais que escolher, ganhando todos os efeitos de custo igual ou menor: 1 dado — aprimora o jutsu em 1 posto, ignorando limitações de posto; 2 dados — adiciona todos os dados marciais gastos ao dano, uma vez por conjuração; 3 dados — ignora imunidade; 4 dados — aumenta todos os dados de dano em 1 passo; 5 dados — trata todos os dados de dano como valor máximo. Depois de usar um efeito concedido, gaste um número igual de dados marciais para recarregar ou descanse 10 minutos.\n\nConfiguração Dinâmica: ao lançar um Taijutsu com a palavra-chave Combo, gaste dados marciais conforme o rank do jutsu (D/C: 1 dado, B/A: 3 dados, S: 5 dados) para lançar, como parte da mesma ação, um Taijutsu com a palavra-chave Finalizador. Depois de usar, não pode lançar Taijutsu com ação ou ação bônus até o início do próximo turno." },
        { nivel: 14, nome: "Vontade Pura", descricao: "A partir do 14º nível, pode lançar Taijutsu com tempo de lançamento de 1 ação como ação bônus. Alternativamente, pode lançar Taijutsu com tempo de lançamento de ação bônus como reação, sem gatilho definido. Pode usar qualquer um desses efeitos duas vezes por descanso." },
        { nivel: 17, nome: "Indignação", descricao: "A partir do 17º nível, quando uma criatura fizer um ataque corpo a corpo contra você, pode gastar 3 dados marciais para lançar um Taijutsu com tempo de lançamento de reação, sem gastar sua reação." },
        { nivel: 20, nome: "Técnica da Chama da Paixão", descricao: "A partir do 20º nível, ao lançar um Taijutsu com a palavra-chave Combo ou Finalizador, gaste 4 dados marciais para conceder a palavra-chave Apaixonado: o jutsu concede imunidade a todas as condições físicas e mentais até o fim do seu próximo turno." },
      ],
    },
  ],
};
