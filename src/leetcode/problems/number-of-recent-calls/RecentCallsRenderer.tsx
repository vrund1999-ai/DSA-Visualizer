import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { RecentCallsData } from "./algorithm";

export function RecentCallsRenderer({ step }: RendererProps<RecentCallsData>) {
  const { queue, t, lowerBound, evicted, result } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">
        {t !== null ? <>window <b className="tabular-nums text-foreground">[{lowerBound}, {t}]</b> (last 3000 ms)</> : "queue of request times"}
      </div>

      {evicted !== null && <div className="text-xs text-role-target">evicting {evicted} (too old)</div>}

      <div className="flex min-h-[3rem] flex-wrap items-center justify-center gap-1.5">
        {queue.length === 0 ? (
          <span className="text-xs text-muted-foreground">empty</span>
        ) : (
          queue.map((ts, i) => (
            <span key={`${ts}-${i}`} className={`flex items-center justify-center rounded-md border-2 px-3 py-1.5 text-sm font-medium tabular-nums ${i === queue.length - 1 && ts === t ? "border-role-current bg-role-current/20" : "border-role-active bg-role-active/10"}`}>{ts}</span>
          ))
        )}
      </div>

      {result !== null && <div className="text-base font-semibold text-role-visited">count = {result}</div>}

      <Legend items={[{ role: "current", label: "New ping" }, { role: "active", label: "In window" }, { role: "target", label: "Evicted" }]} />
    </div>
  );
}
