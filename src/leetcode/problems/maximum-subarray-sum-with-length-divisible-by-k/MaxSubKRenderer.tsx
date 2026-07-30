import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MaxSubKData } from "./algorithm";

export function MaxSubKRenderer({ step }: RendererProps<MaxSubKData>) {
  const { nums, k, prefix, i, r, best, ans, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">nums (k = {k})</span>
        <ArrayCells values={nums} roleFor={(idx) => (i !== null && idx === i - 1 ? "current" : "default")} showIndex />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">prefix sums</span>
        <ArrayCells values={prefix} roleFor={(idx) => (idx === i ? "current" : "default")} badge={(idx) => `r${idx % k}`} />
      </div>

      <div className="flex flex-wrap justify-center gap-1 text-xs">
        <span className="text-muted-foreground">min prefix per residue:</span>
        {best.map(([res, v]) => (
          <span key={res} className={`rounded border px-1.5 py-0.5 tabular-nums ${res === r ? "border-role-sorted bg-role-sorted/15" : "border-border"}`}>{res}:{v === Infinity ? "∞" : v}</span>
        ))}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">max sum = <b className="tabular-nums">{answer ?? (ans === -Infinity ? "…" : ans)}</b></div>

      <Legend items={[{ role: "current", label: "Current i" }, { role: "sorted", label: "Matching residue" }]} />
    </div>
  );
}
