import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { SplitData } from "./algorithm";

export function SplitRenderer({ step }: RendererProps<SplitData>) {
  const { nums, scan, leftSum, rightSum, valid, count, answer } = step.data;

  const roleFor = (i: number) => {
    if (scan === null) return "default";
    if (i <= scan) return valid ? "sorted" : "visited";
    return "compared";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <ArrayCells values={nums} roleFor={roleFor} topLabel={(i) => (i === scan ? "|" : "")} showIndex />

      <div className="flex gap-4 text-sm tabular-nums">
        <span className="text-role-sorted">left = {leftSum}</span>
        {rightSum !== null && <span className="text-role-compared">right = {rightSum}</span>}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        valid splits = <b className="tabular-nums">{answer ?? count}</b>
      </div>

      <Legend
        items={[
          { role: "sorted", label: "left ≥ right (valid)" },
          { role: "visited", label: "left < right" },
          { role: "compared", label: "right part" },
        ]}
      />
    </div>
  );
}
