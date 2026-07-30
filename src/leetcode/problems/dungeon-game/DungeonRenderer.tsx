import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { DungeonData } from "./algorithm";

export function DungeonRenderer({ step }: RendererProps<DungeonData>) {
  const { dungeon, dp, cur, chosen, answer } = step.data;
  const R = dungeon.length;
  const C = dungeon[0].length;

  const cls = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return "bg-role-current text-white border-role-current";
    if (chosen && chosen[0] === r && chosen[1] === c) return "bg-role-compared text-white border-role-compared";
    if (answer !== null && r === 0 && c === 0) return "bg-role-sorted text-white border-role-sorted";
    if (dp[r][c] !== null) return "bg-role-visited/20 border-role-visited";
    return "bg-muted/40 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${C}, 3.5rem)` }}>
        {Array.from({ length: R }).flatMap((_, r) =>
          Array.from({ length: C }).map((__, c) => (
            <div key={`${r}-${c}`} className={`flex h-14 w-14 flex-col items-center justify-center rounded border ${cls(r, c)}`}>
              <span className={`text-xs ${dungeon[r][c] < 0 ? "text-role-swapped" : ""}`}>{dungeon[r][c] > 0 ? `+${dungeon[r][c]}` : dungeon[r][c]}</span>
              <span className="text-sm font-bold tabular-nums">{dp[r][c] === null ? "·" : `♥${dp[r][c]}`}</span>
            </div>
          )),
        )}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">minimum starting HP = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "current", label: "Computing" }, { role: "compared", label: "Cheaper path" }, { role: "visited", label: "Solved" }, { role: "sorted", label: "Start (answer)" }]} />
    </div>
  );
}
