import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MaxDistinctData } from "./algorithm";

export function MaxDistinctRenderer({ step }: RendererProps<MaxDistinctData>) {
  const { nums, k, lo, hi, sum, distinct, best, valid, isBest, answer } = step.data;

  const roleFor = (i: number) => {
    if (hi < 0 || i < lo || i > hi) return "default";
    if (isBest) return "sorted";
    return valid ? "active" : "target";
  };

  const topLabel = (i: number) => {
    const parts: string[] = [];
    if (i === lo && hi >= 0) parts.push("L");
    if (i === hi) parts.push("R");
    return parts.join("/");
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">window size k = <b className="tabular-nums text-foreground">{k}</b></div>

      <ArrayCells values={nums} roleFor={roleFor} topLabel={topLabel} showIndex={false} />

      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border px-3 py-1">sum = <b className="tabular-nums">{sum}</b></span>
        <span className="rounded-md border px-3 py-1">distinct = <b className="tabular-nums">{distinct}</b> / {k}</span>
        <span className="rounded-md border px-3 py-1">best = <b className="tabular-nums">{answer ?? best}</b></span>
      </div>

      <Legend items={[{ role: "active", label: "Valid window" }, { role: "target", label: "Has duplicate" }, { role: "sorted", label: "Best window" }]} />
    </div>
  );
}
