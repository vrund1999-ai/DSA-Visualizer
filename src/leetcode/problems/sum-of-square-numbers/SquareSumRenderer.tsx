import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { SquareSumData } from "./algorithm";

export function SquareSumRenderer({ step }: RendererProps<SquareSumData>) {
  const { c, a, b, sum, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">target c = <b className="tabular-nums text-foreground">{c}</b></div>

      <div className="flex items-center gap-3 text-2xl font-mono">
        <span className="flex flex-col items-center">
          <span className="rounded-lg border-2 border-role-current bg-role-current/15 px-4 py-2 tabular-nums">{a}</span>
          <span className="text-xs text-muted-foreground">a</span>
        </span>
        <span className="text-muted-foreground">² +</span>
        <span className="flex flex-col items-center">
          <span className="rounded-lg border-2 border-role-compared bg-role-compared/15 px-4 py-2 tabular-nums">{b}</span>
          <span className="text-xs text-muted-foreground">b</span>
        </span>
        <span className="text-muted-foreground">² =</span>
        <span className={`rounded-lg border-2 px-4 py-2 tabular-nums ${sum === c ? "border-role-sorted bg-role-sorted/15" : "border-border"}`}>{sum}</span>
      </div>

      {answer !== null && (
        <div className={`text-base font-semibold ${answer ? "text-role-sorted" : "text-muted-foreground"}`}>
          {answer ? "sum of two squares ✓" : "not a sum of two squares ✗"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "a (low)" }, { role: "compared", label: "b (high)" }, { role: "sorted", label: "Match" }]} />
    </div>
  );
}
