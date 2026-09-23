"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import type { Character } from "@/lib/character/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SelectField } from "@/components/ui/Field";
import {
  CONDITION_CATALOG,
  CONDITION_CATEGORY_LABELS,
  type ConditionCategory,
} from "@/lib/catalog/conditions";

export function ConditionsPanel({
  character,
  onUpdate,
}: {
  character: Character;
  onUpdate: (updater: (character: Character) => Character) => void;
}) {
  const [pendingKey, setPendingKey] = useState("");

  const active = character.conditions;
  const availableToAdd = CONDITION_CATALOG.filter(
    (c) => !active.some((a) => a.key === c.key)
  );

  function addCondition() {
    const def = CONDITION_CATALOG.find((c) => c.key === pendingKey);
    if (!def) return;
    onUpdate((c) => ({
      ...c,
      conditions: [...c.conditions, { key: def.key, graduacao: 1 }],
    }));
    setPendingKey("");
  }

  function removeCondition(key: string) {
    onUpdate((c) => ({ ...c, conditions: c.conditions.filter((cond) => cond.key !== key) }));
  }

  function setGraduacao(key: string, graduacao: number) {
    onUpdate((c) => ({
      ...c,
      conditions: c.conditions.map((cond) =>
        cond.key === key ? { ...cond, graduacao: Math.max(1, graduacao) } : cond
      ),
    }));
  }

  const byCategory = availableToAdd.reduce<Record<ConditionCategory, typeof availableToAdd>>(
    (acc, def) => {
      (acc[def.categoria] ??= []).push(def);
      return acc;
    },
    {} as Record<ConditionCategory, typeof availableToAdd>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-muted-foreground">Condições Ativas</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {active.length === 0 ? (
          <p className="text-xs text-muted-foreground">Nenhuma condição ativa.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {active.map((cond) => {
              const def = CONDITION_CATALOG.find((c) => c.key === cond.key);
              if (!def) return null;
              return (
                <li
                  key={cond.key}
                  className="flex items-start gap-2 rounded-lg border border-border bg-surface-2 px-3 py-2"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold">{def.nome}</span>
                      <span className="text-[10px] uppercase tracking-wide text-muted-foreground">
                        {CONDITION_CATEGORY_LABELS[def.categoria]}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{def.resumo}</p>
                    {def.comoRemover && (
                      <p className="text-[11px] text-primary mt-1">Remover: {def.comoRemover}</p>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    {def.graduavel && (
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setGraduacao(cond.key, cond.graduacao - 1)}
                          className="w-6 h-6 rounded-md border border-border bg-background text-sm cursor-pointer hover:bg-muted"
                        >
                          −
                        </button>
                        <span className="text-sm font-semibold tabular-nums w-6 text-center">
                          {cond.graduacao}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setGraduacao(
                              cond.key,
                              def.graduacaoMax
                                ? Math.min(def.graduacaoMax, cond.graduacao + 1)
                                : cond.graduacao + 1
                            )
                          }
                          className="w-6 h-6 rounded-md border border-border bg-background text-sm cursor-pointer hover:bg-muted"
                        >
                          +
                        </button>
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => removeCondition(cond.key)}
                      className="text-muted-foreground hover:text-accent cursor-pointer"
                      aria-label={`Remover ${def.nome}`}
                    >
                      <X size={16} />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        {availableToAdd.length > 0 && (
          <div className="flex gap-1.5 items-end pt-1 border-t border-border">
            <div className="flex-1">
              <SelectField
                className="mt-2"
                value={pendingKey}
                onChange={(e) => setPendingKey(e.target.value)}
              >
                <option value="">Adicionar condição…</option>
                {(Object.keys(CONDITION_CATEGORY_LABELS) as ConditionCategory[]).map(
                  (cat) =>
                    byCategory[cat]?.length && (
                      <optgroup key={cat} label={CONDITION_CATEGORY_LABELS[cat]}>
                        {byCategory[cat].map((def) => (
                          <option key={def.key} value={def.key}>
                            {def.nome}
                          </option>
                        ))}
                      </optgroup>
                    )
                )}
              </SelectField>
            </div>
            <Button variant="secondary" size="sm" onClick={addCondition} disabled={!pendingKey}>
              <Plus size={14} />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
