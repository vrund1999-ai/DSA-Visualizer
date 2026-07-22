import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { DuplicateData } from "./algorithm";

export function DuplicateRenderer({ step }: RendererProps<DuplicateData>) {
  const { nums, slow, fast, phase, answer } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">
          {phase === "meet" ? "Phase 1: find a meeting point" : phase === "find" ? "Phase 2: find the cycle entrance" : "Duplicate found"}
        </span>
        {answer !== null && <span className="font-semibold text-role-target">= {answer}</span>}
      </div>

      <ArrayCells
        values={nums}
        roleFor={(idx) => roleFor(idx)}
        topLabel={(idx) => (idx === slow && idx === fast ? "s/f" : idx === slow ? "s" : idx === fast ? "f" : "")}
      />
      <p className="text-center text-xs text-muted-foreground">
        Index labels below cells; each value points to the next index.
      </p>

      <Legend
        items={[
          { role: "current", label: "slow (tortoise)" },
          { role: "active", label: "fast (hare)" },
          { role: "compared", label: "Meeting point" },
          { role: "target", label: "Duplicate" },
        ]}
      />
    </div>
  );
}
