import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { CoinsData } from "./algorithm";

export function CoinsRenderer({ step }: RendererProps<CoinsData>) {
  const { heap, cur, balance, moves, answer } = step.data;
  const processed = new Set(Object.keys(balance).map(Number));

  const roleFor = (i: number) => {
    if (i === cur) return "current";
    if (processed.has(i)) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">coins per node</span>
      <TreeView heap={heap} roleFor={roleFor} />

      {cur !== null && balance[cur] !== undefined && (
        <div className="text-sm text-muted-foreground">
          subtree at node {heap[cur]} passes <b className="text-foreground tabular-nums">{balance[cur] >= 0 ? `+${balance[cur]}` : balance[cur]}</b> coin(s) to its parent
        </div>
      )}

      <div className="rounded-md border px-3 py-1 text-sm">total moves = <b className="tabular-nums">{answer ?? moves}</b></div>

      <Legend items={[{ role: "current", label: "Processing" }, { role: "visited", label: "Balanced subtree" }]} />
    </div>
  );
}
