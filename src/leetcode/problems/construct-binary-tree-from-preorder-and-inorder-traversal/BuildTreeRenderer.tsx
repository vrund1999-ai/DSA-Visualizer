import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { BuildTreeData } from "./algorithm";

export function BuildTreeRenderer({ step }: RendererProps<BuildTreeData>) {
  const { preorder, inorder, heap, p, midInorder } = step.data;

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">preorder (next root ↑)</span>
        <ArrayCells values={preorder} roleFor={(idx) => (idx === p - 1 ? "target" : idx < p ? "visited" : "default")} showIndex={false} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">inorder (split point)</span>
        <ArrayCells values={inorder} roleFor={(idx) => (idx === midInorder ? "compared" : "default")} showIndex={false} />
      </div>

      <div className="flex flex-1 items-center justify-center">
        {heap.length === 0 ? <span className="text-xs text-muted-foreground">building…</span> : <TreeView heap={heap} roleFor={() => "sorted"} />}
      </div>

      <Legend
        items={[
          { role: "target", label: "Current root" },
          { role: "compared", label: "Split in inorder" },
          { role: "sorted", label: "Placed node" },
        ]}
      />
    </div>
  );
}
