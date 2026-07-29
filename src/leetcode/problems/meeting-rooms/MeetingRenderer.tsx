import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { MeetingData } from "./algorithm";

export function MeetingRenderer({ step }: RendererProps<MeetingData>) {
  const { intervals, compare, conflict, answer } = step.data;
  const maxT = Math.max(1, ...intervals.map((x) => x[1]));
  const W = 380;
  const scale = (t: number) => (t / maxT) * W;
  const cmp = new Set(compare ?? []);
  const conf = new Set(conflict ?? []);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <svg width={W + 40} height={intervals.length * 34 + 30} viewBox={`0 0 ${W + 40} ${intervals.length * 34 + 30}`}>
        {[0, 0.25, 0.5, 0.75, 1].map((f) => (
          <g key={f}>
            <line x1={20 + f * W} y1={10} x2={20 + f * W} y2={intervals.length * 34 + 10} className="stroke-border" strokeWidth="1" strokeDasharray="2 3" />
            <text x={20 + f * W} y={intervals.length * 34 + 24} textAnchor="middle" className="fill-muted-foreground text-[9px]">{Math.round(f * maxT)}</text>
          </g>
        ))}
        {intervals.map(([s, e], i) => {
          const y = 14 + i * 34;
          const fill = conf.has(i) ? "fill-role-swapped" : cmp.has(i) ? "fill-role-current" : "fill-role-active/60";
          return (
            <g key={i}>
              <rect x={20 + scale(s)} y={y} width={Math.max(2, scale(e) - scale(s))} height={22} rx={4} className={`${fill} stroke-border`} />
              <text x={24 + scale(s)} y={y + 15} className="fill-white text-[10px] font-semibold">[{s},{e}]</text>
            </g>
          );
        })}
      </svg>

      <div className="rounded-md border px-3 py-1 text-sm">
        can attend all = <b className={answer === false ? "text-role-swapped" : answer ? "text-role-sorted" : ""}>{answer === null ? "…" : String(answer)}</b>
      </div>

      <Legend items={[{ role: "current", label: "Comparing" }, { role: "swapped", label: "Overlap" }, { role: "active", label: "Meeting" }]} />
    </div>
  );
}
