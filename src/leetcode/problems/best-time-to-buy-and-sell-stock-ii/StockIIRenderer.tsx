import type { RendererProps } from "@/core/types";
import { Legend, SWATCH_CLASS, roleLookup } from "@/leetcode/shared/viz";
import type { StockIIData } from "./algorithm";

export function StockIIRenderer({ step }: RendererProps<StockIIData>) {
  const { prices, i, profit } = step.data;
  const roleFor = roleLookup(step.highlights);
  const max = Math.max(...prices, 1);
  const barColor = (role: string) => (role === "default" ? "bg-muted-foreground/30" : SWATCH_CLASS[role] ?? "bg-muted-foreground/30");

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Total profit</span>
        <span className="rounded-md border border-role-sorted bg-role-sorted/10 px-2.5 py-1 font-semibold tabular-nums text-role-sorted">{profit}</span>
      </div>

      <div className="flex h-48 items-end justify-center gap-1.5">
        {prices.map((p, idx) => (
          <div key={idx} className="flex h-full flex-col items-center justify-end gap-1">
            <span className="h-4 text-[10px] font-semibold uppercase text-role-current">{idx === i ? "i" : ""}</span>
            <div className={`w-7 rounded-t transition-all ${barColor(roleFor(idx))}`} style={{ height: `${(p / max) * 100}%` }} />
            <span className="text-[10px] tabular-nums text-muted-foreground">{p}</span>
          </div>
        ))}
      </div>

      <Legend
        items={[
          { role: "target", label: "Buy (day before rise)" },
          { role: "sorted", label: "Sell (rise captured)" },
          { role: "visited", label: "No gain" },
        ]}
      />
    </div>
  );
}
