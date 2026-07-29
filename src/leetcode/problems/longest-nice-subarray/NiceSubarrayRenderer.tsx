import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { NiceSubarrayData } from "./algorithm";

export function NiceSubarrayRenderer({ step }: RendererProps<NiceSubarrayData>) {
  const { nums, l, r, mask, conflict, best, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === r) return conflict ? "compared" : "current";
    if (r !== null && i >= l && i < r) return "active";
    return "default";
  };

  const badge = (i: number) => nums[i].toString(2);
  const topLabel = (i: number) => (i === l ? "l" : i === r ? "r" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} topLabel={topLabel} badge={badge} showIndex={false} cellWidth="w-12" />

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">mask = <b className="tabular-nums">{mask}</b> ({mask.toString(2)})</span>
        <span className="rounded-md border px-3 py-1">best = <b className="tabular-nums">{answer ?? best}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "New element" }, { role: "compared", label: "Bit conflict" }, { role: "active", label: "Window" }]} />
      <p className="text-xs text-muted-foreground">badges show each number in binary</p>
    </div>
  );
}
