"use client";

import { clsx } from "clsx";
import type { LucideIcon } from "lucide-react";

export interface TabBarItem<T extends string> {
  key: T;
  label: string;
  icon: LucideIcon;
}

export function TabBar<T extends string>({
  items,
  active,
  onChange,
}: {
  items: TabBarItem<T>[];
  active: T;
  onChange: (key: T) => void;
}) {
  return (
    <nav className="sticky bottom-0 inset-x-0 bg-surface border-t border-border">
      <div className="mx-auto max-w-4xl grid" style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}>
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = item.key === active;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onChange(item.key)}
              className={clsx(
                "flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium uppercase tracking-wide cursor-pointer transition-colors relative",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {isActive && (
                <span className="absolute top-0 inset-x-1/4 h-0.5 bg-primary rounded-full" />
              )}
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
