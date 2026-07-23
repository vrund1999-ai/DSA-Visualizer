import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { GasData } from "./algorithm";

export function GasRenderer({ step }: RendererProps<GasData>) {
  const { net, i, start, tank, total, answer } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">tank</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold tabular-nums">{tank}</span>
        <span className="text-muted-foreground">total net</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold tabular-nums">{total}</span>
        <span className="text-muted-foreground">candidate start</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2 py-0.5 font-semibold tabular-nums text-role-target">{answer !== null && answer < 0 ? "none" : start}</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Net gas per station (gas − cost)</span>
        <ArrayCells values={net} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : idx === start ? "start" : "")} />
      </div>

      <Legend
        items={[
          { role: "current", label: "Visiting" },
          { role: "swapped", label: "Tank went negative" },
          { role: "target", label: "Answer start" },
        ]}
      />
    </div>
  );
}
