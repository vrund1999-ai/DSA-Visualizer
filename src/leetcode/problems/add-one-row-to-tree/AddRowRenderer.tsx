import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { AddRowData } from "./algorithm";

export function AddRowRenderer({ step }: RendererProps<AddRowData>) {
  const { heap, inserted, depth, val, phase } = step.data;
  const insertedSet = new Set(inserted);

  const roleFor = (i: number) => {
    if (heap[i] === null || heap[i] === undefined) return "default";
    if (insertedSet.has(i)) return "sorted";
    return "active";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">
        {phase === "before" ? "original tree" : `after adding row (val ${val}) at depth ${depth}`}
      </span>

      <TreeView heap={heap} roleFor={roleFor} />

      <Legend items={[{ role: "sorted", label: "inserted nodes" }, { role: "active", label: "existing" }]} />
    </div>
  );
}
