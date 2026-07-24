import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { NextGreaterIIIData } from "./algorithm";

export function NextGreaterIIIRenderer({ step }: RendererProps<NextGreaterIIIData>) {
  const { digits, pivot, swapWith, reverseRange, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === pivot) return "current";
    if (i === swapWith) return "swapped";
    if (reverseRange && i >= reverseRange[0] && i <= reverseRange[1]) return "active";
    return "default";
  };

  const topLabel = (i: number) => {
    if (i === pivot) return "pivot";
    if (i === swapWith) return "swap";
    return "";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={digits} roleFor={roleFor} topLabel={topLabel} showIndex={false} />

      {answer !== null && (
        <div className={`text-base font-semibold ${answer === -1 ? "text-muted-foreground" : "text-role-current"}`}>
          {answer === -1 ? "no next greater (-1)" : `answer = ${answer}`}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Pivot" }, { role: "swapped", label: "Swap target" }, { role: "active", label: "Reversed suffix" }]} />
    </div>
  );
}
