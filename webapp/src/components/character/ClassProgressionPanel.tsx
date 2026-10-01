"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Character } from "@/lib/character/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { CLASS_CATALOG } from "@/lib/catalog/classes";
import { getClassProgression } from "@/lib/catalog/classProgression";

function FeatureDisclosure({ nivel, nome, descricao }: { nivel: number; nome: string; descricao: string }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="border border-border rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-2 px-3 py-2 text-left text-sm font-semibold hover:bg-surface-2 transition-colors"
      >
        <span>
          <span className="text-primary">Nv.{nivel}</span> {nome}
        </span>
        <ChevronDown
          size={14}
          className={`shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-3 pb-3 text-xs text-muted-foreground whitespace-pre-wrap">{descricao}</div>
      )}
    </li>
  );
}

/**
 * Progressão nível-a-nível da classe (Observações do Orochimaru), lida a
 * partir de identity.classe/subClasse (nomes, não classeKey — mesmo lookup
 * usado em CatalogInfoPanel). Reaproveita o Card do CatalogInfoPanel, mas
 * com disclosure por característica em vez de texto sempre expandido,
 * porque uma progressão completa tem dezenas de características longas.
 */
export function ClassProgressionPanel({ character }: { character: Character }) {
  const klass = CLASS_CATALOG.find((c) => c.nome === character.identity.classe);
  const progression = klass ? getClassProgression(klass.key) : undefined;
  if (!klass || !progression) return null;

  const nivel = character.progression.nivel;
  const unlockedFeatures = progression.features
    .filter((f) => f.nivel <= nivel)
    .sort((a, b) => a.nivel - b.nivel);
  const nextFeature = progression.features
    .filter((f) => f.nivel > nivel)
    .sort((a, b) => a.nivel - b.nivel)[0];

  const subclass = progression.subclasses.find((s) => s.nome === character.identity.subClasse);
  const unlockedSubclassFeatures = subclass
    ? subclass.features.filter((f) => f.nivel <= nivel).sort((a, b) => a.nivel - b.nivel)
    : [];

  const currentLevelRow = progression.levels.find((l) => l.nivel === nivel);
  const extraColumns = currentLevelRow ? Object.entries(currentLevelRow.colunasExtras) : [];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-muted-foreground">Progressão de {klass.nome}</CardTitle>
        <p className="text-xs text-muted-foreground mt-1">
          {progression.nomeGrupoSubclasse}
          {subclass ? ` — ${subclass.nome}` : ""}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {extraColumns.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {extraColumns
              .filter(([, value]) => value && value !== "—")
              .map(([key, value]) => (
                <span
                  key={key}
                  className="text-xs text-muted-foreground bg-surface-2 rounded-full px-2.5 py-1"
                >
                  {key}: <span className="text-foreground font-semibold">{value}</span>
                </span>
              ))}
          </div>
        )}

        {!subclass && nivel >= progression.nivelEscolhaSubclasse && (
          <p className="text-[11px] text-accent">
            Escolha de {progression.nomeGrupoSubclasse} ainda não definida (campo &quot;Subclasse&quot; na
            Bio).
          </p>
        )}

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            Características de Classe
          </p>
          <ul className="flex flex-col gap-1.5">
            {unlockedFeatures.map((f) => (
              <FeatureDisclosure key={`${f.nivel}-${f.nome}`} nivel={f.nivel} nome={f.nome} descricao={f.descricao} />
            ))}
          </ul>
        </div>

        {subclass && unlockedSubclassFeatures.length > 0 && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
              {subclass.nome}
            </p>
            {subclass.descricaoIntro && (
              <p className="text-xs text-muted-foreground mb-2 whitespace-pre-wrap">
                {subclass.descricaoIntro}
              </p>
            )}
            <ul className="flex flex-col gap-1.5">
              {unlockedSubclassFeatures.map((f) => (
                <FeatureDisclosure
                  key={`sub-${f.nivel}-${f.nome}`}
                  nivel={f.nivel}
                  nome={f.nome}
                  descricao={f.descricao}
                />
              ))}
            </ul>
          </div>
        )}

        {nextFeature && (
          <p className="text-[11px] text-muted-foreground">
            Próxima característica: Nv.{nextFeature.nivel} {nextFeature.nome}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
