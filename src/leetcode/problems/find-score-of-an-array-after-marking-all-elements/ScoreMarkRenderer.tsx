import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ScoreMarkData } from "./algorithm";

export function ScoreMarkRenderer({ step }: RendererProps<ScoreMarkData>) {
  const { nums, marked, active, justMarked, score, answer } = step.data;
  const justSet = new Set(justMarked);

  const roleFor = (i: number) => {
    if (i === active) return "current";
    if (justSet.has(i)) return "swapped";
    if (marked[i]) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <ArrayCells values={nums} roleFor={roleFor} showIndex />

      <div className="rounded-md border px-3 py-1 text-sm">
        score = <b className="tabular-nums">{answer ?? score}</b>
      </div>

      <Legend
        items={[
          { role: "current", label: "picked (smallest)" },
          { role: "swapped", label: "marked this step" },
          { role: "visited", label: "already marked" },
        ]}
      />
    </div>
  );
}
