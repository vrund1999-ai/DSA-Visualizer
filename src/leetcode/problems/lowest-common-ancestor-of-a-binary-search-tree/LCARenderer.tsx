import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { LCAData } from "./algorithm";

export function LCARenderer({ step }: RendererProps<LCAData>) {
  const { heap, p, q, current, path, lca } = step.data;

  const roleFor = (i: number) => {
    if (i === lca) return "target";
    if (i === current) return "current";
    if (path.includes(i)) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Targets</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2 py-0.5 font-semibold tabular-nums text-primary">{p}</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2 py-0.5 font-semibold tabular-nums text-primary">{q}</span>
        {lca !== null && <span className="ml-2 font-semibold text-role-target">LCA = {heap[lca]}</span>}
      </div>

      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      <Legend
        items={[
          { role: "current", label: "Current node" },
          { role: "visited", label: "Path" },
          { role: "target", label: "LCA" },
        ]}
      />
    </div>
  );
}
