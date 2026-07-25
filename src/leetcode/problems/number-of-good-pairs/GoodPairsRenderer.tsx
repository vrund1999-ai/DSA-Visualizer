import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { GoodPairsData } from "./algorithm";

export function GoodPairsRenderer({ step }: RendererProps<GoodPairsData>) {
  const { nums, pos, seen, added, pairs, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === pos) return added > 0 ? "sorted" : "current";
    if (pos !== null && i < pos && nums[i] === nums[pos]) return "compared";
    if (pos !== null && i < pos) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} topLabel={(i) => (i === pos ? "i" : "")} showIndex={false} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">value counts</span>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {seen.map(([v, c]) => (
            <span key={v} className="rounded-md border px-2 py-1 font-mono text-xs tabular-nums">{v}:{c}</span>
          ))}
        </div>
      </div>

      <div className="text-sm">
        {added > 0 && <span className="mr-3 text-role-sorted">+{added}</span>}
        good pairs = <b className="tabular-nums text-foreground">{answer ?? pairs}</b>
      </div>

      <Legend items={[{ role: "current", label: "Current index" }, { role: "compared", label: "Earlier equal value" }, { role: "sorted", label: "Added pairs" }]} />
    </div>
  );
}
