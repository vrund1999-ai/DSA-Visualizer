import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { MazeData } from "./algorithm";

export function MazeRenderer({ step }: RendererProps<MazeData>) {
  const { maze, start, dest, seen, cur, rolling, answer } = step.data;
  const R = maze.length;
  const C = maze[0].length;
  const seenSet = new Set(seen);
  const rollSet = new Set(rolling);

  const cls = (r: number, c: number) => {
    if (r === dest[0] && c === dest[1]) return "bg-role-target text-white border-role-target";
    if (r === start[0] && c === start[1]) return "bg-role-pivot text-white border-role-pivot";
    if (cur && cur[0] === r && cur[1] === c) return "bg-role-current text-white border-role-current";
    if (maze[r][c] === 1) return "bg-foreground border-foreground";
    if (rollSet.has(`${r},${c}`)) return "bg-role-compared/50 border-role-compared";
    if (seenSet.has(`${r},${c}`)) return "bg-role-visited/30 border-role-visited";
    return "bg-muted/30 border-border";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${C}, 2.5rem)` }}>
        {Array.from({ length: R }).flatMap((_, r) =>
          Array.from({ length: C }).map((__, c) => (
            <div key={`${r}-${c}`} className={`flex h-10 w-10 items-center justify-center rounded border text-xs font-bold ${cls(r, c)}`}>
              {r === start[0] && c === start[1] ? "S" : r === dest[0] && c === dest[1] ? "D" : ""}
            </div>
          )),
        )}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        has path = <b className={answer === false ? "text-role-swapped" : answer ? "text-role-sorted" : ""}>{answer === null ? "…" : String(answer)}</b>
      </div>

      <Legend items={[{ role: "pivot", label: "Start" }, { role: "target", label: "Destination" }, { role: "current", label: "Ball" }, { role: "visited", label: "Stop positions" }]} />
    </div>
  );
}
