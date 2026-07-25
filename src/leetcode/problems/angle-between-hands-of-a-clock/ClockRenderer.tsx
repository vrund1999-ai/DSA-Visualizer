import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ClockData } from "./algorithm";

/** Point on a circle of radius r at the given clock angle (0° = up, clockwise). */
function tip(angleDeg: number, r: number, cx: number, cy: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export function ClockRenderer({ step }: RendererProps<ClockData>) {
  const { hour, minutes, minAngle, hrAngle, rawDiff, answer } = step.data;
  const cx = 110;
  const cy = 110;
  const hr = tip(hrAngle, 55, cx, cy);
  const mn = tip(minAngle, 85, cx, cy);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <svg width="220" height="220" viewBox="0 0 220 220" className="shrink-0">
        <circle cx={cx} cy={cy} r="100" className="fill-muted/20 stroke-border" strokeWidth="2" />
        {Array.from({ length: 12 }).map((_, i) => {
          const p = tip(i * 30, 92, cx, cy);
          return <text key={i} x={p.x} y={p.y + 4} textAnchor="middle" className="fill-muted-foreground text-[10px]">{i === 0 ? 12 : i}</text>;
        })}
        {/* hour hand */}
        <line x1={cx} y1={cy} x2={hr.x} y2={hr.y} className="stroke-role-current" strokeWidth="5" strokeLinecap="round" />
        {/* minute hand */}
        <line x1={cx} y1={cy} x2={mn.x} y2={mn.y} className="stroke-role-compared" strokeWidth="3" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="4" className="fill-foreground" />
      </svg>

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1 tabular-nums">{String(hour).padStart(2, "0")}:{String(minutes).padStart(2, "0")}</span>
        <span className="rounded-md border border-role-current px-3 py-1">hour {hrAngle}°</span>
        <span className="rounded-md border border-role-compared px-3 py-1">minute {minAngle}°</span>
      </div>

      {rawDiff !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">
          gap {rawDiff}° → smaller arc = <b className="tabular-nums">{answer ?? Math.min(rawDiff, 360 - rawDiff)}°</b>
        </div>
      )}

      <Legend items={[{ role: "current", label: "Hour hand" }, { role: "compared", label: "Minute hand" }]} />
    </div>
  );
}
