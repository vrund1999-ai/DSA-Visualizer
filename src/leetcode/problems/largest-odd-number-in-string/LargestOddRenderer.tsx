import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { LargestOddData } from "./algorithm";

export function LargestOddRenderer({ step }: RendererProps<LargestOddData>) {
  const { num, scan, cut, answer } = step.data;
  const digits = num.split("");

  const roleFor = (i: number) => {
    if (cut !== null) return i <= cut ? "sorted" : "visited";
    if (i === scan) return "current";
    if (scan !== null && i > scan) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={digits} roleFor={roleFor} showIndex cellWidth="w-10" />

      {answer !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">
          largest odd = <b>{answer === "" ? "\"\" (none)" : `"${answer}"`}</b>
        </div>
      )}

      <Legend items={[{ role: "current", label: "Scanning" }, { role: "visited", label: "Rejected (even tail)" }, { role: "sorted", label: "Kept prefix" }]} />
    </div>
  );
}
