import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { LargestNumberData } from "./algorithm";

export function LargestNumberRenderer({ step }: RendererProps<LargestNumberData>) {
  const { order, compare, note, sorted, answer } = step.data;

  const roleFor = (i: number) => {
    if (sorted) return "sorted";
    if (compare && (i === compare[0] || i === compare[1])) return "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={order} roleFor={roleFor} showIndex={false} />

      {note && !sorted && <div className="text-sm text-muted-foreground">winner concatenation: <b className="font-mono text-foreground">{note}</b></div>}

      {answer !== null && (
        <div className="rounded-md border-2 border-role-sorted bg-role-sorted/10 px-4 py-2 font-mono text-lg font-semibold">{answer}</div>
      )}

      <Legend items={[{ role: "compared", label: "Comparing" }, { role: "sorted", label: "Final order" }]} />
    </div>
  );
}
