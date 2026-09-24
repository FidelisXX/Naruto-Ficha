import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes Tailwind resolvendo conflitos corretamente (ex: uma
 * classe base `w-full` e uma `className` de override `w-14` no mesmo
 * componente) — `clsx` sozinho só concatena strings, então qual dos dois
 * "ganha" no CSS final depende da ordem em que o Tailwind gerou o
 * stylesheet, não da ordem no JSX, o que já causou um bug real (item de
 * inventário com o campo de quantidade ocupando a linha inteira e
 * empurrando o nome do item pra largura 0). `twMerge` entende os grupos de
 * utilitário do Tailwind e sempre mantém a última classe conflitante.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
