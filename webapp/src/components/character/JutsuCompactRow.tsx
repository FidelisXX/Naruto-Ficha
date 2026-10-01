"use client";

import { ChevronRight, Minus, Trash2 } from "lucide-react";
import type { JutsuDefinition } from "@/lib/jutsu/types";
import { JUTSU_TIPO_LABELS } from "@/lib/jutsu/types";
import { Button } from "@/components/ui/Button";
import { RANK_COLOR } from "@/components/character/JutsuCard";

/**
 * Linha compacta para "Jutsus Conhecidos" — o texto completo (full
 * JutsuCard) ocupava tela demais quando o personagem já tem vários jutsu;
 * aqui só o essencial, com o detalhe completo acessível via popup (ver
 * JutsuDetailModal) em vez de sempre expandido.
 */
export function JutsuCompactRow({
  jutsu,
  onExpand,
  onRemove,
  onDelete,
}: {
  jutsu: JutsuDefinition;
  onExpand: () => void;
  /** Toggle de "conhecido" (jutsu de catálogo). */
  onRemove?: () => void;
  /** Excluir (jutsu customizado), no lugar do toggle. */
  onDelete?: () => void;
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-3 py-2">
      <button
        type="button"
        onClick={onExpand}
        className="flex-1 min-w-0 flex items-center gap-2 text-left cursor-pointer"
      >
        <span
          className={`text-[10px] font-bold uppercase tracking-wide border rounded-md px-1.5 py-0.5 shrink-0 ${RANK_COLOR[jutsu.rank]}`}
        >
          {jutsu.rank}
        </span>
        <span className="min-w-0 flex-1">
          <span className="text-sm font-semibold truncate block">{jutsu.nome}</span>
          <span className="text-[11px] text-muted-foreground">
            {jutsu.custoChakraTexto ?? `${jutsu.custoChakra} Chakra`} · {JUTSU_TIPO_LABELS[jutsu.tipo]}
          </span>
        </span>
        <ChevronRight size={16} className="text-muted-foreground shrink-0" />
      </button>
      <Button
        type="button"
        variant="secondary"
        size="sm"
        className="px-2 py-1 shrink-0"
        onClick={onDelete ?? onRemove}
      >
        {onDelete ? <Trash2 size={14} /> : <Minus size={14} />}
      </Button>
    </div>
  );
}
