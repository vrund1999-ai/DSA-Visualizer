import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MiddleIndexData } from "./algorithm";

export function MiddleIndexRenderer({ step }: RendererProps<MiddleIndexData>) {
  const { nums, scan, leftSum, rightSum, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === scan) return answer === i ? "sorted" : "current";
    if (scan !== null && i < scan) return "visited";
    if (scan !== null && i > scan) return "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <ArrayCells values={nums} roleFor={roleFor} topLabel={(i) => (i === scan ? "i" : "")} showIndex />

      <div className="flex gap-4 text-sm tabular-nums">
        <span className="text-role-visited">left = {leftSum}</span>
        {rightSum !== null && <span className="text-role-compared">right = {rightSum}</span>}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        middle index = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>

      <Legend
        items={[
          { role: "visited", label: "left of i" },
          { role: "current", label: "index i" },
          { role: "compared", label: "right of i" },
        ]}
      />
    </div>
  );
}
