"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";
import type { Character } from "@/lib/character/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FieldLabel, NumberField, SelectField, TextField } from "@/components/ui/Field";
import { JUTSU_CATALOG } from "@/lib/catalog/jutsu";
import type { JutsuDefinition } from "@/lib/jutsu/types";
import { familyOfTipo } from "@/lib/jutsuCreation/types";
import { COMPONENT_CUSTOMIZATION_RULES } from "@/lib/jutsuCreation/customizacao/componentes";
import { KEYWORD_CUSTOMIZATION_RULES, KEYWORD_REMOVAL_RESTRICTIONS } from "@/lib/jutsuCreation/customizacao/palavrasChave";
import { AREA_INCREMENT_RULE, RANGE_INCREMENT_COST, RANGE_TIER_RULES } from "@/lib/jutsuCreation/customizacao/alcance";
import { EFFECT_CUSTOMIZATION_RULES } from "@/lib/jutsuCreation/customizacao/efeitos";
import { DIE_AVERAGE } from "@/lib/jutsuCreation/customizacao/types";
import {
  assembleChangeLog,
  blankCustomizationDraft,
  computeFinalRank,
  totalDelta,
  toggleChange,
  type CustomizationDraft,
} from "@/lib/jutsuCreation/customizacao/compute";

const STEP_LABELS = ["Jutsu base", "Componentes", "Palavras-chave", "Alcance", "Efeitos", "Finalizar"];
const DICE_OPTIONS = Object.keys(DIE_AVERAGE) as (keyof typeof DIE_AVERAGE)[];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function JutsuCustomizeWizard({
  character,
  onUpdate,
}: {
  character: Character;
  onUpdate: (updater: (character: Character) => Character) => void;
}) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState<CustomizationDraft>(blankCustomizationDraft());
  const [busca, setBusca] = useState("");

  const allKnownJutsu: JutsuDefinition[] = useMemo(
    () => [...character.customJutsu, ...JUTSU_CATALOG.filter((j) => character.knownJutsu.includes(j.key))],
    [character.customJutsu, character.knownJutsu]
  );

  const baseJutsu = useMemo(() => allKnownJutsu.find((j) => j.key === draft.baseJutsuKey) ?? null, [allKnownJutsu, draft.baseJutsuKey]);
  const family = baseJutsu ? familyOfTipo(baseJutsu.tipo) : null;

  const filtered = useMemo(() => {
    const q = busca.trim().toLowerCase();
    if (!q) return allKnownJutsu;
    return allKnownJutsu.filter((j) => j.nome.toLowerCase().includes(q));
  }, [allKnownJutsu, busca]);

  function updateDraft(patch: Partial<CustomizationDraft>) {
    setDraft((d) => ({ ...d, ...patch }));
  }

  const delta = totalDelta(draft);
  const result = computeFinalRank(baseJutsu, draft);
  const changeLog = useMemo(() => assembleChangeLog(draft), [draft]);

  function handleSalvar() {
    if (!baseJutsu) return;
    const nome = draft.novoNome.trim() || `${baseJutsu.nome} (Customizado)`;
    const key = `custom-${slugify(nome) || "jutsu"}-${nanoid(6)}`;
    const jutsu: JutsuDefinition = {
      ...baseJutsu,
      key,
      nome,
      rank: result.rank ?? baseJutsu.rank,
      custoChakra: Math.max(0, result.finalCustoChakra),
      descricao: `${baseJutsu.descricao}\n\n[Personalização de "${baseJutsu.nome}"]\n${changeLog || "(nenhuma modificação)"}`,
    };
    onUpdate((c) => ({ ...c, customJutsu: [...c.customJutsu, jutsu] }));
    router.push(`/personagem/${character.id}`);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted-foreground">
        {STEP_LABELS.map((label, i) => (
          <span key={label} className={i === step ? "text-primary font-semibold" : ""}>
            {i + 1}. {label}
            {i < STEP_LABELS.length - 1 ? " → " : ""}
          </span>
        ))}
      </div>

      {step === 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground">Passo 1 — Escolha o jutsu base</CardTitle>
            <p className="text-[11px] text-muted-foreground mt-1">
              Só jutsus que o personagem já conhece (catálogo ou customizados) podem ser personalizados.
            </p>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <TextField placeholder="Buscar por nome..." value={busca} onChange={(e) => setBusca(e.target.value)} />
            <div className="flex flex-col gap-1 max-h-[400px] overflow-y-auto">
              {filtered.map((j) => (
                <label
                  key={j.key}
                  className={`flex items-center justify-between gap-2 text-xs border rounded-md px-3 py-2 cursor-pointer ${
                    draft.baseJutsuKey === j.key ? "border-primary text-primary" : "border-border"
                  }`}
                >
                  <span>
                    {j.nome} <span className="text-muted-foreground">— Rank {j.rank} · {j.custoChakra} Chakra</span>
                  </span>
                  <input
                    type="radio"
                    name="base-jutsu"
                    checked={draft.baseJutsuKey === j.key}
                    onChange={() => updateDraft({ baseJutsuKey: j.key })}
                  />
                </label>
              ))}
              {filtered.length === 0 && <p className="text-xs text-muted-foreground">Nenhum jutsu conhecido encontrado.</p>}
            </div>
          </CardContent>
        </Card>
      )}

      {step === 1 && baseJutsu && (
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground">Passo 2 — Modificando Componentes</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {COMPONENT_CUSTOMIZATION_RULES.map((rule) => {
              const current = draft.componentChanges.find((c) => c.key === rule.key);
              return (
                <div key={rule.key} className="rounded-lg border border-border px-3 py-2 flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold">{rule.nome}</p>
                    <p className="text-[10px] text-muted-foreground">
                      Remover: {rule.custoRemover ?? "—"} chakra · Adicionar: {rule.custoAdicionar ?? "—"} chakra · {rule.tdiSemanas} semana(s) de TdI
                    </p>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    <Button
                      variant={current?.action === "remove" ? "primary" : "secondary"}
                      size="sm"
                      className="px-2 py-1"
                      onClick={() => updateDraft({ componentChanges: toggleChange(draft.componentChanges, rule.key, "remove") })}
                    >
                      Remover
                    </Button>
                    <Button
                      variant={current?.action === "add" ? "primary" : "secondary"}
                      size="sm"
                      className="px-2 py-1"
                      onClick={() => updateDraft({ componentChanges: toggleChange(draft.componentChanges, rule.key, "add") })}
                    >
                      Adicionar
                    </Button>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      )}

      {step === 2 && baseJutsu && family && (
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground">Passo 3 — Modificando Palavras-chave Principais</CardTitle>
            <p className="text-[11px] text-primary mt-1">{KEYWORD_REMOVAL_RESTRICTIONS[family]}</p>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 max-h-[500px] overflow-y-auto">
            {KEYWORD_CUSTOMIZATION_RULES.map((rule) => {
              const current = draft.keywordChanges.find((c) => c.key === rule.key);
              return (
                <div key={rule.key} className="rounded-lg border border-border px-3 py-2 flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-xs font-semibold">{rule.nome}</p>
                      <p className="text-[10px] text-muted-foreground">
                        Remover: {rule.custoRemover ?? "não permitido"} chakra · Adicionar: {rule.custoAdicionar ?? "não permitido"} chakra · {rule.tdiSemanas} semana(s)
                      </p>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <Button
                        variant={current?.action === "remove" ? "primary" : "secondary"}
                        size="sm"
                        className="px-2 py-1"
                        disabled={rule.custoRemover === null}
                        onClick={() => updateDraft({ keywordChanges: toggleChange(draft.keywordChanges, rule.key, "remove") })}
                      >
                        Remover
                      </Button>
                      <Button
                        variant={current?.action === "add" ? "primary" : "secondary"}
                        size="sm"
                        className="px-2 py-1"
                        disabled={rule.custoAdicionar === null}
                        onClick={() => updateDraft({ keywordChanges: toggleChange(draft.keywordChanges, rule.key, "add") })}
                      >
                        Adicionar
                      </Button>
                    </div>
                  </div>
                  {rule.nota && <p className="text-[10px] text-muted-foreground">{rule.nota}</p>}
                </div>
              );
            })}
          </CardContent>
        </Card>
      )}

      {step === 3 && baseJutsu && (
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground">Passo 4 — Modificando o Alcance</CardTitle>
            <p className="text-[11px] text-muted-foreground mt-1">
              Cada incremento custa ±{RANGE_INCREMENT_COST.custoChakraPorIncremento} chakra e {RANGE_INCREMENT_COST.tdiSemanasPorIncremento} semana de TdI.
            </p>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div>
              <FieldLabel>Alcance do jutsu (degrau atual → próximo)</FieldLabel>
              {RANGE_TIER_RULES.map((r) => (
                <p key={r.tier} className="text-[11px] text-muted-foreground mb-1">
                  <span className="font-medium text-surface-foreground">{r.nome}:</span> {r.descricao}
                </p>
              ))}
              <div className="flex items-center gap-2 mt-2">
                <Button variant="secondary" size="sm" onClick={() => updateDraft({ rangeIncrementos: draft.rangeIncrementos - 1 })}>
                  − Reduzir
                </Button>
                <span className="text-xs w-24 text-center">
                  {draft.rangeIncrementos > 0 ? `+${draft.rangeIncrementos}` : draft.rangeIncrementos} incremento(s)
                </span>
                <Button variant="secondary" size="sm" onClick={() => updateDraft({ rangeIncrementos: draft.rangeIncrementos + 1 })}>
                  + Aumentar
                </Button>
              </div>
            </div>
            <div>
              <FieldLabel>Área de efeito (se o jutsu já tiver uma)</FieldLabel>
              <p className="text-[11px] text-muted-foreground mb-1">{AREA_INCREMENT_RULE}</p>
              <div className="flex items-center gap-2 mt-2">
                <Button variant="secondary" size="sm" onClick={() => updateDraft({ areaIncrementos: draft.areaIncrementos - 1 })}>
                  − Reduzir
                </Button>
                <span className="text-xs w-24 text-center">
                  {draft.areaIncrementos > 0 ? `+${draft.areaIncrementos * 3}m` : `${draft.areaIncrementos * 3}m`}
                </span>
                <Button variant="secondary" size="sm" onClick={() => updateDraft({ areaIncrementos: draft.areaIncrementos + 1 })}>
                  + Aumentar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 4 && baseJutsu && (
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground">Passo 5 — Modificando Danos e Efeitos</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 max-h-[550px] overflow-y-auto">
            {EFFECT_CUSTOMIZATION_RULES.map((rule) => {
              const current = draft.effectChanges.find((c) => c.key === rule.key);
              return (
                <div key={rule.key} className="rounded-lg border border-border px-3 py-2 flex flex-col gap-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-semibold">{rule.nome}</p>
                      <p className="text-[10px] text-muted-foreground">
                        Adicionar: +{rule.custoChakraAdicionar} chakra{rule.custoChakraRemover !== undefined ? ` · Remover/Reduzir: ${rule.custoChakraRemover} chakra` : ""} · {rule.tdiSemanas} semana(s)
                      </p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      {current && (
                        <Button
                          variant="secondary"
                          size="sm"
                          className="px-2 py-0.5"
                          onClick={() =>
                            updateDraft({
                              effectChanges:
                                current.count > 1
                                  ? draft.effectChanges.map((c) => (c.key === rule.key ? { ...c, count: c.count - 1 } : c))
                                  : draft.effectChanges.filter((c) => c.key !== rule.key),
                            })
                          }
                        >
                          −
                        </Button>
                      )}
                      {current && <span className="text-xs w-4 text-center">{current.count}</span>}
                      <Button
                        variant={current?.action === "add" ? "primary" : "secondary"}
                        size="sm"
                        className="px-2 py-1"
                        onClick={() => {
                          if (current?.action === "add") {
                            updateDraft({
                              effectChanges: draft.effectChanges.map((c) => (c.key === rule.key ? { ...c, count: c.count + 1 } : c)),
                            });
                          } else {
                            updateDraft({
                              effectChanges: [...draft.effectChanges.filter((c) => c.key !== rule.key), { key: rule.key, action: "add", count: 1 }],
                            });
                          }
                        }}
                      >
                        Adicionar
                      </Button>
                      {rule.custoChakraRemover !== undefined && (
                        <Button
                          variant={current?.action === "remove" ? "primary" : "secondary"}
                          size="sm"
                          className="px-2 py-1"
                          onClick={() =>
                            updateDraft({
                              effectChanges: [...draft.effectChanges.filter((c) => c.key !== rule.key), { key: rule.key, action: "remove", count: 1 }],
                            })
                          }
                        >
                          Remover
                        </Button>
                      )}
                    </div>
                  </div>
                  <p className="text-[11px] text-muted-foreground">{rule.descricao}</p>
                </div>
              );
            })}
          </CardContent>
        </Card>
      )}

      {step === 5 && baseJutsu && (
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground">Passo 6 — Finalizar</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div>
              <FieldLabel htmlFor="custom-nome">Novo nome</FieldLabel>
              <TextField
                id="custom-nome"
                value={draft.novoNome}
                onChange={(e) => updateDraft({ novoNome: e.target.value })}
                placeholder={`${baseJutsu.nome} (Customizado)`}
              />
            </div>

            <label className="flex items-center gap-2 text-xs">
              <input type="checkbox" checked={draft.temDano} onChange={(e) => updateDraft({ temDano: e.target.checked })} />
              O jutsu resultante causa dano (usa a média do dado para calcular o rank)
            </label>

            {draft.temDano && (
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <FieldLabel htmlFor="custom-dado">Dado de dano</FieldLabel>
                  <SelectField id="custom-dado" value={draft.danoDado} onChange={(e) => updateDraft({ danoDado: e.target.value as CustomizationDraft["danoDado"] })}>
                    <option value="">Escolha...</option>
                    {DICE_OPTIONS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </SelectField>
                </div>
                <div>
                  <FieldLabel htmlFor="custom-num-dados">Número de dados</FieldLabel>
                  <NumberField
                    id="custom-num-dados"
                    min={1}
                    value={draft.danoNumDados}
                    onChange={(e) => updateDraft({ danoNumDados: Number(e.target.value) || 1 })}
                  />
                </div>
              </div>
            )}

            <div className="grid grid-cols-3 gap-2 text-xs">
              <p>
                <span className="text-muted-foreground">Custo final: </span>
                <span className="text-chakra font-semibold">{Math.max(0, result.finalCustoChakra)} Chakra</span>
              </p>
              <p>
                <span className="text-muted-foreground">TdI total: </span>
                {result.totalSemanas} semana(s)
              </p>
              <p>
                <span className="text-muted-foreground">Rank final: </span>
                <span className="font-semibold">{result.rank ?? "—"}</span>{" "}
                <span className="text-muted-foreground">({result.metodo === "dano" ? "por dano médio" : "por custo de chakra"})</span>
              </p>
            </div>

            <div>
              <FieldLabel>Modificações aplicadas</FieldLabel>
              <p className="text-xs text-muted-foreground whitespace-pre-line rounded-md border border-border p-3">
                {changeLog || "Nenhuma modificação selecionada ainda."}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {step >= 1 && baseJutsu && (
        <p className="text-[11px] text-muted-foreground">
          Delta acumulado até aqui: {delta.chakra >= 0 ? "+" : ""}
          {delta.chakra} chakra · {delta.semanas} semana(s) de TdI
        </p>
      )}

      <div className="flex items-center justify-between">
        <Button variant="secondary" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>
          Voltar
        </Button>
        {step < 5 ? (
          <Button onClick={() => setStep((s) => Math.min(5, s + 1))} disabled={step === 0 && !draft.baseJutsuKey}>
            Avançar
          </Button>
        ) : (
          <Button onClick={handleSalvar}>Salvar jutsu personalizado</Button>
        )}
      </div>
    </div>
  );
}
