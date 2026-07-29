import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { NextLetterData } from "./algorithm";

export function NextLetterRenderer({ step }: RendererProps<NextLetterData>) {
  const { letters, target, lo, hi, mid, answer } = step.data;

  const roleFor = (i: number) => {
    if (answer !== null && i === lo % letters.length) return "sorted";
    if (i === mid) return "current";
    if (i >= lo && i < hi) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border px-3 py-1 text-sm">target = <b className="font-mono">'{target}'</b></div>

      <ArrayCells values={letters} roleFor={roleFor} showIndex cellWidth="w-10" />

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">lo = {lo}</span>
        {mid !== null && <span className="rounded-md border border-role-current px-3 py-1">mid = {mid}</span>}
        <span className="rounded-md border px-3 py-1">hi = {hi}</span>
      </div>

      {answer !== null && <div className="rounded-md border px-4 py-1.5 text-lg font-bold">'{answer}'</div>}

      <Legend items={[{ role: "current", label: "mid" }, { role: "active", label: "Search window" }, { role: "sorted", label: "Answer" }]} />
    </div>
  );
}
