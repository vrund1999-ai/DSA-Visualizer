import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { IsSubsequenceData } from "./algorithm";

export function IsSubsequenceRenderer({ step }: RendererProps<IsSubsequenceData>) {
  const { s, t, i, j, result } = step.data;
  const roleForRef = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">s (subsequence)</span>
        <ArrayCells values={s} roleFor={(idx) => roleForRef(`s${idx}`)} topLabel={(idx) => (idx === i ? "i" : "")} showIndex={false} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">t (haystack)</span>
        <ArrayCells values={t} roleFor={(idx) => roleForRef(`t${idx}`)} topLabel={(idx) => (idx === j ? "j" : "")} showIndex={false} />
      </div>

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-sorted" : "text-role-swapped"}`}>{result ? "Subsequence ✓" : "Not a subsequence ✗"}</p>
      )}

      <Legend
        items={[
          { role: "sorted", label: "Matched" },
          { role: "visited", label: "Skipped in t" },
        ]}
      />
    </div>
  );
}
