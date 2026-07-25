import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { CountSmallerData } from "./algorithm";

export function CountSmallerRenderer({ step }: RendererProps<CountSmallerData>) {
  const { nums, res, i, j, smaller, done } = step.data;

  const roleFor = (k: number) => {
    if (k === i) return "current";
    if (k === j) return smaller ? "sorted" : "target";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">nums</span>
        <ArrayCells values={nums} roleFor={roleFor} topLabel={(k) => (k === i ? "i" : k === j ? "j" : "")} showIndex={false} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">counts (smaller to the right)</span>
        <ArrayCells values={res} roleFor={(k) => (done ? "sorted" : k === i ? "swapped" : "default")} showIndex={false} />
      </div>

      <Legend items={[{ role: "current", label: "i" }, { role: "sorted", label: "smaller (counted)" }, { role: "target", label: "not smaller" }]} />
    </div>
  );
}
