import type { JutsuEffectDefinition } from "@/lib/jutsuCreation/types";

/**
 * Catálogo de efeitos de Genjutsu (Passo 3) — Manual Shinobi p.135-141.
 * Genjutsu permite, por padrão, até 2 Efeitos Condicionais simultâneos
 * (Ninjutsu/Taijutsu permitem só 1) — ver `familyMaxCondicionais` em
 * `compute.ts`. Duas entradas do livro ("Concussivo") aparecem impressas
 * duas vezes com requisitos ligeiramente diferentes (p.138 e p.140); foi
 * mantida a versão mais permissiva ("qualquer palavra-chave sensorial"),
 * com nota abaixo.
 */
export const GENJUTSU_EFFECTS: JutsuEffectDefinition[] = [
  // ── Genéricos ──────────────────────────────────────────────────────
  {
    key: "area",
    nome: "Área",
    categoria: "generico",
    custoSlots: 1,
    descricao:
      "Seu Jutsu ganha uma área de efeito: esfera de 6m de raio, cone de 4,5m, cubo de 6m, cilindro de 6m ou linha de 9m. As criaturas fazem um teste de Inteligência, Sabedoria ou Carisma (escolha) contra sua CD de Genjutsu; se o jutsu exigir outro teste para uma Condição adicional, este teste substitui os demais (não vale para efeitos com \"Efeito Terciário\"). Reduza o dado de dano em 1 (mínimo 1). Sucesso = metade do dano e nenhum efeito condicional. Se adicionado a um jutsu Rank C ou superior, aumente a forma em 1,5m para cada rank acima de D.",
  },
  {
    key: "efeito-retardado",
    nome: "Efeito Retardado",
    categoria: "generico",
    custoSlots: 1,
    descricao:
      "Depois de afetar uma criatura, um efeito retardado é ativado na rodada seguinte ao término deste jutsu. Selecione um efeito que o jutsu já tenha (diferente deste); ele é ativado no início do seu próximo turno ou do turno da criatura afetada.",
  },
  {
    key: "duradouro",
    nome: "Duradouro",
    categoria: "generico",
    custoSlots: 1,
    maxRepeticoes: 2,
    descricao:
      "Aumenta a duração de Instantâneo para Concentração, até 1 minuto. Se aplicado uma segunda vez, vira Concentração, até 10 minutos. Se aplicado a um jutsu com tempo de conjuração Reação, a duração vira 1 Rodada. Se o jutsu tiver Efeito Condicional, as criaturas afetadas podem refazer o teste de resistência no fim de cada turno para acabar com o efeito.",
  },
  {
    key: "veloz",
    nome: "Veloz",
    categoria: "generico",
    custoSlots: 1,
    maxRepeticoes: 2,
    descricao:
      "O tempo de conjuração vira uma Ação Bônus. Se o jutsu causa dano ou cura, reduza o dado de dano/cura em 1. Pode ser adicionado uma segunda vez, mudando o tempo de conjuração para Reação.",
  },
  {
    key: "falha-no-sucesso",
    nome: "Falha no Sucesso",
    categoria: "generico",
    custoSlots: 1,
    descricao:
      "O jutsu impõe um efeito parcial mesmo se a criatura passar no teste de resistência (mas não criticamente). Escolha um: se Dano, metade dos dados de dano (arredondado para baixo); se Efeito Condicional, a criatura ganha 1 graduação da condição escolhida por até 1 turno; se atrapalhar (Impedimento), a criatura sofre metade do efeito ou a duração é reduzida a 1 turno.",
  },
  {
    key: "aumento-escala",
    nome: "Aumento (escala com o rank de conjuração)",
    categoria: "generico",
    custoSlots: 1,
    descricao:
      "O jutsu pode ser conjurado em um rank acima do de criação, aumentando um dos efeitos atuais por rank elevado. Escolha um: se Dano/Proteção/Cura, aumente em 2 dados por rank; se Efeito Condicional, aumente o número de graduações da condição escolhida em +1 por rank.",
  },
  {
    key: "inevitavel",
    nome: "Inevitável",
    categoria: "generico",
    custoSlots: 1,
    descricao:
      "O jutsu não exige jogada de ataque — sempre tem chance de acertar. Selecione uma criatura alvo que você possa sentir. O alvo faz um teste de Inteligência, Sabedoria ou Carisma (escolha na criação) contra sua CD de Genjutsu; este teste substitui todos os outros testes de resistência dos demais efeitos, tornando-se o teste geral do jutsu.",
  },

  // ── Ofensiva ──────────────────────────────────────────────────────
  {
    key: "critico",
    nome: "Crítico",
    categoria: "ofensivo",
    custoSlots: 1,
    requisitos: ["Tátil", "Dano"],
    maxRepeticoes: 5,
    descricao:
      "Aumenta a faixa de ameaça crítica deste jutsu em +1. Pode ser adicionado novamente, aumentando +1 adicional a cada vez.",
  },
  {
    key: "dano",
    nome: "Dano",
    categoria: "ofensivo",
    custoSlots: 1,
    requisitos: ["Tátil"],
    descricao: "O Genjutsu causa dano Psíquico.",
    dadosPorRank: {
      D: ["4d4", "3d6", "2d8", "1d10"],
      C: ["6d4", "4d6", "3d8", "2d10", "1d12"],
      B: ["12d4", "8d6", "6d8", "4d10", "3d12"],
      A: ["16d4", "12d6", "9d8", "7d10", "5d12"],
      S: ["20d4", "15d6", "12d8", "10d10", "9d12"],
    },
  },
  {
    key: "dano-fortalecido",
    nome: "Dano Fortalecido",
    categoria: "ofensivo",
    custoSlots: 1,
    requisitos: ["Dano"],
    maxRepeticoes: 4,
    descricao: "Aumenta seu dado de dano em 1. Pode ser tomado até 3 vezes adicionais após a primeira.",
  },
  {
    key: "ataques-multiplos",
    nome: "Ataques Múltiplos",
    categoria: "ofensivo",
    custoSlots: 1,
    requisitos: ["Dano"],
    maxRepeticoes: 2,
    descricao: "Concede mais de uma Rolagem de Ataque. Aumenta o número de ataques em +1, dividindo os dados de dano igualmente. Pode ser obtido até 2 vezes no total.",
  },
  {
    key: "ofensa-poderosa",
    nome: "Ofensa Poderosa",
    categoria: "ofensivo",
    custoSlots: 1,
    requisitos: ["Dano"],
    maxRepeticoes: 2,
    descricao:
      "Ao rolar o dano do jutsu, adiciona seu modificador de habilidade Genjutsu à primeira jogada de dano. Pode ser usado mais uma vez, passando a adicionar o modificador a todas as jogadas de dano.",
  },

  // ── Defensiva ─────────────────────────────────────────────────────
  {
    key: "blindagem-fortalecida",
    nome: "Blindagem Fortalecida",
    categoria: "defensivo",
    custoSlots: 1,
    requisitos: ["Blindagem"],
    maxRepeticoes: 2,
    descricao: "Aumenta seu dado de proteção em 2. Este efeito pode ser obtido mais uma vez.",
  },
  {
    key: "resistencia",
    nome: "Resistência",
    categoria: "defensivo",
    custoSlots: 1,
    requisitos: ["Tátil"],
    maxRepeticoes: 6,
    descricao:
      "Concede a você ou à criatura alvo resistência a um tipo de dano ou condição, pela duração. Dano: Psíquico. Condição: Cego, surdo, atordoado, incapacitado, lento, berserk, medo, concussão, confuso, enlouquecido, deslumbrado. Pode ser obtido várias vezes, escolhendo um tipo diferente a cada vez.",
  },
  {
    key: "blindagem",
    nome: "Blindagem",
    categoria: "defensivo",
    custoSlots: 1,
    requisitos: ["Duradoura", "Tátil"],
    descricao: "Concede pontos de vida temporários ao alvo.",
    dadosPorRank: {
      D: ["3d4", "2d6", "1d8"],
      C: ["4d4", "3d6", "2d8", "1d10"],
      B: ["5d4", "4d6", "3d8", "2d10", "1d12"],
      A: ["6d4", "5d6", "4d8", "3d10", "2d12"],
      S: ["7d4", "6d6", "5d8", "4d10", "3d12"],
    },
  },

  // ── Ao Controle ───────────────────────────────────────────────────
  {
    key: "cega",
    nome: "Cega",
    categoria: "controle",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["Visual"],
    descricao:
      "Chance de infligir Cego pela duração. Teste de Inteligência, Sabedoria ou Carisma (escolha na criação) contra a CD do jutsu.",
  },
  {
    key: "berserker",
    nome: "Berserker",
    categoria: "controle",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["Visual, Auditivo ou Inalado"],
    descricao:
      "Chance de infligir Berserk pela duração. Teste de Inteligência, Sabedoria ou Carisma (escolha na criação) contra a CD do jutsu.",
  },
  {
    key: "encantador",
    nome: "Encantador",
    categoria: "controle",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["Visual, Auditivo ou Inalado"],
    descricao:
      "Chance de infligir Encantado pela duração. Teste de Inteligência, Sabedoria ou Carisma (escolha na criação) contra a CD do jutsu.",
  },
  {
    key: "concussivo",
    // NOTE: este efeito aparece impresso duas vezes no livro (p.138, exigindo Visual/Auditivo/
    // Inalado; p.140, exigindo "qualquer palavra-chave sensorial") com texto quase idêntico —
    // mantida a versão mais permissiva.
    nome: "Concussivo",
    categoria: "controle",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["qualquer palavra-chave sensorial"],
    descricao:
      "Chance de infligir Concussão pela duração. Teste de Inteligência, Sabedoria ou Carisma (escolha na criação) contra a CD do jutsu.",
  },
  {
    key: "condicional-restrito",
    nome: "Condicional (exige alvo já afetado)",
    categoria: "controle",
    custoSlots: 1,
    descricao:
      "O jutsu só pode ser lançado visando uma única criatura que já sofra de uma condição selecionada da lista (Berserk, cego, enfeitiçado, contundido, confuso, deslumbrado, ensurdecido, assustado, incapacitado, paralisado, envenenado, retardado ou enlouquecido) — mirar uma criatura sem essa condição a torna imune aos efeitos. Selecione dois efeitos de Controle adicionais, sem custo de slot adicional; ambos devem ser diferentes entre si e de qualquer efeito já no jutsu.",
  },
  {
    key: "ensurdecedor",
    nome: "Ensurdecedor",
    categoria: "controle",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["Auditiva"],
    descricao:
      "Chance de infligir Surdo pela duração. Teste de Inteligência, Sabedoria ou Carisma (escolha na criação) contra a CD do jutsu.",
  },
  {
    key: "impedimento",
    nome: "Impedimento",
    categoria: "controle",
    custoSlots: 1,
    requisitos: ["Tátil"],
    maxRepeticoes: 4,
    descricao:
      "Modifica negativamente o acaso dos alvos. Na criação, selecione Jogadas de Ataque, Testes de Resistência, Testes de Habilidade ou Testes de Perícia (com sub-escolha de tipo de ataque ou valor de habilidade). Ataque: penaliza em 1d4 (d6 no Rank B, d8 no Rank S). Resistência: penaliza em -1 (-3 no B, -5 no S). Habilidade/Perícia: penaliza em 1d4 (d6 no B, d8 no S). Pode ser adicionado várias vezes: 2ª vez escolhe afetar todos de uma categoria; 3ª vez escolhe outra estatística; 4ª vez impede refazer o teste de resistência.",
  },
  {
    key: "impedimento-fortalecido",
    nome: "Impedimento Fortalecido",
    categoria: "controle",
    custoSlots: 1,
    requisitos: ["Impedimento"],
    descricao:
      "O jutsu pode atrapalhar outras estatísticas do alvo. Na criação, selecione: Valor de Habilidade (penalidade igual ao rank: D -1, C -2, B -3, A -4, S -5), Classe de Armadura (mesma escala), Velocidade (D -3m, C -6m, B -9m, A -12m, S -15m) ou Dano (mesma escala de -1 a -5 dados).",
  },
  {
    key: "assustador",
    nome: "Assustador",
    categoria: "controle",
    custoSlots: 1,
    efeitoCondicional: true,
    descricao:
      "Chance de infligir 1 grau de Medo pela duração. Teste de Inteligência, Sabedoria ou Carisma (escolha na criação) contra a CD do jutsu.",
  },
  {
    key: "restricao",
    nome: "Restrição",
    categoria: "controle",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["qualquer palavra-chave sensorial"],
    descricao:
      "Chance de infligir Restrito pela duração. Teste de Inteligência, Sabedoria ou Carisma (escolha na criação) contra a CD do jutsu.",
  },
  {
    key: "selamento",
    nome: "Selamento",
    categoria: "controle",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["Fuinjutsu", "Toque", "Selos de Chakra (SC)", "Duradoura"],
    maxRepeticoes: 3,
    descricao:
      "Sela as memórias ou pensamentos de uma criatura. Teste de Carisma; falha marca o alvo com um selo (escolha na criação): Selo de Memória (esquece de lançar um número de jutsus igual ao rank: D/C 1, B/A 2, S 3), Selo do Pensamento (não mantém concentração em jutsus, mesma escala) ou Selo Emocional (não pode atingir uma criatura escolhida com nenhum jutsu). Pode ser tomada até 3 vezes, cada vez selecionando um efeito adicional.",
  },
  {
    key: "efeito-terciario",
    nome: "Efeito Terciário",
    categoria: "controle",
    custoSlots: 1,
    requisitos: ["dois Efeitos Condicionais já no jutsu"],
    maxRepeticoes: 4,
    descricao:
      "Adiciona um Efeito Condicional adicional ao jutsu (sem custo de slot adicional). Só pode ser selecionado se já houver dois Efeitos Condicionais. O jutsu não pode exigir mais de 1 teste de resistência. Pode ser selecionado mais vezes, cada vez adicionando outro Efeito Condicional.",
  },
  {
    key: "lentidao",
    nome: "Lentidão",
    categoria: "controle",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["qualquer palavra-chave sensorial"],
    descricao:
      "Chance de infligir 1 nível de Lentidão pela duração. Teste de Inteligência, Sabedoria ou Carisma (escolha na criação) contra a CD do jutsu.",
  },
  {
    key: "enfraquecimento",
    nome: "Enfraquecimento",
    categoria: "controle",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["qualquer palavra-chave sensorial"],
    descricao:
      "Chance de infligir 1 grau de Enfraquecido pela duração. Teste de Inteligência, Sabedoria ou Carisma (escolha na criação) contra a CD do jutsu.",
  },
  {
    key: "enlouquecedor",
    nome: "Enlouquecedor",
    categoria: "controle",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["qualquer palavra-chave sensorial"],
    descricao:
      "Chance de infligir Enlouquecido pela duração. Teste de Inteligência, Sabedoria ou Carisma (escolha na criação) contra a CD do jutsu.",
  },
  {
    key: "confuso",
    nome: "Confuso",
    categoria: "controle",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["qualquer palavra-chave sensorial"],
    descricao:
      "Chance de infligir 1 nível de Confusão pela duração. Teste de Inteligência, Sabedoria ou Carisma (escolha na criação) contra a CD do jutsu.",
  },
  {
    key: "controle-da-mente",
    nome: "Controle da Mente",
    categoria: "controle",
    custoSlots: 1,
    requisitos: ["Visual, Auditivo ou Inalado", "Rank B ou superior"],
    descricao:
      "Chance de encantar uma criatura e controlar seus pensamentos ou ações. Teste de Inteligência, Sabedoria ou Carisma (escolha na criação, fixo). Falha: o alvo é dominado de uma forma à sua descrição pela duração (escolha na criação): Glamour (age de forma à sua escolha, não diretamente prejudicial, gastando a ação do alvo; o jutsu termina), Substituir (10 minutos de memória substituída, alterada permanentemente após 24h) ou Desativar (o alvo fica incapaz de usar uma Ação ou Reação Bônus para uma tarefa específica).",
  },
  {
    key: "deslocamento",
    nome: "Deslocamento",
    categoria: "controle",
    custoSlots: 1,
    requisitos: ["Visual"],
    descricao:
      "Chance de deslocar mentalmente uma criatura, fazendo-a acreditar que é alguém que não é. Teste de Inteligência, Sabedoria ou Carisma (escolha na criação, fixo). Falha: você escolhe quem o alvo acredita ser pela duração.",
  },

  // ── Suporte ───────────────────────────────────────────────────────
  {
    key: "aumento-suporte",
    nome: "Aumento (aprimora ataques do alvo)",
    categoria: "suporte",
    custoSlots: 1,
    requisitos: ["Moldagem de Chakra", "Alcance Próprio ou Toque", "Duradouro"],
    maxRepeticoes: 3,
    descricao:
      "Modifica os ataques do alvo. Escolha um tipo (Armas, Ninjutsu, Taijutsu ou Genjutsu) e um aspecto (Rolagem de Ataque ou Rolagem de Dano). Ataque: +1d4 na rolagem pela duração (d6 se Rank B+). Dano: some o efeito Dano ao jutsu (sem custo de slot adicional) com um dado bônus (D: 2d4/1d6; C: 2d6/1d10; B: 2d8/1d12; A: 3d6/2d10; S: 3d8/2d12). Pode ser selecionado até 3 vezes, sem repetir a mesma combinação de tipo+aprimoramento.",
  },
];
