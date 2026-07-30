import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { GardenData } from "./algorithm";

const FLOWER = ["", "🌹", "🌷", "🌻", "🌸"];
const FLOWER_FILL = ["fill-muted", "fill-red-400", "fill-amber-400", "fill-yellow-300", "fill-pink-400"];

export function GardenRenderer({ step }: RendererProps<GardenData>) {
  const { n, paths, color, cur, answer } = step.data;
  const cx = 150;
  const cy = 125;
  const R = 95;
  const pos = (g: number) => {
    const ang = ((g - 1) / n) * 2 * Math.PI - Math.PI / 2;
    return { x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang) };
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <svg width="300" height="250" viewBox="0 0 300 250">
        {paths.map(([a, b], i) => {
          const pa = pos(a);
          const pb = pos(b);
          return <line key={i} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y} className="stroke-border" strokeWidth="2" />;
        })}
        {Array.from({ length: n }).map((_, idx) => {
          const g = idx + 1;
          const p = pos(g);
          return (
            <g key={g}>
              <circle cx={p.x} cy={p.y} r="20" className={`${FLOWER_FILL[color[g]]} ${g === cur ? "stroke-role-current" : "stroke-border"}`} strokeWidth={g === cur ? 3 : 1.5} />
              <text x={p.x} y={p.y + 5} textAnchor="middle" className="text-sm font-bold fill-foreground">{g}</text>
              {color[g] > 0 && <text x={p.x + 16} y={p.y - 12} textAnchor="middle" className="text-sm">{FLOWER[color[g]]}</text>}
            </g>
          );
        })}
      </svg>

      <div className="rounded-md border px-3 py-1 text-sm">flowers = [<b className="tabular-nums">{(answer ?? color.slice(1)).join(", ")}</b>]</div>

      <Legend items={[{ role: "current", label: "Current garden" }]} />
    </div>
  );
}
