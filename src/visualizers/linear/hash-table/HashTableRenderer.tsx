import type { RendererProps } from "@/core/types";
import { rowRef, cellRef, type HashData } from "./types";

const CELL_ROLE: Record<string, string> = {
  swapped: "bg-role-swapped text-white border-role-swapped",
  current: "bg-role-current text-white border-role-current",
  default: "bg-card border-border",
};

/** Hash table with separate chaining: one row per bucket, chains grow rightward. */
export function HashTableRenderer({ step }: RendererProps<HashData>) {
  const { size, buckets } = step.data;
  const activeRows = new Set(
    step.highlights.filter((h) => h.role === "active").map((h) => String(h.ref)),
  );
  const cellRole = (i: number, j: number): string =>
    step.highlights.find((h) => h.ref === cellRef(i, j))?.role ?? "default";

  return (
    <div className="flex h-full flex-col gap-3 overflow-auto">
      <div className="flex flex-col gap-1.5">
        {Array.from({ length: size }).map((_, i) => {
          const active = activeRows.has(rowRef(i));
          return (
            <div
              key={i}
              className={`flex items-center gap-2 rounded-md px-2 py-1 transition-colors ${
                active ? "bg-role-active/15 ring-1 ring-role-active" : ""
              }`}
            >
              <span className="w-6 text-right text-xs font-semibold tabular-nums text-muted-foreground">
                {i}
              </span>
              <span className="text-muted-foreground">│</span>
              <div className="flex items-center gap-1">
                {buckets[i].map((v, j) => (
                  <div key={j} className="flex items-center gap-1">
                    <span
                      className={`flex h-8 w-10 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums transition-colors ${
                        CELL_ROLE[cellRole(i, j)] ?? CELL_ROLE.default
                      }`}
                    >
                      {v}
                    </span>
                    {j < buckets[i].length - 1 && (
                      <span className="text-xs text-muted-foreground">→</span>
                    )}
                  </div>
                ))}
                {buckets[i].length === 0 && (
                  <span className="text-xs text-muted-foreground">∅</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
