import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { TrapData } from "./algorithm";

export function TrapRainRenderer({ step }: RendererProps<TrapData>) {
  const { grid, seen, fill, popped, filled, water, answer } = step.data;
  const rows = grid.length;
  const cols = grid[0]?.length ?? 0;

  const cellClass = (r: number, c: number) => {
    if (popped && popped[0] === r && popped[1] === c) return "bg-role-current text-white border-role-current";
    if (filled && filled[0] === r && filled[1] === c) return fill[r][c] > 0 ? "bg-role-path text-white border-role-path" : "bg-role-sorted text-white border-role-sorted";
    if (fill[r][c] > 0) return "bg-role-path/40 border-role-path";
    if (seen[r][c]) return "bg-role-visited/20 border-role-visited";
    return "bg-muted border-border";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div
        className="grid gap-1"
        style={{ gridTemplateColumns: `repeat(${cols}, 2.5rem)` }}
      >
        {Array.from({ length: rows }).flatMap((_, r) =>
          Array.from({ length: cols }).map((__, c) => (
            <div
              key={`${r}-${c}`}
              className={`flex h-10 w-10 flex-col items-center justify-center rounded border text-xs font-semibold ${cellClass(r, c)}`}
            >
              <span>{grid[r][c]}</span>
              {fill[r][c] > 0 && <span className="text-[9px] opacity-80">+{fill[r][c]}</span>}
            </div>
          )),
        )}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">trapped water = <b className="tabular-nums">{answer ?? water}</b></div>

      <Legend
        items={[
          { role: "current", label: "Popped wall" },
          { role: "path", label: "Traps water" },
          { role: "sorted", label: "New wall" },
          { role: "visited", label: "Boundary" },
        ]}
      />
    </div>
  );
}
