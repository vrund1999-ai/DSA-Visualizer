import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { BattleData } from "./algorithm";

export function BattleRenderer({ step }: RendererProps<BattleData>) {
  const { board, cur, counted, count, answer } = step.data;
  const R = board.length;
  const C = board[0].length;
  const countedSet = new Set(counted);

  const cls = (r: number, c: number) => {
    const ship = board[r][c] === "X";
    if (cur && cur[0] === r && cur[1] === c) return countedSet.has(`${r},${c}`) ? "bg-role-sorted text-white border-role-sorted" : "bg-role-current text-white border-role-current";
    if (countedSet.has(`${r},${c}`)) return "bg-role-sorted/70 text-white border-role-sorted";
    if (ship) return "bg-role-active/40 border-role-active";
    return "bg-muted/30 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${C}, 2.75rem)` }}>
        {Array.from({ length: R }).flatMap((_, r) =>
          Array.from({ length: C }).map((__, c) => (
            <div key={`${r}-${c}`} className={`flex h-11 w-11 items-center justify-center rounded border text-lg font-bold ${cls(r, c)}`}>
              {board[r][c] === "X" ? "⊞" : "·"}
            </div>
          )),
        )}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">battleships = <b className="tabular-nums">{answer ?? count}</b></div>

      <Legend items={[{ role: "current", label: "Scanning" }, { role: "active", label: "Ship cell" }, { role: "sorted", label: "Ship start (counted)" }]} />
    </div>
  );
}
