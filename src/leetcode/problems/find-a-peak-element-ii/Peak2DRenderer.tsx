import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { Peak2DData } from "./algorithm";

export function Peak2DRenderer({ step }: RendererProps<Peak2DData>) {
  const { mat, lo, hi, mid, peakRow, answer } = step.data;
  const rows = mat.length;
  const cols = mat[0].length;

  const cellClass = (r: number, c: number) => {
    if (answer && answer[0] === r && answer[1] === c) return "bg-role-sorted text-white border-role-sorted";
    if (c === mid && r === peakRow) return "bg-role-current text-white border-role-current";
    if (c === mid) return "bg-role-pivot/30 border-role-pivot";
    if (c >= lo && c <= hi) return "bg-role-active/15 border-role-active/40";
    return "bg-muted/40 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${cols}, 2.75rem)` }}>
        {Array.from({ length: rows }).flatMap((_, r) =>
          Array.from({ length: cols }).map((__, c) => (
            <div key={`${r}-${c}`} className={`flex h-11 w-11 items-center justify-center rounded border text-sm font-semibold tabular-nums ${cellClass(r, c)}`}>
              {mat[r][c]}
            </div>
          )),
        )}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        search columns [{lo}, {hi}] · peak = <b>{answer ? `(${answer[0]}, ${answer[1]})` : "…"}</b>
      </div>

      <Legend items={[{ role: "active", label: "Search range" }, { role: "pivot", label: "Mid column" }, { role: "current", label: "Column max" }, { role: "sorted", label: "Peak" }]} />
    </div>
  );
}
