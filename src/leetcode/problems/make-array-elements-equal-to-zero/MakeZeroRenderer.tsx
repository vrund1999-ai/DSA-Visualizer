import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MakeZeroData } from "./algorithm";

export function MakeZeroRenderer({ step }: RendererProps<MakeZeroData>) {
  const { nums, attempt, finalState, valid, count, answer } = step.data;

  const roleFor = (i: number) => {
    if (attempt && i === attempt.start) return valid === false ? "swapped" : "current";
    if (nums[i] === 0) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">
          nums {attempt ? `· start ${attempt.start} ${attempt.dir === 1 ? "→" : "←"}` : ""}
        </span>
        <ArrayCells values={nums} roleFor={roleFor} topLabel={(i) => (attempt && i === attempt.start ? (attempt.dir === 1 ? "→" : "←") : "")} showIndex />
      </div>

      {finalState && (
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] uppercase tracking-wide text-muted-foreground">final state {valid ? "(all zero ✓)" : "(nonzero ✗)"}</span>
          <ArrayCells values={finalState} roleFor={(i) => (finalState[i] === 0 ? "sorted" : "swapped")} showIndex={false} cellWidth="w-9" />
        </div>
      )}

      <div className="rounded-md border px-3 py-1 text-sm">
        valid selections = <b className="tabular-nums">{answer ?? count}</b>
      </div>

      <Legend items={[{ role: "current", label: "start (valid)" }, { role: "swapped", label: "start (invalid)" }, { role: "active", label: "zero cell" }]} />
    </div>
  );
}
