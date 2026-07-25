import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { CountBitsData } from "./algorithm";

export function CountBitsRenderer({ step }: RendererProps<CountBitsData>) {
  const { dp, i, half, lastBit, answer } = step.data;

  const roleFor = (k: number) => {
    if (k === i) return "current";
    if (k === half) return "compared";
    return "default";
  };

  const badge = (k: number) => k.toString(2);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">dp = number of set bits (badge = binary)</span>
      <ArrayCells values={dp} roleFor={roleFor} badge={badge} showIndex cellWidth="w-12" />

      {i !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">
          dp[{i}] = dp[{half}] + <b>{lastBit}</b> (last bit) = <b className="tabular-nums">{dp[i]}</b>
        </div>
      )}

      {answer !== null && <div className="text-sm text-muted-foreground">done</div>}

      <Legend items={[{ role: "current", label: "dp[i]" }, { role: "compared", label: "dp[i>>1] reused" }]} />
    </div>
  );
}
