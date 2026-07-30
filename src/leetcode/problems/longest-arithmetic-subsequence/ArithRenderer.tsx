import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ArithData } from "./algorithm";

export function ArithRenderer({ step }: RendererProps<ArithData>) {
  const { nums, i, j, d, curMap, best, answer } = step.data;

  const roleFor = (idx: number) => {
    if (idx === i) return "current";
    if (idx === j) return "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <ArrayCells values={nums} roleFor={roleFor} topLabel={(idx) => (idx === i ? "i" : idx === j ? "j" : "")} showIndex />

      {d !== null && <div className="text-sm text-muted-foreground">common difference d = <b className="text-foreground tabular-nums">{d}</b></div>}

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">dp[i] (diff → length)</span>
        <div className="flex flex-wrap justify-center gap-1">
          {curMap.length ? (
            curMap.map(([diff, len]) => (
              <span key={diff} className={`rounded border px-2 py-0.5 text-xs tabular-nums ${diff === d ? "border-role-sorted bg-role-sorted/15" : "border-border"}`}>
                {diff}:{len}
              </span>
            ))
          ) : (
            <span className="text-sm text-muted-foreground">—</span>
          )}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">longest = <b className="tabular-nums">{answer ?? best}</b></div>

      <Legend items={[{ role: "current", label: "i" }, { role: "compared", label: "j" }, { role: "sorted", label: "current diff" }]} />
    </div>
  );
}
