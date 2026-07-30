import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { PrinterData } from "./algorithm";

export function PrinterRenderer({ step }: RendererProps<PrinterData>) {
  const { s, dp, filled, cur, answer } = step.data;
  const n = s.length;

  const cls = (i: number, j: number) => {
    if (j < i) return "bg-transparent border-transparent";
    if (cur && cur[0] === i && cur[1] === j) return "bg-role-current text-white border-role-current";
    if (answer !== null && i === 0 && j === n - 1) return "bg-role-sorted text-white border-role-sorted";
    if (filled[i][j]) return "bg-role-active/20 border-role-active";
    return "bg-muted/30 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex gap-1">
        {s.split("").map((ch, i) => (
          <span key={i} className={`flex h-9 w-9 items-center justify-center rounded border font-mono text-lg ${cur && (i === cur[0] || i === cur[1]) ? "bg-role-current/30 border-role-current" : "bg-muted/40 border-border"}`}>{ch}</span>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">dp[i][j] (turns for s[i..j])</span>
        <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${n}, 2.25rem)` }}>
          {Array.from({ length: n }).flatMap((_, i) =>
            Array.from({ length: n }).map((__, j) => (
              <div key={`${i}-${j}`} className={`flex h-9 w-9 items-center justify-center rounded border text-sm font-semibold tabular-nums ${cls(i, j)}`}>{j >= i && filled[i][j] ? dp[i][j] : ""}</div>
            )),
          )}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">min print turns = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "current", label: "Computing" }, { role: "active", label: "Solved" }, { role: "sorted", label: "Answer dp[0][n−1]" }]} />
    </div>
  );
}
