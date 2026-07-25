import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { DeleteBSTData } from "./algorithm";

export function DeleteBSTRenderer({ step }: RendererProps<DeleteBSTData>) {
  const { heap, key, current, target, successor } = step.data;

  const roleFor = (i: number) => {
    if (i === target) return "target";
    if (i === successor) return "swapped";
    if (i === current) return "current";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center text-sm text-muted-foreground">deleting key {key}</div>

      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      <Legend items={[{ role: "current", label: "Search path" }, { role: "target", label: "Node to delete" }, { role: "swapped", label: "In-order successor" }]} />
    </div>
  );
}
