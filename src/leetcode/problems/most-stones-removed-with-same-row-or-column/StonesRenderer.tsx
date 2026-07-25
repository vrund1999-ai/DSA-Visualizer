import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { StonesData } from "./algorithm";

const HUES = ["#ef4444", "#3b82f6", "#22c55e", "#eab308", "#a855f7", "#ec4899", "#14b8a6", "#f97316", "#6366f1"];

export function StonesRenderer({ step }: RendererProps<StonesData>) {
  const { stones, roots, pair, components, answer } = step.data;
  const maxR = Math.max(...stones.map((s) => s[0])) + 1;
  const maxC = Math.max(...stones.map((s) => s[1])) + 1;

  // assign each distinct root a color index
  const rootColor = new Map<number, number>();
  let next = 0;
  for (const r of roots) if (!rootColor.has(r)) rootColor.set(r, next++);

  const stoneAt = (r: number, c: number) => stones.findIndex((s) => s[0] === r && s[1] === c);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${maxC}, minmax(0, 1fr))` }}>
        {Array.from({ length: maxR }).map((_, r) =>
          Array.from({ length: maxC }).map((_, c) => {
            const idx = stoneAt(r, c);
            if (idx === -1) return <div key={`${r}-${c}`} className="size-9 rounded border border-dashed border-border/40" />;
            const inPair = pair && (idx === pair[0] || idx === pair[1]);
            return (
              <div key={`${r}-${c}`} className={`flex size-9 items-center justify-center rounded-full border-2 text-xs font-bold text-white ${inPair ? "ring-4 ring-role-current" : ""}`} style={{ backgroundColor: HUES[(rootColor.get(roots[idx]) ?? 0) % HUES.length] }}>
                {idx}
              </div>
            );
          }),
        )}
      </div>

      <div className="flex items-center gap-3 text-sm">
        {components !== null && <span className="rounded-md border px-3 py-1">components = {components}</span>}
        <span className="rounded-md border px-3 py-1">removable = <b className="tabular-nums">{answer ?? "…"}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Unioning pair" }]} />
      <p className="text-xs text-muted-foreground">stones with the same color are connected (share a row/column, transitively)</p>
    </div>
  );
}
