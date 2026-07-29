import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { GoodIntData } from "./algorithm";

export function GoodIntRenderer({ step }: RendererProps<GoodIntData>) {
  const { num, i, match, best, answer } = step.data;

  const roleFor = (k: number) => {
    if (i !== null && k >= i && k <= i + 2) return match ? "sorted" : "current";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={num.split("")} roleFor={roleFor} showIndex cellWidth="w-9" />

      <div className="rounded-md border px-3 py-1 text-sm">best so far = <b className="font-mono">{best || "(none)"}</b></div>

      {answer !== null && (
        <div className="rounded-md border px-4 py-1.5 text-lg font-bold">{answer === "" ? '"" (none)' : `"${answer}"`}</div>
      )}

      <Legend items={[{ role: "current", label: "Window (not all equal)" }, { role: "sorted", label: "Three identical" }]} />
    </div>
  );
}
