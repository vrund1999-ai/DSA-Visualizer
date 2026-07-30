import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { EqualSubData } from "./algorithm";

export function EqualSubRenderer({ step }: RendererProps<EqualSubData>) {
  const { s, t, costs, maxCost, left, right, cost, best, answer } = step.data;
  const inWindow = (i: number) => right !== null && i >= left && i <= right;

  const cellCls = (i: number) => {
    if (inWindow(i)) return "bg-role-active/30 border-role-active";
    return "bg-muted/40 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <div className="flex flex-col gap-1">
        {[
          { label: "s", str: s },
          { label: "t", str: t },
        ].map(({ label, str }) => (
          <div key={label} className="flex items-center gap-1">
            <span className="w-6 text-right text-xs text-muted-foreground">{label}</span>
            {str.split("").map((ch, i) => (
              <span key={i} className={`flex h-9 w-9 items-center justify-center rounded border font-mono text-base ${i === right ? "bg-role-current text-white border-role-current" : cellCls(i)}`}>{ch}</span>
            ))}
          </div>
        ))}
        <div className="flex items-center gap-1">
          <span className="w-6 text-right text-[10px] text-muted-foreground">Δ</span>
          {costs.map((c, i) => (
            <span key={i} className={`flex h-6 w-9 items-center justify-center text-[10px] tabular-nums ${inWindow(i) ? "font-semibold text-role-active" : "text-muted-foreground"}`}>{c}</span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">cost {cost} / {maxCost}</span>
        <span className="rounded-md border px-3 py-1">best = <b className="tabular-nums">{answer ?? best}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Right edge" }, { role: "active", label: "Window" }]} />
    </div>
  );
}
