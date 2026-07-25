import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MaxProductData } from "./algorithm";

export function MaxProductRenderer({ step }: RendererProps<MaxProductData>) {
  const { nums, topThree, twoLow, topValue, lowValue, winner, answer } = step.data;

  const roleFor = (i: number) => {
    const inTop = topThree.includes(i);
    const inLow = twoLow.includes(i);
    if (inTop && winner === "top") return "sorted";
    if (inLow && winner === "low") return "sorted";
    if (inTop) return "current";
    if (inLow) return "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} showIndex cellWidth="w-12" />

      <div className="flex items-center gap-4 text-sm">
        {topValue !== null && <span className={`rounded-md border px-3 py-1 ${winner === "top" ? "border-role-sorted font-semibold" : "border-role-current"}`}>3 largest = {topValue}</span>}
        {lowValue !== null && <span className={`rounded-md border px-3 py-1 ${winner === "low" ? "border-role-sorted font-semibold" : "border-role-compared"}`}>2 smallest × largest = {lowValue}</span>}
      </div>

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">max product = {answer}</div>}

      <Legend items={[{ role: "current", label: "Three largest" }, { role: "compared", label: "Two smallest + largest" }, { role: "sorted", label: "Winning triple" }]} />
    </div>
  );
}
