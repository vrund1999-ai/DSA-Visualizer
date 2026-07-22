import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { ValidPalindromeData } from "./algorithm";

export function ValidPalindromeRenderer({ step }: RendererProps<ValidPalindromeData>) {
  const { clean, l, r, result } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-6">
      <p className="text-center text-xs text-muted-foreground">Cleaned (alphanumeric, lowercase)</p>
      <ArrayCells values={clean} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === l ? "L" : idx === r ? "R" : "")} showIndex={false} />

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-sorted" : "text-role-swapped"}`}>{result ? "Valid palindrome ✓" : "Not a palindrome ✗"}</p>
      )}

      <Legend
        items={[
          { role: "sorted", label: "Matched" },
          { role: "swapped", label: "Mismatch" },
        ]}
      />
    </div>
  );
}
