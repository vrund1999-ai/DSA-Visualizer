import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MaxDiffData } from "./algorithm";

export function MaxDiffRenderer({ step }: RendererProps<MaxDiffData>) {
  const { nums, scan, minIndex, best, bestPair, answer } = step.data;

  const roleFor = (i: number) => {
    if (answer !== null && bestPair && (i === bestPair[0] || i === bestPair[1])) return "sorted";
    if (i === scan) return "current";
    if (i === minIndex) return "pivot";
    return "default";
  };

  const topLabel = (i: number) => (i === minIndex ? "min" : i === scan ? "j" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <ArrayCells values={nums} roleFor={roleFor} topLabel={topLabel} showIndex={false} />

      <div className="rounded-md border px-3 py-1 text-sm">
        max difference = <b className="tabular-nums">{answer ?? best}</b>
      </div>

      <Legend items={[{ role: "pivot", label: "running min" }, { role: "current", label: "current" }, { role: "sorted", label: "best pair" }]} />
    </div>
  );
}
