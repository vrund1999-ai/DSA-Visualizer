import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MaxFreqData } from "./algorithm";

export function MaxFreqRenderer({ step }: RendererProps<MaxFreqData>) {
  const { nums, scan, freq, maxFreq, total } = step.data;
  const maxCount = Math.max(1, ...freq.map((f) => f.count));

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <ArrayCells values={nums} roleFor={(i) => (i === scan ? "current" : "default")} showIndex={false} cellWidth="w-9" />

      <div className="flex items-end justify-center gap-3">
        {freq.map((f) => {
          const isMax = maxFreq !== null && f.count === maxFreq;
          return (
            <div key={f.value} className="flex flex-col items-center gap-1">
              <div
                className={`flex w-9 items-end justify-center rounded-t ${isMax ? "bg-role-sorted" : "bg-role-active/40"}`}
                style={{ height: `${20 + (f.count / maxCount) * 90}px` }}
              >
                <span className="pb-1 text-xs font-semibold text-foreground">{f.count}</span>
              </div>
              <span className="text-xs tabular-nums text-muted-foreground">{f.value}</span>
            </div>
          );
        })}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        elements at max frequency = <b className="tabular-nums">{total ?? "…"}</b>
      </div>

      <Legend items={[{ role: "sorted", label: "max-frequency value" }, { role: "current", label: "scanning" }]} />
    </div>
  );
}
