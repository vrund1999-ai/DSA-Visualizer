import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { DailyTempData } from "./algorithm";

export function DailyTempRenderer({ step }: RendererProps<DailyTempData>) {
  const { temps, res, i, stack } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Temperatures</span>
        <ArrayCells values={temps} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Answer (days to wait)</span>
        <ArrayCells values={res} roleFor={() => "default"} showIndex={false} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Stack (indices, warmest waiting last)</span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-2 font-mono text-sm">
          {stack.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : stack.map((j) => (
            <span key={j} className="rounded border border-role-active bg-role-active/15 px-2 py-0.5">{j}<span className="text-[10px] text-muted-foreground"> ({temps[j]}°)</span></span>
          ))}
        </div>
      </div>

      <Legend
        items={[
          { role: "current", label: "Today" },
          { role: "active", label: "On stack" },
          { role: "sorted", label: "Resolved" },
        ]}
      />
    </div>
  );
}
