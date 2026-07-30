import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { InfectData } from "./algorithm";

export function InfectRenderer({ step }: RendererProps<InfectData>) {
  const { heap, start, time, frontier, minutes, answer } = step.data;
  const frontierSet = new Set(frontier);

  const roleFor = (i: number) => {
    if (heap[i] === start) return "target";
    if (frontierSet.has(i)) return "current";
    if (time[i] >= 0) return "swapped";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <TreeView heap={heap} roleFor={roleFor} />

      <div className="rounded-md border px-3 py-1 text-sm">
        minute <b className="tabular-nums">{minutes}</b>
        {answer !== null && <span className="ml-2 text-role-sorted">· fully infected in {answer}</span>}
      </div>

      <Legend items={[{ role: "target", label: "Start" }, { role: "current", label: "Infected this minute" }, { role: "swapped", label: "Infected" }]} />
    </div>
  );
}
