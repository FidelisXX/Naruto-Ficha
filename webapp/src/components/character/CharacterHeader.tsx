"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowLeft, Camera, ImagePlus, Maximize2, Minimize2, Move, Printer, X } from "lucide-react";
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

  const fileInputRef = useRef<HTMLInputElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startY: number; startPos: number } | null>(null);
  const [localPositionY, setLocalPositionY] = useState<number | null>(null);

  const { imageUrl } = character.identity;
  const imageFit = character.identity.imageFit ?? "cover";
  const positionY = localPositionY ?? character.identity.imagePositionY ?? 50;

  function updateIdentity(patch: Partial<Character["identity"]>) {
    onUpdate((c) => ({ ...c, identity: { ...c.identity, ...patch } }));
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      updateIdentity({ imageUrl: reader.result as string, imagePositionY: 50 });
    };
    reader.readAsDataURL(file);
  }

  function handleBannerClick() {
    if (!imageUrl) fileInputRef.current?.click();
  }

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (!imageUrl || imageFit === "contain") return;
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = { startY: e.clientY, startPos: positionY };
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragRef.current || !bannerRef.current) return;
    const height = bannerRef.current.clientHeight || 1;
    const deltaPercent = ((e.clientY - dragRef.current.startY) / height) * 100;
    const newPos = Math.min(100, Math.max(0, dragRef.current.startPos - deltaPercent));
    setLocalPositionY(newPos);
  }

  function handlePointerUp() {
    if (dragRef.current && localPositionY !== null) {
      updateIdentity({ imagePositionY: localPositionY });
    }
    dragRef.current = null;
    setLocalPositionY(null);
  }

  function handleCenterImage(e: React.MouseEvent) {
    e.stopPropagation();
    updateIdentity({ imagePositionY: 50 });
  }

  function handleRemoveImage(e: React.MouseEvent) {
    e.stopPropagation();
    updateIdentity({ imageUrl: undefined, imagePositionY: undefined, imageFit: undefined });
  }

  function handleToggleFit(e: React.MouseEvent) {
    e.stopPropagation();
    updateIdentity({ imageFit: imageFit === "cover" ? "contain" : "cover" });
  }

  return (
    <header className="bg-surface border-b border-border">
      <div className="mx-auto w-full max-w-4xl px-4 pt-4 pb-5">
        <div
          ref={bannerRef}
          onClick={handleBannerClick}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className={`relative h-44 sm:h-56 rounded-2xl overflow-hidden bg-surface-2 mb-3 touch-none ${
            imageUrl && imageFit === "cover" ? "cursor-move" : imageUrl ? "" : "cursor-pointer"
          }`}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt=""
              draggable={false}
              className={`w-full h-full select-none pointer-events-none ${
                imageFit === "contain" ? "object-contain bg-black" : "object-cover"
              }`}
              style={imageFit === "cover" ? { objectPosition: `center ${positionY}%` } : undefined}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-muted-foreground">
              <ImagePlus size={28} />
              <span className="text-xs font-medium">Adicionar imagem</span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/10 pointer-events-none" />

          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <Link
              href="/"
              aria-label="Voltar para Meus Personagens"
              onClick={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
              className="w-9 h-9 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            >
              <ArrowLeft size={18} />
            </Link>
            {imageUrl && (
              <div className="flex items-center gap-2">
                {imageFit === "cover" && (
                  <button
                    type="button"
                    aria-label="Centralizar imagem"
                    title="Centralizar imagem"
                    onClick={handleCenterImage}
                    onPointerDown={(e) => e.stopPropagation()}
                    className="w-9 h-9 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                  >
                    <Move size={16} />
                  </button>
                )}
                <button
                  type="button"
                  aria-label={imageFit === "cover" ? "Mostrar imagem inteira" : "Preencher o quadro"}
                  title={imageFit === "cover" ? "Mostrar imagem inteira" : "Preencher o quadro"}
                  onClick={handleToggleFit}
                  onPointerDown={(e) => e.stopPropagation()}
                  className="w-9 h-9 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                >
                  {imageFit === "cover" ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button
                  type="button"
                  aria-label="Remover imagem"
                  title="Remover imagem"
                  onClick={handleRemoveImage}
                  onPointerDown={(e) => e.stopPropagation()}
                  className="w-9 h-9 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            )}
          </div>

          {imageUrl && (
            <button
              type="button"
              aria-label="Trocar imagem"
              title="Trocar imagem"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              onPointerDown={(e) => e.stopPropagation()}
              className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            >
              <Camera size={16} />
            </button>
          )}
        </div>
        <input ref={fileInputRef} type="file" accept="image/*" hidden onChange={handleFileChange} />

        <div className="flex items-center justify-end gap-2 mb-3">
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

        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <input
              value={character.identity.nome}
              onChange={(e) => updateIdentity({ nome: e.target.value })}
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
