import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { UnsortedData } from "./algorithm";

export function UnsortedRenderer({ step }: RendererProps<UnsortedData>) {
  const { nums, phase, i, maxSeen, minSeen, right, left, answer } = step.data;

  const roleFor = (idx: number) => {
    if (phase === "done" && answer && answer > 0 && idx >= left && idx <= right) return "sorted";
    if (idx === i) return "current";
    if (phase === "right" && idx === right && right >= 0) return "target";
    if (phase === "left" && idx === left && left < nums.length) return "target";
    return "default";
  };
  const topLabel = (idx: number) => {
    if (idx === left && left < nums.length) return "L";
    if (idx === right && right >= 0) return "R";
    return "";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <ArrayCells values={nums} roleFor={roleFor} topLabel={topLabel} showIndex />

      <div className="flex items-center gap-3 text-sm">
        {phase === "right" && <span className="rounded-md border px-3 py-1">running max = {maxSeen === -Infinity ? "−∞" : maxSeen}</span>}
        {phase === "left" && <span className="rounded-md border px-3 py-1">running min = {minSeen === Infinity ? "∞" : minSeen}</span>}
        <span className="rounded-md border px-3 py-1">length = <b className="tabular-nums">{answer ?? "…"}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Scanning" }, { role: "target", label: "Boundary" }, { role: "sorted", label: "Unsorted window" }]} />
    </div>
  );
}
