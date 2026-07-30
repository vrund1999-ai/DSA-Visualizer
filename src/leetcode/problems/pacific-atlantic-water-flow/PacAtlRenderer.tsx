import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { PacAtlData } from "./algorithm";

export function PacAtlRenderer({ step }: RendererProps<PacAtlData>) {
  const { heights, pac, atl, phase, cur, answer } = step.data;
  const R = heights.length;
  const C = heights[0].length;
  const both = new Set((answer ?? []).map(([r, c]) => `${r},${c}`));

  const cls = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return "bg-role-current text-white border-role-current";
    if (phase === "both") return both.has(`${r},${c}`) ? "bg-role-sorted text-white border-role-sorted" : "bg-muted/40 border-border text-muted-foreground";
    if (pac[r][c] && atl[r][c]) return "bg-role-sorted/70 text-white border-role-sorted";
    if (pac[r][c]) return "bg-role-active/40 border-role-active";
    if (atl[r][c]) return "bg-role-target/40 border-role-target";
    return "bg-muted/40 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${C}, 2.75rem)` }}>
        {Array.from({ length: R }).flatMap((_, r) =>
          Array.from({ length: C }).map((__, c) => (
            <div key={`${r}-${c}`} className={`flex h-11 w-11 items-center justify-center rounded border text-sm font-semibold tabular-nums ${cls(r, c)}`}>
              {heights[r][c]}
            </div>
          )),
        )}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        phase: {phase} {answer && <span className="ml-1">· {answer.length} cell(s) reach both</span>}
      </div>

      <Legend items={[{ role: "active", label: "Reaches Pacific" }, { role: "target", label: "Reaches Atlantic" }, { role: "sorted", label: "Both" }, { role: "current", label: "Visiting" }]} />
    </div>
  );
}
