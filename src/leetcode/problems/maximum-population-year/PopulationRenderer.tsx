import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { PopulationData } from "./algorithm";

export function PopulationRenderer({ step }: RendererProps<PopulationData>) {
  const { logs, deltas, year, pop, best, bestYear, answer } = step.data;

  // recompute running population up to current year for the bar chart
  const running: { y: number; p: number }[] = [];
  let acc = 0;
  for (const [y, d] of deltas) {
    acc += d;
    running.push({ y, p: acc });
  }
  const peak = Math.max(1, ...running.map((r) => r.p));

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-wrap justify-center gap-1.5 text-xs">
        {logs.map(([b, d], i) => <span key={i} className="rounded border px-2 py-0.5">[{b}, {d})</span>)}
      </div>

      <div className="flex items-end gap-1" style={{ height: "120px" }}>
        {running.map(({ y, p }) => {
          const reached = year !== null && y <= year;
          const isBest = answer !== null ? y === bestYear : y === year && p === best;
          return (
            <div key={y} className="flex flex-col items-center justify-end" style={{ height: "100%" }}>
              <div className={`w-6 rounded-t ${isBest ? "bg-role-sorted" : reached ? "bg-role-current" : "bg-muted"}`} style={{ height: `${(p / peak) * 100}%` }} />
              <span className="text-[8px] text-muted-foreground">{y}</span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-3 text-sm">
        {year !== null && <span className="rounded-md border px-3 py-1">year {year}: pop {pop}</span>}
        <span className="rounded-md border px-3 py-1">peak year = <b className="tabular-nums">{answer ?? bestYear}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Swept year" }, { role: "sorted", label: "Peak year" }]} />
    </div>
  );
}
