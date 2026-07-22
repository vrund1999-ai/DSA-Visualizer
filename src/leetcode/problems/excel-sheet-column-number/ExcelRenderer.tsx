import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { ExcelData } from "./algorithm";

export function ExcelRenderer({ step }: RendererProps<ExcelData>) {
  const { chars, i, result } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-6">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Running value</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2.5 py-1 font-semibold tabular-nums text-primary">{result}</span>
      </div>

      <ArrayCells values={chars} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} showIndex={false} />
      <p className="text-center text-xs text-muted-foreground">Each letter is a base-26 digit (A=1 … Z=26).</p>

      <Legend items={[{ role: "current", label: "Current digit" }]} />
    </div>
  );
}
