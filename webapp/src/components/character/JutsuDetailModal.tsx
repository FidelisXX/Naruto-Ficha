"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import type { Character } from "@/lib/character/schema";
import type { JutsuDefinition } from "@/lib/jutsu/types";
import { JUTSU_NATUREZA_LABELS, JUTSU_TIPO_LABELS } from "@/lib/jutsu/types";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { RANK_COLOR, TIPO_ATTRIBUTE } from "@/components/character/JutsuCard";
import {
  abilityModifier,
  attackBonus,
  formatModifier,
  jutsuSaveDC,
  proficiencyBonusForLevel,
} from "@/lib/rules";

export function JutsuDetailModal({
  jutsu,
  character,
  onClose,
}: {
  jutsu: JutsuDefinition;
  character: Character;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const proficiencyBonus = proficiencyBonusForLevel(character.progression.nivel);
  const mod = abilityModifier(character.attributes[TIPO_ATTRIBUTE[jutsu.tipo]]);

  const infoFields: [string, string][] = [
    ["Custo Chakra", jutsu.custoChakraTexto ?? `${jutsu.custoChakra} pontos`],
    ["Tempo de Ação", jutsu.tempoConjuracao],
    ["Alcance", jutsu.alcance],
    ["Duração", jutsu.duracao],
    ["Componentes", jutsu.componentes.join(", ") || "—"],
    ["Ataque / CD", `${formatModifier(attackBonus(mod, proficiencyBonus))} · CD ${jutsuSaveDC(mod, proficiencyBonus)}`],
  ];

  function handleCopy() {
    const text = [
      jutsu.nome,
      `${JUTSU_TIPO_LABELS[jutsu.tipo]}${jutsu.natureza ? ` · ${JUTSU_NATUREZA_LABELS[jutsu.natureza]}` : ""} · Rank ${jutsu.rank}`,
      `Conjuração: ${jutsu.tempoConjuracao} · Alcance: ${jutsu.alcance} · Duração: ${jutsu.duracao}`,
      `Componentes: ${jutsu.componentes.join(", ") || "—"} · Custo: ${jutsu.custoChakraTexto ?? `${jutsu.custoChakra} Chakra`}`,
      "",
      jutsu.descricao,
      jutsu.emNiveisSuperiores ? `\nEm Níveis Superiores: ${jutsu.emNiveisSuperiores}` : "",
    ].join("\n");
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <Modal title={jutsu.nome} onClose={onClose}>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`text-[11px] font-bold uppercase tracking-wide border rounded-md px-1.5 py-0.5 ${RANK_COLOR[jutsu.rank]}`}
          >
            Rank {jutsu.rank}
          </span>
          <span className="text-xs text-muted-foreground">
            {JUTSU_TIPO_LABELS[jutsu.tipo]}
            {jutsu.natureza ? ` · ${JUTSU_NATUREZA_LABELS[jutsu.natureza]}` : ""}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {infoFields.map(([label, value]) => (
            <div key={label} className="rounded-lg bg-surface-2 px-3 py-2">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
              <p className="text-sm font-semibold mt-0.5">{value}</p>
            </div>
          ))}
        </div>

        {jutsu.palavrasChave.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {jutsu.palavrasChave.map((kw) => (
              <span
                key={kw}
                className="text-[10px] uppercase tracking-wide text-primary bg-primary/10 rounded px-1.5 py-0.5"
              >
                {kw}
              </span>
            ))}
          </div>
        )}

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
            Efeito
          </p>
          <p className="text-sm text-muted-foreground whitespace-pre-line">{jutsu.descricao}</p>
          {jutsu.emNiveisSuperiores && (
            <p className="text-xs text-primary mt-2">Em Níveis Superiores: {jutsu.emNiveisSuperiores}</p>
          )}
        </div>

        <div className="flex justify-end pt-2 border-t border-border">
          <Button variant="secondary" size="sm" onClick={handleCopy}>
            {copied ? (
              <>
                <Check size={14} className="mr-1 inline" /> Copiado
              </>
            ) : (
              <>
                <Copy size={14} className="mr-1 inline" /> Copiar regra
              </>
            )}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
