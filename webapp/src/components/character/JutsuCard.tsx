"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import type { Character } from "@/lib/character/schema";
import type { JutsuDefinition } from "@/lib/jutsu/types";
import { JUTSU_NATUREZA_LABELS, JUTSU_TIPO_LABELS } from "@/lib/jutsu/types";
import { Button } from "@/components/ui/Button";
import {
  abilityModifier,
  attackBonus,
  formatModifier,
  jutsuSaveDC,
  proficiencyBonusForLevel,
} from "@/lib/rules";

/** Atributo usado por cada tipo de jutsu (Manual Shinobi: Ninshou=Int, Ilusões=Sab, Artes Marciais=For). */
const TIPO_ATTRIBUTE: Record<JutsuDefinition["tipo"], "int" | "sab" | "for"> = {
  ninjutsu: "int",
  genjutsu: "sab",
  taijutsu: "for",
  bukijutsu: "for",
};

const RANK_COLOR: Record<JutsuDefinition["rank"], string> = {
  E: "text-muted-foreground border-border",
  D: "text-success border-success/40",
  C: "text-primary border-primary/40",
  B: "text-chakra border-chakra/40",
  A: "text-accent border-accent/40",
  S: "text-hp border-hp/40",
};

export function JutsuCard({
  jutsu,
  character,
  isKnown,
  onToggleKnown,
  onDelete,
  compact,
}: {
  jutsu: JutsuDefinition;
  character: Character;
  isKnown: boolean;
  onToggleKnown?: () => void;
  /** Quando presente, renderiza um botão de excluir no lugar do toggle de "conhecido" (jutsu customizado). */
  onDelete?: () => void;
  /** Modo compacto (Modo Combate): esconde descrição/palavras-chave e o botão de ação, só o essencial pra rolar. */
  compact?: boolean;
}) {
  const proficiencyBonus = proficiencyBonusForLevel(character.progression.nivel);
  const attribute = TIPO_ATTRIBUTE[jutsu.tipo];
  const mod = abilityModifier(character.attributes[attribute]);

  return (
    <div className="rounded-xl border border-border bg-surface-2 px-3 py-3 flex flex-col gap-2">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-sm font-semibold truncate">{jutsu.nome}</p>
          <p className="text-[11px] text-muted-foreground">
            {JUTSU_TIPO_LABELS[jutsu.tipo]}
            {jutsu.natureza ? ` · ${JUTSU_NATUREZA_LABELS[jutsu.natureza]}` : ""}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span
            className={`text-[11px] font-bold uppercase tracking-wide border rounded-md px-1.5 py-0.5 ${RANK_COLOR[jutsu.rank]}`}
          >
            Rank {jutsu.rank}
          </span>
          {!compact &&
            (onDelete ? (
              <Button variant="secondary" size="sm" className="px-2 py-1" onClick={onDelete}>
                <Trash2 size={14} />
              </Button>
            ) : (
              <Button variant="secondary" size="sm" className="px-2 py-1" onClick={onToggleKnown}>
                {isKnown ? <Minus size={14} /> : <Plus size={14} />}
              </Button>
            ))}
        </div>
      </div>

      {!compact && (
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
          <p>Conjuração: {jutsu.tempoConjuracao}</p>
          <p>Alcance: {jutsu.alcance}</p>
          <p>Duração: {jutsu.duracao}</p>
          <p>Componentes: {jutsu.componentes.join(", ") || "—"}</p>
        </div>
      )}

      <div className="flex items-center gap-3 text-xs">
        <span className="text-chakra font-semibold">{jutsu.custoChakra} Chakra</span>
        <span className="text-muted-foreground">
          Ataque {formatModifier(attackBonus(mod, proficiencyBonus))} · CD {jutsuSaveDC(mod, proficiencyBonus)}
        </span>
      </div>

      {!compact && jutsu.palavrasChave.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {jutsu.palavrasChave.map((kw) => (
            <span
              key={kw}
              className="text-[10px] uppercase tracking-wide text-primary bg-primary/10 rounded px-1.5 py-0.5"
            >
              {kw}
            </span>
          ))}
        </div>
      )}

      {!compact && <p className="text-xs text-muted-foreground whitespace-pre-line">{jutsu.descricao}</p>}
      {!compact && jutsu.emNiveisSuperiores && (
        <p className="text-[11px] text-primary">Em Níveis Superiores: {jutsu.emNiveisSuperiores}</p>
      )}
    </div>
  );
}
