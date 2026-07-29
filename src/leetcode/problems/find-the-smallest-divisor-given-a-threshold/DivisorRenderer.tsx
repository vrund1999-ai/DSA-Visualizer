import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { DivisorData } from "./algorithm";

export function DivisorRenderer({ step }: RendererProps<DivisorData>) {
  const { nums, threshold, lo, hi, mid, quotients, cost, ok, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">threshold = {threshold}</span>
        <span className="rounded-md border px-3 py-1">search [{lo}, {hi}]</span>
        {mid !== null && <span className="rounded-md border border-role-current px-3 py-1">divisor = {mid}</span>}
      </div>

      <ArrayCells values={nums} roleFor={() => "default"} badge={(i) => (quotients.length ? `⌈${quotients[i]}⌉` : `${nums[i]}`)} showIndex={false} cellWidth="w-12" />

      {cost !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">
          Σ ceil(n / {mid}) = <b className="tabular-nums">{cost}</b> {ok ? "≤" : ">"} {threshold}
        </div>
      )}

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">smallest divisor = {answer}</div>}

      <Legend items={[{ role: "current", label: "Candidate divisor" }]} />
      <p className="text-xs text-muted-foreground">badges show ceil(nums[i] / divisor)</p>
    </div>
  );
}
