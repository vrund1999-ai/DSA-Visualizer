import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { CoinChangeIIData } from "./algorithm";

export function CoinChangeIIRenderer({ step }: RendererProps<CoinChangeIIData>) {
  const { amount, coins, dp, coin, a, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === a) return "current";
    if (a !== null && coin !== null && i === a - coin) return "compared";
    return "default";
  };

  const topLabel = (i: number) => (i === amount ? "target" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-2 text-sm">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">coins</span>
        {coins.map((c) => (
          <span key={c} className={`flex size-8 items-center justify-center rounded-full border-2 text-sm font-medium tabular-nums ${c === coin ? "border-role-current bg-role-current text-white" : "border-border bg-muted/30"}`}>{c}</span>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">dp (ways per amount)</span>
        <ArrayCells values={dp} roleFor={roleFor} topLabel={topLabel} showIndex cellWidth="w-11" />
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">ways to make {amount} = <b className="tabular-nums">{answer ?? dp[amount]}</b></div>

      <Legend items={[{ role: "current", label: "dp[a] updated" }, { role: "compared", label: "dp[a − coin]" }]} />
    </div>
  );
}
