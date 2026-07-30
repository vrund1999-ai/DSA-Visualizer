import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { SumPowersData } from "./algorithm";

export function SumPowersRenderer({ step }: RendererProps<SumPowersData>) {
  const { n, x, powers, activePower, dp, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">powers (bⁿ, x = {x})</span>
        <div className="flex flex-wrap justify-center gap-1.5">
          {powers.map((p, i) => (
            <span
              key={i}
              className={`rounded-md border px-2 py-1 text-sm tabular-nums ${
                i === activePower ? "border-role-current bg-role-current text-white" : "border-border text-muted-foreground"
              }`}
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">dp[t] = ways to reach t</span>
        <ArrayCells
          values={dp}
          roleFor={(i) => (i === n ? "sorted" : dp[i] > 0 ? "active" : "default")}
          showIndex
          cellWidth="w-9"
        />
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        ways to express {n} = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>

      <Legend items={[{ role: "current", label: "power being folded" }, { role: "sorted", label: "dp[n] (answer)" }]} />
    </div>
  );
}
