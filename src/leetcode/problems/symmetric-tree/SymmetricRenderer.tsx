import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { SymmetricData } from "./algorithm";

export function SymmetricRenderer({ step }: RendererProps<SymmetricData>) {
  const { heap, a, b, matched, mismatch, result } = step.data;

  const roleFor = (i: number) => {
    if (i === a || i === b) return "current";
    if (mismatch.includes(i)) return "swapped";
    if (matched.includes(i)) return "sorted";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-sorted" : "text-role-swapped"}`}>
          {result ? "Symmetric ✓" : "Not symmetric ✗"}
        </p>
      )}

      <Legend
        items={[
          { role: "current", label: "Comparing pair" },
          { role: "sorted", label: "Matched" },
          { role: "swapped", label: "Mismatch" },
        ]}
      />
    </div>
  );
}
