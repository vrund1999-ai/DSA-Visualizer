import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { PalindromeData } from "./algorithm";

export function PalindromeRenderer({ step }: RendererProps<PalindromeData>) {
  const { chars, l, r, bestStart, bestEnd } = step.data;
  const roleFor = roleLookup(step.highlights);
  const bestText = chars.slice(bestStart, bestEnd + 1).join("");

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Longest palindrome</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-mono font-semibold text-role-target">
          {bestText ? `"${bestText}"` : "—"}
        </span>
      </div>

      <ArrayCells
        values={chars}
        roleFor={(idx) => roleFor(idx)}
        topLabel={(idx) => (idx === l ? "l" : idx === r ? "r" : "")}
      />

      <Legend
        items={[
          { role: "active", label: "Expanding window" },
          { role: "target", label: "Best palindrome" },
        ]}
      />
    </div>
  );
}
