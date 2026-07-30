import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { SplitTreeData } from "./algorithm";

export function SplitTreeRenderer({ step }: RendererProps<SplitTreeData>) {
  const { heap, sub, total, cur, best, bestNode, answer } = step.data;

  // mark the best-split subtree indices
  const inBest = new Set<number>();
  if (answer !== null && bestNode !== null) {
    const collect = (i: number) => {
      if (i >= heap.length || heap[i] === null) return;
      inBest.add(i);
      collect(2 * i + 1);
      collect(2 * i + 2);
    };
    collect(bestNode);
  }

  const roleFor = (i: number) => {
    if (answer !== null && inBest.has(i)) return "sorted";
    if (i === cur) return "current";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">total sum = {total}</span>
      <TreeView heap={heap} roleFor={roleFor} />

      {cur !== null && sub[cur] !== undefined && cur !== 0 && (
        <div className="text-sm text-muted-foreground">
          subtree sum {sub[cur]} · product = {sub[cur]} × {total - sub[cur]} = <b className="text-foreground tabular-nums">{sub[cur] * (total - sub[cur])}</b>
        </div>
      )}

      <div className="rounded-md border px-3 py-1 text-sm">max product = <b className="tabular-nums">{answer ?? best}</b></div>

      <Legend items={[{ role: "current", label: "Evaluating subtree" }, { role: "sorted", label: "Best split part" }]} />
    </div>
  );
}
