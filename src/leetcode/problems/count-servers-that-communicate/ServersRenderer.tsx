import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ServersData } from "./algorithm";

export function ServersRenderer({ step }: RendererProps<ServersData>) {
  const { grid, rows, cols, cur, communicates, count, answer } = step.data;
  const n = grid[0].length;

  const cellClass = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return communicates ? "bg-role-sorted text-white border-role-sorted" : "bg-role-compared text-white border-role-compared";
    if (!grid[r][c]) return "bg-muted/10 border-border/40 text-muted-foreground/40";
    if (rows[r] > 1 || cols[c] > 1) return "bg-role-active/20 border-role-active";
    return "bg-muted/40 border-border";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="inline-grid gap-0.5" style={{ gridTemplateColumns: `repeat(${n}, 2rem) 1.6rem` }}>
        {grid.map((row, r) => (
          <div key={r} className="contents">
            {row.map((v, c) => (
              <div key={c} className={`flex size-8 items-center justify-center rounded border-2 text-xs ${cellClass(r, c)}`}>{v ? "🖥" : "·"}</div>
            ))}
            <div className="flex items-center justify-center text-[10px] text-muted-foreground">{rows[r]}</div>
          </div>
        ))}
        {cols.map((cc, c) => <div key={c} className="flex items-center justify-center text-[10px] text-muted-foreground">{cc}</div>)}
        <div />
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">communicating servers = <b className="tabular-nums">{answer ?? count}</b></div>

      <Legend items={[{ role: "sorted", label: "Communicates" }, { role: "compared", label: "Isolated" }, { role: "active", label: "Server (row/col count shown)" }]} />
    </div>
  );
}
