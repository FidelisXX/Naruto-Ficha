"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useCharacterStore } from "@/store/characterStore";
import type { Character } from "@/lib/character/schema";
import { JutsuCustomizeWizard } from "@/components/character/JutsuCustomizeWizard";

export default function CustomizeJutsuPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const hasHydrated = useCharacterStore((state) => state.hasHydrated);
  const character = useCharacterStore((state) => state.characters[id]);
  const updateCharacter = useCharacterStore((state) => state.updateCharacter);

  if (!hasHydrated) {
    return (
      <main className="flex-1 mx-auto w-full max-w-2xl px-4 py-10">
        <p className="text-muted-foreground text-sm">Carregando…</p>
      </main>
    );
  }

  if (!character) {
    return (
      <main className="flex-1 mx-auto w-full max-w-2xl px-4 py-10">
        <p className="mb-4">Essa ficha não existe (ou foi excluída neste navegador).</p>
        <Link href="/" className="underline text-primary">
          Voltar para a lista de personagens
        </Link>
      </main>
    );
  }

  function onUpdate(updater: (character: Character) => Character) {
    updateCharacter(id, updater);
  }

  return (
    <main className="flex-1 mx-auto w-full max-w-2xl px-4 py-10 flex flex-col gap-4">
      <Link href={`/personagem/${id}`} className="text-sm text-muted-foreground hover:underline">
        ← Voltar para a ficha
      </Link>
      <div>
        <h1 className="text-xl font-bold">Personalizar Jutsu</h1>
        <p className="text-xs text-muted-foreground mt-1">
          Pegue um jutsu já conhecido e modifique-o — Manual Shinobi, &quot;Personalizando um Jutsu&quot; (p.152-155).
        </p>
      </div>
      <JutsuCustomizeWizard character={character} onUpdate={onUpdate} />
    </main>
  );
}
