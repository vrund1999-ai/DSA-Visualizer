import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { RangeSumData } from "./algorithm";

export function RangeSumRenderer({ step }: RendererProps<RangeSumData>) {
  const { nums, left, right, sums, phase, gen, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">nums</span>
        <ArrayCells values={nums} roleFor={(i) => (i === gen && phase === "generate" ? "current" : "default")} showIndex />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">{phase === "sorted" ? `sorted subarray sums · ranks ${left}–${right}` : "subarray sums (unsorted)"}</span>
        <div className="flex max-w-2xl flex-wrap justify-center gap-1">
          {sums.map((v, k) => {
            const inRange = phase === "sorted" && k >= left - 1 && k <= right - 1;
            return <span key={k} className={`flex h-8 min-w-8 items-center justify-center rounded border px-1 text-xs font-semibold tabular-nums ${inRange ? "bg-role-sorted text-white border-role-sorted" : "bg-muted/40 border-border"}`}>{v}</span>;
          })}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">range sum = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "current", label: "Generating from" }, { role: "sorted", label: "Ranks left…right" }]} />
    </div>
  );
}
