import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { InsertIntervalData } from "./algorithm";

export function InsertIntervalRenderer({ step }: RendererProps<InsertIntervalData>) {
  const { intervals, newInterval, cur, merged, phase, result } = step.data;

  const all = [...intervals, newInterval, merged];
  const lo = Math.min(...all.map((iv) => iv[0]));
  const hi = Math.max(...all.map((iv) => iv[1]));
  const span = Math.max(hi - lo, 1);
  const pct = (x: number) => `${((x - lo) / span) * 100}%`;

  const bar = (iv: [number, number], cls: string, label?: string) => (
    <div className="relative h-6 w-full">
      <div className={`absolute flex h-6 items-center justify-center rounded text-[10px] font-medium text-white ${cls}`} style={{ left: pct(iv[0]), width: `calc(${pct(iv[1])} - ${pct(iv[0])})`, minWidth: "2.5rem" }}>
        {label ?? `${iv[0]},${iv[1]}`}
      </div>
    </div>
  );

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="text-sm text-muted-foreground">phase: {phase} · merging [{merged[0]}, {merged[1]}]</div>

      <div className="flex w-full max-w-xl flex-col gap-1.5">
        {intervals.map((iv, i) => bar(iv, i === cur ? "bg-role-current" : result.some((r) => r[0] === iv[0] && r[1] === iv[1]) ? "bg-role-visited" : "bg-muted"))}
        {bar(merged, "bg-role-active", "new")}
      </div>

      {phase === "done" && (
        <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-xs">{result.map((r) => `[${r[0]},${r[1]}]`).join(", ")}</div>
      )}

      <Legend items={[{ role: "current", label: "Examining" }, { role: "active", label: "Merged new interval" }, { role: "visited", label: "Kept" }]} />
    </div>
  );
}
