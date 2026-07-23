import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { SearchRangeData } from "./algorithm";

export function SearchRangeRenderer({ step }: RendererProps<SearchRangeData>) {
  const { nums, target, lo, hi, mid, phase, first, last } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Target</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2.5 py-1 font-semibold tabular-nums text-primary">{target}</span>
        <span className="ml-3 text-muted-foreground">
          {phase === "done" ? `range [${first}, ${last}]` : `finding ${phase} · [${lo}, ${hi}]`}
        </span>
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === mid ? "mid" : "")} />

      <Legend
        items={[
          { role: "target", label: "Match / range" },
          { role: "swapped", label: "Middle (discarded)" },
          { role: "visited", label: "Out of range" },
        ]}
      />
    </div>
  );
}
