import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { TimeDiffData } from "./algorithm";

const fmt = (m: number) => `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;

export function TimeDiffRenderer({ step }: RendererProps<TimeDiffData>) {
  const { mins, pair, diff, best, bestPair, answer } = step.data;
  const cx = 130;
  const cy = 130;
  const R = 95;
  const pos = (m: number) => {
    const ang = (m / 1440) * 2 * Math.PI - Math.PI / 2;
    return { x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang) };
  };
  const pairSet = new Set(pair ?? []);
  const finalPair = new Set(answer !== null ? bestPair ?? [] : []);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <svg width="260" height="260" viewBox="0 0 260 260">
        <circle cx={cx} cy={cy} r={R} className="fill-none stroke-border" strokeWidth="1.5" />
        {[0, 360, 720, 1080].map((m) => {
          const p = pos(m);
          return <text key={m} x={p.x} y={p.y} textAnchor="middle" className="fill-muted-foreground text-[9px]">{fmt(m)}</text>;
        })}
        {mins.map((m, i) => {
          const p = pos(m);
          const active = pairSet.has(i) || finalPair.has(i);
          return (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r={active ? 7 : 5} className={finalPair.has(i) ? "fill-role-sorted" : active ? "fill-role-current" : "fill-role-active"} />
              <text x={cx + (R - 20) * Math.cos((m / 1440) * 2 * Math.PI - Math.PI / 2)} y={cy + (R - 20) * Math.sin((m / 1440) * 2 * Math.PI - Math.PI / 2) + 3} textAnchor="middle" className="fill-foreground text-[8px]">{fmt(m)}</text>
            </g>
          );
        })}
      </svg>

      <div className="flex items-center gap-3 text-sm">
        {diff !== null && <span className="rounded-md border px-3 py-1">gap {diff} min</span>}
        <span className="rounded-md border px-3 py-1">min diff = <b className="tabular-nums">{answer ?? (best === Infinity ? "…" : best)}</b></span>
      </div>

      <Legend items={[{ role: "active", label: "Time point" }, { role: "current", label: "Comparing" }, { role: "sorted", label: "Closest pair" }]} />
    </div>
  );
}
