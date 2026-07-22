import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { KthStreamData } from "./algorithm";

export function KthStreamRenderer({ step }: RendererProps<KthStreamData>) {
  const { k, heap, added, popped, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        {added !== null && (
          <>
            <span className="text-muted-foreground">add</span>
            <span className="rounded-md border border-role-current bg-role-current/15 px-2 py-0.5 font-semibold tabular-nums">{added}</span>
          </>
        )}
        {popped !== null && (
          <>
            <span className="text-muted-foreground">drop</span>
            <span className="rounded-md border border-role-swapped bg-role-swapped/15 px-2 py-0.5 font-semibold tabular-nums">{popped}</span>
          </>
        )}
        <span className="ml-2 text-muted-foreground">{k}th largest</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-semibold tabular-nums text-role-target">{answer ?? "—"}</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Min-heap of the {k} largest (min first)</span>
        <div className="flex min-h-[3rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {heap.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : heap.map((v, i) => (
            <span key={i} className={`rounded-md border px-2 py-1 font-mono text-sm tabular-nums ${i === 0 ? "border-role-target bg-role-target/15" : "border-border bg-muted/30 text-muted-foreground"}`}>{v}</span>
          ))}
        </div>
      </div>

      <Legend
        items={[
          { role: "current", label: "Added" },
          { role: "swapped", label: "Dropped (smallest)" },
          { role: "target", label: "Heap min = answer" },
        ]}
      />
    </div>
  );
}
