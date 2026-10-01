"use client";

import { useMemo, useState } from "react";
import type { Character } from "@/lib/character/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { FieldLabel, SelectField, TextField } from "@/components/ui/Field";
import { TalentCard, TALENT_CATEGORY_LABELS } from "@/components/character/TalentCard";
import { TALENT_CATALOG } from "@/lib/catalog/talents";
import type { TalentCategory } from "@/lib/talents/types";
import { CLASS_CATALOG } from "@/lib/catalog/classes";

const CATEGORY_ORDER: TalentCategory[] = [
  "geral",
  "habilidade",
  "chakra",
  "ninjutsu",
  "taijutsu",
  "genjutsu",
  "critico",
  "classe",
];

export function TalentBrowser({
  character,
  onUpdate,
}: {
  character: Character;
  onUpdate: (updater: (character: Character) => Character) => void;
}) {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState<TalentCategory | "">("");
  const [apenasMinhaClasse, setApenasMinhaClasse] = useState(true);

  const klass = CLASS_CATALOG.find((c) => c.nome === character.identity.classe);

  function toggleKnown(key: string) {
    onUpdate((c) => ({
      ...c,
      knownTalents: c.knownTalents.includes(key)
        ? c.knownTalents.filter((k) => k !== key)
        : [...c.knownTalents, key],
    }));
  }

  const known = useMemo(
    () => character.knownTalents.map((key) => TALENT_CATALOG.find((t) => t.key === key)).filter(Boolean),
    [character.knownTalents]
  ) as typeof TALENT_CATALOG;

  const filtered = useMemo(() => {
    const query = busca.trim().toLowerCase();
    return TALENT_CATALOG.filter((t) => {
      if (categoria && t.categoria !== categoria) return false;
      if (categoria === "classe" && apenasMinhaClasse && klass && t.classeKey && t.classeKey !== klass.key) {
        return false;
      }
      if (query) {
        const haystack = `${t.nome} ${t.descricao}`.toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });
  }, [busca, categoria, apenasMinhaClasse, klass]);

  return (
    <div className="flex flex-col gap-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-muted-foreground">Talentos Conhecidos</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {known.length === 0 ? (
            <p className="text-xs text-muted-foreground">
              Nenhum talento marcado ainda — adicione a partir do catálogo abaixo.
            </p>
          ) : (
            known.map((t) => (
              <TalentCard key={t.key} talent={t} isKnown onToggleKnown={() => toggleKnown(t.key)} />
            ))
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-muted-foreground">Catálogo de Talentos</CardTitle>
          <p className="text-[11px] text-muted-foreground mt-1">
            Manual Shinobi, Cap. 13, mais a categoria Classe (Observações do Orochimaru). Categoria
            Clã ainda fora de escopo.
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div>
            <FieldLabel htmlFor="talento-busca">Buscar</FieldLabel>
            <TextField
              id="talento-busca"
              value={busca}
              placeholder="Nome ou trecho da descrição"
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
          <div>
            <FieldLabel htmlFor="talento-categoria">Categoria</FieldLabel>
            <SelectField
              id="talento-categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value as TalentCategory | "")}
            >
              <option value="">Todas as categorias</option>
              {CATEGORY_ORDER.map((cat) => (
                <option key={cat} value={cat}>
                  {TALENT_CATEGORY_LABELS[cat]}
                </option>
              ))}
            </SelectField>
          </div>

          {categoria === "classe" && klass && (
            <label className="flex items-center gap-2 text-xs text-muted-foreground">
              <input
                type="checkbox"
                checked={apenasMinhaClasse}
                onChange={(e) => setApenasMinhaClasse(e.target.checked)}
              />
              Apenas talentos de {klass.nome}
            </label>
          )}

          <p className="text-[11px] text-muted-foreground">
            {filtered.length} talento{filtered.length === 1 ? "" : "s"} encontrado
            {filtered.length === 1 ? "" : "s"}
          </p>

          <div className="flex flex-col gap-2 max-h-[600px] overflow-y-auto">
            {filtered.map((t) => (
              <TalentCard
                key={t.key}
                talent={t}
                isKnown={character.knownTalents.includes(t.key)}
                onToggleKnown={() => toggleKnown(t.key)}
              />
            ))}
            {filtered.length === 0 && (
              <p className="text-xs text-muted-foreground">Nenhum talento encontrado com esses filtros.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
