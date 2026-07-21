import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { JumpData } from "./algorithm";

export function JumpRenderer({ step }: RendererProps<JumpData>) {
  const { nums, i, reach, result } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Furthest reach</span>
        <span className="rounded-md border border-role-active bg-role-active/10 px-2.5 py-1 font-semibold tabular-nums">
          index {Math.min(reach, nums.length - 1)}
        </span>
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} />

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-sorted" : "text-role-swapped"}`}>
          {result ? "Can reach the end ✓" : "Stuck — cannot reach the end ✗"}
        </p>
      )}

      <Legend
        items={[
          { role: "active", label: "Reachable" },
          { role: "current", label: "Current index" },
          { role: "swapped", label: "Beyond reach" },
        ]}
      />
    </div>
  );
}
