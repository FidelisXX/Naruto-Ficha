"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";
import type { Character } from "@/lib/character/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FieldLabel, SelectField, TextField } from "@/components/ui/Field";
import {
  JUTSU_NATUREZA_LABELS,
  JUTSU_RANK_ORDER,
  JUTSU_TIPO_LABELS,
  type JutsuNatureza,
  type JutsuRank,
  type JutsuTipo,
} from "@/lib/jutsu/types";
import {
  EFFECT_CATEGORIA_LABELS,
  familyOfTipo,
  RANK_EFFECT_SLOTS,
  type EffectCategoria,
} from "@/lib/jutsuCreation/types";
import { PREREQUISITES_BY_FAMILY, NINJUTSU_NATUREZA_MECANICAS } from "@/lib/jutsuCreation/prerequisitos";
import { GENJUTSU_SENSORY_KEYWORDS } from "@/lib/jutsuCreation/sensoriais";
import { getComponentRules } from "@/lib/jutsuCreation/componentes";
import { getRangeOptions } from "@/lib/jutsuCreation/alcance";
import {
  assembleDescricao,
  assembleJutsu,
  blankDraft,
  condicionaisCount,
  creationCost,
  getAvailableEffects,
  isComponentActive,
  maxCondicionaisAllowed,
  maxSlots,
  repeticoesDe,
  usedSlots,
  validateDraft,
  type JutsuCreationDraft,
} from "@/lib/jutsuCreation/compute";

const ELEMENTAL_NATUREZAS: JutsuNatureza[] = ["terra", "vento", "fogo", "agua", "relampago"];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const STEP_LABELS = ["Tipo & Rank", "Pré-requisitos", "Efeitos", "Finalizar"];

export function JutsuWizard({
  character,
  onUpdate,
}: {
  character: Character;
  onUpdate: (updater: (character: Character) => Character) => void;
}) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState<JutsuCreationDraft>(blankDraft());

  const family = draft.tipo ? familyOfTipo(draft.tipo) : null;
  const prereqs = family ? PREREQUISITES_BY_FAMILY[family] : [];
  const componentRules = draft.tipo ? getComponentRules(draft.tipo) : [];
  const rangeOptions = draft.tipo ? getRangeOptions(draft.tipo) : [];
  const availableEffects = draft.tipo ? getAvailableEffects(draft.tipo, draft.categorias) : [];

  const slotsMax = draft.tipo && draft.rank ? maxSlots(draft.tipo, draft.rank, draft.prerequisitos) : 0;
  const slotsUsed = draft.tipo ? usedSlots(draft.tipo, draft.efeitos, draft.sensoriais) : 0;
  const condicionaisMax = draft.tipo ? maxCondicionaisAllowed(draft.tipo, draft.efeitos) : 0;
  const fullValidation = useMemo(() => validateDraft(draft), [draft]);
  // No Passo 3 (efeitos), o nome ainda não foi digitado (campo só existe no Passo 4) — não mostra esse erro cedo demais.
  const validation = useMemo(
    () =>
      step === 2
        ? { ...fullValidation, errors: fullValidation.errors.filter((e) => e !== "Dê um nome ao jutsu.") }
        : fullValidation,
    [fullValidation, step]
  );
  const cost = draft.rank ? creationCost(draft.rank) : null;
  const descricaoPreview = useMemo(() => assembleDescricao(draft), [draft]);

  function updateDraft(patch: Partial<JutsuCreationDraft>) {
    setDraft((d) => ({ ...d, ...patch }));
  }

  function toggleArrayValue<T>(arr: T[], value: T): T[] {
    return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
  }

  function addEffect(key: string, dado?: string) {
    setDraft((d) => ({
      ...d,
      efeitos: [...d.efeitos, { effectKey: key, repeticao: repeticoesDe(d.efeitos, key), dadoEscolhido: dado }],
    }));
  }

  function removeEffect(key: string) {
    setDraft((d) => {
      const idx = [...d.efeitos].reverse().findIndex((e) => e.effectKey === key);
      if (idx === -1) return d;
      const realIdx = d.efeitos.length - 1 - idx;
      return { ...d, efeitos: d.efeitos.filter((_, i) => i !== realIdx) };
    });
  }

  function setEffectDado(key: string, dado: string) {
    setDraft((d) => ({
      ...d,
      efeitos: d.efeitos.map((e, i) => (e.effectKey === key && i === d.efeitos.findIndex((x) => x.effectKey === key) ? { ...e, dadoEscolhido: dado } : e)),
    }));
  }

  function handleSalvar() {
    if (!draft.tipo) return;
    const key = `custom-${slugify(draft.nome) || "jutsu"}-${nanoid(6)}`;
    const jutsu = assembleJutsu(draft, key);
    if (!jutsu) return;
    onUpdate((c) => ({ ...c, customJutsu: [...c.customJutsu, jutsu] }));
    router.push(`/personagem/${character.id}`);
  }

  const canAdvanceFromStep0 = Boolean(draft.tipo && draft.rank);
  const canAdvanceFromStep1 = Boolean(draft.alcanceKey);
  const canAdvanceFromStep2 = draft.categorias.length > 0 && draft.categorias.length <= 2;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
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
            <CardTitle className="text-muted-foreground">Passo 1 — Tipo e Rank</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div>
              <FieldLabel htmlFor="wizard-tipo">Tipo de jutsu</FieldLabel>
              <SelectField
                id="wizard-tipo"
                value={draft.tipo ?? ""}
                onChange={(e) =>
                  updateDraft({
                    tipo: (e.target.value || null) as JutsuTipo | null,
                    componentesExtras: [],
                    alcanceKey: null,
                    categorias: [],
                    efeitos: [],
                    naturezas: [],
                    sensoriais: [],
                    prerequisitos: [],
                  })
                }
              >
                <option value="">Escolha...</option>
                {(Object.keys(JUTSU_TIPO_LABELS) as JutsuTipo[]).map((t) => (
                  <option key={t} value={t}>
                    {JUTSU_TIPO_LABELS[t]}
                  </option>
                ))}
              </SelectField>
            </div>
            <div>
              <FieldLabel htmlFor="wizard-rank">Rank</FieldLabel>
              <SelectField
                id="wizard-rank"
                value={draft.rank ?? ""}
                onChange={(e) => updateDraft({ rank: (e.target.value || null) as JutsuRank | null })}
              >
                <option value="">Escolha...</option>
                {JUTSU_RANK_ORDER.map((r) => (
                  <option key={r} value={r}>
                    Rank {r} — {RANK_EFFECT_SLOTS[r]} slot{RANK_EFFECT_SLOTS[r] === 1 ? "" : "s"} de efeito
                  </option>
                ))}
              </SelectField>
            </div>
            {draft.tipo === "taijutsu" && (
              <p className="text-[11px] text-muted-foreground">
                Taijutsu é uma técnica desarmada. Se o jutsu exigir uma arma, escolha Bukijutsu.
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {step === 1 && draft.tipo && draft.rank && family && (
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground">Passo 2 — Pré-requisitos, Componentes e Alcance</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div>
              <FieldLabel>Palavras-chave de pré-requisito (bônus de slot)</FieldLabel>
              <div className="flex flex-col gap-2">
                {prereqs.map((p) => (
                  <label key={p.key} className="flex items-start gap-2 text-xs">
                    <input
                      type="checkbox"
                      className="mt-0.5"
                      disabled={p.indisponivelRankE && draft.rank === "E"}
                      checked={draft.prerequisitos.includes(p.key)}
                      onChange={() => updateDraft({ prerequisitos: toggleArrayValue(draft.prerequisitos, p.key) })}
                    />
                    <span>
                      <span className="font-medium">
                        {p.nome} {p.slotBonus > 0 ? `(+${p.slotBonus} slot${p.slotBonus > 1 ? "s" : ""})` : ""}
                      </span>
                      <br />
                      <span className="text-muted-foreground">{p.descricao}</span>
                      {p.indisponivelRankE && draft.rank === "E" && (
                        <span className="text-hp"> — indisponível no Rank E.</span>
                      )}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {family === "genjutsu" && (
              <div>
                <FieldLabel>Palavras-chave sensoriais</FieldLabel>
                <div className="flex flex-col gap-2">
                  {GENJUTSU_SENSORY_KEYWORDS.map((s) => (
                    <label key={s.key} className="flex items-start gap-2 text-xs">
                      <input
                        type="checkbox"
                        className="mt-0.5"
                        checked={draft.sensoriais.includes(s.key)}
                        onChange={() => updateDraft({ sensoriais: toggleArrayValue(draft.sensoriais, s.key) })}
                      />
                      <span>
                        <span className="font-medium">
                          {s.nome} {s.custoSlots > 0 ? `(custa ${s.custoSlots} slot de efeito)` : ""}
                        </span>
                        <br />
                        <span className="text-muted-foreground">{s.descricao}</span>
                        {s.requisito && <span className="text-primary"> {s.requisito}</span>}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {draft.prerequisitos.includes("natureza-de-chakra") && (
              <div>
                <FieldLabel>Natureza(s) de chakra</FieldLabel>
                <div className="flex flex-col gap-2">
                  {ELEMENTAL_NATUREZAS.map((nat) => {
                    const mecanica =
                      draft.tipo === "ninjutsu" ? NINJUTSU_NATUREZA_MECANICAS.find((m) => m.key === nat) : undefined;
                    return (
                      <label key={nat} className="flex items-start gap-2 text-xs">
                        <input
                          type="checkbox"
                          className="mt-0.5"
                          checked={draft.naturezas.includes(nat)}
                          onChange={() => updateDraft({ naturezas: toggleArrayValue(draft.naturezas, nat) })}
                        />
                        <span>
                          <span className="font-medium">{JUTSU_NATUREZA_LABELS[nat]}</span>
                          {mecanica && (
                            <>
                              <br />
                              <span className="text-muted-foreground">
                                {mecanica.nome}: {mecanica.descricao}
                              </span>
                            </>
                          )}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            <div>
              <FieldLabel>Componentes</FieldLabel>
              <div className="flex flex-col gap-2">
                {componentRules
                  .filter((r) => r.requisito !== "indisponivel")
                  .map((r) => {
                    const active = isComponentActive(r, draft);
                    return (
                      <label key={r.componente} className="flex items-start gap-2 text-xs">
                        <input
                          type="checkbox"
                          className="mt-0.5"
                          checked={active}
                          disabled={r.requisito === "sempre" || r.requisito === "condicional"}
                          onChange={() =>
                            updateDraft({ componentesExtras: toggleArrayValue(draft.componentesExtras, r.componente) })
                          }
                        />
                        <span>
                          <span className="font-medium">
                            {r.componente} (
                            {r.requisito === "sempre"
                              ? "sempre obrigatório"
                              : r.requisito === "condicional"
                                ? active
                                  ? "obrigatório (condição atendida)"
                                  : "condicional — ainda não exigido"
                                : "opcional"}
                            )
                          </span>
                          <br />
                          <span className="text-muted-foreground">{r.nota}</span>
                        </span>
                      </label>
                    );
                  })}
              </div>
            </div>

            <div>
              <FieldLabel>Alcance</FieldLabel>
              <div className="flex flex-col gap-2">
                {rangeOptions.map((r) => (
                  <label key={r.key} className="flex items-start gap-2 text-xs">
                    <input
                      type="radio"
                      name="alcance"
                      className="mt-0.5"
                      checked={draft.alcanceKey === r.key}
                      onChange={() => updateDraft({ alcanceKey: r.key })}
                    />
                    <span>
                      <span className="font-medium">{r.nome}</span>
                      <br />
                      <span className="text-muted-foreground">{r.descricao}</span>
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 2 && draft.tipo && draft.rank && family && (
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground">Passo 3 — Categorias e Efeitos</CardTitle>
            <p className="text-[11px] text-muted-foreground mt-1">
              Slots: {slotsUsed}/{slotsMax} · Efeitos Condicionais: {condicionaisCount(draft.tipo, draft.efeitos)}/{condicionaisMax}
            </p>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div>
              <FieldLabel>Categorias (escolha até 2)</FieldLabel>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(EFFECT_CATEGORIA_LABELS) as EffectCategoria[]).map((cat) => (
                  <label
                    key={cat}
                    className={`flex items-center gap-1.5 text-xs border rounded-md px-2 py-1 cursor-pointer ${
                      draft.categorias.includes(cat) ? "border-primary text-primary" : "border-border text-muted-foreground"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={draft.categorias.includes(cat)}
                      onChange={() => {
                        if (!draft.categorias.includes(cat) && draft.categorias.length >= 2) return;
                        updateDraft({ categorias: toggleArrayValue(draft.categorias, cat) });
                      }}
                    />
                    {EFFECT_CATEGORIA_LABELS[cat]}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 max-h-[500px] overflow-y-auto">
              {availableEffects.map((effect) => {
                const reps = repeticoesDe(draft.efeitos, effect.key);
                const cap = effect.maxRepeticoes ?? 1;
                const rankDice = draft.rank ? effect.dadosPorRank?.[draft.rank] : undefined;
                const selectedOccurrence = draft.efeitos.find((e) => e.effectKey === effect.key);
                return (
                  <div key={effect.key} className="rounded-lg border border-border px-3 py-2 flex flex-col gap-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs font-semibold">
                          {effect.nome}{" "}
                          <span className="text-muted-foreground font-normal">
                            ({effect.custoSlots === 0 ? "não custa slot" : `${effect.custoSlots} slot`})
                          </span>
                        </p>
                        {effect.requisitos && (
                          <p className="text-[10px] text-primary">Pré-requisito: {effect.requisitos.join("; ")}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <Button variant="secondary" size="sm" className="px-2 py-0.5" onClick={() => removeEffect(effect.key)} disabled={reps === 0}>
                          −
                        </Button>
                        <span className="text-xs w-4 text-center">{reps}</span>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="px-2 py-0.5"
                          onClick={() => addEffect(effect.key, rankDice?.[0])}
                          disabled={reps >= cap}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <p className="text-[11px] text-muted-foreground">{effect.descricao}</p>
                    {rankDice && reps > 0 && (
                      <div className="mt-1">
                        <SelectField
                          value={selectedOccurrence?.dadoEscolhido ?? rankDice[0]}
                          onChange={(e) => setEffectDado(effect.key, e.target.value)}
                          className="text-xs"
                        >
                          {rankDice.map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                        </SelectField>
                      </div>
                    )}
                  </div>
                );
              })}
              {availableEffects.filter((e) => e.categoria !== "generico").length === 0 && draft.categorias.length === 0 && (
                <p className="text-xs text-muted-foreground">Escolha ao menos 1 categoria para ver os efeitos disponíveis.</p>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {step === 3 && draft.tipo && draft.rank && cost && (
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground">Passo 4 — Finalizar</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div>
              <FieldLabel htmlFor="wizard-nome">Nome do jutsu</FieldLabel>
              <TextField
                id="wizard-nome"
                value={draft.nome}
                onChange={(e) => updateDraft({ nome: e.target.value })}
                placeholder="Dê um nome memorável"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <p>
                <span className="text-muted-foreground">Custo: </span>
                <span className="text-chakra font-semibold">{cost.custoChakra} Chakra</span>
              </p>
              <p>
                <span className="text-muted-foreground">TdI (autodidata): </span>
                {cost.tdiAutodidata}
              </p>
              <p>
                <span className="text-muted-foreground">TdI (com sensei): </span>
                {cost.tdiComSensei ?? "—"}
              </p>
            </div>
            <div>
              <FieldLabel>Prévia da descrição</FieldLabel>
              <p className="text-xs text-muted-foreground whitespace-pre-line rounded-md border border-border p-3">
                {descricaoPreview || "Nenhum efeito selecionado ainda."}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {step >= 2 && (validation.errors.length > 0 || validation.warnings.length > 0) && (
        <div className="flex flex-col gap-1">
          {validation.errors.map((e) => (
            <p key={e} className="text-[11px] text-hp">
              ⚠ {e}
            </p>
          ))}
          {validation.errors.length === 0 &&
            validation.warnings.map((w) => (
              <p key={w} className="text-[11px] text-muted-foreground">
                {w}
              </p>
            ))}
        </div>
      )}

      <div className="flex items-center justify-between">
        <Button variant="secondary" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>
          Voltar
        </Button>
        {step < 3 ? (
          <Button
            onClick={() => setStep((s) => Math.min(3, s + 1))}
            disabled={(step === 0 && !canAdvanceFromStep0) || (step === 1 && !canAdvanceFromStep1) || (step === 2 && !canAdvanceFromStep2)}
          >
            Avançar
          </Button>
        ) : (
          <Button onClick={handleSalvar} disabled={validation.errors.length > 0}>
            Salvar jutsu
          </Button>
        )}
      </div>
    </div>
  );
}
