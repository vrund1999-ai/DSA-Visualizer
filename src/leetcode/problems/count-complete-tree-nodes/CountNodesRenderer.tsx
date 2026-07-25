import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { CountNodesData } from "./algorithm";

export function CountNodesRenderer({ step }: RendererProps<CountNodesData>) {
  const { heap, root, leftHeight, rightHeight, perfect, total, answer } = step.data;

  // mark all descendants of `root` for context
  const inSubtree = (i: number): boolean => {
    if (root === null) return false;
    let x = i;
    while (x > root) x = Math.floor((x - 1) / 2);
    return x === root;
  };

  const roleFor = (i: number) => {
    if (i === root) return "current";
    if (inSubtree(i)) return perfect ? "sorted" : "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <TreeView heap={heap} roleFor={roleFor} />

      <div className="flex items-center gap-3 text-sm">
        {leftHeight !== null && <span className="rounded-md border px-3 py-1">left h = {leftHeight}, right h = {rightHeight} {perfect ? "→ perfect" : "→ split"}</span>}
        <span className="rounded-md border px-3 py-1">count = <b className="tabular-nums">{answer ?? total}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Subtree root" }, { role: "sorted", label: "Perfect (counted by formula)" }, { role: "active", label: "Recursing" }]} />
    </div>
  );
}
