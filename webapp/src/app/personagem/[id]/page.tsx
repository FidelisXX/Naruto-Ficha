"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Backpack, BookUser, Flame, ListChecks, User } from "lucide-react";
import { useCharacterStore } from "@/store/characterStore";
import type { Character } from "@/lib/character/schema";
import { CharacterHeader } from "@/components/character/CharacterHeader";
import { QuickStatsRow } from "@/components/character/QuickStatsRow";
import { CombatStatsPanel } from "@/components/character/CombatStatsPanel";
import { ClanAttributeNotice } from "@/components/character/ClanAttributeNotice";
import { DeathSavesPanel } from "@/components/character/DeathSavesPanel";
import { ConditionsPanel } from "@/components/character/ConditionsPanel";
import { ConcentrationPanel } from "@/components/character/ConcentrationPanel";
import { EquipmentPanel } from "@/components/character/EquipmentPanel";
import { InventoryPanel } from "@/components/character/InventoryPanel";
import { AttributesGrid } from "@/components/character/AttributesGrid";
import { IdentityForm } from "@/components/character/IdentityForm";
import { CatalogInfoPanel } from "@/components/character/CatalogInfoPanel";
import { ProgressionPanel } from "@/components/character/ProgressionPanel";
import { SkillsTable } from "@/components/character/SkillsTable";
import { JutsuBrowser } from "@/components/character/JutsuBrowser";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TabBar, type TabBarItem } from "@/components/ui/TabBar";

type TabKey = "ficha" | "identidade" | "itens" | "pericias" | "jutsu";

const TABS: TabBarItem<TabKey>[] = [
  { key: "ficha", label: "Ficha", icon: User },
  { key: "identidade", label: "Bio", icon: BookUser },
  { key: "itens", label: "Itens", icon: Backpack },
  { key: "pericias", label: "Perícias", icon: ListChecks },
  { key: "jutsu", label: "Jutsu", icon: Flame },
];

export default function CharacterSheetPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const [tab, setTab] = useState<TabKey>("ficha");

  const hasHydrated = useCharacterStore((state) => state.hasHydrated);
  const character = useCharacterStore((state) => state.characters[id]);
  const updateCharacter = useCharacterStore((state) => state.updateCharacter);

  if (!hasHydrated) {
    return (
      <main className="flex-1 mx-auto w-full max-w-4xl px-4 py-10">
        <p className="text-muted-foreground text-sm">Carregando ficha…</p>
      </main>
    );
  }

  if (!character) {
    return (
      <main className="flex-1 mx-auto w-full max-w-4xl px-4 py-10">
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
    <div className="flex-1 flex flex-col min-h-dvh">
      <CharacterHeader character={character} onUpdate={onUpdate} />

      <main className="flex-1 mx-auto w-full max-w-4xl px-4 py-4 flex flex-col gap-3">
        {tab === "ficha" && (
          <>
            <QuickStatsRow character={character} onUpdate={onUpdate} />
            {character.vitals.pvAtual <= 0 && (
              <DeathSavesPanel character={character} onUpdate={onUpdate} />
            )}
            <CombatStatsPanel character={character} onUpdate={onUpdate} />
            <ConditionsPanel character={character} onUpdate={onUpdate} />
            <ConcentrationPanel character={character} onUpdate={onUpdate} />
            <ClanAttributeNotice character={character} />
            <AttributesGrid character={character} onUpdate={onUpdate} />
          </>
        )}

        {tab === "itens" && (
          <>
            <EquipmentPanel character={character} onUpdate={onUpdate} />
            <InventoryPanel character={character} onUpdate={onUpdate} />
          </>
        )}

        {tab === "identidade" && (
          <>
            <IdentityForm character={character} onUpdate={onUpdate} />
            <CatalogInfoPanel character={character} onUpdate={onUpdate} />
            <ProgressionPanel character={character} onUpdate={onUpdate} />
            <Card>
              <CardHeader>
                <CardTitle className="text-muted-foreground">Anotações</CardTitle>
                <p className="text-xs text-muted-foreground mt-1">
                  Espaço livre para características de Clã, Classe, Sub-Classe e Talentos, até
                  esses catálogos serem cadastrados no app (Fase 2).
                </p>
              </CardHeader>
              <CardContent>
                <textarea
                  className="w-full min-h-40 rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  value={character.notes}
                  onChange={(e) => onUpdate((c) => ({ ...c, notes: e.target.value }))}
                />
              </CardContent>
            </Card>
          </>
        )}

        {tab === "pericias" && <SkillsTable character={character} onUpdate={onUpdate} />}

        {tab === "jutsu" && (
          <>
            <JutsuBrowser character={character} onUpdate={onUpdate} />
            <Card>
              <CardContent className="flex items-center justify-between gap-3 py-3">
                <p className="text-xs text-muted-foreground">
                  Assistente de criação de jutsu customizado (Fase 5) ainda não foi construído.
                </p>
                <Link href={`/personagem/${id}/jutsu/novo`}>
                  <Button variant="secondary" size="sm">
                    Ver placeholder
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </>
        )}
      </main>

      <TabBar items={TABS} active={tab} onChange={setTab} />
    </div>
  );
}
