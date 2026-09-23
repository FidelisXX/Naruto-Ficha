import type { Character, CharacterIdentity } from "@/lib/character/schema";
import { FieldLabel, TextField } from "@/components/ui/Field";
import { CatalogSelect } from "@/components/ui/CatalogSelect";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { CLASS_CATALOG } from "@/lib/catalog/classes";
import { BACKGROUND_CATALOG } from "@/lib/catalog/backgrounds";
import { CLAN_CATALOG } from "@/lib/catalog/clans";

const TEXT_FIELDS: { key: keyof CharacterIdentity; label: string; placeholder?: string }[] = [
  { key: "subClasse", label: "Sub-Classe" },
  { key: "vila", label: "Vila" },
  { key: "equipe", label: "Equipe" },
];

const CLASS_NAMES = CLASS_CATALOG.map((c) => c.nome);
const BACKGROUND_NAMES = BACKGROUND_CATALOG.map((b) => b.nome);
const CLAN_NAMES = CLAN_CATALOG.map((c) => c.nome);

export function IdentityForm({
  character,
  onUpdate,
}: {
  character: Character;
  onUpdate: (updater: (character: Character) => Character) => void;
}) {
  function setField(key: keyof CharacterIdentity, value: string) {
    onUpdate((c) => ({ ...c, identity: { ...c.identity, [key]: value } }));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-muted-foreground">Identidade</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="col-span-2 sm:col-span-4">
          <FieldLabel htmlFor="nome">Nome</FieldLabel>
          <TextField
            id="nome"
            value={character.identity.nome}
            onChange={(e) => setField("nome", e.target.value)}
          />
        </div>

        <CatalogSelect
          id="cla"
          label="Clã"
          value={character.identity.cla}
          onChange={(value) => setField("cla", value)}
          options={CLAN_NAMES}
        />
        <CatalogSelect
          id="classe"
          label="Classe"
          value={character.identity.classe}
          onChange={(value) => setField("classe", value)}
          options={CLASS_NAMES}
        />
        <CatalogSelect
          id="antecedente"
          label="Antecedente"
          value={character.identity.antecedente}
          onChange={(value) => setField("antecedente", value)}
          options={BACKGROUND_NAMES}
        />

        {TEXT_FIELDS.map((field) => (
          <div key={field.key}>
            <FieldLabel htmlFor={field.key}>{field.label}</FieldLabel>
            <TextField
              id={field.key}
              placeholder={field.placeholder}
              value={character.identity[field.key]}
              onChange={(e) => setField(field.key, e.target.value)}
            />
          </div>
        ))}

        <div className="col-span-2 sm:col-span-4">
          <FieldLabel htmlFor="ambicao">Ambição</FieldLabel>
          <TextField
            id="ambicao"
            value={character.identity.ambicao}
            onChange={(e) => setField("ambicao", e.target.value)}
          />
        </div>
      </CardContent>
    </Card>
  );
}
