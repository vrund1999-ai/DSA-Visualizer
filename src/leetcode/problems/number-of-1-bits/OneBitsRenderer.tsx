import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { OneBitsData } from "./algorithm";

export function OneBitsRenderer({ step }: RendererProps<OneBitsData>) {
  const { bits, width, value, count, clearedBit } = step.data;

  return (
    <div className="flex h-full flex-col gap-6">
      <div className="flex items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">value <span className="font-mono text-foreground">{value}</span></span>
        <span className="text-muted-foreground">set bits</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-semibold tabular-nums text-role-target">{count}</span>
      </div>

      <div className="flex items-center justify-center gap-1">
        {bits.map((b, idx) => {
          const bitPos = width - 1 - idx;
          return (
            <div key={idx} className={`flex size-9 items-center justify-center rounded-md border-2 font-mono text-sm transition-colors ${bitPos === clearedBit ? "border-role-swapped bg-role-swapped/20" : b ? "border-role-current bg-role-current/15" : "border-border bg-muted/20 text-muted-foreground"}`}>{b}</div>
          );
        })}
      </div>

      <Legend
        items={[
          { role: "current", label: "Set bit" },
          { role: "swapped", label: "Just cleared" },
        ]}
      />
    </div>
  );
}
