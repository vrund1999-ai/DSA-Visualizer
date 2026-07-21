import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { MaxDepthData } from "./algorithm";

export function MaxDepthRenderer({ step }: RendererProps<MaxDepthData>) {
  const { heap, current, depth, maxDepth, done } = step.data;

  const roleFor = (i: number) => {
    if (i === current) return "current";
    if (done.includes(i)) return "sorted";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">Current depth</span>
        <span className="rounded-md border px-2.5 py-1 font-semibold tabular-nums">{depth}</span>
        <span className="ml-3 text-muted-foreground">Max depth</span>
        <span className="rounded-md border border-role-sorted bg-role-sorted/10 px-2.5 py-1 font-semibold tabular-nums text-role-sorted">
          {maxDepth}
        </span>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      <Legend
        items={[
          { role: "current", label: "Visiting" },
          { role: "sorted", label: "Height computed" },
        ]}
      />
    </div>
  );
}
