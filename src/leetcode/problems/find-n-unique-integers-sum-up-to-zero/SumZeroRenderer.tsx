import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { SumZeroData } from "./algorithm";

export function SumZeroRenderer({ step }: RendererProps<SumZeroData>) {
  const { n, result, added, sum, done } = step.data;
  const addedSet = new Set(added);

  const roleFor = (i: number) => {
    if (addedSet.has(i)) return "current";
    if (done) return "sorted";
    return "active";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">n = {n}</span>

      {result.length > 0 ? (
        <ArrayCells values={result} roleFor={roleFor} showIndex={false} />
      ) : (
        <span className="text-sm text-muted-foreground">(empty)</span>
      )}

      <div className="rounded-md border px-3 py-1 text-sm tabular-nums">
        sum = <b>{sum}</b> · count = {result.length}/{n}
      </div>

      <Legend items={[{ role: "current", label: "just added" }, { role: "sorted", label: "final answer" }]} />
    </div>
  );
}
