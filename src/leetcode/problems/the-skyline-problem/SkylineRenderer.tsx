import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { SkylineData } from "./algorithm";

export function SkylineRenderer({ step }: RendererProps<SkylineData>) {
  const { buildings, x, active, curMax, res, answer } = step.data;
  const points = answer ?? res;
  const maxX = Math.max(...buildings.map((b) => b[1]), 1);
  const maxH = Math.max(...buildings.map((b) => b[2]), 1);
  const W = 380;
  const H = 180;
  const pad = 10;
  const sx = (v: number) => pad + (v / maxX) * (W - 2 * pad);
  const sy = (v: number) => H - pad - (v / maxH) * (H - 2 * pad);

  // build skyline polyline from key points
  const poly: string[] = [];
  for (let i = 0; i < points.length; i++) {
    const [px, ph] = points[i];
    if (i > 0) poly.push(`${sx(px)},${sy(points[i - 1][1])}`);
    poly.push(`${sx(px)},${sy(ph)}`);
  }

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="rounded border border-border">
        {buildings.map(([l, r, h], i) => (
          <rect key={i} x={sx(l)} y={sy(h)} width={sx(r) - sx(l)} height={sy(0) - sy(h)} className="fill-role-active/20 stroke-role-active/40" />
        ))}
        {poly.length > 1 && <polyline points={poly.join(" ")} className="fill-none stroke-role-sorted" strokeWidth="2.5" />}
        {points.map(([px, ph], i) => (
          <circle key={i} cx={sx(px)} cy={sy(ph)} r="3" className="fill-role-sorted" />
        ))}
        {x !== null && <line x1={sx(x)} y1={0} x2={sx(x)} y2={H} className="stroke-role-current" strokeWidth="1.5" strokeDasharray="3 3" />}
      </svg>

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">active heights: [{[...active].sort((a, b) => b - a).join(", ")}]</span>
        <span className="rounded-md border px-3 py-1">tallest {curMax}</span>
      </div>

      <Legend items={[{ role: "active", label: "Buildings" }, { role: "sorted", label: "Skyline / key points" }, { role: "current", label: "Sweep line" }]} />
    </div>
  );
}
