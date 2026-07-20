import type { RendererProps } from "@/core/types";
import type { SubsetsData } from "./types";

/** Element row with include/exclude state, plus the list of subsets found. */
export function SubsetsRenderer({ step }: RendererProps<SubsetsData>) {
  const { elements, includedIdx, subsets } = step.data;
  const included = new Set(includedIdx);
  const pointerRole = (i: number): string | undefined =>
    step.highlights.find((h) => h.ref === i)?.role;

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground">Elements (green = in current subset)</span>
        <div className="flex gap-1.5">
          {elements.map((v, i) => {
            const role = pointerRole(i);
            const cls =
              role === "current"
                ? "bg-role-current text-white border-role-current ring-2 ring-role-current"
                : included.has(i)
                  ? "bg-role-sorted text-white border-role-sorted"
                  : "bg-card border-border";
            return (
              <span
                key={i}
                className={`flex h-10 w-10 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums transition-colors ${cls}`}
              >
                {v}
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex-1 overflow-auto rounded-lg border bg-muted/20 p-3">
        <div className="mb-2 text-xs text-muted-foreground">
          Subsets found: {subsets.length}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {subsets.map((s, i) => (
            <span
              key={i}
              className="rounded-md border bg-card px-2 py-1 font-mono text-xs"
            >
              {`{${s.join(", ")}}`}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
