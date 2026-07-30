import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { DivThreeData } from "./algorithm";

export function DivThreeRenderer({ step }: RendererProps<DivThreeData>) {
  const { nums, dp, i, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">nums</span>
        <ArrayCells values={nums} roleFor={(idx) => (idx === i ? "current" : idx < (i ?? 0) ? "visited" : "default")} topLabel={(idx) => (idx === i ? "▼" : "")} />
      </div>

      <div className="flex items-center gap-3">
        {dp.map((v, r) => (
          <div key={r} className={`flex flex-col items-center rounded-lg border-2 px-4 py-2 ${r === 0 ? "border-role-sorted" : "border-role-active"}`}>
            <span className="text-xs text-muted-foreground">rem {r}</span>
            <span className="text-lg font-bold tabular-nums">{v === -Infinity ? "−∞" : v}</span>
          </div>
        ))}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">greatest sum ÷ 3 = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "current", label: "Adding" }, { role: "sorted", label: "dp[0] (answer)" }, { role: "active", label: "remainder state" }]} />
    </div>
  );
}
