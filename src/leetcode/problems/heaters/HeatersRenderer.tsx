import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { HeatersData } from "./algorithm";

export function HeatersRenderer({ step }: RendererProps<HeatersData>) {
  const { houses, heaters, house, j, dist, radius, answer } = step.data;

  const all = [...houses, ...heaters];
  const lo = Math.min(...all);
  const hi = Math.max(...all);
  const span = Math.max(hi - lo, 1);
  const pct = (x: number) => `${((x - lo) / span) * 100}%`;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">🏠 houses · 🔥 heaters {dist !== null ? `· distance ${dist}` : ""}</div>

      <div className="relative h-24 w-full max-w-2xl">
        <div className="absolute left-0 right-0 top-1/2 h-px bg-border" />
        {heaters.map((x, i) => (
          <div key={`ht${i}`} className={`absolute top-1/2 -translate-x-1/2 -translate-y-full text-lg ${i === j ? "scale-125" : ""}`} style={{ left: pct(x) }}>🔥</div>
        ))}
        {houses.map((x, i) => (
          <div key={`hs${i}`} className={`absolute top-1/2 -translate-x-1/2 text-lg ${i === house ? "scale-125" : ""}`} style={{ left: pct(x) }}>🏠</div>
        ))}
      </div>

      <div className="text-sm">required radius = <b className="tabular-nums text-role-current">{answer ?? radius}</b></div>

      <Legend items={[{ role: "current", label: "Current house / nearest heater" }]} />
    </div>
  );
}
