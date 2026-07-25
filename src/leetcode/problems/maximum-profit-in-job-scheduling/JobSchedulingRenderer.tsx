import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { JobSchedulingData } from "./algorithm";

export function JobSchedulingRenderer({ step }: RendererProps<JobSchedulingData>) {
  const { jobs, dp, cur, compat, took, answer } = step.data;

  const lo = Math.min(...jobs.map((j) => j.start));
  const hi = Math.max(...jobs.map((j) => j.end));
  const span = Math.max(hi - lo, 1);
  const pct = (x: number) => `${((x - lo) / span) * 100}%`;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">jobs sorted by end time</div>

      <div className="flex w-full max-w-xl flex-col gap-1.5">
        {jobs.map((j, i) => {
          const state = i === cur ? (took ? "take" : "skip") : i === compat ? "compat" : i < (cur ?? -1) ? "past" : "pending";
          const cls = state === "take" ? "bg-role-visited" : state === "skip" ? "bg-role-current" : state === "compat" ? "bg-role-active" : state === "past" ? "bg-muted" : "bg-muted/40";
          return (
            <div key={i} className="relative h-6">
              <div className={`absolute flex h-6 items-center justify-center rounded px-1 text-[10px] font-medium text-white ${cls}`} style={{ left: pct(j.start), width: `calc(${pct(j.end)} - ${pct(j.start)})`, minWidth: "3rem" }}>
                ${j.profit}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">dp (best profit after i jobs)</span>
        <div className="flex flex-wrap items-center justify-center gap-1">
          {dp.map((v, i) => (
            <span key={i} className={`flex size-9 items-center justify-center rounded-md border-2 font-mono text-xs tabular-nums ${i === dp.length - 1 ? "border-role-visited bg-role-visited/15" : "border-border bg-card"}`}>{v}</span>
          ))}
        </div>
      </div>

      {answer !== null && <div className="text-base font-semibold text-role-visited">max profit = {answer}</div>}

      <Legend items={[{ role: "current", label: "Skip better" }, { role: "visited", label: "Take better" }, { role: "active", label: "Compatible job" }]} />
    </div>
  );
}
