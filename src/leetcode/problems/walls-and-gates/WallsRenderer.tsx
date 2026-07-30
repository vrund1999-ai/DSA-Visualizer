import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import { INF, type WallsData } from "./algorithm";

export function WallsRenderer({ step }: RendererProps<WallsData>) {
  const { rooms, frontier, level } = step.data;
  const R = rooms.length;
  const C = rooms[0].length;
  const front = new Set(frontier.map(([r, c]) => `${r},${c}`));

  const cell = (r: number, c: number) => {
    const v = rooms[r][c];
    if (v === -1) return { cls: "bg-foreground text-background border-foreground", text: "" };
    if (v === 0) return { cls: "bg-role-pivot text-white border-role-pivot", text: "0" };
    if (v === INF) return { cls: "bg-muted/40 border-border text-muted-foreground", text: "∞" };
    if (front.has(`${r},${c}`)) return { cls: "bg-role-current text-white border-role-current", text: `${v}` };
    return { cls: "bg-role-visited/25 border-role-visited", text: `${v}` };
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${C}, 2.75rem)` }}>
        {Array.from({ length: R }).flatMap((_, r) =>
          Array.from({ length: C }).map((__, c) => {
            const { cls, text } = cell(r, c);
            return <div key={`${r}-${c}`} className={`flex h-11 w-11 items-center justify-center rounded border text-sm font-semibold tabular-nums ${cls}`}>{text}</div>;
          }),
        )}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">BFS ring {level}</div>

      <Legend items={[{ role: "pivot", label: "Gate (0)" }, { role: "current", label: "Just filled" }, { role: "visited", label: "Distance set" }, { role: "wall", label: "Wall" }]} />
    </div>
  );
}
