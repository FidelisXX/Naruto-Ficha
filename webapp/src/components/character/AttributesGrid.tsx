"use client";

import type { Character } from "@/lib/character/schema";
import { Card } from "@/components/ui/Card";
import { Stepper } from "@/components/ui/Stepper";
import { ATTRIBUTE_KEYS, ATTRIBUTE_LABELS, abilityModifier, formatModifier } from "@/lib/rules";
import { ATTRIBUTE_ICONS } from "@/lib/attributeIcons";

export function AttributesGrid({
  character,
  onUpdate,
}: {
  character: Character;
  onUpdate: (updater: (character: Character) => Character) => void;
}) {
  function setScore(key: (typeof ATTRIBUTE_KEYS)[number], value: number) {
    onUpdate((c) => ({ ...c, attributes: { ...c.attributes, [key]: value } }));
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {ATTRIBUTE_KEYS.map((key) => {
        const score = character.attributes[key];
        const modifier = abilityModifier(score);
        const Icon = ATTRIBUTE_ICONS[key];
        return (
          <Card key={key} className="px-3 py-3 flex flex-col items-center gap-2">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              <Icon size={13} className="text-primary" />
              {ATTRIBUTE_LABELS[key]}
            </div>
            <Stepper value={score} min={1} max={30} onChange={(v) => setScore(key, v)} />
            <span className="text-xs font-bold px-2 py-0.5 rounded-full border border-primary/40 text-primary tabular-nums">
              {formatModifier(modifier)}
            </span>
          </Card>
        );
      })}
    </div>
  );
}
