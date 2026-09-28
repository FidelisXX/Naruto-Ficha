import type { TalentDefinition } from "@/lib/talents/types";

/** Talentos de Genjutsu — Manual Shinobi, Cap. 13, p.240-243. */
export const talentosGenjutsu: TalentDefinition[] = [
  {
    key: "genjutsu-capacitado",
    nome: "Genjutsu Capacitado",
    categoria: "genjutsu",
    descricao: "Você aprende a capacitar seu Genjutsu com mais ilusões elaboradas. Você ganha os seguintes benefícios:\n\n- Quando uma criatura tenta um teste de resistência para resistir a um genjutsu que você lança sobre eles, você pode, como reação, gasta 10 pontos de chakras. Se você fizer isso, até o final do turno atual, a criatura afetada rola um número de d4 igual a classificação do elenco de Genjutsu, reduzindo sua economia jogando pela metade do resultado (Min 1). (Rank D/Rank C: 1, Rank B/Rank A 2, Rank S: 3)\n- Genjutsu que você lança e que causa dano se falhar na resistência, agora causa metade do dano em um teste bem-sucedido.\n- Quando você faria um teste de Constituição (Controle de Chakra) para manter a concentração em um Genjutsu que você lança, role um número de d4 igual à classificação mais alta de genjutsu em que você está se concentrando atualmente adicionando metade do resultado ao seu cheque. (Min 1) (Rank D e Rank C: 1, Rank B: e Rank A: 2, Rank S: 3)",
  },
  {
    key: "arquivista-genjutsu",
    nome: "Arquivista Genjutsu",
    categoria: "genjutsu",
    preRequisito: "Nível 4+",
    descricao: "Seu conhecimento enciclopédico de Genjutsu permite que você aprenda muito mais Genjutsu do que o normal. Você ganha os seguintes benefícios:\n\n- Aumente seu valor de Sabedoria em 1, até um máximo de 20.\n- Você aprende um genjutsu adicional para o qual se qualifica. Isso não conta para o seu Jutsu Conhecido.\n- Na próxima vez que você atingir o 5º, 9º ou 13º nível, você aprende um Genjutsu adicional de 1 nível inferior ao sua classificação de jutsu mais alta conhecida.\n- Se você escolher esse talento depois de passar no teste de níveis declarados anteriormente, você ganha 1 adicional, Rank D se passou do 5º nível, 1 Rank C adicional se passou do 9º nível, e um Rank B adicional é passado 13º nível.",
  },
  {
    key: "especializacao-sensorial",
    nome: "Especialização Sensorial",
    categoria: "genjutsu",
    descricao: "Você começou a se especializar em um subconjunto de ilusões de sua escolha. Você ganha os seguintes benefícios:\n\n- Selecione uma palavra-chave sensorial (auditiva, visual, inalada). Você pode ignorar o requisito do selo manual (SM) para Genjutsu de Rank C inferior com o sua palavra-chave escolhida.\n- Você causa dano adicional com Genjutsu com sua Palavra-chave Sensorial escolhida, igual à sua classificação. (Rank D: 1, Rank C: 2, Rank B: 3, Rank A: 4, Rank S: 5)\n- Você reduz o custo de chakra do Genjutsu com sua palavra-chave Sensorial escolhida por um valor igual ao seu classificação. (Rank D: 1, Rank C: 2, Rank B: 3, Rank A: 4, Rank S: 5). Vários efeitos com redução baseada em classificação não acumulativa.\n- Você pode realizar esse talento diversas vezes, de cada vez selecionando uma palavra-chave sensorial diferente.",
  },
  {
    // NOTE: o primeiro benefício desta lista parece truncado na extração/no original — começa em "Genjutsu, você ignora..." sem uma oração introdutória (algo como "Ao causar dano com um..." parece faltar). Mantido exatamente como extraído.
    key: "penetracao-psiquica",
    nome: "Penetração Psíquica",
    categoria: "genjutsu",
    descricao: "Você aprendeu a danificar mais facilmente os ataques de seus oponentes psíques. Você ganha os seguintes benefícios:\n\n- Genjutsu, você ignora testes de resistência psíquica de dano.\n- Quando você rolaria o dano de um genjutsu que você lançou que causa dano psíquico, você pode rolar novamente 1 e 2, mantendo o segundo resultado.\n- Quando você causa dano psíquico a uma criatura, a criatura selecionada ganha desvantagem em testes de habilidade e testes de resistência feitos para acabar com quaisquer condições Sensorial ou Mental até o final do próximo turno.",
  },
  {
    key: "experiencia-em-genjutsu",
    nome: "Experiência em Genjutsu",
    categoria: "genjutsu",
    descricao: "Seu domínio das Artes Ilusórias permite que você teça juntos Genjutsu com eficiência muito maior. Você ganha os seguintes benefícios:\n\n- Aumente seu valor de Carisma em 1, até um máximo de 20.\n- Em vez disso, você pode usar Carisma em vez de Sabedoria como seu modificador Genjutsu.\n- Em vez disso, você pode usar Carisma em vez de Sabedoria para testes de Ilusões.",
  },
  {
    key: "teorico-ilusionario",
    nome: "Teórico Ilusionário",
    categoria: "genjutsu",
    preRequisito: "Sabedoria ou Carisma 15+",
    descricao: "Você estuda as artes ilusórias, ganhando os seguintes benefícios:\n\n- Aumente seu valor de Sabedoria ou Carisma em 1, para um máximo de 20.\n- Você ganha proficiência na habilidade Ilusões.\n- Durante um breve descanso, você tenta teorizar sobre como manipular o conceito de um genjutsu você saiba como dobrá-lo à sua vontade. Faça uma sabedoria (Ilusões) teste contra uma CD (15 + A classificação do jutsu, Rank D: 1, Rank C: 2, Rank B: 3, Rank A: 4, Rank S: 5).\n- Com um sucesso, até seu próximo descanso, o jutsu selecionado é sempre sob um dos seguintes Onijutsu do Clã Kurama. Uma vez selecionado, isso não pode ser desfeito até completar seu próximo descanso.\n  - Onijutsu cuidadoso (máximo de 3 criaturas).\n  - Onijutsu esmagador\n  - Onijutsu Tenaz\n  - Onijutsu sutil",
  },
  {
    key: "especialista-empatico",
    nome: "Especialista Empático",
    categoria: "genjutsu",
    preRequisito: "Nível 8+",
    descricao: "Você pode sentir cada pensamento, cada intenção ou ideia. Ao lançar um Genjutsu que não causa dano, você ganha os seguintes benefícios:\n\n- Aumente seu valor de Sabedoria em 1, até um máximo de 20.\n- Quando você lançaria um Genjutsu que tivesse como alvo uma única criatura, se falhar na resistência, o movimento dessa criatura a velocidade é reduzida em 6 metros enquanto durar.\n- Quando você lançaria um Genjutsu que pode afetar duas ou mais criaturas ao mesmo tempo, se falhar na resistência, uma vez por turno, todas as criaturas afetadas sofrem dano psíquico sempre que uma das outras criaturas afetadas sofre dano de qualquer tipo, excluindo a criatura que desencadeia este efeito. O número de dano psíquico que as criaturas sofrem é um quantidade igual à classificação do jutsu atualmente afetando todos eles. (Rank D: 2d4, Rank C: 4d4, Rank B: 6d4, Rank A: 8d4, Rank S: 10d4)",
  },
  {
    key: "especialista-psiquico",
    nome: "Especialista Psíquico",
    categoria: "genjutsu",
    preRequisito: "Nível 8+",
    descricao: "Você pode sentir cada enxaqueca, cada dor de cabeça, todo pensamento doloroso. Ao lançar um Genjutsu que causa dano, você ganha os seguintes benefícios:\n\n- Aumente seu valor de Sabedoria ou Carisma em 1, até um máximo de 20\n- Uma vez por turno, uma criatura afetada ganha 1d4 de penalidade em testes de resistência de Inteligência e sabedoria para resistir ao próximo genjutsu pelo qual forem afetados, se houver, até o final do próximo turno.\n- Uma vez por turno, quando uma criatura hostil receberia dano, você pode escolher Cicatriz Mentalmente a criatura. Uma criatura com cicatrizes mentais sofre -1d4 de pena para acabar com qualquer condição mental sob a qual estejam sob efeito.\n- Genjutsu que você lança e que requer uma jogada de ataque, tem seu alcance aumentado em 30 pés.",
  },
  {
    // NOTE: o cabeçalho do talento aparece como "ADEPTADO À PSICOSE", mas o pré-requisito do talento seguinte ("Especialista em Psicose") refere-se a ele como "Adepto da Psicose" — possível inconsistência do material original ou da extração/OCR. Mantido o texto exatamente como impresso no cabeçalho desta página.
    key: "adeptado-a-psicose",
    nome: "Adeptado à Psicose",
    categoria: "genjutsu",
    preRequisito: "Dor, Dor Dupla ou Dor Ilimitada, Nível 4+",
    descricao: "Você se tornou especialista em causar imensa dor psicótica de outras mentes. As técnicas avançadas que você aprendeu enquanto aprofundar-se nesta especialidade concedeu a você os seguintes benefícios:\n\n- O jutsu pré-requisito não custa chakra para ser mantido concentração, se o fizerem.\n- Quando o jutsu de pré-requisito causar dano, adicione seu modificador de habilidade do genjutsu para o dano causado.\n- Se uma criatura afetada fosse reduzida a 0 pontos de vida como resultado resultado do jutsu de pré-requisito, você pode escolher outra criatura a até 3 metros do alvo original, movendo o jutsu para esse novo alvo.\n- As criaturas não podem encerrar os efeitos do pré-requisito genjutsu em si mesmos com um jutsu de nível igual a ele.",
  },
  {
    key: "especialista-em-psicose",
    nome: "Especialista em Psicose",
    categoria: "genjutsu",
    preRequisito: "Adepto da Psicose, Nível 8+",
    descricao: "Você se tornou adepto de causar transtornos psicóticos incomparáveis trauma para outras mentes. Você ganha os seguintes benefícios:\n\n- O genjutsu Dor não termina mais quando seu efeito é o primeiro aplicado.\n- O genjutsu Dor Dupla aumenta seu dado de dano em 1 etapa.\n- O genjutsu Dor Ilimitada não precisa mais de uma linha direta de visão, desde que você conheça as criaturas alvo nome, eles podem ouvi-lo e estão dentro do alcance, eles sofrerem seus efeitos normalmente.",
  },
  {
    // NOTE: o texto usa "genjutsu de Pain" (termo em inglês, não traduzido para "Dor" como nos demais talentos desta cadeia) — mantido exatamente como extraído.
    key: "mestre-da-psicose",
    nome: "Mestre da Psicose",
    categoria: "genjutsu",
    preRequisito: "Especialista em Psicose, Nível 12+",
    descricao: "Você se tornou um mestre em quebrar a mente dos seus adversários. Os inimigos entram em coma mental quando o fazem batalhar com você. Você ganha os seguintes benefícios:\n\n- O dado de dano do genjutsu de Pain se torna um d6.\n- O genjutsu Dor Dupla é acionado sempre que o alvo sofrer dano de uma fonte diferente de você, uma vez por turno.\n- O genjutsu Dor Ilimitada pode forçar o alvo a fazer um teste de resistência de Inteligência ou Sabedoria para resistir aos seus efeitos. Você decide o teste de resistência quando o jutsu é lançado.\n- Você pode se concentrar em todos os 3 genjutsu pré-requisitos de uma só vez. Se você encerrar o efeito da Dor Dupla como resultado da Dor ilimitada, em vez disso, você mantém a concentração nela, ao mesmo tempo que obtém os benefícios atualizados da Dor ilimitada.",
  },
  {
    key: "senhor-da-escuridao",
    nome: "Senhor da Escuridão",
    categoria: "genjutsu",
    preRequisito: "Fantoches das Trevas, Mordida Sombria ou Armas das Trevas, Nível 4+",
    descricao: "Entrelaçando escuridão dentro e fora do seu Genjutsu e das mentes dos seus inimigos. As sombras se tornam suas amigas. A amiga mais velha que alguém poderia pedir. Você ganha os seguintes benefícios:\n\n- O genjutsu pré-requisito pode causar dano Necrótico. Sua escolha quando o jutsu é lançado.\n- O jutsu pré-requisito inflige 1 nível de Ofuscado quando causa dano.\n- Se você fizer um acerto crítico com o genjutsu pré-requisito, você pode escolher infligir a condição Confuso.\n- Duas vezes por descanso, você pode escolher lançar um dos jutsu pré-requisitos como uma ação bônus. Se você já podia lançar o jutsu pré-requisito como uma ação bônus, você pode lançá-lo sem custo de ação.",
  },
  {
    key: "provocador-de-pensamento",
    nome: "Provocador de Pensamento",
    categoria: "genjutsu",
    preRequisito: "Nível 4+",
    descricao: "Cada ilusão que você manifesta lhe concede a percepção sobre pensamentos e sentimentos daqueles que você ataca mentalmente. Você ganha os seguintes benefícios:\n\n- Aumente seu valor de Sabedoria ou Carisma em 1, até o máximo de 20\n- Quando uma criatura falharia no teste de resistência de um Genjutsu, você lança algo que requer um teste de resistência de Inteligência, você pode fazer uma pergunta, telepaticamente, para que o alvo responda inconscientemente com 5 palavras ou menos.\n- Quando uma criatura falharia no teste de resistência de um Genjutsu você lança algo que requer um teste de resistência de Sabedoria, você se torna ciente se a criatura alvo sente se está gostando do combate ou se eles se sentem forçados por outra criatura, entidade ou força.\n- Quando uma criatura falharia no teste de resistência de um Genjutsu, você lança que requer um teste de resistência de Carisma, o alvo acha difícil mentir ou reter verbalmente seus verdadeiros sentimentos até o final do seu próximo turno.",
  },
  {
    key: "drenagem-de-inteligencia",
    nome: "Drenagem de Inteligência",
    categoria: "genjutsu",
    preRequisito: "Nível 12+",
    descricao: "Cada ilusão que você manifesta suga a inteligência e conhecimento do seu alvo. Você ganha os seguintes benefícios:\n\n- Aumente seu valor de Sabedoria ou Carisma em 1, até o máximo de 20\n- Quando uma criatura falharia no teste de resistência de um Genjutsu, você lança ou acerta um golpe com um ataque Genjutsu, o alvo sofre uma penalidade de -1 em seu próximo teste de resistência de inteligência. Isso pode acumular até -5.\n- Quando uma criatura sofreria uma penalidade de -1 em seu próximo teste de resistência de inteligência como resultado deste recurso, você ganha um bônus de +1 em seu próximo teste de resistência de inteligência. Esse pode acumular até +5.\n- Quando uma criatura falharia no teste de resistência de um Genjutsu, você conjura por 5 ou mais, você pode selecionar uma peça de informações que você deseja saber. Se o alvo souber qualquer coisa em relação a esta informação, você toma consciência disso.",
  },
  {
    key: "drenagem-de-sabedoria",
    nome: "Drenagem de Sabedoria",
    categoria: "genjutsu",
    preRequisito: "Nível 12+",
    descricao: "Cada ilusão que você manifesta suga a inteligência, a astúcia e a sabedoria de seu alvo. Você ganha os seguintes benefícios:\n\n- Aumente seu valor de Sabedoria ou Carisma em 1, até o máximo de 20\n- Quando uma criatura falharia no teste de resistência de um Genjutsu, você lança ou acerta um golpe com um ataque de Genjutsu o alvo sofre uma penalidade de -1 em seu próximo salvamento de Sabedoria. Isso pode acumular até -5.\n- Quando uma criatura sofreria uma penalidade de -1 em seu próximo Teste de resistência de Sabedoria como resultado desta característica, você ganha um bônus de +1 em seu próximo teste de resistência de Sabedoria. Isso pode acumular até +5.\n- Quando uma criatura falharia no teste de resistência de um Genjutsu, você lança por 5 ou mais, você ganha um sentido especial que eles têm à medida que o perdem. Você mantém esse sentido especial para a duração restante que o alvo original teria. Se não houve duração definida, o padrão é 1 minuto.",
  },
  {
    key: "drenagem-de-carisma",
    nome: "Drenagem de Carisma",
    categoria: "genjutsu",
    preRequisito: "Nível 12+",
    descricao: "Cada ilusão que você manifesta suga o carisma, charme ou fatores intimidadores de seu alvo. Você ganha o seguinte benefícios:\n\n- Aumente seu valor de Sabedoria ou Carisma em 1, até o máximo de 20\n- Quando uma criatura falharia no teste de resistência de um Genjutsu, você lança ou acerta um golpe com um ataque de Genjutsu o alvo sofre uma penalidade de -1 em seu próximo salvamento de Carisma. Isso pode acumular até -5.\n- Quando uma criatura sofreria uma penalidade de -1 em seu próximo Teste de resistência de Carisma como resultado deste recurso, você ganha um bônus de +1 em seu próximo teste de resistência de Carisma. Isso pode acumular até +5.\n- Quando uma criatura falhar no teste de resistência de um Genjutsu que você conjura por 5 ou mais, eles ganham vulnerabilidade para o próximo dano psíquico que eles sofrem.",
  },
];
