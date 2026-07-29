import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { PartitionData } from "./algorithm";

export function PartitionRenderer({ step }: RendererProps<PartitionData>) {
  const { s, i, start, end, result, cut, answer } = step.data;

  const roleFor = (k: number) => {
    if (k === i) return cut ? "sorted" : "current";
    if (i !== null && k >= start && k < i) return "active";
    if (i !== null && k > i && k <= end) return "compared";
    return "default";
  };

  const topLabel = (k: number) => (k === end && i !== null ? "reach" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={s.split("")} roleFor={roleFor} topLabel={topLabel} showIndex cellWidth="w-8" />

      <div className="rounded-md border px-3 py-1 text-sm">
        partitions = [{(answer ?? result).join(", ")}]
      </div>

      <Legend items={[{ role: "active", label: "Current partition" }, { role: "compared", label: "Reach ahead" }, { role: "sorted", label: "Cut here" }]} />
    </div>
  );
}
