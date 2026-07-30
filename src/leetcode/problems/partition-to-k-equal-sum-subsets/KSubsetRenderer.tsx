import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { KSubsetData } from "./algorithm";

export function KSubsetRenderer({ step }: RendererProps<KSubsetData>) {
  const { nums, target, buckets, i, j, action, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">nums (target {target} each)</span>
        <ArrayCells values={nums} roleFor={(idx) => (idx === i ? "current" : idx < (i ?? 0) ? "visited" : "default")} showIndex />
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {buckets.map((b, bi) => {
          const s = b.reduce((a, x) => a + x, 0);
          const active = bi === j;
          return (
            <div key={bi} className={`flex min-w-[4rem] flex-col items-center gap-1 rounded-lg border-2 px-3 py-2 ${active ? (action === "undo" ? "border-role-swapped" : "border-role-current") : s === target ? "border-role-sorted" : "border-border"}`}>
              <span className="text-[10px] uppercase text-muted-foreground">bucket {bi}</span>
              <div className="flex flex-wrap justify-center gap-1">
                {b.length ? b.map((v, vi) => <span key={vi} className="flex h-6 w-6 items-center justify-center rounded bg-role-active/30 text-xs tabular-nums">{v}</span>) : <span className="text-xs text-muted-foreground">∅</span>}
              </div>
              <span className={`text-xs tabular-nums ${s === target ? "text-role-sorted font-bold" : "text-muted-foreground"}`}>{s}/{target}</span>
            </div>
          );
        })}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        partitionable = <b className={answer === false ? "text-role-swapped" : answer ? "text-role-sorted" : ""}>{answer === null ? "…" : String(answer)}</b>
      </div>

      <Legend items={[{ role: "current", label: "Placing" }, { role: "swapped", label: "Backtracking" }, { role: "sorted", label: "Bucket full" }]} />
    </div>
  );
}
