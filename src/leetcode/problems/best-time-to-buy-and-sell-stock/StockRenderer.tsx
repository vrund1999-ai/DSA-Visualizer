import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { StockData } from "./algorithm";

export function StockRenderer({ step }: RendererProps<StockData>) {
  const { prices, i, minPrice, maxProfit, best } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">Min price</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-semibold tabular-nums text-role-target">
          {Number.isFinite(minPrice) ? minPrice : "∞"}
        </span>
        <span className="ml-3 text-muted-foreground">Max profit</span>
        <span className="rounded-md border border-role-sorted bg-role-sorted/10 px-2.5 py-1 font-semibold tabular-nums text-role-sorted">
          {maxProfit}
        </span>
      </div>

      <ArrayCells
        values={prices}
        roleFor={(idx) => roleFor(idx)}
        topLabel={(idx) => (idx === i ? "i" : "")}
      />

      <p className="text-center text-sm text-muted-foreground">
        {best
          ? `Best trade so far: buy day ${best.buy} → sell day ${best.sell}`
          : "Scanning for the best day to buy…"}
      </p>

      <Legend
        items={[
          { role: "current", label: "Today" },
          { role: "target", label: "Best buy" },
          { role: "sorted", label: "Best sell" },
        ]}
      />
    </div>
  );
}
