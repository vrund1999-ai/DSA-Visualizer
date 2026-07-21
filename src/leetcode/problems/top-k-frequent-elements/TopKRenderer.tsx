import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { TopKData } from "./algorithm";

export function TopKRenderer({ step }: RendererProps<TopKData>) {
  const { counts, buckets, result, k, activeFreq } = step.data;

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Counts (value → frequency)</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-2">
          {counts.map((e) => (
            <span key={e.value} className="rounded-md border border-border bg-muted/30 px-2 py-0.5 font-mono text-xs tabular-nums">
              {e.value}:{e.n}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Buckets by frequency</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-2 rounded-lg border bg-card/40 p-2">
          {buckets.length === 0 ? (
            <span className="text-xs text-muted-foreground">none yet</span>
          ) : (
            buckets.map((b) => (
              <div key={b.freq} className={`flex items-center gap-1 rounded-md border px-2 py-1 ${b.freq === activeFreq ? "border-role-current bg-role-current/10" : "border-border"}`}>
                <span className="font-mono text-[10px] text-muted-foreground">×{b.freq}</span>
                <span className="font-mono text-xs">{b.values.join(", ")}</span>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Top {k} result</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-2">
          {result.length === 0 ? (
            <span className="text-xs text-muted-foreground">—</span>
          ) : (
            result.map((v, i) => (
              <span key={i} className="rounded-md border border-role-target bg-role-target/15 px-2 py-0.5 font-mono text-sm tabular-nums">
                {v}
              </span>
            ))
          )}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Bucket being read" }, { role: "target", label: "Selected" }]} />
    </div>
  );
}
