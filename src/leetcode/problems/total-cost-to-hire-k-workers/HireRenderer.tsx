import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { HireData } from "./algorithm";

export function HireRenderer({ step }: RendererProps<HireData>) {
  const { costs, leftPool, rightPool, hired, justHired, total, answer } = step.data;
  const leftSet = new Set(leftPool);
  const rightSet = new Set(rightPool);
  const hiredSet = new Set(hired);

  const roleFor = (i: number) => {
    if (i === justHired) return "current";
    if (hiredSet.has(i)) return "visited";
    if (leftSet.has(i)) return "active";
    if (rightSet.has(i)) return "pivot";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <ArrayCells values={costs} roleFor={roleFor} showIndex />

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">hired: <b>{hired.length}</b></span>
        <span className="rounded-md border px-3 py-1">total = <b className="tabular-nums">{answer ?? total}</b></span>
      </div>

      <Legend
        items={[
          { role: "active", label: "Left candidate pool" },
          { role: "pivot", label: "Right candidate pool" },
          { role: "current", label: "Just hired" },
          { role: "visited", label: "Hired" },
        ]}
      />
    </div>
  );
}
