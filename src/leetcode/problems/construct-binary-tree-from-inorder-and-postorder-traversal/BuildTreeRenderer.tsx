import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { BuildTreeData } from "./algorithm";

export function BuildTreeRenderer({ step }: RendererProps<BuildTreeData>) {
  const { inorder, postorder, heap, postIdx, range, mid, answer } = step.data;
  const rootVal = mid !== null ? inorder[mid] : null;
  const shownHeap = answer ?? heap;

  const inRole = (i: number) => {
    if (i === mid) return "current";
    if (range && i >= range[0] && i <= range[1]) return "active";
    return "default";
  };
  const postRole = (i: number) => (i === postIdx ? "current" : "default");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">inorder</span>
          <ArrayCells values={inorder} roleFor={inRole} showIndex />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">postorder</span>
          <ArrayCells values={postorder} roleFor={postRole} showIndex />
        </div>
      </div>

      {shownHeap.length > 0 && <TreeView heap={shownHeap} roleFor={(i) => (shownHeap[i] === rootVal && rootVal !== null ? "current" : "default")} />}

      <Legend items={[{ role: "current", label: "Current root" }, { role: "active", label: "Inorder subrange" }]} />
    </div>
  );
}
