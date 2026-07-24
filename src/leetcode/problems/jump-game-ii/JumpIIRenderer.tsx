import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { JumpIIData } from "./algorithm";

export function JumpIIRenderer({ step }: RendererProps<JumpIIData>) {
  const { nums, i, curEnd, farthest, jumps } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">jumps</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2 py-0.5 font-semibold tabular-nums text-role-target">{jumps}</span>
        <span className="text-muted-foreground">boundary</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold tabular-nums">{Math.min(curEnd, nums.length - 1)}</span>
        <span className="text-muted-foreground">farthest</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold tabular-nums">{Math.min(farthest, nums.length - 1)}</span>
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} />

      <Legend
        items={[
          { role: "active", label: "Reachable" },
          { role: "current", label: "Position i" },
          { role: "swapped", label: "Jump taken" },
          { role: "target", label: "New boundary" },
        ]}
      />
    </div>
  );
}
