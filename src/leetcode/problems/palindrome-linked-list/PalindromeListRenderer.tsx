import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { PalindromeListData } from "./algorithm";

export function PalindromeListRenderer({ step }: RendererProps<PalindromeListData>) {
  const { values, l, r, result } = step.data;

  const roleFor = (i: number) => {
    if (result === false && (i === l || i === r)) return "swapped";
    if (i === l || i === r) return "current";
    if (l !== null && r !== null && (i < l || i > r)) return "sorted";
    return "default";
  };

  const nodes = values.map((v, i) => ({
    key: i,
    value: v,
    role: roleFor(i),
    label: i === l ? "L" : i === r ? "R" : "",
  }));

  return (
    <div className="flex h-full flex-col gap-6">
      <NodeChain nodes={nodes} />

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-sorted" : "text-role-swapped"}`}>{result ? "Palindrome ✓" : "Not a palindrome ✗"}</p>
      )}

      <Legend
        items={[
          { role: "current", label: "Comparing" },
          { role: "sorted", label: "Matched pairs" },
          { role: "swapped", label: "Mismatch" },
        ]}
      />
    </div>
  );
}
