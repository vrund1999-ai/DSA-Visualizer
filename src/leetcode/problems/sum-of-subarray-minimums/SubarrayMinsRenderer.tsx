import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { SubarrayMinsData } from "./algorithm";

export function SubarrayMinsRenderer({ step }: RendererProps<SubarrayMinsData>) {
  const { arr, pos, stack, sum, contributor, contribution, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === contributor) return "swapped";
    if (i === pos) return "current";
    if (stack.includes(i)) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={arr} roleFor={roleFor} topLabel={(i) => (i === pos ? "i" : "")} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">stack (increasing values)</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1.5">
          {stack.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : stack.map((i) => (
            <span key={i} className="rounded-md border-2 border-role-active bg-role-active/15 px-2 py-1 font-mono text-xs">{i}:{arr[i]}</span>
          ))}
        </div>
      </div>

      <div className="text-sm">
        {contribution !== null && <span className="mr-3 text-role-swapped">+{contribution}</span>}
        running sum = <b className="tabular-nums text-role-current">{answer ?? sum}</b>
      </div>

      <Legend items={[{ role: "current", label: "Current index" }, { role: "active", label: "On stack" }, { role: "swapped", label: "Contributing min" }]} />
    </div>
  );
}
