import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MaxSwapData } from "./algorithm";

export function MaxSwapRenderer({ step }: RendererProps<MaxSwapData>) {
  const { digits, i, swapWith, swapped, answer } = step.data;

  const roleFor = (k: number) => {
    if (swapped && (k === i || k === swapWith)) return "sorted";
    if (k === i) return "current";
    if (k === swapWith) return "swapped";
    return "default";
  };

  const topLabel = (k: number) => {
    if (k === i) return "i";
    if (k === swapWith) return "big";
    return "";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={digits} roleFor={roleFor} topLabel={topLabel} showIndex={false} />

      {answer !== null && <div className="text-base font-semibold text-role-sorted">result = {answer}</div>}

      <Legend items={[{ role: "current", label: "Current digit" }, { role: "swapped", label: "Larger digit later" }, { role: "sorted", label: "Swapped" }]} />
    </div>
  );
}
