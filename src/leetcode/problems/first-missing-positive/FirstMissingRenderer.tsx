import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { FirstMissingData } from "./algorithm";

export function FirstMissingRenderer({ step }: RendererProps<FirstMissingData>) {
  const { nums, swap, scan, phase, answer } = step.data;

  const roleFor = (i: number) => {
    if (phase !== "place" && i === scan) return answer !== null && answer === i + 1 ? "target" : "current";
    if (swap && (i === swap[0] || i === swap[1])) return "swapped";
    // a slot holding its correct value
    if (nums[i] === i + 1) return "sorted";
    return "default";
  };

  const badge = (i: number) => `→${i + 1}`;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">{phase === "place" ? "placing each value at index value−1" : "scanning for the first wrong slot"}</div>

      <ArrayCells values={nums} roleFor={roleFor} badge={badge} />

      {answer !== null && <div className="text-base font-semibold text-role-target">first missing positive = {answer}</div>}

      <Legend items={[{ role: "swapped", label: "Swapping" }, { role: "sorted", label: "Value == index+1" }, { role: "current", label: "Scanning" }, { role: "target", label: "Answer" }]} />
    </div>
  );
}
