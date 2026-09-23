import type { Character } from "@/lib/character/schema";
import type { SkillProficiencyLevel } from "@/lib/character/schema";
import { SelectField } from "@/components/ui/Field";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import {
  ATTRIBUTE_KEYS,
  ATTRIBUTE_LABELS,
  SKILL_DEFINITIONS,
  SKILL_PROFICIENCY_LABELS,
  abilityModifier,
  formatModifier,
  maxMasteryTierForLevel,
  proficiencyBonusForLevel,
  skillProficiencyBonus,
} from "@/lib/rules";

const PROFICIENCY_OPTIONS: SkillProficiencyLevel[] = [
  "none",
  "proficient",
  "mastery1",
  "mastery2",
  "mastery3",
];

const MASTERY_RANK: Record<SkillProficiencyLevel, number> = {
  none: 0,
  proficient: 0,
  mastery1: 1,
  mastery2: 2,
  mastery3: 3,
};

export function SkillsTable({
  character,
  onUpdate,
}: {
  character: Character;
  onUpdate: (updater: (character: Character) => Character) => void;
}) {
  const proficiencyBonus = proficiencyBonusForLevel(character.progression.nivel);
  const maxMastery = maxMasteryTierForLevel(character.progression.nivel);

  function setProficiency(skillKey: string, proficiency: SkillProficiencyLevel) {
    onUpdate((c) => ({
      ...c,
      skills: {
        ...c.skills,
        [skillKey]: { ...c.skills[skillKey], proficiency },
      },
    }));
  }

  function setAttributeOverride(skillKey: string, attribute: string) {
    onUpdate((c) => ({
      ...c,
      skills: {
        ...c.skills,
        [skillKey]: {
          ...c.skills[skillKey],
          attributeOverride: attribute === "" ? undefined : (attribute as (typeof ATTRIBUTE_KEYS)[number]),
        },
      },
    }));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-muted-foreground">Perícias</CardTitle>
        <p className="text-xs text-muted-foreground mt-1">
          Teto de Maestria no nível atual: {maxMastery === 0 ? "nenhuma" : `nível ${maxMastery}`}.
        </p>
      </CardHeader>
      <CardContent className="p-0 pt-3">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-muted-foreground border-b border-border">
              <th className="px-4 py-2 font-medium">Perícia</th>
              <th className="px-2 py-2 font-medium">Atrib.</th>
              <th className="px-2 py-2 font-medium">Proficiência</th>
              <th className="px-2 py-2 font-medium text-right">Bônus</th>
            </tr>
          </thead>
          <tbody>
            {SKILL_DEFINITIONS.map((skill) => {
              const state = character.skills[skill.key] ?? { proficiency: "none" as const };
              const effectiveAttribute = state.attributeOverride ?? skill.attribute;
              const modifier = abilityModifier(character.attributes[effectiveAttribute]);
              const bonus = modifier + skillProficiencyBonus(state.proficiency, proficiencyBonus);
              const exceedsMastery = MASTERY_RANK[state.proficiency] > maxMastery;

              return (
                <tr key={skill.key} className="border-b border-border last:border-0">
                  <td className="px-4 py-1.5">{skill.label}</td>
                  <td className="px-2 py-1.5">
                    <select
                      className="text-xs bg-transparent border border-border rounded px-1 py-0.5"
                      value={effectiveAttribute}
                      onChange={(e) => setAttributeOverride(skill.key, e.target.value)}
                    >
                      {ATTRIBUTE_KEYS.map((key) => (
                        <option key={key} value={key}>
                          {ATTRIBUTE_LABELS[key].slice(0, 3)}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-2 py-1.5">
                    <SelectField
                      className="py-1 text-xs"
                      value={state.proficiency}
                      onChange={(e) => setProficiency(skill.key, e.target.value as SkillProficiencyLevel)}
                    >
                      {PROFICIENCY_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {SKILL_PROFICIENCY_LABELS[option]}
                        </option>
                      ))}
                    </SelectField>
                    {exceedsMastery && (
                      <p className="text-[10px] text-accent mt-0.5">Acima do teto de nível</p>
                    )}
                  </td>
                  <td className="px-2 py-1.5 text-right font-semibold tabular-nums">
                    {formatModifier(bonus)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
