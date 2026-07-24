import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { FlattenData } from "./algorithm";

export function FlattenRenderer({ step }: RendererProps<FlattenData>) {
  const { heap, current, list } = step.data;

  const roleFor = (i: number) => {
    if (i === current) return "current";
    if (heap[i] !== null && list.includes(heap[i] as number)) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">flattened list (preorder)</span>
        <NodeChain nodes={list.map((v, i) => ({ key: i, value: v, role: i === 0 ? "current" : "visited" }))} emptyLabel="—" />
      </div>

      <Legend items={[{ role: "current", label: "New head" }, { role: "visited", label: "In list" }]} />
    </div>
  );
}
