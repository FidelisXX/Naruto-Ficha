import type { JutsuTipo } from "@/lib/jutsu/types";
import type { ComponentRule } from "@/lib/jutsuCreation/types";

/**
 * Regras de obrigatoriedade de componente por tipo — Manual Shinobi p.126
 * (Ninjutsu), p.133-134 (Genjutsu), p.142 (Taijutsu/Bukijutsu). Taijutsu e
 * Bukijutsu compartilham a seção do livro, mas o componente Arma (A) só é
 * obrigatório para Bukijutsu (indisponível para Taijutsu puro), por isso a
 * função recebe o `tipo` final e não só a família.
 */
export function getComponentRules(tipo: JutsuTipo): ComponentRule[] {
  if (tipo === "ninjutsu") {
    return [
      { componente: "SM", requisito: "sempre", nota: "Obrigatório para todos os Ninjutsu criados." },
      {
        componente: "MC",
        requisito: "condicional",
        nota: "Obrigatório se o jutsu tiver Natureza de Chakra ou a palavra-chave Médico.",
        dependsOnPrereq: ["natureza-de-chakra", "medico"],
      },
      { componente: "SC", requisito: "condicional", nota: "Obrigatório com Fuinjutsu.", dependsOnPrereq: ["fuinjutsu"] },
      { componente: "M", requisito: "opcional", nota: "Exige pelo menos 1,5 metro de movimento disponível." },
      { componente: "A", requisito: "opcional", nota: "Exige uma arma disponível e ao alcance." },
      {
        componente: "FN",
        requisito: "opcional",
        nota: "Exige uma Ferramenta Ninja disponível. Só pode ser escolhido se o alcance for Próprio ou Toque.",
      },
    ];
  }
  if (tipo === "genjutsu") {
    return [
      { componente: "SM", requisito: "sempre", nota: "Obrigatório para todos os Genjutsu." },
      { componente: "MC", requisito: "sempre", nota: "Obrigatório para todos os Genjutsu." },
      { componente: "SC", requisito: "condicional", nota: "Obrigatório com Fuinjutsu.", dependsOnPrereq: ["fuinjutsu"] },
      { componente: "M", requisito: "opcional", nota: "Exige pelo menos 1,5 metro de movimento disponível." },
      {
        componente: "A",
        requisito: "opcional",
        nota: "Exige uma arma disponível e ao alcance. Só pode ser escolhido se o alcance for Próprio ou Toque.",
      },
      {
        componente: "FN",
        requisito: "opcional",
        nota: "Exige uma Ferramenta Ninja disponível. Só pode ser escolhido se o alcance for Próprio ou Toque.",
      },
    ];
  }
  // taijutsu / bukijutsu
  return [
    { componente: "SM", requisito: "indisponivel", nota: "Taijutsu e Bukijutsu não usam Selos de Mão." },
    {
      componente: "MC",
      requisito: "condicional",
      nota: "Obrigatório se o jutsu tiver Natureza de Chakra (Liberação da Natureza).",
      dependsOnPrereq: ["natureza-de-chakra"],
    },
    { componente: "SC", requisito: "indisponivel", nota: "Taijutsu e Bukijutsu não usam Selos de Chakra." },
    { componente: "M", requisito: "sempre", nota: "Obrigatório para todo Taijutsu e Bukijutsu." },
    {
      componente: "A",
      requisito: tipo === "bukijutsu" ? "sempre" : "indisponivel",
      nota:
        tipo === "bukijutsu"
          ? "Obrigatório para todo Bukijutsu — selecione o tipo de arma que este jutsu requer."
          : "Taijutsu é uma técnica desarmada; use Bukijutsu se o jutsu exigir uma arma.",
    },
    { componente: "FN", requisito: "opcional", nota: "Exige uma Ferramenta Ninja disponível e ao alcance." },
  ];
}
