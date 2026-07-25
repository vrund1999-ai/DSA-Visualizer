import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { AddArrayData } from "./algorithm";

export function AddArrayRenderer({ step }: RendererProps<AddArrayData>) {
  const { num, k, i, carry, res, answer } = step.data;

  const numRole = (j: number) => {
    if (j === i) return "current";
    if (i !== null && j > i) return "visited";
    if (i === null) return "visited";
    return "default";
  };

  const resDigits = answer ?? [...res].reverse();

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border px-3 py-1">k = <b className="tabular-nums">{k}</b></span>
        <span className="rounded-md border px-3 py-1">carry = <b className="tabular-nums">{carry}</b></span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">num (array form)</span>
        <ArrayCells values={num} roleFor={numRole} showIndex={false} cellWidth="w-10" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">result{answer ? "" : " (building, MSB→LSB)"}</span>
        {resDigits.length === 0 ? (
          <span className="text-sm text-muted-foreground">—</span>
        ) : (
          <ArrayCells values={resDigits} roleFor={() => (answer ? "sorted" : "active")} showIndex={false} cellWidth="w-10" />
        )}
      </div>

      <Legend items={[{ role: "current", label: "Digit being added" }, { role: "visited", label: "Consumed" }, { role: "sorted", label: "Final result" }]} />
    </div>
  );
}
