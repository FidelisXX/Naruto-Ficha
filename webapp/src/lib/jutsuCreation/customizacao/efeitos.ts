import type { EffectCustomizationRule } from "@/lib/jutsuCreation/customizacao/types";

/**
 * Passo 4 — Modificando danos e efeitos (Manual Shinobi p.153-155). Lista
 * curada de palavras-chave de efeito com custo fixo de chakra/TdI — menor
 * que o catálogo completo do Assistente de Criação (Fase 5.1); o livro só
 * tabela preços para este subconjunto ao personalizar um jutsu já pronto.
 */
export const EFFECT_CUSTOMIZATION_RULES: EffectCustomizationRule[] = [
  {
    key: "area",
    nome: "Área",
    custoChakraAdicionar: 3,
    tdiSemanas: 3,
    descricao:
      "Ganha uma área de efeito (esfera de 3m, cone de 4,5m, cubo de 9m, cilindro de 6m ou linha de 9m). Teste de Destreza contra a CD do jutsu; sucesso = metade do dano e nenhum efeito condicional. Pode ser adicionada várias vezes, cada vez aumentando o raio em 4,5 metros.",
  },
  {
    key: "sangramento",
    nome: "Sangramento",
    efeitoCondicional: true,
    custoChakraAdicionar: 2,
    tdiSemanas: 2,
    descricao: "Chance de infligir Sangramento. Só disponível se o jutsu tiver dano Cortante, Perfurante ou Vento.",
  },
  {
    key: "queimado",
    nome: "Queimado",
    efeitoCondicional: true,
    custoChakraAdicionar: 2,
    tdiSemanas: 2,
    descricao: "Chance de infligir Queimado. Só disponível se o jutsu tiver Estilo Fogo.",
  },
  {
    key: "refrigerado",
    nome: "Refrigerado",
    efeitoCondicional: true,
    custoChakraAdicionar: 2,
    tdiSemanas: 2,
    descricao: "Chance de infligir Resfriado. Só disponível se o jutsu tiver Estilo Água.",
  },
  {
    key: "corroido",
    nome: "Corroído",
    efeitoCondicional: true,
    custoChakraAdicionar: 2,
    tdiSemanas: 2,
    descricao: "Chance de infligir Corroído. Só disponível se o jutsu causar dano ácido e tiver a palavra-chave Médico.",
  },
  {
    key: "dano-cura",
    nome: "Dano/Cura",
    custoChakraAdicionar: 2,
    custoChakraRemover: -1,
    tdiSemanas: 2,
    descricao: "Ajusta em 1 o número de dados de dano ou cura do jutsu (+2 chakra para aumentar, -1 para reduzir).",
  },
  {
    key: "dano-cura-fortalecidos",
    nome: "Dano/Cura Fortalecidos",
    custoChakraAdicionar: 3,
    custoChakraRemover: -2,
    tdiSemanas: 2,
    descricao: "Ajusta o tamanho do dado de dano/cura em 1 passo (d4>d6>d8>d10>d12).",
  },
  {
    key: "blindagem-fortalecida",
    nome: "Blindagem Fortalecida",
    custoChakraAdicionar: 2,
    tdiSemanas: 2,
    descricao: "Aumenta o dado de proteção em 1 (até d12). Só pode ser usada se o jutsu já tiver Blindagem ou conceder pontos de vida temporários.",
  },
  {
    key: "aprimorando",
    nome: "Aprimorando",
    custoChakraAdicionar: 3,
    tdiSemanas: 3,
    descricao: "Aumenta um valor de Habilidade escolhido em +1 enquanto concentrado no jutsu. Pode ser usada até 5 vezes.",
  },
  {
    key: "envenenado",
    nome: "Envenenado",
    efeitoCondicional: true,
    custoChakraAdicionar: 2,
    tdiSemanas: 2,
    descricao: "Chance de infligir Envenenado. Só disponível se o jutsu tiver a palavra-chave Médico.",
  },
  {
    key: "ataques-multiplos",
    nome: "Ataques Múltiplos",
    custoChakraAdicionar: 2,
    custoChakraRemover: -2,
    tdiSemanas: 2,
    descricao: "Adiciona ou remove 1 jogada de ataque do jutsu (o mesmo dano de cada ataque anterior é rolado novamente).",
  },
  {
    key: "blindagem",
    nome: "Blindagem",
    custoChakraAdicionar: 3,
    tdiSemanas: 3,
    descricao:
      "Concede até 3d4 de pontos de vida temporários (não acumulam com outra fonte de PV temporário). Pode ser tomada várias vezes, aumentando em 2d4 até um máximo de 20d4.",
  },
  {
    key: "chocante",
    nome: "Chocante",
    efeitoCondicional: true,
    custoChakraAdicionar: 2,
    tdiSemanas: 2,
    descricao: "Chance de infligir Chocado. Só disponível se o jutsu tiver afinidade com o relâmpago.",
  },
  {
    key: "lentidao",
    nome: "Lentidão",
    efeitoCondicional: true,
    custoChakraAdicionar: 2,
    tdiSemanas: 2,
    descricao: "Chance de infligir Lentidão. Teste de Força ou Constituição (escolha fixa) contra a CD do jutsu.",
  },
  {
    key: "veloz",
    nome: "Veloz",
    custoChakraAdicionar: 3,
    tdiSemanas: 3,
    descricao:
      "Reduz o tempo de conjuração de Ação para Ação Bônus, reduzindo o dado de dano em 1. Pode ser tomada uma segunda vez, reduzindo para Reação (com mais -1 no dado de dano).",
  },
  {
    key: "atordoado",
    nome: "Atordoado",
    efeitoCondicional: true,
    custoChakraAdicionar: 7,
    tdiSemanas: 3,
    descricao: "Chance de infligir Atordoado. Teste de Constituição contra a CD do jutsu.",
  },
  {
    key: "inevitavel",
    nome: "Inevitável",
    custoChakraAdicionar: 3,
    tdiSemanas: 3,
    descricao:
      "O jutsu não exige jogada de ataque — a criatura alvo faz um teste de resistência (escolha na modificação: Ninjutsu = Força/Destreza/Constituição/Sabedoria; Genjutsu = Inteligência/Sabedoria/Carisma; Taijutsu = Força/Destreza/Constituição) contra a CD do jutsu.",
  },
  {
    key: "enfraquecimento",
    nome: "Enfraquecimento",
    efeitoCondicional: true,
    custoChakraAdicionar: 3,
    tdiSemanas: 3,
    descricao: "Chance de infligir Enfraquecido. Teste de Constituição contra a CD do jutsu.",
  },
  {
    key: "poderoso",
    nome: "Poderoso",
    custoChakraAdicionar: 3,
    tdiSemanas: 3,
    descricao:
      "Ao rolar dano, pontos de vida temporários ou outro efeito vinculado às palavras-chave necessárias, adiciona o Modificador de Habilidade do jutsu à rolagem.",
  },
];
