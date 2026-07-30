import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { VisibleData } from "./algorithm";

export function VisibleRenderer({ step }: RendererProps<VisibleData>) {
  const { heights, res, i, stack, popped, answer } = step.data;
  const maxH = Math.max(...heights, 1);
  const stackSet = new Set(stack);

  const barClass = (idx: number) => {
    if (idx === i) return "bg-role-current";
    if (idx === popped) return "bg-role-swapped";
    if (stackSet.has(idx)) return "bg-role-active/60";
    return "bg-role-active/25";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex items-end gap-1" style={{ height: "160px" }}>
        {heights.map((h, idx) => (
          <div key={idx} className="flex flex-col items-center justify-end gap-1">
            <span className="text-[10px] font-semibold tabular-nums text-role-sorted">{(answer ?? res)[idx] || 0}</span>
            <div className={`w-8 rounded-t ${barClass(idx)}`} style={{ height: `${(h / maxH) * 120 + 8}px` }} />
            <span className={`text-[10px] tabular-nums ${idx === i ? "font-bold text-role-current" : "text-muted-foreground"}`}>{h}</span>
          </div>
        ))}
      </div>

      <div className="text-xs text-muted-foreground">stack (decreasing): [{stack.map((s) => heights[s]).join(", ")}]</div>

      <Legend items={[{ role: "current", label: "Current person" }, { role: "swapped", label: "Visible (popped)" }, { role: "active", label: "On stack" }, { role: "sorted", label: "Visible count" }]} />
    </div>
  );
}
