import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { InsertBSTData } from "./algorithm";

export function InsertBSTRenderer({ step }: RendererProps<InsertBSTData>) {
  const { heap, val, cur, path, inserted } = step.data;
  const pathSet = new Set(path);

  const roleFor = (i: number) => {
    if (i === inserted) return "sorted";
    if (i === cur) return "current";
    if (pathSet.has(i)) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="rounded-md border px-3 py-1 text-sm">inserting <b className="tabular-nums">{val}</b></div>

      <TreeView heap={heap} roleFor={roleFor} />

      <Legend items={[{ role: "current", label: "Comparing" }, { role: "active", label: "Search path" }, { role: "sorted", label: "Inserted" }]} />
    </div>
  );
}
