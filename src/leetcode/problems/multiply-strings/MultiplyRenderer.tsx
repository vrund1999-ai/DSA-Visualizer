import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MultiplyData } from "./algorithm";

export function MultiplyRenderer({ step }: RendererProps<MultiplyData>) {
  const { num1, num2, res, i, j, p1, p2, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-3 text-sm">
        <ArrayCells values={num1.split("")} roleFor={(k) => (k === i ? "current" : "default")} showIndex={false} cellWidth="w-9" />
        <span className="text-lg text-muted-foreground">×</span>
        <ArrayCells values={num2.split("")} roleFor={(k) => (k === j ? "compared" : "default")} showIndex={false} cellWidth="w-9" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">result buffer (digit positions)</span>
        <ArrayCells values={res} roleFor={(k) => (k === p2 ? "swapped" : k === p1 ? "active" : "default")} />
      </div>

      {answer !== null && <div className="rounded-md border-2 border-role-visited bg-role-visited/10 px-4 py-2 font-mono text-lg font-semibold">{answer}</div>}

      <Legend items={[{ role: "current", label: "num1[i]" }, { role: "compared", label: "num2[j]" }, { role: "swapped", label: "units pos" }, { role: "active", label: "carry pos" }]} />
    </div>
  );
}
