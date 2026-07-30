import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { SortedBstData } from "./algorithm";

export function SortedBstRenderer({ step }: RendererProps<SortedBstData>) {
  const { nums, heap, midIndex, range } = step.data;

  const roleFor = (i: number) => {
    if (i === midIndex) return "current";
    if (range && i >= range[0] && i <= range[1]) return "compared";
    return "default";
  };

  const activeVal = midIndex !== null ? nums[midIndex] : null;
  const treeRoleFor = (i: number) => {
    if (heap[i] === null) return "default";
    if (activeVal !== null && heap[i] === activeVal) return "current";
    return "active";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <ArrayCells values={nums} roleFor={roleFor} showIndex cellWidth="w-9" />

      <TreeView heap={heap} roleFor={treeRoleFor} />

      <Legend items={[{ role: "compared", label: "current range" }, { role: "current", label: "chosen middle → root" }]} />
    </div>
  );
}
