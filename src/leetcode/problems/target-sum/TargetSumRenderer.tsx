import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { TargetSumData } from "./algorithm";

export function TargetSumRenderer({ step }: RendererProps<TargetSumData>) {
  const { nums, target, cur, dp, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === cur) return "current";
    if (cur !== null && i < cur) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">target = <b className="tabular-nums text-foreground">{target}</b></div>

      <ArrayCells values={nums} roleFor={roleFor} topLabel={(i) => (i === cur ? "±" : "")} showIndex={false} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">dp: running sum → ways</span>
        <div className="flex max-w-2xl flex-wrap items-center justify-center gap-1.5">
          {dp.map(([sum, ways]) => (
            <span key={sum} className={`rounded-md border px-2 py-1 font-mono text-xs tabular-nums ${sum === target ? "border-role-target bg-role-target/15" : "bg-muted/30"}`}>{sum}:{ways}</span>
          ))}
        </div>
      </div>

      {answer !== null && <div className="text-base font-semibold text-role-target">ways = {answer}</div>}

      <Legend items={[{ role: "current", label: "Assigning sign" }, { role: "visited", label: "Placed" }, { role: "target", label: "Target sum" }]} />
    </div>
  );
}
