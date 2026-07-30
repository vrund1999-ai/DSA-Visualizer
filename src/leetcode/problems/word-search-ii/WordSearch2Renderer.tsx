import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { WordSearch2Data } from "./algorithm";

export function WordSearch2Renderer({ step }: RendererProps<WordSearch2Data>) {
  const { board, path, cur, prefix, found, justFound, answer } = step.data;
  const R = board.length;
  const C = board[0].length;
  const pathSet = new Set(path);

  const cls = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return justFound ? "bg-role-sorted text-white border-role-sorted" : "bg-role-current text-white border-role-current";
    if (pathSet.has(`${r},${c}`)) return "bg-role-active/40 border-role-active";
    return "bg-muted/40 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${C}, 2.75rem)` }}>
        {Array.from({ length: R }).flatMap((_, r) =>
          Array.from({ length: C }).map((__, c) => (
            <div key={`${r}-${c}`} className={`flex h-11 w-11 items-center justify-center rounded border text-lg font-bold uppercase ${cls(r, c)}`}>
              {board[r][c]}
            </div>
          )),
        )}
      </div>

      {prefix && <div className="font-mono text-sm">prefix: <b className="text-role-current">{prefix}</b></div>}

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">found words</span>
        <div className="flex flex-wrap justify-center gap-2">
          {(answer ?? found).length ? (
            (answer ?? found).map((w) => <span key={w} className="rounded border border-role-sorted bg-role-sorted/15 px-2 py-0.5 font-mono text-sm">{w}</span>)
          ) : (
            <span className="text-sm text-muted-foreground">—</span>
          )}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Current cell" }, { role: "active", label: "DFS path" }, { role: "sorted", label: "Word completed" }]} />
    </div>
  );
}
