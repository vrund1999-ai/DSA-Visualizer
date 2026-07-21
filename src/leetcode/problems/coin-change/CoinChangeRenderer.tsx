import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { CoinChangeData } from "./algorithm";

export function CoinChangeRenderer({ step }: RendererProps<CoinChangeData>) {
  const { coins, dp, coin } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Coins</span>
        {coins.map((c) => (
          <span
            key={c}
            className={`flex size-8 items-center justify-center rounded-full border font-mono text-sm tabular-nums ${
              c === coin ? "border-role-current bg-role-current/15" : "border-border bg-muted/30"
            }`}
          >
            {c}
          </span>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          dp[amount] — fewest coins (index = amount)
        </span>
        <ArrayCells values={dp} roleFor={(idx) => roleFor(idx)} />
      </div>

      <Legend
        items={[
          { role: "target", label: "dp[a] updated" },
          { role: "compared", label: "dp[a − coin]" },
          { role: "sorted", label: "Base case" },
        ]}
      />
    </div>
  );
}
