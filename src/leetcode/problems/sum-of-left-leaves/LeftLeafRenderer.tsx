import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { LeftLeafData } from "./algorithm";

export function LeftLeafRenderer({ step }: RendererProps<LeftLeafData>) {
  const { heap, cur, counted, sum, answer } = step.data;
  const countedSet = new Set(counted);

  const roleFor = (i: number) => {
    if (i === cur && !countedSet.has(i)) return "current";
    if (countedSet.has(i)) return "sorted";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <TreeView heap={heap} roleFor={roleFor} />

      <div className="rounded-md border px-3 py-1 text-sm">sum of left leaves = <b className="tabular-nums">{answer ?? sum}</b></div>

      <Legend items={[{ role: "current", label: "Visiting" }, { role: "sorted", label: "Counted left leaf" }]} />
    </div>
  );
}
