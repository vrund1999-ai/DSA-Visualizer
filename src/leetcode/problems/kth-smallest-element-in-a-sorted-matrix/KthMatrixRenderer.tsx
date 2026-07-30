import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { KthMatrixData } from "./algorithm";

export function KthMatrixRenderer({ step }: RendererProps<KthMatrixData>) {
  const { matrix, k, lo, hi, mid, count, answer } = step.data;
  const n = matrix.length;

  const cls = (v: number) => {
    if (answer !== null && v === answer) return "bg-role-sorted text-white border-role-sorted";
    if (mid !== null && v <= mid) return "bg-role-active/40 border-role-active";
    return "bg-muted/40 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${n}, 3rem)` }}>
        {matrix.flatMap((row, r) =>
          row.map((v, c) => (
            <div key={`${r}-${c}`} className={`flex h-12 w-12 items-center justify-center rounded border text-sm font-semibold tabular-nums ${cls(v)}`}>{v}</div>
          )),
        )}
      </div>

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">value range [{lo}, {hi}]</span>
        {mid !== null && <span className="rounded-md border border-role-current px-3 py-1">mid {mid} · {count} ≤ mid</span>}
        <span className="rounded-md border px-3 py-1">k={k} → <b className="tabular-nums">{answer ?? "…"}</b></span>
      </div>

      <Legend items={[{ role: "active", label: "≤ mid" }, { role: "sorted", label: "kth smallest" }]} />
    </div>
  );
}
