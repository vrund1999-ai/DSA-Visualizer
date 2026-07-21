import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { KthLargestData } from "./algorithm";

export function KthLargestRenderer({ step }: RendererProps<KthLargestData>) {
  const { nums, i, k, heap, answer } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">k</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2 py-0.5 font-semibold tabular-nums text-primary">{k}</span>
        {answer !== null && <span className="ml-2 font-semibold text-role-target">answer = {answer}</span>}
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Min-heap of {k} largest (min on the left)
        </span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {heap.length === 0 ? (
            <span className="text-xs text-muted-foreground">empty</span>
          ) : (
            heap.map((v, idx) => (
              <span
                key={idx}
                className={`rounded-md border px-2 py-1 font-mono text-sm tabular-nums ${
                  idx === 0 ? "border-role-target bg-role-target/15 text-foreground" : "border-border bg-muted/30 text-muted-foreground"
                }`}
              >
                {v}
              </span>
            ))
          )}
        </div>
      </div>

      <Legend
        items={[
          { role: "sorted", label: "Added to heap" },
          { role: "visited", label: "Ignored" },
          { role: "target", label: "Heap min (kth largest)" },
        ]}
      />
    </div>
  );
}
