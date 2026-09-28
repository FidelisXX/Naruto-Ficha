import type { TalentDefinition } from "@/lib/talents/types";

/** Talentos de Crítico — Manual Shinobi, Cap. 13, p.244-246. */
export const talentosCritico: TalentDefinition[] = [
  {
    // NOTE: nome reconstruído a partir de "CRITICA  SANGUINEO" (cabeçalho de coluna direita, pág. 244). O texto
    // extraído está sem acento e com concordância de gênero inconsistente com "Categoria: Crítica" (masculino
    // "SANGUINEO" vs. esperado feminino "SANGUÍNEA"). Mantido "Crítica Sanguínea" como melhor reconstrução, mas a
    // grafia exata do nome original é incerta.
    key: "critica-sanguinea",
    nome: "Crítica Sanguínea",
    categoria: "critico",
    preRequisito: "Nível 8+",
    descricao: "Você luta com abandono imprudente, não se importando com você mesmo ou sua segurança. Você usa sua dor para alimentar seus ataques, causando seus inimigos ainda mais dor. Você ganha o seguinte benefícios:\nSelecione um dos seguintes:\n- Ataques de ninjutsu\n- Ataques de Taijutsu\n- Ataques de Genjutsu\nQuando uma criatura iria causar dano a você como o resultado de um ataque corpo a corpo, você ganha um bônus de +1 em seu alcance de ameaça crítica do tipo escolhido, não mais do que duas vezes por rodada, até o início do seu próximo turno.\nQuando uma criatura a até 1,5 metro de você erra você com um ataque corpo a corpo, você pode usar sua reação para causar o ataque para acertar você. Você pode imediatamente fazer um combate corpo a corpo com arma contra aquela criatura.\nQuando uma criatura consegue um acerto crítico contra você com um ataque, o próximo ataque que você fizer, antes do final do seu próximo turno, que atinge as criaturas que marcaram um acerto crítico contra você, conta como um acerto crítico.",
  },
  {
    // NOTE: existe um segundo talento com o mesmo nome impresso "CRÍTICO MELHORADO" (Pré-requisito: Nível 10+,
    // ver key "critico-melhorado-nivel-10" abaixo). O livro aparenta repetir o nome para dois talentos
    // mecanicamente diferentes; ambos foram mantidos e diferenciados apenas pela key, já que o texto-fonte não
    // oferece outro nome.
    key: "critico-melhorado",
    nome: "Crítico Melhorado",
    categoria: "critico",
    descricao: "Sua capacidade de conquistar um lugar com zelo e eficácia aumenta. Você ganha os seguintes benefícios:\nSelecione um dos seguintes. Ataques feitos com o tipo selecionado tem um alcance de ameaça crítica de +1\n- Ataques de ninjutsu\n- Ataques de Taijutsu\n- Ataques de Genjutsu\nVocê pode escolher esse talento mais de uma vez, a cada vez selecionando o mesmo tipo de ataque ou diferente.",
  },
  {
    key: "critico-elementar",
    nome: "Crítico Elementar",
    categoria: "critico",
    preRequisito: "Nível 4+, pelo menos uma afinidade com a natureza.",
    // NOTE: a frase final "a cada vez selecionando um tipo de ataque ou diferente" está gramaticalmente
    // incompleta no texto-fonte (falta algo como "o mesmo ou"), mas foi mantida literal, sem correção.
    descricao: "Você aprende a infundir sua afinidade com a natureza em seu golpes poderosos. Você ganha os seguintes benefícios:\nSelecione um dos seguintes.\n- Ataques de ninjutsu\n- Ataques de Taijutsu\nUma vez por turno, quando você obtiver um acerto crítico com o tipo de ataque escolhido, a criatura alvo ganha 1 graduação de uma das condições listadas com base na afinidade de Natureza que você tem.\n- Terra – Machucada.\n- Vento – Sangramento.\n- Fogo – Queimado.\n- Água – Resfriada.\n- Relâmpago – Chocado.\nVocê pode escolher esse talento mais de uma vez, a cada vez selecionando um tipo de ataque ou diferente",
  },
  {
    key: "tecelao-de-selo-de-combate",
    nome: "Tecelão de Selo de Combate",
    categoria: "critico",
    // NOTE: no texto-fonte, a linha de categoria aparece combinada como "Categoria: Crítico, Nível 4+" (em vez
    // de linhas separadas de Categoria e Pré-requisito como nos demais talentos). O "Nível 4+" foi extraído
    // como pré-requisito.
    preRequisito: "Nível 4+",
    descricao: "Você praticou tornar seu jutsu mais difícil de evitar, aprendendo técnicas que lhe concedem os seguintes benefícios:\nQuando uma criatura faria um teste de resistência contra dano de um Ninjutsu ou Genjutsu que você lança e eles falharia no teste de resistência por 5 ou mais, aumentaria o dano pela classificação de jutsu lançado. (Rank D: +5, Rank C: +10, Rank B: +15, Rank A: +25, Rank S: +25).\nQuando uma criatura faria um teste de resistência contra um Ninjutsu ou Genjutsu que você lança que inflige uma condição se eles falharem por 5 ou mais, independentemente do efeito do jutsu, na próxima vez eles conseguiriam refazer o teste de resistência ou tenha sucesso no teste necessário para remover a condição (se aplicável), eles não removem a condição.",
  },
  {
    key: "critica-cerebral",
    nome: "Crítica Cerebral",
    categoria: "critico",
    preRequisito: "Nível 4+",
    descricao: "Você aprende a machucar a mente e o corpo de seus inimigos em um único golpe. Você ganha os seguintes benefícios:\nSelecione um dos seguintes.\n- Ataques de Taijutsu\n- Ataques de Genjutsu\nUma vez por turno, quando você obtiver um acerto crítico com o tipo de ataque escolhido, a criatura alvo ganha 1 graduação de Concussão.\nVocê pode escolher esse talento mais de uma vez, a cada vez selecionando o mesmo tipo de ataque ou diferente",
  },
  {
    key: "dominio-de-defesa-critica",
    nome: "Domínio de Defesa Crítica",
    categoria: "critico",
    preRequisito: "Nível 8+, H. Maestria em Armadura",
    descricao: "Enquanto você estiver usando uma armadura pesada com a qual você já é proficiente, você ganha os seguintes benefícios:\nDuas vezes por descanso longo, quando uma criatura hostil acertar um acerto crítico contra você, você pode tratá-lo como um golpe normal. Você recupera um uso deste efeito, por um curto período de descanso.\nVocê e todas as criaturas aliadas a até 3 metros de você ganham 5 de RD (redução de dano) versus o dano aplicado de um acerto crítico e quando você ou uma criatura aliada falhar em um teste de resistência contra um efeito que causa dano.\nQuando uma criatura aliada a até 3 metros de você estiver atingido por um ataque crítico, você pode gastar sua reação, redirecione o ataque para você mesmo. Você pode fazer isso uma vez por iniciativa.",
  },
  {
    key: "critico-poderoso",
    nome: "Crítico Poderoso",
    categoria: "critico",
    preRequisito: "Nível 12+",
    descricao: "Quando você consegue um acerto crítico. O mundo reconhece quem você são. Você ganha os seguintes benefícios:\nSelecione um dos seguintes:\n- Ataques de ninjutsu\n- Ataques de Taijutsu\n- Ataques de Genjutsu\nAcertos Críticos com o tipo de ataque escolhido não podem ser tratados como um golpe normal, ignora a resistência e trata a imunidade como resistência.",
  },
  {
    // NOTE: ver observação em "critico-melhorado" acima — este é o segundo talento com o nome impresso
    // idêntico "CRÍTICO MELHORADO" (Pré-requisito Nível 10+), diferenciado aqui pela key.
    key: "critico-melhorado-nivel-10",
    nome: "Crítico Melhorado",
    categoria: "critico",
    preRequisito: "Nível 10+",
    descricao: "Você aprende como capitalizar as falhas na guarda do oponente e controlar o fluxo do combate. Você obtém os seguintes benefícios:\nSelecione um dos seguintes:\n- Ataques de ninjutsu\n- Ataques de Taijutsu\n- Ataques de Genjutsu\nUma vez por turno, quando você obtiver um acerto crítico com o tipo de ataque escolhido, você adiciona três pontos de dano adicionais dado pelo dano causado. Você pode escolher esse talento mais de uma vez, a cada vez selecionando um tipo de ataque diferente.",
  },
  {
    key: "fanatico",
    nome: "Fanático",
    categoria: "critico",
    descricao: "Cada golpe que atinge seus inimigos faz você se sentir mais próximo da vitória, fazendo você tremer de excitação. Você ganha os seguintes benefícios:\nCriaturas aliadas a até 6 metros de você ganham +1 de bônus em seu alcance de ameaça crítica, desde que não tenham nenhum bônus à sua faixa de ameaça crítica devido a outra Façanha Crítica.\nQuando você ou uma criatura aliada obtiver um acerto crítico em uma criatura que reduz seus pontos de vida a 0, você ganha a Ação especial Corrida dos Fanáticos. Você pode ganhar esta ação especial, uma vez por rodada.\nCorrida dos Fanáticos. Na sua vez, você pode aproveitar essa ação especial para recuperar 1d6 + seu bônus de proficiência e faça um ataque com arma.",
  },
  {
    key: "critica-aterrorizante",
    nome: "Crítica Aterrorizante",
    categoria: "critico",
    preRequisito: "Nível 8+",
    descricao: "Quando você consegue um acerto crítico. Você inflige terror em seus inimigos. Você ganha os seguintes benefícios:\nSelecione um dos seguintes:\n- Ataques de ninjutsu\n- Ataques de Genjutsu\nVocê pode escolher esse talento mais de uma vez, sempre selecionando um tipo de ataque diferente.\nUma vez por rodada, quando você consegue um acerto crítico, a criatura afetada ganha 1 graduação de medo.",
  },
  {
    key: "critico-corrosivo",
    nome: "Crítico Corrosivo",
    categoria: "critico",
    preRequisito: "Nível 4+",
    descricao: "Quando você consegue um acerto crítico. O ambiente e o terreno urra um grito tão repugnante quanto o seu poder. Você ganha os seguintes benefícios:\nSelecione um tipo de dano dentre os seguintes:\n- Ácido\n- Tóxico\n- Necrótico\nVocê pode escolher esse talento mais de uma vez, sempre selecionando um tipo de dano diferente.\nAcertos Críticos com o tipo de dano escolhido ignoram a redução de dano.\nUma vez por rodada, quando você consegue um acerto crítico, a criatura afetada ganha 1 graduação de corroído.",
  },
  {
    key: "critico-atordoante",
    nome: "Crítico Atordoante",
    categoria: "critico",
    preRequisito: "Nível 12+",
    descricao: "Quando você consegue um acerto crítico. Você destrói a determinação do seu inimigo. Você ganha os seguintes benefícios:\nSelecione um tipo de dano dentre os seguintes:\n- Espancamento\n- Perfuração\n- Terra\n- Frio\n- Raio\nVocê pode escolher esse talento mais de uma vez, sempre selecionando um tipo de dano diferente.\nUma vez por rodada, quando você obtiver um acerto crítico com o tipo de dano escolhido, a criatura alvo deve fazer um Teste de resistência de Constituição versus seus tipos de ataque de salvamento CD (Taijutsu se ataque com arma/desarmado), ficando atordoado até o início do próximo turno em caso de falha no salvamento (ou na próxima Ação Elite, o que ocorrer primeiro).",
  },
];
