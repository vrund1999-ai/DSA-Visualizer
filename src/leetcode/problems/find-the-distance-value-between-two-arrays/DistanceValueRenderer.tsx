import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { DistanceValueData } from "./algorithm";

export function DistanceValueRenderer({ step }: RendererProps<DistanceValueData>) {
  const { arr1, arr2, d, scan, conflict, count, answer } = step.data;

  const role1 = (i: number) => (i === scan ? (conflict === null ? "sorted" : "swapped") : "default");
  const role2 = (i: number) => (i === conflict ? "swapped" : "compared");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">d = {d}</span>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">arr1</span>
        <ArrayCells values={arr1} roleFor={role1} showIndex={false} cellWidth="w-9" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">arr2</span>
        <ArrayCells values={arr2} roleFor={role2} showIndex={false} cellWidth="w-9" />
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        distance value = <b className="tabular-nums">{answer ?? count}</b>
      </div>

      <Legend items={[{ role: "sorted", label: "valid (far enough)" }, { role: "swapped", label: "too close" }]} />
    </div>
  );
}
