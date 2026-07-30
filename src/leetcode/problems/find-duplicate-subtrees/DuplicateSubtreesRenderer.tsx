import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { DuplicateSubtreesData } from "./algorithm";

export function DuplicateSubtreesRenderer({ step }: RendererProps<DuplicateSubtreesData>) {
  const { heap, active, dupRoots, dupKeys } = step.data;
  const dupSet = new Set(dupRoots);

  const roleFor = (i: number) => {
    if (i === active) return "current";
    if (dupSet.has(i)) return "sorted";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <TreeView heap={heap} roleFor={roleFor} />

      {dupKeys.length > 0 && (
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">duplicate subtrees</span>
          <div className="flex flex-wrap justify-center gap-1.5">
            {dupKeys.map((k, i) => (
              <span key={i} className="rounded bg-role-sorted/20 px-2 py-0.5 font-mono text-xs">
                {k.replace(/,#/g, "").replace(/#/g, "∅")}
              </span>
            ))}
          </div>
        </div>
      )}

      <Legend items={[{ role: "current", label: "serializing" }, { role: "sorted", label: "duplicate root" }]} />
    </div>
  );
}
