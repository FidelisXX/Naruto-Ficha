"use client";

import type { Character } from "@/lib/character/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FieldLabel, SelectField } from "@/components/ui/Field";
import { formatModifier } from "@/lib/rules";
import { ARMOR_CATALOG, ARMOR_CATEGORY_LABELS, WEAPON_CATALOG } from "@/lib/catalog/equipment";

export function EquipmentPanel({
  character,
  onUpdate,
}: {
  character: Character;
  onUpdate: (updater: (character: Character) => Character) => void;
}) {
  const armadura = ARMOR_CATALOG.find((a) => a.key === character.equipment.armaduraKey);
  const arma = WEAPON_CATALOG.find((w) => w.key === character.equipment.armaPrincipalKey);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-muted-foreground">Armadura e Arma</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div>
          <FieldLabel htmlFor="armadura-select">Armadura equipada</FieldLabel>
          <SelectField
            id="armadura-select"
            value={character.equipment.armaduraKey ?? ""}
            onChange={(e) =>
              onUpdate((c) => ({
                ...c,
                equipment: { ...c.equipment, armaduraKey: e.target.value || undefined },
              }))
            }
          >
            <option value="">Nenhuma</option>
            {(["leve", "media", "pesada"] as const).map((cat) => (
              <optgroup key={cat} label={ARMOR_CATEGORY_LABELS[cat]}>
                {ARMOR_CATALOG.filter((a) => a.categoria === cat).map((a) => (
                  <option key={a.key} value={a.key}>
                    {a.nome} ({formatModifier(a.bonusArmadura)} CA)
                  </option>
                ))}
              </optgroup>
            ))}
          </SelectField>
          {armadura && (
            <div className="mt-2 rounded-lg border border-border bg-surface-2 px-3 py-2 text-xs flex flex-col gap-1">
              <p>
                Bônus de armadura {formatModifier(armadura.bonusArmadura)} · DES {armadura.bonusDes} ·
                Volume {armadura.volume} · {armadura.custo}
              </p>
              {armadura.efeito && <p className="text-muted-foreground">Efeito: {armadura.efeito}</p>}
              <Button
                variant="secondary"
                size="sm"
                className="self-start mt-1"
                onClick={() =>
                  onUpdate((c) => ({
                    ...c,
                    combat: { ...c.combat, armorBonus: armadura.bonusArmadura },
                  }))
                }
              >
                Usar {formatModifier(armadura.bonusArmadura)} como Bônus de Armadura
              </Button>
            </div>
          )}
        </div>

        <div>
          <FieldLabel htmlFor="arma-select">Arma principal</FieldLabel>
          <SelectField
            id="arma-select"
            value={character.equipment.armaPrincipalKey ?? ""}
            onChange={(e) =>
              onUpdate((c) => ({
                ...c,
                equipment: { ...c.equipment, armaPrincipalKey: e.target.value || undefined },
              }))
            }
          >
            <option value="">Nenhuma</option>
            {WEAPON_CATALOG.map((w) => (
              <option key={w.key} value={w.key}>
                {w.nome} ({w.dano})
              </option>
            ))}
          </SelectField>
          {arma && (
            <div className="mt-2 rounded-lg border border-border bg-surface-2 px-3 py-2 text-xs flex flex-col gap-1">
              <p>
                Dano {arma.dano} {arma.tipoDano} · Volume {arma.volume} · {arma.custo}
              </p>
              {arma.propriedades.length > 0 && (
                <p className="text-muted-foreground">{arma.propriedades.join(", ")}</p>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
