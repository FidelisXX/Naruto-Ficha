import type { Character } from "@/lib/character/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Stepper } from "@/components/ui/Stepper";

const FIELDS: { key: "ryo" | "tdi" | "vontadeDoFogo"; label: string; max?: number }[] = [
  { key: "ryo", label: "Ryo" },
  { key: "tdi", label: "TdI" },
  { key: "vontadeDoFogo", label: "Vontade do Fogo", max: 3 },
];

export function ProgressionPanel({
  character,
  onUpdate,
}: {
  character: Character;
  onUpdate: (updater: (character: Character) => Character) => void;
}) {
  function setField(key: "ryo" | "tdi" | "vontadeDoFogo", value: number) {
    onUpdate((c) => ({ ...c, progression: { ...c.progression, [key]: value } }));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-muted-foreground">Recursos</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-3">
        {FIELDS.map((field) => (
          <div key={field.key} className="flex flex-col items-center gap-1 bg-surface-2 rounded-xl py-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              {field.label}
            </p>
            <Stepper
              size="sm"
              value={character.progression[field.key]}
              min={0}
              max={field.max}
              onChange={(v) => setField(field.key, v)}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
