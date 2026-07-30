import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { BeautyData } from "./algorithm";

export function BeautyRenderer({ step }: RendererProps<BeautyData>) {
  const { s, i, j, freq, beauty, total, answer } = step.data;
  const chars = s.split("");
  const maxCount = Math.max(1, ...freq.map((f) => f.count));

  const roleFor = (idx: number) => {
    if (i !== null && j !== null && idx >= i && idx <= j) return "current";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <ArrayCells values={chars} roleFor={roleFor} showIndex cellWidth="w-9" />

      <div className="flex min-h-[3rem] items-end justify-center gap-2">
        {freq.map((f) => (
          <div key={f.ch} className="flex flex-col items-center gap-1">
            <div
              className="flex w-8 items-end justify-center rounded-t bg-role-active/40"
              style={{ height: `${16 + (f.count / maxCount) * 60}px` }}
            >
              <span className="pb-0.5 text-xs font-semibold">{f.count}</span>
            </div>
            <span className="font-mono text-xs text-muted-foreground">{f.ch}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-4 text-sm tabular-nums">
        {beauty !== null && <span>beauty = {beauty}</span>}
        <span>
          total = <b>{answer ?? total}</b>
        </span>
      </div>

      <Legend items={[{ role: "current", label: "current substring" }]} />
    </div>
  );
}
