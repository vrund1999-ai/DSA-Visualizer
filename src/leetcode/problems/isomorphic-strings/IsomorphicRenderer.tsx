import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { IsomorphicData } from "./algorithm";

export function IsomorphicRenderer({ step }: RendererProps<IsomorphicData>) {
  const { s, t, map1, result } = step.data;
  const roleForRef = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">s</span>
        <ArrayCells values={s} roleFor={(i) => roleForRef(`s${i}`)} showIndex={false} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">t</span>
        <ArrayCells values={t} roleFor={(i) => roleForRef(`t${i}`)} showIndex={false} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Mapping (s → t)</span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {map1.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : map1.map((p) => (
            <span key={p.from} className="rounded-md border border-border bg-muted/30 px-2 py-1 font-mono text-sm">{p.from} → {p.to}</span>
          ))}
        </div>
      </div>

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-sorted" : "text-role-swapped"}`}>{result ? "Isomorphic ✓" : "Not isomorphic ✗"}</p>
      )}

      <Legend
        items={[
          { role: "sorted", label: "New mapping" },
          { role: "compared", label: "Consistent" },
          { role: "swapped", label: "Conflict" },
        ]}
      />
    </div>
  );
}
