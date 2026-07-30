import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { RangeSumData } from "./algorithm";

export function RangeSumRenderer({ step }: RendererProps<RangeSumData>) {
  const { heap, low, high, active, inRange, sum, answer } = step.data;
  const inSet = new Set(inRange);

  const roleFor = (i: number) => {
    if (heap[i] === null) return "default";
    if (i === active) return "current";
    if (inSet.has(i)) return "sorted";
    return "active";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">
        range [{low}, {high}]
      </span>

      <TreeView heap={heap} roleFor={roleFor} />

      <div className="rounded-md border px-3 py-1 text-sm">
        range sum = <b className="tabular-nums">{answer ?? sum}</b>
      </div>

      <Legend items={[{ role: "current", label: "visiting" }, { role: "sorted", label: "in range (added)" }]} />
    </div>
  );
}
