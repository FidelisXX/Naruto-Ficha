"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Download, Upload } from "lucide-react";
import { useCharacterStore } from "@/store/characterStore";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { downloadAllCharactersJSON, downloadCharacterJSON, readJSONFile } from "@/lib/characterIO";

export default function CharacterListPage() {
  const router = useRouter();
  const hasHydrated = useCharacterStore((state) => state.hasHydrated);
  const characters = useCharacterStore((state) => state.characters);
  const createCharacter = useCharacterStore((state) => state.createCharacter);
  const duplicateCharacter = useCharacterStore((state) => state.duplicateCharacter);
  const removeCharacter = useCharacterStore((state) => state.removeCharacter);
  const importCharacter = useCharacterStore((state) => state.importCharacter);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importMessage, setImportMessage] = useState<string | null>(null);

  const characterList = Object.values(characters).sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  function handleCreate() {
    const character = createCharacter();
    router.push(`/personagem/${character.id}`);
  }

  function handleDuplicate(id: string) {
    const copy = duplicateCharacter(id);
    if (copy) router.push(`/personagem/${copy.id}`);
  }

  function handleRemove(id: string, nome: string) {
    if (window.confirm(`Excluir a ficha de "${nome}"? Essa ação não pode ser desfeita.`)) {
      removeCharacter(id);
    }
  }

  async function handleImportFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setImportMessage(null);
    try {
      const data = await readJSONFile(file);
      const entries = Array.isArray(data) ? data : [data];
      let imported = 0;
      const errors: string[] = [];
      for (const entry of entries) {
        const result = importCharacter(entry);
        if (result.success) imported += 1;
        else if (result.error) errors.push(result.error);
      }
      if (imported > 0) {
        setImportMessage(
          `${imported} ficha${imported === 1 ? "" : "s"} importada${imported === 1 ? "" : "s"} com sucesso.` +
            (errors.length > 0 ? ` (${errors.length} arquivo(s) inválido(s) ignorado(s))` : "")
        );
      } else {
        setImportMessage(errors[0] ?? "Nenhuma ficha válida encontrada no arquivo.");
      }
    } catch (err) {
      setImportMessage(err instanceof Error ? err.message : "Falha ao importar o arquivo.");
    }
  }

  return (
    <main className="flex-1 mx-auto w-full max-w-3xl px-4 py-10">
      <div className="flex items-center justify-between mb-8 gap-3">
        <div>
          <h1 className="text-2xl font-bold">Naruto 5e</h1>
          <p className="text-muted-foreground text-sm">Suas fichas de personagem</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <Button variant="secondary" size="sm" onClick={() => fileInputRef.current?.click()}>
            <Upload size={14} className="inline -mt-0.5 mr-1" />
            Importar
          </Button>
          <input ref={fileInputRef} type="file" accept="application/json" hidden onChange={handleImportFile} />
          <Button onClick={handleCreate}>+ Novo Personagem</Button>
        </div>
      </div>

      {importMessage && (
        <p className="text-xs text-primary mb-4 -mt-4">{importMessage}</p>
      )}

      {!hasHydrated ? (
        <p className="text-muted-foreground text-sm">Carregando fichas salvas…</p>
      ) : characterList.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              Você ainda não tem nenhuma ficha. Suas fichas ficam salvas neste navegador.
            </p>
            <Button onClick={handleCreate}>Criar meu primeiro personagem</Button>
          </CardContent>
        </Card>
      ) : (
        <>
          <ul className="flex flex-col gap-3">
            {characterList.map((character) => (
              <li key={character.id}>
                <Card className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 py-3">
                  <button
                    className="text-left flex-1 cursor-pointer min-w-0"
                    onClick={() => router.push(`/personagem/${character.id}`)}
                  >
                    <p className="font-semibold">{character.identity.nome || "Sem nome"}</p>
                    <p className="text-xs text-muted-foreground">
                      Nível {character.progression.nivel}
                      {character.identity.cla ? ` · Clã ${character.identity.cla}` : ""}
                      {character.identity.classe ? ` · ${character.identity.classe}` : ""}
                    </p>
                  </button>
                  <div className="flex gap-2 shrink-0 flex-wrap">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => downloadCharacterJSON(character)}
                      title="Exportar como JSON"
                    >
                      <Download size={14} />
                    </Button>
                    <Button variant="secondary" size="sm" onClick={() => handleDuplicate(character.id)}>
                      Duplicar
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemove(character.id, character.identity.nome)}
                    >
                      Excluir
                    </Button>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <Button variant="ghost" size="sm" onClick={() => downloadAllCharactersJSON(characterList)}>
              Exportar todas as fichas (backup)
            </Button>
          </div>
        </>
      )}
    </main>
  );
}
