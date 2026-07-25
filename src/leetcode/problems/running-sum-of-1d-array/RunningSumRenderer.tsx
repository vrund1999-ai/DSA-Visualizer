import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { RunningSumData } from "./algorithm";

export function RunningSumRenderer({ step }: RendererProps<RunningSumData>) {
  const { nums, cur, done } = step.data;

  const roleFor = (i: number) => {
    if (done) return "sorted";
    if (i === cur) return "swapped";
    if (i === (cur ?? 0) - 1) return "compared";
    if (cur !== null && i < cur) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} topLabel={(i) => (i === cur ? "i" : i === (cur ?? 0) - 1 ? "i−1" : "")} />
      <Legend items={[{ role: "swapped", label: "Updating" }, { role: "compared", label: "Previous total" }, { role: "sorted", label: "Done" }]} />
    </div>
  );
}
