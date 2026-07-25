import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { StockIIIData } from "./algorithm";

const fmt = (v: number) => (v === -Infinity ? "−∞" : `${v}`);

export function StockIIIRenderer({ step }: RendererProps<StockIIIData>) {
  const { prices, day, buy1, sell1, buy2, sell2, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === day) return "current";
    if (day !== null && i < day) return "visited";
    return "default";
  };

  const State = ({ label, value, tone }: { label: string; value: number; tone: string }) => (
    <div className={`flex flex-col items-center rounded-md border-2 px-4 py-2 ${tone}`}>
      <span className="text-[11px] uppercase tracking-wide text-muted-foreground">{label}</span>
      <span className="text-lg font-bold tabular-nums">{fmt(value)}</span>
    </div>
  );

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={prices} roleFor={roleFor} showIndex cellWidth="w-11" />

      <div className="flex flex-wrap items-center justify-center gap-3">
        <State label="buy 1" value={buy1} tone="border-role-compared/50" />
        <State label="sell 1" value={sell1} tone="border-role-sorted/50" />
        <State label="buy 2" value={buy2} tone="border-role-compared/50" />
        <State label="sell 2" value={sell2} tone="border-role-sorted" />
      </div>

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">max profit = {answer}</div>}

      <Legend items={[{ role: "current", label: "Today's price" }, { role: "visited", label: "Processed" }]} />
    </div>
  );
}
