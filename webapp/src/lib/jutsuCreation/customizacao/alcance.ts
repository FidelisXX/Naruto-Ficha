/**
 * Passo 3 — Modificando o alcance (Manual Shinobi p.153). Cada incremento
 * (para cima ou para baixo) custa ±1 chakra e 1 semana de TdI — o mesmo
 * custo vale tanto para mudar o "degrau" de alcance quanto para expandir/
 * reduzir uma área de efeito já existente (regras textuais separadas, mas
 * com o mesmo custo por incremento).
 */
export const RANGE_INCREMENT_COST = { custoChakraPorIncremento: 1, tdiSemanasPorIncremento: 1 };

export const RANGE_TIER_RULES = [
  {
    tier: "proprio",
    nome: "Próprio",
    descricao: "Se o jutsu tiver alcance Próprio, o próximo incremento seria Toque. Não é possível reduzir abaixo de Próprio.",
  },
  {
    tier: "toque",
    nome: "Toque",
    descricao:
      "Se o jutsu tiver alcance de Toque, o próximo incremento seria 4,5 metros. Se reduzido, o alcance volta a Próprio.",
  },
  {
    tier: "distancia",
    nome: "Alcance (3m ou mais)",
    descricao:
      "Se o jutsu tiver qualquer alcance de 3 metros ou mais, cada incremento adicional DOBRA o alcance atual. Reduzir divide o alcance pela metade, com mínimo de 1,5 metro (contado como Toque).",
  },
] as const;

export const AREA_INCREMENT_RULE =
  "Se o jutsu tiver uma área de efeito (esfera, linha, cone, cilindro, cubo etc.), cada incremento adicional aumenta o tamanho em 3 metros; reduzir diminui 3 metros pelo mesmo custo.";
