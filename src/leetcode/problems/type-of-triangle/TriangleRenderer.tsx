import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { TriangleData } from "./algorithm";

export function TriangleRenderer({ step }: RendererProps<TriangleData>) {
  const { sorted, valid, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-7">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">sorted sides (a ≤ b ≤ c)</span>
        <ArrayCells values={sorted} roleFor={(i) => (i === 2 ? "compared" : "current")} showIndex={false} cellWidth="w-12" />
      </div>

      {valid !== null && (
        <div className={`rounded-md px-3 py-1 text-sm ${valid ? "border" : "bg-role-compared text-white"}`}>
          {sorted[0]} + {sorted[1]} {valid ? ">" : "≤"} {sorted[2]} → {valid ? "valid" : "degenerate"}
        </div>
      )}

      {answer !== null && (
        <div className={`rounded-md px-5 py-2 text-lg font-bold ${answer === "none" ? "bg-role-compared text-white" : "bg-role-sorted text-white"}`}>
          {answer}
        </div>
      )}

      <Legend items={[{ role: "current", label: "a, b (two smallest)" }, { role: "compared", label: "c (largest)" }]} />
    </div>
  );
}
