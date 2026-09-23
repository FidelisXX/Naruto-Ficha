/**
 * Catálogo de Armas e Armaduras — Manual Shinobi, Cap. 5: Equipamento,
 * p.34-43 ("Armadura Leve/Média/Pesada", "Armas").
 */

export type ArmorCategory = "leve" | "media" | "pesada";

export interface ArmorDefinition {
  key: string;
  nome: string;
  custo: string;
  categoria: ArmorCategory;
  volume: number;
  bonusArmadura: number;
  bonusDes: string;
  efeito: string;
}

export const ARMOR_CATEGORY_LABELS: Record<ArmorCategory, string> = {
  leve: "Armadura Leve",
  media: "Armadura Média",
  pesada: "Armadura Pesada",
};

export const ARMOR_CATALOG: ArmorDefinition[] = [
  { key: "tecido-acolchoado", nome: "Tecido Acolchoado", custo: "100 ryo", categoria: "leve", volume: 1, bonusArmadura: 1, bonusDes: "Máximo +7", efeito: "" },
  { key: "tecido-de-couro", nome: "Tecido de Couro", custo: "250 ryo", categoria: "leve", volume: 1, bonusArmadura: 2, bonusDes: "Máximo +7", efeito: "Camuflar" },
  { key: "tecido-blindado", nome: "Tecido Blindado", custo: "500 ryo", categoria: "leve", volume: 2, bonusArmadura: 3, bonusDes: "Máximo +7", efeito: "Fortificado" },
  { key: "tecido-reforcado", nome: "Tecido Reforçado", custo: "750 ryo", categoria: "leve", volume: 2, bonusArmadura: 3, bonusDes: "Máximo +7", efeito: "Reforçado (2)" },
  { key: "tecido-sintetico", nome: "Tecido Sintético", custo: "1500 ryo", categoria: "leve", volume: 3, bonusArmadura: 4, bonusDes: "Máximo +7", efeito: "Elegante" },
  { key: "tecido-shinobi", nome: "Tecido Shinobi", custo: "2500 ryo", categoria: "leve", volume: 3, bonusArmadura: 5, bonusDes: "Máximo +7", efeito: "Alta qualidade" },

  { key: "jaqueta-de-combate", nome: "Jaqueta de Combate", custo: "100 ryo", categoria: "media", volume: 4, bonusArmadura: 4, bonusDes: "Max. +3", efeito: "Volumoso" },
  { key: "jaqueta-shinobi", nome: "Jaqueta Shinobi", custo: "250 ryo", categoria: "media", volume: 3, bonusArmadura: 4, bonusDes: "Max. +3", efeito: "Moderno, Reforçado (2)" },
  { key: "jaqueta-de-combate-shinobi", nome: "Jaqueta de Combate Shinobi", custo: "500 ryo", categoria: "media", volume: 4, bonusArmadura: 5, bonusDes: "Max. +3", efeito: "Camuflagem, Reforçada (3)" },
  { key: "jaqueta-chunin", nome: "Jaqueta Chunin", custo: "750 ryo", categoria: "media", volume: 5, bonusArmadura: 5, bonusDes: "Max. +3", efeito: "Fortificado, Reforçado (3)" },
  { key: "jaqueta-de-batalha", nome: "Jaqueta de Batalha", custo: "1500 ryo", categoria: "media", volume: 6, bonusArmadura: 6, bonusDes: "Max. +3", efeito: "Alta qualidade, Pesado (13), Reforçado (4)" },
  { key: "jaqueta-chunin-blindado", nome: "Jaqueta Chunin Blindado", custo: "2500 ryo", categoria: "media", volume: 6, bonusArmadura: 6, bonusDes: "Max. +3", efeito: "Fortificado, Pesado (14), Reforçado (4)" },

  { key: "armadura-de-combate", nome: "Armadura de Combate", custo: "100 ryo", categoria: "pesada", volume: 6, bonusArmadura: 6, bonusDes: "Nenhum", efeito: "Volumoso, Reforçado (4)" },
  { key: "armadura-sintetica", nome: "Armadura Sintética", custo: "250 ryo", categoria: "pesada", volume: 5, bonusArmadura: 6, bonusDes: "Nenhum", efeito: "Alta Qualidade, Reforçado (4)" },
  { key: "colete-jounin", nome: "Colete Jounin", custo: "500 ryo", categoria: "pesada", volume: 4, bonusArmadura: 7, bonusDes: "Nenhum", efeito: "Ameaçador, Alta qualidade, Reforçado (6)" },
  { key: "colete-jounin-elite", nome: "Colete Jounin Elite", custo: "750 ryo", categoria: "pesada", volume: 6, bonusArmadura: 7, bonusDes: "Nenhum", efeito: "Ameaçador, Alta qualidade, Reforçado (6)" },
  { key: "armadura-ronin", nome: "Armadura Ronin", custo: "1500 ryo", categoria: "pesada", volume: 6, bonusArmadura: 8, bonusDes: "Nenhum", efeito: "Fortificado, Pesado (17), Reforçado (8)" },
  { key: "armadura-samurai", nome: "Armadura Samurai", custo: "2500 ryo", categoria: "pesada", volume: 8, bonusArmadura: 8, bonusDes: "Nenhum", efeito: "Alta qualidade, Fortificado (2), Pesado (19), Reforçado (8)" },
];

export type WeaponCategory = "simples" | "marcial" | "arremesso" | "balistica" | "pergaminho";

export const WEAPON_CATEGORY_LABELS: Record<WeaponCategory, string> = {
  simples: "Simples",
  marcial: "Marcial",
  arremesso: "Arremesso",
  balistica: "Balística",
  pergaminho: "Pergaminho de Combate",
};

export interface WeaponDefinition {
  key: string;
  nome: string;
  custo: string;
  dano: string;
  tipoDano: string;
  propriedades: string[];
  grupo: string;
  volume: number;
  categoria: WeaponCategory;
}

export const WEAPON_CATALOG: WeaponDefinition[] = [
  // Armas Corpo a Corpo Simples
  { key: "kunai", nome: "Kunai", custo: "10 Ryo", dano: "1d4", tipoDano: "Perfuração", propriedades: ["Arremessado (30/60)", "Leve", "Sutil", "Munição", "Ataque Múltiplo"], grupo: "Arremesso / Munição", volume: 2, categoria: "simples" },
  { key: "machado-de-mao", nome: "Machado de Mão", custo: "10 Ryo", dano: "1d6", tipoDano: "Cortante", propriedades: ["Leve", "Arremessado (20/60)"], grupo: "Arremesso", volume: 2, categoria: "simples" },
  { key: "sai", nome: "Sai", custo: "20 ryo", dano: "1d4", tipoDano: "Perfuração", propriedades: ["Arremessado (20/60)", "Leve", "Sutil", "Desarmar"], grupo: "Lâmina / Arremesso", volume: 1, categoria: "simples" },
  { key: "tanto-espada-curta", nome: "Tanto (espada curta)", custo: "10 Ryo", dano: "1d6", tipoDano: "Perfuração", propriedades: ["Leve", "Sutil", "Mortal", "Flexível (Cortante d4)"], grupo: "Lâmina", volume: 2, categoria: "simples" },
  { key: "kama-foice-de-mao", nome: "Kama (foice de mão)", custo: "10 Ryo", dano: "1d4", tipoDano: "Cortante", propriedades: ["Leve", "Sutil", "Crítico", "Tático", "Multiataque"], grupo: "Lâmina", volume: 1, categoria: "simples" },
  { key: "gunsen", nome: "Gunsen", custo: "10 Ryo", dano: "1d4", tipoDano: "Cortante", propriedades: ["Mortal", "Leve", "Sutil", "Oculto"], grupo: "Lâmina", volume: 1, categoria: "simples" },
  { key: "punho", nome: "Punho", custo: "10 Ryo", dano: "1d6", tipoDano: "Concussão", propriedades: ["Versátil (1d8)", "Bloqueio"], grupo: "Arma de Haste", volume: 2, categoria: "simples" },
  { key: "lanca", nome: "Lança", custo: "10 Ryo", dano: "1d6", tipoDano: "Perfuração", propriedades: ["Versátil (1d8)", "Alcance 1"], grupo: "Arma de Haste", volume: 2, categoria: "simples" },
  { key: "corrente-ponderada", nome: "Corrente Ponderada", custo: "10 Ryo", dano: "1d4", tipoDano: "Concussão", propriedades: ["Alcance 2", "Agarrar", "Tropeçar", "Duas mãos", "Ataque múltiplo"], grupo: "Mangual", volume: 2, categoria: "simples" },
  { key: "kusarigama-foice-de-mao-sinuosa-acorrentada", nome: "Kusarigama (Foice de Mão Sinuosa Acorrentada)", custo: "10 Ryo", dano: "2d4", tipoDano: "Cortante", propriedades: ["Alcance 1", "Agarrar", "Sutil", "Tático", "Duas Mãos"], grupo: "Mangual", volume: 2, categoria: "simples" },
  { key: "tekko-soco-ingles", nome: "Tekko (Soco-inglês)", custo: "20 Ryo", dano: "-", tipoDano: "Concussão", propriedades: ["Desarmado", "Agarrar", "Leve"], grupo: "Poder", volume: 2, categoria: "simples" },

  // Armas de Alcance Simples
  { key: "senbon", nome: "Senbon", custo: "15 Ryo", dano: "1d4", tipoDano: "Perfuração", propriedades: ["Arremessado (30/60)", "Multi-Ataque", "Munição"], grupo: "Arremesso / Munição", volume: 1, categoria: "simples" },
  { key: "arco-curto", nome: "Arco Curto", custo: "20 Ryo", dano: "1d6", tipoDano: "Perfuração", propriedades: ["Alcance (60/180)", "Duas mãos", "Sutil", "Munição"], grupo: "Munição", volume: 2, categoria: "simples" },
  { key: "shuriken", nome: "Shuriken", custo: "10 ryo", dano: "1d4", tipoDano: "Cortante", propriedades: ["Arremessado (30/120)", "Multi-Ataque", "Munição"], grupo: "Munição / Arremesso", volume: 2, categoria: "simples" },
  { key: "funda", nome: "Funda", custo: "5 Ryo", dano: "1d4", tipoDano: "Concussão", propriedades: ["Alcance (30/120)", "Munição"], grupo: "Munição", volume: 1, categoria: "simples" },
  { key: "besta-leve", nome: "Besta Leve", custo: "20 Ryo", dano: "1d8", tipoDano: "Perfuração", propriedades: ["Alcance (60/120)", "Duas mãos", "Munição"], grupo: "Munição", volume: 2, categoria: "simples" },
  { key: "bola", nome: "Bola", custo: "5 Ryo", dano: "1d4", tipoDano: "Concussão", propriedades: ["Arremesso", "Alcance (30/60)", "Tropeço", "Munição"], grupo: "Munição", volume: 1, categoria: "simples" },

  // Armas Marciais Corpo a Corpo
  { key: "espada-larga", nome: "Espada Larga", custo: "20 Ryo", dano: "1d6", tipoDano: "Cortante", propriedades: ["Leve", "Sutil", "Desarmado"], grupo: "Lâmina", volume: 2, categoria: "marcial" },
  { key: "garra-de-ferro", nome: "Garra de Ferro", custo: "20 Ryo", dano: "-", tipoDano: "Cortante", propriedades: ["Desarmado", "Sutil", "Crítico", "Duplo"], grupo: "Lâmina", volume: 1, categoria: "marcial" },
  { key: "tachi", nome: "Tachi", custo: "40 ryo", dano: "1d8", tipoDano: "Cortante", propriedades: ["Versátil (1d10)", "Mortal"], grupo: "Lâmina", volume: 2, categoria: "marcial" },
  { key: "katana", nome: "Katana", custo: "30 Ryo", dano: "1d8", tipoDano: "Cortante", propriedades: ["Mortal", "Sutil"], grupo: "Lâmina", volume: 2, categoria: "marcial" },
  { key: "odachi", nome: "Odachi", custo: "80 Ryo", dano: "2d6", tipoDano: "Cortante", propriedades: ["Crítico", "Pesado", "Duas Mãos"], grupo: "Lâmina", volume: 3, categoria: "marcial" },
  { key: "laminas-articuladas", nome: "Lâminas Articuladas", custo: "20 Ryo", dano: "1d6", tipoDano: "Cortante", propriedades: ["Leve", "Sutil", "Oculto"], grupo: "Lâmina", volume: 1, categoria: "marcial" },
  { key: "lamina-oculta", nome: "Lâmina Oculta", custo: "20 Ryo", dano: "1d4", tipoDano: "Perfuração", propriedades: ["Mortal", "Letal 5", "Oculto", "Refinado"], grupo: "Lâmina", volume: 1, categoria: "marcial" },
  { key: "lanca-acorrentada", nome: "Lança Acorrentada", custo: "20 Ryo", dano: "1d10", tipoDano: "Perfuração", propriedades: ["Alcance 1", "Tropeço", "Agarrar"], grupo: "Mangual", volume: 3, categoria: "marcial" },
  { key: "chigiriki", nome: "Chigiriki", custo: "25 Ryo", dano: "1d8", tipoDano: "Perfuração", propriedades: ["Alcance 1", "Desarmar", "Tropeço", "Sutil"], grupo: "Mangual", volume: 2, categoria: "marcial" },
  { key: "chicote", nome: "Chicote", custo: "20 Ryo", dano: "1d6", tipoDano: "Cortante", propriedades: ["Alcance 2", "Tropeço", "Sutil", "Sinuoso"], grupo: "Mangual", volume: 1, categoria: "marcial" },
  { key: "fio-de-batalha", nome: "Fio de Batalha", custo: "20 Ryo", dano: "1d4", tipoDano: "Cortante", propriedades: ["Alcance 2", "Tropeçar", "Agarrar", "Acuidade", "Especial*"], grupo: "Mangual", volume: 1, categoria: "marcial" },
  { key: "naginata", nome: "Naginata", custo: "40 Ryo", dano: "1d4", tipoDano: "Cortante", propriedades: ["Alcance 1", "Pesado", "Tropeço", "Duas Mãos", "Flexível (Concussão d8)"], grupo: "Arma de Haste", volume: 3, categoria: "marcial" },
  { key: "sasumata", nome: "Sasumata", custo: "40 Ryo", dano: "1d10", tipoDano: "Cortante", propriedades: ["Alcance 1", "Agarrar", "Duas Mãos"], grupo: "Arma de Haste", volume: 3, categoria: "marcial" },
  { key: "grande-machado", nome: "Grande Machado", custo: "40 Ryo", dano: "1d10", tipoDano: "Perfuração", propriedades: ["Mortal", "Pesado", "Duas Mãos"], grupo: "Arma de Haste", volume: 3, categoria: "marcial" },
  { key: "foice", nome: "Foice", custo: "40 Ryo", dano: "1d12", tipoDano: "Cortante", propriedades: ["Alcance 1", "Mortal", "Pesado", "Duas Mãos"], grupo: "Arma de Haste", volume: 3, categoria: "marcial" },
  { key: "tinbe-rochin", nome: "Tinbe Rochin", custo: "15 Ryo", dano: "1d6", tipoDano: "Perfuração", propriedades: ["Bloqueio", "Duas mãos"], grupo: "Arma de Haste", volume: 2, categoria: "marcial" },
  { key: "yari", nome: "Yari", custo: "40 Ryo", dano: "3d4", tipoDano: "Perfuração", propriedades: ["Alcance 1", "Pesado", "Duas Mãos"], grupo: "Arma de Haste", volume: 3, categoria: "marcial" },
  { key: "lanca-enganchada", nome: "Lança Enganchada", custo: "40 Ryo", dano: "1d10", tipoDano: "Perfuração", propriedades: ["Alcance 1", "Duas mãos"], grupo: "Arma de Haste", volume: 3, categoria: "marcial" },
  { key: "tetsubo", nome: "Tetsubo", custo: "40 Ryo", dano: "1d10", tipoDano: "Concussão", propriedades: ["Mortal 2", "Pesado", "Versátil (1d12)"], grupo: "Impacto", volume: 3, categoria: "marcial" },
  { key: "tonfa", nome: "Tonfa", custo: "20 Ryo", dano: "1d6", tipoDano: "Concussão", propriedades: ["Leve", "Bloqueio", "Oculto", "Tropeço", "Multi-ataque"], grupo: "Impacto", volume: 3, categoria: "marcial" },
  { key: "clube-de-guerra", nome: "Clube de Guerra", custo: "40 Ryo", dano: "1d8", tipoDano: "Concussão", propriedades: ["Alcance 1", "Pesado"], grupo: "Impacto", volume: 3, categoria: "marcial" },
  { key: "nunchaku", nome: "Nunchaku", custo: "20 Ryo", dano: "1d6", tipoDano: "Concussão", propriedades: ["Leve", "Desarmar", "Multi-Ataque", "Enrolamento"], grupo: "Impacto", volume: 2, categoria: "marcial" },
  { key: "bracadeiras-de-combate", nome: "Braçadeiras de Combate", custo: "20 Ryo", dano: "-", tipoDano: "Concussão", propriedades: ["Desarmado", "Desarmar", "Leve"], grupo: "Impacto", volume: 1, categoria: "marcial" },
  { key: "jitte", nome: "Jitte", custo: "20 Ryo", dano: "1d4", tipoDano: "Concussão", propriedades: ["Leve", "Bloquear", "Desarmar"], grupo: "Impacto", volume: 1, categoria: "marcial" },
  { key: "fa-gunbai", nome: "Fã Gunbai", custo: "40 Ryo", dano: "1d6", tipoDano: "Concussão", propriedades: ["Bloqueio", "Duas mãos"], grupo: "Impacto", volume: 3, categoria: "marcial" },
  { key: "kanabo", nome: "Kanabo", custo: "30 Ryo", dano: "1d10", tipoDano: "Concussão", propriedades: ["Crítico", "Pesado", "Duas Mãos"], grupo: "Impacto", volume: 2, categoria: "marcial" },
  { key: "martelo-otsuchi", nome: "Martelo Otsuchi", custo: "40 Ryo", dano: "3d4", tipoDano: "Concussão", propriedades: ["Pesado", "Duas mãos"], grupo: "Impacto", volume: 2, categoria: "marcial" },

  // Armas de Alcance Marcial (arremesso)
  { key: "chakra", nome: "Chakram", custo: "40 Ryo", dano: "1d6", tipoDano: "Cortante", propriedades: ["Lançado (30/60)", "Leve", "Retornando"], grupo: "Arremesso", volume: 2, categoria: "arremesso" },
  { key: "monstro-chakram", nome: "Monstro Chakram", custo: "40 Ryo", dano: "1d10", tipoDano: "Cortante", propriedades: ["Lançado (60/120)", "Duas Mãos", "Retornando"], grupo: "Arremesso", volume: 3, categoria: "arremesso" },
  { key: "fuma-shuriken", nome: "Fuma-Shuriken", custo: "20 Ryo", dano: "1d8", tipoDano: "Cortante", propriedades: ["Lançado (60/120)", "Oculto", "Retornando"], grupo: "Arremesso", volume: 2, categoria: "arremesso" },
  { key: "monstro-shuriken", nome: "Monstro Shuriken", custo: "40 Ryo", dano: "1d12", tipoDano: "Cortante", propriedades: ["Arremessado (40/80)", "Pesado", "Duas Mãos", "Retornando"], grupo: "Arremesso", volume: 3, categoria: "arremesso" },
  { key: "torinawa", nome: "Torinawa", custo: "5 Ryo", dano: "1d4", tipoDano: "Concussão", propriedades: ["Arremessado (20/40)", "Agarrar"], grupo: "Arremesso", volume: 1, categoria: "arremesso" },
  { key: "bumerangue", nome: "Bumerangue", custo: "25 Ryo", dano: "1d6", tipoDano: "Concussão", propriedades: ["Arremessado (60/90)", "Versátil (1d8)", "Retornando"], grupo: "Arremesso", volume: 1, categoria: "arremesso" },
  { key: "monstro-bumerangue", nome: "Monstro Bumerangue", custo: "50 Ryo", dano: "1d10", tipoDano: "Concussão", propriedades: ["Arremessado (90/120)", "Duas Mãos", "Pesado", "Retornando"], grupo: "Arremesso", volume: 1, categoria: "arremesso" },

  // Armas de Alcance Marcial (munição)
  { key: "arco-longo", nome: "Arco Longo", custo: "40 Ryo", dano: "1d8", tipoDano: "Perfuração", propriedades: ["Alcance (120/180)", "Sutil", "Duas mãos", "Munição"], grupo: "Munição", volume: 3, categoria: "marcial" },
  { key: "besta-mao", nome: "Besta, Mão", custo: "20 Ryo", dano: "1d6", tipoDano: "Perfuração", propriedades: ["Alcance (30/120)", "Leve", "Carregamento", "Munição"], grupo: "Munição", volume: 2, categoria: "marcial" },
  { key: "besta-pesada", nome: "Besta, Pesada", custo: "40 Ryo", dano: "1d10", tipoDano: "Perfuração", propriedades: ["Alcance (30/120)", "Pesado", "Sutil", "Carregamento", "Munição"], grupo: "Munição", volume: 3, categoria: "marcial" },
  { key: "zarabatana", nome: "Zarabatana", custo: "20 Ryo", dano: "1d4", tipoDano: "Perfuração", propriedades: ["Alcance (25/100)", "Munição"], grupo: "Munição", volume: 1, categoria: "marcial" },

  // Armas Exóticas Corpo a Corpo
  { key: "sansetsukon-equipe-de-3-secoes", nome: "Sansetsukon (Equipe de 3 Seções)", custo: "100 Ryo", dano: "1d10", tipoDano: "Concussão", propriedades: ["Alcance 1", "Desarmar", "Duas Mãos", "Sutileza", "Enrolamento"], grupo: "Impacto", volume: 2, categoria: "marcial" },
  { key: "foice-de-lamina-tripla", nome: "Foice de Lâmina Tripla", custo: "100 Ryo", dano: "1d12", tipoDano: "Cortante", propriedades: ["Alcance 2", "Mortal 2", "Duas Mãos", "Sinuoso"], grupo: "Arma de Haste", volume: 2, categoria: "marcial" },
  { key: "espada-cutelo", nome: "Espada Cutelo", custo: "100 Ryo", dano: "1d8", tipoDano: "Cortante", propriedades: ["Sutil", "Crítico", "Mortal"], grupo: "Lâmina", volume: 2, categoria: "marcial" },
  { key: "katar-triplo", nome: "Katar Triplo", custo: "100 Ryo", dano: "1d6", tipoDano: "Perfuração", propriedades: ["Desarmado", "Leve", "Bloqueio", "Oculto"], grupo: "Lâmina", volume: 2, categoria: "marcial" },
  { key: "urumi", nome: "Urumi", custo: "100 Ryo", dano: "1d8", tipoDano: "Cortante", propriedades: ["Alcance 1", "Acuidade", "Desarmar", "Tropeçar", "Agarrar", "Enrolar"], grupo: "Lâmina", volume: 2, categoria: "marcial" },
  { key: "chokuto", nome: "Chokuto", custo: "20 Ryo", dano: "1d8", tipoDano: "Cortante/Perfurante", propriedades: ["Sutileza", "Crítico", "Letal 2"], grupo: "Lâmina", volume: 3, categoria: "marcial" },

  // Armas Exóticas de Alcance
  { key: "pistola-matchlock", nome: "Pistola Matchlock", custo: "200 Ryo", dano: "3d6", tipoDano: "Perfuração", propriedades: ["Alcance (15/60)", "Leve", "Carregamento", "Munição", "Volátil 3"], grupo: "Munição", volume: 2, categoria: "marcial" },
  { key: "rifle-de-fosforo", nome: "Rifle de Fósforo", custo: "250 Ryo", dano: "3d8", tipoDano: "Perfuração", propriedades: ["Alcance (60/150)", "Carregamento", "Duas Mãos", "Munição", "Volátil 4"], grupo: "Munição", volume: 2, categoria: "marcial" },
  { key: "ola-taihou", nome: "Olá Taihou", custo: "500 Ryo", dano: "6d6", tipoDano: "Fogo", propriedades: ["Alcance (60/150)", "Carregamento", "Duas mãos", "Munição", "Volátil 5"], grupo: "Munição", volume: 3, categoria: "marcial" },
  { key: "pergaminho-de-combate", nome: "Pergaminho de Combate", custo: "250 Ryo", dano: "1d8", tipoDano: "Variável", propriedades: ["Alcance (30/90)", "Invocação"], grupo: "-", volume: 1, categoria: "pergaminho" },
  { key: "pergaminho-de-combate-gigante", nome: "Pergaminho de Combate Gigante", custo: "500 Ryo", dano: "1d12", tipoDano: "Variável", propriedades: ["Alcance (60/180)", "Evocação", "Duas Mãos"], grupo: "-", volume: 3, categoria: "pergaminho" },
  { key: "arma-kunai-balistica", nome: "Arma Kunai Balística", custo: "300 Ryo", dano: "3d6", tipoDano: "Perfuração", propriedades: ["Alcance (30/60)", "Carregamento", "Munição", "Ataque Múltiplo", "Volátil 3"], grupo: "Munição", volume: 2, categoria: "balistica" },
  { key: "rifle-balistico-shuriken", nome: "Rifle Balístico Shuriken", custo: "500 Ryo", dano: "3d8", tipoDano: "Cortante", propriedades: ["Alcance (120)", "Carregamento", "Duas Mãos", "Munição", "Multiataque", "Volátil (5)"], grupo: "Munição", volume: 3, categoria: "balistica" },
];
