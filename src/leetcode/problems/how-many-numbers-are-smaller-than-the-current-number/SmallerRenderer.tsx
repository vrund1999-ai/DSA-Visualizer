import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { SmallerData } from "./algorithm";

export function SmallerRenderer({ step }: RendererProps<SmallerData>) {
  const { nums, ans, cur, done, answer } = { ...step.data, done: step.data.phase === "done" };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">nums</span>
        <ArrayCells values={nums} roleFor={(i) => (i === cur ? "current" : cur !== null && i < cur ? "visited" : "default")} showIndex={false} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">answer (count of smaller)</span>
        <ArrayCells values={(answer ?? ans).map((v) => (v === null ? "·" : v))} roleFor={(i) => (done ? "sorted" : i === cur ? "swapped" : ans[i] !== null ? "visited" : "default")} showIndex={false} />
      </div>

      <Legend items={[{ role: "current", label: "Answering" }, { role: "swapped", label: "Just filled" }, { role: "sorted", label: "Done" }]} />
    </div>
  );
}
