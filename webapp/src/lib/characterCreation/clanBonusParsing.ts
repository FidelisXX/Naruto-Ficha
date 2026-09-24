import { ATTRIBUTE_LABELS, type AttributeKey } from "@/lib/rules";

export interface ParsedAttributeChoice {
  /** Texto original da cláusula (ex: "+2 à escolha entre Sabedoria ou Inteligência"). */
  texto: string;
  bonus: number;
  opcoes: AttributeKey[];
}

const LABEL_TO_KEY = Object.fromEntries(
  Object.entries(ATTRIBUTE_LABELS).map(([key, label]) => [label.toLowerCase(), key as AttributeKey])
);

/**
 * Faz o parse do campo `atributoEscolha` de um Clã (texto livre no formato
 * "+N à escolha entre A ou B", podendo ter várias cláusulas separadas por
 * vírgula — ver Estilo/Bakuton/Keton no catálogo). Melhor esforço: cláusulas
 * que não casem o padrão são ignoradas (ficam só como texto de referência).
 */
export function parseAttributeChoice(text: string | undefined): ParsedAttributeChoice[] {
  if (!text) return [];
  const clauses = text.split(",");
  const results: ParsedAttributeChoice[] = [];
  for (const clause of clauses) {
    const match = clause.match(/\+(\d+)\s*à escolha entre\s*([^,(]+)/i);
    if (!match) continue;
    const bonus = Number(match[1]);
    const namesPart = match[2];
    const opcoes = namesPart
      .split(/\s+ou\s+/i)
      .map((name) => LABEL_TO_KEY[name.trim().toLowerCase()])
      .filter((key): key is AttributeKey => Boolean(key));
    if (opcoes.length > 0) {
      results.push({ texto: clause.trim(), bonus, opcoes });
    }
  }
  return results;
}
