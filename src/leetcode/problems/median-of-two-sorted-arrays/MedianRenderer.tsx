import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MedianData } from "./algorithm";

const fmt = (x: number) => (x === -Infinity ? "−∞" : x === Infinity ? "∞" : String(x));

export function MedianRenderer({ step }: RendererProps<MedianData>) {
  const { a, b, i, j, aL, aR, bL, bR, answer } = step.data;

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">left ≤ | ≤ right</span>
        <span className="font-mono">a: {fmt(aL)} | {fmt(aR)}</span>
        <span className="font-mono">b: {fmt(bL)} | {fmt(bR)}</span>
        {answer !== null && <span className="font-semibold text-role-target">median = {answer}</span>}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">a (shorter) — cut before index i</span>
        <ArrayCells values={a} roleFor={(idx) => (i !== null && idx < i ? "sorted" : "active")} topLabel={(idx) => (idx === i ? "i" : "")} showIndex={false} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">b — cut before index j</span>
        <ArrayCells values={b} roleFor={(idx) => (j !== null && idx < j ? "sorted" : "active")} topLabel={(idx) => (idx === j ? "j" : "")} showIndex={false} />
      </div>

      <Legend
        items={[
          { role: "sorted", label: "Left half" },
          { role: "active", label: "Right half" },
          { role: "target", label: "Median" },
        ]}
      />
    </div>
  );
}
