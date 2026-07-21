import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { DedupData } from "./algorithm";

export function DedupRenderer({ step }: RendererProps<DedupData>) {
  const { nums, slow, fast, length } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Unique count</span>
        <span className="rounded-md border border-role-sorted bg-role-sorted/10 px-2.5 py-1 font-semibold tabular-nums text-role-sorted">
          {length}
        </span>
      </div>

      <ArrayCells
        values={nums}
        roleFor={(idx) => roleFor(idx)}
        topLabel={(idx) => (idx === slow ? "s" : idx === fast ? "f" : "")}
      />

      <Legend
        items={[
          { role: "sorted", label: "Unique prefix" },
          { role: "current", label: "Fast (new value)" },
          { role: "visited", label: "Duplicate (skipped)" },
        ]}
      />
    </div>
  );
}
