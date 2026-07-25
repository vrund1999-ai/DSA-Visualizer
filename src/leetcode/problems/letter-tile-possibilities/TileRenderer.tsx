import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { TileData } from "./algorithm";

export function TileRenderer({ step }: RendererProps<TileData>) {
  const { letters, counts, current, pick, total, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-7">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">remaining tiles</span>
        <div className="flex gap-3">
          {letters.map((l, i) => (
            <div
              key={l}
              className={`flex flex-col items-center gap-1`}
            >
              <div
                className={`flex size-12 items-center justify-center rounded-lg border-2 text-xl font-bold transition-colors ${
                  i === pick ? "border-role-current bg-role-current text-white" : counts[i] === 0 ? "border-border bg-muted/20 text-muted-foreground/50" : "border-border bg-muted/30"
                }`}
              >
                {l}
              </div>
              <span className="text-xs tabular-nums text-muted-foreground">×{counts[i]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">current sequence</span>
        <div className="min-h-8 rounded-md border px-4 py-1.5 font-mono text-lg tracking-widest">
          {current === "" ? <span className="text-muted-foreground">∅</span> : current}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">distinct sequences = <b className="tabular-nums">{answer ?? total}</b></div>

      <Legend items={[{ role: "current", label: "Tile chosen this step" }]} />
    </div>
  );
}
