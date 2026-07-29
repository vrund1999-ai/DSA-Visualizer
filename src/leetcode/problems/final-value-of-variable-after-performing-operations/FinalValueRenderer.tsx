import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { FinalValueData } from "./algorithm";

export function FinalValueRenderer({ step }: RendererProps<FinalValueData>) {
  const { operations, idx, delta, x, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === idx) return delta === 1 ? "sorted" : "compared";
    if (idx !== null && i < idx) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-7">
      <ArrayCells values={operations} roleFor={roleFor} showIndex={false} cellWidth="w-12" />

      <div className="rounded-md border-2 border-role-current px-6 py-3 text-3xl font-bold tabular-nums">x = {answer ?? x}</div>

      <Legend items={[{ role: "sorted", label: "Increment (+)" }, { role: "compared", label: "Decrement (−)" }, { role: "visited", label: "Applied" }]} />
    </div>
  );
}
