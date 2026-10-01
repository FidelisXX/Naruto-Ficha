"use client";

import { Minus, Plus } from "lucide-react";
import type { TalentDefinition } from "@/lib/talents/types";
import { Button } from "@/components/ui/Button";
import { CLASS_CATALOG } from "@/lib/catalog/classes";

export const TALENT_CATEGORY_LABELS: Record<TalentDefinition["categoria"], string> = {
  geral: "Geral",
  habilidade: "Habilidade",
  chakra: "Chakra",
  ninjutsu: "Ninjutsu",
  taijutsu: "Taijutsu",
  genjutsu: "Genjutsu",
  critico: "Crítico",
  classe: "Classe",
};

export function TalentCard({
  talent,
  isKnown,
  onToggleKnown,
}: {
  talent: TalentDefinition;
  isKnown: boolean;
  onToggleKnown: () => void;
}) {
  const classeNome = talent.classeKey
    ? CLASS_CATALOG.find((c) => c.key === talent.classeKey)?.nome
    : undefined;

  return (
    <div className="rounded-xl border border-border bg-surface-2 px-3 py-3 flex flex-col gap-2">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-sm font-semibold truncate">{talent.nome}</p>
          <p className="text-[11px] text-muted-foreground">
            {TALENT_CATEGORY_LABELS[talent.categoria]}
            {classeNome ? ` · ${classeNome}` : ""}
          </p>
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="px-2 py-1 shrink-0"
          onClick={onToggleKnown}
        >
          {isKnown ? <Minus size={14} /> : <Plus size={14} />}
        </Button>
      </div>

      {talent.preRequisito && (
        <p className="text-[11px] text-primary">Pré-requisito: {talent.preRequisito}</p>
      )}

      <p className="text-xs text-muted-foreground whitespace-pre-line">{talent.descricao}</p>
    </div>
  );
}
