import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { CircularLoopData } from "./algorithm";

export function CircularLoopRenderer({ step }: RendererProps<CircularLoopData>) {
  const { nums, slow, fast, dead, answer } = step.data;
  const n = nums.length;
  const cx = 150;
  const cy = 130;
  const R = 95;
  const pos = (i: number) => {
    const ang = (i / n) * 2 * Math.PI - Math.PI / 2;
    return { x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang) };
  };
  const nextIdx = (i: number) => (((i + nums[i]) % n) + n) % n;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <svg width="300" height="270" viewBox="0 0 300 270">
        <defs>
          <marker id="cal-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" className="fill-muted-foreground" />
          </marker>
        </defs>
        {nums.map((v, i) => {
          if (v === 0) return null;
          const p = pos(i);
          const q = pos(nextIdx(i));
          const dx = q.x - p.x;
          const dy = q.y - p.y;
          const len = Math.hypot(dx, dy) || 1;
          const sx = p.x + (dx / len) * 20;
          const sy = p.y + (dy / len) * 20;
          const ex = q.x - (dx / len) * 20;
          const ey = q.y - (dy / len) * 20;
          return <line key={`e${i}`} x1={sx} y1={sy} x2={ex} y2={ey} className="stroke-muted-foreground/50" strokeWidth="1.5" markerEnd="url(#cal-arrow)" />;
        })}
        {nums.map((v, i) => {
          const p = pos(i);
          const isSlow = i === slow;
          const isFast = i === fast;
          const fill = isSlow && isFast ? "fill-role-sorted stroke-role-sorted" : isSlow ? "fill-role-current stroke-role-current" : isFast ? "fill-role-target stroke-role-target" : dead[i] ? "fill-muted stroke-border" : "fill-role-active/30 stroke-role-active";
          return (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="17" className={fill} strokeWidth="2" />
              <text x={p.x} y={p.y + 4} textAnchor="middle" className={`text-sm font-bold ${isSlow || isFast ? "fill-white" : "fill-foreground"}`}>{v === 0 ? "·" : v > 0 ? `+${v}` : `${v}`}</text>
            </g>
          );
        })}
      </svg>

      <div className="rounded-md border px-3 py-1 text-sm">
        circular loop = <b className={answer === false ? "text-role-swapped" : answer ? "text-role-sorted" : ""}>{answer === null ? "…" : String(answer)}</b>
      </div>

      <Legend items={[{ role: "current", label: "slow" }, { role: "target", label: "fast" }, { role: "sorted", label: "meet / cycle" }]} />
    </div>
  );
}
