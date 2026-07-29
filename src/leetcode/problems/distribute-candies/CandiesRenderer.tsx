import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { CandiesData } from "./algorithm";

export function CandiesRenderer({ step }: RendererProps<CandiesData>) {
  const { candyType, idx, types, limit, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === idx) return "current";
    if (idx !== null && i < idx) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={candyType} roleFor={roleFor} showIndex={false} cellWidth="w-11" />

      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border px-3 py-1">distinct types = <b className="tabular-nums">{types.length}</b></span>
        <span className="rounded-md border px-3 py-1">eat limit = <b className="tabular-nums">{limit}</b></span>
      </div>

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">max types eaten = {answer}</div>}

      <Legend items={[{ role: "current", label: "Examining" }, { role: "visited", label: "Counted" }]} />
    </div>
  );
}
