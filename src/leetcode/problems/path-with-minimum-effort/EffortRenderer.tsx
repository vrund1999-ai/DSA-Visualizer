import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { EffortData } from "./algorithm";

export function EffortRenderer({ step }: RendererProps<EffortData>) {
  const { grid, eff, settled, cur, relaxed, answer } = step.data;
  const R = grid.length;
  const C = grid[0].length;

  const cls = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return "bg-role-current text-white border-role-current";
    if (relaxed && relaxed[0] === r && relaxed[1] === c) return "bg-role-compared text-white border-role-compared";
    if (r === R - 1 && c === C - 1) return "bg-role-target/30 border-role-target";
    if (settled[r][c]) return "bg-role-visited/25 border-role-visited";
    if (eff[r][c] !== Infinity) return "bg-role-active/15 border-role-active/40";
    return "bg-muted/40 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${C}, 3rem)` }}>
        {Array.from({ length: R }).flatMap((_, r) =>
          Array.from({ length: C }).map((__, c) => (
            <div key={`${r}-${c}`} className={`flex h-12 w-12 flex-col items-center justify-center rounded border text-sm font-semibold ${cls(r, c)}`}>
              <span>{grid[r][c]}</span>
              <span className="text-[9px] opacity-75">{eff[r][c] === Infinity ? "∞" : eff[r][c]}</span>
            </div>
          )),
        )}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">minimum effort = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "current", label: "Settling" }, { role: "compared", label: "Relaxing" }, { role: "visited", label: "Settled" }, { role: "target", label: "Goal" }]} />
    </div>
  );
}
