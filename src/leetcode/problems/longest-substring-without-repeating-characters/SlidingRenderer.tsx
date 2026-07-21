import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { SlidingData } from "./algorithm";

export function SlidingRenderer({ step }: RendererProps<SlidingData>) {
  const { chars, left, right, best, bestRange } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Longest so far</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-semibold tabular-nums text-role-target">
          {best}
        </span>
        {bestRange && (
          <span className="ml-2 font-mono text-muted-foreground">
            "{chars.slice(bestRange.start, bestRange.end + 1).join("")}"
          </span>
        )}
      </div>

      <ArrayCells
        values={chars}
        roleFor={(idx) => roleFor(idx)}
        topLabel={(idx) => (idx === left && idx === right ? "L/R" : idx === left ? "L" : idx === right ? "R" : "")}
      />

      <Legend
        items={[
          { role: "active", label: "Window" },
          { role: "current", label: "Right edge" },
          { role: "swapped", label: "Dropped" },
          { role: "target", label: "Best window" },
        ]}
      />
    </div>
  );
}
