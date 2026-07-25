import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ParityData } from "./algorithm";

export function ParityRenderer({ step }: RendererProps<ParityData>) {
  const { nums, i, j, swapped, done } = step.data;

  const roleFor = (k: number) => {
    if (done) return nums[k] % 2 === 0 ? "sorted" : "active";
    if (swapped && (k === swapped[0] || k === swapped[1])) return "swapped";
    if (k === i || k === j) return "current";
    return "default";
  };

  const topLabel = (k: number) => {
    const parts: string[] = [];
    if (k === i) parts.push("i");
    if (k === j) parts.push("j");
    return parts.join("/");
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} topLabel={topLabel} />
      <Legend items={[{ role: "current", label: "i / j" }, { role: "swapped", label: "Swapping" }, { role: "sorted", label: "Even" }, { role: "active", label: "Odd" }]} />
    </div>
  );
}
