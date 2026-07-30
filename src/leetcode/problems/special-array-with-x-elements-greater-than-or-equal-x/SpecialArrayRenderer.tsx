import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { SpecialArrayData } from "./algorithm";

export function SpecialArrayRenderer({ step }: RendererProps<SpecialArrayData>) {
  const { sorted, x, count, answer } = step.data;

  const roleFor = (idx: number) => {
    if (x !== null && sorted[idx] >= x) return answer !== null ? "sorted" : "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">values (sorted desc){x !== null ? ` · threshold x = ${x}` : ""}</span>
        <ArrayCells values={sorted} roleFor={roleFor} />
      </div>

      <div className="flex items-center gap-3 text-sm">
        {x !== null && <span className="rounded-md border px-3 py-1">x = {x}, count ≥ x = {count}</span>}
        <span className="rounded-md border px-3 py-1">special x = <b className="tabular-nums">{answer ?? "…"}</b></span>
      </div>

      <Legend items={[{ role: "active", label: "≥ current x" }, { role: "sorted", label: "≥ special x" }]} />
    </div>
  );
}
