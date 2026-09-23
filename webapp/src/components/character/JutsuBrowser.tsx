"use client";

import { useMemo, useState } from "react";
import type { Character } from "@/lib/character/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { FieldLabel, SelectField, TextField } from "@/components/ui/Field";
import { JutsuCard } from "@/components/character/JutsuCard";
import { JUTSU_CATALOG } from "@/lib/catalog/jutsu";
import {
  JUTSU_NATUREZA_LABELS,
  JUTSU_RANK_ORDER,
  JUTSU_TIPO_LABELS,
  type JutsuNatureza,
  type JutsuRank,
  type JutsuTipo,
} from "@/lib/jutsu/types";

export function JutsuBrowser({
  character,
  onUpdate,
}: {
  character: Character;
  onUpdate: (updater: (character: Character) => Character) => void;
}) {
  const [busca, setBusca] = useState("");
  const [tipo, setTipo] = useState<JutsuTipo | "">("");
  const [rank, setRank] = useState<JutsuRank | "">("");
  const [natureza, setNatureza] = useState<JutsuNatureza | "">("");

  function toggleKnown(key: string) {
    onUpdate((c) => ({
      ...c,
      knownJutsu: c.knownJutsu.includes(key)
        ? c.knownJutsu.filter((k) => k !== key)
        : [...c.knownJutsu, key],
    }));
  }

  const known = useMemo(
    () => character.knownJutsu.map((key) => JUTSU_CATALOG.find((j) => j.key === key)).filter(Boolean),
    [character.knownJutsu]
  ) as typeof JUTSU_CATALOG;

  const filtered = useMemo(() => {
    const query = busca.trim().toLowerCase();
    return JUTSU_CATALOG.filter((j) => {
      if (tipo && j.tipo !== tipo) return false;
      if (rank && j.rank !== rank) return false;
      if (natureza && j.natureza !== natureza) return false;
      if (query) {
        const haystack = `${j.nome} ${j.palavrasChave.join(" ")} ${j.descricao}`.toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });
  }, [busca, tipo, rank, natureza]);

  return (
    <div className="flex flex-col gap-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-muted-foreground">Jutsus Conhecidos</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {known.length === 0 ? (
            <p className="text-xs text-muted-foreground">
              Nenhum jutsu conhecido ainda — adicione a partir do catálogo abaixo.
            </p>
          ) : (
            known.map((j) => (
              <JutsuCard
                key={j.key}
                jutsu={j}
                character={character}
                isKnown
                onToggleKnown={() => toggleKnown(j.key)}
              />
            ))
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-muted-foreground">Catálogo de Jutsu</CardTitle>
          <p className="text-[11px] text-muted-foreground mt-1">
            Leva inicial: Rank E e D (Anotações do Jiraya). Rank C→S e Jutsus de Invocação ainda
            não catalogados.
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div>
            <FieldLabel htmlFor="jutsu-busca">Buscar</FieldLabel>
            <TextField
              id="jutsu-busca"
              value={busca}
              placeholder="Nome, palavra-chave ou trecho da descrição"
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <FieldLabel htmlFor="jutsu-tipo">Tipo</FieldLabel>
              <SelectField
                id="jutsu-tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value as JutsuTipo | "")}
              >
                <option value="">Todos</option>
                {(Object.keys(JUTSU_TIPO_LABELS) as JutsuTipo[]).map((t) => (
                  <option key={t} value={t}>
                    {JUTSU_TIPO_LABELS[t]}
                  </option>
                ))}
              </SelectField>
            </div>
            <div>
              <FieldLabel htmlFor="jutsu-rank">Rank</FieldLabel>
              <SelectField
                id="jutsu-rank"
                value={rank}
                onChange={(e) => setRank(e.target.value as JutsuRank | "")}
              >
                <option value="">Todos</option>
                {JUTSU_RANK_ORDER.map((r) => (
                  <option key={r} value={r}>
                    Rank {r}
                  </option>
                ))}
              </SelectField>
            </div>
            <div>
              <FieldLabel htmlFor="jutsu-natureza">Natureza</FieldLabel>
              <SelectField
                id="jutsu-natureza"
                value={natureza}
                onChange={(e) => setNatureza(e.target.value as JutsuNatureza | "")}
              >
                <option value="">Todas</option>
                {(Object.keys(JUTSU_NATUREZA_LABELS) as JutsuNatureza[]).map((n) => (
                  <option key={n} value={n}>
                    {JUTSU_NATUREZA_LABELS[n]}
                  </option>
                ))}
              </SelectField>
            </div>
          </div>

          <p className="text-[11px] text-muted-foreground">
            {filtered.length} jutsu{filtered.length === 1 ? "" : "s"} encontrado
            {filtered.length === 1 ? "" : "s"}
          </p>

          <div className="flex flex-col gap-2 max-h-[600px] overflow-y-auto">
            {filtered.map((j) => (
              <JutsuCard
                key={j.key}
                jutsu={j}
                character={character}
                isKnown={character.knownJutsu.includes(j.key)}
                onToggleKnown={() => toggleKnown(j.key)}
              />
            ))}
            {filtered.length === 0 && (
              <p className="text-xs text-muted-foreground">Nenhum jutsu encontrado com esses filtros.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
