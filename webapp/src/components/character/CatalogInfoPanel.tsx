"use client";

import type { Character } from "@/lib/character/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CLASS_CATALOG, suggestedMaxFromDie } from "@/lib/catalog/classes";
import { BACKGROUND_CATALOG } from "@/lib/catalog/backgrounds";
import { CLAN_CATALOG } from "@/lib/catalog/clans";
import { abilityModifier, ATTRIBUTE_LABELS, formatModifier } from "@/lib/rules";

export function CatalogInfoPanel({
  character,
  onUpdate,
}: {
  character: Character;
  onUpdate: (updater: (character: Character) => Character) => void;
}) {
  const clan = CLAN_CATALOG.find((c) => c.nome === character.identity.cla);
  const klass = CLASS_CATALOG.find((c) => c.nome === character.identity.classe);
  const background = BACKGROUND_CATALOG.find((b) => b.nome === character.identity.antecedente);

  if (!clan && !klass && !background) return null;

  const conMod = abilityModifier(character.attributes.con);

  return (
    <div className="flex flex-col gap-3">
      {klass && (
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground">{klass.nome}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm flex flex-col gap-2">
            <p className="text-muted-foreground">
              Dado de Vida d{klass.hitDie} · Dado de Chakra d{klass.chakraDie} · Nível de Jutsu:{" "}
              {klass.nivelDeJutsu}
            </p>
            <p className="text-muted-foreground">
              Salvaguardas: {klass.salvaguardas.map((a) => ATTRIBUTE_LABELS[a]).join(" e ")}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <Button
                variant="secondary"
                size="sm"
                onClick={() =>
                  onUpdate((c) => ({
                    ...c,
                    vitals: {
                      ...c.vitals,
                      pvMax: suggestedMaxFromDie(klass.hitDie, c.progression.nivel, conMod),
                      pcMax: suggestedMaxFromDie(klass.chakraDie, c.progression.nivel, conMod),
                    },
                  }))
                }
              >
                Usar PV/PC sugeridos
              </Button>
              <span className="text-xs text-muted-foreground tabular-nums">
                PV {suggestedMaxFromDie(klass.hitDie, character.progression.nivel, conMod)} · PC{" "}
                {suggestedMaxFromDie(klass.chakraDie, character.progression.nivel, conMod)}
              </span>
            </div>
          </CardContent>
        </Card>
      )}

      {clan && (
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground">{clan.nome}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm flex flex-col gap-2">
            <p className="text-muted-foreground">{clan.resumo}</p>
            {(Object.keys(clan.atributos).length > 0 || clan.atributoEscolha) && (
              <p>
                Bônus de atributo:{" "}
                {Object.entries(clan.atributos)
                  .map(([key, value]) => `${formatModifier(value ?? 0)} ${ATTRIBUTE_LABELS[key as keyof typeof ATTRIBUTE_LABELS]}`)
                  .join(", ")}
                {clan.atributoEscolha ? (Object.keys(clan.atributos).length > 0 ? `, ${clan.atributoEscolha}` : clan.atributoEscolha) : ""}
              </p>
            )}
            {!clan.bonusCompleto && (
              <p className="text-[11px] text-accent">
                Bônus de atributo de clã não localizado no texto-fonte para este clã.
              </p>
            )}
            {clan.tracos.length > 0 && (
              <ul className="flex flex-col gap-1.5 mt-1">
                {clan.tracos.map((trait) => (
                  <li key={trait.nome} className="text-xs">
                    <span className="text-primary font-semibold">Nv.{trait.nivel} {trait.nome}</span>
                    {" — "}
                    <span className="text-muted-foreground">{trait.resumo}</span>
                  </li>
                ))}
              </ul>
            )}
            {clan.talentos.length > 0 && (
              <>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-2">
                  Talentos de Clã
                </p>
                <ul className="flex flex-col gap-1.5">
                  {clan.talentos.map((talent) => (
                    <li key={talent.nome} className="text-xs">
                      <span className="text-primary font-semibold">{talent.nome}</span>
                      <span className="text-muted-foreground"> ({talent.preRequisito})</span>
                      {" — "}
                      <span className="text-muted-foreground">{talent.resumo}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </CardContent>
        </Card>
      )}

      {background && (
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground">{background.nome}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm flex flex-col gap-1 text-muted-foreground">
            <p>Perícias: {background.pericias}</p>
            <p>Kit: {background.kit}</p>
            {background.recurso && <p>Recurso: {background.recurso}</p>}
            <p className="text-[11px]">
              + escolha entre +1 em atributo(s) ou um Talento (marque manualmente).
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
