import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { PerfectSquaresData } from "./algorithm";

export function PerfectSquaresRenderer({ step }: RendererProps<PerfectSquaresData>) {
  const { n, dp, cur, square, from, answer } = step.data;

  const display = dp.map((v) => (Number.isFinite(v) ? v : "∞"));

  const roleFor = (i: number) => {
    if (answer !== null && i === n) return "target";
    if (i === cur) return "current";
    if (i === from) return "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">
        n = {n}{square !== null && cur !== null && <> · trying square {square} for dp[{cur}]</>}
      </div>

      <ArrayCells values={display} roleFor={roleFor} />

      {answer !== null && <div className="text-base font-semibold text-role-target">answer = {answer}</div>}

      <Legend items={[{ role: "current", label: "Solving dp[i]" }, { role: "compared", label: "Reading dp[i − j²]" }, { role: "target", label: "Answer" }]} />
    </div>
  );
}
