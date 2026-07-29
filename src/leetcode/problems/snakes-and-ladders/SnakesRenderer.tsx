import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { SnakesData } from "./algorithm";

export function SnakesRenderer({ step }: RendererProps<SnakesData>) {
  const { board, n, dist, frontier, reached, moves, answer } = step.data;

  // square number for board[r][c] (boustrophedon)
  const squareAt = (r: number, c: number) => {
    const row = n - 1 - r;
    const col = row % 2 === 0 ? c : n - 1 - c;
    return row * n + col + 1;
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">target = {n * n}</span>
        <span className="rounded-md border px-3 py-1">moves = <b className="tabular-nums">{answer === -1 ? "—" : answer ?? moves}</b></span>
      </div>

      <div className="grid gap-0.5" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
        {board.map((row, r) =>
          row.map((v, c) => {
            const sq = squareAt(r, c);
            const visited = dist[sq] !== -1;
            const inFrontier = frontier.includes(sq);
            const isReached = sq === reached;
            const isTarget = sq === n * n;
            return (
              <div key={`${r}-${c}`} className={`flex size-9 flex-col items-center justify-center rounded border text-[8px] ${isReached ? "border-role-sorted bg-role-sorted text-white" : inFrontier ? "border-role-current bg-role-current/20" : visited ? "border-role-visited/40 bg-role-visited/10" : isTarget ? "border-foreground" : "border-border bg-muted/20"}`}>
                <span className="font-semibold tabular-nums">{sq}</span>
                {v !== -1 && <span className="text-role-compared">→{v}</span>}
              </div>
            );
          }),
        )}
      </div>

      {answer === -1 && <div className="rounded-md bg-role-compared px-3 py-1 text-sm font-semibold text-white">unreachable</div>}

      <Legend items={[{ role: "current", label: "BFS frontier" }, { role: "visited", label: "Visited" }, { role: "compared", label: "Snake/ladder →" }]} />
    </div>
  );
}
