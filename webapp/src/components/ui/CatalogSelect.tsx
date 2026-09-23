"use client";

import { useState } from "react";
import { FieldLabel, SelectField, TextField } from "@/components/ui/Field";

/**
 * Select alimentado por um catálogo de nomes (Classe/Antecedente/Clã), com
 * opção de digitar um valor customizado quando o personagem usa algo fora
 * do catálogo (ex: um dos 41 clãs ainda não catalogados em detalhe).
 */
export function CatalogSelect({
  label,
  value,
  onChange,
  options,
  id,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  id?: string;
}) {
  const [customMode, setCustomMode] = useState(() => value !== "" && !options.includes(value));

  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      {customMode ? (
        <div className="flex gap-1.5">
          <TextField
            id={id}
            value={value}
            placeholder="Nome customizado"
            onChange={(e) => onChange(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              setCustomMode(false);
              onChange("");
            }}
            className="text-xs text-muted-foreground hover:text-primary shrink-0 px-1 cursor-pointer"
          >
            lista
          </button>
        </div>
      ) : (
        <SelectField
          id={id}
          value={options.includes(value) ? value : ""}
          onChange={(e) => {
            if (e.target.value === "__custom__") {
              setCustomMode(true);
              onChange("");
            } else {
              onChange(e.target.value);
            }
          }}
        >
          <option value="">Selecionar…</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          <option value="__custom__">Outro (digitar)</option>
        </SelectField>
      )}
    </div>
  );
}
