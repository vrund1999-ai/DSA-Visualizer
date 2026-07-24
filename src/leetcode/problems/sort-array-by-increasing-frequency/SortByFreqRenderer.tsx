import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { SortByFreqData } from "./algorithm";

export function SortByFreqRenderer({ step }: RendererProps<SortByFreqData>) {
  const { order, freq, counting, sorted } = step.data;

  const roleFor = (i: number) => {
    if (sorted) return "sorted";
    if (order[i] === counting) return "current";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">{sorted ? "sorted by increasing frequency (ties: larger first)" : "counting frequencies"}</div>

      <ArrayCells values={order} roleFor={roleFor} badge={(i) => (freq[order[i]] !== undefined ? `×${freq[order[i]]}` : undefined)} />

      <Legend items={[{ role: "current", label: "Counting" }, { role: "sorted", label: "Sorted" }]} />
    </div>
  );
}
