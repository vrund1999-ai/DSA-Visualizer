import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { SortedBSTData } from "./algorithm";

export function SortedBSTRenderer({ step }: RendererProps<SortedBSTData>) {
  const { nums, heap } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Sorted input</span>
        <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} />
      </div>

      <div className="flex flex-1 items-center justify-center">
        {heap.length === 0 ? (
          <span className="text-xs text-muted-foreground">building…</span>
        ) : (
          <TreeView heap={heap} roleFor={() => "sorted"} />
        )}
      </div>

      <Legend
        items={[
          { role: "active", label: "Current range" },
          { role: "target", label: "Chosen root" },
          { role: "sorted", label: "Placed node" },
        ]}
      />
    </div>
  );
}
