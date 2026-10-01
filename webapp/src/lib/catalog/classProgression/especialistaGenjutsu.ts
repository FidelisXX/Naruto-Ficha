import type { ClassProgressionDefinition } from "@/lib/classProgression/types";

/**
 * Progressão completa do Especialista em Genjutsu — "Observações do
 * Orochimaru" (compêndio de Classes), p.208-233. Complementa o resumo em
 * catalog/classes.ts com a tabela nível-a-nível (1-20), as características
 * por extenso e as 7 subclasses de "Compromisso de Genjutsu" (escolhida no
 * 2º nível).
 *
 * Notas sobre a fonte:
 * - A tabela de nível chama o recurso de subclasse de "Juramento de
 *   Genjutsu", mas o corpo do texto usa "Compromisso de Genjutsu" — nome
 *   mantido aqui por ser a seção que efetivamente titula as 7 subclasses.
 * - "Atualização" (tabela/nome da característica) também aparece no corpo
 *   do texto como "Realização" — mesmo recurso (Dado de Atualização).
 * - "A Virada" (tabela, níveis 11/13/15/20) aparece no corpo do texto como
 *   "A Vez" — provável erro de OCR; usado aqui o nome da tabela.
 * - Além da subclasse (Compromisso de Genjutsu), a classe tem uma segunda
 *   escolha, independente, feita através da característica "Início do
 *   Genjutsu" (3º nível): um "conceito" entre 6 opções, cada uma concedendo
 *   uma Miragem Maleável específica no 7º nível e um recurso de ápice no
 *   11º. Essas opções referenciam "Promessa de Genjutsu" como pré-requisito
 *   em algumas Miragens Maleáveis do catálogo geral — não é uma segunda
 *   subclasse no sentido do schema desta ficha, por isso foi consolidada
 *   como uma única característica (ver "Início do Genjutsu" nos features).
 * - A subclasse "Arma Ilusória" foi remontada juntando dois trechos da
 *   fonte (a descrição inicial, cortada por quebra de página, e um bloco
 *   de continuação que aparecia sem o nome do cabeçalho no trecho seguinte,
 *   mas cujo conteúdo — "Sua arma Ilusória desaparece..." — claramente lhe
 *   pertence).
 * - A subclasse "Sereia" foi completada juntando suas características de
 *   14º e 18º níveis ("Palavras de Arrependimento" e "Influência das
 *   Sereias"), que apareciam em um trecho separado da fonte.
 */
export const progressaoEspecialistaGenjutsu: ClassProgressionDefinition = {
  classeKey: "especialista-genjutsu",
  nomeGrupoSubclasse: "Compromisso de Genjutsu",
  nivelEscolhaSubclasse: 2,

  levels: [
    { nivel: 1, bonusProficiencia: 3, caracteristicas: "Perturbação de Chakra, Atualização",
      colunasExtras: { "Miragens Maleáveis": "-", "Jutsu Conhecidos": "6", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 2, bonusProficiencia: 3, caracteristicas: "Compromisso de Genjutsu, Miragens Maleáveis",
      colunasExtras: { "Miragens Maleáveis": "2", "Jutsu Conhecidos": "7", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 3, bonusProficiencia: 3, caracteristicas: "Início do Genjutsu",
      colunasExtras: { "Miragens Maleáveis": "2", "Jutsu Conhecidos": "8", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 4, bonusProficiencia: 4, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Miragens Maleáveis": "3", "Jutsu Conhecidos": "8", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 5, bonusProficiencia: 4, caracteristicas: "Conversão do Mundo Real, Consciência Aguçada",
      colunasExtras: { "Miragens Maleáveis": "3", "Jutsu Conhecidos": "9", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 6, bonusProficiencia: 4, caracteristicas: "Compromisso de Genjutsu (2)",
      colunasExtras: { "Miragens Maleáveis": "4", "Jutsu Conhecidos": "10", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 7, bonusProficiencia: 5, caracteristicas: "Início do Genjutsu (2)",
      colunasExtras: { "Miragens Maleáveis": "4", "Jutsu Conhecidos": "11", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 8, bonusProficiencia: 5, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Miragens Maleáveis": "5", "Jutsu Conhecidos": "11", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 9, bonusProficiencia: 5, caracteristicas: "Conversão do Mundo Real (2)",
      colunasExtras: { "Miragens Maleáveis": "5", "Jutsu Conhecidos": "12", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 10, bonusProficiencia: 6, caracteristicas: "Compromisso de Genjutsu (3)",
      colunasExtras: { "Miragens Maleáveis": "6", "Jutsu Conhecidos": "13", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 11, bonusProficiencia: 6, caracteristicas: "Consciência Aguçada (2), A Virada",
      colunasExtras: { "Miragens Maleáveis": "6", "Jutsu Conhecidos": "14", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 12, bonusProficiencia: 6, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Miragens Maleáveis": "7", "Jutsu Conhecidos": "14", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 13, bonusProficiencia: 7, caracteristicas: "A Virada, Mestre da Ilusão",
      colunasExtras: { "Miragens Maleáveis": "7", "Jutsu Conhecidos": "15", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 14, bonusProficiencia: 7, caracteristicas: "Compromisso de Genjutsu (4)",
      colunasExtras: { "Miragens Maleáveis": "8", "Jutsu Conhecidos": "16", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 15, bonusProficiencia: 7, caracteristicas: "Conversão do Mundo Real (3), A Virada",
      colunasExtras: { "Miragens Maleáveis": "8", "Jutsu Conhecidos": "17", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 16, bonusProficiencia: 8, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Miragens Maleáveis": "9", "Jutsu Conhecidos": "17", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 17, bonusProficiencia: 8, caracteristicas: "-",
      colunasExtras: { "Miragens Maleáveis": "9", "Jutsu Conhecidos": "18", "Rank Mais Alto do Jutsu": "Rank-S" } },
    { nivel: 18, bonusProficiencia: 8, caracteristicas: "Compromisso de Genjutsu (5)",
      colunasExtras: { "Miragens Maleáveis": "10", "Jutsu Conhecidos": "19", "Rank Mais Alto do Jutsu": "Rank-S" } },
    { nivel: 19, bonusProficiencia: 9, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Miragens Maleáveis": "10", "Jutsu Conhecidos": "20", "Rank Mais Alto do Jutsu": "Rank-S" } },
    { nivel: 20, bonusProficiencia: 9, caracteristicas: "O Prodígio, A Virada (2), Mestre da Ilusão (2)",
      colunasExtras: { "Miragens Maleáveis": "11", "Jutsu Conhecidos": "20", "Rank Mais Alto do Jutsu": "Rank-S" } },
  ],

  features: [
    {
      nivel: 1,
      nome: "Perturbação de Chakra",
      descricao: "Começando no 1º nível, você aprendeu a restringir o chakra de alguns de seus inimigos quando eles são afetados por seu Genjutsu.\n\nUma vez por descanso, quando uma criatura é afetada por um Genjutsu que você lança, você pode interromper o chakra dela até o final do próximo turno. Quando você fizer isso, o próximo jutsu lançado por ela terá seu custo aumentado em um valor igual ao custo original do Genjutsu usado.\n\nSe você tentar usar esse recurso além do seu limite, deve gastar 1 dado de chakra para usá-lo normalmente.\n\nA partir do 5º nível, você pode optar por desabilitar completamente a habilidade de uma criatura de moldar chakra: se ela falhar no teste de resistência, perde a capacidade de moldar chakra ao lançar um jutsu de classificação inferior ao jutsu que a afeta, durante a duração do Genjutsu.\n\nVocê ganha um uso adicional de qualquer um desses efeitos no 7º e no 14º nível.",
    },
    {
      nivel: 1,
      nome: "Atualização",
      descricao: "Além disso, no 1º nível, o Genjutsu que você lança pode usar Carisma em vez de Sabedoria para jogadas de ataque e dano, bem como para o cálculo da CD de salvamento.\n\nSeu talento na arte do Genjutsu também lhe concede acesso a uma profunda reserva de criatividade, representada pelo Dado de Atualização (d4). Você tem um número de Dados de Atualização igual ao seu bônus de proficiência, recuperados em um descanso curto ou longo.\n\nQuando você conjura um Genjutsu que afetaria criatura(s) hostil(is), pode gastar Dados de Atualização para:\n- Gastar qualquer número de dados, causando dano psíquico adicional igual a 3x o resultado.\n- Gastar até 2 dados e adicionar o resultado a um teste de perícia de Sabedoria ou Carisma.\n- Gastar até 5 dados, reduzindo o(s) alvo(s) em -1 por dado gasto em seu(s) teste(s) de resistência.\n\nO Dado de Atualização cresce com o nível: d6 no 9º nível, d8 no 17º nível.\n\nPor fim, você ganha um bônus de 1d4 em testes para Ler o Inimigo usando a perícia Ilusão, podendo usar Sabedoria ou Carisma para o teste.",
    },
    {
      nivel: 2,
      nome: "Compromisso de Genjutsu",
      descricao: "A partir do 2º nível, você firma um Compromisso de Genjutsu (sua subclasse). Seu Compromisso concede recursos no 2º, 6º, 10º, 14º e 18º níveis.",
    },
    {
      nivel: 2,
      nome: "Miragens Maleáveis",
      descricao: "A partir do 2º nível, você aprendeu a manipular fragmentos da própria realidade, imbuindo-se de capacidades únicas que alguns podem considerar antinaturais.\n\nNo 2º nível você aprende duas Miragens Maleáveis à sua escolha (ver catálogo abaixo), ganhando mais uma no 4º, 6º, 8º, 10º, 12º, 14º, 16º, 18º e 20º níveis.\n\nAlém disso, ao ganhar um nível nesta classe, você pode trocar uma Miragem que conhece por outra que possa aprender naquele nível. Um pré-requisito de nível em uma Miragem Maleável refere-se ao seu nível de Especialista em Genjutsu, não ao nível de personagem.",
    },
    {
      nivel: 3,
      nome: "Início do Genjutsu",
      descricao: "A partir do 3º nível, você cria uma base conceitual sobre como manipular a percepção da realidade de qualquer um que esteja em seu caminho, escolhendo um dos conceitos abaixo. Cada conceito concede um benefício imediato, uma Miragem Maleável específica no 7º nível e um recurso de ápice no 11º (que recupera 1 Dado de Atualização gasto, uma vez por turno, ao atender a condição descrita — a mesma limitação de recuperação vale para todos os conceitos).\n\nMANIFESTAÇÃO ELEMENTAL. Selecione uma Liberação de Natureza (Terra, Vento, Fogo, Água ou Relâmpago): você passa a poder aprender Ninjutsu dessa liberação, que perde a palavra-chave Ninjutsu e ganha as palavras-chave Genjutsu, Tátil e Visual (o dano pode continuar do tipo original ou se tornar psíquico). 7º nível: Miragem Maleável da Crônica Ilusória. 11º nível (ápice): quando uma criatura hostil falha por 5 ou mais em um teste de resistência contra um Genjutsu seu dessa Liberação de Natureza, recupera 1 Dado de Atualização.\n\nINSTRUMENTO ALUCINATÓRIO. Escolha um instrumento (com descrição e design próprios) ao qual sua Ilusão está ligada. Como ação bônus, ao lançar Genjutsu com a palavra-chave Auditivo que cause dano ou inflija penalidade a uma criatura hostil, pode usar o instrumento para alterar o alcance do jutsu para Próprio (cone de 4,5m) ou Próprio (esfera de raio 3m); todas as criaturas no raio (exceto você) são afetadas, desde que não estejam surdas. 7º nível: Miragem Maleável da Canção do Fim. 11º nível (ápice): quando uma criatura hostil falha criticamente em um teste de resistência contra um Genjutsu seu com a palavra-chave Auditivo, recupera 1 Dado de Atualização.\n\nFORÇA FANTASMAL. Como ação, você libera um feixe de energia psiônica em direção a uma criatura a até 18 metros, fazendo um ataque de Genjutsu à distância; em acerto, 1d10 de dano psíquico (tratado como Genjutsu com as palavras-chave Genjutsu e Tátil). A partir do 7º nível dispara 2 feixes (3 no 13º, 4 no 16º), cada um com sua própria jogada de ataque, podendo mirar o mesmo alvo ou alvos diferentes. Requer capacidade de moldar chakra. 7º nível: Miragem Maleável dos Pensamentos Agonizantes. 11º nível (ápice): ao fazer um ataque de Genjutsu à distância superando a CA do alvo em 10 ou mais, recupera 1 Dado de Atualização.\n\nARMA ILUSÓRIA. Como ação bônus, crie uma Arma Ilusória em sua mão vazia, com a forma que escolher a cada criação; você é proficiente com ela e os ataques usam seu bônus de ataque de Genjutsu. Se for de longo alcance, seu alcance máximo é 9 metros. Causa dano psíquico e conta como ataque corpo a corpo de Genjutsu para fins de ativar outras Miragens Maleáveis. A arma desaparece se ficar a mais de 1,5 metro de você por 1 minuto ou mais, se você usar este recurso novamente, se a descartar (sem gastar ação), se seu chakra chegar a 0, se você ficar inconsciente ou morrer. 7º nível: Miragem Maleável da Ilusão Perversa. 11º nível (ápice): ao fazer um ataque corpo a corpo de Genjutsu superando a CA do alvo em 10 ou mais, recupera 1 Dado de Atualização.\n\nMÁRMORE DA REALIDADE (REALITY MARBLE). O custo de chakra para manter a concentração em um Genjutsu é reduzido por um valor igual ao seu rank (Rank D: 1, C: 2, B: 3, A: 4, S: 5). Enquanto se concentra em um Genjutsu, pode usar uma ação para selecionar um novo alvo para ele; o novo alvo faz o teste de resistência original como se fosse o alvo quando o jutsu foi lançado — isso não estende a duração do jutsu. 7º nível: Miragem Maleável do Genjutsu Persistente. 11º nível (ápice): quando 2 ou mais criaturas hostis falham em um teste de resistência contra o mesmo Genjutsu seu (não precisam falhar simultaneamente), recupera 1 Dado de Atualização.\n\nCRONÔMETRO TEMPORAL. Suas ilusões vêm de um cronômetro mundano ao qual você tem um vínculo (relógio de pulso, de bolso, colar, etc.). Como ação bônus, ao se beneficiar de um Genjutsu que conceda bônus de ataque, testes de perícia, resistência ou CA, pode ativar o cronômetro: no início de cada turno, role 1d12, reduzindo-o em 1 passo a cada resultado de 1, 2 ou 3 (d12>d10>d8>d6>d4>0); enquanto tiver esse dado, você é tratado como deslocado, e condições de efeitos hostis ganhas enquanto deslocado só afetam você quando deixar de estar deslocado. Após usar este recurso, fica indisponível por 1 hora. 7º nível: Miragem Maleável Pausa. 11º nível (ápice): quando uma criatura hostil falha por 5 ou mais em um teste de resistência contra um Genjutsu seu que inflija penalidade em ataques, testes de perícia, resistência ou CA, recupera 1 Dado de Atualização.",
    },
    {
      nivel: 4,
      nome: "Melhoria/Talento de Pontuação de Habilidade",
      descricao: "Quando você alcança o 4º nível, e novamente no 8º, 12º, 16º e 19º, você pode aumentar um valor de habilidade em +1 e ganhar um Talento de sua escolha para o qual se qualifique. Normalmente, você não pode aumentar um valor de habilidade acima de 20 usando este recurso.",
    },
    {
      nivel: 5,
      nome: "Conversão do Mundo Real",
      descricao: "A partir do 5º nível, você aprendeu a infundir sua criatividade com chakra suficiente para ir além dos limites normais, usando suas reservas de Dados de Atualização para criar efeitos adicionais conforme a necessidade do momento. Esses efeitos são chamados Conversões. Selecione uma à sua escolha; ganha outra no 9º e no 15º nível.\n\nALTERAÇÃO ATUALIZADA. Ao lançar um Genjutsu que exija teste de resistência, pode gastar 1 Dado de Atualização para alterar o atributo do teste para Inteligência, Sabedoria ou Carisma. Duas vezes por descanso longo.\n\nDUPLICIDADE ATUALIZADA. Como ação, gaste 1 Dado de Atualização para criar uma duplicata ilusória perfeita de si mesmo, que dura 1 minuto ou até perder a concentração, em um espaço desocupado a até 9 metros de você. Como ação bônus, pode mover a duplicata até 9 metros (máximo 36 metros de você). Você compartilha os sentidos da duplicata e pode lançar Genjutsu como se estivesse em seu espaço. Quando você e a ilusão estão a até 1,5 metro de uma criatura que a veja, você tem vantagem em jogadas de ataque contra ela.\n\nPERCEPÇÃO ATUALIZADA. Quando uma criatura falharia (mas não falharia criticamente) em um teste de resistência contra seu Genjutsu, pode gastar até 2 Dados de Atualização e rolá-los, reduzindo o resultado do salvamento dela pela metade do total (mín. 1) — podendo causar falha crítica.\n\nPERFEIÇÃO ATUALIZADA. Como ação bônus, gaste 1 Dado de Atualização ao lançar um Genjutsu de Rank C ou inferior: se o jutsu exigir rolagem de dados para dano, cura, alteração de redução de dano ou pontos de vida temporários, adicione o Dado de Atualização à rolagem.\n\nPODER ATUALIZADO. Ao lançar um Genjutsu de alvo único que inflija qualquer condição, se o alvo tiver resistência ou imunidade a ela, pode gastar 1 Dado de Atualização para ignorá-la nessa conjuração.",
    },
    {
      nivel: 5,
      nome: "Consciência Aguçada",
      descricao: "Para um Especialista em Genjutsu, os detalhes são a base de um Genjutsu bem construído. No 5º nível, você ganha a habilidade de lembrar com precisão qualquer coisa que tenha visto ou ouvido no último mês.\n\nAlém disso, quando você obtém sucesso por 5 ou mais em um teste de resistência contra um Genjutsu lançado por uma criatura hostil, recupera 1 Dado de Atualização gasto; ao fazê-lo, pode gastar sua reação para lançar um Genjutsu que conheça com tempo de lançamento de 1 ação.\n\nVocê também reduz pela metade o tempo de inatividade necessário para criar ou aprender Genjutsu.",
    },
    {
      nivel: 11,
      nome: "A Virada",
      descricao: "A partir do 11º nível, uma vez por descanso longo, quando uma criatura obtém sucesso — mas não sucesso crítico — em um teste de resistência contra um Genjutsu que você conjurou, você pode forçá-la a sofrer os efeitos de uma falha.\n\nA partir do 15º nível, você pode usar esse recurso uma vez por descanso curto.\n\nA partir do 20º nível, quando você usa esse recurso, a criatura sofre os efeitos de uma falha crítica, se o jutsu tiver tal condição.",
    },
    {
      nivel: 13,
      nome: "Mestre da Ilusão",
      descricao: "Você dominou a maioria das formas de Genjutsu. No 13º nível, ganhe imediatamente uma das características abaixo (ganha uma segunda no 20º nível):\n- Maior Maestria: criaturas cujo resultado no teste de resistência for 2 ou mais abaixo da sua CD de salvamento são tratadas como se tivessem falhado criticamente.\n- Entendimento Superior: a criatura deve superar sua CD em 10 ou mais para ser tratada como sucesso crítico contra um Genjutsu seu.\n- Ilusão Subjugada: aumenta em 5 a CD do teste de Ilusão feito para identificar seu Genjutsu.\n- Fluxo de Genjutsu: dobra o alcance do Genjutsu que lança; Genjutsu com alcance \"Toque\" passa a ter alcance de 9 metros.",
    },
    {
      nivel: 20,
      nome: "O Prodígio",
      descricao: "A partir do 20º nível, você alcançou o auge da habilidade ilusória. Uma vez por descanso, quando você lança um Genjutsu que force uma criatura a fazer qualquer teste de resistência, ela falha criticamente automaticamente.",
    },
    {
      nivel: 2,
      nome: "Catálogo de Miragens Maleáveis",
      descricao: `Lista de Miragens Maleáveis disponíveis para o recurso Miragens Maleáveis (2º nível). Cada entrada já inclui seu pré-requisito, quando houver.

- Aceleração (Pré-requisito: Cronômetro Temporal): Ação, escolha até 3 criaturas voluntárias em raio de 4,5m; durante 1 minuto cada uma pode usar ação bônus para a ação Correr. Ganham vantagem no próximo teste de resistência de Destreza, encerrando o efeito. Uma vez por descanso curto.
- Em Baixo da Bota (Pré-requisito: 9º nível): Lance Psionics: Crush! sem custo, como ação, uma vez por descanso longo, podendo escolher até 3 criaturas adicionais. Após o limite de usos, pode lançar gastando 2 dados de Chakra.
- Pensamentos Berserk (Pré-requisito: 9º nível): Lance Monstros das Sombras como ação, uma vez por descanso; uma criatura que precise testar resistência por ferir um aliado sofre -1d4. Após o limite de usos, gaste 1 dado de Chakra.
- Mente Agnóstica: Compreende e se comunica em qualquer idioma ou dialeto, desde que o interlocutor fale algum idioma.
- Sussurros Encantadores: Lance Dissonância Encantadora sem custo, como ação, uma vez por descanso. Após o limite, gaste 1 dado de Chakra.
- Pensamentos Agonizantes: Genjutsu que exige jogada de ataque adiciona seu modificador de Genjutsu ao dano em acerto, se ainda não o fizer.
- Presas Negras: Lance Shadow Bite sem custo, como ação, no rank mais alto que puder lançar, duas vezes por descanso. Após o limite, gaste 1 dado de Chakra.
- Armadura de Psicose: Use seu modificador de Genjutsu em vez de Destreza para calcular sua CA.
- Imagem Ascendente: Lance Haze Clone sem custo, como ação, uma vez por descanso. Após o limite, gaste 1 dado de Chakra.
- Canção da Lâmina (Pré-requisito: 9º nível): Lance Lâminas Dançantes sem custo, como ação, uma vez por descanso, ganhando +2 cópias ilusórias adicionais de uma arma empunhada. Após o limite, gaste 1 dado de Chakra.
- Mentes Prontas para a Batalha: Lance Abençoar duas vezes por descanso, sem custo, como ação. Após o limite, gaste 1 dado de Chakra.
- Discurso da Besta: Lance Animal Companion como ação bônus, sem custo.
- Luzes Cegadas: Lance Color Spray sem custo, como ação, uma vez por descanso. Após o limite, gaste 1 dado de Chakra.
- Influência Sedutora: Ganha proficiência em Enganação e Persuasão (ou experiência em uma delas, se já proficiente em ambas).
- Livro de Segredos Roubados: Em conversa, ao fazer uma pergunta a uma criatura relutante, force um teste de resistência de Sabedoria; em falha (ou se ela responder com sinceridade), a resposta mais precisa possível é escrita em um livro/pergaminho que você segure. Uma vez por descanso curto ou longo.
- Manto de Correntes (Pré-requisito: Mármore da Realidade): Ação bônus, gaste 5 de chakra: cerca-se de uma aura em forma de correntes (raio 1,5m, não atravessa cobertura) até ficar incapacitado, dispensá-la como ação bônus ou chakra chegar a 0. Concede vantagem em Carisma (Intimidação), mas desvantagem nos demais testes de Carisma; qualquer criatura que comece o turno na aura sofre dano psíquico igual ao seu modificador de Genjutsu (mín. 0). Uma vez por descanso curto ou longo.
- Elemento Acorrentado (Pré-requisito: Manifestação Elemental): Ao causar dano com um jutsu elemental concedido por Manifestação Elemental, escolha outra criatura no alcance: ela faz resistência de Sabedoria ou sofre metade do dano do alvo original. Duas vezes por descanso.
- Confusão Crítica (Pré-requisito: 13º nível): Uma vez por descanso longo, quando uma criatura obtiver sucesso crítico contra seu Genjutsu, force-a a sofrer os efeitos de falha crítica (se o jutsu tiver tal efeito).
- Mente Acorrentada (Pré-requisito: 9º nível): Lance Mind Spike sem custo, como ação, uma vez por descanso curto. Após o limite, gaste 1 dado de Chakra.
- Momento Crítico (Pré-requisito: 9º nível): Uma vez por descanso longo, ação bônus: aumenta em +3 seu alcance de ameaça crítica com ataques de Genjutsu; ao final do turno de uso, ganha 3 graus de concussão.
- Cadeias de Loucura (Pré-requisito: 9º nível): Lance Tree Binding Death sem custo, como ação, uma vez por descanso longo. Após o limite, gaste 2 dados de Chakra.
- Duplicata Enganosa: Ao lançar um Genjutsu, use ação bônus para ficar invisível até o início do próximo turno, deixando uma ilusão em seu lugar. Usos iguais ao seu modificador de Genjutsu, recuperados em descanso longo.
- Choque de Vontades (Pré-requisito: Arma Ilusória): Ao causar dano a um inimigo com Genjutsu ou ataque com arma, use ação bônus para perturbar seu chakra: teste de resistência de Sabedoria ou seus testes de concentração ficam em desvantagem até o fim do seu próximo turno, e sofre 1d4 de dano psíquico se não mantiver a concentração em um jutsu.
- Desacelerar (Pré-requisito: Cronômetro Temporal): Ação, escolha 1 criatura a até 18m; falha em Sabedoria reduz sua velocidade pela metade, nega bônus de velocidade e impõe desvantagem em resistências de Destreza por 1 minuto (pode repetir o teste como ação para encerrar). Uma vez por descanso curto.
- Paisagem de Sonhos: Ação, escolha uma criatura conhecida no mesmo plano; você entra em transe e, se ela estiver dormindo, aparece em seu sonho e pode moldar o ambiente onírico; pode sair do transe a qualquer momento. Alternativamente, grave uma mensagem de até 10 minutos para reprodução no sonho dela. Criatura hostil resiste com Sabedoria contra sua CD.
- Visão do Demônio: Enxerga normalmente no escuro e com base em chakra escuro, até 36 metros.
- Vigor Diabólico: Ação, conceda a si mesmo 1d4 PV temporários (sem gastar chakra); aumenta em +1d4 no 5º, 9º, 13º e 17º nível. Uma vez a cada 10 minutos.
- Arma Dupla (Pré-requisito: Arma Ilusória): Crie uma segunda Arma Ilusória (nenhuma pode ter a propriedade duas mãos); pode invocar ambas simultaneamente.
- Palavra Terrível (Pré-requisito: 9º nível): Lance Paralisia Sem Esforço sem custo, como ação, uma vez por descanso longo. Após o limite, gaste 2 dados de Chakra.
- Mente Entorpecida (Pré-requisito: 9º nível): Lance Lentidão sem custo, como ação, uma vez por descanso curto. Após o limite, gaste 2 dados de Chakra.
- Tenacidade Elementar (Pré-requisito: Manifestação Elemental): Ao sofrer dano de um jutsu com a palavra-chave da sua Liberação de Natureza escolhida, use reação para absorvê-lo: dano negado e você ganha PV temporários iguais à metade do dano (antes de resistências/imunidades), até 3x seu modificador de Genjutsu. Duas vezes por descanso longo.
- Pensamentos Maus: Lance Mind Crunch sem custo, como ação, duas vezes por descanso, com +1 dado de dano; em falha crítica, a CA das criaturas afetadas é reduzida em 3. Após o limite, gaste 1 dado de Chakra.
- Névoa Menor (Pré-requisito: 9º nível): Lance Névoa de Guerra pela metade do custo, como ação, uma vez por descanso, com o cubo aumentado para 13,5m. Após o limite, gaste 1 dado de Chakra.
- Desaparecer na Escuridão: Realize Desengajar ou Esconder-se como ação bônus.
- Aperto de Coragem: Uma vez por turno, ao atingir uma criatura com Genjutsu que exija jogada de ataque, force-a a se mover até 3m em linha reta na sua direção.
- Destino Rápido (Pré-requisito: Cronômetro Temporal, 10º nível): Ação, leia a mente de uma criatura a até 18m (resistência de Sabedoria); em falha, o Mestre revela o que ela gastará em sua próxima ação. Duas vezes por descanso longo.
- Melodia Assustadora (Pré-requisito: Instrumento Alucinatório): Ao lançar um Genjutsu auditivo que cause dano com seu instrumento, force resistência de Sabedoria; falha concede 1 grau de medo. A criatura pode repetir o teste ao final de cada turno se deixar de ouvi-lo.
- Combate à Miragem (Pré-requisito: Arma Ilusória): Escolha um Estilo de Luta (Capítulo 13: Opções de Personalização); não pode repetir o mesmo estilo.
- Briga Ilusionária: Lance Psionics: Strike! em si mesmo, como ação, duas vezes por descanso, sem custo e sem gastar chakra para manter concentração; ataques desarmados podem se tornar ataques corpo a corpo de Genjutsu. Após o limite, gaste 1 dado de Chakra.
- Liberdade de Frenesi (Pré-requisito: 9º nível): Lance Frenesi: Explosão sem custo, como ação, uma vez por descanso longo, podendo selecionar um segundo alvo. Após o limite, gaste 2 dados de Chakra.
- Bukijutsu Ilusionário (Pré-requisito: Arma Ilusionária Suprema): Bukijutsu lançado com sua Arma Ilusória usa seu modificador de Genjutsu; não pode exceder Rank C.
- Olhar de Duas Mentes: Ação, toque um humanoide voluntário e perceba através de seus sentidos até o fim do seu próximo turno; pode manter a conexão gastando a ação em turnos seguintes, até 1km de distância. Enquanto ativo, você fica cego e surdo ao que está ao seu redor.
- Crônica Ilusionária (Pré-requisito: Manifestação Elemental): Ritual meditativo em um descanso; escolha resistências de Destreza ou Força: ao fazer esse teste, use a reação para ganhar vantagem nele e lançar um Genjutsu Rank D (1 ação). Uma vez por descanso curto ou longo.
- Ferro Ilusionário (Pré-requisito: Arma Ilusória): Uma vez por turno, ao acertar com sua Arma Ilusória, gaste 5 de chakra para causar 2d8 de dano psíquico extra; mais 3 de chakra para +1d8 adicional nos níveis 5º, 9º, 13º e 17º.
- Pensamentos Nevoentos: Lance Persuasão do Glamour sem custo, como ação, uma vez por descanso. Após o limite, gaste 1 dado de Chakra.
- Vigor Ilusionário: Ganha proficiência em Atletismo e Acrobacia (ou experiência em uma delas, se já proficiente em ambas).
- Visões Nevoas (Pré-requisito: 9º nível): Lance Aspecto Inócuo pela metade do custo, como ação, uma vez por descanso; o jutsu só pode ser quebrado por inspeção física, não por movimento ou som. Após o limite, gaste 1 dado de Chakra.
- Elemento Ilusório (Pré-requisito: Manifestação Elemental): Ao lançar um Genjutsu que causa dano, pode alterar o tipo de dano para o elemento escolhido.
- Movimentos Conflitos: Ao atingir uma criatura com Genjutsu que exija jogada de ataque, reduz a velocidade dela em 3m até o fim do seu próximo turno (acumula até duas vezes).
- Arma Ilusionária Melhorada (Pré-requisito: Arma Ilusória): Sua Arma Ilusória ganha +1 em ataque e dano; se de longo alcance, alcance máximo 18m e perde a propriedade Pesada.
- Múltiplas Formas: Lance Transform sem custo, podendo se transformar em objetos pequenos, médios ou grandes (seu peso não muda; teste de Investigação ou Ilusão contra sua CD revela o disfarce). Transformado em algo menor, não pode se mover sozinho.
- Dor Enlouquecedora (Pré-requisito: Dor, Dor Dupla ou Dor Ilimitada, Força Fantasmal): Ação bônus, gaste 5 de chakra: causa o dano máximo com o Genjutsu de Dor que afeta o alvo, e seus efeitos podem ser desencadeados por qualquer ataque (não só o seu) até o fim do turno.
- Sem Luz no Final (Pré-requisito: 13º nível): Lance Palavra dos Perdidos pela metade do custo, como ação, uma vez por descanso, reduzindo em 1 o número de fraturas necessário para seus efeitos. Após o limite, gaste 3 dados de Chakra.
- Magnum Opus (Pré-requisito: 13º nível, Mármore da Realidade): Lance Bringer of Darkness ou Geas sem custo, como ação, uma vez; depois, só após descanso longo. Após o limite, gaste 3 dados de Chakra.
- Placebo Mental (Pré-requisito: Mármore da Realidade): Ao recuperar pontos de vida, ganha PV temporários iguais à metade do valor recuperado (não acumula consigo mesmo), durando 1 minuto.
- Um com Sombras (Pré-requisito: Mármore da Realidade): Em área de pouca luz ou escuridão, use a ação para ficar invisível e sem emitir som ao se mover; perde o benefício ao se mover mais da metade da velocidade em uma rodada, atacar ou lançar um jutsu.
- Pausa (Pré-requisito: Cronômetro Temporal): Lance False Pain sem custo, como ação, duas vezes por descanso curto; o dano psíquico final é reduzido pela metade e o alcance aumenta para 18m. Após o limite, gaste 1 dado de Chakra.
- Genjutsu Persistente (Pré-requisito: Mármore da Realidade): Uma criatura hostil sob efeito do seu Genjutsu que tente lançar um jutsu Rank D ou superior tem o custo aumentado em 3 (mais 2 por rank acima de D).
- Pedaço de Mente: Lance Mind Sliver sem custo, como ação bônus, com o dado de dano aumentado para d8.
- Músicas Prolongadas (Pré-requisito: Instrumento Alucinatório): Ao lançar um Genjutsu auditivo de concentração com seu instrumento, pode gastar a ação bônus em vez de chakra para mantê-lo a cada turno subsequente.
- Canção de Proteção (Pré-requisito: Instrumento Alucinatório): Ao lançar um Genjutsu auditivo que adicione dados extras a ataques, perícia ou resistência com seu instrumento, também concede PV temporários iguais ao seu nível de Especialista em Genjutsu.
- Bebedor de Psique (Pré-requisito: Força Fantasmal): Uma vez por turno, ao causar dano com Genjutsu, use ação bônus para ganhar o dano causado como PV temporários até o fim do seu próximo turno.
- Dor Implacável (Pré-requisito: Dor, Dor Dupla ou Dor Ilimitada, Força Fantasmal): Cria um elo de dor com a criatura afetada por esses Genjutsu; ao sofrer dano estando a até 18m dela e ela puder vê-lo, use reação e gaste 5 de chakra para causar a ela dano psíquico igual ao que você sofreu.
- Repelindo Ilusões: Ao atingir uma criatura com Genjutsu que exija jogada de ataque, pode empurrá-la até 3m em linha reta para longe de você.
- Genjutsu Resiliente (Pré-requisito: 9º nível): Quando tentarem usar Chakra Shatter ou Genjutsu Break contra um Genjutsu seu, use reação e gaste 1 dado de Chakra para que rolem com desvantagem, independentemente do rank atualizado do jutsu.
- Abalada: Lance Sobressalto sem custo, como ação, uma vez por descanso. Após o limite, gaste 1 dado de Chakra.
- Mortalha de Sombras (Pré-requisito: 13º nível): Lance um Ninjutsu das Trevas como ação; o jutsu perde a palavra-chave Ninjutsu e ganha Genjutsu e Visual. Até duas vezes antes de precisar de um descanso longo.
- Trabalho de Assinatura (Pré-requisito: 9º nível): Lance Ilusões Programadas pela metade do custo, como ação, escolhendo um Genjutsu Rank D ou inferior que conheça; a ilusão pode lançá-lo uma vez por minuto usando seu modificador e nível. Se a ilusão sofrer dano real, dissipa-se. Uma vez por descanso longo.
- Arma Ilusionária Suprema (Pré-requisito: Arma Ilusionária Melhorada, 9º nível): Sua Arma Ilusória ganha +2 em ataque e dano, pode ficar a até 9m de você sem se dispersar; se de longo alcance, usa o alcance normal da arma. Ao lançar um Genjutsu, pode infundi-lo na arma e atacar corpo a corpo com Genjutsu, aplicando ambos os efeitos ao acertar (resistência ao Genjutsu infundido rola 1d4 adicional, subtraído do resultado).
- Canção do Fim (Pré-requisito: Instrumento Alucinatório): Lance a distorção Ringing Bell sem custo, como ação, duas vezes por descanso curto, só com componentes FN e Arma; se já mantiver uma instância ativa, o lançamento anterior não termina — ambas são mantidas como se fossem uma só, sem custo de chakra para manutenção. Após o limite, gaste 1 dado de Chakra.
- Tentativa de Escapar: Como reação a falhar em um teste de resistência, lance Liberar.
- Roubando Confiança: Lance Inépcia sem custo, como ação, duas vezes por descanso curto. Após o limite, gaste 1 dado de Chakra.
- Pensamentos Superiores (Pré-requisito: 15º nível): Lance um Genjutsu Rank S à sua escolha, como ação de turno completo, sem custo, uma vez por descanso longo, ganhando 3 graus de Confuso e Concussão. Após o limite, gaste 4 dados de Chakra.
- Tempo em uma Garrafa (Pré-requisito: Cronômetro Temporal, 17º nível): Ação, escolha um ponto a até 27m; criaturas em esfera de raio 1,5m centrada nele fazem resistência de Sabedoria (podem falhar voluntariamente); em falha, force uma de: Reverter (repetem seu último conjunto de ações no próximo turno), Pausa (atordoadas até o fim do próximo turno) ou Avanço Rápido (agem imediatamente, fora de ordem). Uma vez por descanso longo.
- Passeio do Tempo (Pré-requisito: Cronômetro Temporal, 14º nível): Ação, escolha até 2 criaturas voluntárias a até 9m; cada uma ganha um Destino Ajustado à escolha: Combate (próximo ataque é crítico automático em 1-5 no d20, além da faixa normal), Proteção (próximo dano sofrido é o mínimo possível) ou Mobilidade (próximo movimento parece teletransporte, sem provocar oportunidades/reações). Uma vez por descanso longo.
- Arma Ilusionária Final (Pré-requisito: Arma Ilusionária Suprema, 13º nível): Sua Arma Ilusória ganha +3 em ataque e dano; pode lançar Genjutsu através dela como se ela conjurasse; como reação à falta de um oponente, faz um ataque rápido adicional com ela.
- Dor Vampírica (Pré-requisito: Dor, Dor Dupla ou Dor Ilimitada): Uma criatura sob efeito desses Genjutsu que sofre dano concede a você chakra igual ao resultado do teste desse jutsu, uma vez por turno.
- Ilusão Viciosa (Pré-requisito: Arma Ilusória): Pode atacar duas vezes com sua Arma Ilusória, em vez de uma, ao realizar a ação de Ataque.
- Voz de um Velho Amigo: Comunique-se telepaticamente com uma criatura voluntária a até 1,6km, desde que saiba sua localização geral; ela pode resistir ao efeito se desejar.`,
    },
  ],

  subclasses: [
    {
      key: "sedutor",
      nome: "Sedutor",
      classeKey: "especialista-genjutsu",
      descricaoIntro: "O Especialista em Genjutsu que escolhe se tornar um Sedutor torna o adversário confuso, direciona mal seus inimigos e muda suas percepções aparentemente por capricho.",
      features: [
        { nivel: 2, nome: "Aparência Inspirada", descricao: "Quando você escolhe este caminho no 2º nível, ganha o Genjutsu Transformação Rank E (ou outro Genjutsu Rank E para o qual se qualifique, se já o conhecer). Pode lançar Transformação com custo 0, como ação bônus. Enquanto sob seus efeitos, seus testes de Carisma não podem ser feitos em desvantagem e ganham +1d4 ao interagir com criaturas familiarizadas com o objeto da sua transformação." },
        { nivel: 2, nome: "Presença Encantadora", descricao: "A partir do 2º nível, Genjutsu que você conjura com a palavra-chave Visual tem CD aumentada em +1 (+2 no 10º, +3 no 19º nível).\n\nAlém disso, criaturas sob efeito de um Genjutsu Visual seu podem fazer você desaparecer de sua vista: até o fim do seu próximo turno, você fica invisível para uma criatura afetada à sua escolha (desde que não esteja a até 3 metros dela). Se afetar múltiplas criaturas, pode ficar invisível para um número delas igual ao seu modificador de Genjutsu. Duas vezes por descanso (ganha um uso adicional no 10º nível)." },
        { nivel: 6, nome: "Além da Vista", descricao: "A partir do 6º nível, ao lançar um Genjutsu com a palavra-chave Visual, pode ignorar qualquer efeito que permitiria a uma criatura ter sucesso automático contra ele, como visão verdadeira ou sentido de tremor. Duas vezes por descanso, ou gastando 1 Dado de Atualização além do limite." },
        { nivel: 10, nome: "Fundição Torcida", descricao: "A partir do 10º nível, selecione um Genjutsu que conheça. Como ação bônus ao usá-lo, pode fazer com que pareça se originar da localização de outra criatura que possa ver dentro do alcance do jutsu. Pode trocar o Genjutsu selecionado ao terminar um descanso longo." },
        { nivel: 10, nome: "Força Enganadora", descricao: "A partir do 10º nível, ao lançar um Genjutsu que imponha penalidade a uma criatura hostil, pode gastar 1 Dado de Atualização: durante a conjuração, o alvo sofre penalidade em testes de perícia e jogadas de ataque igual ao resultado do dado." },
        { nivel: 14, nome: "Espaço Ilusório", descricao: "A partir do 14º nível, quando uma criatura a até 9 metros faz uma jogada de ataque contra você, pode usar a reação para criar um Genjutsu que mude sua perspectiva do espaço. O atacante faz resistência de Carisma contra sua CD; em falha, é teletransportado para um espaço que poderia razoavelmente alcançar, desperdiçando o ataque. Em sucesso, você não pode usar este recurso nele novamente até um descanso longo." },
        { nivel: 18, nome: "Influência Sedutora", descricao: "A partir do 18º nível, você aprendeu a usar seu Genjutsu para submeter inimigos à sua vontade. Uma vez por lançamento, quando uma criatura falha em um teste de resistência contra seu Genjutsu, pode gastar 2 Dados de Atualização para que ela não possa mais refazer testes de resistência durante a duração do jutsu. Duas vezes, depois precisa de um descanso longo." },
      ],
    },
    {
      key: "pensamentos-corruptos",
      nome: "Pensamentos Corruptos",
      classeKey: "especialista-genjutsu",
      descricaoIntro: "O Especialista em Genjutsu que escolhe se tornar um mestre dos Pensamentos Corruptos torna-se capaz de derrubar inimigos poderosos sem sequer se mover, quebrando-os antes mesmo que percebam o que está acontecendo. Selecionar este compromisso concede o Genjutsu único Zombaria Cruel.",
      features: [
        { nivel: 2, nome: "Zombarização Viciosa", descricao: "Ao escolher este caminho no 2º nível, você aprende a distorcer suas palavras para afetar a mente de adversários. Como ação, selecione uma criatura que possa ouvi-lo (mesmo sem entendê-lo): ela faz resistência de Sabedoria ou sofre 2d4 de dano psíquico e 1d4 de penalidade em sua próxima jogada de ataque até o fim do próximo turno.\n\nO dano e a penalidade aumentam com o nível: 4d4/2d4 no 7º, 6d4/3d4 no 13º, 8d4/4d4 no 16º nível." },
        { nivel: 2, nome: "Destruindo Seu Mundo", descricao: "Além disso, no 2º nível, Genjutsu que você lança e que cause dano passa a adicionar seu modificador de Genjutsu ao dano, se ainda não o fizer." },
        { nivel: 6, nome: "Pesadelo Encarnado", descricao: "A partir do 6º nível, duas vezes por descanso, pode lançar um Genjutsu de dano Rank C ou inferior com tempo de lançamento de 1 ação, como ação bônus (ganha um uso adicional no 10º e 13º nível). A partir do 13º nível, pode usar este recurso com Genjutsu de Rank B ou inferior." },
        { nivel: 10, nome: "Quebrador de Psique", descricao: "A partir do 10º nível, selecione um Genjutsu de dano que conheça. Como ação bônus ao lançá-lo, a(s) criatura(s) afetada(s) sofre(m) -1 de CA por 1 minuto (acumula até 3 vezes). Removível com qualquer jutsu de Rank C ou superior que remova condições mentais." },
        { nivel: 10, nome: "Psique Corrupta", descricao: "A partir do 10º nível, ao conjurar um Genjutsu que cause dano a no máximo uma criatura hostil, pode gastar 2 Dados de Atualização: criaturas hostis à sua escolha a até 3 metros da original fazem resistência de Inteligência ou sofrem o mesmo dano." },
        { nivel: 14, nome: "Pensamentos Vindictivos", descricao: "A partir do 14º nível, quando uma criatura a até 9 metros faz uma jogada de ataque contra você, pode usar a reação para criar uma aura de Genjutsu que causa dor intensa a ela. Em falha na resistência de Carisma, o ataque é interrompido e ela sofre Xd8 de dano psíquico (X = seu bônus de proficiência). Em sucesso, você não pode usar este recurso nela novamente até um descanso longo." },
        { nivel: 18, nome: "Influência Corrupta", descricao: "A partir do 18º nível, uma vez por lançamento, quando uma criatura falha em um teste de resistência contra um Genjutsu de dano seu, pode gastar 1 Dado de Atualização: ela não se beneficia de sucesso crítico em testes de resistência e sofre -1 (acumulável até -5) em resistências contra seu Genjutsu pelo próximo minuto." },
      ],
    },
    {
      key: "ilusionista",
      nome: "Ilusionista",
      classeKey: "especialista-genjutsu",
      descricaoIntro: "O Especialista em Genjutsu que escolhe se tornar um Ilusionista torna-se uma força capaz de dobrar a realidade e a percepção dos outros aos seus caprichos.",
      features: [
        { nivel: 2, nome: "Moldando Seu Mundo", descricao: "Ao escolher este caminho no 2º nível, você ganha o Genjutsu Rank E Ilusão Menor (ou outro Genjutsu Rank E, se já o conhecer; não conta no número de jutsu conhecidos). Ilusão Menor passa a criar som e imagem com um único lançamento e não custa chakra.\n\nAlém disso, Genjutsu que você lança sem causar dano tem CD aumentada em +1 (+2 no 10º, +3 no 19º nível)." },
        { nivel: 2, nome: "Adepto Ilusionário", descricao: "Além disso, no 2º nível você detecta passivamente Genjutsu afetando outras criaturas (detecção passiva = 10 + sua habilidade de Ilusão). Encontrando uma criatura sob Genjutsu com CD menor que sua detecção, você percebe o efeito e seu rank.\n\nAo notar um Genjutsu desse modo, você faz com vantagem o próximo teste de resistência contra ele; depois, não ganha o bônus contra o mesmo Genjutsu até um descanso longo." },
        { nivel: 6, nome: "Fúria Ilusionária", descricao: "A partir do 6º nível, ao lançar um Genjutsu com duração de 1 minuto ou mais que inflija Condição Mental, pode gastar 1 Dado de Atualização para trocar uma de suas palavras-chave sensoriais (Auditivo, Inalação, Tátil, Visual) por outra da lista.\n\nAo usar este recurso, também pode dobrar a duração do jutsu ou o número de graus da Condição Mental infligida. Depois de usar desta forma, só novamente após um descanso longo." },
        { nivel: 10, nome: "Raiva Ilusionária", descricao: "A partir do 10º nível, selecione um Genjutsu que conheça que imponha Condição Mental. Como ação bônus ao usá-lo, inflige 1 grau da condição a todas as criaturas hostis a até 1,5 metro do alvo original. Duas vezes, depois precisa de um descanso longo." },
        { nivel: 10, nome: "Psique Corrupta", descricao: "A partir do 10º nível, ao conjurar um Genjutsu que inflija Condição Mental ou penalidade em testes de resistência, perícia ou ataque, pode gastar 2 Dados de Atualização e escolher uma condição entre Berserk, Concussão, Confuso ou Lentidão, infligida por 1 minuto." },
        { nivel: 14, nome: "Genjutsu Instintivo", descricao: "A partir do 14º nível, quando uma criatura a até 9 metros faz uma jogada de ataque contra você, pode usar a reação para desviar o ataque a outra criatura no alcance. Em falha na resistência de Sabedoria, o atacante deve mirar a criatura escolhida; em sucesso, você não pode usar este recurso nele novamente até um descanso longo." },
        { nivel: 18, nome: "Influência Ilusionária", descricao: "A partir do 18º nível, uma vez por lançamento, quando uma criatura falha em um teste de resistência contra um Genjutsu seu que inflija Condição Mental, pode gastar até 5 Dados de Atualização para aumentar o número de graus infligidos em quantidade igual ao número de dados gastos." },
      ],
    },
    {
      key: "realidade-em-camadas",
      nome: "Realidade em Camadas",
      classeKey: "especialista-genjutsu",
      descricaoIntro: "Especialistas em Genjutsu que se comprometem com a arte da Realidade em Camadas tecem muitos Genjutsu sobre uma única pessoa, pois a realidade dela é o que você faz dela. Quando pensam ter escapado da ilusão, isso por si só já é apenas mais uma ilusão.",
      features: [
        { nivel: 2, nome: "Técnica Síncrona", descricao: "Ao escolher este caminho no 2º nível, você ganha o Genjutsu Rank E Dúvida (ou outro Rank E, se já o conhecer; não conta no seu número de jutsu conhecidos). Ao lançar Dúvida em uma criatura não hostil, ela não percebe que o jutsu foi lançado sobre ela.\n\nSe Dúvida for lançada em uma criatura já sob efeito de outro Genjutsu seu, o alcance aumenta para 18 metros e dura enquanto você se concentrar nesse outro Genjutsu. Enquanto sob Dúvida, a criatura tem desvantagem em testes de Percepção contra você e, uma vez por turno, reduz em 1d4 o resultado de testes de resistência de Inteligência contra seus Genjutsu." },
        { nivel: 2, nome: "Falsa Segurança", descricao: "Além disso, no 2º nível, quando uma criatura escapa de um Genjutsu seu, uma vez por turno, até o início do seu próximo turno, outros Genjutsu sob os quais ela esteja não podem ser encerrados por ela, nem por jutsu nem por sucesso em teste de resistência." },
        { nivel: 6, nome: "Foco Dividido", descricao: "A partir do 6º nível, ao lançar um Genjutsu de concentração, pode optar por não contá-lo no seu limite de concentração (só um jutsu por vez com este benefício). Duas vezes por descanso curto.\n\nAlém disso, reduz em 1 (mín. 1) o custo de concentração para manter um Genjutsu (-2 no 10º, -3 no 19º nível)." },
        { nivel: 10, nome: "Desconforto Oculto", descricao: "A partir do 10º nível, uma criatura não pode ter vantagem em nenhum teste de resistência ou perícia contra um Genjutsu seu.\n\nAlém disso, ao lançar um Genjutsu de concentração em um alvo já sob outro Genjutsu seu, pode, como ação bônus, causar a ela dano psíquico igual ao seu modificador de Genjutsu no início de cada um dos seus turnos e dos dela." },
        { nivel: 10, nome: "Realidade Quebrada", descricao: "A partir do 10º nível, ao lançar um Genjutsu que imponha penalidade em perícia, ataque ou resistência de criaturas hostis, pode gastar 2 Dados de Atualização para aumentar a penalidade em 1 Dado de Atualização pela duração do efeito." },
        { nivel: 14, nome: "Mestre da Realidade", descricao: "A partir do 14º nível, ao usar sua ação para lançar um Genjutsu de concentração que afete outras criaturas além de você, pode lançar imediatamente outro Genjutsu de concentração com as mesmas condições, com tempo de lançamento de 1 ação, como parte da mesma ação. Duas vezes por descanso longo." },
        { nivel: 18, nome: "Influência em Camadas", descricao: "A partir do 18º nível, quando uma criatura realiza qualquer ação sob efeito de pelo menos 2 Genjutsu seus, estando a até 18 metros de você, pode gastar 3 Dados de Atualização: em falha na resistência de Inteligência, ela sofre 9d6 de dano psíquico e perde sua ação até o início do próximo turno (ou apenas a Ação de Elite/Lendária, se foi essa a ação reagida)." },
      ],
    },
    {
      key: "distorcionista-nebuloso",
      nome: "Distorcionista Nebuloso",
      classeKey: "especialista-genjutsu",
      descricaoIntro: "Especialistas em Genjutsu que optam por se tornar Distorcionistas Nebulosos se especializam em toxinas inaladas, confundindo a mente e enfraquecendo o corpo através de inalantes venenosos. Seus venenos potentes penetram até barreiras e fazem vacilar até as mentes mais fortes.",
      features: [
        { nivel: 2, nome: "Inalante Melhorado", descricao: "Ao escolher este caminho no 2º nível, você ganha o Genjutsu Rank E Liberar (ou outro Rank E, se já o conhecer; não conta no seu número de jutsu conhecidos). Ao lançar Liberar, ele ganha o componente FN (Alquimista, kit de veneno), a palavra-chave Inalado e seu alcance se torna Próprio (raio 1,5 metro) — aumentando para 3 metros no 5º nível, 4,5 metros no 11º e 6 metros no 17º.\n\nAlém disso, Genjutsu com a palavra-chave Inalado tem CD aumentada em +1 (+2 no 10º, +3 no 19º nível)." },
        { nivel: 2, nome: "Imitações Físicas", descricao: "Além disso, no 2º nível, você ganha proficiência com o kit de Alquimista (ou com outro kit, se já proficiente).\n\nUma vez por turno, pode gastar uma carga do kit de Alquimista ou de Veneno para dar ao próximo Genjutsu que lançar a palavra-chave Inalado durante sua duração.\n\nVocê também aprende a infundir kits de alquimista e veneno com chakra (1 hora, em um descanso), criando um Kit Nebuloso, que mantém os efeitos originais e passa a ter seu limite de usos/cargas representado por um d8: a cada uso, role o dado — em 1 ou 2, reduza seu tamanho em um passo (d8>d6>d4>1>0). Só é possível ter um Kit Nebuloso por vez; infundir outro kit torna o anterior inutilizável." },
        { nivel: 6, nome: "Intoxicante Permeante", descricao: "A partir do 6º nível, uma vez por lançamento, ao lançar um Genjutsu com a palavra-chave Inalado, pode ignorar a resistência da(s) criatura(s) afetada(s) a dano de veneno ou à condição Envenenado." },
        { nivel: 10, nome: "Névoas Envenenadas", descricao: "A partir do 10º nível, ao lançar um Genjutsu com a palavra-chave Inalado, pode reduzir o dado do seu Kit Nebuloso em 1 passo para forçar a(s) criatura(s) afetada(s) a um teste de resistência de Constituição; em falha, ficam Envenenadas (escolha a variante) e ganham a condição Enfraquecido." },
        { nivel: 10, nome: "Ilusões Venenosas", descricao: "A partir do 10º nível, ao lançar um Genjutsu com a palavra-chave Inalado e tempo de lançamento maior que 1 ação, pode gastar 3 Dados de Atualização para lançá-lo como ação de turno completo." },
        { nivel: 14, nome: "Cegado pela Violência", descricao: "A partir do 14º nível, ao ser alvo de um ataque que possa ver, pode usar o Kit Nebuloso para forçar o atacante a um teste de resistência de Constituição ou Sabedoria (sua escolha); em falha, fica cego até o início do próximo turno e depois ganha a condição Frenético por 1 minuto. Em sucesso, você não pode usar este recurso nele novamente até um descanso longo." },
        { nivel: 18, nome: "Influência Distorcida", descricao: "A partir do 18º nível, quando uma criatura envenenada por você, ou sob efeito de um Genjutsu Inalado seu, tenta lançar um jutsu com componente Selo de Mão (SM) ou Mobilidade (M), pode gastar 2 Dados de Atualização: em falha na resistência de Constituição ou Sabedoria, ela passa a ver seus aliados como alvos em potencial e seus próprios aliados como alvos aliados, para fins de conjuração daquele jutsu." },
      ],
    },
    {
      key: "manipulador-do-tempo",
      nome: "Manipulador do Tempo",
      classeKey: "especialista-genjutsu",
      descricaoIntro: "Especialista em Genjutsu que optou por se tornar um Manipulador do Tempo dedica-se a manipular a percepção de tempo e espaço de outras criaturas — como percebem uma infinidade de eventos e em que ordem sua mente os processa.",
      features: [
        { nivel: 2, nome: "Mudança Temporal", descricao: "Ao escolher este caminho no 2º nível, você ganha o Genjutsu Rank E Rajada de Penas (ou outro Rank E, se já o conhecer; não conta no seu número de jutsu conhecidos). Ao lançar Rajada de Penas, o dado usado para reduzir dano aumenta para d12 e, após calcular o dano, você se move 4,5 metros em qualquer direção sem provocar ataques de oportunidade — aumentando para 6 metros no 5º nível, 7,5 metros no 11º e 9 metros no 17º." },
        { nivel: 2, nome: "Técnica Temporal", descricao: "Além disso, no 2º nível, você aprende a manipular a percepção de impulso e velocidade de outras criaturas sem tecer selos de mão: ganha uma Miragem Maleável adicional com pré-requisito Cronômetro Temporal, mesmo sem ter escolhido o conceito de Início do Genjutsu correspondente (ainda deve respeitar restrições de nível, se houver)." },
        { nivel: 6, nome: "Um Momento no Tempo", descricao: "A partir do 6º nível, como ação bônus, gaste 1 Dado de Atualização para ganhar um dos benefícios:\n- Realizar a ação Correr, Desengajar ou Esconder-se.\n- Role o Dado de Atualização gasto; sua CA aumenta em metade do resultado (concentração).\n- Adiciona o Dado de Atualização aos seus testes de resistência de Destreza (concentração).\n- Lança imediatamente 1 Genjutsu com tempo de lançamento de 1 ação que não exija concentração.\n\nBenefícios marcados com (concentração) exigem concentração como em um jutsu, mas sem custo de chakra para mantê-los." },
        { nivel: 10, nome: "Relógios Errados", descricao: "A partir do 10º nível, ao lançar um Genjutsu que exija teste de resistência contra uma única criatura, pode, como ação bônus, torná-la incapaz de usar reações em resposta ao lançamento ou aos efeitos do jutsu. Duas vezes por descanso longo.\n\nAlém disso, enquanto sob efeito de um Genjutsu lançado com esta característica, se a criatura tentar reagir a um efeito de um aliado seu, deve rolar 1d10 — em 6 ou mais, não consegue reagir." },
        { nivel: 10, nome: "Dissociação Temporal", descricao: "A partir do 10º nível, ao lançar um Genjutsu de concentração que conceda bônus em ataque, perícia ou resistência, pode gastar 1 Dado de Atualização para que ele não conte no seu limite de concentração e você não possa perder a concentração nele. Só um Genjutsu por vez com este benefício." },
        { nivel: 14, nome: "Domínio Temporal", descricao: "A partir do 14º nível, ao se beneficiar de Um Momento no Tempo, pode gastar 1 Dado de Atualização adicional para ganhar um efeito adicional da lista. Uma vez por descanso." },
        { nivel: 18, nome: "Influência do Tempo", descricao: "A partir do 18º nível, quando uma criatura hostil está sob efeito de um Genjutsu seu que impõe penalidade em resistência, perícia ou ataque, pode gastar 1 Dado de Atualização: em falha na resistência de Inteligência, no próximo turno dela, decide sua sequência de ações mas só as executa no turno seguinte, podendo até mirar criaturas que não poderia mais atingir devido ao atraso." },
      ],
    },
    {
      key: "sereia",
      nome: "Sereia",
      classeKey: "especialista-genjutsu",
      descricaoIntro: "Especialistas em Genjutsu que escolhem se tornar uma Sereia se dedicam a mudar os corações e mentes de amigos e adversários, especializando-se em sair de situações — mesmo hostis — com palavras infundidas de chakra.",
      features: [
        { nivel: 2, nome: "Palavras Atraentes", descricao: "Ao escolher este caminho no 2º nível, você ganha o Genjutsu Rank E Afeição (ou outro Rank E, se já o conhecer; não conta no seu número de jutsu conhecidos). Ao lançar Afeição, perde o requisito de componente Selo de Mão (SM) e a criatura alvo não percebe que um jutsu influenciou seu humor.\n\nAlém disso, Genjutsu com a palavra-chave Auditivo tem CD aumentada em +1 (+2 no 10º, +3 no 19º nível)." },
        { nivel: 2, nome: "Linguagem Visceral", descricao: "Além disso, no 2º nível, como ação bônus, selecione uma criatura sob efeito de um Genjutsu Auditivo seu: durante o jutsu, ela sofre 1d6 de dano psíquico no início de cada um dos seus turnos e dos dela (aumenta para 2d6 no 6º, 3d6 no 10º, 4d6 no 14º, 5d6 no 18º nível).\n\nDa mesma forma, pode selecionar uma criatura aliada sob efeito de um Genjutsu Auditivo em que se concentre: ela ganha os mesmos dados em PV temporários no início do seu turno enquanto durar o jutsu. Usos combinados iguais ao seu modificador de Genjutsu por descanso longo." },
        { nivel: 6, nome: "Palavras de Afirmação", descricao: "A partir do 6º nível, gastando 10 minutos estendendo chakra a criaturas a até 3 metros que possam ouvi-lo, elas ganham PV temporários iguais ao seu nível + modificador de Genjutsu e vantagem no próximo teste de resistência contra Genjutsu. Esses PV temporários acumulam com os de Linguagem Visceral. Uma criatura não se beneficia mais de duas vezes por descanso curto." },
        { nivel: 10, nome: "Palavras de Detrimento", descricao: "A partir do 10º nível, como ação bônus, ao lançar um Genjutsu com qualquer palavra-chave sensorial, ele perde todas e ganha a palavra-chave Auditivo. Criaturas afetadas que falhem em resistência de Sabedoria ficam enfraquecidas e desaceleradas por 1 minuto, repetindo o teste no início de cada turno para encerrar o efeito; cada falha após a primeira impõe -1 (acumulável até -5) no próximo teste de resistência. Duas vezes por descanso longo." },
        { nivel: 10, nome: "Palavras de Ressonância", descricao: "A partir do 10º nível, ao lançar um Genjutsu que conceda a aliados bônus em ataque, perícia ou resistência que exija concentração, pode gastar 1 Dado de Atualização para que ele não conte no seu limite de concentração e você não possa perder a concentração nele. Só um Genjutsu por vez com este benefício." },
        { nivel: 14, nome: "Palavras de Arrependimento", descricao: "A partir do 14º nível, quando uma criatura que o veja e ouça faz uma jogada de ataque contra você, pode usar a reação para criar um Genjutsu auditivo que lhe incuta pensamentos de automutilação extrema. Em falha na resistência de Sabedoria, o atacante ataca a si mesmo como se fosse o alvo do próprio ataque. Em sucesso, você não pode usar este recurso nele novamente até um descanso curto." },
        { nivel: 18, nome: "Influência das Sereias", descricao: "A partir do 18º nível, uma criatura sob efeito de um Genjutsu Auditivo seu começa a sofrer alucinações intensas e dissociativas. Gastando até 5 Dados de Atualização, todas as criaturas afetadas sofrem -1 por dado gasto em jogadas de ataque, dano, perícia e habilidade, durando enquanto o Genjutsu persistir." },
      ],
    },
  ],
};
