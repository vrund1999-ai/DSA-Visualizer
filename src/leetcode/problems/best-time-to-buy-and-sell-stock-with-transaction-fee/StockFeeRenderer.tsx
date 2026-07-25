import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { StockFeeData } from "./algorithm";

export function StockFeeRenderer({ step }: RendererProps<StockFeeData>) {
  const { prices, fee, day, cash, hold, sold, bought, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === day) return sold ? "sorted" : bought ? "current" : "active";
    if (day !== null && i < day) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">transaction fee = <b className="tabular-nums text-foreground">{fee}</b></div>

      <ArrayCells values={prices} roleFor={roleFor} topLabel={(i) => (i === day ? "day" : "")} showIndex={false} />

      <div className="flex items-center gap-4 text-sm">
        <span className={`rounded-md border-2 px-4 py-2 ${sold ? "border-role-sorted bg-role-sorted/10" : "border-border"}`}>cash = <b className="tabular-nums">{cash}</b></span>
        <span className={`rounded-md border-2 px-4 py-2 ${bought ? "border-role-current bg-role-current/10" : "border-border"}`}>hold = <b className="tabular-nums">{hold}</b></span>
      </div>

      {answer !== null && <div className="text-base font-semibold text-role-sorted">max profit = {answer}</div>}

      <Legend items={[{ role: "current", label: "Buy day" }, { role: "sorted", label: "Sell day" }, { role: "visited", label: "Past" }]} />
    </div>
  );
}
