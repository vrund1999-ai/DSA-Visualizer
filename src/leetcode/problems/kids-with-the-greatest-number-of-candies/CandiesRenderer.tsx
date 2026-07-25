import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { CandiesData } from "./algorithm";

export function CandiesRenderer({ step }: RendererProps<CandiesData>) {
  const { candies, extra, max, idx, total, result, answer } = step.data;
  const finalRes = answer ?? result;

  const roleFor = (i: number) => {
    if (i === idx) return "current";
    if (i < result.length) return result[i] ? "sorted" : "compared";
    return "default";
  };

  const badge = (i: number) => (i < result.length || i === idx ? (candies[i] === max ? "max" : "") : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">max = <b className="tabular-nums">{max}</b></span>
        <span className="rounded-md border px-3 py-1">extra = <b className="tabular-nums">{extra}</b></span>
        {total !== null && <span className="rounded-md border border-role-current px-3 py-1">this kid: {total}</span>}
      </div>

      <ArrayCells values={candies} roleFor={roleFor} badge={badge} showIndex cellWidth="w-12" />

      <div className="flex flex-wrap justify-center gap-1.5">
        {finalRes.map((b, i) => (
          <span key={i} className={`rounded-md px-2 py-0.5 text-xs font-semibold text-white ${b ? "bg-role-sorted" : "bg-role-compared"}`}>{b ? "true" : "false"}</span>
        ))}
      </div>

      <Legend items={[{ role: "current", label: "Current kid" }, { role: "sorted", label: "Can be greatest" }, { role: "compared", label: "Cannot" }]} />
    </div>
  );
}
