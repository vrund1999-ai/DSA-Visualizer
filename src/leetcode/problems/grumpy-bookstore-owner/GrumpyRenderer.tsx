import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { GrumpyData } from "./algorithm";

export function GrumpyRenderer({ step }: RendererProps<GrumpyData>) {
  const { customers, grumpy, X, base, right, win, best, bestRange, answer } = step.data;
  const left = right !== null ? Math.max(0, right - X + 1) : -1;
  const inWindow = (i: number) => right !== null && i >= left && i <= right;
  const inBest = (i: number) => answer !== null && bestRange !== null && i >= bestRange[0] && i <= bestRange[1];

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span className="w-16 text-right text-xs text-muted-foreground">customers</span>
          {customers.map((v, i) => (
            <span key={i} className={`flex h-9 w-9 items-center justify-center rounded border text-sm font-semibold tabular-nums ${inBest(i) ? "bg-role-sorted text-white border-role-sorted" : inWindow(i) ? "bg-role-current/60 text-white border-role-current" : grumpy[i] ? "bg-role-swapped/20 border-role-swapped/40" : "bg-role-active/20 border-role-active"}`}>{v}</span>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <span className="w-16 text-right text-xs text-muted-foreground">grumpy</span>
          {grumpy.map((v, i) => (
            <span key={i} className={`flex h-6 w-9 items-center justify-center text-xs ${v ? "text-role-swapped font-bold" : "text-muted-foreground"}`}>{v ? "😠" : "🙂"}</span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">base {base}</span>
        <span className="rounded-md border px-3 py-1">window recovery {win}</span>
        <span className="rounded-md border px-3 py-1">answer = <b className="tabular-nums">{answer ?? base + best}</b></span>
      </div>

      <Legend items={[{ role: "active", label: "Already satisfied" }, { role: "swapped", label: "Grumpy minute" }, { role: "current", label: "Suppress window" }, { role: "sorted", label: "Best window" }]} />
    </div>
  );
}
