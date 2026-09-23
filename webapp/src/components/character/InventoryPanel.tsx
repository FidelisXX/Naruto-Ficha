"use client";

import { useState } from "react";
import { nanoid } from "nanoid";
import { Plus, X } from "lucide-react";
import { clsx } from "clsx";
import type { Character } from "@/lib/character/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FieldLabel, NumberField, SelectField, TextField } from "@/components/ui/Field";
import { abilityModifier, baseInventoryVolume, isOverloaded } from "@/lib/rules";
import { ARMOR_CATALOG, WEAPON_CATALOG } from "@/lib/catalog/equipment";
import { STORAGE_ITEM_CATALOG, TOOL_KIT_CATALOG } from "@/lib/catalog/tools";
import { FIRST_AID_KIT_CATALOG, PILL_CATALOG, SCROLL_TYPE_CATALOG } from "@/lib/catalog/consumables";

interface CatalogEntry {
  key: string;
  nome: string;
  volume: number;
  categoria: string;
}

const CATALOG_ITEMS: CatalogEntry[] = [
  ...ARMOR_CATALOG.map((a) => ({ key: a.key, nome: a.nome, volume: a.volume, categoria: "Armadura" })),
  ...WEAPON_CATALOG.map((w) => ({ key: w.key, nome: w.nome, volume: w.volume, categoria: "Arma" })),
  ...TOOL_KIT_CATALOG.map((k) => ({ key: k.key, nome: k.nome, volume: k.volume, categoria: "Kit" })),
  ...STORAGE_ITEM_CATALOG.map((s) => ({ key: s.key, nome: s.nome, volume: s.volume, categoria: "Armazenamento" })),
  ...PILL_CATALOG.map((p) => ({ key: p.key, nome: p.nome, volume: 1, categoria: "Pílula" })),
  ...FIRST_AID_KIT_CATALOG.map((f) => ({ key: f.key, nome: f.nome, volume: 2, categoria: "Kit" })),
  ...SCROLL_TYPE_CATALOG.map((s) => ({ key: s.key, nome: s.nome, volume: s.volume, categoria: "Pergaminho" })),
];

export function InventoryPanel({
  character,
  onUpdate,
}: {
  character: Character;
  onUpdate: (updater: (character: Character) => Character) => void;
}) {
  const [pendingCatalogKey, setPendingCatalogKey] = useState("");
  const [customNome, setCustomNome] = useState("");
  const [customVolume, setCustomVolume] = useState(1);

  const forMod = abilityModifier(character.attributes.for);
  const capacity = baseInventoryVolume(forMod) + character.inventoryCapacity.bonusArmazenamento;
  const used = character.inventory.reduce((sum, item) => sum + item.volume * item.quantidade, 0);
  const overloaded = isOverloaded(used, capacity);
  const fillPct = Math.min((used / Math.max(capacity, 1)) * 100, 100);

  function addFromCatalog() {
    const entry = CATALOG_ITEMS.find((c) => c.key === pendingCatalogKey);
    if (!entry) return;
    onUpdate((c) => ({
      ...c,
      inventory: [
        ...c.inventory,
        { id: nanoid(), nome: entry.nome, volume: entry.volume, quantidade: 1, categoria: entry.categoria, catalogRef: entry.key },
      ],
    }));
    setPendingCatalogKey("");
  }

  function addCustom() {
    if (!customNome.trim()) return;
    onUpdate((c) => ({
      ...c,
      inventory: [
        ...c.inventory,
        { id: nanoid(), nome: customNome.trim(), volume: customVolume, quantidade: 1 },
      ],
    }));
    setCustomNome("");
    setCustomVolume(1);
  }

  function removeItem(id: string) {
    onUpdate((c) => ({ ...c, inventory: c.inventory.filter((item) => item.id !== id) }));
  }

  function setQuantidade(id: string, quantidade: number) {
    onUpdate((c) => ({
      ...c,
      inventory: c.inventory.map((item) =>
        item.id === id ? { ...item, quantidade: Math.max(1, quantidade) } : item
      ),
    }));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-muted-foreground">Inventário</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted-foreground">Volume</span>
            <span className={clsx("tabular-nums font-semibold", overloaded && "text-accent")}>
              {used} / {capacity}
            </span>
          </div>
          <div className="h-2 rounded-full bg-surface-2 overflow-hidden">
            <div
              className={clsx("h-full rounded-full", overloaded ? "bg-accent" : "bg-primary")}
              style={{ width: `${fillPct}%` }}
            />
          </div>
          {overloaded && (
            <p className="text-[11px] text-accent mt-1">
              Sobrecarregado: velocidade reduzida pela metade e desvantagem em testes, ataques e
              salvamentos de Força/Destreza/Constituição.
            </p>
          )}
          <div className="flex items-center gap-2 mt-2">
            <FieldLabel htmlFor="bonus-armazenamento">Bônus de mochilas/bolsas</FieldLabel>
          </div>
          <NumberField
            id="bonus-armazenamento"
            className="w-24"
            min={0}
            value={character.inventoryCapacity.bonusArmazenamento}
            onChange={(e) =>
              onUpdate((c) => ({
                ...c,
                inventoryCapacity: { bonusArmazenamento: Number(e.target.value) || 0 },
              }))
            }
          />
        </div>

        {character.inventory.length > 0 && (
          <ul className="flex flex-col gap-1.5">
            {character.inventory.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-3 py-1.5"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate">{item.nome}</p>
                  <p className="text-[11px] text-muted-foreground">
                    Vol. {item.volume} {item.categoria ? `· ${item.categoria}` : ""}
                  </p>
                </div>
                <NumberField
                  className="w-14 text-center px-1"
                  min={1}
                  value={item.quantidade}
                  onChange={(e) => setQuantidade(item.id, Number(e.target.value) || 1)}
                />
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="text-muted-foreground hover:text-accent cursor-pointer shrink-0"
                  aria-label={`Remover ${item.nome}`}
                >
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="flex gap-1.5 items-end pt-1 border-t border-border">
          <div className="flex-1">
            <FieldLabel htmlFor="catalog-item">Adicionar do catálogo</FieldLabel>
            <SelectField
              id="catalog-item"
              value={pendingCatalogKey}
              onChange={(e) => setPendingCatalogKey(e.target.value)}
            >
              <option value="">Selecionar item…</option>
              {CATALOG_ITEMS.map((entry) => (
                <option key={entry.key} value={entry.key}>
                  {entry.nome} (Vol. {entry.volume})
                </option>
              ))}
            </SelectField>
          </div>
          <Button variant="secondary" size="sm" onClick={addFromCatalog} disabled={!pendingCatalogKey}>
            <Plus size={14} />
          </Button>
        </div>

        <div className="flex gap-1.5 items-end">
          <div className="flex-1">
            <FieldLabel htmlFor="custom-nome">Item customizado</FieldLabel>
            <TextField
              id="custom-nome"
              value={customNome}
              placeholder="Nome"
              onChange={(e) => setCustomNome(e.target.value)}
            />
          </div>
          <div className="w-20">
            <FieldLabel htmlFor="custom-volume">Volume</FieldLabel>
            <NumberField
              id="custom-volume"
              min={0}
              value={customVolume}
              onChange={(e) => setCustomVolume(Number(e.target.value) || 0)}
            />
          </div>
          <Button variant="secondary" size="sm" onClick={addCustom} disabled={!customNome.trim()}>
            <Plus size={14} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
