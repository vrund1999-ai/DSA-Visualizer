import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { WidthRampData } from "./algorithm";

export function WidthRampRenderer({ step }: RendererProps<WidthRampData>) {
  const { nums, phase, stack, cur, popped, best, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === popped) return "swapped";
    if (i === cur) return "current";
    if (stack.includes(i)) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">{phase === "build" ? "phase 1: build candidate starts" : "phase 2: scan from the right"}</div>

      <ArrayCells values={nums} roleFor={roleFor} topLabel={(i) => (i === cur ? (phase === "build" ? "i" : "j") : "")} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">candidate-start stack (indices)</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1.5">
          {stack.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : stack.map((i) => (
            <span key={i} className="rounded-md border-2 border-role-active bg-role-active/15 px-2 py-1 font-mono text-xs">{i}→{nums[i]}</span>
          ))}
        </div>
      </div>

      <div className="text-sm">widest ramp = <b className="tabular-nums text-foreground">{answer ?? best}</b></div>

      <Legend items={[{ role: "current", label: "Current index" }, { role: "active", label: "On stack" }, { role: "swapped", label: "Matched start" }]} />
    </div>
  );
}
