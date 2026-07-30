import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { PickWeightData } from "./algorithm";

export function PickWeightRenderer({ step }: RendererProps<PickWeightData>) {
  const { weights, prefix, total, target, lo, hi, mid, picked } = step.data;
  const W = 400;
  const scale = W / total;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">weight bands on [1, {total}]</span>
        <svg width={W + 2} height="60" viewBox={`0 0 ${W + 2} 60`}>
          {weights.map((w, i) => {
            const start = (prefix[i] - w) * scale;
            const width = w * scale;
            const active = i >= lo && i <= hi;
            const isPick = i === picked;
            return (
              <g key={i}>
                <rect x={start + 1} y={10} width={width - 2} height={30} rx={3} className={isPick ? "fill-role-sorted" : i === mid ? "fill-role-current" : active ? "fill-role-active/50" : "fill-muted"} />
                <text x={start + width / 2} y={30} textAnchor="middle" className="fill-foreground text-xs font-semibold">{i}</text>
                <text x={start + width / 2} y={52} textAnchor="middle" className="fill-muted-foreground text-[9px]">w={w}</text>
              </g>
            );
          })}
          {target !== null && <line x1={target * scale + 1} y1={4} x2={target * scale + 1} y2={46} className="stroke-role-target" strokeWidth="2" />}
        </svg>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">prefix sums</span>
        <div className="flex gap-1">
          {prefix.map((p, i) => (
            <span key={i} className={`flex h-9 w-9 items-center justify-center rounded border text-sm font-semibold tabular-nums ${i === mid ? "bg-role-current text-white border-role-current" : i === picked ? "bg-role-sorted text-white border-role-sorted" : i >= lo && i <= hi ? "bg-role-active/20 border-role-active" : "bg-muted/40 border-border text-muted-foreground"}`}>{p}</span>
          ))}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        {target !== null ? <>target {target} → index <b className="tabular-nums">{picked ?? "…"}</b></> : "weighted random index"}
      </div>

      <Legend items={[{ role: "target", label: "Sampled target" }, { role: "current", label: "mid" }, { role: "active", label: "Search range" }, { role: "sorted", label: "Picked index" }]} />
    </div>
  );
}
