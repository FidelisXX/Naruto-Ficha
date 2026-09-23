"use client";

import type { Character, ConcentrationSlot } from "@/lib/character/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FieldLabel, NumberField, TextField } from "@/components/ui/Field";

/**
 * Até 2 jutsus de concentração simultâneos (Manual Shinobi, Cap. 9, p.192).
 * O jutsu catálogo ainda não existe (Fase 4), então os slots são texto
 * livre; "Pagar manutenção" desconta o custo do PC atual, lembrando a regra
 * de que o custo de manutenção é pago no início de cada turno.
 */
export function ConcentrationPanel({
  character,
  onUpdate,
}: {
  character: Character;
  onUpdate: (updater: (character: Character) => Character) => void;
}) {
  function setSlot(slot: "slot1" | "slot2", patch: Partial<ConcentrationSlot>) {
    onUpdate((c) => ({
      ...c,
      concentration: {
        ...c.concentration,
        [slot]: { ...c.concentration[slot], ...patch },
      },
    }));
  }

  function payUpkeep(slot: "slot1" | "slot2") {
    const custo = character.concentration[slot].custoManutencao;
    onUpdate((c) => ({
      ...c,
      vitals: { ...c.vitals, pcAtual: Math.max(0, c.vitals.pcAtual - custo) },
    }));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-chakra">Concentração</CardTitle>
        <p className="text-[11px] text-muted-foreground mt-1">
          Até 2 jutsus simultâneos. Manter custa metade do chakra de lançar (arredondado
          para baixo), pago no início de cada turno. Dano exige teste de Constituição
          (Controle de Chakra) — CD = maior entre (12 + rank do jutsu) e metade do dano
          sofrido.
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {(["slot1", "slot2"] as const).map((slot, i) => {
          const value = character.concentration[slot];
          return (
            <div key={slot} className="rounded-lg border border-border bg-surface-2 px-3 py-2">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Slot {i + 1}
              </p>
              <div className="flex gap-2 items-end">
                <div className="flex-1">
                  <FieldLabel htmlFor={`${slot}-nome`}>Jutsu</FieldLabel>
                  <TextField
                    id={`${slot}-nome`}
                    value={value.jutsuNome}
                    placeholder="Nome do jutsu"
                    onChange={(e) => setSlot(slot, { jutsuNome: e.target.value })}
                  />
                </div>
                <div className="w-24">
                  <FieldLabel htmlFor={`${slot}-custo`}>Manutenção</FieldLabel>
                  <NumberField
                    id={`${slot}-custo`}
                    value={value.custoManutencao}
                    min={0}
                    onChange={(e) => setSlot(slot, { custoManutencao: Number(e.target.value) || 0 })}
                  />
                </div>
              </div>
              {value.jutsuNome && (
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-2"
                  onClick={() => payUpkeep(slot)}
                >
                  Pagar manutenção (−{value.custoManutencao} PC)
                </Button>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
