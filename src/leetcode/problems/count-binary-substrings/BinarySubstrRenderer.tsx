import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { BinarySubstrData } from "./algorithm";

export function BinarySubstrRenderer({ step }: RendererProps<BinarySubstrData>) {
  const { s, idx, prev, cur, count, added, answer } = step.data;
  const chars = s.split("");

  const roleFor = (i: number) => {
    if (i === idx) return "current";
    if (idx !== null && i > idx - cur && i < idx) return "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={chars} roleFor={roleFor} showIndex cellWidth="w-9" />

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">prev run = <b className="tabular-nums">{prev}</b></span>
        <span className="rounded-md border border-role-current px-3 py-1">cur run = <b className="tabular-nums">{cur}</b></span>
        {added !== null && <span className="rounded-md border px-3 py-1">+{added}</span>}
        <span className="rounded-md border px-3 py-1">count = <b className="tabular-nums">{answer ?? count}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Current char" }, { role: "compared", label: "Current run" }]} />
    </div>
  );
}
