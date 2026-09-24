"use client";

import { useMemo } from "react";
import type { Character } from "@/lib/character/schema";
import type { JutsuDefinition } from "@/lib/jutsu/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { QuickStatsRow } from "@/components/character/QuickStatsRow";
import { CombatStatsPanel } from "@/components/character/CombatStatsPanel";
import { ConditionsPanel } from "@/components/character/ConditionsPanel";
import { DeathSavesPanel } from "@/components/character/DeathSavesPanel";
import { JutsuCard } from "@/components/character/JutsuCard";
import { JUTSU_CATALOG } from "@/lib/catalog/jutsu";

/**
 * Fase 7 — "Modo Combate": tudo que se precisa numa mesa em combate,
 * empilhado e compacto, sem precisar trocar de aba (PV/PC, CA/Iniciativa/
 * Ataque, condições ativas e os jutsus conhecidos já com ataque/CD
 * calculados). Reaproveita os mesmos painéis/funções da aba Ficha e do
 * catálogo de Jutsu — nenhuma lógica de regra nova, só uma composição
 * diferente da UI.
 */
export function CombatModePanel({
  character,
  onUpdate,
}: {
  character: Character;
  onUpdate: (updater: (character: Character) => Character) => void;
}) {
  const knownJutsu: JutsuDefinition[] = useMemo(() => {
    const fromCatalog = character.knownJutsu
      .map((key) => JUTSU_CATALOG.find((j) => j.key === key))
      .filter((j): j is JutsuDefinition => Boolean(j));
    return [...character.customJutsu, ...fromCatalog];
  }, [character.knownJutsu, character.customJutsu]);

  return (
    <div className="flex flex-col gap-3">
      <QuickStatsRow character={character} onUpdate={onUpdate} />
      {character.vitals.pvAtual <= 0 && <DeathSavesPanel character={character} onUpdate={onUpdate} />}
      <CombatStatsPanel character={character} onUpdate={onUpdate} />
      <ConditionsPanel character={character} onUpdate={onUpdate} />

      <Card>
        <CardHeader>
          <CardTitle className="text-muted-foreground">Jutsus Prontos</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {knownJutsu.length === 0 ? (
            <p className="text-xs text-muted-foreground">
              Nenhum jutsu conhecido — adicione jutsus na aba &quot;Jutsu&quot;.
            </p>
          ) : (
            knownJutsu.map((j) => (
              <JutsuCard key={j.key} jutsu={j} character={character} isKnown compact />
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
