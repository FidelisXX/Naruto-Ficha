import type { JutsuDefinition } from "@/lib/jutsu/types";
import { naoElementalJutsu } from "@/lib/catalog/jutsu/naoElemental";
import { fogoJutsu } from "@/lib/catalog/jutsu/fogo";
import { aguaJutsu } from "@/lib/catalog/jutsu/agua";
import { terraJutsu } from "@/lib/catalog/jutsu/terra";
import { ventoJutsu } from "@/lib/catalog/jutsu/vento";
import { bukijutsuJutsu } from "@/lib/catalog/jutsu/bukijutsu";
import { genjutsuPart1 } from "@/lib/catalog/jutsu/genjutsu1";
import { genjutsuPart2 } from "@/lib/catalog/jutsu/genjutsu2";

/**
 * Catálogo inicial de Jutsu — Anotações do Jiraya (compêndio de jutsus
 * prontos). Escopo da primeira leva: Rank E e Rank D em todas as
 * categorias (o nível de entrada para personagens 1-4), cobrindo Ninjutsu
 * (Não Elemental, Médico e os 5 Estilos), Genjutsu, Taijutsu e Bukijutsu.
 * Rank C→S e os Jutsus de Invocação ficam para uma leva futura — o livro
 * tem ~758 jutsus ao todo, catalogar tudo de uma vez não seria viável.
 *
 * Status desta leva (ver ROADMAP.md): Não Elemental, Estilo Fogo, Estilo
 * Água, Estilo Terra, Estilo Vento, Bukijutsu (1ª metade) e Genjutsu
 * completos. Ainda pendentes: Ninjutsu Médico, Estilo Relâmpago, Taijutsu
 * (dados já extraídos, aguardando merge) e Bukijutsu (2ª metade).
 */
export const JUTSU_CATALOG: JutsuDefinition[] = [
  ...naoElementalJutsu,
  ...fogoJutsu,
  ...aguaJutsu,
  ...terraJutsu,
  ...ventoJutsu,
  ...bukijutsuJutsu,
  ...genjutsuPart1,
  ...genjutsuPart2,
];
