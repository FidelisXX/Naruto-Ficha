/**
 * Catálogo de Condições — Manual Shinobi, Capítulo 8: Combate, p.179-186.
 *
 * Além das condições "base" (binárias, sem graduação — herdadas quase
 * diretamente do 5e: Incapacitado, Inconsciente, Petrificado, Morrendo,
 * Exaustão), o Manual Shinobi reescreve boa parte das condições em 4
 * categorias temáticas (Elemental/Físico/Mental/Sensorial), a maioria das
 * quais é *graduável*: a condição pode ser aplicada várias vezes,
 * acumulando graduações/níveis que pioram o efeito (limitado a um teto,
 * normalmente 5).
 *
 * A categorização de Concussão e Enfraquecido como "mental" (em vez de
 * "físico") segue a posição delas no texto-fonte, imediatamente antes do
 * cabeçalho "MENTAL" da p.184 — a extração de texto do PDF quebra a coluna
 * visual da página, então o cabeçalho de categoria às vezes aparece depois
 * das 1-2 primeiras entradas da seção; usamos a posição consistente com o
 * padrão observado nas outras 3 categorias para resolver a ambiguidade.
 */

export type ConditionCategory = "base" | "elemental" | "fisico" | "mental" | "sensorial";

export const CONDITION_CATEGORY_LABELS: Record<ConditionCategory, string> = {
  base: "Base",
  elemental: "Elemental",
  fisico: "Físico",
  mental: "Mental",
  sensorial: "Sensorial",
};

export interface ConditionDefinition {
  key: string;
  nome: string;
  categoria: ConditionCategory;
  graduavel: boolean;
  graduacaoMax?: number;
  resumo: string;
  comoRemover?: string;
}

export const CONDITION_CATALOG: ConditionDefinition[] = [
  // ---- BASE ----
  {
    key: "morrendo",
    nome: "Morrendo",
    categoria: "base",
    graduavel: false,
    resumo:
      "Ao cair a 0 PV (sem morte instantânea) você fica inconsciente e faz testes de resistência à morte (d20 ≥ 10 = sucesso) no início de cada turno com 0 PV. 3 sucessos estabiliza, 3 falhas mata. 1 natural conta como 2 falhas; 20 natural recupera 1 PV e remove 2 falhas. Sofrer dano com 0 PV conta como 1 falha (2 se for crítico); dano ≥ PV máximo causa morte instantânea.",
    comoRemover: "Recuperar qualquer PV ou estabilizar (3 sucessos) encerra a condição.",
  },
  {
    key: "incapacitado",
    nome: "Incapacitado",
    categoria: "base",
    graduavel: false,
    resumo: "Não pode realizar ações, ações bônus, reações, nem manter concentração.",
  },
  {
    key: "inconsciente",
    nome: "Inconsciente",
    categoria: "base",
    graduavel: false,
    resumo:
      "Incapacitada, não se move nem fala e não tem consciência do entorno; derruba tudo que segura e cai caída. Falha automaticamente em testes de resistência de Força e Destreza. Ataques contra a criatura têm vantagem, e qualquer ataque a até 1,5m é crítico automático.",
  },
  {
    key: "petrificado",
    nome: "Petrificado",
    categoria: "base",
    graduavel: false,
    resumo:
      "Transformada (com tudo que veste/carrega) em substância sólida inanimada (pedra), peso ×10, para de envelhecer. Incapacitada, não se move/fala, sem consciência do entorno. Falha automática em resistência de Força/Destreza. Ataques contra ela têm vantagem. Resistência a todo dano. Imune a veneno e doença (doença/veneno já presentes ficam suspensos, não neutralizados).",
  },
  {
    key: "exaustao",
    nome: "Exaustão",
    categoria: "base",
    graduavel: true,
    graduacaoMax: 10,
    resumo:
      "A cada nível de exaustão: -1 em CA, testes de perícia/habilidade, salvamentos, jogadas de ataque e de dano; a cada 2 níveis, -1,5m de deslocamento. Ganhar exaustão estando já exausto aumenta o nível em 1. Ao atingir 10 graduações, a criatura morre.",
    comoRemover:
      "Um descanso longo reduz 1 nível, desde que a criatura também tenha comido e bebido durante ele.",
  },

  // ---- ELEMENTAL ----
  {
    key: "queimado",
    nome: "Queimado",
    categoria: "elemental",
    graduavel: true,
    graduacaoMax: 5,
    resumo:
      "1d8 de dano de fogo por graduação no início de cada turno da criatura. -2 em testes de Concentração por graduação. Imunes a dano de fogo são imunes à condição. Dura pelo efeito que a causou ou 1 minuto, o que vier primeiro.",
    comoRemover: "Ação + Destreza (Sobrevivência) CD 15, ou submergir completamente em água.",
  },
  {
    key: "refrigerado",
    nome: "Refrigerado",
    categoria: "elemental",
    graduavel: true,
    graduacaoMax: 5,
    resumo:
      "Ao se mover voluntariamente (1x/turno), sofre 1d6 de dano de frio por graduação. Deslocamento reduzido em 1,5m por graduação. -1 em testes/salvamentos baseados em Destreza por graduação. Resistente/imune a frio também resiste/é imune à condição. Dura pelo efeito que a causou ou 1 minuto, o que vier primeiro.",
  },
  {
    key: "corroido",
    nome: "Corroído",
    categoria: "elemental",
    graduavel: true,
    graduacaoMax: 5,
    resumo: "-2 na RD (redução de dano) por graduação. -1 em testes/salvamentos de Constituição por graduação.",
    comoRemover: "Ação + teste de Destreza ou Constituição CD 15, ou submergir completamente em água.",
  },

  // ---- FÍSICO ----
  {
    key: "chocado",
    nome: "Chocado",
    categoria: "fisico",
    graduavel: true,
    graduacaoMax: 5,
    resumo:
      "1x/turno, ao realizar uma reação, sofre 1d6 de dano de raio por graduação. Reação para lançar jutsu exige teste CD 8 (+1 por graduação além da 1ª, máx. CD 12) ou dobra o custo do jutsu. Resistente a raio faz o teste com vantagem e resiste à condição; imune a raio é imune à condição.",
    comoRemover: "Ação + Constituição (Sobrevivência) CD 15 para se aterrar.",
  },
  {
    key: "envenenado",
    nome: "Envenenado",
    categoria: "fisico",
    graduavel: true,
    graduacaoMax: 5,
    resumo:
      "1d6 de dano de veneno por graduação no início de cada turno. -1 de CA por graduação. Não recebe benefícios de descanso enquanto envenenado. Fora de combate, sofre os efeitos a cada hora. Imunes a dano de veneno são imunes à condição.",
  },
  {
    key: "machucado",
    nome: "Machucado",
    categoria: "fisico",
    graduavel: true,
    graduacaoMax: 5,
    resumo:
      "-1 em Força e em testes/ataques baseados em Destreza e Constituição por graduação. +4 de dano adicional (1x/turno) recebido de fontes de concussão ou dano de Terra, por graduação. Ao atingir a 6ª graduação, escala imediatamente para Inchaço, encerrando Machucado.",
    comoRemover: "Ação + Força (Medicina) CD 15, aplicando pressão no ferimento.",
  },
  {
    key: "inchaco",
    nome: "Inchaço",
    categoria: "fisico",
    graduavel: true,
    graduacaoMax: 1,
    resumo:
      "Conta como Ferida (Machucado) 5 para efeitos de Recursos/Características/Jutsu, mas não pode ganhar mais graduações de Machucado. Não pode Desengajar, Correr, nem realizar ações/reações. -5 em testes de Força e em testes de ataque baseados em Destreza/Constituição. +20 de dano adicional de fontes de concussão/Terra, 1x/turno. Fica atordoada até gastar uma ação completa se recuperando.",
    comoRemover: "Gastar uma ação completa se recuperando (perde a condição no início do turno seguinte).",
  },
  {
    key: "desnorteado",
    nome: "Desnorteado",
    categoria: "fisico",
    graduavel: false,
    resumo: "Só pode se mover OU realizar uma ação, não ambos. Não pode realizar ação bônus.",
    comoRemover: "Dura até o fim do próximo turno da criatura.",
  },
  {
    key: "sangramento",
    nome: "Sangramento",
    categoria: "fisico",
    graduavel: true,
    graduacaoMax: 5,
    resumo:
      "1d4 de dano necrótico por graduação no início do turno. Não recebe benefícios de descanso. Fora de combate, sofre os efeitos a cada 10 minutos. Ao ganhar a 6ª graduação, converte-se imediatamente em 5 graduações de Lacerado, encerrando Sangramento (na primeira vez por descanso, exige um teste simples CD 11 ou sofre o dano das graduações Laceradas de uma vez).",
    comoRemover: "Ação + Medicina CD 15.",
  },
  {
    key: "lacerado",
    nome: "Lacerado",
    categoria: "fisico",
    graduavel: true,
    graduacaoMax: 100,
    resumo:
      "Considerada Sangrando para fins de Características/Traços/Jutsu. Desvantagem em ataques corpo a corpo. 1d6 de dano necrótico por graduação no início do turno. Não recebe benefícios de descanso. Ganha +1 graduação automaticamente ao final de cada turno. Imunidade a Sangramento implica imunidade a Lacerado. Fora de combate, sofre os efeitos a cada 10 minutos.",
    comoRemover: "Ação + Medicina CD 20 com um Kit de Medicina.",
  },
  {
    key: "agarrado",
    nome: "Agarrado",
    categoria: "fisico",
    graduavel: false,
    resumo: "Deslocamento reduzido a 0, sem bônus de deslocamento.",
    comoRemover: "Termina se quem agarra ficar incapacitado, ou sair do alcance do agarrão.",
  },
  {
    key: "agachado",
    nome: "Agachado",
    categoria: "fisico",
    graduavel: false,
    resumo:
      "Única opção de movimento é rastejar (até metade da velocidade), sem bônus de deslocamento, a menos que se levante (o que encerra a condição). Desvantagem em ataques corpo a corpo e desvantagem em ataques à distância contra alvos além de 9m (30 pés). Ataques contra a criatura têm vantagem se o atacante estiver a até 1,5m ou usar arma com alcance; caso contrário, desvantagem.",
  },
  {
    key: "restringido",
    nome: "Restringido",
    categoria: "fisico",
    graduavel: false,
    resumo:
      "Deslocamento reduzido a 0, sem bônus de deslocamento. Ataques contra a criatura têm vantagem, os dela têm desvantagem. Desvantagem em testes de resistência de Destreza.",
  },
  {
    key: "atordoado",
    nome: "Atordoado",
    categoria: "fisico",
    graduavel: false,
    resumo:
      "Incapacitada, não se move e só fala com hesitação. Falha automática em resistência de Força/Destreza. Ataques contra a criatura têm vantagem.",
  },

  // ---- MENTAL ----
  {
    key: "concussao",
    nome: "Concussão",
    categoria: "mental",
    graduavel: true,
    graduacaoMax: 5,
    resumo:
      "-1 em todas as CDs de resistência por graduação. -1 em testes/ataques/salvamentos baseados em Inteligência por graduação. Não recebe benefícios de descanso.",
    comoRemover: "Ação com Kit de Medicina + teste de Medicina CD 20.",
  },
  {
    key: "enfraquecido",
    nome: "Enfraquecido",
    categoria: "mental",
    graduavel: true,
    graduacaoMax: 5,
    resumo:
      "Dano causado por ataques e jutsu reduzido em 4 por graduação. -1 em testes de resistência de Força. Dura pelo efeito que causou ou 1 minuto, o que vier primeiro.",
  },
  {
    key: "berserk",
    nome: "Berserk",
    categoria: "mental",
    graduavel: true,
    graduacaoMax: 5,
    resumo:
      "Deve usar toda ação/movimento para atacar a criatura perceptível mais próxima como se fosse inimiga mortal (alvo aleatório se houver empate). Sair do alcance de uma criatura Berserk provoca ataque de oportunidade. -1 em ataques/testes/salvamentos baseados em Carisma por graduação. Imunidade a Encantado implica imunidade a Berserk; jutsu que cura Encantado também cura Berserk.",
    comoRemover: "Perde 1 graduação ao final de cada uma das próprias rodadas.",
  },
  {
    key: "confuso",
    nome: "Confuso",
    categoria: "mental",
    graduavel: true,
    graduacaoMax: 5,
    resumo:
      "-1 em testes/ataques/salvamentos baseados em Sabedoria por graduação. Ao mirar um alvo específico com ataque/jutsu/característica, exige teste simples CD 8 (+1 por graduação além da 1ª, máx. CD 12); em falha, mira a criatura mais próxima ignorando alianças. Não pode escolher alvos em efeitos de área — todas as criaturas no alcance são afetadas.",
    comoRemover: "Ação + teste de Inteligência CD 15.",
  },
  {
    key: "encantado",
    nome: "Encantado",
    categoria: "mental",
    graduavel: true,
    graduacaoMax: 5,
    resumo:
      "Melhora a atitude em relação à fonte do encanto em 1 grau por graduação. -2 em testes de perícia de Inteligência/Sabedoria feitos contra a fonte, por graduação. Não pode realizar ações hostis contra a fonte ou seus aliados.",
    comoRemover:
      "Ao sofrer (ou desejar sofrer) efeito hostil/dano da fonte ou de um aliado dela, remove todas as graduações.",
  },

  // ---- SENSORIAL ----
  {
    key: "medo",
    nome: "Desmoralizado (Medo)",
    categoria: "sensorial",
    graduavel: true,
    graduacaoMax: 5,
    resumo:
      "-1 em testes de resistência por graduação. Deve testar Concentração no início de cada turno para manter jutsu concentrados. Ao final do turno, teste de Carisma CD 13 remove 1 graduação; após 10 minutos sem tentar, perde todas as graduações restantes.",
    comoRemover: "Ação + teste de Carisma CD 20 remove todas as graduações de uma vez.",
  },
  {
    key: "lento",
    nome: "Lento",
    categoria: "sensorial",
    graduavel: true,
    graduacaoMax: 5,
    resumo:
      "Deslocamento reduzido em 3m por graduação, sem poder ganhar bônus de deslocamento. Nunca realiza mais de um ataque ou lança mais de 1 jutsu por turno. Dura pela duração do jutsu original ou 1 minuto, o que vier primeiro.",
  },
  {
    key: "selado",
    nome: "Selado",
    categoria: "sensorial",
    graduavel: true,
    graduacaoMax: 5,
    resumo:
      "Custo base de chakra de Ninjutsu/Genjutsu +2 por graduação. -1 nas CDs de Ninjutsu/Genjutsu por graduação. Geralmente resultado de Fuinjutsu.",
    comoRemover:
      "Ação + teste de Ninshou ou Ilusões CD 15 remove 1 graduação (mais 1 graduação extra a cada 5 pontos acima da CD).",
  },
  {
    key: "deslumbrado",
    nome: "Deslumbrado",
    categoria: "sensorial",
    graduavel: true,
    graduacaoMax: 5,
    resumo:
      "-2 em testes que dependem de visão por graduação. -2 em jogadas de ataque por graduação, sem poder ganhar vantagem em ataques à distância. Alcance de lançamento/ataques à distância reduzido em 4,5m por graduação (mínimo 1,5m).",
    comoRemover: "Ação + teste de Constituição CD 15 remove todas as graduações.",
  },
  {
    key: "cego",
    nome: "Cego",
    categoria: "sensorial",
    graduavel: false,
    resumo:
      "Não pode ver; falha automaticamente em qualquer teste que exija visão e não pode mirar criaturas com efeitos que exigem 'ver' o alvo (salvo sentido especial, ex: Sentido de Tremor/Detecção de Chakra). Não se beneficia de características de Clã ligadas a Dojutsu (Sharingan, Byakugan). Desvantagem em testes de Destreza. Ataques contra a criatura têm vantagem; os dela têm desvantagem (salvo sentido especial).",
  },
  {
    key: "ensurdecido",
    nome: "Ensurdecido",
    categoria: "sensorial",
    graduavel: false,
    resumo:
      "Não pode ouvir; falha automaticamente em qualquer teste que exija audição. -10 em Percepção. Testes, ataques e salvamentos baseados em Sabedoria são feitos em desvantagem.",
  },
  {
    key: "invisivel",
    nome: "Invisível",
    categoria: "sensorial",
    graduavel: false,
    resumo:
      "Impossível de ver sem auxílio de sentido especial; conta como fortemente obscurecida para fins de furtividade (localização ainda pode ser detectada por ruído/rastros). Ataques contra a criatura têm desvantagem; os dela têm vantagem.",
  },
];
