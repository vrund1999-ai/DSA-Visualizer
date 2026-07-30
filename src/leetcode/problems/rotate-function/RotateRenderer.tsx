import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { RotateData } from "./algorithm";

export function RotateRenderer({ step }: RendererProps<RotateData>) {
  const { nums, k, rotated, f, max, answer } = step.data;
  const n = nums.length;
  const movedValue = k > 0 ? nums[n - k] : null;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">rotated by k = {k}</span>
        <ArrayCells
          values={rotated}
          roleFor={(i) => (movedValue !== null && rotated[i] === movedValue && i === 0 ? "current" : "default")}
          topLabel={(i) => `×${i}`}
        />
      </div>

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">F({k}) = <b className="tabular-nums">{f}</b></span>
        <span className="rounded-md border px-3 py-1">max = <b className="tabular-nums">{answer ?? max}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Wrapped to weight 0" }]} />
    </div>
  );
}
