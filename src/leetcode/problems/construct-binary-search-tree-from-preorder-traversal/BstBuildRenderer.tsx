import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { BstBuildData } from "./algorithm";

export function BstBuildRenderer({ step }: RendererProps<BstBuildData>) {
  const { preorder, heap, i, placed, bound, answer } = step.data;
  const shown = answer ?? heap;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">preorder</span>
        <ArrayCells values={preorder} roleFor={(k) => (k === i - 1 && placed !== null ? "current" : k < i ? "visited" : "default")} showIndex={false} cellWidth="w-10" />
      </div>

      {bound !== null && <div className="rounded-md border px-3 py-1 text-sm">current upper bound = {bound}</div>}

      {shown.length > 0 ? (
        <TreeView heap={shown} roleFor={(idx) => (idx === placed ? "current" : "default")} />
      ) : (
        <span className="text-sm text-muted-foreground">building…</span>
      )}

      <Legend items={[{ role: "current", label: "Just placed" }, { role: "visited", label: "Consumed" }]} />
    </div>
  );
}
