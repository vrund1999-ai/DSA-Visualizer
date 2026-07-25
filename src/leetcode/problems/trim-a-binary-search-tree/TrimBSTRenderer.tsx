import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { TrimBSTData } from "./algorithm";

export function TrimBSTRenderer({ step }: RendererProps<TrimBSTData>) {
  const { heap, low, high, current, kept, removed } = step.data;

  const roleFor = (i: number) => {
    if (i === current) return "current";
    if (removed.includes(i)) return "wall";
    if (kept.includes(i)) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center text-sm text-muted-foreground">
        keep values in [<b className="text-foreground">{low}</b>, <b className="text-foreground">{high}</b>]
      </div>

      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      <Legend items={[{ role: "current", label: "Visiting" }, { role: "visited", label: "Kept (in range)" }, { role: "wall", label: "Removed" }]} />
    </div>
  );
}
