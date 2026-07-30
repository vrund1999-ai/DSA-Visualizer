import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { GroupData } from "./algorithm";

export function GroupRenderer({ step }: RendererProps<GroupData>) {
  const { groupSizes, cur, buckets, groups, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">people (labeled with required group size)</span>
        <ArrayCells values={groupSizes} roleFor={(i) => (i === cur ? "current" : "default")} showIndex />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">open buckets</span>
        <div className="flex flex-wrap justify-center gap-2">
          {buckets.filter(([, ppl]) => ppl.length > 0).length === 0 && <span className="text-sm text-muted-foreground">—</span>}
          {buckets.filter(([, ppl]) => ppl.length > 0).map(([size, ppl]) => (
            <div key={size} className="flex items-center gap-1 rounded-md border border-role-active px-2 py-1">
              <span className="text-xs text-muted-foreground">size {size}:</span>
              {ppl.map((p) => <span key={p} className="flex h-6 w-6 items-center justify-center rounded bg-role-active/30 text-xs tabular-nums">{p}</span>)}
              <span className="text-[10px] text-muted-foreground">{ppl.length}/{size}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">completed groups</span>
        <div className="flex flex-wrap justify-center gap-2">
          {(answer ?? groups).map((g, k) => (
            <span key={k} className="rounded border border-role-sorted bg-role-sorted/15 px-2 py-0.5 font-mono text-sm">[{g.join(", ")}]</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Placing person" }, { role: "active", label: "Open bucket" }, { role: "sorted", label: "Completed group" }]} />
    </div>
  );
}
