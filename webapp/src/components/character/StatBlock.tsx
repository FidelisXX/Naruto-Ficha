"use client";

import type { LucideIcon } from "lucide-react";
import { clsx } from "clsx";
import { Stepper } from "@/components/ui/Stepper";
import { Card } from "@/components/ui/Card";

/** Card compacto: ícone + rótulo + stepper, usado nas linhas de estatísticas rápidas. */
export function StatBlock({
  icon: Icon,
  label,
  colorClass,
  value,
  max,
  temp,
  onChange,
  onEditMax,
}: {
  icon: LucideIcon;
  label: string;
  colorClass: string;
  value: number;
  max?: number;
  temp?: number;
  onChange: (value: number) => void;
  onEditMax?: () => void;
}) {
  return (
    <Card className="px-2 py-3 flex flex-col items-center gap-1">
      <div
        className={clsx(
          "flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest",
          colorClass
        )}
      >
        <Icon size={12} />
        {label}
      </div>
      <Stepper size="sm" value={value} min={0} max={max} onChange={onChange} />
      {max !== undefined && (
        <button
          type="button"
          onClick={onEditMax}
          className="text-[10px] text-muted-foreground tabular-nums cursor-pointer hover:text-primary"
        >
          / {max}
          {!!temp && <span className="text-success"> (+{temp})</span>}
        </button>
      )}
    </Card>
  );
}

/** Card compacto somente leitura: ícone + rótulo + valor calculado (sem stepper). */
export function ReadOnlyStatBlock({
  icon: Icon,
  label,
  colorClass,
  value,
  sublabel,
  onEdit,
}: {
  icon: LucideIcon;
  label: string;
  colorClass: string;
  value: string;
  sublabel?: string;
  onEdit?: () => void;
}) {
  return (
    <Card className="px-2 py-3 flex flex-col items-center gap-1">
      <div
        className={clsx(
          "flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest",
          colorClass
        )}
      >
        <Icon size={12} />
        {label}
      </div>
      <p className="text-3xl font-bold tabular-nums">{value}</p>
      {sublabel && (
        <button
          type="button"
          onClick={onEdit}
          disabled={!onEdit}
          className="text-[10px] text-muted-foreground tabular-nums enabled:cursor-pointer enabled:hover:text-primary"
        >
          {sublabel}
        </button>
      )}
    </Card>
  );
}
