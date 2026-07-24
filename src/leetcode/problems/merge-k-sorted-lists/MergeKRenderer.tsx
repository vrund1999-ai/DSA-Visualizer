import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { MergeKData } from "./algorithm";

export function MergeKRenderer({ step }: RendererProps<MergeKData>) {
  const { lists, heap, merged, takenFrom } = step.data;

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        {lists.map((l, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className={`w-14 text-right text-xs ${i === takenFrom ? "text-role-current" : "text-muted-foreground"}`}>list {i}</span>
            <NodeChain nodes={l.map((v, k) => ({ key: k, value: v, role: k === 0 ? "active" : "default" }))} emptyLabel="∅" />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Min-heap of heads (min first)</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-2 font-mono text-sm">
          {heap.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : heap.map((h, k) => (
            <span key={k} className={`rounded border px-2 py-0.5 ${k === 0 ? "border-role-target bg-role-target/15" : "border-border bg-muted/30 text-muted-foreground"}`}>{h.value}</span>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Merged</span>
        <NodeChain nodes={merged.map((v, k) => ({ key: k, value: v, role: "sorted" }))} emptyLabel="∅" />
      </div>

      <Legend
        items={[
          { role: "active", label: "List heads" },
          { role: "target", label: "Heap min (next taken)" },
          { role: "sorted", label: "Merged output" },
        ]}
      />
    </div>
  );
}
