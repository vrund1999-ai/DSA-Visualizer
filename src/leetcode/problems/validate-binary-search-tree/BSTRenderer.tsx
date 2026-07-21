import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { BSTData } from "./algorithm";

export function BSTRenderer({ step }: RendererProps<BSTData>) {
  const { heap, current, low, high, validated, invalid, result } = step.data;

  const roleFor = (i: number) => {
    if (i === invalid) return "swapped";
    if (i === current) return "current";
    if (validated.includes(i)) return "sorted";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Bounds for current node</span>
        <span className="rounded-md border border-role-current bg-role-current/10 px-2.5 py-1 font-mono">
          ({low}, {high})
        </span>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-sorted" : "text-role-swapped"}`}>
          {result ? "Valid BST ✓" : "Not a valid BST ✗"}
        </p>
      )}

      <Legend
        items={[
          { role: "current", label: "Checking" },
          { role: "sorted", label: "Valid subtree" },
          { role: "swapped", label: "Bound violated" },
        ]}
      />
    </div>
  );
}
