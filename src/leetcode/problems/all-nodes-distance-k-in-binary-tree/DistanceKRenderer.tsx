import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { DistanceKData } from "./algorithm";

export function DistanceKRenderer({ step }: RendererProps<DistanceKData>) {
  const { heap, target, k, frontier, seen, dist, answer } = step.data;

  const roleFor = (i: number) => {
    if (heap[i] === target) return "target";
    if (frontier.includes(i)) return answer ? "sorted" : "current";
    if (seen.includes(i)) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border border-role-target px-3 py-1">target {target}</span>
        <span className="rounded-md border px-3 py-1">k = {k}</span>
        <span className="rounded-md border px-3 py-1">ring dist = {dist}</span>
      </div>

      <TreeView heap={heap} roleFor={roleFor} />

      {answer && <div className="rounded-md border px-3 py-1 text-sm font-semibold">distance {k} → [{answer.join(", ")}]</div>}

      <Legend items={[{ role: "target", label: "Target" }, { role: "current", label: "Current ring" }, { role: "visited", label: "Closer rings" }, { role: "sorted", label: "Answer" }]} />
    </div>
  );
}
