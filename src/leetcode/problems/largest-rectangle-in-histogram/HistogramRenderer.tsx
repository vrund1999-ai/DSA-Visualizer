import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { HistogramData } from "./algorithm";

export function HistogramRenderer({ step }: RendererProps<HistogramData>) {
  const { heights, i, stack, best, rect } = step.data;
  const max = Math.max(...heights, 1);
  const stackSet = new Set(stack);

  const barColor = (idx: number) => {
    if (rect && idx >= rect[0] && idx <= rect[1]) return "bg-role-target/60";
    if (idx === i) return "bg-role-current";
    if (stackSet.has(idx)) return "bg-role-active/50";
    return "bg-muted-foreground/30";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Largest area</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-semibold tabular-nums text-role-target">{best}</span>
      </div>

      <div className="flex h-52 items-end justify-center gap-1">
        {heights.map((h, idx) => (
          <div key={idx} className="flex h-full flex-col items-center justify-end gap-1">
            <div className={`w-8 rounded-t transition-all ${barColor(idx)}`} style={{ height: `${(h / max) * 100}%` }} />
            <span className="text-[10px] tabular-nums text-muted-foreground">{h}</span>
          </div>
        ))}
      </div>

      <Legend
        items={[
          { role: "current", label: "Current bar" },
          { role: "active", label: "On stack" },
          { role: "target", label: "Measured rectangle" },
        ]}
      />
    </div>
  );
}
