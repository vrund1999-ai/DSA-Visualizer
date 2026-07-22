import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { SqrtData } from "./algorithm";

export function SqrtRenderer({ step }: RendererProps<SqrtData>) {
  const { x, lo, hi, mid, midSq, ans } = step.data;

  return (
    <div className="flex h-full flex-col items-center gap-6">
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">√{x}, searching</span>
        <span className="rounded-md border px-2 py-0.5 font-mono tabular-nums">[{lo}, {hi}]</span>
      </div>

      {mid !== null && (
        <div className="flex items-center gap-2 text-lg">
          <span className="flex size-11 items-center justify-center rounded-md border-2 border-role-current bg-role-current/15 font-mono font-semibold tabular-nums">{mid}</span>
          <span className="text-muted-foreground">² =</span>
          <span className={`rounded-md border-2 px-3 py-1 font-mono font-semibold tabular-nums ${midSq !== null && midSq <= x ? "border-role-sorted bg-role-sorted/15 text-role-sorted" : "border-role-swapped bg-role-swapped/15 text-role-swapped"}`}>{midSq}</span>
          <span className="text-muted-foreground">{midSq !== null && midSq <= x ? "≤" : ">"} {x}</span>
        </div>
      )}

      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Best answer so far</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-semibold tabular-nums text-role-target">{ans}</span>
      </div>

      <Legend
        items={[
          { role: "current", label: "Candidate mid" },
          { role: "sorted", label: "mid² fits" },
          { role: "swapped", label: "mid² too big" },
          { role: "target", label: "Answer" },
        ]}
      />
    </div>
  );
}
