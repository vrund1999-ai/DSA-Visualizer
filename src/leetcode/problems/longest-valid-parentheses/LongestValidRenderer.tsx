import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { LongestValidData } from "./algorithm";

export function LongestValidRenderer({ step }: RendererProps<LongestValidData>) {
  const { chars, pos, stack, best, bestRange, answer } = step.data;

  const roleFor = (i: number) => {
    if (bestRange && i >= bestRange[0] && i <= bestRange[1]) return "sorted";
    if (i === pos) return "current";
    if (stack.includes(i)) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={chars} roleFor={roleFor} topLabel={(i) => (i === pos ? "i" : "")} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">stack (indices, −1 base)</span>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {stack.map((v, i) => (
            <span key={i} className={`flex size-9 items-center justify-center rounded-md border-2 font-mono text-xs tabular-nums ${i === stack.length - 1 ? "border-role-current bg-role-current/20" : "border-border bg-card"}`}>{v}</span>
          ))}
        </div>
      </div>

      <div className="text-sm">longest valid = <b className="tabular-nums text-role-sorted">{answer ?? best}</b></div>

      <Legend items={[{ role: "current", label: "Current char" }, { role: "active", label: "Open on stack" }, { role: "sorted", label: "Best valid span" }]} />
    </div>
  );
}
