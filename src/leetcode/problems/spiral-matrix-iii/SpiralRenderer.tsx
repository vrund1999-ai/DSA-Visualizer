import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { SpiralData } from "./algorithm";

export function SpiralRenderer({ step }: RendererProps<SpiralData>) {
  const { rows, cols, order, cur, outside, count, answer } = step.data;
  const insideCur = cur && !outside;

  const cls = (r: number, c: number) => {
    if (insideCur && cur![0] === r && cur![1] === c) return "bg-role-current text-white border-role-current";
    if (order[r][c] >= 0) return "bg-role-visited/25 border-role-visited text-foreground";
    return "bg-muted/40 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${cols}, 2.75rem)` }}>
        {Array.from({ length: rows }).flatMap((_, r) =>
          Array.from({ length: cols }).map((__, c) => (
            <div key={`${r}-${c}`} className={`flex h-11 w-11 items-center justify-center rounded border text-sm font-semibold tabular-nums ${cls(r, c)}`}>
              {order[r][c] >= 0 ? order[r][c] + 1 : ""}
            </div>
          )),
        )}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        recorded <b className="tabular-nums">{count}</b> / {rows * cols}
        {outside && <span className="ml-2 text-role-target">walker outside grid</span>}
        {answer && <span className="ml-2 text-role-sorted">complete</span>}
      </div>

      <Legend items={[{ role: "current", label: "Current cell" }, { role: "visited", label: "Recorded (visit #)" }]} />
    </div>
  );
}
