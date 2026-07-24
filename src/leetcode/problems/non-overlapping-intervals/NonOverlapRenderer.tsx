import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { NonOverlapData } from "./algorithm";

export function NonOverlapRenderer({ step }: RendererProps<NonOverlapData>) {
  const { intervals, cur, end, kept, removed, count, answer } = step.data;

  const lo = Math.min(...intervals.map((iv) => iv[0]));
  const hi = Math.max(...intervals.map((iv) => iv[1]));
  const span = Math.max(hi - lo, 1);
  const pct = (x: number) => `${((x - lo) / span) * 100}%`;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">sorted by end · kept frontier end = <b className="tabular-nums text-foreground">{Number.isFinite(end) ? end : "−∞"}</b></div>

      <div className="flex w-full max-w-xl flex-col gap-1.5">
        {intervals.map(([s, e], i) => {
          const state = i === cur ? "cur" : kept.includes(i) ? "kept" : removed.includes(i) ? "removed" : "pending";
          const cls = state === "cur" ? "bg-role-current" : state === "kept" ? "bg-role-visited" : state === "removed" ? "bg-role-target/50 line-through" : "bg-muted";
          return (
            <div key={i} className="relative h-6">
              <div
                className={`absolute flex h-6 items-center justify-center rounded text-[11px] font-medium text-white ${cls}`}
                style={{ left: pct(s), width: `calc(${pct(e)} - ${pct(s)})`, minWidth: "2rem" }}
              >
                [{s},{e}]
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-sm">removed so far = <b className="tabular-nums text-role-target">{answer ?? count}</b></div>

      <Legend items={[{ role: "current", label: "Examining" }, { role: "visited", label: "Kept" }, { role: "target", label: "Removed" }]} />
    </div>
  );
}
