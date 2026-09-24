"use client";

import Link from "next/link";
import { useCharacterStore } from "@/store/characterStore";
import { CharacterCreationWizard } from "@/components/characterCreation/CharacterCreationWizard";

export default function NewCharacterWizardPage() {
  const hasHydrated = useCharacterStore((state) => state.hasHydrated);

  if (!hasHydrated) {
    return (
      <main className="flex-1 mx-auto w-full max-w-2xl px-4 py-10">
        <p className="text-muted-foreground text-sm">Carregando…</p>
      </main>
    );
  }

  return (
    <main className="flex-1 mx-auto w-full max-w-2xl px-4 py-10 flex flex-col gap-4">
      <Link href="/" className="text-sm text-muted-foreground hover:underline">
        ← Voltar para a lista de personagens
      </Link>
      <div>
        <h1 className="text-xl font-bold">Criar Personagem</h1>
        <p className="text-xs text-muted-foreground mt-1">
          Assistente de criação guiada — Manual Shinobi, &quot;Personagem Passo a Passo&quot; (Cap. 1, p.8-14).
        </p>
      </div>
      <CharacterCreationWizard />
    </main>
  );
}
