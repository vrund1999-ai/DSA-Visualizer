import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { StonesData } from "./algorithm";

export function StonesRenderer({ step }: RendererProps<StonesData>) {
  const { heap, a, b, remainder, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">stones (max-heap, heaviest first)</span>
        <div className="flex min-h-12 flex-wrap items-end justify-center gap-1.5">
          {heap.length === 0 ? <span className="text-sm text-muted-foreground">empty</span> : heap.map((s, i) => (
            <div key={i} className={`flex items-center justify-center rounded-md border-2 font-bold tabular-nums ${remainder !== null && i === heap.indexOf(remainder) ? "border-role-sorted bg-role-sorted/15" : "border-border bg-muted/30"}`} style={{ width: `${Math.max(28, 20 + s * 0.6)}px`, height: `${Math.max(28, 20 + s * 0.6)}px`, fontSize: "0.8rem" }}>{s}</div>
          ))}
        </div>
      </div>

      {a !== null && b !== null && (
        <div className="rounded-md border border-role-current px-3 py-1 text-sm">
          smash {a} vs {b} → {a === b ? "both destroyed" : `remainder ${remainder}`}
        </div>
      )}

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">last stone = {answer}</div>}

      <Legend items={[{ role: "current", label: "Smashing" }, { role: "sorted", label: "Remainder" }]} />
    </div>
  );
}
