import type { Character } from "@/lib/character/schema";

/** Nome de arquivo seguro a partir do nome do personagem. */
function safeFileName(nome: string): string {
  const slug = nome
    .trim()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return slug || "personagem";
}

/** Dispara o download de um personagem como arquivo `.json` (Fase 7 — backup manual). */
export function downloadCharacterJSON(character: Character) {
  const blob = new Blob([JSON.stringify(character, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `naruto5e-${safeFileName(character.identity.nome)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

/** Dispara o download de todas as fichas salvas como um único arquivo `.json` (backup em lote). */
export function downloadAllCharactersJSON(characters: Character[]) {
  const blob = new Blob([JSON.stringify(characters, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `naruto5e-fichas-backup.json`;
  a.click();
  URL.revokeObjectURL(url);
}

/** Lê um arquivo `.json` escolhido pelo usuário e devolve o conteúdo já parseado. */
export function readJSONFile(file: File): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        resolve(JSON.parse(String(reader.result)));
      } catch {
        reject(new Error("Arquivo não é um JSON válido."));
      }
    };
    reader.onerror = () => reject(new Error("Não foi possível ler o arquivo."));
    reader.readAsText(file);
  });
}
