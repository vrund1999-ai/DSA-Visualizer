import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { PerfectSquareData } from "./algorithm";

export function PerfectSquareRenderer({ step }: RendererProps<PerfectSquareData>) {
  const { num, lo, hi, mid, square, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-7">
      <div className="rounded-md border px-3 py-1 text-sm">num = <b className="tabular-nums">{num}</b></div>

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">lo = <b className="tabular-nums">{lo}</b></span>
        {mid !== null && <span className="rounded-md border border-role-current px-4 py-1 text-lg font-bold">mid = {mid}</span>}
        <span className="rounded-md border px-3 py-1">hi = <b className="tabular-nums">{hi}</b></span>
      </div>

      {square !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm ${answer === true ? "bg-role-sorted text-white" : "border"}`}>
          {mid}² = <b className="tabular-nums">{square}</b> {square === num ? "= " : square < num ? "< " : "> "}{num}
        </div>
      )}

      {answer !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm font-semibold ${answer ? "bg-role-sorted text-white" : "bg-role-compared text-white"}`}>
          {answer ? "Perfect square ✓" : "Not a perfect square ✗"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Candidate root" }]} />
    </div>
  );
}
