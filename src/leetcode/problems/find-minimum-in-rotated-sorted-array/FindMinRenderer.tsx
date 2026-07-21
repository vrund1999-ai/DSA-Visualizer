import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { FindMinData } from "./algorithm";

export function FindMinRenderer({ step }: RendererProps<FindMinData>) {
  const { nums, lo, hi, mid, answer } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">
          {answer !== null ? `minimum = ${answer}` : `range [${lo}, ${hi}]`}
        </span>
      </div>

      <ArrayCells
        values={nums}
        roleFor={(idx) => roleFor(idx)}
        topLabel={(idx) => (idx === mid ? "mid" : idx === lo ? "lo" : idx === hi ? "hi" : "")}
      />

      <Legend
        items={[
          { role: "current", label: "Middle" },
          { role: "compared", label: "Right end" },
          { role: "visited", label: "Out of range" },
          { role: "target", label: "Minimum" },
        ]}
      />
    </div>
  );
}
