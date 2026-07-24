import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { HIndexData } from "./algorithm";

export function HIndexRenderer({ step }: RendererProps<HIndexData>) {
  const { citations, answer } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">h-index</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-semibold tabular-nums text-role-target">{answer ?? "—"}</span>
      </div>

      <ArrayCells values={citations} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => `#${idx + 1}`} showIndex={false} />
      <p className="text-center text-xs text-muted-foreground">Citations sorted descending. h papers each have ≥ h citations.</p>

      <Legend
        items={[
          { role: "sorted", label: "Qualifies (≥ rank)" },
          { role: "current", label: "Extending h" },
          { role: "swapped", label: "Cutoff" },
          { role: "target", label: "Counted (h)" },
        ]}
      />
    </div>
  );
}
