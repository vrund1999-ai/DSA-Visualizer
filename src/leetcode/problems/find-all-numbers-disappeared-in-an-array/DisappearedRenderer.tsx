import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { DisappearedData } from "./algorithm";

export function DisappearedRenderer({ step }: RendererProps<DisappearedData>) {
  const { nums, phase, result } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <p className="text-center text-sm text-muted-foreground">
        {phase === "mark" ? "Marking present numbers (negating in-place)…" : phase === "collect" ? "Collecting still-positive slots…" : "Done"}
      </p>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Missing numbers</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1 rounded-lg border bg-card/40 p-2 font-mono text-sm">
          {result.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : result.join(", ")}
        </div>
      </div>

      <Legend
        items={[
          { role: "current", label: "Current value" },
          { role: "swapped", label: "Marked present" },
          { role: "target", label: "Missing" },
        ]}
      />
    </div>
  );
}
