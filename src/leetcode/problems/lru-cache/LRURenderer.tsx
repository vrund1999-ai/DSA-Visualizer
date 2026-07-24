import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { LRUData } from "./algorithm";

export function LRURenderer({ step }: RendererProps<LRUData>) {
  const { capacity, entries, op, result, touched, evicted } = step.data;

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="rounded-md border border-primary bg-primary/10 px-2.5 py-1 font-mono font-semibold text-primary">{op}</span>
        {result && <span className="text-muted-foreground">→ {result}</span>}
        <span className="ml-2 text-xs text-muted-foreground">cap {capacity}</span>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-2">
        <div className="flex w-full items-center justify-between px-2 text-[10px] uppercase tracking-wide text-muted-foreground">
          <span>← least recent (evict)</span>
          <span>most recent →</span>
        </div>
        <div className="flex min-h-[4rem] w-full flex-wrap items-center justify-center gap-2 rounded-lg border bg-card/40 p-3">
          {evicted !== null && (
            <div className="flex flex-col items-center gap-0.5 rounded-md border-2 border-role-swapped bg-role-swapped/15 px-3 py-1.5 opacity-60">
              <span className="font-mono text-sm line-through">{evicted}</span>
              <span className="text-[10px] text-role-swapped">evicted</span>
            </div>
          )}
          {entries.length === 0 ? (
            <span className="text-xs text-muted-foreground">empty</span>
          ) : (
            entries.map((e) => (
              <div key={e.key} className={`flex flex-col items-center gap-0.5 rounded-md border-2 px-3 py-1.5 transition-colors ${e.key === touched ? "border-role-current bg-role-current/15" : "border-border bg-muted/30"}`}>
                <span className="font-mono text-sm font-semibold tabular-nums">{e.key}:{e.value}</span>
              </div>
            ))
          )}
        </div>
      </div>

      <Legend
        items={[
          { role: "current", label: "Touched (now most-recent)" },
          { role: "swapped", label: "Evicted (was least-recent)" },
        ]}
      />
    </div>
  );
}
