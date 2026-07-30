import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ConsecDiffData } from "./algorithm";

export function ConsecDiffRenderer({ step }: RendererProps<ConsecDiffData>) {
  const { n, k, level, length, cur, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="text-sm text-muted-foreground">
        {n}-digit numbers, adjacent digits differ by {k} · current length <b className="text-foreground">{length}</b>
      </div>

      <div className="flex max-w-2xl flex-wrap justify-center gap-1.5">
        {(answer ?? level).map((num, idx) => (
          <span key={`${num}-${idx}`} className={`rounded border px-2 py-1 font-mono text-sm tabular-nums ${num === cur ? "bg-role-current text-white border-role-current" : answer ? "bg-role-sorted/15 border-role-sorted" : "bg-role-active/20 border-role-active"}`}>{num}</span>
        ))}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">count = <b className="tabular-nums">{(answer ?? level).length}</b></div>

      <Legend items={[{ role: "current", label: "Extending" }, { role: "active", label: "Current level" }, { role: "sorted", label: "Final answers" }]} />
    </div>
  );
}
