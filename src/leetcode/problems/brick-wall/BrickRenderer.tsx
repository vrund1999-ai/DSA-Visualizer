import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { BrickData } from "./algorithm";

export function BrickRenderer({ step }: RendererProps<BrickData>) {
  const { wall, rowIdx, gapX, best, bestX, answer } = step.data;
  const width = wall[0].reduce((a, b) => a + b, 0);
  const rowH = 26;
  const scale = 300 / width;
  const showLine = answer !== null ? bestX : gapX;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <svg width={300 + 2} height={wall.length * rowH + 2} viewBox={`0 0 ${300 + 2} ${wall.length * rowH + 2}`}>
        {wall.map((row, r) => {
          let x = 0;
          return (
            <g key={r} opacity={rowIdx === null || rowIdx === r || answer !== null ? 1 : 0.55}>
              {row.map((w, i) => {
                const rx = x * scale;
                x += w;
                return (
                  <rect key={i} x={rx + 1} y={r * rowH + 1} width={w * scale - 2} height={rowH - 2} rx={2} className={rowIdx === r ? "fill-role-active/50 stroke-border" : "fill-muted stroke-border"} />
                );
              })}
            </g>
          );
        })}
        {showLine !== null && showLine !== undefined && (
          <line x1={showLine * scale + 1} y1={0} x2={showLine * scale + 1} y2={wall.length * rowH} className={answer !== null ? "stroke-role-sorted" : "stroke-role-current"} strokeWidth={3} />
        )}
      </svg>

      <div className="rounded-md border px-3 py-1 text-sm">
        best gap shared by <b className="tabular-nums">{best}</b> row(s) · bricks crossed = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>

      <Legend items={[{ role: "active", label: "Current row" }, { role: "current", label: "Gap being counted" }, { role: "sorted", label: "Best line" }]} />
    </div>
  );
}
