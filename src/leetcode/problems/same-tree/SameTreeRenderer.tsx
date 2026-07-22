import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { SameTreeData } from "./algorithm";

export function SameTreeRenderer({ step }: RendererProps<SameTreeData>) {
  const { p, q, current, matched, mismatch, result } = step.data;

  const roleFor = (i: number) => {
    if (i === mismatch) return "swapped";
    if (i === current) return "current";
    if (matched.includes(i)) return "sorted";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Tree p</span>
          <TreeView heap={p} roleFor={roleFor} />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Tree q</span>
          <TreeView heap={q} roleFor={roleFor} />
        </div>
      </div>

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-sorted" : "text-role-swapped"}`}>
          {result ? "Same tree ✓" : "Different trees ✗"}
        </p>
      )}

      <Legend
        items={[
          { role: "current", label: "Comparing" },
          { role: "sorted", label: "Matched" },
          { role: "swapped", label: "Mismatch" },
        ]}
      />
    </div>
  );
}
