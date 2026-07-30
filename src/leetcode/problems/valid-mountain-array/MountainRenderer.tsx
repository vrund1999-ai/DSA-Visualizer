import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { MountainData } from "./algorithm";

export function MountainRenderer({ step }: RendererProps<MountainData>) {
  const { arr, i, phase, peak, answer } = step.data;
  const maxVal = Math.max(...arr, 1);

  const barClass = (idx: number) => {
    if (idx === peak && phase !== "up") return "bg-role-pivot";
    if (idx === i) return "bg-role-current";
    return "bg-role-active/50";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex items-end gap-1" style={{ height: "160px" }}>
        {arr.map((v, idx) => (
          <div key={idx} className="flex flex-col items-center justify-end gap-1">
            <div className={`w-8 rounded-t ${barClass(idx)}`} style={{ height: `${(v / maxVal) * 130 + 8}px` }} />
            <span className={`text-xs tabular-nums ${idx === i ? "font-bold text-role-current" : "text-muted-foreground"}`}>{v}</span>
          </div>
        ))}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        phase: {phase} · valid mountain = <b className={answer === false ? "text-role-swapped" : answer ? "text-role-sorted" : ""}>{answer === null ? "…" : String(answer)}</b>
      </div>

      <Legend items={[{ role: "current", label: "Cursor" }, { role: "pivot", label: "Peak" }, { role: "active", label: "Element" }]} />
    </div>
  );
}
