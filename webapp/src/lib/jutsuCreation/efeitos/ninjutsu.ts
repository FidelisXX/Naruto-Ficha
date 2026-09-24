import type { JutsuEffectDefinition } from "@/lib/jutsuCreation/types";

/**
 * Catálogo de efeitos de Ninjutsu (Passo 3) — Manual Shinobi p.127-132.
 * Os 6 primeiros são "genéricos" (não exigem que uma das 2 categorias
 * escolhidas os cubra); os demais são organizados por categoria conforme o
 * livro (Ofensivo, Defensivo, Ao Controle, Suporte).
 */
export const NINJUTSU_EFFECTS: JutsuEffectDefinition[] = [
  // ── Genéricos ──────────────────────────────────────────────────────
  {
    key: "area",
    nome: "Área",
    categoria: "generico",
    custoSlots: 1,
    descricao:
      "Seu Jutsu ganha uma área de efeito: esfera de 3m de raio, cone de 6m, cubo de 4,5m, cilindro de 6m ou linha de 9m. As criaturas fazem um teste de Força, Destreza ou Constituição (escolha) contra sua CD de Ninjutsu; se o jutsu exigir outro teste para uma Condição adicional, este teste substitui os demais (não vale para efeitos com \"Efeito Secundário\"). Reduza o dado de dano em 1 (mínimo 1). Sucesso = metade do dano e nenhum efeito condicional. Se adicionado a um jutsu Rank C ou superior, aumente a forma em 1,5m para cada rank acima de D.",
  },
  {
    key: "choque",
    nome: "Choque",
    categoria: "generico",
    custoSlots: 1,
    descricao: "Seu Jutsu ganha a palavra-chave Conflito — a habilidade de colidir com outro Jutsu com a palavra-chave Choque.",
  },
  {
    key: "efeito-retardado",
    nome: "Efeito Retardado",
    categoria: "generico",
    custoSlots: 1,
    descricao:
      "Depois de afetar uma criatura, um efeito retardado é ativado na rodada seguinte ao término deste jutsu. Selecione um efeito que o jutsu já tenha (diferente deste); ele é ativado no início do seu próximo turno ou do turno da criatura afetada (escolha ao criar o jutsu).",
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

  // ── Ofensivo ──────────────────────────────────────────────────────
  {
    key: "sangramento",
    nome: "Sangramento",
    categoria: "ofensivo",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["Dano com tipo Cortante, Perfurante ou Vento"],
    descricao:
      "Chance de infligir Sangramento. Só pode ser selecionado se o jutsu tiver dano Cortante, Perfurante ou Vento. As criaturas afetadas fazem um teste de Destreza (ou Constituição, escolha na criação) contra a CD de Ninjutsu; falha = 1 graduação de Sangramento. Reduza o dado de dano em 1 (mais 1 no Rank C, mais 1 no Rank S). Se adicionado a um jutsu Rank C+, falha passa a conceder 2 graduações (3 no B, 4 no A, 5 no S).",
  },
  {
    key: "queimado",
    nome: "Queimado",
    categoria: "ofensivo",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["Estilo Fogo"],
    descricao:
      "Chance de infligir Queimado. Só pode ser selecionado se o jutsu tiver Estilo Fogo. Teste de Constituição contra a CD de Ninjutsu ou sofre Queimado. Reduza o dado de dano em 1 (mais 1 no Rank C, mais 1 no Rank S). Se Rank B+, falha concede 2 graduações (3 no Rank S).",
  },
  {
    key: "hematomas",
    nome: "Hematomas",
    categoria: "ofensivo",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["Afinidade com a terra (Estilo Terra)"],
    descricao:
      "Chance de infligir Machucado. Só pode ser selecionado se o jutsu tiver afinidade com a terra. Reduza o dado de dano em 1 (mais 1 no Rank C, mais 1 no Rank S). Se Rank B+, falha concede 2 graduações (3 no Rank S).",
  },
  {
    key: "corroido",
    nome: "Corroído",
    categoria: "ofensivo",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["Médico", "Dano Ácido"],
    descricao:
      "Chance de infligir Corroído. Só pode ser selecionado se o jutsu causar dano de ácido. Teste de Constituição contra a CD de Ninjutsu ou sofre Corroído. Reduza o dado de dano em 1 (mais 1 no Rank C, mais 1 no Rank S). Se Rank B+, falha concede 2 graduações (3 no Rank S).",
  },
  {
    key: "refrigerado",
    nome: "Refrigerado",
    categoria: "ofensivo",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["Estilo Água"],
    descricao:
      "Chance de infligir Resfriado/Congelado. Só pode ser selecionado se o jutsu tiver Estilo Água. Teste de Constituição contra a CD de Ninjutsu ou sofre a condição. Reduza o dado de dano em 1 (mais 1 no Rank C, mais 1 no Rank S). Se Rank B+, falha concede 2 graduações (3 no Rank S).",
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
      "O jutsu causa dano. Se tiver Natureza de Chakra, causa automaticamente o tipo de dano correspondente; se tiver Médico, pode causar Ácido/Necrótico/Veneno. Sem nenhuma dessas, escolha entre Concussão, Cortante, Perfuração ou Força. O dano se divide igualmente entre tipos, se houver mais de um.",
    dadosPorRank: {
      D: ["5d4", "4d6", "3d8", "2d10"],
      C: ["9d4", "6d6", "5d8", "4d10", "3d12"],
      B: ["8d6", "7d8", "6d10", "5d12"],
      A: ["13d6", "10d8", "8d10", "7d12"],
      S: ["21d6", "16d8", "13d10", "11d12"],
    },
  },
  {
    key: "enfraquecimento",
    nome: "Enfraquecimento",
    categoria: "ofensivo",
    custoSlots: 1,
    efeitoCondicional: true,
    descricao:
      "Chance de infligir Enfraquecido. Teste de Constituição contra a CD de Ninjutsu ou sofre a condição. Reduza o dado de dano em 1 (mais 1 no Rank C, mais 1 no Rank S). Se Rank B+, falha concede 2 graduações (3 no Rank S).",
  },
  {
    key: "chocante",
    nome: "Chocante",
    categoria: "ofensivo",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["Afinidade com o relâmpago (Estilo Relâmpago)"],
    descricao:
      "Chance de infligir Chocado. Só pode ser selecionado se o jutsu tiver afinidade com o relâmpago. Reduza o dado de dano em 1 (mais 1 no Rank C, mais 1 no Rank S). Se Rank B+, falha concede 2 graduações (3 no Rank S).",
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

  // ── Defensivo ─────────────────────────────────────────────────────
  {
    key: "blindagem-fortalecida",
    nome: "Blindagem Fortalecida",
    categoria: "defensivo",
    custoSlots: 1,
    requisitos: ["Blindagem"],
    maxRepeticoes: 4,
    descricao: "Aumenta seu dado de proteção em 1. Pode ser obtido até 3 vezes adicionais após a primeira.",
  },
  {
    key: "reducao-de-danos",
    nome: "Redução de Danos",
    categoria: "defensivo",
    custoSlots: 1,
    descricao:
      "Concede a você ou ao alvo redução de dano contra todas as fontes. Se o jutsu tiver Estilo Terra, aumente o dado escolhido em +1 dado dos listados.",
    dadosPorRank: {
      D: ["2d4", "1d6"],
      C: ["3d4", "2d6", "1d8"],
      B: ["4d4", "3d6", "2d8", "1d10"],
      A: ["5d4", "4d6", "3d8", "2d10", "1d12"],
      S: ["6d4", "5d6", "4d8", "3d10", "2d12"],
    },
  },
  {
    key: "defesa-poderosa",
    nome: "Defesa Poderosa",
    categoria: "defensivo",
    custoSlots: 1,
    requisitos: ["Redução de Danos ou Blindagem"],
    descricao: "Ao rolar dados de redução de dano ou pontos de vida temporários deste jutsu, adicione seu modificador de habilidade Ninjutsu à rolagem.",
  },
  {
    key: "resistencia",
    nome: "Resistência",
    categoria: "defensivo",
    custoSlots: 1,
    maxRepeticoes: 6,
    descricao:
      "Concede a você ou à criatura alvo resistência a um tipo de dano ou condição, pela duração. Selecione Dano (Concussão/Perfurante/Cortante/Terra/Vento/Fogo/Frio/Relâmpago/Ácido/Veneno/Necrótico/Força) ou Condição (Sangrando/Cego/Surdo/Machucado/Atordoado/Incapacitado/Paralisado/Contido/Retardado/Chocado/Queimado/Resfriado/Corroído/Enfraquecido). Pode ser obtido várias vezes, escolhendo um tipo diferente a cada vez.",
  },
  {
    key: "blindagem",
    nome: "Blindagem",
    categoria: "defensivo",
    custoSlots: 1,
    requisitos: ["Duradouro"],
    descricao:
      "Concede pontos de vida temporários ao alvo. Se o jutsu tiver Estilo Terra, aumente o dado escolhido em +1 dado dos listados.",
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
    key: "cego",
    nome: "Cego",
    categoria: "controle",
    custoSlots: 1,
    efeitoCondicional: true,
    descricao:
      "Chance de infligir Cego. Teste de Constituição (ou Sabedoria, escolha na criação) contra a CD de Ninjutsu ou sofre a condição.",
  },
  {
    key: "ensurdecedor",
    nome: "Ensurdecedor",
    categoria: "controle",
    custoSlots: 1,
    efeitoCondicional: true,
    descricao:
      "Chance de infligir Surdo. Teste de Constituição (ou Sabedoria, escolha na criação) contra a CD de Ninjutsu ou sofre a condição.",
  },
  {
    key: "derrubar",
    nome: "Derrubar",
    categoria: "controle",
    custoSlots: 1,
    descricao:
      "Chance de derrubar e empurrar uma criatura 3 metros. Teste de Força contra a CD de Ninjutsu. Se Rank C+, empurra +3m adicionais por rank acima de D. Se o jutsu tiver Estilo Vento, aumente a base em 1,5m (+1,5m por rank acima de D).",
  },
  {
    key: "envenenamento",
    nome: "Envenenamento",
    categoria: "controle",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["Médica"],
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
    key: "selamento",
    nome: "Selamento",
    categoria: "controle",
    custoSlots: 1,
    efeitoCondicional: true,
    requisitos: ["Fuinjutsu", "Selos de Chakra (SC)", "Duradouro"],
    maxRepeticoes: 3,
    descricao:
      "Sela o Chakra ou Jutsu de uma criatura. Teste de Carisma; falha marca o alvo com um selo (escolha na criação): Selo Encadernado (sofre outro Efeito Condicional de Controle, sem custo de slot adicional), Selo Restritivo (não pode lançar um Ninjutsu ou Genjutsu à sua escolha), ou Selo de Fratura (aumenta o custo do jutsu que lança: Rank D +2, C +4, B +8, A +16, S +24). Pode ser tomada até 3 vezes, cada vez selecionando um efeito adicional.",
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
    requisitos: ["Moldagem de Chakra", "Alcance Próprio ou Toque", "Duradouro"],
    maxRepeticoes: 3,
    descricao:
      "Modifica os ataques do alvo. Escolha um tipo (Armas, Ninjutsu, Taijutsu ou Genjutsu) e um aspecto (Rolagem de Ataque ou Rolagem de Dano). Ataque: +1d4 na rolagem pela duração (d6 se Rank B+). Dano: some o efeito Dano ao jutsu (sem custo de slot adicional) com um dado bônus (D: 2d4/1d6; C: 2d6/1d10; B: 2d8/1d12; A: 3d6/2d10; S: 3d8/2d12). Pode ser selecionado até 3 vezes, sem repetir a mesma combinação de tipo+aprimoramento.",
  },
  {
    key: "cura",
    nome: "Cura",
    categoria: "suporte",
    custoSlots: 1,
    requisitos: ["Médica"],
    descricao: "Cura pontos de vida de uma criatura. Não pode ser combinado com o efeito Dano.",
    dadosPorRank: {
      D: ["3d6", "2d8", "1d10"],
      C: ["5d6", "4d8", "3d10", "2d12"],
      B: ["6d6", "5d8", "4d10", "3d12"],
      A: ["7d6", "6d8", "5d10", "4d12"],
      S: ["10d6", "8d8", "7d10", "6d12"],
    },
  },
];
