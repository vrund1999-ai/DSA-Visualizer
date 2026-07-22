import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { BalancedData } from "./algorithm";

export function BalancedRenderer({ step }: RendererProps<BalancedData>) {
  const { heap, current, done, badNode, result } = step.data;

  const roleFor = (i: number) => {
    if (i === badNode) return "swapped";
    if (i === current) return "current";
    if (done.includes(i)) return "sorted";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-sorted" : "text-role-swapped"}`}>
          {result ? "Height-balanced ✓" : "Not balanced ✗"}
        </p>
      )}

      <Legend
        items={[
          { role: "current", label: "Descending" },
          { role: "sorted", label: "Balanced subtree" },
          { role: "swapped", label: "Unbalanced node" },
        ]}
      />
    </div>
  );
}
