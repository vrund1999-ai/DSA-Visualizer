import type { RendererProps } from "@/core/types";
import { Legend, SWATCH_CLASS, roleLookup } from "@/leetcode/shared/viz";
import type { PeakData } from "./algorithm";

export function PeakRenderer({ step }: RendererProps<PeakData>) {
  const { nums, lo, hi, mid, peak } = step.data;
  const roleFor = roleLookup(step.highlights);
  const max = Math.max(...nums, 1);
  const barColor = (role: string) => (role === "default" ? "bg-muted-foreground/25" : SWATCH_CLASS[role] ?? "bg-muted-foreground/25");

  return (
    <div className="flex h-full flex-col gap-5">
      <p className="text-center text-sm text-muted-foreground">
        {peak !== null ? `Peak at index ${peak}` : `Search range [${lo}, ${hi}]`}
      </p>

      <div className="flex h-52 items-end justify-center gap-1.5">
        {nums.map((v, i) => (
          <div key={i} className="flex h-full flex-col items-center justify-end gap-1">
            <span className="h-4 text-[10px] font-semibold uppercase text-role-current">
              {i === mid ? "mid" : i === lo ? "lo" : i === hi ? "hi" : ""}
            </span>
            <div className={`w-7 rounded-t transition-all ${barColor(roleFor(i))}`} style={{ height: `${(v / max) * 100}%` }} />
            <span className="text-[10px] tabular-nums text-muted-foreground">{v}</span>
          </div>
        ))}
      </div>

      <Legend
        items={[
          { role: "current", label: "Middle" },
          { role: "compared", label: "mid + 1" },
          { role: "visited", label: "Out of range" },
          { role: "target", label: "Peak" },
        ]}
      />
    </div>
  );
}
