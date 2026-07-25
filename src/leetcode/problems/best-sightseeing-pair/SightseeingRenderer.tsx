import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { SightseeingData } from "./algorithm";

export function SightseeingRenderer({ step }: RendererProps<SightseeingData>) {
  const { values, j, bestIdx, best, ans, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === j) return "current";
    if (i === bestIdx) return "pivot";
    return "default";
  };

  const topLabel = (i: number) => (i === bestIdx ? "best i" : i === j ? "j" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={values} roleFor={roleFor} topLabel={topLabel} showIndex cellWidth="w-12" />

      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border border-role-pivot px-3 py-1">best (values[i]+i) = <b className="tabular-nums">{best}</b></span>
        <span className="rounded-md border px-3 py-1">answer = <b className="tabular-nums">{answer ?? (ans === -Infinity ? "—" : ans)}</b></span>
      </div>

      <Legend items={[{ role: "pivot", label: "Best left spot i" }, { role: "current", label: "Right spot j" }]} />
    </div>
  );
}
