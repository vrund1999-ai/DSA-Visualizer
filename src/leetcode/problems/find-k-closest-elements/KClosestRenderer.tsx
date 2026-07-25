import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { KClosestData } from "./algorithm";

export function KClosestRenderer({ step }: RendererProps<KClosestData>) {
  const { arr, x, lo, hi, answer } = step.data;

  const roleFor = (i: number) => {
    if (answer && i >= lo && i < lo + answer.length) return "sorted";
    if (i === lo || i === hi) return "current";
    if (i > lo && i < hi) return "active";
    return "default";
  };

  const topLabel = (i: number) => (i === lo ? "lo" : i === hi ? "hi" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border px-3 py-1 text-sm">target x = <b className="tabular-nums">{x}</b></div>

      <ArrayCells values={arr} roleFor={roleFor} topLabel={topLabel} showIndex cellWidth="w-11" />

      {answer && (
        <div className="rounded-md border px-3 py-1 text-sm font-semibold">
          k closest = [{answer.join(", ")}]
        </div>
      )}

      <Legend items={[{ role: "current", label: "Window ends" }, { role: "active", label: "Inside window" }, { role: "sorted", label: "Final answer" }]} />
    </div>
  );
}
