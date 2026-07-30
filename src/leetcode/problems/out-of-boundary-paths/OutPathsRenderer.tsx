import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { OutPathsData } from "./algorithm";

export function OutPathsRenderer({ step }: RendererProps<OutPathsData>) {
  const { m, n, maxMove, dp, move, count, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="rounded-md border px-3 py-1 text-sm">move {move} / {maxMove}</div>

      <div className="grid gap-1 rounded-lg border-2 border-dashed border-role-target/50 p-2" style={{ gridTemplateColumns: `repeat(${n}, 3rem)` }}>
        {Array.from({ length: m }).flatMap((_, r) =>
          Array.from({ length: n }).map((__, c) => (
            <div key={`${r}-${c}`} className={`flex h-12 w-12 items-center justify-center rounded border text-sm font-semibold tabular-nums ${dp[r][c] > 0 ? "bg-role-active/30 border-role-active" : "bg-muted/40 border-border text-muted-foreground"}`}>
              {dp[r][c] || ""}
            </div>
          )),
        )}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">out-of-boundary paths = <b className="tabular-nums">{answer ?? count}</b></div>

      <Legend items={[{ role: "active", label: "Ball-count per cell" }, { role: "target", label: "Grid boundary" }]} />
    </div>
  );
}
