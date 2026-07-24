import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { PeakIndexData } from "./algorithm";

export function PeakIndexRenderer({ step }: RendererProps<PeakIndexData>) {
  const { arr, lo, hi, mid, peak } = step.data;

  const roleFor = (i: number) => {
    if (i === peak) return "target";
    if (i === mid) return "current";
    if (i === lo || i === hi) return "compared";
    if (i < lo || i > hi) return "default";
    return "active";
  };

  const topLabel = (i: number) => {
    const parts: string[] = [];
    if (i === lo) parts.push("lo");
    if (i === hi) parts.push("hi");
    if (i === mid) parts.push("mid");
    return parts.join("/");
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={arr} roleFor={roleFor} topLabel={topLabel} />
      <Legend items={[{ role: "active", label: "Search window" }, { role: "compared", label: "lo / hi" }, { role: "current", label: "mid" }, { role: "target", label: "Peak" }]} />
    </div>
  );
}
