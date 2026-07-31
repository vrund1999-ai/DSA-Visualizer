import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { ClosestBstData } from "./algorithm";

export function ClosestBstRenderer({ step }: RendererProps<ClosestBstData>) {
  const { heap, target, active, visited, closest, answer } = step.data;
  const visitedSet = new Set(visited);

  const roleFor = (i: number) => {
    if (heap[i] === null) return "default";
    if (i === active) return "current";
    if (heap[i] === (answer ?? closest) && visitedSet.has(i)) return "sorted";
    if (visitedSet.has(i)) return "visited";
    return "active";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">target = {target}</span>

      <TreeView heap={heap} roleFor={roleFor} />

      <div className="rounded-md border px-3 py-1 text-sm">
        closest value = <b className="tabular-nums">{answer ?? closest}</b>
      </div>

      <Legend items={[{ role: "current", label: "visiting" }, { role: "sorted", label: "closest" }, { role: "visited", label: "walk path" }]} />
    </div>
  );
}
