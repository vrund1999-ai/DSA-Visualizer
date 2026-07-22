import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { SlidingMaxData } from "./algorithm";

export function SlidingMaxRenderer({ step }: RendererProps<SlidingMaxData>) {
  const { nums, k, i, deque, result } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Window size k</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2 py-0.5 font-semibold tabular-nums text-primary">{k}</span>
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Deque (indices, front = max)</span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-2 font-mono text-sm">
          {deque.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : deque.map((j, idx) => (
            <span key={j} className={`rounded border px-2 py-0.5 ${idx === 0 ? "border-role-target bg-role-target/15" : "border-role-active bg-role-active/15"}`}>
              {j}<span className="text-[10px] text-muted-foreground"> ({nums[j]})</span>
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Window maxima</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1 rounded-lg border bg-card/40 p-2 font-mono text-sm">
          {result.length === 0 ? <span className="text-xs text-muted-foreground">—</span> : result.join(", ")}
        </div>
      </div>

      <Legend
        items={[
          { role: "current", label: "New index" },
          { role: "active", label: "Window / deque" },
          { role: "swapped", label: "Popped (smaller)" },
          { role: "target", label: "Window max" },
        ]}
      />
    </div>
  );
}
