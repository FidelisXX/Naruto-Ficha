import type { JutsuTipo } from "@/lib/jutsu/types";
import type { RangeOption } from "@/lib/jutsuCreation/types";

/**
 * Opções de alcance (Passo 2) — Manual Shinobi p.127 (Ninjutsu), p.134
 * (Genjutsu), p.142-143 (Taijutsu/Bukijutsu).
 */
export function getRangeOptions(tipo: JutsuTipo): RangeOption[] {
  const nomeTipo = tipo === "ninjutsu" ? "Ninjutsu" : tipo === "genjutsu" ? "Genjutsu" : "Taijutsu";

  const base: RangeOption[] = [
    {
      key: "proprio",
      nome: "Próprio",
      descricao: `Seu ${nomeTipo} tem alcance próprio. Afetará apenas você, ou usará você como centro/origem de seu raio ou forma de efeito.`,
    },
    {
      key: "toque",
      nome: "Toque (1,5 metro)",
      descricao: `Só aplica seus efeitos se você conseguir tocar fisicamente o alvo. Exige uma jogada de ataque de ${nomeTipo} corpo a corpo para acertar.`,
    },
    {
      key: "distancia",
      nome: "Distância (1,5 metro base)",
      descricao:
        tipo === "taijutsu" || tipo === "bukijutsu"
          ? `Alcance maior que 1,5 metro. Exige uma jogada de ataque de ${nomeTipo} à distância.`
          : `Alcance maior que 1,5 metro. Exige uma jogada de ataque de ${nomeTipo} à distância. Se este alcance for adicionado a um jutsu Rank C, o alcance máximo possível aumenta para 18 metros; em Rank A ou superior, aumenta para 36 metros.`,
    },
  ];

  if (tipo === "bukijutsu") {
    base.push({
      key: "alcance-da-arma",
      nome: "Alcance da Arma",
      descricao:
        "Usa o alcance da arma escolhida para calcular o alcance do jutsu. Se a arma for corpo a corpo, faça um ataque Taijutsu corpo a corpo; se for à distância, faça um ataque Taijutsu à distância (a menos que o jutsu tenha o efeito Área). Não pode ser usado para Taijutsu sem arma.",
    });
  }

  return base;
}
