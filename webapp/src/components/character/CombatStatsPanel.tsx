"use client";

import { Shield, Swords, Zap } from "lucide-react";
import type { Character } from "@/lib/character/schema";
import { ReadOnlyStatBlock } from "@/components/character/StatBlock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import {
  abilityModifier,
  armorClass,
  attackBonus,
  formatModifier,
  initiativeModifier,
  jutsuSaveDC,
  proficiencyBonusForLevel,
} from "@/lib/rules";

function promptNumber(message: string, current: number): number | null {
  const input = window.prompt(message, String(current));
  if (input === null) return null;
  const parsed = Number(input);
  return Number.isNaN(parsed) ? null : parsed;
}

export function CombatStatsPanel({
  character,
  onUpdate,
}: {
  character: Character;
  onUpdate: (updater: (character: Character) => Character) => void;
}) {
  const proficiencyBonus = proficiencyBonusForLevel(character.progression.nivel);
  const desMod = abilityModifier(character.attributes.des);
  const forMod = abilityModifier(character.attributes.for);
  const intMod = abilityModifier(character.attributes.int);
  const sabMod = abilityModifier(character.attributes.sab);

  const ca = armorClass(character.combat.armorBonus, desMod, proficiencyBonus);
  const iniciativa = initiativeModifier(desMod, proficiencyBonus, character.combat.initiativeBonus);
  const baseAtaque = attackBonus(forMod, proficiencyBonus);

  function setCombat(key: keyof Character["combat"], value: number) {
    onUpdate((c) => ({ ...c, combat: { ...c.combat, [key]: value } }));
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-3 gap-3">
        <ReadOnlyStatBlock
          icon={Shield}
          label="CA"
          colorClass="text-primary"
          value={String(ca)}
          sublabel={`armadura +${character.combat.armorBonus}`}
          onEdit={() => {
            const next = promptNumber("Bônus de Armadura:", character.combat.armorBonus);
            if (next !== null) setCombat("armorBonus", Math.max(0, next));
          }}
        />
        <ReadOnlyStatBlock
          icon={Zap}
          label="Iniciativa"
          colorClass="text-chakra"
          value={formatModifier(iniciativa)}
          sublabel={character.combat.initiativeBonus !== 0 ? `bônus ${formatModifier(character.combat.initiativeBonus)}` : "editar bônus"}
          onEdit={() => {
            const next = promptNumber("Bônus extra de Iniciativa:", character.combat.initiativeBonus);
            if (next !== null) setCombat("initiativeBonus", next);
          }}
        />
        <ReadOnlyStatBlock
          icon={Swords}
          label="Base Ataque"
          colorClass="text-accent"
          value={formatModifier(baseAtaque)}
          sublabel="arma ou punho"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-muted-foreground">Jutsu — Ataque e CD</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-3">
          <JutsuTypeStat label="Ninjutsu" mod={intMod} proficiencyBonus={proficiencyBonus} />
          <JutsuTypeStat label="Genjutsu" mod={sabMod} proficiencyBonus={proficiencyBonus} />
          <JutsuTypeStat label="Taijutsu" mod={forMod} proficiencyBonus={proficiencyBonus} />
        </CardContent>
      </Card>
    </div>
  );
}

function JutsuTypeStat({
  label,
  mod,
  proficiencyBonus,
}: {
  label: string;
  mod: number;
  proficiencyBonus: number;
}) {
  return (
    <div className="flex flex-col items-center gap-1 bg-surface-2 rounded-xl py-3">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p className="text-xl font-bold tabular-nums">{formatModifier(attackBonus(mod, proficiencyBonus))}</p>
      <p className="text-[10px] text-muted-foreground tabular-nums">
        CD {jutsuSaveDC(mod, proficiencyBonus)}
      </p>
    </div>
  );
}
