import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ApplyOpsData } from "./algorithm";

export function ApplyOpsRenderer({ step }: RendererProps<ApplyOpsData>) {
  const { nums, phase, i, j, answer } = step.data;

  const roleFor = (idx: number) => {
    if (idx === j && phase === "shift") return "sorted";
    if (idx === i) return "current";
    if (phase === "merge" && idx === (i ?? -2) + 1) return "compared";
    if (nums[idx] === 0) return "default";
    return "active";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="rounded-md border px-3 py-1 text-sm">
        phase: {phase === "merge" ? "merge equal neighbors" : phase === "shift" ? "shift zeros to the end" : "done"}
      </div>

      <ArrayCells values={nums} roleFor={roleFor} topLabel={(idx) => (idx === i ? "i" : idx === j && phase === "shift" ? "j" : "")} showIndex />

      {answer && <div className="rounded-md border px-3 py-1 text-sm">result = [<b className="tabular-nums">{answer.join(", ")}</b>]</div>}

      <Legend items={[{ role: "current", label: "Scanning (i)" }, { role: "compared", label: "Neighbor" }, { role: "sorted", label: "Placed (j)" }, { role: "active", label: "Non-zero" }]} />
    </div>
  );
}
