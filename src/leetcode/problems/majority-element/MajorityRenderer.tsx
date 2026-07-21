import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { MajorityData } from "./algorithm";

export function MajorityRenderer({ step }: RendererProps<MajorityData>) {
  const { nums, i, candidate, count } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">Candidate</span>
        <span className="flex size-9 items-center justify-center rounded-md border border-role-pivot bg-role-pivot/15 font-semibold tabular-nums">
          {candidate ?? "—"}
        </span>
        <span className="ml-3 text-muted-foreground">Votes</span>
        <span className="rounded-md border px-2.5 py-1 font-semibold tabular-nums">{count}</span>
      </div>

      <ArrayCells
        values={nums}
        roleFor={(idx) => roleFor(idx)}
        topLabel={(idx) => (idx === i ? "i" : "")}
      />

      <Legend
        items={[
          { role: "pivot", label: "New candidate" },
          { role: "sorted", label: "Vote +1" },
          { role: "swapped", label: "Vote −1" },
          { role: "target", label: "Majority" },
        ]}
      />
    </div>
  );
}
