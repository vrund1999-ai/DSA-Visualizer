import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { MutatedData } from "./algorithm";

export function MutatedRenderer({ step }: RendererProps<MutatedData>) {
  const { arr, target, lo, hi, t, capSum, answer } = step.data;
  const maxH = Math.max(...arr, t ?? 1, 1);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="relative flex items-end gap-2" style={{ height: "160px" }}>
        {t !== null && (
          <div className="absolute inset-x-0 border-t-2 border-dashed border-role-current" style={{ bottom: `${(t / maxH) * 130 + 20}px` }}>
            <span className="absolute -top-4 right-0 text-[10px] text-role-current">cap {t}</span>
          </div>
        )}
        {arr.map((x, i) => {
          const capped = t !== null ? Math.min(x, t) : x;
          return (
            <div key={i} className="flex flex-col items-center justify-end gap-1">
              <div className="flex w-8 flex-col justify-end" style={{ height: "130px" }}>
                {t !== null && x > t && <div className="w-8 rounded-t bg-muted" style={{ height: `${((x - capped) / maxH) * 130}px` }} />}
                <div className="w-8 rounded-t bg-role-active/60" style={{ height: `${(capped / maxH) * 130}px` }} />
              </div>
              <span className="text-[10px] tabular-nums text-muted-foreground">{x}</span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">range [{lo}, {hi}]</span>
        {capSum !== null && <span className="rounded-md border px-3 py-1">sum {capSum} vs target {target}</span>}
        <span className="rounded-md border px-3 py-1">best cap = <b className="tabular-nums">{answer ?? "…"}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Cap line" }, { role: "active", label: "Capped value" }]} />
    </div>
  );
}
