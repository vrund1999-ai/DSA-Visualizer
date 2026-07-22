import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { RansomData } from "./algorithm";

export function RansomRenderer({ step }: RendererProps<RansomData>) {
  const { ransom, magazine, counts, result } = step.data;
  const roleForRef = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Ransom note</span>
        <ArrayCells values={ransom} roleFor={(i) => roleForRef(`r${i}`)} showIndex={false} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Magazine</span>
        <ArrayCells values={magazine} roleFor={(i) => roleForRef(`m${i}`)} showIndex={false} />
      </div>

      <div className="flex flex-1 flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Available letters</span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {counts.map((e) => (
            <span key={e.char} className={`rounded-md border px-2 py-1 font-mono text-xs tabular-nums ${e.n === 0 ? "border-border bg-muted/20 text-muted-foreground" : "border-role-sorted bg-role-sorted/10"}`}>{e.char}: {e.n}</span>
          ))}
        </div>
      </div>

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-sorted" : "text-role-swapped"}`}>{result ? "Can build the note ✓" : "Cannot build ✗"}</p>
      )}

      <Legend
        items={[
          { role: "current", label: "Counting" },
          { role: "sorted", label: "Spent" },
          { role: "swapped", label: "Missing letter" },
        ]}
      />
    </div>
  );
}
