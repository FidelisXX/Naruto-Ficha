import type { JutsuCreationFamily, NaturezaMecanica, PrerequisiteKeyword } from "@/lib/jutsuCreation/types";

/**
 * Palavras-chave de pré-requisito (Passo 2) — Manual Shinobi p.126 (Ninjutsu),
 * p.133 (Genjutsu), p.142 (Taijutsu/Bukijutsu). O texto e os bônus de slot são
 * idênticos nas 3 seções; só o nome do "tipo" citado no texto muda.
 */
function buildPrerequisites(tipoLabel: string): PrerequisiteKeyword[] {
  return [
    {
      key: "hijutsu",
      nome: "Hijutsu",
      slotBonus: 0,
      descricao: `Seu ${tipoLabel} ganha a palavra-chave Hijutsu e conta como sendo um Jutsu do Clã para você. Você não pode selecionar esta palavra-chave se não for do clã.`,
    },
    {
      key: "medico",
      nome: "Médico",
      slotBonus: 0,
      descricao: `Seu ${tipoLabel} ganhará a palavra-chave Médico.`,
    },
    {
      key: "fuinjutsu",
      nome: "Fuinjutsu",
      slotBonus: 0,
      descricao: `Seu ${tipoLabel} ganhará a palavra-chave Fuinjutsu.`,
    },
    {
      key: "natureza-de-chakra",
      nome: "Natureza de Chakra (Liberação da Natureza)",
      slotBonus: 0,
      descricao: `Seu ${tipoLabel} ganhará uma ou mais palavras-chave de Natureza de Chakra.`,
    },
    {
      key: "recurso-necessario-curto",
      nome: "Recurso Necessário (descanso curto)",
      slotBonus: 1,
      indisponivelRankE: true,
      descricao:
        "Você deve ser capaz de se beneficiar de um recurso de Clã ou Classe com usos limitados que recarrega em um descanso curto para usar este jutsu. O recurso escolhido deve exigir ativação do jogador (não pode ser algo passivo). Quando este jutsu é lançado, o uso do recurso também é gasto como parte do custo de lançamento — você não ganha os benefícios de conjurar tal recurso.",
    },
    {
      key: "recurso-necessario-longo",
      nome: "Recurso Necessário (descanso longo)",
      slotBonus: 2,
      indisponivelRankE: true,
      descricao:
        "Mesma regra do Recurso Necessário (descanso curto), mas usando um recurso de Clã ou Classe que recarrega em um descanso longo.",
    },
  ];
}

export const PREREQUISITES_BY_FAMILY: Record<JutsuCreationFamily, PrerequisiteKeyword[]> = {
  ninjutsu: buildPrerequisites("Ninjutsu"),
  genjutsu: buildPrerequisites("Genjutsu"),
  taijutsuBukijutsu: buildPrerequisites("Taijutsu/Bukijutsu"),
};

/**
 * Mecânicas especiais por Natureza de Chakra — só descritas para Ninjutsu
 * no livro (p.126); Genjutsu/Taijutsu só ganham a palavra-chave, sem
 * mecânica adicional própria.
 */
export const NINJUTSU_NATUREZA_MECANICAS: NaturezaMecanica[] = [
  {
    key: "terra",
    nome: "Estilo Terra: Robusto",
    descricao:
      "Se o seu jutsu convocar uma construção ou tiver qualquer efeito que conceda resistência ou imunidade ao alvo, ele ganha esse efeito contra dano de frio e um tipo de dano adicional à sua escolha, excluindo Psíquico e Relâmpago.",
  },
  {
    key: "vento",
    nome: "Estilo Vento: Redemoinho",
    descricao:
      "Criaturas que falhariam em seu teste de resistência espalham todas as condições Elementais que os afetam atualmente para todas as criaturas, excluindo o lançador, a até 1,5 metro delas. Criaturas hostis a até 1,5 metro do que falhou ganham 1 graduação de todas as condições elementares que o afetam atualmente.",
  },
  {
    key: "fogo",
    nome: "Estilo Fogo: Chama",
    descricao: "Para cada dado de dano de fogo que este jutsu causa, ele ganha +1 de dano de fogo.",
  },
  {
    key: "agua",
    nome: "Estilo Água: Serenidade",
    descricao: "Se usado perto de uma fonte de água suficiente, reduz o custo de chakra deste jutsu em 2.",
  },
  {
    key: "relampago",
    nome: "Estilo Relâmpago: Sobrecarga",
    descricao:
      "Quando você lançar este jutsu, como uma ação ou reação bônus, você pode sobrecarregar seus efeitos: se este jutsu infligir uma condição, aumente o número de graduações que ele aplica em +1; se este jutsu causar dano, aumente o dano em +2 dados de dano.",
  },
];
