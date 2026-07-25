import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { EvenDigitsData } from "./algorithm";

export function EvenDigitsRenderer({ step }: RendererProps<EvenDigitsData>) {
  const { nums, pos, digits, isEven, count, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === pos) return isEven ? "sorted" : "target";
    if (pos !== null && i < pos) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} badge={(i) => (i === pos && digits !== null ? `${digits}d` : undefined)} />

      <div className="text-sm">even-digit numbers = <b className="tabular-nums text-role-sorted">{answer ?? count}</b></div>

      <Legend items={[{ role: "sorted", label: "Even digits" }, { role: "target", label: "Odd digits" }, { role: "visited", label: "Checked" }]} />
    </div>
  );
}
