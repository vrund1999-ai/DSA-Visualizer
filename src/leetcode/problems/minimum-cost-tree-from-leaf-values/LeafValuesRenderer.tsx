import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { LeafValuesData } from "./algorithm";

export function LeafValuesRenderer({ step }: RendererProps<LeafValuesData>) {
  const { arr, scan, stack, cost, product, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <ArrayCells values={arr} roleFor={(i) => (i === scan ? "current" : "default")} showIndex={false} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">monotonic stack (decreasing)</span>
        <div className="flex gap-1.5">
          {stack.map((v, i) => (
            <span
              key={i}
              className="flex h-9 min-w-9 items-center justify-center rounded-md border border-role-pivot bg-role-pivot/20 px-2 text-sm tabular-nums"
            >
              {v === Infinity ? "∞" : v}
            </span>
          ))}
        </div>
      </div>

      {product && (
        <div className="rounded-md border border-role-swapped bg-role-swapped/10 px-3 py-1 text-sm tabular-nums">
          {product.a} × {product.b} = {product.a * product.b}
        </div>
      )}

      <div className="rounded-md border px-3 py-1 text-sm">
        cost = <b className="tabular-nums">{answer ?? cost}</b>
      </div>

      <Legend items={[{ role: "current", label: "current leaf" }, { role: "pivot", label: "stack" }]} />
    </div>
  );
}
