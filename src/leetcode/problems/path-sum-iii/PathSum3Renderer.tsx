import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { PathSum3Data } from "./algorithm";

export function PathSum3Renderer({ step }: RendererProps<PathSum3Data>) {
  const { heap, target, cur, runningSum, prefix, found, count, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <TreeView heap={heap} roleFor={(i) => (i === cur ? "current" : "default")} />

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">target = {target}</span>
        {cur !== null && <span className="rounded-md border px-3 py-1">path sum = {runningSum}</span>}
        {cur !== null && found > 0 && <span className="rounded-md border border-role-sorted px-3 py-1">+{found} path(s)</span>}
        <span className="rounded-md border px-3 py-1">count = <b className="tabular-nums">{answer ?? count}</b></span>
      </div>

      <div className="flex flex-wrap justify-center gap-1 text-xs">
        <span className="text-muted-foreground">prefix sums:</span>
        {prefix.filter(([, c]) => c > 0).map(([s, c]) => (
          <span key={s} className={`rounded border px-1.5 py-0.5 tabular-nums ${s === runningSum - target ? "border-role-sorted bg-role-sorted/15" : "border-border"}`}>
            {s}×{c}
          </span>
        ))}
      </div>

      <Legend items={[{ role: "current", label: "Current node" }, { role: "sorted", label: "Completes a path" }]} />
    </div>
  );
}
