import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { MergeTreesData } from "./algorithm";

export function MergeTreesRenderer({ step }: RendererProps<MergeTreesData>) {
  const { t1, t2, merged, cur, answer } = step.data;
  const shown = answer ?? merged;

  const roleFor = (i: number) => (i === cur ? "current" : "default");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <div className="flex flex-wrap items-start justify-center gap-6">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase text-muted-foreground">tree 1</span>
          <TreeView heap={t1} roleFor={roleFor} />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase text-muted-foreground">tree 2</span>
          <TreeView heap={t2} roleFor={roleFor} />
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase text-role-sorted">merged</span>
        {shown.some((v) => v !== null) ? <TreeView heap={shown} roleFor={(i) => (i === cur ? "current" : answer ? "sorted" : "default")} /> : <span className="text-sm text-muted-foreground">…</span>}
      </div>

      <Legend items={[{ role: "current", label: "Merging node" }, { role: "sorted", label: "Merged tree" }]} />
    </div>
  );
}
