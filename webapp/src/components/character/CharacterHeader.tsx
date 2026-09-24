"use client";

import Link from "next/link";
import { ArrowLeft, Printer } from "lucide-react";
import type { Character } from "@/lib/character/schema";
import { Stepper } from "@/components/ui/Stepper";
import { ThemeToggle } from "@/components/ThemeToggle";
import { formatModifier, proficiencyBonusForLevel, xpProgressForLevel } from "@/lib/rules";

export function CharacterHeader({
  character,
  onUpdate,
}: {
  character: Character;
  onUpdate: (updater: (character: Character) => Character) => void;
}) {
  const { nivel, xp } = character.progression;
  const { current, next, progress } = xpProgressForLevel(nivel, xp);
  const atMaxLevel = nivel >= 20;

  return (
    <header className="bg-surface border-b border-border">
      <div className="mx-auto w-full max-w-4xl px-4 pt-4 pb-5">
        <div className="flex items-center justify-between mb-4">
          <Link
            href="/"
            aria-label="Voltar para Meus Personagens"
            className="w-9 h-9 rounded-full bg-surface-2 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={18} />
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground bg-surface-2 px-2.5 py-1 rounded-full">
              PJ
            </span>
            <Link
              href={`/personagem/${character.id}/imprimir`}
              aria-label="Imprimir ficha"
              title="Imprimir ficha"
              className="w-9 h-9 rounded-full bg-surface-2 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Printer size={16} />
            </Link>
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <input
              value={character.identity.nome}
              onChange={(e) =>
                onUpdate((c) => ({ ...c, identity: { ...c.identity, nome: e.target.value } }))
              }
              placeholder="Nome do personagem"
              className="w-full bg-transparent text-2xl sm:text-3xl font-extrabold uppercase tracking-tight outline-none placeholder:text-muted-foreground/50"
            />
            <p className="text-xs text-muted-foreground mt-1 truncate">
              {[character.identity.cla, character.identity.classe].filter(Boolean).join(" · ") ||
                "Clã e Classe ainda não definidos"}
            </p>
          </div>

          <div className="shrink-0 bg-surface-2 rounded-xl px-3 py-2 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">
              Nível
            </p>
            <Stepper
              size="sm"
              value={nivel}
              min={1}
              max={20}
              onChange={(value) =>
                onUpdate((c) => ({ ...c, progression: { ...c.progression, nivel: value } }))
              }
            />
            <p className="text-[10px] text-muted-foreground mt-0.5 tabular-nums">
              Prof. {formatModifier(proficiencyBonusForLevel(nivel))}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1 tabular-nums">
            <span>{current} XP</span>
            <button
              type="button"
              className="text-primary font-semibold cursor-pointer"
              onClick={() => {
                const input = window.prompt("XP atual:", String(xp));
                if (input === null) return;
                const parsed = Number(input);
                if (Number.isNaN(parsed)) return;
                onUpdate((c) => ({ ...c, progression: { ...c.progression, xp: Math.max(0, parsed) } }));
              }}
            >
              {xp} XP · editar
            </button>
            <span>{atMaxLevel ? "Nível máximo" : `${next} XP`}</span>
          </div>
          <div className="h-1.5 rounded-full bg-surface-2 overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
