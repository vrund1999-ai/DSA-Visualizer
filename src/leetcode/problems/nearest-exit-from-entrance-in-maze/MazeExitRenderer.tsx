import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { MazeExitData } from "./algorithm";

export function MazeExitRenderer({ step }: RendererProps<MazeExitData>) {
  const { maze, entrance, visited, frontier, exit, answer } = step.data;
  const R = maze.length;
  const C = maze[0].length;
  const visitedSet = new Set(visited);
  const frontierSet = new Set(frontier);

  const cls = (r: number, c: number) => {
    if (r === entrance[0] && c === entrance[1]) return "bg-role-pivot text-white border-role-pivot";
    if (exit && exit[0] === r && exit[1] === c) return "bg-role-sorted text-white border-role-sorted";
    if (frontierSet.has(`${r},${c}`)) return "bg-role-current text-white border-role-current";
    if (maze[r][c] === "+") return "bg-foreground border-foreground";
    if (visitedSet.has(`${r},${c}`)) return "bg-role-visited/30 border-role-visited";
    return "bg-muted/30 border-border";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${C}, 2.5rem)` }}>
        {Array.from({ length: R }).flatMap((_, r) =>
          Array.from({ length: C }).map((__, c) => (
            <div key={`${r}-${c}`} className={`flex h-10 w-10 items-center justify-center rounded border text-xs font-bold ${cls(r, c)}`}>
              {r === entrance[0] && c === entrance[1] ? "S" : exit && exit[0] === r && exit[1] === c ? "🚪" : ""}
            </div>
          )),
        )}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">steps to nearest exit = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "pivot", label: "Entrance" }, { role: "current", label: "BFS frontier" }, { role: "visited", label: "Visited" }, { role: "sorted", label: "Exit" }]} />
    </div>
  );
}
