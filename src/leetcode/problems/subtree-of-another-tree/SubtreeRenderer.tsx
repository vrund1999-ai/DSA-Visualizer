import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { SubtreeData } from "./algorithm";

export function SubtreeRenderer({ step }: RendererProps<SubtreeData>) {
  const { root, subRoot, candidate, matched, answer } = step.data;

  const rootRole = (i: number) => {
    if (matched.includes(i)) return "sorted";
    if (i === candidate) return "current";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">root tree</span>
        <TreeView heap={root} roleFor={rootRole} />
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">subRoot (looking for this)</span>
        <TreeView heap={subRoot} roleFor={() => "active"} />
      </div>

      {answer !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm font-semibold ${answer ? "bg-role-sorted text-white" : "bg-role-compared text-white"}`}>
          {answer ? "subRoot is a subtree ✓" : "Not a subtree ✗"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Candidate root" }, { role: "sorted", label: "Matched" }, { role: "active", label: "subRoot" }]} />
    </div>
  );
}
