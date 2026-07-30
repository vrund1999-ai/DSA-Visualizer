import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { GrammarData } from "./algorithm";

export function GrammarRenderer({ step }: RendererProps<GrammarData>) {
  const { n, k, rows, row, pos, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="text-sm text-muted-foreground">row {n}, position {k} · 0→01, 1→10</div>

      {rows.length > 0 ? (
        <div className="flex flex-col items-center gap-1">
          {rows.map((s, ri) => {
            const rowNum = ri + 1;
            const isActiveRow = rowNum === row;
            return (
              <div key={ri} className="flex items-center gap-1">
                <span className="w-8 text-right text-[10px] text-muted-foreground">row {rowNum}</span>
                <div className="flex gap-0.5">
                  {s.split("").map((c, ci) => {
                    const isPos = isActiveRow && ci + 1 === pos;
                    return <span key={ci} className={`flex h-6 w-6 items-center justify-center rounded border font-mono text-xs ${isPos ? "bg-role-current text-white border-role-current" : isActiveRow ? "bg-role-active/20 border-role-active" : "border-border text-muted-foreground"}`}>{c}</span>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-sm text-muted-foreground">row {row}, position {pos}</div>
      )}

      <div className="rounded-md border px-3 py-1 text-sm">symbol = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "active", label: "Current row" }, { role: "current", label: "Traced position" }]} />
    </div>
  );
}
