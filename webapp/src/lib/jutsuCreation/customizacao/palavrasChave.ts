import type { CustomizationCostRule } from "@/lib/jutsuCreation/customizacao/types";

/** Passo 2 — Modificando as palavras-chave principais (Manual Shinobi p.152). */
export const KEYWORD_CUSTOMIZATION_RULES: CustomizationCostRule[] = [
  {
    key: "medico",
    nome: "Médico",
    custoRemover: -1,
    custoAdicionar: 1,
    tdiSemanas: 1,
    nota: "Se adicionado (ou já presente), você pode escolher causar dano Venenoso, Ácido ou Necrótico, como se estivesse adicionando um novo tipo de dano de Liberação de Natureza.",
  },
  { key: "fuinjutsu", nome: "Fuinjutsu", custoRemover: -1, custoAdicionar: 1, tdiSemanas: 1 },
  {
    key: "estilo-terra",
    nome: "Estilo Terra",
    custoRemover: null,
    custoAdicionar: 2,
    tdiSemanas: 3,
    nota: "Palavras-chave de Liberação de Natureza não podem ser removidas uma vez adicionadas. Cada natureza adicional divide o dano igualmente entre os tipos.",
  },
  { key: "estilo-vento", nome: "Estilo Vento", custoRemover: null, custoAdicionar: 2, tdiSemanas: 3 },
  { key: "estilo-fogo", nome: "Estilo Fogo", custoRemover: null, custoAdicionar: 2, tdiSemanas: 3 },
  { key: "estilo-agua", nome: "Estilo Água", custoRemover: null, custoAdicionar: 2, tdiSemanas: 3 },
  { key: "estilo-relampago", nome: "Estilo Relâmpago", custoRemover: null, custoAdicionar: 2, tdiSemanas: 3 },
  {
    key: "visual",
    nome: "Visual",
    custoRemover: -2,
    custoAdicionar: 2,
    tdiSemanas: 2,
    nota: "Palavra-chave sensorial (só Genjutsu). Se removida, deve ser substituída por outra palavra-chave Sensorial.",
  },
  { key: "auditivo", nome: "Auditivo", custoRemover: -1, custoAdicionar: 1, tdiSemanas: 2, nota: "Palavra-chave sensorial (só Genjutsu) — se removida, substitua por outra." },
  { key: "inalar", nome: "Inalar", custoRemover: -1, custoAdicionar: 1, tdiSemanas: 2, nota: "Palavra-chave sensorial (só Genjutsu) — se removida, substitua por outra." },
  { key: "tatil", nome: "Tátil", custoRemover: -1, custoAdicionar: 1, tdiSemanas: 2, nota: "Palavra-chave sensorial (só Genjutsu) — se removida, substitua por outra." },
  { key: "choque", nome: "Choque", custoRemover: -1, custoAdicionar: 1, tdiSemanas: 2 },
  {
    key: "finalizador",
    nome: "Finalizador",
    custoRemover: null,
    custoAdicionar: 1,
    tdiSemanas: 1,
    nota: "Se o jutsu já tiver a palavra-chave Finalizador, ela não pode ser removida.",
  },
];

/**
 * Restrições de remoção por tipo — texto como impresso no livro (p.152-153).
 * A frase "não pode remover Ninjutsu/Genjutsu ou Fuinjutsu" aparece assim no
 * original; mantida verbatim mesmo parecendo redundante com a linha de
 * Fuinjutsu na tabela acima.
 */
export const KEYWORD_REMOVAL_RESTRICTIONS: Record<"ninjutsu" | "genjutsu" | "taijutsuBukijutsu", string> = {
  ninjutsu: "Você não pode remover a palavra-chave Ninjutsu ou Fuinjutsu.",
  genjutsu: "Você não pode remover a palavra-chave Genjutsu ou Fuinjutsu.",
  taijutsuBukijutsu:
    "Você não pode remover a palavra-chave Taijutsu ou Bukijutsu. Se o jutsu tiver a palavra-chave Finalizador, ela não pode ser removida.",
};
