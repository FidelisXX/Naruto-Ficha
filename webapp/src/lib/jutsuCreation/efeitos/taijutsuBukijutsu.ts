import type { JutsuEffectDefinition } from "@/lib/jutsuCreation/types";

/**
 * Catálogo de efeitos de Taijutsu/Bukijutsu (Passo 3) — Manual Shinobi
 * p.144-150. As duas técnicas compartilham a mesma seção de regras do
 * livro; a única diferença de disponibilidade de efeito é "Corroído"
 * (exige especificamente Bukijutsu).
 */
export const TAIJUTSU_BUKIJUTSU_EFFECTS: JutsuEffectDefinition[] = [
  // ── Genéricos ──────────────────────────────────────────────────────
  {
    key: "area",
    nome: "Área",
    categoria: "generico",
    custoSlots: 1,
    descricao:
      "Seu Jutsu ganha uma área de efeito: esfera de 3m de raio, cone de 6m, cubo de 4,5m, cilindro de 6m ou linha de 9m. As criaturas fazem um teste de Força, Destreza ou Constituição (escolha) contra sua CD de Taijutsu; se o jutsu exigir outro teste para uma Condição adicional, este teste substitui os demais. Reduza o dado de dano em 1 (mínimo 1). Sucesso = metade do dano e nenhum efeito condicional. Se adicionado a um jutsu Rank C ou superior, aumente a forma em 1,5m para cada rank acima de D. Se adicionado a um Bukijutsu com Alcance da Arma, o alcance aplicado a este efeito deve ser o alcance da arma.",
  },
  {
    key: "choque",
    nome: "Choque",
    categoria: "generico",
    custoSlots: 1,
    descricao: "Seu Jutsu ganha a palavra-chave Conflito.",
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
      "O tempo de conjuração vira uma Ação Bônus. Se o jutsu causa dano ou cura, reduza o dado de dano/cura em 1. Pode ser adicionado uma segunda vez, mudando o tempo de conjuração para Reação, se reduzir o dado de dano em mais 1.",
  },
  {
    key: "aumento-escala",
    nome: "Aumento (escala com o rank de conjuração)",
    categoria: "generico",
    custoSlots: 1,
    descricao:
      "O jutsu pode ser conjurado em um rank acima do de criação, aumentando um dos efeitos atuais por rank elevado. Escolha um: se Dano/Proteção/Cura, aumente em 2 dados por rank; se Efeito Condicional, aumente o número de graduações da condição escolhida em +1 por rank.",
  },

  // ── Ofensiva ──────────────────────────────────────────────────────
  {
    key: "sangramento",
    nome: "Sangramento",
    categoria: "ofensivo",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["Dano com tipo Cortante, Perfurante ou Vento"],
    descricao:
      "Chance de infligir Sangramento. Teste de Destreza (ou Constituição, escolha na criação) contra a CD de Taijutsu ou sofre 1 graduação de Sangramento. Reduza o dado de dano em 1 (mais 1 por rank acima de D). Se Rank C+, falha concede 2 graduações (3 no B, 4 no A, 5 no S).",
  },
  {
    key: "queimado",
    nome: "Queimado",
    categoria: "ofensivo",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["Estilo Fogo"],
    descricao:
      "Chance de infligir Queimado. Só pode ser selecionado se o jutsu tiver Estilo Fogo. Teste de Constituição contra a CD de Taijutsu ou sofre Queimado. Reduza o dado de dano em 1 (mais 1 por rank acima de D). Se Rank B+, falha concede 2 graduações (3 no S).",
  },
  {
    key: "hematomas",
    nome: "Hematomas",
    categoria: "ofensivo",
    custoSlots: 1,
    efeitoCondicional: true,
    descricao:
      "Chance de infligir Machucado. Teste de Força ou Constituição contra a CD de Taijutsu ou sofre a condição. Reduza o dado de dano em 1 (mais 1 por rank acima de D). Se Rank B+, falha concede 2 graduações (3 no S).",
  },
  {
    key: "refrigerado",
    nome: "Refrigerado",
    categoria: "ofensivo",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["Estilo Água"],
    descricao:
      "Chance de infligir Resfriado. Só pode ser selecionado se o jutsu tiver Estilo Água. Teste de Constituição contra a CD de Taijutsu ou sofre a condição. Reduza o dado de dano em 1 (mais 1 por rank acima de D). Se Rank B+, falha concede 2 graduações (3 no S).",
  },
  {
    key: "corroido",
    nome: "Corroído",
    categoria: "ofensivo",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["Bukijutsu", "Médico", "Dano Ácido"],
    descricao:
      "Chance de infligir Corroído. Só disponível para Bukijutsu com a palavra-chave Médico e dano de ácido. Teste de Constituição contra a CD de Taijutsu ou sofre a condição.",
  },
  {
    key: "critico",
    nome: "Crítico",
    categoria: "ofensivo",
    custoSlots: 1,
    maxRepeticoes: 5,
    descricao:
      "Aumenta a faixa de ameaça crítica deste jutsu em +1. Pode ser adicionado novamente, aumentando +1 adicional a cada vez.",
  },
  {
    key: "dano",
    nome: "Dano",
    categoria: "ofensivo",
    custoSlots: 1,
    descricao:
      "O jutsu causa dano. Se tiver Natureza de Chakra, causa automaticamente o tipo correspondente; se tiver Médico, pode causar Ácido/Necrótico/Veneno. Sem nenhuma dessas, escolha entre Concussão, Cortante, Perfuração ou Força.",
    dadosPorRank: {
      D: ["4d4", "3d6", "2d8", "1d10"],
      C: ["5d4", "4d6", "3d8", "2d10", "1d12"],
      B: ["8d4", "5d6", "4d8", "3d10", "2d12"],
      A: ["10d4", "8d6", "6d8", "4d10", "2d12"],
      S: ["15d4", "10d6", "8d8", "6d10", "5d12"],
    },
  },
  {
    key: "dano-de-chakra",
    nome: "Dano de Chakra",
    categoria: "ofensivo",
    custoSlots: 1,
    requisitos: ["Taijutsu", "Toque", "Moldagem de Chakra", "Dano"],
    descricao:
      "Em vez de causar dano aos pontos de vida, o jutsu causa dano aos pontos de chakra da criatura. Reduza o dado de dano em 2 (mais 2 por rank acima de D, mínimo 1).",
  },
  {
    key: "dano-fortalecido",
    nome: "Dano Fortalecido",
    categoria: "ofensivo",
    custoSlots: 1,
    requisitos: ["Dano"],
    maxRepeticoes: 2,
    descricao: "Aumenta seu dado de dano em 1. Pode ser obtido 1 vez a mais após a primeira.",
  },
  {
    key: "enfraquecimento",
    nome: "Enfraquecimento",
    categoria: "ofensivo",
    custoSlots: 1,
    efeitoCondicional: true,
    descricao:
      "Chance de infligir Enfraquecido. Teste de Constituição contra a CD do jutsu ou sofre a condição. Reduza o dado de dano em 1 por rank acima de D na criação.",
  },
  {
    key: "chocante",
    nome: "Chocante",
    categoria: "ofensivo",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["Afinidade com o relâmpago (Estilo Relâmpago)"],
    descricao:
      "Chance de infligir Chocado. Só pode ser selecionado se o jutsu tiver afinidade com o relâmpago. Reduza o dado de dano em 1 por rank acima de D na criação. Se Rank B+, falha concede 2 graduações (3 no S).",
  },
  {
    key: "ataques-multiplos",
    nome: "Ataques Múltiplos",
    categoria: "ofensivo",
    custoSlots: 1,
    requisitos: ["Dano"],
    maxRepeticoes: 2,
    descricao:
      "Concede mais de uma Rolagem de Ataque. Aumenta o número de ataques em até +1, dividindo os dados de dano igualmente. Pode ser obtido mais uma vez — a segunda vez não custa um slot adicional.",
  },
  {
    key: "desarmado-armado",
    nome: "Desarmado/Armado",
    categoria: "ofensivo",
    custoSlots: 0,
    requisitos: ["Dano ou Blindagem"],
    descricao:
      "Especial: não custa um slot. Reduza seu dado de dano/escudo em 1 (mais 1 no Rank B, mais 1 no Rank S; mínimo 1 — não pode ser aplicado a uma parada de dados com apenas 1 dado). Se Taijutsu, adiciona seu dano desarmado à rolagem; os dados restantes do efeito de Dano se tornam dano adicional. Se Bukijutsu, adiciona o dano da arma à rolagem da mesma forma. Você decide, ao criar o jutsu, se o dano-base sempre usa esse tipo ou se pode igualar aos demais tipos escolhidos.",
  },
  {
    key: "inevitavel",
    nome: "Inevitável",
    categoria: "ofensivo",
    custoSlots: 1,
    descricao:
      "Em vez de exigir teste de resistência, o jutsu sempre inflige, em um acerto bem-sucedido, 1 graduação de uma condição que já possua entre Sangrando, Machucado, Atordoado ou Enfraquecido (escolha um). Reduza o dado de dano em 1 (mais 1 por rank acima de D na criação).",
  },

  // ── Defensiva ─────────────────────────────────────────────────────
  {
    key: "blindagem-fortalecida",
    nome: "Blindagem Fortalecida",
    categoria: "defensivo",
    custoSlots: 1,
    requisitos: ["Blindagem (Escudo)"],
    maxRepeticoes: 4,
    descricao: "Aumenta seu dado de proteção em 1. Pode ser obtido até 3 vezes adicionais após a primeira.",
  },
  {
    key: "blindagem",
    nome: "Blindagem",
    categoria: "defensivo",
    custoSlots: 1,
    requisitos: ["Alcance Próprio", "Duradouro"],
    descricao: "Concede pontos de vida temporários a você.",
    dadosPorRank: {
      D: ["2d4", "1d6"],
      C: ["3d4", "2d6", "1d8"],
      B: ["4d4", "3d6", "2d8", "1d10"],
      A: ["5d4", "4d6", "3d8", "2d10", "1d12"],
      S: ["8d4", "7d6", "6d8", "5d10", "3d12"],
    },
  },

  // ── Ao Controle ───────────────────────────────────────────────────
  {
    key: "cega",
    nome: "Cega",
    categoria: "controle",
    custoSlots: 1,
    efeitoCondicional: true,
    descricao:
      "Chance de infligir Cego. Teste de Constituição (ou Sabedoria, escolha na criação) contra a CD de Taijutsu ou sofre a condição.",
  },
  {
    key: "deslumbrante",
    nome: "Deslumbrante",
    categoria: "controle",
    custoSlots: 1,
    efeitoCondicional: true,
    descricao:
      "Chance de infligir Atordoado. Teste de Constituição (ou Sabedoria, escolha na criação) contra a CD de Taijutsu ou sofre a condição.",
  },
  {
    key: "ensurdecedor",
    nome: "Ensurdecedor",
    categoria: "controle",
    custoSlots: 1,
    efeitoCondicional: true,
    descricao:
      "Chance de infligir Surdo. Teste de Constituição (ou Sabedoria, escolha na criação) contra a CD de Taijutsu.",
  },
  {
    key: "derrubar",
    nome: "Derrubar",
    categoria: "controle",
    custoSlots: 1,
    descricao:
      "Chance de derrubar e empurrar uma criatura 4,5 metros. Teste de Força contra a CD de Taijutsu. Se Rank C+, empurra +3m adicionais por rank acima de D.",
  },
  {
    key: "envenenamento",
    nome: "Envenenamento",
    categoria: "controle",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["Médico"],
    descricao: "Chance de infligir Envenenado. Teste de Constituição contra a CD do jutsu ou sofre a condição.",
  },
  {
    key: "restricao",
    nome: "Restrição",
    categoria: "controle",
    custoSlots: 1,
    efeitoCondicional: true,
    descricao:
      "Chance de infligir Restrito. Teste de Força, Destreza ou Constituição (escolha) contra a CD do jutsu ou sofre a condição.",
  },
  {
    key: "efeito-secundario",
    nome: "Efeito Secundário",
    categoria: "controle",
    custoSlots: 1,
    requisitos: ["outro Efeito Condicional já no jutsu"],
    maxRepeticoes: 4,
    descricao:
      "Adiciona um Efeito Condicional adicional ao jutsu (sem custo de slot adicional). Só pode ser selecionado se já houver outro Efeito Condicional. O jutsu não pode exigir mais de 1 teste de resistência. Pode ser selecionado mais vezes, cada vez adicionando outro Efeito Condicional.",
  },

  // ── Suporte ───────────────────────────────────────────────────────
  {
    key: "aumento-suporte",
    nome: "Aumento (aprimora ataques do alvo)",
    categoria: "suporte",
    custoSlots: 1,
    requisitos: ["Moldagem de Chakra", "Alcance Próprio", "Duradoura"],
    maxRepeticoes: 3,
    descricao:
      "Modifica os ataques do alvo. Escolha um tipo (Armas ou Taijutsu) e um aspecto (Rolagem de Ataque ou Rolagem de Dano). Ataque: +1d4 na rolagem pela duração (d6 se Rank B+). Dano: some o efeito Dano ao jutsu (sem custo de slot adicional) com um dado bônus (D: 2d4/1d6; C: 2d6/1d10; B: 2d8/1d12; A: 3d6/2d10; S: 3d8/2d12). Pode ser selecionado até 3 vezes, sem repetir a mesma combinação de tipo+aprimoramento.",
  },
  {
    key: "impulso",
    nome: "Impulso",
    categoria: "suporte",
    custoSlots: 1,
    requisitos: ["Alcance Próprio ou Toque", "Moldagem de Chakra"],
    maxRepeticoes: 3,
    descricao:
      "Modifica positivamente o acaso dos alvos. Na criação, selecione Testes de Resistência, Testes de Habilidade ou Testes de Perícia (com sub-escolha de valor de habilidade). Resistência: +1 na jogada pela duração (+2 no Rank B, +3 no Rank S). Habilidade/Perícia: +1d4 no teste (d6 no B, d8 no S). Pode ser adicionado várias vezes: 2ª vez escolhe afetar todos de uma categoria; 3ª vez escolhe outra estatística.",
  },
  {
    key: "reforco-fortalecido",
    nome: "Reforço Fortalecido",
    categoria: "suporte",
    custoSlots: 1,
    requisitos: ["Impulso"],
    descricao:
      "Aumenta outras estatísticas do alvo. Na criação, selecione: Valor de Habilidade (D +1, C +2, B +3, A +4, S +5), Classe de Armadura (D/C +1, B/A +3, S +5) ou Velocidade (D +3m, C +6m, B +9m, A +12m, S +15m).",
  },
];
