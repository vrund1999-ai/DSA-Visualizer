import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ShuffleData } from "./algorithm";

export function ShuffleRenderer({ step }: RendererProps<ShuffleData>) {
  const { nums, n, res, xi, yi, done } = step.data;

  const roleFor = (i: number) => {
    if (i === xi) return "current";
    if (i === yi) return "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">nums (| splits the two halves)</span>
        <div className="flex items-center gap-1">
          <ArrayCells values={nums.slice(0, n)} roleFor={(i) => roleFor(i)} showIndex={false} cellWidth="w-9" />
          <span className="text-lg text-muted-foreground">|</span>
          <ArrayCells values={nums.slice(n)} roleFor={(i) => roleFor(i + n)} showIndex={false} cellWidth="w-9" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">result</span>
        <ArrayCells values={res} roleFor={() => (done ? "sorted" : "active")} showIndex={false} cellWidth="w-9" />
      </div>

      <Legend items={[{ role: "current", label: "x_i (front half)" }, { role: "compared", label: "y_i (back half)" }, { role: "active", label: "Interleaved" }]} />
    </div>
  );
}
