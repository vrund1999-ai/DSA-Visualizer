import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { LCAData } from "./algorithm";

export function LCARenderer({ step }: RendererProps<LCAData>) {
  const { heap, p, q, current, found, lca } = step.data;

  const roleFor = (i: number) => {
    if (i === lca) return "target";
    if (i === current) return "current";
    if (heap[i] === p || heap[i] === q) return "compared";
    if (found.includes(i)) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
        <span>targets: <b className="text-role-compared">{p}</b>, <b className="text-role-compared">{q}</b></span>
        {lca !== null && <span>LCA: <b className="text-role-target">{heap[lca]}</b></span>}
      </div>

      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      <Legend items={[{ role: "current", label: "Visiting" }, { role: "compared", label: "Target" }, { role: "visited", label: "Contains a target" }, { role: "target", label: "LCA" }]} />
    </div>
  );
}
