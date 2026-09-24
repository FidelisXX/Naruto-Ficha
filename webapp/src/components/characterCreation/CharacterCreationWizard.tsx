"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FieldLabel, SelectField, TextField } from "@/components/ui/Field";
import { Stepper } from "@/components/ui/Stepper";
import { useCharacterStore } from "@/store/characterStore";
import { CLAN_CATALOG } from "@/lib/catalog/clans";
import { CLASS_CATALOG } from "@/lib/catalog/classes";
import { BACKGROUND_CATALOG } from "@/lib/catalog/backgrounds";
import { ARMOR_CATALOG, WEAPON_CATALOG } from "@/lib/catalog/equipment";
import { ATTRIBUTE_KEYS, ATTRIBUTE_LABELS, abilityModifier, formatModifier, type AttributeKey } from "@/lib/rules";
import {
  ATTRIBUTE_METHOD_DESCRIPTIONS,
  ATTRIBUTE_METHOD_LABELS,
  POINT_BUY_BUDGET,
  POINT_BUY_MAX,
  POINT_BUY_MIN,
  STANDARD_ARRAY,
  pointBuyCost,
  rollAttributeSet,
  type AttributeMethod,
} from "@/lib/characterCreation/attributeGeneration";
import { parseAttributeChoice } from "@/lib/characterCreation/clanBonusParsing";
import { extractBackgroundSkillCandidates } from "@/lib/characterCreation/backgroundSkillParsing";
import {
  assembleCharacter,
  clanAttributeBonus,
  finalAttributeScore,
  getBackground,
  getClan,
  getClass,
  pointBuyRemaining,
  remainingAvailableScores,
  starterJutsuOptions,
  validateStep,
} from "@/lib/characterCreation/compute";
import { blankCreationDraft, type CreationDraft } from "@/lib/characterCreation/types";

const STEP_LABELS = ["Clã", "Classe", "Atributos", "Identidade", "Equipamento", "Jutsu Inicial", "Revisão"];

export function CharacterCreationWizard() {
  const router = useRouter();
  const createCharacterFrom = useCharacterStore((state) => state.createCharacterFrom);
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState<CreationDraft>(blankCreationDraft());

  function updateDraft(patch: Partial<CreationDraft>) {
    setDraft((d) => ({ ...d, ...patch }));
  }

  const clan = getClan(draft);
  const classe = getClass(draft);
  const background = getBackground(draft);
  const validation = useMemo(() => validateStep(draft, step), [draft, step]);

  function canLeaveStep(s: number): boolean {
    if (s > 3) return true; // equipamento/jutsu/revisão são opcionais de preencher
    return validateStep(draft, s).errors.length === 0;
  }

  function handleCreate() {
    for (let s = 0; s <= 3; s++) {
      if (!canLeaveStep(s)) {
        setStep(s);
        return;
      }
    }
    const character = assembleCharacter(draft);
    createCharacterFrom(character);
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

      {step === 0 && <StepClan draft={draft} updateDraft={updateDraft} />}
      {step === 1 && <StepClass draft={draft} updateDraft={updateDraft} />}
      {step === 2 && <StepAttributes draft={draft} updateDraft={updateDraft} />}
      {step === 3 && <StepIdentity draft={draft} updateDraft={updateDraft} />}
      {step === 4 && <StepEquipment draft={draft} updateDraft={updateDraft} />}
      {step === 5 && <StepJutsu draft={draft} updateDraft={updateDraft} />}
      {step === 6 && <StepReview draft={draft} clan={clan} classe={classe} background={background} />}

      {validation.errors.length > 0 && (
        <div className="flex flex-col gap-0.5">
          {validation.errors.map((e) => (
            <p key={e} className="text-[11px] text-hp">
              ⚠ {e}
            </p>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between">
        <Button variant="secondary" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>
          Voltar
        </Button>
        {step < STEP_LABELS.length - 1 ? (
          <Button onClick={() => canLeaveStep(step) && setStep((s) => s + 1)} disabled={!canLeaveStep(step)}>
            Avançar
          </Button>
        ) : (
          <Button onClick={handleCreate}>Criar Personagem</Button>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Passo 1 — Clã
// ─────────────────────────────────────────────────────────────────────────

function StepClan({ draft, updateDraft }: { draft: CreationDraft; updateDraft: (p: Partial<CreationDraft>) => void }) {
  const [busca, setBusca] = useState("");
  const filtered = useMemo(() => {
    const q = busca.trim().toLowerCase();
    if (!q) return CLAN_CATALOG;
    return CLAN_CATALOG.filter((c) => c.nome.toLowerCase().includes(q));
  }, [busca]);
  const selected = getClan(draft);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-muted-foreground">Passo 1 — Escolha um Clã</CardTitle>
        <p className="text-[11px] text-muted-foreground mt-1">
          Seu clã estabelece a identidade do personagem: bônus de atributo, características especiais por nível e,
          às vezes, jutsus exclusivos.
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <TextField placeholder="Buscar clã..." value={busca} onChange={(e) => setBusca(e.target.value)} />
        <div className="flex flex-col gap-1.5 max-h-[360px] overflow-y-auto">
          {filtered.map((c) => (
            <label
              key={c.key}
              className={`flex items-start gap-2 text-xs border rounded-md px-3 py-2 cursor-pointer ${
                draft.clanKey === c.key ? "border-primary" : "border-border"
              }`}
            >
              <input
                type="radio"
                name="clan"
                className="mt-0.5"
                checked={draft.clanKey === c.key}
                onChange={() => updateDraft({ clanKey: c.key, clanChoiceSelections: {} })}
              />
              <span>
                <span className="font-semibold">{c.nome}</span>
                {Object.keys(c.atributos).length > 0 && (
                  <span className="text-primary">
                    {" "}
                    ({Object.entries(c.atributos)
                      .map(([k, v]) => `${formatModifier(v as number)} ${ATTRIBUTE_LABELS[k as AttributeKey]}`)
                      .join(", ")}
                    )
                  </span>
                )}
                {c.atributoEscolha && <span className="text-primary"> ({c.atributoEscolha})</span>}
                <br />
                <span className="text-muted-foreground">{c.resumo}</span>
                {!c.bonusCompleto && (
                  <span className="text-[10px] text-accent"> — bônus de atributo não confirmado no livro-fonte.</span>
                )}
              </span>
            </label>
          ))}
        </div>
        {selected && selected.tracos.length > 0 && (
          <div className="rounded-md border border-border px-3 py-2">
            <p className="text-[11px] font-semibold text-muted-foreground mb-1">Traço de Nível 1</p>
            {selected.tracos
              .filter((t) => t.nivel === 1)
              .map((t) => (
                <p key={t.nome} className="text-[11px]">
                  <span className="font-medium">{t.nome}:</span> {t.resumo}
                </p>
              ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Passo 2 — Classe
// ─────────────────────────────────────────────────────────────────────────

function StepClass({ draft, updateDraft }: { draft: CreationDraft; updateDraft: (p: Partial<CreationDraft>) => void }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-muted-foreground">Passo 2 — Escolha uma Classe</CardTitle>
        <p className="text-[11px] text-muted-foreground mt-1">
          Sua classe define Dado de Vida/Chakra, salvaguardas e quanto acesso a Jutsu você tem.
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-1.5">
        {CLASS_CATALOG.map((c) => (
          <label
            key={c.key}
            className={`flex items-start gap-2 text-xs border rounded-md px-3 py-2 cursor-pointer ${
              draft.classKey === c.key ? "border-primary" : "border-border"
            }`}
          >
            <input
              type="radio"
              name="classe"
              className="mt-0.5"
              checked={draft.classKey === c.key}
              onChange={() => updateDraft({ classKey: c.key })}
            />
            <span>
              <span className="font-semibold">{c.nome}</span>{" "}
              <span className="text-muted-foreground">
                — Dado de Vida d{c.hitDie} · Dado de Chakra d{c.chakraDie} · Jutsu {c.nivelDeJutsu} · Salvaguardas{" "}
                {c.salvaguardas.map((s) => ATTRIBUTE_LABELS[s]).join(" / ")}
              </span>
            </span>
          </label>
        ))}
      </CardContent>
    </Card>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Passo 3 — Atributos
// ─────────────────────────────────────────────────────────────────────────

function StepAttributes({ draft, updateDraft }: { draft: CreationDraft; updateDraft: (p: Partial<CreationDraft>) => void }) {
  const clan = getClan(draft);
  const bonus = clanAttributeBonus(draft);
  const clauses = parseAttributeChoice(clan?.atributoEscolha);
  const remaining = remainingAvailableScores(draft);
  const spent = POINT_BUY_BUDGET - pointBuyRemaining(draft);

  function chooseMethod(method: AttributeMethod) {
    const rawScores = { for: null, des: null, con: null, int: null, sab: null, car: null } as CreationDraft["rawScores"];
    if (method === "matriz-padrao") {
      updateDraft({ attributeMethod: method, availableScores: [...STANDARD_ARRAY], rawScores });
    } else if (method === "rolagem") {
      updateDraft({ attributeMethod: method, availableScores: rollAttributeSet(), rawScores });
    } else {
      const eightForAll = Object.fromEntries(ATTRIBUTE_KEYS.map((k) => [k, POINT_BUY_MIN])) as CreationDraft["rawScores"];
      updateDraft({ attributeMethod: method, availableScores: [], rawScores: eightForAll });
    }
  }

  function setAssignedValue(key: AttributeKey, value: number | null) {
    updateDraft({ rawScores: { ...draft.rawScores, [key]: value } });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-muted-foreground">Passo 3 — Determinar Pontuação de Habilidade</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div>
          <FieldLabel>Método de geração</FieldLabel>
          <div className="flex flex-col gap-1.5">
            {(Object.keys(ATTRIBUTE_METHOD_LABELS) as AttributeMethod[]).map((method) => (
              <label
                key={method}
                className={`flex items-start gap-2 text-xs border rounded-md px-3 py-2 cursor-pointer ${
                  draft.attributeMethod === method ? "border-primary" : "border-border"
                }`}
              >
                <input
                  type="radio"
                  name="metodo"
                  className="mt-0.5"
                  checked={draft.attributeMethod === method}
                  onChange={() => chooseMethod(method)}
                />
                <span>
                  <span className="font-semibold">{ATTRIBUTE_METHOD_LABELS[method]}</span>
                  <br />
                  <span className="text-muted-foreground">{ATTRIBUTE_METHOD_DESCRIPTIONS[method]}</span>
                </span>
              </label>
            ))}
          </div>
          {draft.attributeMethod === "rolagem" && (
            <Button
              variant="secondary"
              size="sm"
              className="mt-2"
              onClick={() => {
                const rawScores = { for: null, des: null, con: null, int: null, sab: null, car: null } as CreationDraft["rawScores"];
                updateDraft({ availableScores: rollAttributeSet(), rawScores });
              }}
            >
              Rolar novamente
            </Button>
          )}
        </div>

        {draft.attributeMethod === "compra-de-pontos" && (
          <p className="text-xs">
            Pontos restantes: <span className={spent > POINT_BUY_BUDGET ? "text-hp font-bold" : "text-primary font-bold"}>{POINT_BUY_BUDGET - spent}</span> / {POINT_BUY_BUDGET}
          </p>
        )}
        {(draft.attributeMethod === "matriz-padrao" || draft.attributeMethod === "rolagem") && (
          <p className="text-xs text-muted-foreground">
            Valores disponíveis: {remaining.length > 0 ? remaining.join(", ") : "todos atribuídos"}
          </p>
        )}

        {draft.attributeMethod && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {ATTRIBUTE_KEYS.map((key) => {
              const raw = draft.rawScores[key];
              const final = finalAttributeScore(draft, key);
              return (
                <div key={key} className="rounded-md border border-border px-3 py-2 flex items-center justify-between gap-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{ATTRIBUTE_LABELS[key]}</p>
                    <p className="text-xs">
                      Final: <span className="font-bold">{final}</span>{" "}
                      <span className="text-muted-foreground">({formatModifier(abilityModifier(final))})</span>
                      {(bonus[key] ?? 0) !== 0 && <span className="text-primary"> incl. {formatModifier(bonus[key] ?? 0)} clã</span>}
                    </p>
                  </div>
                  {draft.attributeMethod === "compra-de-pontos" ? (
                    <Stepper
                      size="sm"
                      min={POINT_BUY_MIN}
                      max={POINT_BUY_MAX}
                      value={raw ?? POINT_BUY_MIN}
                      onChange={(v) => {
                        const currentCost = pointBuyCost(raw ?? POINT_BUY_MIN);
                        const nextCost = pointBuyCost(v);
                        const newSpent = spent - currentCost + nextCost;
                        if (newSpent > POINT_BUY_BUDGET) return;
                        setAssignedValue(key, v);
                      }}
                    />
                  ) : (
                    <SelectField
                      className="w-24"
                      value={raw ?? ""}
                      onChange={(e) => setAssignedValue(key, e.target.value ? Number(e.target.value) : null)}
                    >
                      <option value="">—</option>
                      {raw !== null && (
                        <option key={raw} value={raw}>
                          {raw}
                        </option>
                      )}
                      {remaining.map((v, i) => (
                        <option key={`${v}-${i}`} value={v}>
                          {v}
                        </option>
                      ))}
                    </SelectField>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {clauses.length > 0 && (
          <div className="flex flex-col gap-2">
            <FieldLabel>Bônus opcional do clã</FieldLabel>
            {clauses.map((clause, index) => (
              <div key={clause.texto} className="flex items-center gap-2 text-xs">
                <span className="text-muted-foreground">{clause.texto}:</span>
                <SelectField
                  className="w-40"
                  value={draft.clanChoiceSelections[index] ?? ""}
                  onChange={(e) =>
                    updateDraft({
                      clanChoiceSelections: { ...draft.clanChoiceSelections, [index]: (e.target.value || null) as AttributeKey | null },
                    })
                  }
                >
                  <option value="">Escolher...</option>
                  {clause.opcoes.map((opt) => (
                    <option key={opt} value={opt}>
                      {ATTRIBUTE_LABELS[opt]}
                    </option>
                  ))}
                </SelectField>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Passo 4 — Identidade & Antecedente
// ─────────────────────────────────────────────────────────────────────────

function StepIdentity({ draft, updateDraft }: { draft: CreationDraft; updateDraft: (p: Partial<CreationDraft>) => void }) {
  const background = getBackground(draft);
  const skillCandidates = useMemo(() => (background ? extractBackgroundSkillCandidates(background.pericias) : []), [background]);

  function toggleSkill(key: string) {
    const has = draft.selectedSkillKeys.includes(key);
    if (has) {
      updateDraft({ selectedSkillKeys: draft.selectedSkillKeys.filter((k) => k !== key) });
    } else if (draft.selectedSkillKeys.length < 2) {
      updateDraft({ selectedSkillKeys: [...draft.selectedSkillKeys, key] });
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-muted-foreground">Passo 4 — Descreva seu Personagem</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div>
          <FieldLabel htmlFor="wizard-nome">Nome</FieldLabel>
          <TextField id="wizard-nome" value={draft.nome} onChange={(e) => updateDraft({ nome: e.target.value })} placeholder="Nome do personagem" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <FieldLabel htmlFor="wizard-vila">Vila</FieldLabel>
            <TextField id="wizard-vila" value={draft.vila} onChange={(e) => updateDraft({ vila: e.target.value })} />
          </div>
          <div>
            <FieldLabel htmlFor="wizard-equipe">Equipe</FieldLabel>
            <TextField id="wizard-equipe" value={draft.equipe} onChange={(e) => updateDraft({ equipe: e.target.value })} />
          </div>
        </div>
        <div>
          <FieldLabel htmlFor="wizard-ambicao">Ambição</FieldLabel>
          <TextField
            id="wizard-ambicao"
            value={draft.ambicao}
            onChange={(e) => updateDraft({ ambicao: e.target.value })}
            placeholder="O objetivo de longo prazo do seu shinobi"
          />
        </div>

        <div>
          <FieldLabel>Antecedente</FieldLabel>
          <div className="flex flex-col gap-1.5">
            {BACKGROUND_CATALOG.map((b) => (
              <label
                key={b.key}
                className={`flex items-start gap-2 text-xs border rounded-md px-3 py-2 cursor-pointer ${
                  draft.backgroundKey === b.key ? "border-primary" : "border-border"
                }`}
              >
                <input
                  type="radio"
                  name="antecedente"
                  className="mt-0.5"
                  checked={draft.backgroundKey === b.key}
                  onChange={() => updateDraft({ backgroundKey: b.key, selectedSkillKeys: [] })}
                />
                <span>
                  <span className="font-semibold">{b.nome}</span>
                  <br />
                  <span className="text-muted-foreground">
                    Perícias: {b.pericias} · Kit: {b.kit}
                    {b.recurso && ` · Recurso: ${b.recurso}`}
                  </span>
                </span>
              </label>
            ))}
          </div>
        </div>

        {background && (
          <div>
            <FieldLabel>Escolha 2 perícias ({draft.selectedSkillKeys.length}/2)</FieldLabel>
            {skillCandidates.length === 0 ? (
              <p className="text-xs text-muted-foreground">
                Não consegui identificar as perícias em &quot;{background.pericias}&quot; — marque manualmente na aba Perícias depois de criar o personagem.
              </p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {skillCandidates.map((s) => (
                  <label
                    key={s.key}
                    className={`flex items-center gap-1.5 text-xs border rounded-md px-2 py-1 cursor-pointer ${
                      draft.selectedSkillKeys.includes(s.key) ? "border-primary text-primary" : "border-border text-muted-foreground"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={draft.selectedSkillKeys.includes(s.key)}
                      onChange={() => toggleSkill(s.key)}
                      disabled={!draft.selectedSkillKeys.includes(s.key) && draft.selectedSkillKeys.length >= 2}
                    />
                    {s.label}
                  </label>
                ))}
              </div>
            )}
          </div>
        )}

        <p className="text-[11px] text-primary">
          Lembrete: cada antecedente também concede +1 em um atributo OU um Talento, à sua escolha — aplique manualmente
          depois de criar o personagem (o catálogo de Talentos ainda não existe no app).
        </p>
      </CardContent>
    </Card>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Passo 5 — Equipamento
// ─────────────────────────────────────────────────────────────────────────

function StepEquipment({ draft, updateDraft }: { draft: CreationDraft; updateDraft: (p: Partial<CreationDraft>) => void }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-muted-foreground">Passo 5 — Escolha o Equipamento</CardTitle>
        <p className="text-[11px] text-muted-foreground mt-1">Opcional agora — você pode ajustar depois na aba Itens.</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div>
          <FieldLabel htmlFor="wizard-armadura">Armadura</FieldLabel>
          <SelectField id="wizard-armadura" value={draft.armaduraKey ?? ""} onChange={(e) => updateDraft({ armaduraKey: e.target.value || null })}>
            <option value="">Nenhuma</option>
            {ARMOR_CATALOG.map((a) => (
              <option key={a.key} value={a.key}>
                {a.nome} (+{a.bonusArmadura} CA)
              </option>
            ))}
          </SelectField>
        </div>
        <div>
          <FieldLabel htmlFor="wizard-arma">Arma principal</FieldLabel>
          <SelectField id="wizard-arma" value={draft.armaPrincipalKey ?? ""} onChange={(e) => updateDraft({ armaPrincipalKey: e.target.value || null })}>
            <option value="">Nenhuma</option>
            {WEAPON_CATALOG.map((w) => (
              <option key={w.key} value={w.key}>
                {w.nome} ({w.dano} {w.tipoDano})
              </option>
            ))}
          </SelectField>
        </div>
      </CardContent>
    </Card>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Passo 6 — Jutsu inicial
// ─────────────────────────────────────────────────────────────────────────

function StepJutsu({ draft, updateDraft }: { draft: CreationDraft; updateDraft: (p: Partial<CreationDraft>) => void }) {
  const [busca, setBusca] = useState("");
  const options = useMemo(() => {
    const q = busca.trim().toLowerCase();
    const base = starterJutsuOptions();
    if (!q) return base;
    return base.filter((j) => j.nome.toLowerCase().includes(q));
  }, [busca]);

  function toggle(key: string) {
    updateDraft({
      jutsuKeys: draft.jutsuKeys.includes(key) ? draft.jutsuKeys.filter((k) => k !== key) : [...draft.jutsuKeys, key],
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-muted-foreground">Passo 6 — Escolha seu Jutsu</CardTitle>
        <p className="text-[11px] text-muted-foreground mt-1">
          Opcional agora — jutsus de Rank E, o rank de entrada. Você pode aprender mais na aba Jutsu depois de criar o
          personagem.
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <TextField placeholder="Buscar jutsu..." value={busca} onChange={(e) => setBusca(e.target.value)} />
        <p className="text-[11px] text-muted-foreground">{draft.jutsuKeys.length} selecionado(s)</p>
        <div className="flex flex-col gap-1 max-h-[360px] overflow-y-auto">
          {options.map((j) => (
            <label
              key={j.key}
              className={`flex items-center justify-between gap-2 text-xs border rounded-md px-3 py-1.5 cursor-pointer ${
                draft.jutsuKeys.includes(j.key) ? "border-primary text-primary" : "border-border"
              }`}
            >
              <span>
                {j.nome} <span className="text-muted-foreground">({j.tipo}, {j.custoChakra} Chakra)</span>
              </span>
              <input type="checkbox" checked={draft.jutsuKeys.includes(j.key)} onChange={() => toggle(j.key)} />
            </label>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Passo 7 — Revisão
// ─────────────────────────────────────────────────────────────────────────

function StepReview({
  draft,
  clan,
  classe,
  background,
}: {
  draft: CreationDraft;
  clan: ReturnType<typeof getClan>;
  classe: ReturnType<typeof getClass>;
  background: ReturnType<typeof getBackground>;
}) {
  const preview = useMemo(() => assembleCharacter(draft), [draft]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-muted-foreground">Passo 7 — Revisão</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 text-xs">
        <p>
          <span className="text-muted-foreground">Nome:</span> <span className="font-semibold">{preview.identity.nome}</span>
        </p>
        <p>
          <span className="text-muted-foreground">Clã:</span> {clan?.nome ?? "—"} · <span className="text-muted-foreground">Classe:</span>{" "}
          {classe?.nome ?? "—"} · <span className="text-muted-foreground">Antecedente:</span> {background?.nome ?? "—"}
        </p>
        <div className="grid grid-cols-3 gap-2 mt-1">
          {ATTRIBUTE_KEYS.map((key) => (
            <p key={key}>
              <span className="text-muted-foreground uppercase text-[10px]">{ATTRIBUTE_LABELS[key]}:</span>{" "}
              <span className="font-semibold">{preview.attributes[key]}</span>{" "}
              <span className="text-muted-foreground">({formatModifier(abilityModifier(preview.attributes[key]))})</span>
            </p>
          ))}
        </div>
        <p className="mt-1">
          <span className="text-muted-foreground">PV:</span> <span className="font-semibold">{preview.vitals.pvMax}</span> ·{" "}
          <span className="text-muted-foreground">PC:</span> <span className="font-semibold">{preview.vitals.pcMax}</span> ·{" "}
          <span className="text-muted-foreground">CA base:</span> <span className="font-semibold">{10 + preview.combat.armorBonus}</span>
        </p>
        <p>
          <span className="text-muted-foreground">Perícias proficientes:</span>{" "}
          {draft.selectedSkillKeys.length > 0 ? draft.selectedSkillKeys.join(", ") : "nenhuma"}
        </p>
        <p>
          <span className="text-muted-foreground">Equipamento:</span> {preview.inventory.map((i) => i.nome).join(", ") || "nenhum"}
        </p>
        <p>
          <span className="text-muted-foreground">Jutsu conhecido:</span> {draft.jutsuKeys.length} jutsu(s)
        </p>
        <p className="text-[11px] text-primary mt-2">
          Confira tudo e clique em &quot;Criar Personagem&quot; abaixo. Você pode ajustar qualquer coisa depois, na ficha.
        </p>
      </CardContent>
    </Card>
  );
}
