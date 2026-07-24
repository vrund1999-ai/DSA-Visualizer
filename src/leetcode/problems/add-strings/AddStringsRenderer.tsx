import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { AddStringsData } from "./algorithm";

export function AddStringsRenderer({ step }: RendererProps<AddStringsData>) {
  const { a, b, i, j, carry, result, done } = step.data;

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Carry</span>
        <span className="flex size-8 items-center justify-center rounded-md border border-role-pivot bg-role-pivot/15 font-semibold tabular-nums">{carry}</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">num1</span>
        <ArrayCells values={a} roleFor={(idx) => (idx === i && !done ? "current" : "default")} showIndex={false} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">num2</span>
        <ArrayCells values={b} roleFor={(idx) => (idx === j && !done ? "current" : "default")} showIndex={false} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">sum</span>
        <ArrayCells values={result} roleFor={() => "target"} showIndex={false} />
      </div>

      <Legend items={[{ role: "current", label: "Current digit" }, { role: "target", label: "Sum" }]} />
    </div>
  );
}
