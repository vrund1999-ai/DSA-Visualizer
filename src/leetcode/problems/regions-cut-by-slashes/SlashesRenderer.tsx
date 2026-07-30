import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { SlashesData } from "./algorithm";

const REGION_FILL = ["bg-role-active/50", "bg-role-pivot/50", "bg-role-target/50", "bg-role-sorted/50", "bg-role-compared/50", "bg-role-current/50", "bg-amber-400/50", "bg-cyan-400/50"];

export function SlashesRenderer({ step }: RendererProps<SlashesData>) {
  const { grid, big, cur, regions, answer } = step.data;
  const S = big.length;

  const cls = (r: number, c: number) => {
    if (big[r][c] === -1) return "bg-foreground";
    if (big[r][c] > 0) return REGION_FILL[(big[r][c] - 1) % REGION_FILL.length];
    return "bg-muted/30";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">input</span>
          <div className="grid gap-0.5" style={{ gridTemplateColumns: `repeat(${grid.length}, 1.75rem)` }}>
            {grid.flatMap((row, r) =>
              row.split("").map((ch, c) => (
                <div key={`${r}-${c}`} className="flex h-7 w-7 items-center justify-center rounded border border-border font-mono text-lg">{ch === " " ? "·" : ch}</div>
              )),
            )}
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">3× upscaled</span>
          <div className="grid gap-px" style={{ gridTemplateColumns: `repeat(${S}, 1rem)` }}>
            {Array.from({ length: S }).flatMap((_, r) =>
              Array.from({ length: S }).map((__, c) => (
                <div key={`${r}-${c}`} className={`h-4 w-4 ${cls(r, c)} ${cur && cur[0] === r && cur[1] === c ? "ring-2 ring-role-current" : ""}`} />
              )),
            )}
          </div>
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">regions = <b className="tabular-nums">{answer ?? regions}</b></div>

      <Legend items={[{ role: "active", label: "Distinct regions (colored)" }, { role: "wall", label: "Slash walls" }]} />
    </div>
  );
}
