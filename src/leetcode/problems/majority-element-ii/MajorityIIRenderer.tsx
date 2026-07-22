import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { MajorityIIData } from "./algorithm";

export function MajorityIIRenderer({ step }: RendererProps<MajorityIIData>) {
  const { nums, i, c1, n1, c2, n2, result } = step.data;
  const roleFor = roleLookup(step.highlights);

  const cand = (c: number | null, n: number, label: string) => (
    <div className="flex items-center gap-1.5">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="flex size-8 items-center justify-center rounded-md border border-role-pivot bg-role-pivot/15 font-mono text-sm tabular-nums">{c ?? "—"}</span>
      <span className="text-xs text-muted-foreground">×{n}</span>
    </div>
  );

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-6">
        {cand(c1, n1, "cand 1")}
        {cand(c2, n2, "cand 2")}
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} />

      {result && (
        <p className="text-center text-sm font-semibold text-role-target">Majority (&gt; n/3): [{result.join(", ")}]</p>
      )}

      <Legend
        items={[
          { role: "current", label: "Current" },
          { role: "target", label: "Majority element" },
        ]}
      />
    </div>
  );
}
