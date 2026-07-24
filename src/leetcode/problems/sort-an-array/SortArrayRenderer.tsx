import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { SortArrayData } from "./algorithm";

export function SortArrayRenderer({ step }: RendererProps<SortArrayData>) {
  const { values, range, writing, wrote, sorted } = step.data;

  const roleFor = (i: number) => {
    if (sorted) return "sorted";
    if (i === wrote) return "swapped";
    if (writing.includes(i)) return "active";
    if (range && i >= range[0] && i < range[1]) return "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={values} roleFor={roleFor} />
      <Legend items={[{ role: "compared", label: "Merging segment" }, { role: "active", label: "Written" }, { role: "swapped", label: "Just wrote" }, { role: "sorted", label: "Sorted" }]} />
    </div>
  );
}
