import { type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

const fieldBaseClasses =
  "w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary disabled:opacity-50";

export function FieldLabel({
  children,
  htmlFor,
}: {
  children: ReactNode;
  htmlFor?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wide"
    >
      {children}
    </label>
  );
}

export const TextField = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} type="text" className={cn(fieldBaseClasses, className)} {...props} />
  )
);
TextField.displayName = "TextField";

export const NumberField = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      type="number"
      className={cn(fieldBaseClasses, "tabular-nums", className)}
      {...props}
    />
  )
);
NumberField.displayName = "NumberField";

export const SelectField = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => (
    <select ref={ref} className={cn(fieldBaseClasses, "bg-background", className)} {...props}>
      {children}
    </select>
  )
);
SelectField.displayName = "SelectField";
