import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { CellState, CountPrimesData } from "./algorithm";

const CELL_CLASS: Record<CellState, string> = {
  unknown: "border-border bg-muted/30 text-foreground",
  prime: "border-role-sorted bg-role-sorted/15 text-role-sorted",
  composite: "border-border bg-muted/20 text-muted-foreground line-through",
  current: "border-role-current bg-role-current text-white",
  striking: "border-role-swapped bg-role-swapped/20 text-foreground",
};

export function CountPrimesRenderer({ step }: RendererProps<CountPrimesData>) {
  const { states, count } = step.data;

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Primes found</span>
        <span className="rounded-md border border-role-sorted bg-role-sorted/10 px-2.5 py-1 font-semibold tabular-nums text-role-sorted">{count}</span>
      </div>

      <div className="flex flex-1 flex-wrap content-start justify-center gap-1">
        {states.map((st, i) => (
          <div key={i} className={`flex size-8 items-center justify-center rounded border text-xs tabular-nums transition-colors ${CELL_CLASS[st]}`}>{i}</div>
        ))}
      </div>

      <Legend
        items={[
          { role: "current", label: "Prime p" },
          { role: "swapped", label: "Striking multiple" },
          { role: "sorted", label: "Prime" },
        ]}
      />
    </div>
  );
}
