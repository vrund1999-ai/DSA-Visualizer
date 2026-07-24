import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MaxOnesData } from "./algorithm";

export function MaxOnesRenderer({ step }: RendererProps<MaxOnesData>) {
  const { nums, k, left, right, zeros, best, isBest, answer } = step.data;

  const roleFor = (i: number) => {
    if (i < left || i > right) return "default";
    if (nums[i] === 0) return "target"; // a flipped zero
    if (isBest) return "sorted";
    return "active";
  };

  const topLabel = (i: number) => {
    const parts: string[] = [];
    if (i === left) parts.push("L");
    if (i === right) parts.push("R");
    return parts.join("/");
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} topLabel={topLabel} showIndex={false} />

      <div className="flex items-center gap-4 text-sm">
        <span className="text-muted-foreground">zeros in window: <b className="tabular-nums">{zeros}</b> / {k}</span>
        <span className="rounded-md border px-3 py-1">best = <b className="tabular-nums">{answer ?? best}</b></span>
      </div>

      <Legend items={[{ role: "active", label: "Window (one)" }, { role: "target", label: "Flipped zero" }, { role: "sorted", label: "Best window" }]} />
    </div>
  );
}
