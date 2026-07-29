import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { KClosestData } from "./algorithm";

export function KClosestRenderer({ step }: RendererProps<KClosestData>) {
  const { points, k, phase, cur, selected, answer } = step.data;
  const extent = Math.max(4, ...points.map((p) => Math.max(Math.abs(p.x), Math.abs(p.y)))) + 1;
  const S = 240;
  const toPx = (v: number) => (v / extent) * (S / 2) + S / 2;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="rounded-md border px-3 py-1 text-sm">k = <b className="tabular-nums">{k}</b></div>

      <svg width={S} height={S} viewBox={`0 0 ${S} ${S}`} className="rounded-md border bg-muted/10">
        <line x1={0} y1={S / 2} x2={S} y2={S / 2} className="stroke-border" />
        <line x1={S / 2} y1={0} x2={S / 2} y2={S} className="stroke-border" />
        <circle cx={S / 2} cy={S / 2} r={3} className="fill-foreground" />
        {points.map((p, i) => {
          const isSel = phase === "select" && selected.includes(i);
          const isCur = phase === "measure" && i === cur;
          return (
            <g key={i}>
              <line x1={S / 2} y1={S / 2} x2={toPx(p.x)} y2={S - toPx(p.y)} className={isSel ? "stroke-role-sorted" : "stroke-border/40"} strokeWidth={isSel ? 2 : 1} />
              <circle cx={toPx(p.x)} cy={S - toPx(p.y)} r={7} className={isSel ? "fill-role-sorted" : isCur ? "fill-role-current" : "fill-role-active/60 stroke-border"} />
              <text x={toPx(p.x)} y={S - toPx(p.y) - 10} textAnchor="middle" className="fill-muted-foreground text-[9px]">{p.x},{p.y}</text>
            </g>
          );
        })}
      </svg>

      {answer && <div className="rounded-md border px-3 py-1 text-sm font-semibold">closest {k}: {answer.map((p) => `(${p[0]},${p[1]})`).join(" ")}</div>}

      <Legend items={[{ role: "current", label: "Measuring" }, { role: "sorted", label: "Closest k" }, { role: "active", label: "Point" }]} />
    </div>
  );
}
