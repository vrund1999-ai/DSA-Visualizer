import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { PalinNumData } from "./algorithm";

export function PalinNumRenderer({ step }: RendererProps<PalinNumData>) {
  const { digits, l, r, negative, result } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      {negative && <p className="text-center text-sm text-role-swapped">Negative number</p>}

      <ArrayCells
        values={digits}
        roleFor={(idx) => roleFor(idx)}
        topLabel={(idx) => (idx === l ? "l" : idx === r ? "r" : "")}
        showIndex={false}
      />

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-sorted" : "text-role-swapped"}`}>
          {result ? "Palindrome ✓" : "Not a palindrome ✗"}
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
