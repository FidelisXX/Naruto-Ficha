"use client";

import { useRouter } from "next/navigation";
import { useCharacterStore } from "@/store/characterStore";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export default function CharacterListPage() {
  const router = useRouter();
  const hasHydrated = useCharacterStore((state) => state.hasHydrated);
  const characters = useCharacterStore((state) => state.characters);
  const createCharacter = useCharacterStore((state) => state.createCharacter);
  const duplicateCharacter = useCharacterStore((state) => state.duplicateCharacter);
  const removeCharacter = useCharacterStore((state) => state.removeCharacter);

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

  return (
    <main className="flex-1 mx-auto w-full max-w-3xl px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Naruto 5e</h1>
          <p className="text-muted-foreground text-sm">Suas fichas de personagem</p>
        </div>
        <Button onClick={handleCreate}>+ Novo Personagem</Button>
      </div>

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
        <ul className="flex flex-col gap-3">
          {characterList.map((character) => (
            <li key={character.id}>
              <Card className="flex items-center justify-between gap-4 px-4 py-3">
                <button
                  className="text-left flex-1 cursor-pointer"
                  onClick={() => router.push(`/personagem/${character.id}`)}
                >
                  <p className="font-semibold">{character.identity.nome || "Sem nome"}</p>
                  <p className="text-xs text-muted-foreground">
                    Nível {character.progression.nivel}
                    {character.identity.cla ? ` · Clã ${character.identity.cla}` : ""}
                    {character.identity.classe ? ` · ${character.identity.classe}` : ""}
                  </p>
                </button>
                <div className="flex gap-2 shrink-0">
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
      )}
    </main>
  );
}
