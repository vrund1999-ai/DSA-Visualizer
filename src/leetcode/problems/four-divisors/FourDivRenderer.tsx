import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { FourDivData } from "./algorithm";

export function FourDivRenderer({ step }: RendererProps<FourDivData>) {
  const { nums, idx, divisors, qualifies, added, total, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === idx) return qualifies ? "sorted" : "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} showIndex={false} cellWidth="w-12" />

      {idx !== null && (
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">divisors of {nums[idx]}</span>
          <div className="flex gap-1.5">
            {divisors.map((d) => (
              <div key={d} className={`flex size-9 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums ${qualifies ? "border-role-sorted bg-role-sorted/15" : "border-border bg-muted/30"}`}>{d}</div>
            ))}
          </div>
          {added !== null && <span className="text-sm text-muted-foreground">sum = {added}</span>}
        </div>
      )}

      <div className="rounded-md border px-3 py-1 text-sm">total = <b className="tabular-nums">{answer ?? total}</b></div>

      <Legend items={[{ role: "sorted", label: "Exactly 4 divisors" }, { role: "compared", label: "Not 4 divisors" }]} />
    </div>
  );
}
