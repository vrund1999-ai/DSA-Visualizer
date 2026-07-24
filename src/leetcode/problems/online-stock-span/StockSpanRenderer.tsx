import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { StockSpanData } from "./algorithm";

export function StockSpanRenderer({ step }: RendererProps<StockSpanData>) {
  const { prices, spans, day, stack, absorbing } = step.data;

  const roleFor = (i: number) => {
    if (i === day) return "current";
    if (spans[i] !== null) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col justify-center gap-8">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">daily prices</span>
        <ArrayCells values={prices} roleFor={roleFor} topLabel={(i) => (i === day ? "today" : "")} badge={(i) => (spans[i] !== null ? `s=${spans[i]}` : undefined)} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">stack [price, span] (bottom → top)</span>
        <div className="flex min-h-[3rem] flex-wrap items-center justify-center gap-1.5">
          {stack.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : stack.map(([p, s], i) => (
            <span key={i} className={`flex flex-col items-center rounded-md border-2 px-2 py-1 font-mono text-xs tabular-nums ${i === stack.length - 1 && absorbing ? "border-role-swapped bg-role-swapped/20" : i === stack.length - 1 ? "border-role-current bg-role-current/20" : "border-border bg-card"}`}>
              <span>${p}</span>
              <span className="text-[10px] text-muted-foreground">span {s}</span>
            </span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Today / stack top" }, { role: "swapped", label: "Absorbing" }, { role: "visited", label: "Answered" }]} />
    </div>
  );
}
