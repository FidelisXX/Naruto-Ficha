"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Printer } from "lucide-react";
import { useCharacterStore } from "@/store/characterStore";
import { JUTSU_CATALOG } from "@/lib/catalog/jutsu";
import { ARMOR_CATALOG, WEAPON_CATALOG } from "@/lib/catalog/equipment";
import { CONDITION_CATALOG } from "@/lib/catalog/conditions";
import {
  ATTRIBUTE_KEYS,
  ATTRIBUTE_LABELS,
  SKILL_DEFINITIONS,
  abilityModifier,
  armorClass,
  attackBonus,
  formatModifier,
  initiativeModifier,
  jutsuSaveDC,
  proficiencyBonusForLevel,
  skillProficiencyBonus,
} from "@/lib/rules";

export default function PrintCharacterPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const hasHydrated = useCharacterStore((state) => state.hasHydrated);
  const character = useCharacterStore((state) => state.characters[id]);

  if (!hasHydrated) return null;

  if (!character) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-10">
        <p>Essa ficha não existe (ou foi excluída neste navegador).</p>
        <Link href="/" className="underline text-blue-600">
          Voltar
        </Link>
      </main>
    );
  }

  const proficiencyBonus = proficiencyBonusForLevel(character.progression.nivel);
  const desMod = abilityModifier(character.attributes.des);
  const intMod = abilityModifier(character.attributes.int);
  const sabMod = abilityModifier(character.attributes.sab);
  const forMod = abilityModifier(character.attributes.for);
  const ca = armorClass(character.combat.armorBonus, desMod, proficiencyBonus);
  const iniciativa = initiativeModifier(desMod, proficiencyBonus, character.combat.initiativeBonus);

  const armadura = character.equipment.armaduraKey
    ? ARMOR_CATALOG.find((a) => a.key === character.equipment.armaduraKey)
    : undefined;
  const armaPrincipal = character.equipment.armaPrincipalKey
    ? WEAPON_CATALOG.find((w) => w.key === character.equipment.armaPrincipalKey)
    : undefined;

  const jutsuConhecidos = [
    ...character.customJutsu,
    ...character.knownJutsu.map((key) => JUTSU_CATALOG.find((j) => j.key === key)).filter((j) => j !== undefined),
  ];

  const jutsuAttribute = { ninjutsu: intMod, genjutsu: sabMod, taijutsu: forMod, bukijutsu: forMod } as const;

  return (
    <div className="bg-white text-black min-h-dvh">
      <div className="no-print sticky top-0 z-10 bg-gray-100 border-b border-gray-300 px-4 py-2 flex items-center justify-between">
        <Link href={`/personagem/${id}`} className="text-sm text-gray-600 hover:underline">
          ← Voltar para a ficha
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="flex items-center gap-1.5 text-sm font-medium bg-gray-900 text-white px-3 py-1.5 rounded-md cursor-pointer"
        >
          <Printer size={14} /> Imprimir
        </button>
      </div>

      <main className="mx-auto max-w-3xl px-6 py-8 print:px-0 print:py-0 print:max-w-none flex flex-col gap-5 text-sm">
        {/* Identidade */}
        <section>
          <h1 className="text-2xl font-bold">{character.identity.nome || "Sem nome"}</h1>
          <p className="text-gray-600">
            Nível {character.progression.nivel} · {[character.identity.cla, character.identity.classe, character.identity.subClasse]
              .filter(Boolean)
              .join(" · ") || "Clã/Classe não definidos"}
          </p>
          <p className="text-gray-600 text-xs mt-0.5">
            {[
              character.identity.vila && `Vila: ${character.identity.vila}`,
              character.identity.equipe && `Equipe: ${character.identity.equipe}`,
              character.identity.antecedente && `Antecedente: ${character.identity.antecedente}`,
              character.identity.ambicao && `Ambição: ${character.identity.ambicao}`,
            ]
              .filter(Boolean)
              .join(" · ")}
          </p>
        </section>

        {/* Atributos */}
        <section>
          <h2 className="font-bold uppercase text-xs tracking-widest border-b border-gray-300 mb-2 pb-1">Atributos</h2>
          <div className="grid grid-cols-6 gap-2 text-center">
            {ATTRIBUTE_KEYS.map((key) => (
              <div key={key} className="border border-gray-300 rounded-md px-1 py-1.5">
                <p className="text-[9px] uppercase text-gray-500">{ATTRIBUTE_LABELS[key]}</p>
                <p className="font-bold text-base">{character.attributes[key]}</p>
                <p className="text-xs text-gray-600">{formatModifier(abilityModifier(character.attributes[key]))}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Combate */}
        <section>
          <h2 className="font-bold uppercase text-xs tracking-widest border-b border-gray-300 mb-2 pb-1">Combate</h2>
          <div className="grid grid-cols-3 gap-2 text-center mb-2">
            <Stat label="CA" value={String(ca)} />
            <Stat label="Iniciativa" value={formatModifier(iniciativa)} />
            <Stat label="Prof." value={formatModifier(proficiencyBonus)} />
          </div>
          <div className="grid grid-cols-3 gap-2 text-center mb-2">
            <Stat label="PV" value={`${character.vitals.pvAtual}/${character.vitals.pvMax}${character.vitals.pvTemp ? ` (+${character.vitals.pvTemp})` : ""}`} />
            <Stat label="PC (Chakra)" value={`${character.vitals.pcAtual}/${character.vitals.pcMax}${character.vitals.pcTemp ? ` (+${character.vitals.pcTemp})` : ""}`} />
            <Stat label="Armadura" value={armadura?.nome ?? "—"} />
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <Stat label="Ninjutsu" value={`Atq ${formatModifier(attackBonus(intMod, proficiencyBonus))} · CD ${jutsuSaveDC(intMod, proficiencyBonus)}`} />
            <Stat label="Genjutsu" value={`Atq ${formatModifier(attackBonus(sabMod, proficiencyBonus))} · CD ${jutsuSaveDC(sabMod, proficiencyBonus)}`} />
            <Stat label="Taijutsu" value={`Atq ${formatModifier(attackBonus(forMod, proficiencyBonus))} · CD ${jutsuSaveDC(forMod, proficiencyBonus)}`} />
          </div>
          {armaPrincipal && (
            <p className="text-xs text-gray-600 mt-2">
              Arma principal: {armaPrincipal.nome} ({armaPrincipal.dano} {armaPrincipal.tipoDano})
            </p>
          )}
        </section>

        {/* Condições ativas */}
        {character.conditions.length > 0 && (
          <section>
            <h2 className="font-bold uppercase text-xs tracking-widest border-b border-gray-300 mb-2 pb-1">Condições Ativas</h2>
            <p className="text-xs">
              {character.conditions
                .map((c) => {
                  const def = CONDITION_CATALOG.find((d) => d.key === c.key);
                  return `${def?.nome ?? c.key}${def?.graduavel ? ` (grau ${c.graduacao})` : ""}`;
                })
                .join(", ")}
            </p>
          </section>
        )}

        {/* Perícias */}
        <section className="break-inside-avoid">
          <h2 className="font-bold uppercase text-xs tracking-widest border-b border-gray-300 mb-2 pb-1">Perícias</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-0.5 text-xs">
            {SKILL_DEFINITIONS.map((skill) => {
              const state = character.skills[skill.key];
              const attr = state?.attributeOverride ?? skill.attribute;
              const mod = abilityModifier(character.attributes[attr]);
              const bonus = mod + skillProficiencyBonus(state?.proficiency ?? "none", proficiencyBonus);
              return (
                <div key={skill.key} className="flex items-center justify-between border-b border-dotted border-gray-200 py-0.5">
                  <span>
                    {skill.label} <span className="text-gray-400">({ATTRIBUTE_LABELS[attr].slice(0, 3)})</span>
                  </span>
                  <span className="font-semibold tabular-nums">{formatModifier(bonus)}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Inventário */}
        {character.inventory.length > 0 && (
          <section className="break-inside-avoid">
            <h2 className="font-bold uppercase text-xs tracking-widest border-b border-gray-300 mb-2 pb-1">Inventário</h2>
            <ul className="text-xs grid grid-cols-2 gap-x-6">
              {character.inventory.map((item) => (
                <li key={item.id} className="flex justify-between border-b border-dotted border-gray-200 py-0.5">
                  <span>{item.nome}</span>
                  <span className="text-gray-500 tabular-nums">x{item.quantidade}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Jutsus conhecidos */}
        {jutsuConhecidos.length > 0 && (
          <section className="break-inside-avoid">
            <h2 className="font-bold uppercase text-xs tracking-widest border-b border-gray-300 mb-2 pb-1">Jutsus Conhecidos</h2>
            <div className="flex flex-col gap-2">
              {jutsuConhecidos.map((j) => (
                <div key={j.key} className="border border-gray-300 rounded-md px-2 py-1.5 break-inside-avoid">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-xs">
                      {j.nome} <span className="text-gray-500 font-normal">(Rank {j.rank})</span>
                    </p>
                    <p className="text-xs text-gray-600">
                      {j.custoChakra} Chakra · Atq {formatModifier(attackBonus(jutsuAttribute[j.tipo], proficiencyBonus))} · CD{" "}
                      {jutsuSaveDC(jutsuAttribute[j.tipo], proficiencyBonus)}
                    </p>
                  </div>
                  <p className="text-[11px] text-gray-600 mt-0.5">{j.descricao}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Anotações */}
        {character.notes.trim() && (
          <section className="break-inside-avoid">
            <h2 className="font-bold uppercase text-xs tracking-widest border-b border-gray-300 mb-2 pb-1">Anotações</h2>
            <p className="text-xs whitespace-pre-line">{character.notes}</p>
          </section>
        )}
      </main>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-gray-300 rounded-md px-1 py-1.5">
      <p className="text-[9px] uppercase text-gray-500">{label}</p>
      <p className="font-bold text-sm">{value}</p>
    </div>
  );
}
