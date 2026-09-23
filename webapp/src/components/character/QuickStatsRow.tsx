"use client";

import { Heart, Zap } from "lucide-react";
import type { Character } from "@/lib/character/schema";
import { StatBlock } from "@/components/character/StatBlock";

function editMax(current: number, label: string): number | null {
  const input = window.prompt(`${label} máximo:`, String(current));
  if (input === null) return null;
  const parsed = Number(input);
  return Number.isNaN(parsed) ? null : Math.max(0, parsed);
}

export function QuickStatsRow({
  character,
  onUpdate,
}: {
  character: Character;
  onUpdate: (updater: (character: Character) => Character) => void;
}) {
  const { pvMax, pvAtual, pvTemp, pcMax, pcAtual, pcTemp } = character.vitals;

  function setVital(key: keyof Character["vitals"], value: number) {
    onUpdate((c) => ({ ...c, vitals: { ...c.vitals, [key]: value } }));
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      <StatBlock
        icon={Heart}
        label="PV"
        colorClass="text-hp"
        value={pvAtual}
        max={pvMax}
        temp={pvTemp}
        onChange={(v) => setVital("pvAtual", v)}
        onEditMax={() => {
          const next = editMax(pvMax, "PV");
          if (next !== null) setVital("pvMax", next);
        }}
      />
      <StatBlock
        icon={Zap}
        label="PC"
        colorClass="text-chakra"
        value={pcAtual}
        max={pcMax}
        temp={pcTemp}
        onChange={(v) => setVital("pcAtual", v)}
        onEditMax={() => {
          const next = editMax(pcMax, "PC");
          if (next !== null) setVital("pcMax", next);
        }}
      />
    </div>
  );
}
