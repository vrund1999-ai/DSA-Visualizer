import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { NextGreaterData } from "./algorithm";

export function NextGreaterRenderer({ step }: RendererProps<NextGreaterData>) {
  const { nums, res, stack, cur, resolved } = step.data;

  const roleFor = (i: number) => {
    if (i === cur) return "current";
    if (i === resolved) return "swapped";
    if (stack.includes(i)) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">nums (circular)</span>
        <ArrayCells values={nums} roleFor={roleFor} topLabel={(i) => (i === cur ? "cur" : "")} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">result</span>
        <ArrayCells values={res} roleFor={(i) => (i === resolved ? "swapped" : res[i] !== -1 ? "sorted" : "default")} showIndex={false} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">stack (indices)</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1.5">
          {stack.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : stack.map((i) => (
            <span key={i} className="rounded-md border-2 border-role-active bg-role-active/20 px-2 py-1 font-mono text-xs">{i}→{nums[i]}</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Current" }, { role: "active", label: "On stack" }, { role: "swapped", label: "Just resolved" }, { role: "sorted", label: "Answered" }]} />
    </div>
  );
}
