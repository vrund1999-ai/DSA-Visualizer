import type { RendererProps } from "@/core/types";
import { ArrayCells } from "@/leetcode/shared/viz";
import type { MovingAvgData } from "./algorithm";

export function MovingAvgRenderer({ step }: RendererProps<MovingAvgData>) {
  const { size, values, opIndex, window, evicted, sum, average } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-1.5">
        {values.map((v, i) => (
          <span
            key={i}
            className={`rounded border px-2 py-1 text-sm tabular-nums ${
              i === opIndex ? "border-role-current bg-role-current text-white" : "border-border text-muted-foreground"
            }`}
          >
            {v}
          </span>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">window (size {size})</span>
        {window.length > 0 ? (
          <ArrayCells values={window} roleFor={() => "active"} showIndex={false} cellWidth="w-10" />
        ) : (
          <span className="text-sm text-muted-foreground">(empty)</span>
        )}
        {evicted !== null && <span className="text-xs text-role-swapped">evicted {evicted}</span>}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm tabular-nums">
        sum {sum} / {window.length} = <b>{average !== null ? average.toFixed(5) : "…"}</b>
      </div>
    </div>
  );
}
