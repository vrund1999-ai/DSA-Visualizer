import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { KnightMovesData } from "./algorithm";

export function KnightMovesRenderer({ step }: RendererProps<KnightMovesData>) {
  const { x, y, minR, maxR, minC, maxC, dist, frontier, moves, answer } = step.data;
  const rows = maxR - minR + 1;
  const cols = maxC - minC + 1;
  const frontierSet = new Set(frontier.map(([r, c]) => `${r},${c}`));

  const cls = (r: number, c: number) => {
    const key = `${r},${c}`;
    if (r === y && c === x) return "bg-role-target text-white border-role-target";
    if (r === 0 && c === 0) return "bg-role-pivot text-white border-role-pivot";
    if (frontierSet.has(key)) return "bg-role-current text-white border-role-current";
    if (key in dist) return "bg-role-visited/25 border-role-visited";
    return "bg-muted/30 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-0.5" style={{ gridTemplateColumns: `repeat(${cols}, 1.75rem)` }}>
        {Array.from({ length: rows }).flatMap((_, ri) => {
          const r = maxR - ri; // top row is highest y
          return Array.from({ length: cols }).map((__, ci) => {
            const c = minC + ci;
            const key = `${r},${c}`;
            return (
              <div key={key} className={`flex h-7 w-7 items-center justify-center rounded border text-[10px] font-semibold tabular-nums ${cls(r, c)}`}>
                {key in dist ? dist[key] : ""}
              </div>
            );
          });
        })}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">ring {moves} · min moves = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "pivot", label: "Origin" }, { role: "target", label: "Target" }, { role: "current", label: "Frontier" }, { role: "visited", label: "Visited" }]} />
    </div>
  );
}
