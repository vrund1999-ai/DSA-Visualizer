import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ValidPalinData } from "./algorithm";

export function ValidPalinRenderer({ step }: RendererProps<ValidPalinData>) {
  const { s, l, r, deleted, mismatch, answer } = step.data;
  const chars = s.split("");

  const roleFor = (i: number) => {
    if (i === deleted) return "compared";
    if (i === l || i === r) return mismatch ? "compared" : "current";
    return "default";
  };

  const topLabel = (i: number) => (i === l && i === r ? "l/r" : i === l ? "l" : i === r ? "r" : i === deleted ? "skip" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={chars} roleFor={roleFor} topLabel={topLabel} showIndex cellWidth="w-9" />

      {answer !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm font-semibold ${answer ? "bg-role-sorted text-white" : "bg-role-compared text-white"}`}>
          {answer ? "Palindrome after ≤1 deletion ✓" : "Not achievable ✗"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Matched pointers" }, { role: "compared", label: "Mismatch / skipped" }]} />
    </div>
  );
}
