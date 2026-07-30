import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { LcaDeepestData } from "./algorithm";

export function LcaDeepestRenderer({ step }: RendererProps<LcaDeepestData>) {
  const { heap, active, lca, deepest, answer } = step.data;
  const deepSet = new Set(deepest);

  const roleFor = (i: number) => {
    if (heap[i] === null) return "default";
    if (i === (answer ?? lca)) return "sorted";
    if (i === active) return "current";
    if (deepSet.has(i)) return "target";
    return "active";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <TreeView heap={heap} roleFor={roleFor} />

      <div className="rounded-md border px-3 py-1 text-sm">
        LCA of deepest leaves = <b>{answer !== null ? heap[answer] : "…"}</b>
      </div>

      <Legend
        items={[
          { role: "target", label: "deepest leaves" },
          { role: "current", label: "DFS returning" },
          { role: "sorted", label: "LCA" },
        ]}
      />
    </div>
  );
}
