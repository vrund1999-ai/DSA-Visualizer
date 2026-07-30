import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { RangeSum2DData } from "./algorithm";

export function RangeSum2DRenderer({ step }: RendererProps<RangeSum2DData>) {
  const { matrix, P, phase, query, corners, result, answer } = step.data;
  const R = matrix.length;
  const C = matrix[0].length;

  const inQuery = (r: number, c: number) => query !== null && r >= query[0] && r <= query[2] && c >= query[1] && c <= query[3];

  const cornerRole = (r: number, c: number): string => {
    if (!corners) return "";
    const eq = (p: number[]) => p[0] === r && p[1] === c;
    if (eq(corners.br)) return "bg-role-sorted text-white border-role-sorted";
    if (eq(corners.tr) || eq(corners.bl)) return "bg-role-swapped text-white border-role-swapped";
    if (eq(corners.tl)) return "bg-role-current text-white border-role-current";
    return "";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex items-start gap-6">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">matrix</span>
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${C}, 2.25rem)` }}>
            {Array.from({ length: R }).flatMap((_, r) =>
              Array.from({ length: C }).map((__, c) => (
                <div key={`${r}-${c}`} className={`flex h-9 w-9 items-center justify-center rounded border text-xs font-semibold tabular-nums ${inQuery(r, c) ? "bg-role-active/30 border-role-active" : "bg-muted/40 border-border text-muted-foreground"}`}>
                  {matrix[r][c]}
                </div>
              )),
            )}
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">prefix grid P</span>
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${C + 1}, 2.25rem)` }}>
            {P.flatMap((row, r) =>
              row.map((v, c) => {
                const cr = phase === "query" ? cornerRole(r, c) : "";
                return (
                  <div key={`${r}-${c}`} className={`flex h-9 w-9 items-center justify-center rounded border text-xs font-semibold tabular-nums ${cr || "bg-muted/30 border-border text-muted-foreground"}`}>
                    {v}
                  </div>
                );
              }),
            )}
          </div>
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">region sum = <b className="tabular-nums">{result ?? answer ?? "…"}</b></div>

      <Legend items={[{ role: "sorted", label: "+ bottom-right" }, { role: "swapped", label: "− strips" }, { role: "current", label: "+ top-left" }, { role: "active", label: "Query region" }]} />
    </div>
  );
}
