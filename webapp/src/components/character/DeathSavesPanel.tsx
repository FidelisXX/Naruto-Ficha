"use client";

import { clsx } from "clsx";
import type { Character } from "@/lib/character/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export function DeathSavesPanel({
  character,
  onUpdate,
}: {
  character: Character;
  onUpdate: (updater: (character: Character) => Character) => void;
}) {
  const { successes, failures } = character.deathSaves;

  function setDeathSave(key: keyof Character["deathSaves"], value: number) {
    onUpdate((c) => ({ ...c, deathSaves: { ...c.deathSaves, [key]: value } }));
  }

  return (
    <Card className="border-hp/40">
      <CardHeader>
        <CardTitle className="text-hp">Teste de Resistência à Morte</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-10">
        <DotRow
          label="Sucessos"
          count={successes}
          colorClass="bg-success border-success"
          onChange={(v) => setDeathSave("successes", v)}
        />
        <DotRow
          label="Falhas"
          count={failures}
          colorClass="bg-hp border-hp"
          onChange={(v) => setDeathSave("failures", v)}
        />
      </CardContent>
    </Card>
  );
}

function DotRow({
  label,
  count,
  colorClass,
  onChange,
}: {
  label: string;
  count: number;
  colorClass: string;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </p>
      <div className="flex gap-2">
        {[1, 2, 3].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(count === n ? n - 1 : n)}
            className={clsx(
              "w-6 h-6 rounded-full border-2 cursor-pointer transition-colors",
              n <= count ? colorClass : "border-border bg-transparent"
            )}
            aria-label={`${label} ${n}`}
          />
        ))}
      </div>
    </div>
  );
}
