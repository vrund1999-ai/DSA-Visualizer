import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { RotateArrayData } from "./algorithm";

const LABEL: Record<string, string> = {
  start: "Setting up…",
  whole: "Reversing the whole array",
  "first-k": "Reversing the first k",
  rest: "Reversing the rest",
  done: "Rotated",
};

export function RotateArrayRenderer({ step }: RendererProps<RotateArrayData>) {
  const { nums, phase } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-6">
      <p className="text-center text-sm text-muted-foreground">{LABEL[phase] ?? phase}</p>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} />

      <Legend
        items={[
          { role: "active", label: "Swapping" },
          { role: "sorted", label: "Result" },
        ]}
      />
    </div>
  );
}
