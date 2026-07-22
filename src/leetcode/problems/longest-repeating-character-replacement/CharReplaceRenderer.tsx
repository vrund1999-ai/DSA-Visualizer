import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { CharReplaceData } from "./algorithm";

export function CharReplaceRenderer({ step }: RendererProps<CharReplaceData>) {
  const { chars, k, left, right, maxFreq, best } = step.data;
  const roleFor = roleLookup(step.highlights);
  const windowSize = right === null ? 0 : right - left + 1;

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">k</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2 py-0.5 font-semibold tabular-nums text-primary">{k}</span>
        <span className="text-muted-foreground">replacements needed</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold tabular-nums">{Math.max(0, windowSize - maxFreq)}</span>
        <span className="text-muted-foreground">best</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2 py-0.5 font-semibold tabular-nums text-role-target">{best}</span>
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
          { role: "target", label: "Valid window" },
        ]}
      />
    </div>
  );
}
