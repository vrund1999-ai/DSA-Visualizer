import type { RendererProps } from "@/core/types";
import { Legend, ROLE_CLASS } from "@/leetcode/shared/viz";
import type { CycleData } from "./algorithm";

export function CycleRenderer({ step }: RendererProps<CycleData>) {
  const { values, pos, slow, fast, result } = step.data;

  const role = (i: number) => {
    if (i === slow && i === fast) return "swapped";
    if (i === slow) return "current";
    if (i === fast) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-start justify-center gap-1 overflow-x-auto">
        {values.map((v, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="h-4 text-[10px] font-semibold uppercase text-role-current">
              {i === slow && i === fast ? "S/F" : i === slow ? "S" : i === fast ? "F" : ""}
            </span>
            <div className={`flex size-10 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums transition-colors ${ROLE_CLASS[role(i)] ?? ROLE_CLASS.default}`}>{v}</div>
            <span className="text-[10px] text-muted-foreground">{i}</span>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-muted-foreground">
        {pos >= 0 ? `Tail's next points back to node ${pos} (cycle).` : "Tail's next is null (no cycle)."}
      </p>

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-swapped" : "text-role-sorted"}`}>{result ? "Cycle detected ✓" : "No cycle ✗"}</p>
      )}

      <Legend
        items={[
          { role: "current", label: "slow (tortoise)" },
          { role: "active", label: "fast (hare)" },
          { role: "swapped", label: "Meeting point" },
        ]}
      />
    </div>
  );
}
