import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { LeftRightData } from "./algorithm";

export function LeftRightRenderer({ step }: RendererProps<LeftRightData>) {
  const { nums, total, idx, left, right, ans, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === idx) return "current";
    if (idx !== null && i < idx) return "pivot";
    if (idx !== null && i > idx) return "compared";
    return "default";
  };

  const shown = (answer ?? ans).map((x) => (x === null ? "·" : x));

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border px-3 py-1 text-sm">total = <b className="tabular-nums">{total}</b></div>

      <ArrayCells values={nums} roleFor={roleFor} showIndex cellWidth="w-11" />

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border border-role-pivot px-3 py-1">left = {left}</span>
        {right !== null && <span className="rounded-md border border-role-compared px-3 py-1">right = {right}</span>}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">answer</span>
        <ArrayCells values={shown} roleFor={(i) => (i === idx ? "current" : ans[i] !== null ? "sorted" : "default")} showIndex={false} cellWidth="w-11" />
      </div>

      <Legend items={[{ role: "pivot", label: "Left of i" }, { role: "current", label: "i" }, { role: "compared", label: "Right of i" }]} />
    </div>
  );
}
