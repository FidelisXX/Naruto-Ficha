"use client";

import { Minus, Plus } from "lucide-react";
import { clsx } from "clsx";

export function Stepper({
  value,
  onChange,
  min,
  max,
  step = 1,
  size = "md",
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  size?: "sm" | "md" | "lg";
}) {
  function clamp(next: number) {
    let v = next;
    if (min !== undefined) v = Math.max(min, v);
    if (max !== undefined) v = Math.min(max, v);
    return v;
  }

  const numberSize = {
    sm: "text-xl w-10",
    md: "text-3xl w-14",
    lg: "text-4xl w-16",
  }[size];

  const buttonSize = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-9 h-9",
  }[size];

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        type="button"
        aria-label="Diminuir"
        onClick={() => onChange(clamp(value - step))}
        className={clsx(
          buttonSize,
          "shrink-0 rounded-full flex items-center justify-center bg-surface-2 text-muted-foreground hover:text-primary hover:bg-surface transition-colors cursor-pointer"
        )}
      >
        <Minus size={14} strokeWidth={3} />
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          const parsed = Number(e.target.value);
          onChange(Number.isNaN(parsed) ? (min ?? 0) : clamp(parsed));
        }}
        className={clsx(
          numberSize,
          "bg-transparent text-center font-bold tabular-nums outline-none"
        )}
      />
      <button
        type="button"
        aria-label="Aumentar"
        onClick={() => onChange(clamp(value + step))}
        className={clsx(
          buttonSize,
          "shrink-0 rounded-full flex items-center justify-center bg-surface-2 text-muted-foreground hover:text-primary hover:bg-surface transition-colors cursor-pointer"
        )}
      >
        <Plus size={14} strokeWidth={3} />
      </button>
    </div>
  );
}
