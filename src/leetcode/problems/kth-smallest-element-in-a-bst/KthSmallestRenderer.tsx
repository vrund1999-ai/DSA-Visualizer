import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { KthSmallestData } from "./algorithm";

export function KthSmallestRenderer({ step }: RendererProps<KthSmallestData>) {
  const { heap, current, stack, visited, count, k, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === answer && answer !== null && heap[i] === answer) return "target";
    if (i === current) return "current";
    if (stack.includes(i)) return "active";
    if (visited.includes(i)) return "sorted";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">Visited</span>
        <span className="rounded-md border px-2.5 py-1 font-semibold tabular-nums">{count} / k = {k}</span>
        {answer !== null && <span className="font-semibold text-role-target">answer = {answer}</span>}
      </div>

      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      <Legend
        items={[
          { role: "current", label: "Visiting" },
          { role: "active", label: "On stack" },
          { role: "sorted", label: "Done (in order)" },
          { role: "target", label: "Answer" },
        ]}
      />
    </div>
  );
}
