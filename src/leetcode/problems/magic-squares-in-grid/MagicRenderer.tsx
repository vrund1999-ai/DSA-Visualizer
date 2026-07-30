import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { MagicData } from "./algorithm";

export function MagicRenderer({ step }: RendererProps<MagicData>) {
  const { grid, window, verdict, reason, count, answer } = step.data;
  const R = grid.length;
  const C = grid[0].length;

  const inWindow = (r: number, c: number) => window !== null && r >= window[0] && r < window[0] + 3 && c >= window[1] && c < window[1] + 3;

  const cls = (r: number, c: number) => {
    if (inWindow(r, c)) {
      if (verdict === "magic") return "bg-role-sorted text-white border-role-sorted";
      if (verdict === "not-magic") return "bg-role-swapped/70 text-white border-role-swapped";
      return "bg-role-current text-white border-role-current";
    }
    return "bg-muted/40 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${C}, 2.75rem)` }}>
        {Array.from({ length: R }).flatMap((_, r) =>
          Array.from({ length: C }).map((__, c) => (
            <div key={`${r}-${c}`} className={`flex h-11 w-11 items-center justify-center rounded border text-sm font-semibold tabular-nums ${cls(r, c)}`}>
              {grid[r][c]}
            </div>
          )),
        )}
      </div>

      {reason && <div className="text-xs text-muted-foreground">{reason}</div>}
      <div className="rounded-md border px-3 py-1 text-sm">magic squares = <b className="tabular-nums">{answer ?? count}</b></div>

      <Legend items={[{ role: "current", label: "Testing window" }, { role: "sorted", label: "Magic" }, { role: "swapped", label: "Not magic" }]} />
    </div>
  );
}
