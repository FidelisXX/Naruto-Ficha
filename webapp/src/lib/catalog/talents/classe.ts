import type { TalentDefinition } from "@/lib/talents/types";

/**
 * Talentos de Classe — "Observações do Orochimaru" (compêndio de
 * Classes), p.342-357. Duas famílias de talentos:
 * - "Arquétipo": uma cadeia de 3-4 talentos que deixa qualquer personagem
 *   "pegar emprestado" fatias de uma classe sem multiclassar nela (o
 *   nível de pré-requisito listado é o nível de personagem total, não de
 *   uma classe específica). Normalmente termina em um talento
 *   "Entusiasta", que deixa escolher uma subclasse para herdar um recurso
 *   dela. Quando o livro repete o mesmo nome em dois estágios da cadeia
 *   (ex.: dois talentos "Especialista em Caçadores", um no nível 10+ e
 *   outro no 15+), essa repetição é do próprio livro — preservada aqui,
 *   diferenciando só pela chave e pelo pré-requisito.
 * - "Classe": talentos avulsos que aprimoram um recurso de uma classe na
 *   qual o personagem já tem níveis.
 * Nos dois casos, `classeKey` aponta para a classe à qual o talento se
 * refere (ver catalog/classes.ts), exceto no talento "Treinamento de
 * Bruxas", que é um arquétipo autônomo não ligado a nenhuma das 11
 * classes do Manual Shinobi — `classeKey` fica undefined nesse caso.
 * Terminologia em inglês remanescente na fonte (Hunter-Nin, Scout-Nin,
 * Intelligence Operative, Science-Nin etc.) foi normalizada para o nome
 * em português da classe correspondente.
 */
export const talentosClasse: TalentDefinition[] = [
  // ===== ESPECIALISTA EM GENJUTSU =====
  {
    key: "treinamento-ilusionista",
    nome: "Treinamento de Ilusionista",
    categoria: "classe",
    classeKey: "especialista-genjutsu",
    preRequisito: "Nível de personagem 5+, Sabedoria 15+; não pode ter níveis em Especialista em Genjutsu",
    descricao:
      "Você começou a treinar para dominar melhor a arte do Genjutsu, aprendendo a habilitar melhor suas habilidades de conjuração com técnicas aprimoradas de moldagem de chakra. Ganha proficiência em Ilusões. Aprende uma Miragem Maleável para a qual se qualifica, como se fosse um Especialista em Genjutsu de 2º nível. Seleciona um efeito concedido pela Conversão do Mundo Real, ganhando a habilidade escolhida. Ganha 2 Dados de Atualização (d4), usáveis só em efeitos de Conversão do Mundo Real, ou gastando 1 para aumentar em +1 a CD de um Genjutsu que conjura, uma vez por turno; recupera os dados gastos ao completar um descanso.",
  },
  {
    key: "especialista-ilusionismo",
    nome: "Especialista em Ilusionismo",
    categoria: "classe",
    classeKey: "especialista-genjutsu",
    preRequisito: "Treinamento de Ilusionista, nível de personagem 10+",
    descricao:
      "Você continuou treinando para dominar melhor a arte do Genjutsu. Ganha +1 Dado de Atualização adicional. Aprende uma Miragem Maleável para a qual se qualifica, como se fosse um Especialista em Genjutsu de 5º nível. Seleciona outro efeito concedido pela Conversão do Mundo Real, ganhando a habilidade escolhida.",
  },
  {
    key: "especialista-ilusionista",
    nome: "Especialista em Ilusionista",
    categoria: "classe",
    classeKey: "especialista-genjutsu",
    preRequisito: "Especialista em Ilusionismo, nível de personagem 15+",
    descricao:
      "Você continuou treinando para dominar melhor a arte do Genjutsu. Ganha +1 Dado de Atualização adicional. Aprende uma Miragem Maleável para a qual se qualifica, como se fosse um Especialista em Genjutsu de 5º nível. Seleciona um conceito de Início do Genjutsu, ganhando-o como se fosse um Especialista em Genjutsu de 9º nível.",
  },
  {
    key: "entusiasta-ilusionista",
    nome: "Entusiasta Ilusionista",
    categoria: "classe",
    classeKey: "especialista-genjutsu",
    preRequisito: "Especialista em Ilusionista",
    descricao:
      "Você continua seu treinamento para aprender mais sobre os segredos da Ilusão, especializando-se em um Compromisso específico. Selecione uma Classe de Especialista em Genjutsu, Compromisso de Genjutsu (subclasse). Você ganha o recurso de 6º nível que ele concede.",
  },
  {
    key: "atualizar-a-realidade",
    nome: "Atualizar a Realidade",
    categoria: "classe",
    classeKey: "especialista-genjutsu",
    preRequisito: "4+ níveis em Especialista em Genjutsu",
    descricao:
      "Você aprende a manipular a realidade gastando seu estoque de criatividade para dobrá-la ao seu capricho. Ganha +1 Dado de Atualização adicional, e um conjunto de habilidades chamado Iniciações da Realidade, usáveis gastando Dados de Atualização como combustível:\n\n- Agora Você Me Vê (1 dado): como ação, selecione uma criatura visível; você se torna invisível para ela até o fim do próximo turno dela.\n- Se Apenas Você Soubesse (2 dados): como ação bônus ao conjurar um Genjutsu que afeta uma criatura hostil, ele ganha a palavra-chave Desavisado.\n- E Para Meu Próximo Truque... (X dados): como ação, selecione dois Genjutsu diferentes do mesmo rank que conhece; gaste um número de dados igual ao rank deles (D:2, C:4, B:6, A:8, S:10) e conjure-os simultaneamente, na mesma ação — ambos se concretizam ao mesmo tempo, e o alvo faz um único teste de resistência contra os dois, passando ou falhando em ambos. O lançamento não pode se beneficiar de nenhuma redução de custo, exceto a concedida pela própria classe.",
  },
  {
    key: "exibicao-de-miragem",
    nome: "Exibição de Miragem",
    categoria: "classe",
    classeKey: "especialista-genjutsu",
    preRequisito: "2+ níveis em Especialista em Genjutsu",
    descricao:
      "Você começa a explorar um poço profundo de alucinações que tem tido ou sonhado, manifestando-as em uma forma mais permanente. Ganha 1 Miragem Maleável adicional para a qual se qualifica. Ganha outra Miragem Maleável adicional nos níveis 5º, 9º, 13º e 17º de Especialista em Genjutsu.",
  },

  // ===== ESPECIALISTA EM NINJUTSU =====
  {
    key: "treinamento-ninshou",
    nome: "Treinamento de Ninshou",
    categoria: "classe",
    classeKey: "especialista-ninjutsu",
    preRequisito: "Nível de personagem 5+, Inteligência 15+; não pode ter níveis em Especialista em Ninjutsu",
    descricao:
      "Você começou a treinar para dominar melhor a arte do Ninjutsu, aprendendo a habilitar melhor suas habilidades de conjuração com técnicas aprimoradas de moldagem de chakra. Ganha proficiência em Ninshou. Seleciona um Ninjutsu que conhece: ele se torna Refinado para você (dado de dano +1 passo, uma vez por conjuração; pode trocar o Ninjutsu Refinado em um descanso longo). Seleciona uma Moldagem Eficiente (Ninjutsu Cuidadoso, Distante, Dobrado, Elevado, Acelerado, Sutil ou Ampliado), ganhando-a e podendo usá-la uma vez sem custo por descanso.",
  },
  {
    key: "especialista-ninshou",
    nome: "Especialista em Ninshou",
    categoria: "classe",
    classeKey: "especialista-ninjutsu",
    preRequisito: "Treinamento de Ninshou, nível de personagem 10+",
    descricao:
      "Você continua seu treinamento para aprender mais sobre os segredos do Ninshou. Seleciona um Ninjutsu que conhece: ele se torna Refinado para você. A cada 3 níveis de personagem após ganhar este talento, aprende 1 Ninjutsu adicional de um rank para o qual se qualifica. As Moldagens Eficientes que tem ganham 1 uso adicional por descanso. Seleciona uma Moldagem Eficiente que ainda não tenha (mesma lista do Treinamento de Ninshou), ganhando-a.",
  },
  {
    key: "entusiasta-ninshou",
    nome: "Entusiasta de Ninshou",
    categoria: "classe",
    classeKey: "especialista-ninjutsu",
    preRequisito: "Especialista em Ninshou",
    descricao:
      "Você continua seu treinamento para aprender mais sobre os segredos do Ninjutsu, especializando-se em um Foco específico. Selecione uma Classe de Especialista em Ninjutsu, Foco em Ninjutsu (subclasse). Você ganha a Moldagem de 6º nível que ele concede, com custo alternativo aumentado para 10.",
  },
  {
    key: "alterado-refinamento-x",
    nome: "Alterado, Refinamento X",
    categoria: "classe",
    classeKey: "especialista-ninjutsu",
    preRequisito: "8+ níveis em Especialista em Ninjutsu; não pode ter os talentos Alterado, Refinamento Y ou Z",
    descricao:
      "Você aprende a refinar Ninjutsu de forma quase irreconhecível quando comparado a outros conjuradores semelhantes. Jutsu que se beneficiam da sua característica Ninjutsu Refinado não aumentam mais a CD de resistência; em vez disso, aumentam o dado de dano em 1 passo até um d12 e sempre somam seu modificador de habilidade de Ninjutsu ao dano causado. Quando Ninjutsu Refinado aumentaria a CD de resistência do seu jutsu Refinado, você aumenta o dado usado pelo jutsu em 1 passo, em vez disso.",
  },
  {
    key: "alterado-refinamento-y",
    nome: "Alterado, Refinamento Y",
    categoria: "classe",
    classeKey: "especialista-ninjutsu",
    preRequisito: "8+ níveis em Especialista em Ninjutsu; não pode ter os talentos Alterado, Refinamento X ou Z",
    descricao:
      "Você aprende a refinar Ninjutsu de forma quase irreconhecível quando comparado a outros conjuradores semelhantes. Jutsu que se beneficiam da sua característica Ninjutsu Refinado não aumentam mais a CD de resistência; em vez disso, reduzem o dado de dano em 1 passo para um d4, mas aumentam o dano em +2 adicional e sempre somam seu modificador de habilidade de Ninjutsu ao dano causado/cura aplicada. Quando Ninjutsu Refinado aumentaria a CD de resistência do seu jutsu Refinado, você aumenta esse bônus em +2, em vez disso.",
  },
  {
    key: "alterado-refinamento-z",
    nome: "Alterado, Refinamento Z",
    categoria: "classe",
    classeKey: "especialista-ninjutsu",
    preRequisito: "8+ níveis em Especialista em Ninjutsu; não pode ter os talentos Alterado, Refinamento X ou Y",
    descricao:
      "Você aprende a refinar Ninjutsu de forma quase irreconhecível quando comparado a outros conjuradores semelhantes. Jutsu que se beneficiam da sua característica Ninjutsu Refinado não somam mais dado de dano adicional. Em compensação, podem se beneficiar de até duas Moldagens Eficientes de uma vez, ignorando a restrição normal de número de moldagens, se houver alguma.",
  },
  {
    key: "refinado-refinamento",
    nome: "Refinado, Refinamento",
    categoria: "classe",
    classeKey: "especialista-ninjutsu",
    preRequisito: "4+ níveis em Especialista em Ninjutsu",
    descricao:
      "Você aprende a refinar Ninjutsu adicionais de forma quase irreconhecível quando comparado a outros conjuradores semelhantes. Pode refinar 1 Ninjutsu adicional (ou seja, sua característica Ninjutsu Refinado passa a afetar mais um jutsu). Pode refinar mais um Ninjutsu adicional nos níveis 12º e 20º de Especialista em Ninjutsu.",
  },

  // ===== NINJA CAÇADOR =====
  {
    key: "treinamento-de-cacadores",
    nome: "Treinamento de Caçadores",
    categoria: "classe",
    classeKey: "ninja-cacador",
    preRequisito: "Nível de personagem 5+, Destreza 15+; não pode ter níveis em Ninja Caçador",
    descricao:
      "Você começou a treinar para dominar melhor a arte do assassinato, imitando seus mestres, treinadores ou inspirações da melhor forma possível. Aprende a explorar a distração de um inimigo, a queda de guarda e o momento de hesitação. Ganha proficiência em Furtividade. Aprende uma Exploração de Caçadores para a qual se qualifica, usável duas vezes por descanso. Ganha a característica Ataque Letal, mas causando apenas 2d6 de dano adicional (não aumenta o número de dados ao ganhar níveis).",
  },
  {
    key: "especialista-em-cacadores-10",
    nome: "Especialista em Caçadores",
    categoria: "classe",
    classeKey: "ninja-cacador",
    preRequisito: "Treinamento de Caçadores, nível de personagem 10+",
    descricao:
      "Você continuou treinando para dominar melhor a arte do assassinato. Ganha a característica Ação Ardilosa. Aprende uma Exploração de Caçadores adicional para a qual se qualifica. O bônus de dano de Ataque Letal aumenta para 4d6.",
  },
  {
    key: "entusiasta-de-cacadores",
    nome: "Entusiasta de Caçadores",
    categoria: "classe",
    classeKey: "ninja-cacador",
    preRequisito: "Especialista em Caçadores (nível 10)",
    descricao:
      "Você continua seu treinamento para aprender mais sobre os segredos do assassinato, especializando-se em um Credo específico. Selecione uma Classe de Ninja Caçador, Credo do Caçador (subclasse). Você ganha o recurso de 3º nível que ele concede (não ganha o avanço de 10º nível).",
  },
  {
    key: "especialista-em-cacadores-15",
    nome: "Especialista em Caçadores",
    categoria: "classe",
    classeKey: "ninja-cacador",
    preRequisito: "Especialista em Caçadores (nível 10), nível de personagem 15+",
    descricao:
      "Você continuou treinando para dominar melhor a arte do assassinato. Ganha a característica de classe Alvo Primário, mas não pode marcar uma criatura como parte da sua própria jogada de iniciativa. Aprende uma Exploração de Caçadores adicional para a qual se qualifica, e aumenta em 1 o número de Explorações que pode usar por descanso. O bônus de dano de Ataque Letal aumenta para 6d6.",
  },
  {
    key: "exploracao-de-exploracoes",
    nome: "Exploração de Explorações",
    categoria: "classe",
    classeKey: "ninja-cacador",
    preRequisito: "2+ níveis em Ninja Caçador",
    descricao:
      "Você aprende a usar a ampla gama de Explorações de Caçadores disponíveis para você. Ganha 1 Exploração de Caçadores adicional. Ganha uma Exploração de Caçadores adicional nos níveis 7º e 15º de Ninja Caçador.",
  },
  {
    key: "resposta-mais-rapida",
    nome: "Resposta Mais Rápida",
    categoria: "classe",
    classeKey: "ninja-cacador",
    preRequisito: "4+ níveis em Ninja Caçador",
    descricao:
      "Você aprende a se mover de forma excessivamente rápida. Ganha vantagem em testes de iniciativa. Durante a primeira rodada de combate, sua velocidade aumenta em 4,5 metros, e ganha +1 no alcance de ameaça crítica do primeiro ataque contra cada criatura que ainda não agiu. Se atingir, nessa primeira rodada, uma criatura que ainda não agiu na iniciativa, pode desencadear Ataque Letal ignorando seus requisitos normais de ativação.",
  },
  {
    key: "alvo-secundario",
    nome: "Alvo Secundário",
    categoria: "classe",
    classeKey: "ninja-cacador",
    preRequisito: "4+ níveis em Ninja Caçador",
    descricao:
      "Você aprende a dividir seu foco, indo atrás de dois alvos ao mesmo tempo. Ao terminar um descanso, pode marcar um Alvo Secundário, desde que saiba seu nome e/ou aparência; também pode, como reação no seu turno, marcar uma criatura visível a até 27 metros usando esta característica. Até seu próximo descanso: ganha contra o Alvo Secundário os mesmos benefícios que ganharia contra seu Alvo Primário. A primeira Exploração de Caçadores que usar contra seu(s) Alvo(s) Primário(s) ou Secundário(s) não conta no seu limite de uso.",
  },

  // ===== AGENTE DE INTELIGÊNCIA =====
  {
    key: "treinamento-operativo",
    nome: "Treinamento Operativo",
    categoria: "classe",
    classeKey: "agente-inteligencia",
    preRequisito: "Nível de personagem 5+, Inteligência 13+, Sabedoria 13+; não pode ter níveis em Agente de Inteligência",
    descricao:
      "Você começou a treinar para dominar melhor a arte da estratégia e do planejamento, imitando seus mestres, treinadores ou inspirações da melhor forma possível. Aprende a analisar um alvo e desenvolver planos para derrotá-lo. Ganha proficiência em Investigação. Ganha 2 Ordens Bravas, usáveis só para ativar Planos (recuperadas ao completar um descanso). Aprende 1 Plano do catálogo de Agente de Inteligência (não pode trocá-lo depois de conhecido).",
  },
  {
    key: "especialista-operativo-10",
    nome: "Especialista Operativo",
    categoria: "classe",
    classeKey: "agente-inteligencia",
    preRequisito: "Treinamento Operativo, nível de personagem 10+",
    descricao:
      "Você continuou treinando para dominar melhor a arte da estratégia e do planejamento. Ganha a característica Operativo Útil. Ganha +1 Ordem Brava. Aprende +1 Plano da lista de Agente de Inteligência (não pode trocá-lo depois de conhecido).",
  },
  {
    key: "entusiasta-operativo",
    nome: "Entusiasta Operativo",
    categoria: "classe",
    classeKey: "agente-inteligencia",
    preRequisito: "Especialista Operativo (nível 10)",
    descricao:
      "Você continua seu treinamento para aprender mais sobre os segredos da estratégia e do planejamento, especializando-se em uma Estratégia específica. Selecione uma Classe de Agente de Inteligência, Estrategista Mestre (subclasse). Você ganha o primeiro recurso de 3º nível dela (não ganha nenhum avanço de nível superior). Além disso, não pode ganhar os benefícios das subclasses Controlador de Túmulo ou Mão Sombria.",
  },
  {
    key: "especialista-operativo-15",
    nome: "Especialista Operativo",
    categoria: "classe",
    classeKey: "agente-inteligencia",
    preRequisito: "Especialista Operativo (nível 10), nível de personagem 15+",
    descricao:
      "Você continuou treinando para dominar melhor a arte da estratégia e do planejamento. Ganha a característica de classe Esquema Tático. Ganha a característica de classe Explorar Fraqueza (não ganha o avanço de 7º nível). Aprende 1 Plano da lista de Agente de Inteligência (não pode trocá-lo depois de conhecido).",
  },
  {
    key: "ordens-corajosas",
    nome: "Ordens Corajosas",
    categoria: "classe",
    classeKey: "agente-inteligencia",
    preRequisito: "2+ níveis em Agente de Inteligência",
    descricao:
      "Você aprende com seus colegas a gerenciar e utilizar mais planos no meio da batalha, tornando-se mais flexível em seu pensamento e em como responde ao perigo. Ganha 1 Ordem Brava adicional. Ganha uma Ordem Brava adicional nos níveis 11º e 17º de Agente de Inteligência.",
  },
  {
    key: "explorar-conhecimento",
    nome: "Explorar Conhecimento",
    categoria: "classe",
    classeKey: "agente-inteligencia",
    preRequisito: "4+ níveis em Agente de Inteligência",
    descricao:
      "Após inúmeras horas de estudo, pesquisa e uso de sua habilidade investigativa, você desenvolve um poço de conhecimento que a maioria dos outros operativos gostaria de ter. Como ação, pode encerrar sua característica Explorar Fraqueza em uma criatura analisada, fazendo um teste de Inteligência (Investigação ou História) contra CD 8 + nível da criatura. Em sucesso, ganha uma das informações a seguir conforme a margem do sucesso: Atende ou Excede a CD — Rank/Função/Nível da criatura. Excede a CD em +5 — bônus de ataque desarmado, de Genjutsu ou de Taijutsu, ou CD de resistência de Ninjutsu/Genjutsu/Taijutsu. Excede a CD em +10 — bônus de resistência de Força, Destreza, Constituição, Inteligência, Sabedoria ou Carisma. Excede a CD em +15 — Traços Gerais, de Função ou de Clã, Dados de Tenacidade e Resistências Lendárias, se houver.",
  },

  // ===== NINJA MÉDICO =====
  {
    key: "treinamento-medico",
    nome: "Treinamento Médico",
    categoria: "classe",
    classeKey: "ninja-medico",
    preRequisito: "Nível de personagem 5+, Inteligência ou Sabedoria 15+; não pode ter níveis em Ninja Médico",
    descricao:
      "Você começou a treinar para dominar melhor a arte da medicina, imitando seus mestres, treinadores ou inspirações da melhor forma possível. Aprende a curar e a causar dano em uma bela exibição de medicina. Ganha proficiência em Medicina. Ganha a palavra-chave Médico e a habilidade de conjurar jutsu com essa palavra-chave, até Rank C. Ganha a característica de classe Descanso Rejuvenescedor, como se fosse um Ninja Médico de 2º nível (sem nenhum benefício de nível mais alto).",
  },
  {
    key: "medico-especialista-10",
    nome: "Médico Especialista",
    categoria: "classe",
    classeKey: "ninja-medico",
    preRequisito: "Treinamento Médico, nível de personagem 10+",
    descricao:
      "Você continuou treinando para dominar melhor a arte da medicina. Ganha a característica Bisturi de Chakra, como se fosse um Ninja Médico de 3º nível, com 3 cargas por descanso longo. Pode aprender jutsu com a palavra-chave Médico, até Rank B. Ganha a característica Preservar/Tirar Vida, como se fosse um Ninja Médico de 5º nível (sem nenhum benefício de nível mais alto), usável duas vezes por descanso.",
  },
  {
    key: "medico-entusiasta",
    nome: "Médico Entusiasta",
    categoria: "classe",
    classeKey: "ninja-medico",
    preRequisito: "Médico Especialista (nível 10)",
    descricao:
      "Você continua seu treinamento para aprender mais sobre os segredos da medicina, especializando-se em um Princípio específico. Selecione uma Classe de Ninja Médico, Princípio da Medicina (subclasse). Você ganha o primeiro recurso de 6º nível, Preservar Vida ou Tirar Vida, que ele concede (não ganha nenhum avanço de nível superior). Além disso, não pode ganhar os benefícios da subclasse Xamã.",
  },
  {
    key: "especialista-medico-15",
    nome: "Especialista Médico",
    categoria: "classe",
    classeKey: "ninja-medico",
    preRequisito: "Médico Especialista (nível 10), nível de personagem 15+",
    descricao:
      "Você continuou treinando para dominar melhor a arte da medicina. Ganha os benefícios de 7º nível da característica Bisturi de Chakra. Ganha uma doutrina da característica Doutrina Médica. Pode aprender jutsu com a palavra-chave Médico, até Rank A.",
  },
  {
    key: "medicina-ruim",
    nome: "Medicina Ruim",
    categoria: "classe",
    classeKey: "ninja-medico",
    preRequisito: "8+ níveis em Ninja Médico",
    descricao:
      "Você leva os aspectos mais combativos do Ninjutsu Médico a sério, concentrando-se em derrubar seus inimigos mais rápido do que eles podem machucar seus aliados. Sua característica Bisturi de Chakra ganha +2 usos adicionais por descanso longo. Sua característica Tirar Vida passa a causar dano adicional igual a 5 + três vezes o seu nível de Ninja Médico.",
  },
  {
    key: "cura-focada",
    nome: "Cura Focada",
    categoria: "classe",
    classeKey: "ninja-medico",
    preRequisito: "4+ níveis em Ninja Médico",
    descricao:
      "Você aprende com seus colegas a gerenciar melhor seu chakra, utilizando melhor seu potencial de cura e se tornando mais flexível em suas técnicas de restauração. O dado de cura da sua característica Descanso Rejuvenescedor aumenta para d10. Jutsu com a palavra-chave Médico que se beneficiariam da sua característica Cura Canalizada curam pontos de vida adicionais iguais ao seu modificador de habilidade de Ninjutsu, se ainda não o fizerem.",
  },

  // ===== NINJA BATEDOR =====
  {
    key: "treinamento-de-scout",
    nome: "Treinamento de Reconhecimento",
    categoria: "classe",
    classeKey: "ninja-batedor",
    preRequisito: "Nível de personagem 5+, duas entre Força/Inteligência/Sabedoria 14+; não pode ter níveis em Ninja Batedor",
    descricao:
      "Você começou a treinar para melhor generalizar suas habilidades, imitando seus mestres, treinadores ou inspirações da melhor forma possível, aprendendo a se tornar um pau para toda obra, mestre de nada. Ganha proficiência em dois kits de ferramentas à sua escolha. Selecione uma Classe de Ninja Batedor, Técnica de Reconhecimento (subclasse) — qualquer talento de Arquétipo de Ninja Batedor que se refira a ganhos em níveis específicos passa a se referir à Técnica escolhida (não pode escolher Batedor Trapaceiro). Ganha 2 Dados de Superioridade (d4), gastáveis em manobras e recuperados ao completar um descanso. Ganha 1 Manobra concedida pela Técnica escolhida.",
  },
  {
    key: "especialista-em-patrulha",
    nome: "Especialista em Patrulha",
    categoria: "classe",
    classeKey: "ninja-batedor",
    preRequisito: "Treinamento de Reconhecimento, nível de personagem 10+",
    descricao:
      "Você continuou treinando para dominar melhor a arte da generalização de habilidades. Ganha a segunda característica de 3º nível da sua Técnica de Reconhecimento (sem nenhum avanço de nível superior). Se a característica de classe adquirida escalar com base no seu nível de classe, você é tratado como um Ninja Batedor de 3º nível. Ganha 1 Dado de Superioridade. Ganha 1 Manobra concedida pela sua Técnica de Reconhecimento.",
  },
  {
    key: "entusiasta-de-patrulha",
    nome: "Entusiasta de Patrulha",
    categoria: "classe",
    classeKey: "ninja-batedor",
    preRequisito: "Especialista em Patrulha",
    descricao:
      "Você continua seu treinamento para aprender mais sobre os segredos do assassinato, especializando-se em uma Técnica específica. Ganha a característica de 6º nível da sua Técnica de Reconhecimento (sem nenhum avanço de nível superior).",
  },
  {
    key: "especialista-em-escoteiro",
    nome: "Especialista em Escoteiro",
    categoria: "classe",
    classeKey: "ninja-batedor",
    preRequisito: "Entusiasta de Patrulha, nível de personagem 15+",
    descricao:
      "Você continuou treinando para dominar melhor a arte da generalização de habilidades. Ganha a característica de 9º nível da sua Técnica de Reconhecimento (sem nenhum avanço de nível superior). Ganha 1 Dado de Superioridade. Ganha 1 Manobra concedida pela sua Técnica de Reconhecimento.",
  },
  {
    key: "adepto-de-reconhecimento",
    nome: "Adepto de Reconhecimento",
    categoria: "classe",
    classeKey: "ninja-batedor",
    preRequisito: "4+ níveis em Ninja Batedor",
    descricao:
      "Diferente de outros batedores, você levou sua proeza marcial a um novo nível, tornando-se mais adepto do seu estilo de combate. Aprende duas manobras para as quais se qualifica. Ganha 1 Dado de Superioridade.",
  },
  {
    key: "veterano-de-patrulha",
    nome: "Veterano de Patrulha",
    categoria: "classe",
    classeKey: "ninja-batedor",
    preRequisito: "8+ níveis em Ninja Batedor",
    descricao:
      "Seu tempo e experiência na arte do reconhecimento lhe deram conhecimento valioso sobre como se comportar dentro e fora de combate. Ganha 2 Dados de Superioridade. Aprende duas manobras para as quais se qualifica.",
  },

  // ===== ESPECIALISTA EM TAIJUTSU =====
  {
    key: "treinamento-artes-marciais",
    nome: "Treinamento em Artes Marciais",
    categoria: "classe",
    classeKey: "especialista-taijutsu",
    preRequisito: "Nível de personagem 5+, Força ou Destreza 15+; não pode ter níveis em Especialista em Taijutsu",
    descricao:
      "Você começou a treinar para dominar melhor a arte das Artes Marciais Mistas, aprendendo a lutar de maneiras que não conseguia antes. Ganha proficiência em Artes Marciais. Seleciona uma Postura de Taijutsu do Capítulo 13: Opções de Personalização (não pode usar a mesma Postura mais de uma vez). Sua velocidade aumenta em 1,5 metro. Ganha 1 Dado Marcial (d4), recuperado no fim do seu turno seguinte. Aprende 1 Técnica Marcial de sua escolha.",
  },
  {
    key: "especialista-artes-marciais-10",
    nome: "Especialista em Artes Marciais",
    categoria: "classe",
    classeKey: "especialista-taijutsu",
    preRequisito: "Treinamento em Artes Marciais, nível de personagem 10+",
    descricao:
      "Você continuou treinando para dominar melhor a arte do Taijutsu. Ganha 1 Dado Marcial adicional. Aprende uma Técnica Marcial adicional. Sua velocidade aumenta em mais 1,5 metro.",
  },
  {
    key: "entusiasta-artes-marciais",
    nome: "Entusiasta em Artes Marciais",
    categoria: "classe",
    classeKey: "especialista-taijutsu",
    preRequisito: "Especialista em Artes Marciais (nível 10)",
    descricao:
      "Você continua seu treinamento para aprender mais sobre os segredos do Taijutsu, especializando-se em um Estilo específico. Selecione uma Classe de Especialista em Taijutsu, Estilo Taijutsu (subclasse). Você ganha as Técnicas Marciais de 3º nível que ele concede.",
  },
  {
    key: "especialista-artes-marciais-15",
    nome: "Especialista em Artes Marciais",
    categoria: "classe",
    classeKey: "especialista-taijutsu",
    preRequisito: "Especialista em Artes Marciais (nível 10), nível de personagem 15+",
    descricao:
      "Você continuou treinando para dominar melhor a arte do Taijutsu. Ganha 1 Dado Marcial adicional. Aprende 1 Técnica Marcial adicional. Ganha a característica de classe Evasão ou Golpes Aprimorados de Chakra (escolha uma).",
  },
  {
    key: "especialista-em-combo",
    nome: "Especialista em Combo",
    categoria: "classe",
    classeKey: "especialista-taijutsu",
    preRequisito: "4+ níveis em Especialista em Taijutsu",
    descricao:
      "Seu treinamento excessivo lhe deu um reservatório maior de vigor. Reduz o custo de um Taijutsu com a palavra-chave Combo em 1. Ao conjurar um Taijutsu com a palavra-chave Finalizador logo depois de conjurar um com a palavra-chave Combo, reduz o custo desse Finalizador em -2 adicional (mínimo 1).",
  },
  {
    key: "ataque-marcial",
    nome: "Ataque Marcial",
    categoria: "classe",
    classeKey: "especialista-taijutsu",
    preRequisito: "8+ níveis em Especialista em Taijutsu",
    descricao:
      "Você pega seus ensinamentos de Defesa Marcial e os converte em uma ferramenta ofensiva. Quando ganha os benefícios da característica Defesa Marcial que lhe concede Slots de Guarda, pode escolher adicionar Selos de Arma aos seus slots, em vez de Selos de Armadura, com as mesmas limitações de rank e slot que os Slots de Guarda têm.",
  },

  // ===== ESPECIALISTA EM ARMAS =====
  {
    key: "treinamento-artes-com-armas",
    nome: "Treinamento em Artes com Armas",
    categoria: "classe",
    classeKey: "especialista-armas",
    preRequisito: "Nível de personagem 5+, Força ou Destreza 15+; não pode ter níveis em Especialista em Armas",
    descricao:
      "Você começou a treinar para dominar melhor a arte do Bukijutsu, aprendendo a lutar de maneiras que não conseguia antes. Ganha proficiência em Artes Marciais. Seleciona uma Postura de Arma do Capítulo 13: Opções de Personalização (não pode usar a mesma Postura mais de uma vez). Ganha um Dado de Rajada (d4). Seleciona uma Técnica de Rajada da característica Rajada de Armas de 2º nível, ganhando a habilidade de usá-la.",
  },
  {
    key: "especialista-artes-com-armas-10",
    nome: "Especialista em Artes com Armas",
    categoria: "classe",
    classeKey: "especialista-armas",
    preRequisito: "Treinamento em Artes com Armas, nível de personagem 10+",
    descricao:
      "Você continuou treinando para dominar melhor a arte do Bukijutsu. Seleciona uma Técnica de Rajada da característica Rajada de Armas de 2º nível que ainda não tenha selecionado, ganhando a habilidade de usá-la. Seleciona um tipo de arma no qual tem proficiência (como Katana, Kunai, etc.); ela se torna seu Foco em Arma, ganhando +1 em ataque e dano, se ainda não tiver. Seleciona uma Característica de Arma da tabela da característica Foco em Arma, que seu Foco em Arma passa a ter (seguindo os requisitos definidos).",
  },
  {
    key: "entusiasta-artes-de-arma",
    nome: "Entusiasta das Artes de Arma",
    categoria: "classe",
    classeKey: "especialista-armas",
    preRequisito: "Especialista em Artes com Armas (nível 10)",
    descricao:
      "Você continua seu treinamento para aprender mais sobre os segredos do Bukijutsu, especializando-se em uma Forma específica. Selecione uma Classe de Especialista em Armas, Forma de Arma (subclasse). Você ganha uma das Técnicas de Rajada de 3º nível dela, e um dos Estilos de 3º nível dela.",
  },
  {
    key: "especialista-artes-de-armas-15",
    nome: "Especialista em Artes de Armas",
    categoria: "classe",
    classeKey: "especialista-armas",
    preRequisito: "Entusiasta das Artes de Arma, nível de personagem 15+",
    descricao:
      "Você continuou treinando para dominar melhor a arte do Bukijutsu. Seu Dado de Rajada aumenta para d6. Seleciona uma Técnica de Rajada da característica Rajada de Armas de 2º nível que ainda não tenha selecionado, ganhando a habilidade de usá-la.",
  },
  {
    key: "foco-expandido",
    nome: "Foco Expandido",
    categoria: "classe",
    classeKey: "especialista-armas",
    preRequisito: "4+ níveis em Especialista em Armas",
    descricao:
      "Você se torna capaz de focar em mais do que sua limitação atual de focos de arma. Seleciona um tipo de arma (como Katana ou Kunai) que ainda não marcou como Foco em Arma; ela se torna seu Foco em Arma, ganhando +1 em ataque e dano e uma Característica de Arma. Um Foco em Arma só pode ter um bônus de +3 em ataque e dano como resultado deste talento. Pode pegar este talento mais de uma vez, selecionando um novo tipo de arma ou o mesmo tipo já selecionado antes.",
  },
  {
    key: "estilo-de-fluxo-livre",
    nome: "Estilo de Fluxo Livre",
    categoria: "classe",
    classeKey: "especialista-armas",
    preRequisito: "8+ níveis em Especialista em Armas",
    descricao:
      "Você aprende a fundir suas Técnicas de Rajada com seu Bukijutsu. Aprende um Estilo para o qual se qualifica. Bukijutsu sem alcance Próprio que você conjura pode ganhar o benefício de uma Técnica de Rajada, como se você tivesse feito um ataque de arma.",
  },

  // ===== ARQUÉTIPO DE BRUXA (não ligado a uma classe do Manual Shinobi) =====
  {
    key: "treinamento-de-bruxas",
    nome: "Treinamento de Bruxas",
    categoria: "classe",
    preRequisito: "Nível de personagem 4+, Inteligência 14+, Sabedoria 14+",
    descricao:
      "Arquétipo autônomo — não está ligado a nenhuma das 11 classes do Manual Shinobi, mas a uma tradição própria (\"Bruxas\", de Cackles). Você estudou os caminhos da Esotérica, a forma única de Ninshou do coven das Bruxas, descobrindo novas maneiras de utilizar partículas de chakra de fluxo livre (\"mana\"). Ganha proficiência em Natureza. Seleciona três Ninjutsu ou Genjutsu Rank C ou inferior: eles ganham a palavra-chave Magia e são tratados como magias para os demais talentos desta linha. Ganha a característica Treinamento de Bruxa: jutsu com a palavra-chave Magia podem ser lançados sem selos de mão; duas vezes por descanso, ao lançar um deles, pode gastar a reação para aumentar seus efeitos como se tivesse sido aprimorado 2 níveis acima do seu rank básico. Além disso, ganha o efeito de uma das 4 escolas de Esotérica:\n\n- Escola de Psiônica: aprende o Raio de Bruxa — no lugar de um ataque feito com a ação de Ataque, ataca com ele (ataque de Ninjutsu à distância, alcance 18 metros, 1d6 + modificador de Ninjutsu de dano de força; +1d6 nos níveis de personagem 8º e 12º).\n- Escola de Lâminas: aprende a Arma de Bruxa — no lugar de um ataque feito com a ação de Ataque, ataca com ela (ataque de Ninjutsu corpo a corpo, alcance 1,5 metro, 1d8 + modificador de Ninjutsu de dano de força; +1d8 nos níveis de personagem 8º e 12º).\n- Escola das Sombras: aprende o Passo de Bruxa — ao gastar metade do seu movimento, seleciona um espaço visível atualmente afetado por um jutsu ou com chakra aprimorado (ex.: uma área de efeito mantida por uma criatura, ou um efeito ambiental sobrenatural) e se teletransporta para um espaço a até 1,5 metro dele.\n- Escola de Aprimoramentos: aprende a manifestar a Aura da Bruxa — como ação, manifesta uma aura em raio de 3 metros, mantida como concentração em um Genjutsu Rank C; aliados na aura ganham +1 em testes de resistência; inimigos na aura sofrem -2 em testes de ataque.",
  },

  // ===== MESTRE DAS MARIONETES =====
  {
    key: "treinamento-de-marionetista",
    nome: "Treinamento de Marionetista",
    categoria: "classe",
    classeKey: "mestre-marionetes",
    preRequisito: "Força ou Destreza 15+ e Inteligência 15+, nível de personagem 5+; não pode ter níveis em Mestre das Marionetes",
    descricao:
      "Você começou a estudar com os antigos estudiosos da técnica de Mestre das Marionetes dos arredores de Sunagakure, adotando o conhecimento deles da melhor forma possível. Ganha proficiência em Artesanato. Ganha uma tática da característica Táticas da Arte, escolhendo entre Táticas Ágeis, Táticas Defensivas ou Táticas Engenhosas. Ganha uma Ferramenta de Marionete mais fraca: ganha a característica Ferramenta de Marionete da classe Mestre das Marionetes, mas sem o benefício de 6º nível, e com os pontos de vida máximos da marionete reduzidos à metade (use seu nível de personagem como nível de Mestre das Marionetes para calcular os PV dela). Essa marionete aumenta um valor de habilidade em +2, ou dois valores em +1 (isso se repete para cada talento de Arquétipo de Mestre das Marionetes que você adquirir depois). Ganha 2 Upgrades de Marionete de nível Madeira, trocáveis com 1 semana de tempo de inatividade.",
  },
  {
    key: "especialista-em-marionetes-10",
    nome: "Especialista em Marionetes",
    categoria: "classe",
    classeKey: "mestre-marionetes",
    preRequisito: "Treinamento de Marionetista, nível de personagem 10+",
    descricao:
      "Você dedica religiosamente seu tempo livre a estudar os movimentos meticulosos de cordas necessários para controlar sua marionete. Ganha um upgrade de nível Bronze (ou, alternativamente, um upgrade de nível inferior). Ganha os avanços de 6º e 9º nível da característica Ferramenta de Marionete. Sua Ferramenta de Marionete ganha 5 espaços para Selos de Aprimoramento.",
  },
  {
    key: "entusiasta-de-marionetes",
    nome: "Entusiasta de Marionetes",
    categoria: "classe",
    classeKey: "mestre-marionetes",
    preRequisito: "Especialista em Marionetes (nível 10)",
    descricao:
      "Você aprende mais sobre a história de como a forma de Mestre das Marionetes se desenvolveu, decidindo estudar os segredos de uma Técnica específica. Ganha uma atualização de nível Prata (ou, alternativamente, uma de nível inferior). Selecione uma Classe de Mestre das Marionetes, Técnica de Marionete (subclasse). Pode fazer até uma atualização exclusiva da subclasse escolhida usando seu conjunto de upgrades adquirido, e ganha o segundo recurso de 2º nível dela (para qualquer escala que esses recursos possam ter, trate seu nível de Mestre das Marionetes como 10).",
  },
  {
    key: "especialista-em-marionetes-15",
    nome: "Especialista em Marionetes",
    categoria: "classe",
    classeKey: "mestre-marionetes",
    preRequisito: "Especialista em Marionetes (nível 10), nível de personagem 15+",
    descricao:
      "Seu estudo sob os anciões dos renomados Mestres das Marionetes de Sunagakure chegou ao fim. Ganha uma atualização de nível Ouro (ou, alternativamente, uma de nível inferior). Ganha o avanço de 15º nível da característica Ferramenta de Marionete. Ganha um segundo recurso de Tática do Ofício, escolhendo da mesma lista especificada no talento Treinamento de Marionetista.",
  },
  {
    key: "ferramentas-para-continuar-um-legado",
    nome: "Ferramentas para Continuar um Legado",
    categoria: "classe",
    classeKey: "mestre-marionetes",
    preRequisito: "4+ níveis em Mestre das Marionetes",
    descricao:
      "Para continuar o legado dos Mestres das Marionetes que vieram antes de você, você se esforça para tornar seu armamento mais forte e melhor, encaixando mais peças de forma mais eficiente. Ganha um upgrade de nível Madeira. Ganha um upgrade de nível Bronze adicional no 9º nível de Mestre das Marionetes. Ganha um upgrade de nível Prata adicional no 14º nível. Ganha um upgrade de nível Ouro ou Platina adicional no 19º nível.",
  },
  {
    key: "o-momento-em-que-entendi",
    nome: "O Momento em que Entendi",
    categoria: "classe",
    classeKey: "mestre-marionetes",
    preRequisito: "8+ níveis em Mestre das Marionetes",
    descricao:
      "Por necessidade ou motivação, você descobriu que seu corpo não consegue mais manter o que você precisa, adicionando ou substituindo partes dele por itens aprimorados de chakra. Enquanto tiver ao menos 1 ponto de vida no início do seu turno, pode gastar um dado de vida e recuperar PV iguais ao resultado + seu modificador de Constituição (se tiver 0 PV, pode usar este recurso no fim do seu turno). Pode integrar em si mesmo qualquer upgrade com a etiqueta \"Técnicas: Perfeito\": essas atualizações passam a contá-lo como uma marionete para quaisquer cálculos que exijam (pode pegar upgrades com a etiqueta Perfeito mesmo de Técnicas de Marionete que você não tem). Pode optar por delegar metade dos espaços de selo que ganharia para sua Ferramenta de Marionete com Reequipamento Aprimorado de Chakra para si mesmo, em vez disso.",
  },
  {
    key: "a-certeza-do-aco",
    nome: "A Certeza do Aço",
    categoria: "classe",
    classeKey: "mestre-marionetes",
    preRequisito: "O Momento em que Entendi, 12+ níveis em Mestre das Marionetes, Constituição 16+",
    descricao:
      "Você finalmente conseguiu uma maneira de ser infinito: ao selar seu coração e alma em um recipiente, seu corpo nunca mais será um prejuízo para você. Você se tornou um fantoche vivo. Ganha 2 atualizações adicionais, de até nível Prata, que devem ser instaladas em você conforme especificado em O Momento em que Entendi. Não precisa mais comer, respirar, beber ou dormir, e é imune a sufocamento e veneno. Ao receber cura de um jutsu médico, pode usar o benefício de gasto de dados de vida de O Momento em que Entendi e recuperar PV imediatamente como parte dessa cura. Ao fazer um descanso curto, recupera um número de dados de vida igual a 1/4 do seu número máximo de dados de vida.",
  },

  // ===== NINJA COZINHEIRO =====
  {
    key: "chef-trainee",
    nome: "Aprendiz de Chef",
    categoria: "classe",
    classeKey: "ninja-cozinheiro",
    preRequisito: "Inteligência 15+, nível de personagem 5+; não pode ter níveis em Ninja Cozinheiro",
    descricao:
      "Você começou a treinar com os melhores dos melhores para dominar a arte da culinária, imitando-os da melhor forma possível. Ganha proficiência em ferramentas de cozinha. Ganha um Dado de Cozinha (1d6). Pode criar 4 lanches como se tivesse usado a característica Lanches de Shinobi, recuperando-os ao fim de um descanso curto. Ganha uma arma de infusão de ferramenta de cozinha.",
  },
  {
    key: "chefs-expert",
    nome: "Especialista em Chefs",
    categoria: "classe",
    classeKey: "ninja-cozinheiro",
    preRequisito: "Aprendiz de Chef, nível de personagem 10+",
    descricao:
      "Você continuou treinando para dominar melhor a arte da culinária. Ganha +1 lanche adicional que pode criar. Seu Dado de Cozinha passa a ser 1d8. Ganha experiência (dobra o bônus de proficiência) em uma perícia na qual já é proficiente, à sua escolha.",
  },
  {
    key: "entusiasta-de-chefs",
    nome: "Entusiasta de Chefs",
    categoria: "classe",
    classeKey: "ninja-cozinheiro",
    preRequisito: "Especialista em Chefs (nível 10)",
    descricao:
      "Você continua seu treinamento para aprender mais sobre os segredos da culinária, especializando-se em um Foco específico. Selecione um Foco de Culinária (subclasse). Ganha os lanches e recursos de 2º nível que ele concede.",
  },
  {
    key: "especialista-em-chefs-15",
    nome: "Especialista em Chefs",
    categoria: "classe",
    classeKey: "ninja-cozinheiro",
    preRequisito: "Especialista em Chefs (nível 10), nível de personagem 15+",
    descricao:
      "Você continuou treinando para dominar melhor a arte da culinária. Ganha +1 lanche adicional que pode criar. Seu Dado de Cozinha passa a ser 1d10. Sua arma de infusão de ferramenta de cozinha é tratada como se já tivesse a propriedade de 6º nível. Ganha a característica de classe Alimento para a Alma.",
  },
  {
    key: "cozinhar-em-lote",
    nome: "Cozinhar em Lote",
    categoria: "classe",
    classeKey: "ninja-cozinheiro",
    preRequisito: "8+ níveis em Ninja Cozinheiro",
    descricao:
      "Você aprendeu a cozinhar em grandes lotes e massas, aumentando o número de lanches que pode fazer. Ganha um número adicional de lanches igual a 1/4 do seu bônus de proficiência. No 10º nível, esse número aumenta para 1/2 do bônus de proficiência; no 16º nível, para o bônus de proficiência completo.",
  },
  {
    key: "truques-do-comercio",
    nome: "Truques do Comércio",
    categoria: "classe",
    classeKey: "ninja-cozinheiro",
    preRequisito: "4+ níveis em Ninja Cozinheiro",
    descricao:
      "Você aprendeu a fazer lanches com outros chefs, sendo capaz de recriá-los. Aumenta seu Carisma ou Inteligência em +1. Aprende dois lanches de sua escolha de qualquer outro Foco de Culinária. Ganha experiência em uma perícia na qual já é proficiente.",
  },
  {
    key: "cozinheiro-de-guerra",
    nome: "Cozinheiro de Guerra",
    categoria: "classe",
    classeKey: "ninja-cozinheiro",
    preRequisito: "4+ níveis em Ninja Cozinheiro",
    descricao:
      "Você esteve em algumas das mais ferozes batalhas, sendo capaz de se manter firme com suas experiências. Pode gastar um lanche sempre que fizer um ataque corpo a corpo com sua arma de infusão de ferramenta de cozinha; para cada lanche gasto, soma seu Dado de Cozinha ao dano. Escolha três Bukijutsu e Taijutsu que conhece: pode conjurá-los usando Inteligência em vez do atributo de conjuração normal; se o jutsu tiver um componente de arma, pode considerar seu utensílio de cozinha como esse componente.",
  },
  {
    key: "chakra-da-fome",
    nome: "Chakra da Fome",
    categoria: "classe",
    classeKey: "ninja-cozinheiro",
    preRequisito: "14+ níveis em Ninja Cozinheiro",
    descricao:
      "Você aprendeu a usar o chakra dentro de seus lanches para alimentar seu próprio jutsu, permitindo que funcionem como uma espécie de catalisador. Ao lançar um jutsu, pode gastar um lanche e rolar seu Dado de Cozinha; ao fazer isso, pode reduzir o custo do jutsu pela metade do resultado.",
  },

  // ===== NINJA CIENTISTA =====
  {
    key: "treinamento-de-cientista",
    nome: "Treinamento de Cientista",
    categoria: "classe",
    classeKey: "ninja-cientista",
    preRequisito: "Nível de personagem 5+, Inteligência 15+; não pode ter níveis em Ninja Cientista",
    descricao:
      "Você começou a aprimorar sua compreensão do universo, encontrando novas maneiras de utilizar chakra dentro e fora do combate. Ganha proficiência em Artesanato. Ganha a característica Dispositivo de Contenção de Chakra (pode, em vez disso, comportar chakra igual ao seu nível × 5). Ganha a característica Ferramentas Ninja Científicas. Ganha 10 Pontos de Criação.",
  },
  {
    key: "cientista-especialista",
    nome: "Cientista Especialista",
    categoria: "classe",
    classeKey: "ninja-cientista",
    preRequisito: "Treinamento de Cientista, nível de personagem 10+",
    descricao:
      "Você se aprofundou nas maravilhas do chakra. Ganha a característica Lei de Yhprum. Ganha os recursos de 3º nível de 1 Investigação Científica (subclasse). Ganha mais 10 Pontos de Criação.",
  },
  {
    key: "entusiasta-cientista",
    nome: "Entusiasta Cientista",
    categoria: "classe",
    classeKey: "ninja-cientista",
    preRequisito: "Cientista Especialista (nível 10)",
    descricao:
      "Você dedicou sua vida à busca do futuro. Ganha a característica Resposta Calculada. Ganha a característica Gênio Infundido.",
  },
  {
    key: "especialista-cientista-15",
    nome: "Especialista Cientista",
    categoria: "classe",
    classeKey: "ninja-cientista",
    preRequisito: "Cientista Especialista (nível 10), nível de personagem 15+",
    descricao:
      "O universo canta para você, e você deve estudar esta ópera em grande detalhe. Ganha mais 10 Pontos de Criação. Pode selecionar duas Ferramentas Ninja Científicas de custo 8 Pontos de Criação ou menos para se tornarem suas ferramentas favoritas: o custo em Pontos de Criação delas é reduzido em 2, e o dreno de chakra do CCD é reduzido em 5.",
  },
];
