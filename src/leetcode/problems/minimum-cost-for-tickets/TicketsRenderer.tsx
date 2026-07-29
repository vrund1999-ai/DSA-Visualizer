import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { TicketsData } from "./algorithm";

export function TicketsRenderer({ step }: RendererProps<TicketsData>) {
  const { days, costs, dp, d, options, answer } = step.data;
  const travel = new Set(days);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">costs: 1d={costs[0]} · 7d={costs[1]} · 30d={costs[2]}</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">dp by day (travel days highlighted)</span>
        <div className="flex flex-wrap justify-center gap-0.5">
          {dp.map((v, i) => {
            const isTravel = travel.has(i);
            return (
              <div key={i} className="flex flex-col items-center">
                <div className={`flex h-7 w-7 items-center justify-center rounded border text-[10px] tabular-nums ${i === d ? "border-role-current bg-role-current text-white" : isTravel ? "border-role-active bg-role-active/20" : "border-border/40 bg-muted/10 text-muted-foreground"}`}>{v}</div>
                <span className="text-[7px] text-muted-foreground">{i}</span>
              </div>
            );
          })}
        </div>
      </div>

      {options && (
        <div className="rounded-md border px-3 py-1 text-sm">
          day {d}: min(1d {options[0]}, 7d {options[1]}, 30d {options[2]}) = <b>{Math.min(...options)}</b>
        </div>
      )}

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">min cost = {answer}</div>}

      <Legend items={[{ role: "current", label: "Computing dp[d]" }, { role: "active", label: "Travel day" }]} />
    </div>
  );
}
