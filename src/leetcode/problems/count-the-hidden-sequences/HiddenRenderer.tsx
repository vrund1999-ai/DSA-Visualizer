import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { HiddenData } from "./algorithm";

export function HiddenRenderer({ step }: RendererProps<HiddenData>) {
  const { differences, lower, upper, prefix, idx, min, max, span, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === idx) return "current";
    if (prefix[i] === max) return "compared";
    if (prefix[i] === min) return "pivot";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">range [{lower}, {upper}]</span>
        <span className="rounded-md border border-role-pivot px-3 py-1">min {min}</span>
        <span className="rounded-md border border-role-compared px-3 py-1">max {max}</span>
        {span !== null && <span className="rounded-md border px-3 py-1">span {span}</span>}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">differences</span>
        <ArrayCells values={differences} roleFor={(i) => (i + 1 === idx ? "current" : "default")} showIndex={false} cellWidth="w-10" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">prefix (relative to x[0])</span>
        <ArrayCells values={prefix} roleFor={roleFor} showIndex={false} cellWidth="w-10" />
      </div>

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">valid hidden sequences = {answer}</div>}

      <Legend items={[{ role: "current", label: "Just added" }, { role: "pivot", label: "Min prefix" }, { role: "compared", label: "Max prefix" }]} />
    </div>
  );
}
