import { Sparkles } from "lucide-react";
import type { Character } from "@/lib/character/schema";
import { CLAN_CATALOG } from "@/lib/catalog/clans";
import { ATTRIBUTE_LABELS, formatModifier } from "@/lib/rules";

/**
 * Aviso compacto mostrado junto aos atributos, lembrando quanto o clã
 * selecionado concede — os valores não são somados automaticamente (ver
 * CatalogInfoPanel), então o jogador precisa aplicar manualmente aqui.
 */
export function ClanAttributeNotice({ character }: { character: Character }) {
  const clan = CLAN_CATALOG.find((c) => c.nome === character.identity.cla);
  if (!clan) return null;

  const bonusEntries = Object.entries(clan.atributos).filter(([, value]) => !!value);
  const hasBonus = bonusEntries.length > 0 || !!clan.atributoEscolha;

  if (!hasBonus) {
    if (clan.bonusCompleto) return null; // ex: Sem Clã, sem bônus mesmo.
    return (
      <div className="rounded-xl border border-border bg-surface-2 px-3 py-2 text-xs text-muted-foreground flex items-center gap-2">
        <Sparkles size={14} className="shrink-0 text-muted-foreground" />
        <span>
          O clã <strong className="text-foreground">{clan.nome}</strong> ainda não tem o bônus de
          atributo catalogado no app — confira o livro Estudos da Tsunade.
        </span>
      </div>
    );
  }

  const bonusText = bonusEntries
    .map(([key, value]) => `${formatModifier(value ?? 0)} ${ATTRIBUTE_LABELS[key as keyof typeof ATTRIBUTE_LABELS]}`)
    .join(", ");

  return (
    <div className="rounded-xl border border-primary/40 bg-primary/10 px-3 py-2 text-xs text-primary flex items-center gap-2">
      <Sparkles size={14} className="shrink-0" />
      <span>
        Clã <strong>{clan.nome}</strong> concede {bonusText}
        {clan.atributoEscolha ? `${bonusText ? ", " : ""}${clan.atributoEscolha}` : ""}. Some
        manualmente aos valores abaixo.
      </span>
    </div>
  );
}
