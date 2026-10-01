"use client";

import { useMemo, useState } from "react";
import { Dices } from "lucide-react";
import type { Character } from "@/lib/character/schema";
import type { ClassDefinition } from "@/lib/catalog/classes";
import type { ClassProgressionDefinition, SubclassDefinition } from "@/lib/classProgression/types";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { CLASS_CATALOG } from "@/lib/catalog/classes";
import { getClassProgression } from "@/lib/catalog/classProgression";
import { abilityModifier, formatModifier } from "@/lib/rules";

type DieChoice = { mode: "rolar" | "media"; raw: number; total: number };
type LevelChoices = { pv?: DieChoice; pc?: DieChoice };

/** Ganho mínimo de 1 por nível, mesmo com modificador de Constituição muito negativo. */
function averageGain(die: number, conMod: number): DieChoice {
  const raw = Math.floor(die / 2) + 1;
  return { mode: "media", raw, total: Math.max(1, raw + conMod) };
}

function rollGain(die: number, conMod: number): DieChoice {
  const raw = Math.ceil(Math.random() * die);
  return { mode: "rolar", raw, total: Math.max(1, raw + conMod) };
}

function DieChoiceRow({
  label,
  die,
  conMod,
  choice,
  onChoose,
}: {
  label: string;
  die: number;
  conMod: number;
  choice?: DieChoice;
  onChoose: (choice: DieChoice) => void;
}) {
  const avg = averageGain(die, conMod);
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">
        {label} (d{die})
      </p>
      <div className="flex flex-wrap items-center gap-1.5">
        <Button
          type="button"
          variant={choice?.mode === "rolar" ? "primary" : "secondary"}
          size="sm"
          className="px-2 py-1 text-xs"
          onClick={() => onChoose(rollGain(die, conMod))}
        >
          <Dices size={13} className="mr-1 inline" /> Rolar
        </Button>
        <Button
          type="button"
          variant={choice?.mode === "media" ? "primary" : "secondary"}
          size="sm"
          className="px-2 py-1 text-xs"
          onClick={() => onChoose(avg)}
        >
          Usar média (+{avg.total})
        </Button>
      </div>
      {choice && (
        <p className="text-[11px] text-muted-foreground mt-1 tabular-nums">
          {choice.mode === "rolar" ? `Rolou ${choice.raw}` : `Média ${choice.raw}`}{" "}
          {formatModifier(conMod)} de Con = <strong className="text-foreground">+{choice.total}</strong>
        </p>
      )}
    </div>
  );
}

function LevelGainBlock({
  level,
  klass,
  progression,
  subclass,
  conMod,
  choice,
  onChoosePv,
  onChoosePc,
}: {
  level: number;
  klass: ClassDefinition;
  progression?: ClassProgressionDefinition;
  subclass?: SubclassDefinition;
  conMod: number;
  choice?: LevelChoices;
  onChoosePv: (choice: DieChoice) => void;
  onChoosePc: (choice: DieChoice) => void;
}) {
  const levelRow = progression?.levels.find((l) => l.nivel === level);
  const prevRow = progression?.levels.find((l) => l.nivel === level - 1);
  const classFeatures = progression?.features.filter((f) => f.nivel === level) ?? [];
  const subclassFeatures = subclass?.features.filter((f) => f.nivel === level) ?? [];
  const needsSubclassChoice = !!progression && !subclass && level === progression.nivelEscolhaSubclasse;
  const changedColumns = levelRow
    ? Object.entries(levelRow.colunasExtras).filter(([key, value]) => !prevRow || prevRow.colunasExtras[key] !== value)
    : [];
  const profChanged = !!levelRow && !!prevRow && levelRow.bonusProficiencia !== prevRow.bonusProficiencia;

  const hasGains =
    classFeatures.length > 0 ||
    subclassFeatures.length > 0 ||
    changedColumns.length > 0 ||
    profChanged ||
    needsSubclassChoice;

  return (
    <div className="border border-border rounded-xl p-3 flex flex-col gap-3">
      <p className="text-sm font-bold">Nível {level}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <DieChoiceRow label="Vida" die={klass.hitDie} conMod={conMod} choice={choice?.pv} onChoose={onChoosePv} />
        <DieChoiceRow
          label="Chakra"
          die={klass.chakraDie}
          conMod={conMod}
          choice={choice?.pc}
          onChoose={onChoosePc}
        />
      </div>

      {hasGains && (
        <div className="flex flex-col gap-1.5 border-t border-border pt-2">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Você ganhou
          </p>
          {profChanged && (
            <p className="text-xs">
              Bônus de Proficiência:{" "}
              <strong className="text-foreground">{formatModifier(levelRow!.bonusProficiencia)}</strong>
            </p>
          )}
          {changedColumns.map(([key, value]) => (
            <p key={key} className="text-xs">
              {key}: <strong className="text-foreground">{value}</strong>
            </p>
          ))}
          {classFeatures.map((f) => (
            <div key={f.nome} className="text-xs">
              <span className="text-primary font-semibold">{f.nome}</span>
              <p className="text-muted-foreground line-clamp-2">{f.descricao}</p>
            </div>
          ))}
          {subclassFeatures.map((f) => (
            <div key={f.nome} className="text-xs">
              <span className="text-primary font-semibold">{f.nome}</span>{" "}
              <span className="text-muted-foreground">({subclass!.nome})</span>
              <p className="text-muted-foreground line-clamp-2">{f.descricao}</p>
            </div>
          ))}
          {needsSubclassChoice && (
            <p className="text-[11px] text-accent">
              Escolha sua {progression!.nomeGrupoSubclasse} na aba Bio para destravar as características
              dela.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export function LevelUpModal({
  character,
  targetLevel,
  onClose,
  onConfirm,
}: {
  character: Character;
  targetLevel: number;
  onClose: () => void;
  onConfirm: (updater: (character: Character) => Character) => void;
}) {
  const fromLevel = character.progression.nivel;
  const levels = useMemo(
    () => Array.from({ length: Math.max(targetLevel - fromLevel, 0) }, (_, i) => fromLevel + 1 + i),
    [fromLevel, targetLevel]
  );

  const klass = CLASS_CATALOG.find((c) => c.nome === character.identity.classe);
  const progression = klass ? getClassProgression(klass.key) : undefined;
  const subclass = progression?.subclasses.find((s) => s.nome === character.identity.subClasse);
  const conMod = abilityModifier(character.attributes.con);

  const [choices, setChoices] = useState<Record<number, LevelChoices>>({});

  function setChoice(level: number, key: "pv" | "pc", choice: DieChoice) {
    setChoices((prev) => ({ ...prev, [level]: { ...prev[level], [key]: choice } }));
  }

  const allChosen = levels.every((l) => choices[l]?.pv && choices[l]?.pc);
  const totalPv = levels.reduce((sum, l) => sum + (choices[l]?.pv?.total ?? 0), 0);
  const totalPc = levels.reduce((sum, l) => sum + (choices[l]?.pc?.total ?? 0), 0);

  function applyLevelUp(pvGain: number, pcGain: number) {
    onConfirm((c) => ({
      ...c,
      progression: { ...c.progression, nivel: targetLevel },
      vitals: {
        ...c.vitals,
        pvMax: c.vitals.pvMax + pvGain,
        pvAtual: c.vitals.pvAtual + pvGain,
        pcMax: c.vitals.pcMax + pcGain,
        pcAtual: c.vitals.pcAtual + pcGain,
      },
    }));
  }

  if (!klass) {
    return (
      <Modal title={`Subir para o nível ${targetLevel}`} onClose={onClose}>
        <p className="text-sm text-muted-foreground">
          Defina uma Classe na aba Bio para registrar o ganho de Vida e Chakra ao subir de nível.
        </p>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="secondary" size="sm" onClick={onClose}>
            Cancelar
          </Button>
          <Button size="sm" onClick={() => applyLevelUp(0, 0)}>
            Confirmar
          </Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal title={`Subir para o nível ${targetLevel}`} onClose={onClose}>
      <div className="flex flex-col gap-3">
        {levels.map((level) => (
          <LevelGainBlock
            key={level}
            level={level}
            klass={klass}
            progression={progression}
            subclass={subclass}
            conMod={conMod}
            choice={choices[level]}
            onChoosePv={(choice) => setChoice(level, "pv", choice)}
            onChoosePc={(choice) => setChoice(level, "pc", choice)}
          />
        ))}
      </div>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
        <p className="text-xs text-muted-foreground tabular-nums">
          Total: +{totalPv} PV · +{totalPc} PC
        </p>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm" onClick={onClose}>
            Cancelar
          </Button>
          <Button size="sm" disabled={!allChosen} onClick={() => applyLevelUp(totalPv, totalPc)}>
            Aplicar
          </Button>
        </div>
      </div>
    </Modal>
  );
}
